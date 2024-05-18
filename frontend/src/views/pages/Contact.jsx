import React from 'react';
import vectorImage from "../../image/vector/4333606.jpg";

export default function Contact() {
  return (
    <div className="py-8 ">
          <div className="flex container mx-auto  w-/2 shadow-2xl border-none rounded-md">
            <div className=" h-1/2 w-1/2 flex justify-center">
              <img src={vectorImage} className="h-1/2 mt-8"></img>
            </div>
            <div className="flex justify-center px-24 py-6 w-1/2 ">
              <div className="flex flex-col  shadow-2xl border-none rounded-md p-12 space-y-4  w-full">
                <h1 className="text-2xl font-semibold">Sign Up</h1>
                <div className="flex flex-col space-y-1 font-semibold">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    className="rounded-md p-3 "
                  ></input>
                </div>
                <div className="flex flex-col space-y-1 font-semibold">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="rounded-md p-3 "
                  ></input>
                </div>
                <div className="flex flex-col font-semibold space-y-1">
                  <label htmlFor="phone_number">Phone Number</label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="phone_number"
                    className="rounded-md p-3 "
                  ></input>
                </div>
                <div className="flex flex-col font-semibold space-y-1 ">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    className="rounded-md p-3 "
                  ></input>
                </div>
                <div className="flex flex-col font-semibold space-y-1 ">
                  <label htmlFor="message">Message</label>
                  <textarea
                    type="text"
                    id="message"
                    placeholder="Message"
                    className="rounded-md p-3 "
                  ></textarea>
                </div>
                <button className="bg-blue-600 text-white p-4 border-none rounded-md">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}
