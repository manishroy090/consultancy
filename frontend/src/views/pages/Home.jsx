import { useState, useEffect } from "react";


import bannerone from "../../image/Banner/bannerone.jpg";
import bannertwo from "../../image/Banner/bannertwo.jpg";
import bannerthree from "../../image/Banner/bannerthree.jpg";
import aboutimgone from "../../image/image1.png";
import aboutimage2 from "../../image/image2.jpg";

import abouticonfive from "../../image/iconfive.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import icon from "../../image/country/icon.png";
import austrailiaflag from "../../image/country/Flag_of_Australia_converted.svg-ezgif.com-webp-to-png-converter.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import whyusne from "../../image/whyone.jpg";
import whyustwo from "../../image/whyustwo.png";
import whyusthree from "../../image/whyusthree.webp";
import airhostess from "../../image/women.png";
import testimonialiconone from "../../image/discover-1.png";
import testimonialicontwo from "../../image/df.png";
import testimonialiconthree from "../../image/why-1-1.png";
import testimonialiconfour from "../../image/NicePng_quotation-marks-png_739585.png";
import testimonialiconfive from "../../image/Excellence-in-Immigration-1.png";
import PersonIcon from "@mui/icons-material/Person";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import axiosClient from '../../../axios_client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "flowbite-react";
import { useStateContext } from '../../context/ContextProvider';


export default function Home() {
  const [offers, setOffers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [teammembers, setTeammembers] = useState([]);
  const [aboutus, setAboutus] = useState({});
  const [patners, setPatners] = useState([]);
  const { textFilter, getHeading } = useStateContext();
  const [services, setServices] = useState([]);
  const [specialservices, setSpecialServices] = useState([]);
  const [whyus, setWhyus] = useState({});
  const [countries, setCountries] = useState([]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 2000,
    autoplay: true,
    focusOnSelect: true,
    responsive: [

      {
        breakpoint: 1020,
        settings: "unslick"
      },
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 1296,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      

    ]
  };


  const testimonial = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    focusOnSelect: true,
    responsive: [

      {
        breakpoint: 1020,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          autoplay: true,
          focusOnSelect: true,
        }
      },

      {
        breakpoint: 412,
        settings: "unslick"
      },

    ]
  };


  const countriesob = {

    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    focusOnSelect: true,
     responsive: [
      {
        breakpoint: 433,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          rows: 1,
          slidesToScroll: 1,
          autoplaySpeed: 1000,
          autoplay: true,
          focusOnSelect: true,
        }
        
      },
      // {
      //   breakpoint: 811,
      //   settings: {
      //     dots: false,
      //     infinite: true,
      //     speed: 500,
      //     slidesToScroll: 1,
      //     autoplaySpeed: 1000,
      //     autoplay: true,
      //     focusOnSelect: true,
      //   }
        
      // },
      // {
      //   breakpoint:1081,
      //   settings: {
      //     dots: false,
      //     infinite: true,
      //     speed: 500,
      //     slidesToScroll: 1,
      //     autoplaySpeed: 1000,
      //     autoplay: true,
      //     focusOnSelect: true,
      //   }
        
      // },

    ]
  };




  const fetchData = async () => {
    const res = await axiosClient.get('frontend/home');
    const { teammembers, blogs, testimonials, offers, countries, aboutus, patners, services, specialservices, whyus } = res.data;
    setOffers(offers);
    setBlogs(blogs);
    setPatners(patners);
    setTestimonials(testimonials);
    setTeammembers(teammembers);
    setAboutus(aboutus);
    setServices(services);
    setSpecialServices(specialservices);
    setWhyus(whyus);
    setCountries(countries);
  }

  useEffect(() => {
    fetchData();
  }, [

  ]);



