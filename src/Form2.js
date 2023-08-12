
import React ,{useState}from 'react'
import {app,database} from './fireBaseconfig'
import {collection,addDoc,getDocs} from 'firebase/firestore'

const Form2 = () => {
    const collections = collection(database,'users')
    const [data,setData] = useState({
        email:'',
        password:''
    });

    const handleChange = (e) =>{
        e.preventDefault();
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        try {
            const docRef = addDoc(collections, {
             email:data.email,
             password:data.password
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    const getData = () =>{
        getDocs(collections)
        .then((response)=>{
            console.log(response.docs.map((item)=>{
                return item.data();
            }))
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='email' name='email'  value={data.email} onChange={handleChange}></input>
            <input type='password' name='password'  value={data.password} onChange={handleChange}></input>
        <button type='submit'>Submit</button>
        </form>
        <button onClick={getData}>Submit</button>
    </div>
  )
}

export default Form2