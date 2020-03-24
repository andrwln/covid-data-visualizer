import React from 'react';
import TotalsSummary from './TotalsSummary';

function LocationSummary({ location }) {
    return (
        <div>
            <br />
            <div>{location.countryregion}</div>
            <TotalsSummary totals={location} />
            {location.countrycode && <a href={`/location/${location.countrycode.iso2}`}>See details</a>}
        </div>
    );
}

export default LocationSummary;
