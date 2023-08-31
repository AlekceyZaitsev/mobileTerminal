import React, {Dispatch, SetStateAction} from "react";

export type eventInput = React.ChangeEvent<HTMLInputElement>
export type dispatchFunction<T> = Dispatch<SetStateAction<T>>

export interface operatorsData {
    id: number,
    name_operator: string
}

export interface concatHookAndData {
    data: operatorsData[],
    fc: dispatchFunction<operatorsData[]>
}
