import React, { useState, useEffect } from 'react';
import LocationSummary from './LocationSummary';
import LineChart from './LineChart';
import covidAPI from '../api';
import { generateLineChartData } from '../utils/chartUtils';

const Location = (props) => {
    const countryCode = props.match.params.id;
    const [locationData, setLocationData] = useState(null);
    const [chartData, setChartData] = useState(null);
    useEffect(() => {
        async function fetchLocationData() {
            const data = await covidAPI.fetchDataByCountry(countryCode);
            console.log('single location data" ', data);
            setLocationData(data);
        }
        async function fetchHistoricalChartData() {
            const data = await covidAPI.fetchTimeSeriesByCountry(countryCode);
            console.log('chart data: ', data);
            setChartData(generateLineChartData(data));
        }
        fetchLocationData();
        fetchHistoricalChartData();
    }, []);
    return locationData && (
        <>
            <LocationSummary location={ locationData } />
            {chartData && (
                <>
                    <LineChart chartData={ chartData.confirmed } chartLabel='Confirmed cases' name='confirmed' />
                    <LineChart chartData={ chartData.deaths } chartLabel='Deceased cases' name='deaths' />
                    <LineChart chartData={ chartData.recovered } chartLabel='Recovered cases' name='recovered' />
                </>
            )}
        </>
    );
};

export default Location;