import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Playground from "../Pages/Playground/Playground";
import Resume from "../Pages/Resume/Resume";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/playground",
                element:<Playground></Playground>
            },
            {
                path:"/resume",
                element:<Resume></Resume>
            }
        ]
    },
]);