import React from 'react';
import styled from 'styled-components';

function CountriesTable({ countries }) {
    return (
        <StyledTable>
            <StyledHeaderRow>
                <th className='country'>Country</th>
                <th>Confirmed</th>
                <th>Deaths</th>
                <th>Recovered</th>
            </StyledHeaderRow>
            {countries.map((country, idx) => {
                return (
                    <tr key={ `country-row-${idx}` }>
                        <td className='country'>{country.countryregion}</td>
                        <td>{typeof country.confirmed === 'number' ? country.confirmed.toLocaleString() : 'N/A'}</td>
                        <td>{typeof country.deaths === 'number' ? country.deaths.toLocaleString() : 'N/A'}</td>
                        <td>{typeof country.recovered === 'number' ? country.recovered.toLocaleString() : 'N/A'}</td>
                    </tr>
                );
            })}
        </StyledTable>
    );
}

const StyledTable = styled.table.attrs(() => ({
    className: 'Styled-Table',
}))`
    margin: 25px;
    border: 1px solid black;
    /* border-spacing: 1px solid black; */
    border-collapse: collapse;
    
    td, th {
        border: 1px solid black;
        padding: 10px;
        text-align: left;
        
        &:not(.country) {
            width: 100px;
        }
    }
`;

const StyledHeaderRow = styled.tr.attrs(() => ({
    className: 'Styled-HeaderRow',
}))`
    background-color: #a8325e;
    color: white;
`;


export default CountriesTable;
