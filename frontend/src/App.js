import Login from './components/login/Login';
import { useState } from 'react';

function App() {
  document.title = "Notes";
  const [currentAccount, setCurrentAccount] = useState('')

  // function logout() {
  //   setCurrentAccount('');
  // }

  if (currentAccount === '') {
    return (
      <div className="App">
        <Login setCurrentAccount={setCurrentAccount} />
      </div>
    );
  } else {
    return (
      <h1>Hello, World!</h1>
    )
  }
}

export default App;
