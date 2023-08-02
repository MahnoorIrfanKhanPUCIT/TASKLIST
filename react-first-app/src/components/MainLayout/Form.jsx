import React,{useState} from "react";

const Form=(props)=>
{
    const [userInput,setUserInput]=useState("");
    const [alertMessage,setAlertMessage]=useState("");

    const userInputHandler=(e)=>
    {
        setUserInput(e.target.value);
    }

    const showAlertWithTimeout=(message,time)=>
    {
        setAlertMessage(message)
        setTimeout(()=>{
            setAlertMessage("");
        },time)

    }

    const editInputHandler=(e)=>
    {
        props.changeEditInputHandler(e.target.value);
    }
    
    const submitEditFormHandler=(e)=>
    {
        e.preventDefault();
        props.submitEditHandler();
    }
    
    const submitFormHandler=(e)=>
    {
        e.preventDefault();
        if(userInput.trim()==="")
        {
            showAlertWithTimeout("Empty task cannot be submitted",2000);
        }
        else
        {
            showAlertWithTimeout("Task added successfully",2000);
            props.getUserInput(userInput);
        } 
        setUserInput("");
    }
    
    
    return(
        <div>
            {alertMessage && <div className={`alert ${alertMessage === "Task added successfully"  ? "alert-success"  : "alert-danger"}`} role="alert">{alertMessage}</div>}
            
            {props.edit.edit ? <form onSubmit={submitEditFormHandler}>
                <div className="form-group mt-3 mb-4">
                    <input type="text" placeholder="Enter task " className="form-control pe-5" onChange={editInputHandler} value={props.edit.item.text}></input>
                    <button className="btn btn-outline-secondary bg-dark text-light mt-2 ">Edit task</button>
                </div>
            </form> : <form onSubmit={submitFormHandler}>
                <div className="form-group mt-3 mb-4">
                    <input type="text" placeholder="Enter task " className="form-control pe-5" onChange={userInputHandler} value={userInput}></input>
                    <button className="btn btn-outline-secondary bg-dark text-light mt-2 ">Add task</button>
                </div>
            </form>}
            
            
        </div>
    );
};

export default Form; 