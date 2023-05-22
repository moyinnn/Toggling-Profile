
    import React, { useState } from 'react';

    const AddTask = ({ onAddTask }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
        const newTask = {
        id: Date.now(),
        description: description,
        isDone: false,
        };
        onAddTask(newTask);
        setDescription('');
    }
    };

    return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Add task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
    </form>
    );
    };

    export default AddTask;