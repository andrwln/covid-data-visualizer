import React from 'react';
import LocationSummary from './LocationSummary';
import { LocationsContainer, LocationContainer } from '../styles';

function Locations({ locations }) {
    return (
        <LocationsContainer>
            {locations.map((location, idx) => {
                return (
                    <LocationContainer key={ `location-${idx}` }>
                        <LocationSummary location={ location } />
                    </LocationContainer>
                );
            })}
        </LocationsContainer>
    );
}

export default Locations;
