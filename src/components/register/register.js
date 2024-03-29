import React,{useState} from "react"
import "./register.css"
import axios from "axios"
import {useHistory} from "react-router-dom"

const Register=()=>{

    const history=useHistory()

    const[ user,setUser]=useState({
        name:'',
        dateOFBirth:'',
        email:'',
        password:'',
        reEnterPassword:''
    })

    const handleChange= e =>{
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
        
    }

    const register= ()=>{
        const{name ,dateofbirth ,email ,password,reEnterPassword}=user
        if(name && dateofbirth &&  email && password &&(password === reEnterPassword)){
            axios.post("https://localhost:9002/register", user)
            .then(res=>{alert(res.data.message)
            history.push("/login")
            })
        }else{
            alert("invlid input")
        }
    }

    return(
        <div className="register">
            {console.log("User",user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder=" Your Name" onChange={handleChange}></input>
            <input type="Date" name="name" value={user.date} placeholder="dd/mm/yyyy" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email}  placeholder="Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password}  placeholder="Your password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword}  placeholder="Re-enter password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={()=>history.push("/login")}>Login</div>
        </div>
    )
}

export default Register;