import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Movie from "../Pages/MovieDetails/Movie";
import Error from "../Pages/Shared/Error/Error";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path: "/", 
                element: <Home></Home>
            },
            {
                path:"movie/:id",
                element:<Movie></Movie>
            },
            {
                path: "/about",
                element:<About></About>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/community",
                element:<Blog></Blog>
            },
        ]
    }      
])