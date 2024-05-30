import React, { useState } from 'react';
import axiosClient from '../../../../axios_client';
import { useStateContext } from '../../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function Create() {
  const [visatype, setvisatype] = useState({});
  const [errorList, setErrorList] = useState({});
  const { setNotification } = useStateContext();
  const navigate = useNavigate();
  const handleOnChange = (event) => {
    setvisatype(
      (pre) => ({
        ...pre,
        [event.target.name]: event.target.value,

      }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosClient.post('visatype/store', visatype).then((res) => {
      if (res.data.status === 200) {
        setNotification(res.data.message, '');
        event.target.reset();
        navigate('/dashboard/visatype');
      }
      else {
        setErrorList(res.data.validation_error)

      }
    }).catch(()=>{
      setNotification('Something went wrong', 'delete');
    })
  }


  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-3/5 mx-auto shadow-xl  bg-white border-none rounded-md"

      >
        <h4 className="text-xl  text-white fontstyle font-semibold  px-10 py-2 dark:text-white bg-blue-600 w-full border rounded-t-lg" id="formheading">
          Create
        </h4>
        <div className='p-8'>
          <div className="mb-5 flex flex-col">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
         
              type="text"
              id="name"
              name="name"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleOnChange}
            />
            <span className="text-red-600 self-center mt-2 italic" id="name">{errorList ? errorList.name : ''}</span>
          </div>

          <div className='flex space-x-4'>
            <div className="mb-5 flex flex-col w-1/2">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Meta Title
              </label>
              <input
                type="text"
                id="name"
                name="meta_title"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            
            </div>

            <div className="mb-5 flex flex-col w-1/2">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Meta Keywords
              </label>
              <input
                type="text"
                id="name"
                name="meta_keyword"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
             
            </div>

          </div>

          <div className="mb-5 flex flex-col w-full">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Meta Description
            </label>
            <textarea
              type="text"
              id="name"
              name="meta_description"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
           
          </div>

          <div className="mb-5 flex flex-col w-full">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Meta Scheama
            </label>
            <textarea
              type="text"
              id="name"
              name="meta_schema"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>


          <button
            id="submitbutton"
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
         
          <Link to='/dashboard/visatype'>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Cancel
          </button>
          </Link>
        </div>
      </form>

    </div>
  )
}
