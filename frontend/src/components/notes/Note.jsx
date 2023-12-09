import createNote from "../../api/createNote";
import "./Note.css"

export default function Note(props) {
    async function attemptCreateNote(event) {
        event.preventDefault();

        const { author } = props;
        const title = event.target[0].value;
        const content = event.target[1].value;

        try {
            const createNoteAttempt = await createNote(author, title, content);
            if (createNoteAttempt) return;
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div id="new_note">
            <form onSubmit={(event) => attemptCreateNote(event)}>
                <input id="note_input" type="text" placeholder="Title"></input>
                <br></br>
                <textarea id="note_content" type="text" placeholder="Content"></textarea>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}
