import conection from "./services/conect";
import { useState, useEffect } from 'react';
import Nav from './components/Nav';

import Note from './components/Note';

function App() {

  const [notes, setNotes] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  
  useEffect(() => {
    conection
      .getAllNotes()
      .then(initialData => setNotes(initialData));
    }, []);
  
  const importantNotes = notes.filter(note => note.important);

  const changeImportance = (noteTo) => {

    const updatedNote = {
      content: noteTo.content,
      important: !noteTo.important,
      id: noteTo.id
    };

    conection
      .updateNote(updatedNote)
      .then(updatedNotes => {
        setNotes(notes.map(note => {
          if(note.id === noteTo.id){
            return updatedNote;
          }else{
            return note;
          }
        }))
      })
  }

  const deleteNote = note => {
    if(window.confirm('Are you sure you want to delete this note?')){
      conection
      .deleteNote(note.id)
      .then(() => setNotes(notes.filter(currentNote => currentNote.id !== note.id)))
    }
    
  }

  const createNote = () => {
    let newNote = prompt('Insert a new note (importance is random)');

    if(newNote === null){
      return null;
    }else if(newNote === ""){
      alert("Please enter a valid note")
    }else{
      newNote = {
        content: newNote
      }
      conection
        .createNote(newNote)
        .then(response => {
          setNotes(notes.concat(response));
        })
    }
  }

  const notesFiltered = notes.filter(name => {
    return name.content.toLowerCase().includes(newFilter.toLowerCase());
  });

  const searchFilter = (event) => {
    setNewFilter(event.target.value);
  }

  let count = 0;

  return (
    <div className="container">
      <Nav addNote={createNote} newFilter={newFilter} searchFilter={searchFilter}/>
      
      <Note notesFiltered={notesFiltered} notes={notes} changeImportance={changeImportance} deleteNote={deleteNote}/>
      
      <h1 className=" m-3 text-danger">Important notes</h1>
      <ul className="list-group  m-3">
          {importantNotes.map(note => {
            return (
              <div className="container w-100 p-10 m-2" key={count++}>
                <li className="list-group-item"><h2>{note.content}</h2></li>
              </div>
            )
          })
          }
      </ul>

    </div>
  );
}

export default App;
