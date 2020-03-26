export function generateLineChartData(timeseries) {
    const dates = Object.keys(timeseries);
    return {
        confirmed: {
            labels: dates,
            data: dates.map(date => timeseries[date].confirmed),
        },
        deaths: {
            labels: dates,
            data: dates.map(date => timeseries[date].deaths),
        },
        recovered: {
            labels: dates,
            data: dates.map(date => timeseries[date].recovered),
        },
    };
}
