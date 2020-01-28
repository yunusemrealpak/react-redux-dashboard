import React, { useState } from 'react';
import Chart from "react-apexcharts";
import { radialBarChartData } from '../state/fake_data';

const RadialBarChart = () => {

    const [state, setState] = useState({
        series: [44, 55, 67, 83],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '18px',
                        },
                        value: {
                            fontSize: '13px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return 249
                            }
                        }
                    }
                },
            },
            colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
            labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
            legend: {
                show: true,
                floating: true,
                fontSize: '12px',
                position: 'right',
                offsetX: 0,
                offsetY: 0,
                labels: {
                    useSeriesColors: true,
                },
                markers: {
                    size: 0
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: {
                    horizontal: 3,
                }
            },
            responsive: [
                {
                    breakpoint: 1440,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }
            ]
        },
    
    
    });

    return (
            <Chart options={state.options} series={state.series} type="radialBar" height='100%'/>
    );

}

export default RadialBarChart;