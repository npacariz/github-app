import axios from 'axios';


export default class GitHub {
    constructor() {
        const auth_token = `Bearer`
        axios.defaults.headers.common['Authorization'] = auth_token;
    }
    getRepos(username) {
        return axios.get(`https://api.github.com/users/${username}/repos`)
    }
    getProfile(username) {
        return axios.get(` https://api.github.com/users/${username}`)
    }
}

export const github = new GitHub()