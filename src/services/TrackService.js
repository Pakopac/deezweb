import axios from 'axios'

const API_ENDPOINT = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search'

export default {
    fetchAll(q,order) {
        console.log(`${API_ENDPOINT}/?q=${q}&order=${order}`)
        return axios.get(`${API_ENDPOINT}/?q=${q}&order=${order}`)
            .then(response => response.data)
            .then(response => {
                if (response.error === 1){
                    return Promise.reject(response)
                } else {
                    return Promise.resolve(response)
                }
            })
    }
}
