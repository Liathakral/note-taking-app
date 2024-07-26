// src/components/NoteForm.js

import React, { useState, useEffect } from 'react';

const NoteForm = ({ addNote, editNote, currentNote }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  useEffect(() => {
    if (currentNote) setNote(currentNote);
  }, [currentNote]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentNote) {
      editNote(note);
    } else {
      addNote(note);
    }
    setNote({ title: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Content"
        required
      />
      <button type="submit">{currentNote ? 'Update' : 'Add'} Note</button>
    </form>
  );
};

export default NoteForm;
