import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import bgimg from '../assets/mountains.avif';
import { getDatabase, ref, set, push } from 'firebase/database';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { app } from '../firebase.config';


function RegisterPage() {
  const initialDetails = {
    firstname: '',
    surname: '',
    email: '',
    password: '',
    confpassword: '',
  };
  const [details, setnewUser] = useState(initialDetails);
  const [err, seterr] = useState('');
  const navigate = useNavigate();
   
  const encodeEmail = (email) => {
    return email.replace(/\./g, ',').replace(/#/g, '%23');
  };
  
  const handleChange = (e) => {
    setnewUser({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    let newErr = '';

    if (details.password !== details.confpassword) {
      newErr += '\nPassword should match with confirm password';
      seterr(newErr);
      alert(err);
      setnewUser(initialDetails);
      return;
    }

    if (newErr !== '') {
      seterr(newErr);
      alert(err);
      setnewUser(initialDetails);
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        details.email,
        details.password
      );
      const user = userCredential.user;
      const db = getDatabase(app);
      set(ref(db, `user/${user.uid}`), {
        firstname: details.firstname,
        surname: details.surname,
        email: details.email,
        password: details.password,
        image: "",
        followers: [],
        // confpassword: details.confpassword,
      });
      seterr('');
      // localStorage.setItem('authToken', auth.authToken);
      setnewUser(initialDetails);
      alert('Registration successful!');
      navigate('/'); // Navigate to the home page after successful registeration
    } catch (error) {
      alert('unsuccessful');
      // seterr(error.message);
    }
  };

  return (
    <div className="min-h-screen py-40" style={{ backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)' }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}>
            <h1 className="text-white text-5xl mb-3">Dream World</h1>
            <div>
              <p className="text-white">Explore the beauty of different minds</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Firstname" className="border border-gray-400 py-1 px-2" id="firstname" name="firstname" value={details.firstname} onChange={handleChange} required />

                <input type="text" placeholder="Surname" className="border border-gray-400 py-1 px-2" id="surname" name="surname" value={details.surname} onChange={handleChange} required />
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" id="email" name="email" value={details.email} onChange={handleChange} required />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" id="password" name="password" value={details.password} onChange={handleChange} required />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full" id="confpassword" name="confpassword" value={details.confpassword} onChange={handleChange} required />
              </div>
              <div className="mt-5">
                <button type="submit" className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
              </div>
              <div className="mt-3 text-center">
                <span className="text-gray-600">Already have an account?</span>
                <Link to="/login" className="text-purple-500 font-semibold ml-1">Login here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
