import React, {memo} from "react";
import {VictoryChart, VictoryLine, VictoryTheme} from "victory-native";


interface StockLineChartProps {
    stock: IStock;
    symbol: ISymbol;
    historicalData: number[];
}

const replaceRobotoWithSystemFont = (obj: any) => {
    const keys = Object.keys(obj);
    keys.forEach(function(key) {
        const value = obj[key];
        if (key === 'fontFamily') {
            obj[key] = obj[key].replace("'Roboto',", "'System',");
        }
        if (typeof value === 'object') {
            replaceRobotoWithSystemFont(obj[key]);
        }
    });
    return obj;
};

const themeWithSystemFont = replaceRobotoWithSystemFont({...VictoryTheme.material});

const StockLineChart: React.FC<StockLineChartProps> = props => {
    return <VictoryChart
        theme={themeWithSystemFont}
        height={270}
    >
        <VictoryLine
            style={{
                data: { stroke: "#E9563E" },
                parent: { border: "1px solid #ccc"}
            }}
            interpolation="natural"
            data={props.historicalData}
        />
    </VictoryChart>;
};

export default memo(StockLineChart);
