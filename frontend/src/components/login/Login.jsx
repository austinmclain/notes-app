import isCorrectLoginInfo from "../../api/isCorrectLoginInfo";
import "./Login.css"

export default function Login(props) {
    const { setCurrentUser } = props;

    async function attemptLogin(event) {
        event.preventDefault();

        const username = event.target[0].value;
        const password = event.target[1].value;

        try {
            const loginAttempt = await isCorrectLoginInfo(username, password);
            if (loginAttempt) { setCurrentUser(username); }
            return;
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div id="login">
            <h1 id="login_heading">Login</h1>
            <br></br>
            <form id="login_form" onSubmit={(event) => attemptLogin(event)}>
                <input type="username" placeholder="Username"></input>
                <br></br>
                <input type="password" placeholder="Password"></input>
                <br></br>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}
