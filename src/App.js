import React, { useEffect, useState } from 'react';
import TotalsSummary from './components/TotalsSummary';
import Locations from './components/Locations';
import CountriesTable from './components/CountriesTable';
import covidAPI from './api';
import { SummaryContainer } from './styles';

function App() {
    const [countryData, setCountryData] = useState(null);
    useEffect(() => {
        async function fetchCountryData() {
            const data = await covidAPI.fetchDataAllCountries();
            console.log('Country data : ', data);
            setCountryData(data);
        }
        fetchCountryData();
    }, []);
    return countryData && countryData.countries ? (
        <div className='container'>
            <SummaryContainer>
                Worldwide Totals
                <TotalsSummary totals={ countryData.totals } />
            </SummaryContainer>
            <CountriesTable countries={ countryData.countries } />
            <Locations locations={ countryData.countries } />
        </div>
    ) : null;
}

export default App;
