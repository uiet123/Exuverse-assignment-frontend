import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import Loading from "../Loading/Loading";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      await axios.get(`${BASE_URL}/auth/me`, {
        withCredentials: true,
      });
      setIsAuth(true);
    } catch (err) {
      setIsAuth(false);
    }
  };

  if (isAuth === null) return <Loading />;

  return isAuth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;