import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Login/Registration";
import Allclass from "../Pages/AllClass/Allclass";
import TeachLearnNest from "../Pages/TeachOnLearnNest/TeachLearnNest";
import PrivetRoute from "./PrivetRoute";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
         path:'/',
         element:<Home></Home>   
        },
        {
          path:'/login',
          element: <Login></Login>  
         }
         ,
        {
          path:'/registration',
          element: <Registration></Registration> 
         },
         {
          path:'/allclass',
          element: <Allclass></Allclass> 
         },
         {
          path:'/teachlearnnest',
          element:<PrivetRoute><TeachLearnNest></TeachLearnNest></PrivetRoute>
         }
      ]
    },
  ]);

 