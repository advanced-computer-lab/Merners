import React , {Component} from "react"; 
import axios from 'axios';

export default class Registeration extends Component
{
    constructor(props){
        super(props);

        this.state ={
            username: '' ,
            password: '' ,
            password_confirmation : '',
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
        axios.post('http://localhost:8000/users/add',user)
        .then(res  => console.log("registeration is complete", res.data))
        .catch(error => {
            console.log("registeration error" , error)
        })
        window.location.reload(); 
    }    

    render()
    {
        return (
            <form onSubmit = {this.handleSubmit}>
            <input 
                type = "username" 
                name = "username" 
                placeholder = "Username" 
                value={this.state.username} 
                onChange= {this.handleChange} 
                required />
            <input 
                type = "password" 
                name = "password" //name have to be password
                placeholder = "Password" 
                value={this.state.password} 
                onChange= {this.handleChange} 
                required />   
            <input 
                type = "password" 
                name = "password_confirmation" 
                placeholder = "Password Confirmation" 
                value={this.state.password_confirmation} 
                onChange= {this.handleChange} 
                required /> 

                <button type = "submit">Register</button>      
            </form>
        )
    }
}