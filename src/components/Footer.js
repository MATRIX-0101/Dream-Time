

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex justify-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook-square fa-lg"></i></a>
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-twitter-square fa-lg"></i></a>
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram-square fa-lg"></i></a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

