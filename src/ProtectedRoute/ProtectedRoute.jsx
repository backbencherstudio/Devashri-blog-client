import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [passwordOne, setPasswordOne] = useState(null); 

  useEffect(() => {
    // Check for access token once the component mounts
    const accessTokenOne = localStorage.getItem("accessTokenOne");
    if (accessTokenOne) {
      setPasswordOne(true);
    } else {
      setPasswordOne(false);
    }
  }, []);

  // Handle redirection after checking
  useEffect(() => {
    if (passwordOne === false) {
      navigate("/protected");
    }
  }, [passwordOne, navigate]);

  // Render null while checking
  if (passwordOne === null) {
    return null; // or a loading spinner
  }

  // Render children only if access is granted
  return passwordOne ? children : null;

  
};

export default ProtectedRoute;
