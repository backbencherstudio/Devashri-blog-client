
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRouteTwo = ({ children }) => {
    const navigate = useNavigate();
    const [passwordTwo, setPasswordTwo] = useState(null); 

    useEffect(() => {
        // Check for access token once the component mounts
        const accessTokenTwo = localStorage.getItem("accessTokenTwo");
        
        if (accessTokenTwo) {
            setPasswordTwo(true);
        } else {
            setPasswordTwo(false);
        }
    }, []);

    // Handle redirection after checking
    useEffect(() => {
        if (passwordTwo === false) {
        navigate("/protectedTwo");
        }
    }, [passwordTwo, navigate]);

    // Render null while checking
    if (passwordTwo === null) {
        return null; // or a loading spinner
    }

    // Render children only if access is granted
    return passwordTwo ? children : null;
};

export default ProtectedRouteTwo;



