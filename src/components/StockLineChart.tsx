import React, {memo} from "react";
import {VictoryChart, VictoryLine, VictoryTheme} from "victory-native";
import {replaceRobotoWithSystemFont} from "../utils";
import colors from "../constants/colors";

const themeWithSystemFont = replaceRobotoWithSystemFont({...VictoryTheme.material});

interface StockLineChartProps {
    stock: IStock;
    symbol: ISymbol;
    historicalData: number[];
}

const StockLineChart: React.FC<StockLineChartProps> = props => {
    return <VictoryChart
        theme={themeWithSystemFont}
        height={300}
    >
        <VictoryLine
            style={{
                data: { stroke: colors.primary },
                parent: { border: "1px solid #ccc"}
            }}
            interpolation="natural"
            data={props.historicalData}
        />
    </VictoryChart>;
};

export default memo(StockLineChart);
