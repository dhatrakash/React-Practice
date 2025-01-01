import React, { useState } from 'react'

const Todo = () => {
    const[task, setTask] = useState([]);
    const[input, setInput] = useState('');
    const[completeTask, setCompleteTask] = useState([]);

    const addTask = () => {
        // Add new task with unique ID
        const newTask = {
            id: Date.now(),
            text: input
        };
        setTask([...task, newTask]);
        setInput('');
    }

    const completedTask = (taskToComplete) => {
        const newTask = task.filter((item) => item.id !== taskToComplete.id);
        setTask(newTask);
        setCompleteTask([...completeTask, taskToComplete]);
    }

    return (
        <div>
            <h1>TODo App</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add todo" />
            <button onClick={addTask}>Add</button>
            <ul>
                {task.map((item) => (
                    <li key={item.id}>
                        <input type='checkbox' onChange={() => completedTask(item)} />
                        {item.text}
                    </li>
                ))}
            </ul>

            <h2>Completed Task</h2>
            <ul>
                {completeTask.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Todo
