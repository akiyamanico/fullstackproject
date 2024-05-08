import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nomorhp: "",
    tanggalLahir: "",
    kelamin: "",
    alamat: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      setFormData({
        name: "",
        email: "",
        nomorhp: "",
        tanggalLahir: "",
        kelamin: "",
        alamat: "",
        username: "",
        password: "",
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit form. Please try again later.");
    }
  };

  return (
    <>
      <div className="max-w-2xl p-5 bg-white rounded-md border border-gray-300 flex flex-col items-center absolute right-0">
        <h2 className="font-automali text-5xl mb-2">Hello! Salam Kenal!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-louis text-gray-700 flex flex-col items-center"
            >
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mr-20 mt-1 p-2 block w-full border-gray-300 rounded-md max-w-2xl"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-louis text-gray-700 flex flex-col items-center"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="nomorhp"
              className="block text-sm font-louis text-gray-700 flex flex-col items-center"
            >
              Nomor Telepon
            </label>
            <input
              type="text"
              id="nomorhp"
              name="nomorhp"
              value={formData.nomorhp}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tanggalLahir"
              className="block text-sm font-louis text-gray-700 flex flex-col items-center"
            >
              Tanggal Lahir
            </label>
            <input
              type="text"
              id="tanggalLahir"
              name="tanggalLahir"
              value={formData.tanggalLahir}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="kelamin"
              className="block text-sm font-louis text-gray-700 flex flex-col items-center"
            >
              Kelamin
            </label>
            <input
              type="text"
              id="kelamin"
              name="kelamin"
              value={formData.kelamin}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="alamat"
              className="block text-sm font-louis text-gray-700 flex flex-col items-center"
            >
              Alamat
            </label>
            <input
              type="text"
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
              required
            />
          </div>
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
              Submit
            </button>
          </div>
        </form>
        <script src="../path/to/flowbite/dist/datepicker.js"></script>
      </div>
      <div className="max-w-3xl p-5 bg-white rounded-md flex flex-col items-center justify-center absolute right-0 top-0 bottom-0 left-0">
    <article className="text-wrap font-callingstone align-baseline text-center">
      <h3>Hai!</h3>
      <p>Creativity Without Limit, Never Stop Troubleshooting</p>
    </article>
   </div>
    </>
  );
}

export default Register;
