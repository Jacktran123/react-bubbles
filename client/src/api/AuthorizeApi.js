import axios from 'axios';

const AuthorizeApi=()=>{
    const token=localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:5000',
        headers:{
            Authorization: token
        }
    })
}

export default AuthorizeApi;