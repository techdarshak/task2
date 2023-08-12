
import React ,{useState}from 'react'
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

const Form3 = () => {
    let auth = getAuth();
    let provider  = new GoogleAuthProvider();
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
        signInWithPopup(auth,provider)
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

export default Form3