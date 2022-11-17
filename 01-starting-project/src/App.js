import React,{useState} from "react";
import Form from "./components/User/UserForm";
import OnScreen from "./components/User/ShowOnScreen";


function App() {
  const [users,setUsers] = useState([])

  const addToScreenHandler = (object)=>{
    setUsers((prevstate)=>{
      return [...prevstate,object]
    })
    
  }

  return (
    <div>
        <Form addToScreenHandler={addToScreenHandler}></Form>
        <OnScreen users={users} ></OnScreen>
    </div>
  );
}

export default App;
