import React from "react";
import Heading from "./Heading";
import Form from "./Form";
import List from "./List";
import TodoFooter from "./TodoFooter";

const Todos=(props)=>
{
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center m-5">
            <div className="card card-body bg-light p-5 w-50">
            <Heading title="RENDER TASKS:"/>
            <div className="d-flex flex-column justify-content-start align-items-start">
            <Form getUserInput={props.getUserInput} edit={props.edit} changeEditInputHandler={props.changeEditInputHandler} submitEditHandler={props.submitEditHandler}/>
            <Heading title="PENDING:" />
            <List todos={props.todos} deleteHandler={props.deleteHandler} editEnableHandler={props.editEnableHandler}/>
            <TodoFooter todos={props.todos} clearAll={props.clearAll}/>
            </div>
            </div>
        </div>
    )
};

export default Todos;