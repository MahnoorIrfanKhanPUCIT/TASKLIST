import React,{useState} from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Todos from "./components/MainLayout/Todos.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './App.css';

function App() 
{
  
  const dummyTodos=
    [    
    ];
    
   const [todos,setTodos]=useState(dummyTodos);

   const [edit,setEdit]=useState({
    edit:false,
    item:{
      text:"",
      id:""
    }
   });
   
   const editEnableHandler=(item)=>
   {
    setEdit({
      edit:true,
      item:item
    })
   }
   
   const changeEditInputHandler=(value)=>
   {
      setEdit((prevState)=>{
        return { 
          ...prevState,
          item:{
            ...prevState.item,
            text:value
          }
        }
      })
   }

   const submitEditHandler=()=>
   {
    let newTodos=todos.map((todo,index)=>{
      if(edit.item.id===index)
      {
        return edit.item.text;
      }
      else
      {
        return todo;
      }
    })
    setTodos(newTodos);
    setEdit({
      edit:false,
      item:{
        text:"",
        id:""},
      });
   }
    
    const getUserInput=(userInput)=>
    {
      setTodos([userInput,...todos]);
    }
    
    const deleteHandler=(id)=>
    {
      const filterDeleteTodos=todos.filter((todo,index)=>{
        return index !== id;
      })
      setTodos(filterDeleteTodos);
    }
    
    const clearAll=()=>
    {
      setTodos([]);
    }
    
  
     
  
  return (
    <div>
      <Navbar />
      <Todos todos={todos} getUserInput={getUserInput} deleteHandler={deleteHandler} clearAll={clearAll} editEnableHandler={editEnableHandler} edit={edit} changeEditInputHandler={changeEditInputHandler} submitEditHandler={submitEditHandler}/>
      <Footer />
    </div>
  );
}

export default App;
