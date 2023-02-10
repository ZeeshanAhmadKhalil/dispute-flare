import { useTheme } from "@mui/material";
import { Chart } from "react-google-charts";

function LineChart() {

    const {
        palette: {
            chart: {
                line,
                dot,
                gridLine,
            },
            background: {
                light1,
            }
        }
    }: any = useTheme()

    const data = [
        [
            { type: "date" },
            "Average temperature",
            "Dots",
        ],
        [new Date(2014, 1, 1, 18, 0, 0), 200, 200],
        [new Date(2014, 1, 1, 21, 0, 0), 250, 250],
        [new Date(2014, 1, 1, 23, 0, 0), 300, 300],
        [new Date(2014, 1, 2, 2, 0, 0), 350, 350],
        [new Date(2014, 1, 2, 4, 0, 0), 250, 250],
        [new Date(2014, 1, 2, 6, 0, 0), 300, 300],
        [new Date(2014, 1, 2, 8, 0, 0), 350, 350],
    ];

    const options: any = {
        height: 500,
        backgroundColor: {
            fill: 'transparent'
        },
        chartArea: {
            width: '90%',
            height: '70%',
            top: 40,
            // left: 60,
            // right: 16,
            // bottom: 100
        },
        series: {
            0: {
                color: line,
                lineWidth: 2
            },
            1: {
                color: dot,
                lineWidth: 0,
                pointSize: 12
            }
        },
        legend: { position: 'none' },
        hAxis: {
            gridlineColor: gridLine,
            gridlines: {
                count: 7,
            },
            color: 'none',
            baselineColor: 'none',
            textStyle: {
                color: '#8C8C8C',
                fontName: 'Calibri',
                fontSize: 14,
            },
        },
        vAxis: {
            gridlineColor: gridLine,
            gridlines: {
                count: 7,
            },
            color: 'none',
            baselineColor: 'none',
            textStyle: {
                color: '#8C8C8C',
                fontName: 'Calibri',
                fontSize: 14,
                fontDecoration: 'dashed'
            },
        },
    };

    return (
        <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}

export default LineChart
