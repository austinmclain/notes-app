import Login from './components/login/Login';
import { useState } from 'react';
import Navigation from './components/navigation/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Note from './components/notes/Note';
import NoteList from './components/notes/NoteList';

function App() {
  document.title = "Notes";
  const [currentUser, setCurrentUser] = useState('')

  if (currentUser === '') {
    return (
      <div className="App">
        <Login setCurrentUser={setCurrentUser} />
      </div>
    );
  } else {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route exact path="/" element={<Note author={currentUser}/>} />
            <Route exact path="/notes" element={<NoteList author={currentUser}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
