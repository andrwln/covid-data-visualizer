import React from 'react';

function TotalsSummary({ totals }) {
    if (totals.recovered !== 0 && !totals.recovered) debugger;
    return totals && (
        <div>
            <div>Confirmed cases: {totals.confirmed ? totals.confirmed.toLocaleString() : 0}</div>
            <div>Total deaths: {totals.deaths ? totals.deaths.toLocaleString() : 0}</div>
            <div>Total recovered: {totals.recovered ? totals.recovered.toLocaleString() : 0}</div>
        </div>
    );
}

export default TotalsSummary;
