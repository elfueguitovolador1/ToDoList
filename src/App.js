import { React, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
	let data = ["sacar a pasear al perro", "el perro me puede chupar el picho"];
	const [todos, setTodos] = useState(data);

	const addTodo = (todo) => {
        setTodos([...todos,todo])
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo)=>{
            return todo !== id
        }))
    }

	return (
		<div style={{fontFamily:'Consolas'}}>
			<Form addTodo={addTodo}/>
			<List todos={todos} deleteTodo={deleteTodo} />
		</div>
	);
}

export default App;
