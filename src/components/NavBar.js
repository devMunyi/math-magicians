import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation()?.pathname;

  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(location);
  }, [location]);

  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/qoute',
      text: 'Quote',
    },
  ];

  return (
    <nav className="d-flex justify-content-between align-items-center container-fluid">
      <div className="brand display-6">
        <Link className="link-item" to="/">
          Math Magicians
        </Link>
      </div>

      <ul style={{ width: '50%' }} className="nav justify-content-around fs-5">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              className={`link-item ${currentPath === link.path && 'active'}`}
              to={link.path}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
