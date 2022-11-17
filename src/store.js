// la mia key API  ---->  6db07583fc025247bca397776572d0c2



// https://api.themoviedb.org/3/search/movie?api_key=   &language=en-US&query=   &page=1&include_adult=false  ---> movie

// https://api.themoviedb.org/3/search/multi?api_key=   &language=en-US&query=   &page=1&include_adult=false  --->movie  +  tv-show

import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
    error: null,
    movies: null,
    MovieToSearch: 'spiderman',
    // Vote: Math.ceil(this.movies.vote_average / 2),
    MyKey: '6db07583fc025247bca397776572d0c2',
    API_URL_MOVIE: 'https://api.themoviedb.org/3/search/movie?api_key=',
    API_URL_ALL_SHOW: 'https://api.themoviedb.org/3/search/movie?api_key=',
    API_URL_IMG: 'https://image.tmdb.org/t/p/w342',
    callApi(url) {
        axios.get(url)
            .then(response => {
                // console.log(response);
                this.movies = response.data.results


            }).catch(err => {
                console.error(err.message);

            })
    }, SearchForMovie() {

        if (store.MovieToSearch === '') {
            return console.log('Non hai inserito nessun parametro di ricerca!');
        }
        // console.log(store.MovieToSearch);
        const url = `${store.API_URL_ALL_SHOW + store.MyKey}&language=en-US&query=${store.MovieToSearch}+&page=1&include_adult=false`
        // console.log(url);
        store.callApi(url)


    },
    VoteCeil(vote) {
        return Math.ceil(vote / 2)

    }
},
)