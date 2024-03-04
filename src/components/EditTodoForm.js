import React, {useState} from "react";

export const EditTodoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
    //prevents the default form submission behavior (which would cause a page reload)
     e.preventDefault();

     editTodo(value, task.id);
    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            {/* the event 'onChange' update the value state with the input value as the user types */}
            <input type="text" value={value} className="todo-input" placeholder='Edit your task' onChange={(e) => setValue(e.target.value)}/>
                <button type="submit" className="todo-btn">Update Task</button>
        </form>
    )
}