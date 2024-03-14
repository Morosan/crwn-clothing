import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as Logo } from '../../assets/logo.svg'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";


import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";

import './navigation.styles.scss';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());
  
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to='/'>
          <Logo className="logo" />
          <span className="logo-text">React Games</span>
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
