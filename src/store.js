// la mia key API  ---->  6db07583fc025247bca397776572d0c2



// https://api.themoviedb.org/3/search/movie?api_key=   &language=en-US&query=   &page=1&include_adult=false  ---> movie

// https://api.themoviedb.org/3/search/multi?api_key=   &language=en-US&query=   &page=1&include_adult=false  --->movie  +  tv-show

import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
    error: null,
    movies: null,
    MovieToSearch: '',
    // Vote: Math.ceil(this.movies.vote_average / 2),
    MyKey: '6db07583fc025247bca397776572d0c2',
    API_URL_MOVIE: 'https://api.themoviedb.org/3/search/movie?api_key=',
    API_URL_SERIES: ' https://api.themoviedb.org/3/search/tv?api_key=',
    API_URL_ALL_SHOW: 'https://api.themoviedb.org/3/search/multi?api_key=',  // --->  mista non ottimale
    API_URL_IMG: 'https://image.tmdb.org/t/p/w342',
    callApi(url) {
        axios.get(url)
            .then(response => {
                // console.log(response);
                this.movies = response.data.results
                console.log(this.movies);

            }).catch(err => {
                console.error(err.message);

            })
    }, SearchForMovie() {
        //dare in pasto a call api api di movie ad api di serie tv
        if (store.MovieToSearch === '') {
            return console.log('Non hai inserito nessun parametro di ricerca!');
        }
        // console.log(store.MovieToSearch);

        // const API_URL_MOVIE = `${store.API_URL_MOVIE + store.MyKey}&query=${store.MovieToSearch}+&page=1&include_adult=false`
        // const API_URL_SERIES = `${store.API_URL_SERIES + store.MyKey}&query=${store.MovieToSearch}+&page=1&include_adult=false`
        const API_URL_ALL_SHOW = `${store.API_URL_ALL_SHOW + store.MyKey}&query=${store.MovieToSearch}+&page=1&include_adult=false`
        // console.log(url);
        //store.callApi(API_URL_MOVIE)
        // store.callApi(API_URL_SERIES)
        store.callApi(API_URL_ALL_SHOW)

    },
    VoteCeil(vote) {
        return Math.ceil(vote / 2)

    }
},
)