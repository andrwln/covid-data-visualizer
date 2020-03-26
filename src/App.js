import React, { useEffect, useState } from 'react';
import TotalsSummary from './components/TotalsSummary';
import Locations from './components/Locations';
import CountriesTable from './components/CountriesTable';
import covidAPI from './api';
import { SummaryContainer } from './styles';

function App() {
    const [countryData, setCountryData] = useState({});
    useEffect(() => {
        async function fetchCountryData() {
            const data = await covidAPI.fetchDataAllCountries();
            console.log('Country data : ', data);
            setCountryData(data);
        }
        fetchCountryData();
    }, []);
    return countryData.length ? (
        <div className='container'>
            <SummaryContainer>
                Totals
                {/* <TotalsSummary totals={latest} /> */}
            </SummaryContainer>
            {/* <Locations locations={ countryData } /> */}
            <CountriesTable countries={ countryData } />
        </div>
    ) : null;
}

export default App;
