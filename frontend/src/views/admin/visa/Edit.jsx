import React, { useState, useEffect } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ImageUpload from '../../../components/ImageUpload';
import axiosClient from '../../../../axios_client';
import { useStateContext } from '../../../context/ContextProvider';
import {useParams} from "react-router-dom";
import { Link ,useNavigate} from 'react-router-dom';
export default function Edit() {
  const [visa, setVisa] = useState({});
  const [visaTypeList, setVisatypeList] = useState([]);
  const [errorList, setErrorList] = useState({});
  const [countriesList, setCountry] = useState([]);
  const [courses, setCourses] = useState([]);
  const [ckeditordata, setCkeditorData] = useState({
    description: '',
    working_process: '',
    document_required: ''
  });
  const { setNotification } = useStateContext();
  const {id} = useParams();
  const navigate = useNavigate();


  const fetchData = async () => {
    axiosClient.get('visa/index').then((res) => {
      setVisatypeList(res.data.visaType);
      setCountry(res.data.countries);
      setCourses(res.data.courses);
     
    });

  }
  const editvisa = () => {
    axiosClient.get(`visa/edit/${id}`).then((response) => {
     setVisa(response.data.visa);
     document.getElementById('image_preview_image').setAttribute('src', `http://localhost:8000/image/visas/${response.data.visa.image}`);
   })

 }

  useEffect(() => {
    fetchData();
    editvisa();
  }, []);

  const handleCkeditorState = (editorName, event, editor) => {
    const data = editor.getData();
    setCkeditorData(prevState => ({
      ...prevState,
      [editorName]: data
    }));
  }


  const handleOnChange = (event) => {
    setVisa(
      (pre) => ({
        ...pre,
        [event.target.name]: event.target.value,

      }));
  }


  const update = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('description',ckeditordata);
    formData.append('working_process',ckeditordata.working_process);
    formData.append('document_required',ckeditordata.document_required);
    axiosClient.post(`visa/update/${id}`, formData).then((res) => {
     if(res.data.status===200){
      setNotification(res.data.message, '');
      navigate('/dashboard/visa');
      setErrorList({})

    }else{
      
      setErrorList(res.data.validation_error);
     }
     
    }).catch(()=>{
      setNotification("Something went wrong", 'delete');

    });
  }




  return (
    <div>
       <form
        onSubmit={update}
        className="w-1/2 mx-auto shadow-xl  bg-white border-none rounded-md"

      >
        <h4 className="text-xl  text-white fontstyle font-semibold  px-10 py-2 dark:text-white bg-blue-600 w-full border rounded-t-lg" id="formheading">
          Create
        </h4>
        <div className='px-10 py-8'>
        <div className='flex space-x-10'>
          <div className="mb-5 flex flex-col w-96">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Visatype
            </label>
            <select
            value={visa.visa_type_id || ''}
            onChange={handleOnChange}
          
              name="visa_type_id"
              id="visa_id"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled value=''>Choose a VisaType</option>
              {visaTypeList.map((item, index) => (
                <option value={item.id} key={index}>{item.name}</option>
              ))}

            </select>
            <span className="text-red-600 self-center mt-2 italic">{errorList ? errorList.visa_type_id : '' || ''}</span>
          </div>

          <div className="mb-5 flex flex-col w-96">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Country
            </label>
            <select
                   value={visa.country_id || ''}
            onChange={handleOnChange}
    
              name="country_id"
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled value=''>Choose a country</option>
              {countriesList.map((item, index) => (
                <option value={item.id} key={index} >{item.name}</option>
              ))}

            </select>
            <span className="text-red-600 self-center mt-2 italic">{errorList ? errorList.country_id : '' || ''}</span>
          </div>

        </div>


        <div className="mb-5 flex flex-col w-full">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Courses
          </label>
          <select
             
             value={visa.course_id || ''}
          onChange={handleOnChange}
            name="course_id"
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option disabled value=''>Choose a Courses</option>
            {courses.map((item, index) => (
              <option value={item.id} key={index} >{item.name}</option>
            ))}

          </select>
          <span className="text-red-600 self-center mt-2 italic">{errorList ? errorList.course_id  : '' || ''}</span>
        </div>

        <ImageUpload className="w-full" name="image" lable="Image"></ImageUpload>
        <span className="text-red-600 self-center mt-2 italic">{errorList ? errorList.image  : '' || ''}</span>

        <div className="mb-5 flex flex-col w-full">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <CKEditor
          data={visa.description}
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

          <span className="text-red-600 self-center mt-2 italic" id="name">{errorList?.description ? errorList.description : '' || ''}</span>
        </div>

        <div className="mb-5 flex flex-col w-full">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Working Process
          </label>
          <CKEditor
          data={visa.working_process}
            name="working_process"
            editor={ClassicEditor}
            onChange={(editor, data) => handleCkeditorState('working_process', editor, data)}
            onReady={(editor)=>{
              const view = editor.editing.view;
              const root = view.document.getRoot();
              view.change((writer) => {
                writer.setStyle('max-height', '250px', root);
                writer.setStyle('min-height', '180px', root);
              });
           }}

          />

          <span className="text-red-600 self-center mt-2  italic" id="name">{errorList?.working_process ? errorList.working_process : '' || ' '}</span>
        </div>

        <div className="mb-5 flex flex-col w-full">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Required  Document
          </label>
          <CKEditor
          data={visa.document_required}
            name="document_required"
            editor={ClassicEditor}
            onChange={(editor, data) => handleCkeditorState('document_required', editor, data)}
            onReady={(editor)=>{
              const view = editor.editing.view;
              const root = view.document.getRoot();
              view.change((writer) => {
                writer.setStyle('max-height', '250px', root);
                writer.setStyle('min-height', '180px', root);
              });
           }}

          />

          <span className="text-red-600 self-center mt-2 italic" id="name">{errorList?.document_required ? errorList.document_required : '' || ''}</span>
        </div>



        <button
          id="submitbutton"
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <Link to='/dashboard/visa'>
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
