import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleLogin=async(e) => {
        e.preventDefault();
        try{
            const res=await axios.post('http://localhost:5000/api/auth/login',{email,password});
            localStorage.setItem('token',res.data.token);
            navigate('/forum');
        }catch(err){
            console.error('Login failed',err);
        }
    };

    return(
        <form onSubmit={handleLogin}>
            <input type ="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}required/>
            <input type ="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}required/>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;