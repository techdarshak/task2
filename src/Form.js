import React ,{useState}from 'react'
import {app} from './fireBaseconfig'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'

const Form = () => {
    let auth = getAuth();
    const [data,setData] = useState({
        email:'',
        password:''
    });

    const handleChange = (e) =>{
        e.preventDefault();
        let new1 = {[e.target.name]:e.target.value}
        setData({...data,...new1})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,data.email,data.password)
        .then((response) =>{
            console.log(response.user)
        })
        .catch((error)=>{
            console.log(error)
        })
        //signInWithEmailAndPassword(auth,data.email,data.password)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='email' name='email'  value={data.email} onChange={handleChange}></input>
            <input type='password' name='password'  value={data.password} onChange={handleChange}></input>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form