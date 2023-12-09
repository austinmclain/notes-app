import axios from 'axios';
import url from './url';

export default async function fetchNotes(author) {
    try {
        const res = await axios.get(`${url}/notes`, {
            params: {
                author: author
            }
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
}
