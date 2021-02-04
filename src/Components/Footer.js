import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-center text-indigo-400 text-xs p-3 absolute bottom-0 w-full">
      &copy; Copyright 2020 - {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;