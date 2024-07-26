// src/utils/localStorage.js

export const getNotes = () => {
    return JSON.parse(localStorage.getItem('notes')) || [];
  };
  
  export const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  