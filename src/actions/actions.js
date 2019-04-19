import store from '../store'
import axios from 'axios'

export function getUserData () {
    axios.get('https://api.github.com/users/horadam')
    .then(resp => {
        console.log(resp.data)
        store.dispatch({
            type: 'GET_USER_DATA',
            userData: resp.data
        })
    })
}

export function getRepoData () {
    axios.get('https://api.github.com/users/horadam/repos')
    .then(resp => {
        console.log(resp.data)
        store.dispatch({
            type: 'GET_REPO_DATA',
            repoData: resp.data
        })
    })
}

