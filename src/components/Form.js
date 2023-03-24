import { React, useState } from "react";

function Form({addTodo}) {
	const [userInput, setUserInput] = useState("");

	let handleSubmit = (e) => {
		e.preventDefault();
        if(userInput.trim() !== ''){
            addTodo(userInput)
            setUserInput('')
            
        }
	};
    let handleChange = (e) =>{
        setUserInput(e.target.value)
    }
	return (
		<div>
			<form method="POST" action="" onSubmit={handleSubmit}>
				<label for="todo"><h1>Enter A New To Do </h1></label>
				<input
                style={{height:'70px', width:'400px', fontSize:'50px'}}
					type="text"
					id="name"
					name="name"
					placeholder="Wash the dishes"
                    value={userInput}
                    onChange={handleChange}
				></input>
			</form>
		</div>
	);
}

export default Form;
