import '../User/ShowOnScreen.css'
import Card from '../UI/Card'

const OnScreen = (props)=>{

    return(
    <Card className="users">
    <ul>
        {props.users.map((user)=>{
            
            <li>
                {user.name}&nbsp;&nbsp;{user.age}&nbsp;years old
            </li>

        })}
    </ul>
    </Card>)
    
}

export default OnScreen;