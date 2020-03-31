import sortBy from '../utils/sorter';

export function handleAllCountriesData(data) {
    // receive api response and do the following:
    // 1) default sort by confirmed count
    // 2) add up and create totals numbers
    // 3) add fatality rate and recovery rate
    const sortedData = sortBy(data, { key: 'confirmed', descending: true });
    let total_confirmed = 0;
    let total_deaths = 0;
    let total_recovered = 0;

    sortedData.forEach(country => {
        const { confirmed, deaths, recovered } = country;

        total_confirmed = confirmed ? total_confirmed + confirmed : total_confirmed;
        total_deaths = deaths ? total_deaths + deaths : total_deaths;
        total_recovered = recovered ? total_recovered + recovered : total_recovered;

        country.fatality_rate = deaths ? (deaths * 100 / confirmed) : 0;
        country.recovery_rate = recovered ? (recovered * 100 / confirmed) : 0;
    });

    return {
        totals: {
            confirmed: total_confirmed,
            deaths: total_deaths,
            recovered: total_recovered,
        },
        countries: sortedData,
    };
}