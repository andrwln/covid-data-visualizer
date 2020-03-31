import sortBy from '../utils/sorter';
import { handleAllCountriesData } from './dataHandlers';

const covidAPI = {
    baseUrl: 'https://coronavirus-tracker-api.herokuapp.com/v2/',
    _fetch: async (url, headers) => {
        const options = { method: 'GET' };
        if (headers) options.headers = headers;
        const results = await fetch(url, options)
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data;
            })
            .catch(error => {
                console.error('API error: ', error);
            });
        return results;
    },
    fetchDataAllCountries: async function() {
        const url = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true';
        const data = await this._fetch(url);
        console.log('data: ', data);
        return handleAllCountriesData(data);
    },
    fetchDataByCountry: async function(countryCode) {
        // https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=US&onlyCountries=true
        const url = `https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=${countryCode}&onlyCountries=true`;
        const data = await this._fetch(url);
        return data[0];
    },
    fetchTimeSeriesByCountry: async function(countryCode) {
        const url = `https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/timeseries?iso2=${countryCode}&onlyCountries=true`;
        const data = await this._fetch(url);
        return data[0].timeseries;
    },
    // fetchAllLocationsData: async function(withTimelines = false) {
    //     const timeline = withTimelines ? '1' : '0';
    //     const url =
    //         'https://coronavirus-tracker-api.herokuapp.com/v2/locations?timelines=' +
    //         timeline;
    //     const data = await this._fetch(url);
    //     data.locations = sortBy(data.locations, 'confirmed');
    //     return data;
    // },
    // fetchSingleLocationData: async function(id) {
    //     const url =
    //         'https://coronavirus-tracker-api.herokuapp.com/v2/locations/' + id;
    //     const data = await this._fetch(url);
    //     return data.location;
    // },
    // fetchLocationsStatistics: async function() {
    //     const url = 'https://covid-193.p.rapidapi.com/statistics';
    //     const headers = {
    //         'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    //         'x-rapidapi-key': '608b0d4e6dmsh537155dd1bfdad6p1a9e40jsn416e6f54fdb2',
    //     };
    //     return await this._fetch(url, headers);
    // },
};

export default covidAPI;
