import React, { useState } from 'react'
import vectorImage from "../../image/vector/4333606.jpg";

export default function Register(){
  const [value,setValue] = useState({});
  const onChange=(event)=>{
       setValue((data) => ({
         ...data,
         [event.target.name]: event.target.value,
       }));
  }
  function handlesubmit(event){
     event.preventDefault();
     fetch("http://127.0.0.1:8000/api/register", {
       method: "POST",
       body: JSON.stringify(value),
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
     }).then((response)=>{
         console.log(response )
     }).then((error)=>{
        console.log(error);
     });
  }
    return (
      <>
        <div className="py-8 ">
          <div className="flex container mx-auto  w-/2 shadow-2xl border-none rounded-md">
            <div className=" h-1/2 w-1/2 flex justify-center">
              <img src={vectorImage} className="h-1/2 mt-8"></img>
            </div>
            <div className="flex justify-center p-24 w-1/2 ">
              <form
                className="flex flex-col  shadow-2xl p-12 space-y-4  w-full"
                onSubmit={handlesubmit}
              >
                <h1 className="text-2xl font-semibold">Sign Up</h1>

                <div className="flex flex-col space-y-1 font-semibold">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="name"
                    onChange={onChange}
                    className="rounded-md p-3 "
                  ></input>
                </div>
                <div className="flex flex-col space-y-1 font-semibold">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    onChange={onChange}
                    className="rounded-md p-3 "
                  ></input>
                </div>
                <div className="flex flex-col font-semibold space-y-1">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    onChange={onChange}
                    className="rounded-md p-3 "
                  ></input>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white p-4 border-none rounded-md w-full"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}