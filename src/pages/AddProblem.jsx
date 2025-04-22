// AddProblem.jsx
import { useState } from 'react';
import styles from './AddProblem.module.css';

export default function AddProblem() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create new problem object with timestamp
    const newProblem = {
      title,
      description,
      createdAt: new Date().toISOString(), // Add ISO timestamp
    };

    try {
      const res = await fetch(
        'https://6805818eca467c15be693938.mockapi.io/ps/one',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProblem),
        }
      );
      if (res.ok) {
        console.log('Problem added successfully');
        setTitle('');
        setDescription('');
      } else {
        console.error('Error adding problem');
      }
    } catch (error) {
      console.error('Error adding problem:', error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Add a New Problem</h1>
         <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Add Problem
        </button>
      </form>
    </div>
    </div>
  );
}
