import { React, useState } from "react";
import "../../src/components/button.css";
function List({ todos, deleteTodo, updateTodo, editTodo }) {
	const [active, setActive] = useState(true);
	const [userInput, setUserInput] = useState("");

	let handleClick = () => {
		setActive(!active);
		if (userInput.trim() !== "") {
			setUserInput("");
		}
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				flexDirection: "column",
				gap: "50px",
			}}
		>
			<button onClick={handleClick} style={{marginTop:'50px', marginLeft:'37%'}}>Editar</button>
			<div style={{ display: "flex", flexDirection: "column"}}>
			<div className="divloco"
							style={{
								display: "flex",
								flexDirection:'column',
								width: "100%",
								justifyContent:'space-between'
							}}
						>
				{todos.map((todo) => {
					return (
						<div style={{display:'flex', justifyContent:'space-between', gap:'50px'}}>
						<div className='notButtons'>
							{active === true ? (
								<h3
									style={
										todo.completed
											? { color: "green", width:'400px' }
											: { color: "black", width:'400px'}
									}
								>
									{todo.task}
								</h3>
							) : (
								<input
									value={userInput}
									placeholder={todo.task}
									style={{
										height: "40px",
										width: "200px",
										fontSize: "20px",
										margin: "10px",
									}}
									onChange={(e) => {
										setUserInput(e.target.value);
										todo.task = userInput;
									}}
								></input>
							)}
							</div>
							<div className="buttons" style={{display:'flex', gap:'50px'}}>
								<button
									onClick={(e) => {
										updateTodo(todo);
									}}
									id={todo}
								>
									Completada
								</button>
								<h2
									onClick={() => {
										deleteTodo(todo);
									}}
									id={todo}
								>
									X
								</h2>
							</div>
							</div>
						
					);
				})}
				</div>
			</div>
		</div>
	);
}

export default List;
