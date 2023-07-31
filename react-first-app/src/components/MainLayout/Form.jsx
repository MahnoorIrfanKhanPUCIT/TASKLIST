import React,{useState} from "react";

const Form=(props)=>
{
    const [userInput,setUserInput]=useState("");

    
    const userInputHandler=(e)=>
    {
        setUserInput(e.target.value);
    }
    
    const submitFormHandler=(e)=>
    {
        e.preventDefault();
        props.getUserInput(userInput);
        setUserInput("");
    }
    
    const [editedState,setEditedState]=useState("");
    
    const editHandler = (task) => 
    {
        setEditedTask(task);
    }
    
    return(
        <div>
            <form onSubmit={submitFormHandler}>
                <div className="form-group mt-3 mb-4">
                    <input type="text" placeholder="Enter task " className="form-control pe-5" onChange={userInputHandler} value={userInput}></input>
                    <button className="btn btn-outline-secondary bg-dark text-light mt-2 ">Add task</button>
                </div>
            </form>
        </div>
    );
};

export default Form; 