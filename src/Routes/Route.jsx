import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import CaseStudiesOne from "../Pages/CaseStudies/CaseStudiesOne";
import Playground from "../Pages/Playground/Playground";
import Resume from "../Pages/Resume/Resume";
import About from "../Pages/About/About";
import CaseStudiesTwo from "../Pages/Home/CaseStudiesTwo";
import BachelorRite from "../Pages/Home/BachelorRite/BachelorRite";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ContentProtected from "../Pages/ContentProtected/ContentProtected";

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
                path: '/protected',
                element: <ContentProtected/>
            },
            {
                path: '/caseStudyOne',
                element: <CaseStudiesOne/> 
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
            },
            {
                path:"/case-studies-two",
                element:<CaseStudiesTwo/>
            },
            {
                path:"/bachelorRite",
                element:<BachelorRite></BachelorRite>
            }
            
        ]
    },
]);