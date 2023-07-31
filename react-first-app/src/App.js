import React,{useState} from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Todos from "./components/MainLayout/Todos.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Form from "./components/MainLayout/Form.jsx";
import './App.css';

function App() 
{
  
  const dummyTodos=
    [    
    ];
    
   const [todos,setTodos]=useState(dummyTodos);

    const getUserInput=(userInput)=>
    {
      console.log(userInput);
      setTodos([userInput,...todos]);
    }
    
    const deleteHandler=(id)=>
    {
      const filterDeleteTodos=todos.filter((todo,index)=>{
        return index !== id;
      })
      setTodos(filterDeleteTodos);
    }

    const editHandler=(id)=>
    {
      const filterEditTodos=todos.filter((todo,index)=>{
        return index === id;
      })
      const editedTask=filterEditTodos[0];
      console.log(editedTask);
      editTask(editedTask);
    }
    
    const clearAll=()=>
    {
      setTodos([]);
    }
     

  return (
    <div>
      <Navbar />
      <Todos todos={todos} editHandler={editHandler} getUserInput={getUserInput} deleteHandler={deleteHandler} clearAll={clearAll}/>
      <Footer />
    </div>
  );
}

export default App;
