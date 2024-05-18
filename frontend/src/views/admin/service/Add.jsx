import react ,{ useState } from "react";
import axiosClient from '../../../../axios_client';
import { useStateContext } from '../../../context/ContextProvider';


export default function Add() {
   const [service ,setService] = useState({});
   const {setNotification} = useStateContext();

    const handleOnchange = (event)=>{
      setService(()=>({
        ...service,
        [event.target.name]:event.target.value
      }));
    }

    const handleSubmit = (event)=>{
      event.preventDefault();
      const data = new FormData(event.target);
      axiosClient.post('service/store',data).then((response)=>{
        setNotification("Service created successfully",'');


      }).then((response)=>{

      });
    }
  return (
    <div>
        <form className="max-w-fit  mx-auto shadow-xl border-none rounded-md" onSubmit={handleSubmit}>
          <h4 className="text-xl  dark:text-white bg-blue-600 w-full border-none px-8 rounded-t text-white p-1">
            Create
          </h4>
          <div className=" flex flex-col space-y-8 p-8">
            <div className="lg:flex flex-col sm:flex-row  lg:space-x-40">
              <div className="mb-5">
                <label
                  htmlFor="large-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  onChange={handleOnchange}
                  name="title"
                  type="text"
                  id="large-input"
                  className="block w-96 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="mb-5">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="user_avatar"
                >
                  Icon
                </label>
                <input
                     onChange={handleOnchange}
                  name="icon"
                  className="block w-96  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="user_avatar_help"
                  id="user_avatar"
                  type="file"
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="user_avatar"
              >
                Image
              </label>
              <input
                   onChange={handleOnchange}
                name="image"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                onChange={handleOnchange}
                name="description"
                type="text"
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="flex">
              <div className="flex items-center h-5">
                <input
                     onChange={handleOnchange}
                  name="specialoffer"
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Special Offer
              </label>
            </div>

            <div className="flex">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Submit
              </button>
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
  )
}
