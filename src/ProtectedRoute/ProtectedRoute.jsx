import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const [password, setPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check for access token once the component mounts
        const accessToken = localStorage.getItem("accessToken")
        console.log("aaa",accessToken);
        if (accessToken) {
            setPassword(true);
        } else {
            setPassword(false);
        }
    }, []);

    
    if (!password) {
        navigate("/protected");
    }
    

    // Only render children if password is true
    return password ? children : null;
};

export default ProtectedRoute;
