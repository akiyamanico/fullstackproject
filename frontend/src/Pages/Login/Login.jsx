import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw setErrorModal(true);
      }
      setFormData({
        username: "",
        password: "",
      });
      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      setErrorModal(true);
    }
    setLoading(false);
  };

  return (
    <>
     <div className="container max-w-2xl p-5 bg-white rounded-md border border-gray-300 flex flex-col justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="font-timesnow text-1xl mb-2">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-louis text-gray-700 flex flex-col items-center"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-louis text-gray-700 flex flex-col items-center"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              {loading ? "Mohon Tunggu" : "Login"}
            </button>
          </div>
        </form>
        {errorModal && (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <p className="text-red-500 text-center">Gagal Login!</p>
            <button
              onClick={() => setErrorModal(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default Login;
