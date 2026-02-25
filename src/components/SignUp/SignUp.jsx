import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignUp.css";

const Signup = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${BASE_URL}/signup`,
        formData,
        { withCredentials: true }
      );

      setMessage(res.data.message);
      navigate("/dashboard");
      console.log(res.data);
    } catch (err) {
      setMessage(err.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="emailId"
          placeholder="Email"
          value={formData.emailId}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Signup</button>

         <p className="redirect-text">
      Already have an account?{" "}
      <Link to="/login" className="login-link">
        Click here to login
      </Link>
    </p>
        
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;