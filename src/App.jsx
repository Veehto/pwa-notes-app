import { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import CamInput from "./components/CamInput";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    // Cargar notas desde localStorage
    const getStoredNotes = () => {
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    };

    const [notes, setNotes] = useState(getStoredNotes());

    // Guardar notas en localStorage cuando cambien
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    // Función para agregar una nueva nota
    const addNote = (title, content, image, location) => {
        const newNote = { id: Date.now(), title, content, image, location };
        setNotes([newNote, ...notes]);
    };

    // Función para eliminar una nota
    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
    <div className="bg-dark text-white min-vh-100">
        <div className="container py-5">
            <h1 className="text-center">📝 Notas</h1>
            <NoteForm addNote={addNote} />
            {/* <CamInput /> */}
            <NotesList notes={notes} deleteNote={deleteNote} />
        </div>
    </div>
    );
};

export default App;
