import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';

const LineChart = ({chartData, chartLabel, name}) => {
    const { labels, data } = chartData;

    useEffect(() => {
        const dataSet = {
            labels,
            datasets: [
                {
                    label: chartLabel,
                    fillColor: 'rgba(220,220,220,0.2)',
                    strokeColor: 'rgba(220,220,220,1)',
                    pointColor: 'rgba(220,220,220,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data,
                },
                // {
                //     label: 'My Second dataset',
                //     fillColor: 'rgba(151,187,205,0.2)',
                //     strokeColor: 'rgba(151,187,205,1)',
                //     pointColor: 'rgba(151,187,205,1)',
                //     pointStrokeColor: '#fff',
                //     pointHighlightFill: '#fff',
                //     pointHighlightStroke: 'rgba(151,187,205,1)',
                //     data: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
                // },
            ],
        };
        console.log('dataset: ', dataSet);
        const ctx = document.getElementById(`${name}-line-chart`);
        const lineChart = new Chart(ctx, {
            type: 'line',
            data: dataSet,
            options: {
                responsive: false,
                maintainAspectRatio: false,
            },
        });
    }, []);
    return (
        <canvas id={ `${name}-line-chart` } width='1000' height='500' />
    );
};

export default LineChart;
