import axios from 'axios';
import url from './url';

export default async function isCorrectLoginInfo(username, password) {
    try {
        const res = await axios.get(`${url}/login`, {
            params: {
                username: username,
                password: password
            }
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
}
