import {useRouter} from "next/router";
import {FC, useState} from "react";
import {Formik, Form} from "formik";
import {validationShema} from "../../src/validationSchemas/ValidationSchema";
import Link from "next/link";
import {QueryStatus} from "../../src/constans/constans";
import {InputForm} from "../../shared/ui/components/input/inputForm";
import {Loader} from "../../shared/ui/components/loader/loader";
import {FormMobilePayment} from "../../shared/ui/components/form/FormMobilePayment";
import {Title} from "../../shared/ui/components/title/Title";
import {ContainerApp} from "../../src/styles/ContainerApp";
import {FormButton} from "../../shared/ui/components/button/FormButton";
import {SuccessMessage} from "../../shared/ui/components/message/success/SuccessMessage";
import {MessageError} from "../../shared/ui/components/message/error/MessageError";

const OperatorItem: FC = () => {
    const redirect = useRouter();
    const {query} = useRouter()

    const [isDataSended, setIsDataSended] = useState<QueryStatus | undefined>();

    const isQueryFulfilled = isDataSended === QueryStatus.FULFILLED;
    const isQueryRejected = isDataSended === QueryStatus.REJECTED;
    const isQueryPending = isDataSended === QueryStatus.PENDING;

    return (
        <ContainerApp>
            <FormMobilePayment>
            <Formik
                initialValues={{ phoneInput: "", payInput: "" }}
                validateOnBlur
                onSubmit={() => {
                    setIsDataSended(QueryStatus.PENDING);
                    setTimeout(() => {
                        if (Math.floor(Math.random() * 2)) {
                            setIsDataSended(QueryStatus.FULFILLED);
                            setTimeout(() => redirect.push("/"), 2000);
                        } else {
                            setIsDataSended(QueryStatus.REJECTED);
                        }
                    }, 1000);
                }}
                validationSchema={validationShema}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isValid,
                  }) =>
                    !isQueryPending ? (
                        <Form>
                            <Title>{query.operatorItem}</Title>
                            <InputForm
                                mask={"+7 \\ 999 999 99 99"}
                                maskChar="_"
                                alwaysShowMask={true}
                                type="tel"
                                name="phoneInput"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phoneInput}
                                placeholder="Введите номер телефона"
                            />
                            {touched.phoneInput && errors.phoneInput && (
                                <MessageError>{errors.phoneInput}</MessageError>
                            )}
                            <InputForm
                                type="text"
                                name="payInput"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.payInput}
                                placeholder="Введите сумму"
                            />
                            {touched.payInput && errors.payInput && (
                                <MessageError>{errors.payInput}</MessageError>
                            )}
                            <FormButton
                                type="submit"
                                disabled={!isValid || isQueryFulfilled}
                                onClick={() => handleSubmit}
                            >
                                Отправить
                            </FormButton>
                            <Link href="/">
                                <FormButton disabled={isQueryFulfilled}>Назад</FormButton>
                            </Link>
                            {isQueryFulfilled && (
                                <SuccessMessage>Пополнение успешно выполнено!</SuccessMessage>
                            )}
                            {isQueryRejected && <MessageError>Ошибка отправки данных!</MessageError>}
                        </Form>
                    ) : (
                        <Loader/>
                    )
                }
            </Formik>
        </FormMobilePayment>
        </ContainerApp>
    );
};

export default OperatorItem;