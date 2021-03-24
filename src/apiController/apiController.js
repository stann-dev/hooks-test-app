import * as apiConstants from "./../constants/apiConstants";

export const api = {

    options: {
        headers: {}
    },

    get: async (path = '/', query = {s: ''}) => {
        const parsedQuery = JSON.stringify(query)
            .replaceAll('{', '&')
            .replaceAll('}', '')
            .replaceAll(':', '=')
            .replaceAll(',', '&')
            .replaceAll('"', '');

        const apiKey = `?apikey=${apiConstants.API_KEY}`;

        const response = await fetch(apiConstants.API_URL + path + apiKey + parsedQuery,
            {
                method: 'GET',
                ...api.options
            });
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`HTTP Error: ${response.status}`);
        }
    }

}

