import React from 'react'
import logo from "../image/logo.png";
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer(props){
    return (
      <>
        <div className="bg-black p-8 text-white min-w">
          <div className="container mx-auto flex-col  space-y-8">
            <div className="flex justify-center  items-baseline space-x-10">
              <div className="flex space-x-52">
                <img src={logo} className="h-32" alt="Flowbite Logo" />
                <h1 className="text-white self-center">Subscribe NewsLetter</h1>
                <form action="#" className="self-center">
                  <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                    <div className="relative w-full">
                      <label
                        htmlFor="email"
                        className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Email address
                      </label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                      <input
                        className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Enter your email"
                        type="email"
                        id="email"
                        required=""
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-red-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex space-x-8 ">
              <div className='flex flex-col'>
              <div className="flex flex-col space-y-4  w-full">
                <span className="font-semibold text-xl">About Company</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, incidunt asperiores! Eligendi accusantium
                  necessitatibus culpa corrupti sequi quas distinctio nobis
                  fugiat! Reiciendis sequi delectus blanditiis odit provident
                  eius, similique quibusdam!
                </span>
              </div>

              <div className='flex  mt-10 space-x-8'>
              <Link to="tel:+977982488696">
              <div>
                <div className='flex space-x-3'>
                 <PhoneIcon  style={{ fontSize: "3rem" }}></PhoneIcon>

                  <div className='flex flex-col'>
                    
                    <span>Make A Call</span>
                    <span>9824888696</span>
                  </div>
                </div>
              </div>
              </Link>

             <Link to="mailto:someone@example.com">
              <div>
                <div className='flex space-x-3'>
                 <EmailIcon  style={{ fontSize: "3rem" }}></EmailIcon>

                  <div className='flex flex-col'>
                    
                    <span>Email us</span>
                    <span>EuroDream@gmail.com</span>
                  </div>
                </div>
              </div>
              </Link>

      <Link to="https://www.instagram.com/?hl=en">
              <div>
                <div className='flex space-x-3'>
                 <InstagramIcon  style={{ fontSize: "3rem" }}></InstagramIcon>

                  <div className='flex flex-col'>
                    
                    <span>Contact us</span>
                    <span>EuroDream@gmail.com</span>
                  </div>
                </div>
              </div>
              </Link>
              </div>

        
              </div>
              

              <div className="w-1/2 px-4 ">
                <span>Quick Link</span>
                <div className="flex space-x-8">
                  <ul className="text-gray-500 dark:text-gray-400 font-medium mt-4">
                    <li className="mb-4">
                      <Link href="#" className=" hover:underline">
                        Bussiness Visa
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="#" className=" hover:underline">
                        Working Visa
                      </Link>
                    </li>

                    <li className="mb-4">
                      <Link href="#" className=" hover:underline">
                        Family Visa
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="#" className=" hover:underline">
                        Travel Visa
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="#" className=" hover:underline">
                        Student Visa
                      </Link>
                    </li>
                  </ul>{" "}
                  <ul className="text-gray-500 dark:text-gray-400 font-medium mt-4">
                    <li className="mb-4">
                      <Link href="#" className=" hover:underline">
                        Bussiness Visa
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="#" className=" hover:underline">
                        Working Visa
                      </Link>
                    </li>

                    <li className="mb-4">
                      <Link href="#" className=" hover:underline">
                        Family Visa
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="#" className=" hover:underline">
                        Travel Visa
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="#" className=" hover:underline">
                        Student Visa
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}