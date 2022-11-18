import { useState,useRef } from 'react';
import './UserForm.css';
import Card from "../UI/Card";
import ErrorBox from '../UI/ErrorBox'
import Wrapper from '../helper/Wrapper';

const Form = (props)=>{
    const inputNameref = useRef();
    const inputAgeref = useRef();
    const inputCollegeref = useRef()

    const [error,setError] = useState()

    const addUserHandler = (e)=>{
        e.preventDefault();
        if(inputNameref.current.value.trim().length===0||inputAgeref.current.value.trim().length===0||inputCollegeref.current.value.trim().length==0){
             setError({
                title:"Enter Username and Age "
                ,message:"Please enter Username and Age and  press Add User BUtton"
             })       
        } 

        else if(+inputAgeref.current.value<1){
            setError({
                title:"Enter valid Age "
                ,message:"Please enter valid Age which is greater than zero then press Add User BUtton"
             })  
        }
        else{
            const object ={
                name: inputNameref.current.value,
                age: inputAgeref.current.value,
                college:inputCollegeref.current.value,
                id:Math.random().toString()
    
            }
            console.log()
            props.addToScreenHandler(object)

        }
       
        inputNameref.current.value=''
       inputAgeref.current.value=''

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
            <input name="username"id="username" type="text"    ref={inputNameref}></input>
            <label htmlFor='age' >Age</label>
            <input id="age" type="number"   ref={inputAgeref}></input>
            <label htmlFor='college' >College</label>
            <input id="college" type="text"   ref={inputCollegeref}></input>
            <button type="submit">Add User</button>
        </form>
        </Card>
        </Wrapper>
        
    )
}

export default Form 