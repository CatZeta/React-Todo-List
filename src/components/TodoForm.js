import React, {useState} from "react";

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
    //prevents the default form submission behavior (which would cause a page reload)
     e.preventDefault();

     if (value) {

        // Função que guarda o value no array de todos
        addTodo(value);

        // clear form after submission
        setValue('');
      }
    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            {/* the event 'onChange' update the value state with the input value as the user types */}
            <input type="text" value={value} className="todo-input" placeholder="Insert a task" onChange={(e) => setValue(e.target.value)}/>
                <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}