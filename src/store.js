// la mia key API  ---->  6db07583fc025247bca397776572d0c2



// https://api.themoviedb.org/3/search/movie?api_key=   &language=en-US&query=   &page=1&include_adult=false  ---> movie

// https://api.themoviedb.org/3/search/multi?api_key=   &language=en-US&query=   &page=1&include_adult=false  --->movie  +  tv-show

import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
    error: null,
    movies: null,
    shows: null,
    isVisible: false,
    MovieToSearch: '',
    MyKey: '6db07583fc025247bca397776572d0c2',
    API_URL_MOVIE: 'https://api.themoviedb.org/3/search/movie?api_key=',
    API_URL_SERIES: ' https://api.themoviedb.org/3/search/tv?api_key=',
    API_URL_IMG: 'https://image.tmdb.org/t/p/w342',
    callApi(url_movie, url_tv) {
        Promise.all([url_movie, url_tv]).then(response => {
            console.log(response);
            this.movies = response[0].data.results
            this.shows = response[1].data.results
            console.log(this.movies, this.tvShows);
        });
    }, searchForMovie() {
        if (store.MovieToSearch === '') {
            console.log('Non hai inserito nessun parametro di ricerca!');
            return store.isVisible = false
        }
        const API_URL_MOVIE = `${store.API_URL_MOVIE + store.MyKey}&query=${store.MovieToSearch}+&page=1&include_adult=false`
        const API_URL_SERIES = `${store.API_URL_SERIES + store.MyKey}&query=${store.MovieToSearch}+&page=1&include_adult=false`
        const Allmovies = axios.get(API_URL_MOVIE);
        const AllTv = axios.get(API_URL_SERIES);
        store.callApi(Allmovies, AllTv)
        store.isVisible = true
        setTimeout(function () {
            console.log('fuzione asincrona');
            window.scrollTo(0, 550)
        }, 300)

    },
    isLang(lang) {
        if (lang === 'en') {
            return lang = '🇬🇧'
        } else if (lang === 'it') {
            return lang = '🇮🇹'
        } else if (lang === 'es') {
            return lang = '🇪🇸'
        } else if (lang === 'fr') {
            return lang = '🇲🇫'
        } else if (lang === 'de') {
            return lang = '🇩🇪'
        }
        return lang
    },
    voteCeil(vote) {
        return Math.ceil(vote / 2)

    }
},
)