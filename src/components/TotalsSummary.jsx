import React from 'react';

function TotalsSummary({ totals }) {
    return (
        <div>
            <div>Confirmed cases: {totals.confirmed.toLocaleString()}</div>
            <div>Total deaths: {totals.deaths.toLocaleString()}</div>
            <div>Total recovered: {totals.recovered.toLocaleString()}</div>
        </div>
    );
}

export default TotalsSummary;
