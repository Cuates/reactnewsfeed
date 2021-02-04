import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu(props) {
  return (
    <div>
      <div className="text-black font-bold py-3 flex justify-between items-center font-bold">
        News Feeds Menu
      </div>
      <ul>
        <li>
          <Link
            to="/newsfeed"
            className="text-indigo-900 py-3 border-t border-yellow-100 border-b block"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/newsfeed/about"
            className="text-indigo-900 py-3 border-b border-yellow-100 block"
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;