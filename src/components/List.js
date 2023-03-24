import React from "react";

function List({ todos, deleteTodo }) {
	return (
		<div>
			{todos.map((todo) => {
				return (
					<div style={{display:'flex',justifyContent:'space-between',width:'30%'}}>
						<h3 >
							{todo} 
						</h3>
                        <h2 onClick={()=>{deleteTodo(todo)}} id={todo}>X</h2>
					</div>
				);
			})}
		</div>
	);
}

export default List;
