import { Link, Outlet } from "react-router-dom";
import './navigation.styles.scss';

import { ReactComponent as Logo } from '../../../assets/logo.svg'
import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to='/'>
          <Logo className="logo" />
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
                <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
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
          <li>
            <CartIcon />
          </li>
        </ul>
        { isCartOpen && <CartDropdown /> }
      </nav>  
      <Outlet />
    </>
  )
}

export default Navigation;
