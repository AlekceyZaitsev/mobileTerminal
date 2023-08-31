import {FC, useState} from "react";
import MainPage from "./main/MainPage";
import {OperatorsContext} from "../src/context/context";
import {dataOperators} from "../src/context/dataOperators/dataOperators";
import {operatorsData} from "../src/interface/interfaces";
import Global from "../src/styles/Global";

const Index: FC = () => {
    const [data, setData] = useState<operatorsData[]>(dataOperators)
    return (
        <>
            <Global></Global>
                <OperatorsContext.Provider value={{data: data, fc: setData}}>
                    <MainPage/>
                </OperatorsContext.Provider>
        </>
    );
};

export default Index;