import { React, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
	let data = [{task:"sacar a pasear al perro", completed:true },{ task:"el perro me puede chupar el picho", completed:false}];
	const [todos, setTodos] = useState(data);

	const addTodo = (todo) => {
		console.log({task:todo, completed:false})
        setTodos([...todos, {task:todo, completed:false}])
    };

    const deleteTodo = (task) => {
        setTodos(todos.filter((todo)=>{
            return todo !== task
        }))
    }
	
	const updateTodo = (recognizer) => {
		setTodos(todos.map((todo)=>{
			return todo === recognizer ? {...todo, completed:!todo.completed } : {...todo}
		}))
	}
	return (
		<div style={{fontFamily:'Consolas'}}>
			<Form addTodo={addTodo}/>
			<List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
		</div>
	);
}

export default App;
