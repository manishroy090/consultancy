import react ,{ useState } from "react";
import axiosClient from '../../../../axios_client';
import { useStateContext } from '../../../context/ContextProvider';
import ImageUpload from '../../../components/ImageUpload';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export default function Create() {
   const [service ,setService] = useState({});
   const {setNotification} = useStateContext();
   const [errors,seterrorslist] = useState({});
   const navigate = useNavigate();

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
        if(response.data.status ===200){
          setNotification(response.data.message,'');
          navigate('/dashboard/services');
        }
        else{
          seterrorslist(response.data.errors);
        }
        

      }).catch(()=>{
        setNotification("Something went wrong",'delete');

      });
    }
  return (
    <div>
        <form className="max-w-fit  mx-auto shadow-xl border-none rounded-md" onSubmit={handleSubmit}>
        <h4 className="text-xl  text-white fontstyle font-semibold  px-10 py-2 dark:text-white bg-blue-600 w-full border rounded-t-lg" id="formheading">
            Create
          </h4>
          <div className=" flex flex-col space-y-8 p-8">
           
              <div className="mb-5 w-full">
                <label
                  htmlFor="large-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                >
                  Title
                </label>
                <input
                  onChange={handleOnchange}
                  name="title"
                  type="text"
                  id="large-input"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span className="text-red-600 italic text-center px-10 ">{errors ? errors.title : '' || ''}</span>
              </div>
            <div className="flex  space-x-16">
           
              <ImageUpload name='icon' lable="Icon"/>
           
              
          <div className="flex flex-col">
          <ImageUpload name='image' lable="Image"/>
          <span className="text-red-600 italic text-center px-10 ">{errors ? errors.image : '' || ''}</span>
          </div>
     
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
                       <span className="text-red-600 italic text-center px-10 ">{errors ? errors.description : '' || ''}</span>
            </div>

            <div className="flex">
              <div className="flex items-center h-5">
                <input
                  onChange={handleOnchange}
                  name="specialoffer"
                  id="remember"
                  type="checkbox"
                  value={1}
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
              <Link to="/dashboard/services">
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Cancel
              </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
  )
}
