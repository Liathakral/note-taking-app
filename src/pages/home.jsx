// src/pages/Home.js

import React, { useState, useEffect } from 'react';
import NoteList from '../components/notelist';
import NoteForm from '../components/noteform';
import Pagination from '../components/pagintation';
import { getNotes, saveNotes } from '../utils/localStorage';

const Home = () => {
  const [notes, setNotes] = useState(getNotes);
  const [currentNote, setCurrentNote] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const notesPerPage = 2;

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = (note) => {
    const newNote = { ...note, id: Date.now(), timestamp: Date.now() };
    setNotes([newNote, ...notes]);
  };

  const editNote = (updatedNote) => {
    setNotes(notes.map(note => note.id === updatedNote.id ? updatedNote : note));
    setCurrentNote(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase()));

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

  return (
    <div className="home">
      <NoteForm addNote={addNote} editNote={editNote} currentNote={currentNote} />
      <input
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        className=' bg-gray-100 w-full  my-2 py-2 rounded-2xl px-2'
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <NoteList notes={currentNotes} onEdit={setCurrentNote} onDelete={deleteNote} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredNotes.length / notesPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
