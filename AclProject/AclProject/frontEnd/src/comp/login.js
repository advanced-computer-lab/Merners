import React , {useState} from "react"; 
import axios from 'axios';
import Loading from './Loading';
import { Col ,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Login=({history}) => {
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [loading,setLoading] = useState(false);

    const submitHandler = async(e) => {
        e.preventDefault();
        try
        {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            setLoading(true);
            const { data } = await axios.post(
                "http://localhost:8000/users/login",
                {
                   username: username,
                   password: password,
                },
                config 
                );
            if(data.username === null)
            {
                alert("user doesn't exists");
                window.location.reload();
            }
            else if(data.password === null )
            {
                alert("Wrong password");
                window.location.reload();
            }
            else
                
            {
                 alert("login success");
                 
                 if(data.isAdmin)
                 window.location = "/home/" + data._id;
                 else
                 window.location = "/homePageUser/"+ data._id
            }    
            console.log(data)
            data.password = password;
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
        }

        catch(error)
        {
            setLoading(false);
            alert(error.message);
        }
    }

    return(
        <div>   
                <form onSubmit = {submitHandler}>
                {loading && <Loading />}
                <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <h5 style={ { fontSize: '30px' , fontWeight: '600'} }>Login</h5>
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
                value={username} 
                onChange= {(e)=> setUsername(e.target.value)} 
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
                value={password} 
                onChange= {(e) => setPassword(e.target.value)} 
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

            </form>
            <Row className="py-3">
          <Col>
            Do Not Have an Account ? <Link to="/Register">Register</Link>
          </Col>
        </Row>
        <br />
        <span id="textSpan" style={ { fontWeight: 'bold' } }>
    
        <Row className="py-3">
          <Col>
             <Link to="/guest" >Continue As A Guest </Link>
          </Col>
        </Row>
</span>
        </div>
    )
}

export default Login