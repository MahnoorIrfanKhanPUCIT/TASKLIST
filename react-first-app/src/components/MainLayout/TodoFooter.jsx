import React from "react";

const TodoFooter=(props)=>
{
    const clearAll=()=>
    {
        props.clearAll();
    }
    
    return(
        <div>
            <h5 className="mb-4">{props.todos.length} tasks left..</h5>
            <button className="btn btn-outline-dark btn-md" onClick={clearAll}>
                Clear All
            </button>
        </div>
    );
};

export default TodoFooter;