import styled from 'styled-components';

export const SummaryContainer = styled.div.attrs(() => (({
    className: 'Styled-SummaryContainer',
})))`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LocationsContainer = styled.div.attrs(() => (({
    className: 'Styled-LocationsContainer',
})))`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const LocationContainer = styled.div.attrs(() => (({
    className: 'Styled-LocationContainer',
})))`
    width: 200px;
    padding: 10px;
`;