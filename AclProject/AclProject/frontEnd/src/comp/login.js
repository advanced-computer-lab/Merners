import React , {Component} from "react"; 
import axios from 'axios';
import airplane from './img/airplane.png';

export default class Login extends Component
{
    constructor(props){
        super(props);

        this.state ={
            username: '' ,
            password: '' ,
            registerationErrors : ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e)
    {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e)
    {    
        e.preventDefault();
        const user = {
                    username: this.state.username , 
                    password: this.state.password
                }
        if(user.username === 'admin' && user.password === '123')
            window.location = "/Home";
        else
            axios.post('http://localhost:8000/users/login', user);
    }    

    render()
    {
        return (
            
            <form onSubmit = {this.handleSubmit}>
                <div style={{
                backgroundImage:`url(${airplane})` 
            }}>
                 <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                
                <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                  <h5>Login</h5>
                  <br>
                  </br>
                  </div>
                  <br>
                  </br>
                  <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
               <input 
                type = "username" 
                name = "username" 
                placeholder = "Username" 
                value={this.state.username} 
                onChange= {this.handleChange} 
                required /> 
            </div>
            
                 <br>
                  </br>
                  <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <input 
                type = "password" 
                name = "password" //name have to be password
                placeholder = "Password" 
                value={this.state.password} 
                onChange= {this.handleChange} 
                required />  
                </div> 
                  <br>
                  </br>
                  <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <button type = "submit">Login</button> 
                </div>   
                
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                </div>
            </form>
        )
    }
}