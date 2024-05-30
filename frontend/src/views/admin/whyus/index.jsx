import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axiosClient from '../../../../axios_client';
import { useStateContext } from '../../../context/ContextProvider';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ConstructionOutlined } from "@mui/icons-material";


export default function index() {
  const [isedit, setIsEdit] = useState(false);
  const [whyus ,setwhyys] = useState({});
  const [whyuslist,setwhyuslist] = useState([]);
  const [errorList , setErrorList] = useState({});
  const {setNotification} = useStateContext();
  const [counter ,setCounter] = useState(0);
  const [ckeditordata ,setCkeditorData] = useState({
    description:''
  });


  

  const handleOnChange = (event)=>{
    setwhyys((whyus)=>({
        ...whyus,
        [event.target.name]:event.target.value

    }))
  }

  const fetchData = async ()=>{
   const res = await  axiosClient.get('whyus/index');
   setwhyuslist(res.data);

  }


  const handleCkeditorState = (editorName, event, editor) => {
    const data = editor.getData();
    setCkeditorData(prevState => ({
      ...prevState,
      [editorName]: data
    }));

  }

  useEffect(()=>{
    formRest();
    fetchData();
    setErrorList({});
    setIsEdit(false);
    document.getElementById('formheading').innerText="Create";
    document.getElementById('submitbutton').innerText="Submit";
  },[counter]);

  const handleOnSubmit = (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('description',ckeditordata.description)
    axiosClient.post('whyus/store',formData).then((response)=>{
           if(response.data.status ===200){
            setNotification(response.data.message,'');
            setCounter(counter+1);

           }
           else{
            setErrorList(response.data.errors);
           }
    }).catch((error)=>{
       console.log(error);
      setNotification("Something went Wrong",'delete');

     });;
  }
  


  const handleedit = (id)=>{
    axiosClient.get(`whyus/edit/${id}`).then((response)=>{
      setwhyys(response.data);
      document.getElementById('formheading').innerText="Edit";
      document.getElementById('submitbutton').innerText="Update";
      setCkeditorData({'description':response.data.description});
      setIsEdit(true);
    })
  }

  const handleupdate = (event)=>{
     event.preventDefault();
     const formData = new FormData(event.target);
     formData.append('description',ckeditordata.description)
     axiosClient.post(`whyus/update/${whyus.id}`,formData).then((response)=>{
      if(response.data.status ===200){
        setNotification(response.data.message,'');
        setCounter(counter+1);
      
      }
      else{
        setErrorList(response.data.errors);

      }

     }).catch((error)=>{
      console.log(error);
      setNotification("Something went Wrong",'delete');

     });

  }

  const handledelete = (id)=>{
    axiosClient.get(`whyus/delete/${id}`).then((res)=>{
      setNotification(res.data.message,'delete');
      setCounter(counter+1);
    }).catch(()=>{
      setNotification("Something went Wrong",'delete');

     });
  }

  const formRest = ()=>{
    const form = document.querySelector('#whyusform');
    form.reset();
    setCkeditorData({description:""});  // Clear CKEditor data
    setwhyys({});
   
  }
  return (
    <div className="flex  space-x-32 overflow-x-auto  sm:rounded-lg bg-gray-100 shadow-xl p-4">
    <div className="w-1/2 bg-white overflow-x-auto  sm:rounded-lg p-8 border-none  rounded-md shadow-sm">
      <div className="flex  justify-between pr-24 ">
        <div className="pb-4 ">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4 hidden">
              <div className="flex items-center ">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              sn
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
          

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {whyuslist.map((item,index)=>(
            <tr
               key={index}
              className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
   
            >
              <td className="w-4 p-4">
                 {index+1}
              </td>
          
              <td className="px-6 py-4">{item.title}</td>
       
              <td className="px-6 py-4 flex space-x-8">
                <Link
                onClick={handleedit.bind(this, item.id)}
                  className="font-medium text-blue-600 bg-slate-200 p-2 hover:bg-black hover:text-white rounded-md dark:text-blue-500 hover:underline"
                >
                  <EditIcon
             
                  ></EditIcon>
                </Link>
                <Link
                onClick={handledelete.bind(this, item.id)}
                  className="font-medium text-red-600 bg-slate-200 p-2 hover:bg-black hover:text-white rounded-md dark:text-blue-500 hover:underline"
                >
                  <DeleteIcon
                  
                  ></DeleteIcon>
                </Link>
              </td>
            </tr>
              ))}
     
        </tbody>
      </table>
    </div>
    <div>
      <form
       id="whyusform"
        className="w-full mx-auto shadow-xl  bg-white border-none rounded-md"
        onSubmit={isedit ? handleupdate : handleOnSubmit}
      >
          <h4 className="text-xl  text-white fontstyle font-semibold  px-10 py-2 dark:text-white bg-blue-600 w-full border rounded-t-lg" id="formheading">
          Create
        </h4>
<div className="p-8">
        <div className="mb-5 flex flex-col">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            value={whyus.title || ''}
            type="text"
            id="name"
            name="title"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleOnChange}
          />
          <span className="text-red-600 self-center mt-2" id="name">
          {errorList.title}
          </span>
        </div>

        <div className="mb-5 flex flex-col">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="user_avatar"
          >
            Description
          </label>
     
          <CKEditor
          data={ckeditordata.description}
              name="description"
              editor={ClassicEditor}
              onChange={(editor, data) => handleCkeditorState('description', editor, data)}
              onReady={(editor)=>{
                const view = editor.editing.view;
                const root = view.document.getRoot();
                view.change((writer) => {
                  writer.setStyle('max-height', '250px', root);
                  writer.setStyle('min-height', '180px', root);
                });
             }}

            />
          <span className="text-red-600 self-center mt-2">
          {errorList.description}
          </span>
        </div>
        <button
          id="submitbutton"
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <button
         onClick={formRest}
          type="button"
          className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Reset
        </button>
        </div>
      </form>
    </div>
  </div>
  )
}
