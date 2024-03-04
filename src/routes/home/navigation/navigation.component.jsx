import { Link, Outlet } from "react-router-dom";
import './navigation.styles.scss';

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo" />
        </Link>
        <ul className="nav-links-container">
          <li>
            <Link
              className="nav-link"
              to='/shop'
            >
              SHOP
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to='/auth'
            >
              SIGN IN
            </Link>
          </li>
        </ul>
      </nav>  
      <Outlet />
    </>
  )
}

export default Navigation;
