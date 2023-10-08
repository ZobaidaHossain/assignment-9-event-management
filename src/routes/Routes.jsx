import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('/event.json')
        },
         {
          path:'/news/:id/:title/:description/:price/:image_url',
          
          element:<PrivateRoute><News></News></PrivateRoute>
         },
        {
            path:'/about',
            element:<PrivateRoute><About></About></PrivateRoute>
        },
        {
            path:'/contact',
            element:<PrivateRoute><Contact></Contact></PrivateRoute>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);

  export default router;