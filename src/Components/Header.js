import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-black p-3 flex justify-between items-center font-bold">
      <Link
        to="/newsfeed"
      >
        News Feeds
      </Link>

      <Navigation />
    </header>
  );
}

export default Header;