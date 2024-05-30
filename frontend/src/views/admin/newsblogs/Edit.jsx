import React,{useState,useEffect} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ImageUpload from '../../../components/ImageUpload';
import axiosClient from '../../../../axios_client';
import imageicon from '../../../image/image.png';
import { useParams ,useNavigate} from 'react-router-dom';
import { useStateContext } from '../../../context/ContextProvider';
import { Link } from 'react-router-dom';

export default function Edit() {
  const [errors,setErrorList] = useState({});
  const {setNotification} = useStateContext();
  const [blog,setBlog] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  const [ckeditordata ,setCkeditorData] = useState({
    description:''
  });

  const handleOnChange = (event)=>{
    setBlog((offer)=>({
        ...offer,
        [event.target.name]:event.target.value
    }))

  }

  const handleCkeditorState = (editorName,event,editor)=>{
    const data = editor.getData();
    setCkeditorData(prevState => ({
      ...prevState,
      [editorName]: data
    }));
   
 }
 const handleEdit = ()=>{
  axiosClient.get(`newsblog/edit/${id}`).then((response)=>{
  setBlog(response.data);
  document.getElementById('image_preview_image').setAttribute('src', `http://localhost:8000/image/blogs/${response.data.image}`);

});

}

useEffect(()=>{
  handleEdit();
},[]);
  
const handleUpdate = (event)=>{
  event.preventDefault();
      const formData = new FormData(event.target);
      formData.append('description',ckeditordata.description); 
      axiosClient.post(`newsblog/update/${blog.id}`,formData).then((response)=>{
      if(response.data.status==200){
        setNotification(response.data.message,'');
        event.target.reset();
        navigate('/dashboard/newsblogs');

      }else{
        setErrorList(response.data.errors);
      }

     }).catch(()=>{
      setNotification("Something Went Wrong",'delete');
    });
}
  return (
    <div>
       <form className=" ml-8 mx-auto shadow-xl "  onSubmit={handleUpdate}>
       <h4 className="text-xl  text-white fontstyle font-semibold  px-10 py-2 dark:text-white bg-blue-600 w-full border rounded-t-lg" id="formheading">Edit</h4>
<div className='p-8'>
          <div className="mb-5 flex flex-col  ">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
            value={blog.title || ''}
            name="title"
            onChange={handleOnChange}
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          <span className="text-red-600 self-center mt-2 italic" id="name">{errors ? errors.title : '' || ''}</span>
          </div>
          
          <ImageUpload name='image' lable="Image"></ImageUpload>
          <span className="text-red-600 self-center mt-2 italic" id="name">{errors ? errors.image : '' || ''}</span>

          <div className="mb-5 flex flex-col w-full">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <CKEditor
            data={blog.description || ''}
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

            <span className="text-red-600 self-center mt-2 italic " id="name">{errors ? errors.description : '' || ''}</span>
          </div>

          <div className='flex space-x-10'>
            <div className="mb-5 flex flex-col w-1/2">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Meta Title
              </label>
              <input
                 value={blog.meta_title || ''}
                 onChange={handleOnChange}
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
                value={blog.meta_keyword || ''}
                onChange={handleOnChange}
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
              value={blog.meta_description || ''}
              onChange={handleOnChange}
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
             value={blog.meta_schema || ''}
             onChange={handleOnChange}
              type="text"
              id="name"
              name="meta_schema"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          
          </div>
         
          <button
            type="submit"
        
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <Link to="/dashboard/newsblogs">
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Cancel
          </button>
          </Link>
          </div>
        </form>
    </div>
  )
}
