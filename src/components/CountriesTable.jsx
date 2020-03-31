import React, { useState } from 'react';
import styled from 'styled-components';
import { getRateAsPercentage } from '../utils';
import sortBy from '../utils/sorter';

function CountriesTable({ countries }) {
    const [ tableData, setTableData ] = useState(countries);
    const [ sortOptions, setSortOptions ] = useState({ key: 'confirmed', descending: true });
    function handleClickColumnHeader(key) {
        // handle click of table column header
        // sorts and returns data to table
        const sortOpts = getSortOptions(key);

        const sorted = sortBy(tableData, sortOpts);
        setTableData([...sorted]);
        setSortOptions(sortOpts);
    }
    function getSortOptions(key) {
        return {
            key,
            descending: sortOptions.key === key ? !sortOptions.descending : true,
        };
    }
    console.log('tableData: ', tableData);
    return (
        <StyledTable>
            <StyledHeaderRow>
                <th className='country' onClick={ () => handleClickColumnHeader('countryregion') }>Country</th>
                <th onClick={ () => handleClickColumnHeader('confirmed') }>Confirmed</th>
                <th onClick={ () => handleClickColumnHeader('deaths') }>Deaths</th>
                <th onClick={ () => handleClickColumnHeader('fatality_rate') }>Deaths (%)</th>
                <th onClick={ () => handleClickColumnHeader('recovered') }>Recovered</th>
                <th onClick={ () => handleClickColumnHeader('recovery_rate') }>Recovered (%)</th>
            </StyledHeaderRow>
            {tableData.map((country, idx) => {
                return (
                    <StyledItemRow key={ `country-row-${idx}` } rowIndex={ idx }>
                        <td className='country'>{country.countryregion}</td>
                        <td>{typeof country.confirmed === 'number' ? country.confirmed.toLocaleString() : 'N/A'}</td>
                        <td>{typeof country.deaths === 'number' ? country.deaths.toLocaleString() : 'N/A'}</td>
                        <td className='fatalityRate'>{getRateAsPercentage(country.fatality_rate)}</td>
                        <td>{typeof country.recovered === 'number' ? country.recovered.toLocaleString() : 'N/A'}</td>
                        <td className='recoveryRate'>{getRateAsPercentage(country.recovery_rate)}</td>
                    </StyledItemRow>
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
    border-collapse: collapse;
    
    td, th {
        border: 1px solid black;
        padding: 10px;
        text-align: left;
        
        &:not(.country) {
            width: 150px;
        }
    }
    .recoveryRate {
        color: #26a356;
    }
    .fatalityRate {
        color: #de302a;
    }
`;

const StyledItemRow = styled.tr.attrs(() => ({
    className: 'Styled-ItemRow',
}))`
    background-color: ${props => props.rowIndex % 2 !== 0 && '#d9d9d9' };
`;

const StyledHeaderRow = styled.tr.attrs(() => ({
    className: 'Styled-HeaderRow',
}))`
    background-color: #a8325e;
    color: white;
    cursor: pointer;
    th {
        &:hover {
            background-color: #820835
        }
    }
`;


export default CountriesTable;
