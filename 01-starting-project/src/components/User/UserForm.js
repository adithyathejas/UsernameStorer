import { useState } from 'react';
import './UserForm.css';
import Card from "../UI/Card";
import ErrorBox from '../UI/ErrorBox'
import Wrapper from '../helper/Wrapper';

const Form = (props)=>{
    const [username,setUsername] = useState('')
    const [age,setAge] = useState('')
    const [error,setError] = useState()

    const addUserHandler = (e)=>{
        e.preventDefault();
        if(username.trim().length===0||age.trim().length===0){
             setError({
                title:"Enter Username and Age "
                ,message:"Please enter Username and Age and  press Add User BUtton"
             })       
        } 

        else if(+age<1){
            setError({
                title:"Enter valid Age "
                ,message:"Please enter valid Age which is greater than zero then press Add User BUtton"
             })  
        }
        else{
            const object ={
                name: username,
                age: age,
                id:Math.random().toString()
    
            }
            props.addToScreenHandler(object)

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

    const errorHandler = ()=>{
        setError(null)
    }
    


    return(
        <Wrapper>
        {error&&<ErrorBox onClick={errorHandler} title={error.title} message={error.message}></ErrorBox>}
        <Card className="input">
               <form onSubmit={addUserHandler}  >
            <label htmlFor='username' >Username</label>
            <input name="username"id="username" type="text"  onChange={usernameChangeHandler} value={username}></input>
            <label htmlFor='age' >Age</label>
            <input id="age" type="number" onChange={ageChangeHandler} value={age}></input>
            <button type="submit">Add User</button>
        </form>
        </Card>
        </Wrapper>
        
    )
}

export default Form 