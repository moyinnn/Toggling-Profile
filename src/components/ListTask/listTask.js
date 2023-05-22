    
    
    const ListTask = ({ tasks, onToggleTask, onDeleteTask }) => {
    return (
        <ul>
        {tasks.map((task) => (
            <Task
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
            />
        ))}
        </ul>
    );
    };

    export default ListTask;