import React, { useState,useEffect } from 'react'
import { useNavigate ,useParams} from 'react-router-dom';
import axiosClient from '../../../../axios_client';
import { useStateContext } from '../../../context/ContextProvider';
import { Link } from 'react-router-dom';




export default function Edit() {
  const [visatype, setVisaType] = useState({});
  const [errorList, setErrorList] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();
  const { setNotification } = useStateContext();



  const handleOnChange = (event) => {
    setVisaType(
      (pre) => ({
        ...pre,
        [event.target.name]: event.target.value,

      }));
  }

  const editCountry = async ()=>{
   axiosClient.get(`visatype/edit/${id}`).then((response)=>{
     setVisaType(response.data);
    })

  }

  const update = (event)=>{
    event.preventDefault();
    axiosClient.post(`visatype/update/${visatype.id}`,visatype).then((response)=>{
      
      if(response.data.status===200){
        setNotification(response.data.message,'');
        event.target.reset();
        setErrorList({});
        navigate('/dashboard/visatype');

       }
       else{
        setErrorList(response.data.validation_error)
  
       }
    }).catch((error)=>{
      setNotification("something went wrong",'delete');
    });
   }



  useEffect(()=>{
    editCountry();

  },[id])




  return (
    <div>
      <form
      onSubmit={update}
        className="w-3/5 mx-auto shadow-xl  bg-white border-none rounded-md"

      >
        <h4 className="text-xl  text-white fontstyle font-semibold  px-10 py-2 dark:text-white bg-blue-600 w-full border rounded-t-lg" id="formheading">
          Edit
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
              value={visatype.name || ''}
              type="text"
              id="name"
              name="name"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleOnChange}
            />
            <span className="text-red-600 self-center mt-2" id="name">{errorList ? errorList.name : ''}</span>
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
               onChange={handleOnChange}
                value={visatype.meta_title || ''}
                type="text"
                id="name"
                name="meta_title"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span className="text-red-600 self-center mt-2" id="name">

              </span>
            </div>

            <div className="mb-5 flex flex-col w-1/2">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Meta Keywords
              </label>
              <input
               onChange={handleOnChange}
               value={visatype.meta_keyword || ''}
                type="text"
                id="name"
                name="meta_keyword"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span className="text-red-600 self-center mt-2" id="name">

              </span>
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
             onChange={handleOnChange}
              value={visatype.meta_description || ''}
              type="text"
              id="name"
              name="meta_description"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span className="text-red-600 self-center mt-2" id="name">

            </span>
          </div>

          <div className="mb-5 flex flex-col w-full">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Meta Scheama
            </label>
            <textarea
             onChange={handleOnChange}
              value={visatype.meta_schema || ''}
              type="text"
              id="name"
              name="meta_schema"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span className="text-red-600 self-center mt-2" id="name">

            </span>
          </div>


          <button
            id="submitbutton"
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Update
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
