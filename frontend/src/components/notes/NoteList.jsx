import fetchNotes from '../../api/fetchNotes';
import { useState, useEffect } from 'react'
import NotePreview from './NotePreview';

export default function NoteList(props) {
    const { author } = props;
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const getNotes = () => {
            fetchNotes(author)
                .then((response) => {
                    setNotes(response);
                })
                .catch(error => console.error(`Error: ${error}`));
        }
        getNotes();
    }, [author]);

    return (
        <div>
            {notes.map((note) => {
                return (
                    <div key={note._id}>
                        <NotePreview title={note.title} content={note.content}/>
                    </div>
                )
            })}
        </div>
    )
}
