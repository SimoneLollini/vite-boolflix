// la mia key API  ---->  6db07583fc025247bca397776572d0c2



// https://api.themoviedb.org/3/search/movie?api_key=   &language=en-US&query=   &page=1&include_adult=false  ---> movie

// https://api.themoviedb.org/3/search/multi?api_key=   &language=en-US&query=   &page=1&include_adult=false  --->movie  +  tv-show

import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
    error: null,
    movies: null,
    MovieToSearch: '',
    MyKey: '6db07583fc025247bca397776572d0c2',
    API_URL_MOVIE: 'https://api.themoviedb.org/3/search/movie?api_key=',
    API_URL_ALL_SHOW: 'https://api.themoviedb.org/3/search/movie?api_key=',
    callApi(url) {
        axios.get(url)
            .then(response => {
                // console.log(response);
                this.movies = response.data.results


            }).catch(err => {
                console.error(err.message);

            })
    }
},
)