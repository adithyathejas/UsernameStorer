import '../User/ShowOnScreen.css'
import Card from '../UI/Card'


const OnScreen = (props)=>{

    return(
    <Card className="users">
    <ul>
        {props.users.map((user)=>{
            
            return (<li key={`${user.id}`}>
                {user.name}&nbsp;&nbsp;{user.age}&nbsp;years old from {user.college} 
                
            </li>)

        })}
    </ul>
    </Card>)
    
}

export default OnScreen;