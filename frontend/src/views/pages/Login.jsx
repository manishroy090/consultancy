import React, { useState } from 'react'
import vectorImage from "../../image/vector/3545798.jpg";
import axiosClient from '../../../axios_client';
export default function  Login(){
const [value ,setValue] = useState({});
const handleChange=(event)=>{
        setValue((inputvalue)=>({
          ...inputvalue,
          [event.target.name]:event.target.value
        }))
}
const handleSubmit=(event)=>{
  event.preventDefault();
  axiosClient.post("/login", value).then((res)=>{
     setToken(res.data.user, res.data.authorisation);
   });

    //  fetch("http://127.0.0.1:8000/api/login", {
    //    method: "POST",
    //    body: JSON.stringify(value),
    //    headers: {
    //      Accept: "application/json",
    //      "Content-Type": "application/json",
    //    },
    //  })
    //    .then((response) => {})
    //    .then((response) => {});
}
    return (
      <>
        <div className="py-8 ">
          <div className="flex container mx-auto  w-/2 shadow-2xl border-none rounded-md">
            <div className=" h-1/2 w-1/2 flex justify-center">
              <img src={vectorImage} className="h-1/2 mt-20"></img>
            </div>
            <div className="flex justify-center p-24 w-1/2 ">
              <form
                className="flex flex-col  shadow-2xl p-12 space-y-4  w-full"
                onSubmit={handleSubmit}
              >
                <h1 className="text-2xl font-semibold">Login</h1>
                <span>Doestn't have an account yet? Sign Up</span>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="rounded-md p-3 font-semibold"
                    name="email"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="password" className="font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="rounded-md p-3 font-semibold"
                    name="password"
                    onChange={handleChange}
                  ></input>
                </div>
                {/* <div className="flex  space-x-4 font-semibold">
                  <input
                    type="checkbox"
                    id="checkbox"
                    className="self-center"
                  ></input>
                  <label for="checkbox">Remember me</label>
                </div> */}
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-4 border-none rounded-md  font-semibold"
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