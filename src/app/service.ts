import axios from "axios";

const optionsRequest = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_API_KEY
    }
}

export interface responseReleases {
    data: {
        page: number
        results: object[]
    }
}

export interface responseGenres {
    data: {
        genres: object[]
    }
}

const apiService = {

    releases: async () => {
        try {
            const responseReleases: responseReleases = await axios.get("https://api.themoviedb.org/3/trending/all/day", optionsRequest)
            const releases = responseReleases?.data?.results;
            return releases
        } catch (error) {
            console.log(error)
        }
    },

    genres: async () => {
        try {
            const response: responseGenres = await axios.get(`https://api.themoviedb.org/3/genre/movie/list`, optionsRequest)
            const data = response?.data?.genres;
            return data
        } catch (error) {
            console.log(error)
        }
    },
}

export default apiService;