import isCorrectLoginInfo from "../../api/isCorrectLoginInfo";

export default function Login(props) {
    const { setCurrentAccount } = props;

    async function attemptLogin(event) {
        event.preventDefault();

        const username = event.target[0].value;
        const password = event.target[1].value;

        try {
            const loginAttempt = await isCorrectLoginInfo(username, password);
            if (loginAttempt) { setCurrentAccount(username); }
            return;
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(event) => attemptLogin(event)}>
                <input type="username" placeholder="Username"></input>
                <br></br>
                <input type="password" placeholder="Password"></input>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}
