import React, {memo} from "react";
import {VictoryChart, VictoryLine, VictoryTheme} from "victory-native";


export interface Props {
    stock: object;
    symbol: object;
    style?: object;
    historicalData: any;
}

const StockLineChart = (props: Props) => {
    return <VictoryChart
        theme={VictoryTheme.material}
        height={290}
    >
        <VictoryLine
            style={{
                data: { stroke: "#E9563E" },
                parent: { border: "1px solid #ccc"}
            }}
            interpolation="natural"
            data={props.historicalData}
        />
    </VictoryChart>

};

export default memo(StockLineChart);




