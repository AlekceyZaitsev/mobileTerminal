import React, {FC, useContext, useState} from 'react';
import {eventInput, operatorsData} from "../../src/interface/interfaces";
import {OperatorsContext} from "../../src/context/context";
import {addNewOperator} from "../../src/utilites/createNewOperator";
import {InputForm} from "../../shared/ui/components/input/inputForm";
import {Title} from "../../shared/ui/components/title/Title";
import {FormMobilePayment} from "../../shared/ui/components/form/FormMobilePayment";
import {LinkOperator} from "../../shared/ui/components/link/LinkOperator";
import {ContainerApp} from "../../src/styles/ContainerApp";
import {FormButton} from "../../shared/ui/components/button/FormButton";

const MainPage: FC = () => {
    const {data, fc} = useContext(OperatorsContext)
    const [createNewOperator, setCreateNewOperator] = useState('')

    return (
            <ContainerApp>
                <FormMobilePayment>
                    <Title>Выберите оператора</Title>
                    <ul>{
                        data.map((items: operatorsData) =>
                            <li key={items.id}>
                                <LinkOperator href={`./operators/${items.name_operator}`}>
                                    {items.name_operator}
                                </LinkOperator>
                            </li>)}
                    </ul>
                    <InputForm type="text" onChange={(e: eventInput) => setCreateNewOperator(e.target.value)}/>
                    <FormButton onClick={() => addNewOperator(data, createNewOperator, fc)}>Добавить</FormButton>
                </FormMobilePayment>
            </ContainerApp>
    );
};

export default MainPage;