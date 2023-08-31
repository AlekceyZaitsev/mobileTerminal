import React from "react";
import {concatHookAndData} from "../interface/interfaces";
import {dataOperators} from "./dataOperators/dataOperators";
export const OperatorsContext = React.createContext<concatHookAndData>({data: dataOperators, fc: undefined})
