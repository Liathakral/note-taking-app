// src/components/NoteItem.js

import React from 'react';

const NoteItem = ({ note, onEdit, onDelete }) => {
    return (
        <div className="note-item p-5  bg-gray-300   flex justify-between   ">
            <div>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <span>{new Date(note.timestamp).toLocaleString()}</span>
            </div>
            <div className=' space-x-4 '>
                <button className='  border-[1px] rounded-lg  text-blue-500 text-sm  bg-yellow-100 py-1 px-4 ' onClick={() => onEdit(note)}>Edit</button>
                <button className=' border-[1px] text-sm text-blue-500 rounded-lg bg-yellow-100 py-1 px-4' onClick={() => onDelete(note.id)}>Delete</button>
            </div>
        </div>
    );
};

export default NoteItem;
