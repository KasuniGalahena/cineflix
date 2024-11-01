import axios from "axios";

/* Types */
export interface ListMovieParams {
    limit ?: number,
    page ?: number,
    quality ?: string,
    minimum_rating ?: number,
    query_term ?: string,
    genre ?: string,
    sort_by ?: string,
    order_by ?: string,
    with_rt_ratings ?: boolean
}

export interface MovieDetailsParams {
    movie_id : number,
    with_images ?: boolean,
    with_cast ?: boolean
}

export interface MovieSuggestionsParams {
    movie_id : number
}

const cineFlixApi = axios.create({
    baseURL: 'https://yts.mx/api/v2'
})

export async function listMovies(params?: ListMovieParams) {
    return cineFlixApi.get('/list_movies.json', {
        params
    })
}

export async function UpcomingMovies() {
    return cineFlixApi.get('/list_movies.json?quality=3D')
}

export async function movieDetails(params ?: MovieDetailsParams) {
    return cineFlixApi.get(`/movie_details.json`, {
        params
    })
}

export async function movieSuggestions(params : MovieSuggestionsParams) {
    return cineFlixApi.get(`/movie_suggestions.json`)
}
