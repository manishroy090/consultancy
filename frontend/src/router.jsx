import {Navigate, createBrowserRouter} from "react-router-dom";
import Login from "./views/pages/Login";
import Signup from "./views/pages/Register";
import Notfound from "./views/pages/Notfound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Blogs from "./views/pages/Blogs";
import Home from "./views/pages/Home";
import Contact from "./views/pages/Contact";
import Country from './views/admin/country/index';
import Visatype from './views/admin/visatype/index';
import Visa from './views/admin/visa/index';
import  Offer from './views/admin/offer/Index';
import Aboutus from './views/admin/about/Index';

import Whyus from './views/admin/whyus/index';
import Teammember from './views/admin/teammember/Index';
import  Testimonial from './views/admin/testimonial/Index';
import  NewsBlog from './views/admin/newsblogs/Index';

import Patner from "./views/admin/patner/index"; 
import Course from './views/admin/course/index';
import  Visadetails from './views/pages/visadetails';



import CountryCreate from './views/admin/country/Create';
import CountryEdit from '../src/views/admin/country/Edit';

import CourseCreate from './views/admin/course/Create';
import CourseEidt from  '../src/views/admin/course/Edit';

import VisaTypeCreate from  './views/admin/visatype/Create';
import VisaTypeEdit from  './views/admin/visatype/Edit';

import VisaCreate from  './views/admin/visa/Create';
import VisaEdit from  './views/admin/visa/Edit';

import OfferCreate from  './views/admin/offer/Create';
import OfferEdit from  './views/admin/offer/Edit';

import Services from './views/admin/service/Index'
import ServicesCreate from './views/admin/service/Create';
import EditEdit from './views/admin/service/Edit';


import NewsCreate from  './views/admin/newsblogs/Create';
import NewsEdit from  './views/admin/newsblogs/Edit';




const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
              path:'/',
              element:<Home to="/"/>
            },
            {
                path:'/blogs',
                element:<Blogs/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/:visatypeslug/:visaslug',
                element:<Visadetails/>
            }
           
        ]
    },
    {
        path:'dashboard',
        element:<GuestLayout/>,
        children:[
            {
                path:'country',
                element:<Country/>
            },
            {
                path: 'country/create',
                element: <CountryCreate />
              },
              {
                path: 'country/edit/:id',
                element: <CountryEdit />
              },
            {
                path:'course',
                element:<Course/>
            },
            {
                path:'course/create',
                element:<CourseCreate/>
            },
            {
                path:'course/edit/:id',
                element:<CourseEidt/>
            },
            {
                path:'visatype',
                element:<Visatype/>
            },
            {
                path:'visatype/create',
                element:<VisaTypeCreate/>
            },
            {
                path:'visatype/edit/:id',
                element:<VisaTypeEdit/>
            },
            {
                path:'visa',
                element:<Visa/>
            },
            {
                path:'visa/create',
                element:<VisaCreate/>
            },
            {
                path:'visa/edit/:id',
                element:<VisaEdit/>
            },
            {
                path:'offer',
                element:<Offer/>
            },
            {
                path:'offer/create',
                element:<OfferCreate/>
            },
            {
                path:'offer/edit/:id',
                element:<OfferEdit/>
            },
            {
                path:'aboutus',
                element:<Aboutus/>
            },
           
            {
                path:'services',
                element:<Services/>
            },
            {
                path:'services/create',
                element:<ServicesCreate/>
            },
            {
                path:'services/edit/:id',
                element:<EditEdit/>
            },
            {
                path:'whyus',
                element:<Whyus/>
            },
            {
                path:'teammember',
                element:<Teammember/>
            },
            {
                path:'testimonials',
                element:<Testimonial/>
            },
            {
                path:'newsblogs',
                element:<NewsBlog/>
            },
            {
                path:'newsblogs/create',
                element:<NewsCreate/>
            },
            {
                path:'newsblogs/edit/:id',
                element:<NewsEdit/>
            },
            {
                path:'patner',
                element:<Patner/>
            }
        ]
    },
,
{
    path:'/',
    element:<Notfound/>
}
])

export default router