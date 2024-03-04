import { Link, Outlet } from "react-router-dom";
import './navigation.styles.scss';

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {

  }
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
            {
              currentUser ? (
                <span className="nav-link" onClick={signOutHandler}>SIGN OUT =</span>
              ) : (
                <Link
                className="nav-link"
                to='/auth'
              >
                SIGN IN
              </Link>
              )
            }
          </li>
        </ul>
      </nav>  
      <Outlet />
    </>
  )
}

export default Navigation;
