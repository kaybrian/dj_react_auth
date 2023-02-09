import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated } = useSelector(state => state.user);

  const authLinks = (
    <>
      <li className='nav-item'>
        <NavLink className='nav-link' aria-current='page' to='/dashboard'>
          Dashboard
        </NavLink>
      </li>
      <li className='nav-item'>
        <a href='#!' className='nav-link' aria-current='page'>
          logout
        </a>
      </li>
    </>

  );
  const guestLinks = (
    <>
      <li className='nav-item'>
        <NavLink className='nav-link' aria-current='page' to='/login'>
          Login
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' aria-current='page' to='/register'>
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Auth Site
        </Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' aria-current='page' to='/'>
                Home
              </NavLink>
            </li>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
