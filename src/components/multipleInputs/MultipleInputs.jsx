//import React from "react";

import { useState } from "react"

const MultipleInputs = () => {
    
    const [userValue, setValue] = useState({
        username:"",
        email:"",
        PhoneNo: "",
        password:""

    });

    const [record, setRecord] = useState([])
    
    const handleInput = (event) => {
        const name = event.target.name
        const value = event.target.value
        console.log(name , value)


        setValue({...userValue, [name] : value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {...setValue, id : new Date().getTime().toString()}

        setRecord([...record, newRecord]);

        setValue({username:"", email: "", PhoneNo: "", password:""})
    }
    
    
    
    return (
        <>

                <form action="" onClick={handleSubmit}>
                            <div className="bg-blue-400 flex m-2 p-2 gap-2 rounded-lg">
                                    <label htmlFor="username" > Full Name </label>
                                    <input autoComplete="off" className="rounded-lg" type="text" 
                                        value={userValue.username}
                                        onChange={handleInput}
                                    name="username" id="username" />
                            </div>

                            <div className="bg-blue-400 flex m-2 p-2 gap-8 rounded-lg">
                                    <label htmlFor="email" > E-Mail </label>
                                    <input autoComplete="off" className="rounded-lg" type="text" 
                                        value={userValue.email}
                                        onChange={handleInput}
                                    name="email" id="email" />
                            </div>

                            <div className="bg-blue-400 flex m-2 p-2 gap-2 rounded-lg">
                                    <label htmlFor="PhoneNo" > Phone No </label>
                                    <input autoComplete="off" className="rounded-lg" type="text" 
                                        value={userValue.PhoneNo}
                                        onChange={handleInput}
                                    name="PhoneNo" id="PhoneNo" />
                            </div>

                            <div className="bg-blue-400 flex m-2 p-2 gap-2 rounded-lg">
                                    <label htmlFor="password" > Password </label>
                                    <input autoComplete="off" className="rounded-lg" type="password" 
                                        value={userValue.password}
                                        onChange={handleInput}
                                    name="password" id="password" />
                            </div>

                            <button className= "border-l-orange-500 bg-lime-400 text-black" type="submit">Registration</button>
                </form>

                <div>
                    {
                        record.map((currentElement) => {
                            return(
                                <div key={currentElement.id}>
                                    <p>{currentElement.username}</p>
                                    <p>{currentElement.email}</p>
                                    <p>{currentElement.PhoneNo}</p>
                                    <p>{currentElement.password}</p>
                                </div>
                            )
                        })
                    }
                </div>

        </>
    )
}

export default MultipleInputs