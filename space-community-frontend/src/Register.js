import {useState} from 'react';
import axios from 'axios';

function Register(){
    const[username , setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleRegister=async(e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/api/auth/register',{username,email,password});
            alert('User registered successfully');
        }catch(err){
            console.error('Registration failed',err);
        }
    };
     
    return(
        <form onSubmit={handleRegister}>
            <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} required />
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;