import axios from 'axios';


export default class GitHub {
    constructor() {
        const auth_token = `Bearer 591ee9ad55a042b8a823e67d9f9bf2eac36b4898`
        axios.defaults.headers.common['Authorization'] = auth_token;
    }
    getRepos(username) {
        return axios.get(`https://api.github.com/users/${username}/repos`)
    }

}

export const github = new GitHub()