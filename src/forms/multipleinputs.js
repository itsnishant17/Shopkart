import React, { useState } from 'react'
import { v4 as uuidv4,NIL as NIL_UUID } from 'uuid';
import { nanoid,customAlphabet } from 'nanoid'

// const express=require("express");
// const app=express();
// app.get("/users",(req,res)=>{
//     res.send({data:"info"});
// });

const nanoidemp = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
const customNanoid=customAlphabet('123abcdef',10)

const MultipleInputs = () => {

    const [userRegistration, setuserRegistration] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });

    const [records, setrecords] = useState([]);

    const handleInput=(e)=>{
        const name = e.target.name;
        const value=e.target.value;
        console.log(name,value);

        setuserRegistration({...userRegistration, [name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const newRecord={ ...userRegistration, id:new Date().getTime().toString() }

        setrecords([...records,newRecord ]);

        setuserRegistration({username:"",email:"",phone:"",password:""});
        
        console.log(`nanoid:${nanoidemp}`)

    }

    return (

    <>
        <form action="" onSubmit={handleSubmit}>
        <div>
                <label htmlFor="username">Username</label>
                <input type="text" autocomplete="off" value={userRegistration.username} onChange={handleInput} name="username" id="username"/>
        </div>

        <div>
                <label htmlFor="email">email</label>
                <input type="text" autocomplete="off" value={userRegistration.email} onChange={handleInput} name="email" id="email"/>
        </div>

        <div>
                <label htmlFor="password">password</label>
                <input type="password" autocomplete="off" value={userRegistration.password} onChange={handleInput} name="password" id="password"/>
        </div>

        <div>
                <label htmlFor="phone">phone</label>
                <input type="text" autocomplete="off" value={userRegistration.phone} onChange={handleInput} name="phone" id="phone"/>
        </div>

        <button type="submit">Registration</button>

    </form>

    <div>
        {
            records.map((curElem)=>{
                return(
                    <div className="showDataStyle"> 
                    
                    <p>{curElem.username}</p>
                    <p>{curElem.email}</p>
                    <p>{curElem.phone}</p>
                    <p>{curElem.password}</p>

                    </div>
                )
            })
        }
    </div>
{/* 
    <div>
        {
            consol.log
        }
    </div> */}

    </>
  )
}
export default MultipleInputs