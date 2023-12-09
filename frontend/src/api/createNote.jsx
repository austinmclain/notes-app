import axios from 'axios';
import url from './url';

export default async function createNote(author, title, content) {
    try {
        const res = await axios.post(`${url}/new_note`, {
                author: author,
                title: title,
                content: content
            }
        );
        return res.data;
    } catch (err) {
        console.log(err);
    }
}
