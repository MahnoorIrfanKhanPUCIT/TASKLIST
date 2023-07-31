import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const ListElement=(props)=>
{
    const deleteHandler=()=>
    {
        props.deleteHandler(props.id);
    }

    const editHandler=()=>
    {
        props.editHandler(props.id);
    }
    
    return (
        <div>
            <li className="list-group-item d-flex justify-content-between">
                <p className="m-0 pt-2 me-4">
                    {props.todo}
                </p>
                <div>
                    <button className="btn btn-md"><FontAwesomeIcon icon={faPenToSquare} onClick={editHandler} /></button>
                    <button className="btn btn-md"><FontAwesomeIcon icon={faTrash} onClick={deleteHandler}/></button>
                </div>
            
            </li>
        </div>
    );
};

export default ListElement;