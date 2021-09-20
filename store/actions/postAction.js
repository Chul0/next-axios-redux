import axios from 'axios'
import * as types from '../types'

// export const fetchposts = () => async dispatch => {
//     dispatch({
//         type: types.GET_POSTS,
//         payload: ['1st post', '2nd posts', '3rd posts']
//     })
// }

export function fetchposts() {
    return function(dispatch) {
        return axios.get("http://myapi-profstream.herokuapp.com/api/19fc0e/books")
        .then(({ data }) => {
            dispatch(setBooks([data])); //store data in an array []
        })
    }
}

function setBooks(data) {
    return {
        type: types.GET_POSTS,
        payload: data
    }
}