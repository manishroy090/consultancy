import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StateContext = createContext({
  User: null,
  token: null,
  notification: null,
  setUser: () => { },
  setToken: () => { },
  setNotification: () => { },
  textFilter: () => { },
  getHeading:()=>{},
  renderHtml:()=>{ }
})

export const ContextProvider = ({ children }) => {
  const [User, setUser] = useState({
    name: "TestUser"
  });
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
  const [notification, _setNotification] = useState('');

  const setToken = (token) => {
    _setToken(token)
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {

    }
  }





  const setNotification = (message, action) => {

    if (action == "delete") {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    } else {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    }
  }
  const textFilter = (string, length) => {

    if (string) {
     let textWithoutHtml = string.replace(/<\/?[^>]+(>|$)/g, "");
      if (string && length) {
        return textWithoutHtml.substring(0, length);
      }
      else {
        return textWithoutHtml;
      }

    }
  }

  const renderHtml=(string,id)=>()=>{
    console.log("method called");
    // console.log(id);
    // Document.getElementbyId(id).innerHTML=string;

  }

  const getHeading = (description,noElement)=>{

    if(description){
      const headingPattern = /<h[1-6][^>]*>.*?<\/h[1-6]>/gi;
      const headings = description.match(headingPattern);
      return headings.slice(0, noElement);
    }
    else{
      return [];
    }
  }


  return (
    <StateContext.Provider value={{
      User,
      setUser,
      token,
      setToken,
      notification,
      setNotification,
      textFilter,
      getHeading,
      renderHtml
    }}>
      {children}
      <ToastContainer />
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);