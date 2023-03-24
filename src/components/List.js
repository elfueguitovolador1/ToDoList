import React from "react";
import '../../src/components/button.css'
function List({ todos, deleteTodo, updateTodo }) {
	return (
		<div>
			{todos.map((todo) => {
				return (
					<div style={{display:'flex',justifyContent:'space-between',width:'30%'}}>
						<h3 style={todo.completed ? {color:'green'}:{color:'black'}}>
							{todo.task} 
						</h3>
						<button onClick={(e)=>{
							updateTodo(todo)}} id={todo}>Completada</button>
                        <h2 onClick={()=>{deleteTodo(todo)}} id={todo}>X</h2>
					</div>
				);
			})}
		</div>
	);
}

export default List;