const contactUs =(event)=>{

  event.preventDefault();
  let data = new FormData(event.target);
  axiosClient.post('frontend/contact',data).then((res)=>{
    console.log(res);

  }).catch((error)=>{
    console.log(error)
  })

}

  return (
    <>
      <div className="2xl:h-[50vh] w-full h-52 border-none  bg-blue-600">
        <Carousel>
          <img src={bannerone} alt="..." className="object-cover" />
          <img src={bannertwo} alt="..." />
          <img src={bannerthree} alt="..." />
        </Carousel>

      </div>
      <div className="text-white text-center offersection fontstyle flex flex-col justify-center items-center py-8">

        <span className="mt-8 text-2xl">What We Offer</span>
        <h1 className="sm:text-2xl text-nowrap font-semibold ">
          Professional Offer For Immigrate
        </h1>

        <div className="xl:container xl:mx-auto lg:container">

          {offers.length > 0 ? (
            <Slider {...settings}>
              {offers.map((item, index) => (
                <div className=" w-auto">
                  <div className="card  relative w-80 sm:w-96 h-80 sm:h-80     p-10  offercard text-left mt-20">
                    <div className=" w-20 absolute border-none rounded-full bg-red-600  p-2 z-10 sm:bottom-72 bottom-72">
                      <img src={`http://localhost:8000/image/offer/${item.icon}`} className="object-cover rounded-full w-full"></img>
                    </div>
                    <div className="flex flex-col mt-4 w-full">
                      <span className="text-xl text-nowrap font-bold">
                        {item.title}
                      </span>
                      <span className="mt-2  text-wrap line-clamp-6 text-left ">
                        {textFilter(item.description)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="w-full text-center font-semibold">
              No Offer Yet
            </div>

          )}


        </div>

        {/* <img src={iconfive} className="object-fill "></img> */}
      </div>
      <div className="container  mx-auto flex flex-col  space-y-20 sm:space-y-0      xl:flex-row  md:flex-col md:space-x-0 md:space-y-14  sm:space-x-96 fontstyle mt-20 sm:p-10">
        <div className=" w-full relative  px-10 ">
          <span className="text-2xl text-red-500 font-semibold text-nowrap text-center  block xl:hidden 2xl:hidden mb-4">About us</span>
          <div className="">
            <img className="object-fill h-96 w-96  " src={aboutimgone} />
          </div>
          <div className="absolute bg-red-600   border-none rounded-full   xl:w-fit sm:h-fit xl:top-80  xl:right-96 top-96 z-20    ">
            <img className="object-fill h-20  " src={abouticonfive} />
          </div>
          <div className="bg-sky-300  absolute w-80 xl:w-96 md:w-96 h-fit xl:top-60 xl:left-52 md:left-52 top-72 left-24">
            <img
              className="object-fill w-full "
              src={aboutimage2}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2  ">
          <span className="text-2xl text-red-500 font-semibold text-nowrap sm:block hidden">About us</span>
          <h1 className="text-3xl font-semibold">
            {aboutus ? aboutus.title : 'No Tiltle Yet'}
          </h1>
          <p className=" mt-8">
            {aboutus ? textFilter(aboutus.description, 250) : 'No Description Yet'}
          </p>
          <div className="flex">
            <div className="flex  space-x-10">
              <div className="parent flex flex-col space-y-10">
                <ul className="about_list text-nowrap">
                  {aboutus && aboutus.description && getHeading(aboutus.description, 8).map((item, index) => (
                    <li key={index}> {textFilter(item)}</li>
                  ))}

                </ul>
                <button className="self-start bg-red-600 p-4 text-white text-nowrap ">
                  Learn More
                  <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>{" "}
      <div className="  text-center fontstyle flex flex-col justify-center items-center py-8">
        <h1 className="text-red-600 text-2xl font-semibold text-nowrap">
          Service We provide
        </h1>

        <span className="sm:text-3xl text-xs  font-semibold text-nowrap text-black">
          Explore Our Visa Citizenship & Immigration Service
        </span>
        <div className="xl:container xl:mx-auto lg:container mt-6">
          <Slider {...settings}>
            {services.map((item, index) => (
              <div className="pb-52">
                <div className="sm:w-96 w-80 w h-72 bg-red-600" key={index}>
                  <div className="relative w-full h-full bg-blue-600 p-0">
                    <img className="object-cover h-full" src={`http://localhost:8000/image/service/${item.image}`} />
                  </div>
                  <div className="flex flex-col -translate-y-20 translate-x-0 h-fit ">
                    <div className="bg-red-600 w-24 h-20 p-4 text-center">
                      <img className="object-fit" src={`http://localhost:8000/image/service/${item.icon}`} />
                    </div>
                    <div className="bg-white card w-82 h-full  text-center p-4">
                      <span className="font-bold text-xl">{item.title}</span>
                      <p className="text-sm text-justify">{textFilter(item.description, 180)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

        </div>
      </div>
      <div className="container relative mx-auto flex flex-col sm:flex-row  xl:w-full xl:h-[34rem] lg:h-[29rem] md:h-[30rem] sm:bg-white shadow-lg border-t-4 border-red-600 ">
        <div className="order-last sm:order-first  xl:w-2/5 sm:w-1/3">
          <img src={icon} className="object-cover  h-[28rem] xl:h-[34rem] lg:h-[29rem] md:absolute  bottom-0 md:h-[21rem] xl:left-0 md:right-96 lg:right-[32rem]"></img>
          <Slider {...countriesob}>
          {countries.map((item, index) => (
            <div>
          <div className="flex sm:hidden space-x-5 bg-white-600 card bg-red-600 w-full">
            <div className="flex  space-x-5 p-2">
              <img
                className="rounded-full w-[4rem] h-16 "
                src={`http://localhost:8000/image/country/${item.image}`}
                alt="image description"
              />

              <span className="self-center text-white">Australia</span>
            </div>
            {/* <div className="bg-blue-600 h-10 w-[4rem]  text-white flex justify-center items-center">
              <ArrowForwardIcon></ArrowForwardIcon>
            </div> */}
          </div>
          </div>
          ))}
          </Slider>

        </div>
        <div className="xl:px-12 xl:w-3/5 w-2/3   text-center fontstyle hidden md:block">
          <h1 className="text-red-600 text-2xl font-semibold p-10 ">
            Choose Country
          </h1>
          <span className="text-4xl  font-semibold">
            Immigration Choose Your Country
          </span>
          <div className="">
            <Slider {...countriesob}>
              {countries.map((item, index) => (
                <div className="py-4">
                  <div className=" bg-white shadow-lg  xl:ml-40 md:ml-4 mt-4 flex justify-between">
                    <div className="flex space-x-5 xl:p-2 w-20 h-20" >
                      <img
                        className="rounded-full object-cover"
                        src={`http://localhost:8000/image/country/${item.image}`}
                        alt="image description"
                      />
                      <span className="self-center text-nowrap">{item.name}</span>
                    </div>
                    <div className="bg-red-600 h-10 w-10 text-white flex ">
                      <ArrowForwardIcon></ArrowForwardIcon>
                    </div>
                  </div>

                </div>


              ))}
            </Slider>

          </div>
        </div>
      </div>
      <div className="text-center fontstyle flex flex-col justify-center items-center py-16 mt-32 sepecial">
        <h1 className="text-center sm:text-white xl:text-3xl font-semibold text-red-600 text-2xl  w-96">
          Special Care Services
        </h1>
        <span className="text-center xl:text-2xl sm:text-white text-xl font-semibold mt-4 w-96">
          We Provide Special Care To Make Easy Your Dream
        </span>



        <div className="xl:container xl:mx-auto lg:container">

          <Slider {...settings}>
            {specialservices.map((item, index) => (
              <div className="">
                <div className="sm:w-96 w-80 h-96 relative mt-20" key={index}>
                  <div className=" w-full h-full">
                    <img className="object-cover object-center h-full" src={`http://localhost:8000/image/service/${item.image}`} />
                  </div>
                  <div className="bg-red-600 absolute top-80  text-white text-center p-4 w-full pb-5   flex  justify-between  items-start  text-xl font-semibold">

                    <span className="">{item.title}</span>

                    <ArrowForwardIcon className=""></ArrowForwardIcon>
                  </div>
                  <div></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
      <div className="w-full flex  xl:ml-10  h-5/6  fontstyle pt-32  flex-col  items-center  xl:flex-row">
        <div className="sm:w-3/4 flex flex-col space-y-3 p-10 ">
          <span className="text-red-600 sm:text-2xl text-xl text-nowrap font-bold">Why Choose Us</span>
          <h1 className="sm:text-4xl text-sm text-nowrap sm:text-wrap font-bold ">
            {whyus ? whyus.title : 'No Title'}
          </h1>
          <div>
            {whyus ? textFilter(whyus.description, 277) : 'No Description'}
          </div>

          <div className="flex flex-col     space-y-8  w-96">
            <ul className="about_list text-nowrap sm:text-2xl  text-xl w-full ">
              {whyus && whyus.description && getHeading(whyus.description, 8).map((item, index) => (
                <li key={index}> {textFilter(item)}</li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex  relative  space-x-10 xl:space-x-0 xl:w-full">
          <div className="xl:w-1/2 w-52">
            <img className="object-cover h-96  w-72 rounded-md sm:block hidden" src={whyusne} />
          </div>
          <div className="xl:w-1/2  w-52 absolute xl:top-10 xl:left-80 xl:block hidden rounded-md">
            <img className="object-fill  h-80 w-96 " src={whyustwo} />
          </div>

          <div className="xl:w-2/4 w-60  absolute  xl:left-80  xl:top-96">
            <img className="object-fill h-96" src={whyusthree} />
            <div className="w-72 bg-red-600  absolute  top-28 right-96 p-8 text-white xl:block hidden">
              <span className="text-xl  font-bold">10m + Trusted customer</span>
              <div className=" flex space-x-2 overflow-hidden mt-4">
                <img
                  className="inline-block h-12 w-26 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center fontstyle flex flex-col justify-center items-center py-8 mt-96">
        <h1 className="text-red-600 text-3xl font-semibold">Team Member</h1>
        <span className="sm:text-4xl font-semibold  p-4 ">
          Meet Our Experience Visa Consultant
        </span>
        <div className="xl:container xl:mx-auto lg:container">
          <Slider {...settings}>
            {teammembers.map((item, index) => (
              <div>
                <div className=" rounded-tl-md rounded-br-md  sm:w-96  w-80 h-96  mt-20 teammember" key={index}>

                  <img className="object-cover  w-full h-full object-top relative" src={`http://localhost:8000/image/teammember/${item.image}`} />
                  <div className="absolute w-96 bottom-1  sm:p-5   teammemberdescription   text-left backdrop-opacity-10 backdrop-invert flex flex-col  bg-white/50">
                    <span className="first-letter:text-5xl text-2xl uppercase">{item.title}</span>
                    <span className="text-2xl first-letter:uppercase px-4">-  {item.designation}</span>
                  </div>

                </div>
              </div>

            ))}
          </Slider>

        </div>
      </div>
      <div className="flex  mt-20 xl:w-full fontstyle flex-col xl:flex-row">
        <div className="p-20 flex-col space-y-6  items-center  hidden sm:flex xl:w-2/5 w-full">
          <h1 className="text-4xl  font-semibold self-start text-red-600 ">
            Contact Us
          </h1>
          <span className="text-3xl font-semibold self-start ">
            Call Eurodream Today to Schedule Your Consultation
          </span>
          <span className="text-wrap w-1/2  self-start w-full">
            Our team is here to make the process simple and straightforward for you.
            Whether you're exploring work opportunities abroad or planning your study journey overseas,
            we're dedicated to guiding you through every step of the way.
            Contact us now to schedule your appointment and unlock a world of possibilities.
          </span>
          <ul className="about_list self-start ">
            <li>Phone: +1 (123) 456-7890 </li>
            <li>Email: info@eurodream.com</li>
            <li>Address: 1234 Dream Street, Eurocity, EU</li>
          </ul>
          <button className="bg-red-600 text-white p-5 mt-4 self-start ">
            Get Free Consulting
            <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
          </button>
        </div>
        <div className="flex xl:w-3/5 md:w-full md:ml-12 lg:ml-20">
          <form className=" p-8 card md:w-fit" onSubmit={contactUs}>
            <h1 className="text-red-600 ">Team Member</h1>
            <span className="text-4xl font-semibold">
              Fell Free to Contact Us
            </span>

            <div className="flex flex-col  mt-8 w-full  h-fit p-1 border rounded border-red-600 relative z-10  ">
              <div className=" bg-white  w-fit   bottom-7 p-2 h-fit left-8 relative z-20">
                <h1 className=" text-xl font-semibold ">Name</h1>
              </div>

              <input type="text" className="border-none w-80 md:w-96 absolute  focus:ring-0 focus:ring-offset-0  p-2 " name="name"></input>
            </div>
            <div className="flex flex-col xl:flex-row xl:space-x-4 ">
              <div className="flex flex-col  p-1  mt-8 xl:w-80  w-full border rounded border-red-600 relative z-10">
                <div className=" bg-white p-2  w-fit bottom-7 left-8  z-20 relative">
                  <h1 className=" text-xl font-semibold  ">Phone</h1>
                </div>

                <input type="text" name="phone" className="border-none absolute focus:ring-0 focus:ring-offset-0 w-72 pt-4"></input>
              </div>
              <div className="flex flex-col  p-1 mt-8 xl:w-80 w-full border rounded border-red-600 static z-10">
                <div className=" bg-white p-2  w-fit bottom-7 left-8 relative z-20">
                  <h1 className=" text-xl font-semibold   ">Email</h1>
                </div>

                <input type="text" name="email" className="border-none absolute focus:ring-0 focus:ring-offset-0 pt-4"></input>
              </div>
            </div>
            <div className="flex flex-col p-1  mt-8 w-full  border rounded border-red-600 static z-10">
              <div className=" bg-white p-2  w-fit bottom-7 left-8 relative z-20">
                <h1 className=" text-xl font-semibold   ">Subject</h1>
              </div>

              <input type="text" name="subject" className="border-none absolute focus:ring-0 focus:ring-offset-0 pt-4"></input>
            </div>
            <div className="flex flex-col  mt-8  border rounded border-red-600 static p-1 w-full z-10">
              <div className=" bg-white w-fit bottom-5 px-2 left-8 relative z-20">
                <h1 className=" text-xl font-semibold ">Message</h1>
              </div>
              <textarea className="border-none focus:ring-0 focus:ring-offest-0" name="message"></textarea>
            </div>
            <button type="submit" className="bg-black text-white p-3 mt-6 font-semibold">
              Send Message
            </button>
          </form>
          <img src={airhostess} className="lg:h-3/4  md:h-[20rem] mt-12 relative hidden sm:block" />
        </div>
      </div>
      <div className="container flex flex-col items-center mx-auto mt-32 space-y-8 hidden">
        <h1 className="text-red-600 text-xl font-bold">Working Process</h1>
        <span className="sm:w-96 sm:text-4xl font-bold">
          3 Step Follow You Can Get Your visa Easily
        </span>
        <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-10">
          <div className="flex flex-col items-center bg-white card p-4">
            <span className="text-red-600 font-bold">Step o1</span>
            <span className="w-96 text-2xl font-bold">
              completed Online Registration
            </span>
            <p className="w-96">
              These cases are prefectly simple and easy to distinuguish
            </p>
          </div>

          <div className="flex flex-col items-center bg-white card p-4">
            <span className="text-red-600 font-bold">Step o1</span>
            <span className="w-96 text-2xl font-bold">
              completed Online Registration
            </span>
            <p className="w-96">
              These cases are prefectly simple and easy to distinuguish
            </p>
          </div>

          <div className="flex flex-col items-center bg-white card p-4">
            <span className="text-red-600 font-bold">Step o1</span>
            <span className="w-96 text-2xl font-bold">
              completed Online Registration
            </span>
            <p className="w-96">
              These cases are prefectly simple and easy to distinuguish
            </p>
          </div>
        </div>
      </div>
      <div className="relative ">
        <img src={testimonialiconone} className=" left-[85rem] absolute fontstyle"></img>

        <div className="container mx-auto mt-32 text-center">
          <span className="text-red-600 text-3xl font-semibold block">
            Our Testimonials
          </span>
          <span className="sm:text-4xl font-semibold">
            Let's Explore Why People Say About Our Services
          </span>
        </div>
        <img src={testimonialicontwo} className="absolute sm:bottom-[24rem] top-19  " ></img>

        <div className="container mx-auto  flex flex-col xl:flex-row w-full h-full ">
          <div className=" w-1/4 h-96 ">
            <div className="bg-orange-100 sm:h-80 sm:w-96 w-52 h-32 absolute sm:left-48 left-24 sm:top-80 top-60 lg:left-96 z-30">
              <img
                src={testimonialiconthree}
                className="object-fill absolute sm:h-[32rem]   w-52 sm:w-auto z-40 sm:left-4  bottom-0 "
              ></img>
            </div>
            <img
              src={testimonialiconfive}
              className="object-fill absolute h-[14rem] z-40 sm:left-28 sm:top-[28rem] left-1 lg:left-72 top-52"
            ></img>
          </div>

          <div className="xl:w-3/4 sm:mt-32 w-full lg:ml-40  xl:px-32">
            {testimonials.length > 0 ? (
              <Slider {...testimonial}>
                {testimonials.map((item, index) => (
                  <div className=" ">
                    <div className="sm:w-[40rem]   p-4 card ml-10 my-4 w-80 lg:mt-20 xl:ml-32" key={index}>
                      <img src={testimonialiconfour} className="object-fill h-8"></img>
                      <p className="test-wrap m-4 text-bs text-left">
                        {item.description}
                      </p>
                      <hr className="h-px my-8 bg-black border-0 dark:bg-black"></hr>
                      <div className="flex">
                        <img className="inline-block h-14 w-14 rounded-full" src={`http://localhost:8000/image/testimonial/${item.image}`} />
                        <div className="flex flex-col ml-8">
                          <span>Auther</span>
                          <span>{item.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

            ) : (

              <div className="flex space-x-16 mt-8">
                No Testimonial Yet
              </div>
            )}
          </div>
        </div>
      </div>




      <div className="text-center fontstyle flex flex-col justify-center items-center py-8 mt-52">
        <h1 className="font-bold text-red-600 text-3xl">News & Blog</h1>
        <span className="sm:text-3xl font-bold text-nowrap ">Read Our Latest News & Blog</span>

        {blogs.length > 0 ? (
          <div className="xl:container xl:mx-auto lg:container mt-8">


            <Slider {...settings}>
              {blogs.map((item, index) => (
                <div className=" pb-56">
                  <div className="sm:w-96 w-80 h-96 mb-4 relative ">
                    <div className="flex flex-col w-16 absolute sm:left-72 left-52">
                      <span className="bg-red-600 font-bold text-xl p-2 text-white ">
                        26
                      </span>
                      <span className="bg-white p-2 text-xl font-bold">Nov</span>
                    </div>
                    <div className="w-full h-full">
                      <img className="object-cover object-center h-full" src={`http://localhost:8000/image/blogs/${item.image}`}></img>

                    </div>
                    <div className="bg-white card absolute z-10 top-80  sm:w-full h-72  text-center">
                      <div className="flex space-x-8 py-3  justify-center ">
                        <div className="flex justify-center items-center space-x-2">
                          <span >
                            <PersonIcon fontSize="large"></PersonIcon>

                          </span>
                          <span>    Mr.beast</span>
                        </div>
                        <div className="flex justify-center items-center space-x-2">
                          <span >

                            <ModeCommentIcon fontSize="large"></ModeCommentIcon>
                          </span>
                          <span>Comment(5)</span>
                        </div>

                      </div>
                      <div className="blog_details flex flex-col p-4 text-justify">
                        <span className="text-left text-xl font-semibold">
                          {item.title}
                        </span>
                        <span>
                          {textFilter(item.description, 100)}
                        </span>
                      </div>

                    </div>

                  </div>

                </div>


              ))}
            </Slider>

          </div>

        ) : (

          <div>
            No Blogs Yet
          </div>
        )}


      </div>
      <div className="container mx-auto flex flex-col items-center mt-20">
        <div className="flex space-x-4 justify-center">
          <hr className="h-1 w-96 my-8 bg-red-600"></hr>
          <h1 className="self-center text-3xl font-semibold">patners</h1>{" "}
          <hr className="h-1 w-96 my-8 bg-red-600"></hr>
        </div>
        <div className="flex space-x-16 p-8">
          <div className="flex flex-col sm:flex-row  space-y-8 sm:space-y-0 sm:space-x-11">
            {patners.map((item, index) => (



              <img key={index}
                className="object-fill h-[6rem] w-[12rem]"
                src={`http://localhost:8000/image/patner/${item.image}`}
              />

            ))}
          </div>
        </div>
      </div>

    </>
  );
}