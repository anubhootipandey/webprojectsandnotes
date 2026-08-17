import React, { useState } from "react";

const Crud = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState("");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setEditId(index);
    setEdit(todos[index]);
  };

  const saveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = edit;
    setTodos(updatedTodos);
    setEditId(null);
    setEdit("");
  };

  const filteredTodos = todos.filter(todo => todo.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
        <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div> <br /><br />

        <div>
        <input 
        type='text'
        placeholder='Search...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        </div>
        <br /><br />
        
      <div>
        <input
          type="text"
          placeholder="Enter your todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <br />
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            {editId === index ? (
              <>
                <input
                  type="text"
                  placeholder="Edit your todo"
                  value={edit}
                  onChange={(e) => setEdit(e.target.value)}
                />
                <button onClick={() => saveTodo(index)}>Save</button>
              </>
            ) : (
              <>
                {todo}
                <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;
