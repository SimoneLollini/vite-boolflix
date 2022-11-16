// la mia key API  ---->  6db07583fc025247bca397776572d0c2

// https://api.themoviedb.org/3/search/movie?api_key=   &language=en-US&query=   &page=1&include_adult=false  

import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
    error: null,
    MovieToSearch: '',
    MyKey: '6db07583fc025247bca397776572d0c2',
    API_URL: `https://api.themoviedb.org/3/search/movie?api_key=`,
    callApi(url) {
        axios.get(url)
            .then(response => {
                console.log(response);

            }).catch(err => {
                console.error(err.message);

            })

    }
})