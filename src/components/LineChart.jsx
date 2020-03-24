import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';

const LineChart = ({data, name}) => {
    const [chart, setChart] = useState(null);
    useEffect(() => {
        const ctx = document.getElementById(`${name}-line-chart`);
        const lineChart = new Chart(ctx, {});
        setChart(lineChart);
        console.log(lineChart);
    }, []);
    return (
        <canvas id={`${name}-line-chart`} width='400' height='400'></canvas>
    );
};

export default LineChart;
