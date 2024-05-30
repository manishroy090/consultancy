import React,{ useState ,useEffect} from 'react';
import axiosClient from '../../../axios_client';
export default function Blogs() {
  const [blogs,setBlogs] = useState([]);
  const fetchData = async ()=>{
    const res = await axiosClient.get('frontend/blogs')
    const  {blogs} = res.data;
    setBlogs(blogs);
  
}
  
  useEffect(()=>{
    fetchData();
  },[

  ]);
  return (
    <div className="relative flex flex-col space-y-0  h-fit mb-96">
    <div className="blogbanner h-96 bg-red-600 flex justify-center items-center text-3xl font-semibold">
      <h1 className=" ">
      Blogs
      </h1>
    </div>
    <svg
      className="absolute top-10"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,256L80,250.7C160,245,320,235,480,224C640,213,800,203,960,213.3C1120,224,1280,256,1360,272L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
    <div className="flex p-8 absolute  top-80 space-x-14 container ml-32 ">
      {blogs.map((item,index)=>(
      <div className="flex flex-col w-80">
        <div className="">
          <img className="object-fill h-56 " src={`http://localhost:8000/image/blogs/${item.image}`}  />
        </div>
        <div className=" shadow-2xl p-4 ">
          <h1 className="text-wrap font-semibold text-xl">
          {item.title.substring(0, 30)}
          </h1>
          <p className="text-wrap">
          {item.description.substring(0, 100)}
          </p>
        </div>
      </div>
             ))}

      
    </div>
  </div>
  )
}
