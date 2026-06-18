import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='navigation'>
      <ul className='nav-list'>
        <li>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/aboutus' className='nav-link'>
            About Us
          </Link>
        </li>
        <li>
          <Link to='/ourservice' className='nav-link'>
            Our Services
          </Link>
        </li>
        <li>
          <Link to='/contactus' className='nav-link'>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
