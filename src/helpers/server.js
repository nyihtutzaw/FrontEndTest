import axios from 'axios';

const address="https://reqres.in/api/";


export const postData = async (url,data)  => {
        let response=axios.post(address+url,data);
        return response;
}