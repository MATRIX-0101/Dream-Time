import React, { useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { app, auth } from "../firebase.config";

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    set(ref(db, 'user'), {
      name: formData.username,
      email: formData.email,
      password: formData.password,
    }).then(() => {
      console.log('Data stored successfully');
    }).catch((error) => {
      console.error('Error storing data:', error);
    });
  };
  

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold mb-6">Register</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="username" className="block text-sm font-semibold mb-2">Username:</label>
      <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-semibold mb-2">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-sm font-semibold mb-2">Password:</label>
      <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
    </div>
    <button type="submit" className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">Register</button>
  </form>
</div>

  );
}

export default RegisterPage;
