
    
    const Task = ({ task, onToggleTask, onDeleteTask }) => {
    const handleToggle = () => {
        onToggleTask(task.id);
    };

    const handleDelete = () => {
        onDeleteTask(task.id);
    };

    return (
        <li>
        <span
            style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
            onClick={handleToggle}
        >
            {task.description}
        </span>
        <button onClick={handleDelete}>Delete</button>
        </li>
    );
    };

    export default Task;