import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";

const LineChart = () => {

    const [state, setState] = useState({
        series: [{
            name: "Desktops",
            data: [50, 71, 35, 51, 49, 62, 69, 91, 75]
        }],
        options: {
            chart: {
                id: 'realtime',
                type: 'line',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            legend: {
                show: false
              },
            markers: {
                size: 0
            },
            xaxis: {
                labels: {
                    show: false
                }
            },
            yaxis: {
                min: 0,
                max: 150
            }
        }

    });

    // const addData = () => {
    //     var newData = [];
    //     var number = getRndInteger(40, 75);
    //     state.series.forEach(s => {
    //         const data = s.data.map((num) => {
    //             return num;
    //         });
    //         data.push(number);
    //         newData.push({ data: data, name: s.name });
    //     });
    //     setState({
    //         ...state,
    //         series: newData
    //     });
    // }

    // function getRndInteger(min, max) {
    //     return Math.floor(Math.random() * (max - min)) + min;
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         addData();
    //     }, 2000);
    // });

    return (
        <Chart options={state.options} series={state.series} type="line" height='100%' />
    );

}

export default LineChart;