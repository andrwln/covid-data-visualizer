import React, { useState, useEffect } from 'react';
import LocationSummary from './LocationSummary';
import LineChart from './LineChart';
import covidAPI from '../api';

const Location = (props) => {
    const countryCode = props.match.params.id;
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchLocationData() {
          const data = await covidAPI.fetchDataByCountry(countryCode);
          console.log('single location data" ', data);
          setData(data[0]);
        }
        fetchLocationData();
    }, []);
    return data && (
        <React.Fragment>
            <LocationSummary location={ data } />
            <LineChart name={'confirmed'} />
        </React.Fragment>
    );
}

export default Location;