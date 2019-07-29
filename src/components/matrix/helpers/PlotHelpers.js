import {metricCol} from "../Constants";
import Highcharts from "highcharts";
import {parseInput, precisionControl, setRange} from "./InputHelpers";

export function plot(instance, td, row, col, prop, value, cellProperties) {
    // parameters' purposes: https://handsontable.com/docs/7.1.0/Hooks.html#event:beforeRenderer
    // create the new range
    setRange(instance, row);
    // generate inputs
    let inputs = parseInput(instance.getDataAtCell(row, metricCol), row, col, instance, true);
    inputs = precisionControl(inputs);
    const full_input = [inputs[0], inputs[1], inputs[1], inputs[1], inputs[2]];

    // Rendering for the first time
    // or when rendering the first plot
    if (!(td.hasChildNodes() && cellProperties.hasOwnProperty("chart_instance"))) {
        const chartContainer = document.createElement('div');
        chartContainer.className = 'chart';
        td.appendChild(chartContainer);
    }
    cellProperties.chart_instance = createHCInstance(instance, td, full_input, window.matrixContext.minMetric, window.matrixContext.maxMetric, row);
    return td;
}

function createHCInstance(instance, td, full_input, minMetric, maxMetric) {
    return Highcharts.chart(td, {
        title: {
            text: null
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        tooltip: {
            formatter: function () {
                return `${window.matrixContext.metricName}: ${full_input[(full_input.length - 1) / 2]}<br>
                    CI: {${full_input[0]}, ${full_input[full_input.length - 1]}}
                    `;
            }
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
            }
        },
        chart: {
            type: 'boxplot',
            inverted: true,
            height: 68,
        },
        // dont' forget xAxis and yAxis are inverted - put data in yAxis
        xAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
        },
        yAxis: {
            title: {
                text: null
            },
            endOnTick: true,
            startOnTick: true,
            plotLines: [{
                value: 1,
                color: 'red',
                width: 2,
                label: {
                    align: 'center',
                    style: {
                        color: 'gray'
                    }
                }
            }],
            min: minMetric,
            max: maxMetric,
            resize: {
                enabled: true
            }
        },
        series: [{
            data: [
                full_input
            ]
        }]
    });
}

