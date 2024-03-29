import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app= express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegsiterDB",{
    useNewUrlParser: true,
    useUnifiedTopology:true
},()=>{
    console.log("DB connected");
})

const userSchema= new mongoose.Schema({
    name:String,
    dateofbirth:String,
 email: String,
 password: String
})

const User=new mongoose.model("user",userSchema)

//Routes
app.post("/login",(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"Login Successfully",user:user})
            }else{
                res.send({message:"password didn't match"})
            }
        }else{
            res.send({message:"User not register"})
        }
    })
})

app.post("/register",(req,res)=>{
 const {name,dateofbirth,email,password}=req.body
 User.findOne({email:email},(err,user)=>{
    if(user){
        res.send({message:"User already registerd"})
    }
 })
 const user=new User ({
    name,
    dateofbirth,
    email,
    password
 })
 user.save(err =>{
    if (err){
        res.send(err)
    }else{
        res.send({ message:"successfully registered ,please login now."})
    }
        
    
 })
})
app.listen(9002,()=>{
    console.log("BE started at port 9002");
})