import React from "react";
import ListElement from "./ListElement";

const List=(props)=>
{
    return (
        <div className="list-group list-group-flush">
            <ul className="p-0 mt-3 me-4">
                {props.todos.map((element,index)=>{
                    return (<ListElement id={index} key={index} todo={element} editHandler={props.editHandler} deleteHandler={props.deleteHandler}/>)
                })}
            </ul>
        </div>
    );
};

export default List;