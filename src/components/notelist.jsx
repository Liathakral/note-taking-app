// src/components/NoteList.js

import React from 'react';
import NoteItem from './noteitem';

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="note-list">
      {notes.map(note => (
        <NoteItem key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;
