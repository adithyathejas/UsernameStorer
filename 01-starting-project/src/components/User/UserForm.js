import { useState } from 'react';
import './UserForm.css';
import Card from "../UI/Card";

const Form = (props)=>{
    const [username,setUsername] = useState('')
    const [age,setAge] = useState('')
    const addUserHandler = (e)=>{
        e.preventDefault();
        if(username.trim().length==0||age.trim().length==0){
            alert("enter something")
        }

        else if(+age<1){
            alert("enter valid age")
        }

        setUsername('')
        setAge('')

    }

    const usernameChangeHandler =(e)=>{
        setUsername(e.target.value)

    }

    const ageChangeHandler =(e)=>{
        setAge(e.target.value)

       


    }


    return(
       
        <Card className="input">
               <form onSubmit={addUserHandler}  >
            <label htmlFor='username' >Username</label>
            <input name="username"id="username" type="text"  onChange={usernameChangeHandler} value={username}></input>
            <label htmlFor='age' >Age</label>
            <input id="age" type="number" onChange={ageChangeHandler} value={age}></input>
            <button>Add User</button>
        </form>
        </Card>
        
    )
}

export default Form 