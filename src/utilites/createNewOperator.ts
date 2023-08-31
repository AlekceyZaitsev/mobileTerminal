import {dispatchFunction, operatorsData} from "../interface/interfaces";

export const addNewOperator = (
    currentArray: operatorsData[],
    operatorBrand: string,
    fc: dispatchFunction<operatorsData[]>
    ) => {

    if (operatorBrand.length && operatorBrand.trim()) {
        const newOperator: operatorsData = {
            id: Date.now(),
            name_operator: operatorBrand
        }

        fc([...currentArray, newOperator])

    } else {
        return -1
    }
}