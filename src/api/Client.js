import axios from "axios";
const client = axios.create({
    baseUrl: process.env.REACT_APP_BASE_URL,
    headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
});


const Login = (payload) => {
    return client.post('login', payload);
}

export const useLogin = (payload) => {

}