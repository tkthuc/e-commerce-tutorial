import axios from 'axios';


export default {
    login: ({email, password}) => {
        return axios.post("/login", {email, password});
    },
    signup: ({email, username, password}) => {
        return axios.post("/user",{email, username, password} );
    }
}