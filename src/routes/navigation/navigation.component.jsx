import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/ui/cart-icon.component";
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {isCartOpen} from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <div>
          <Link to="/" className="logo-container">
            <CrownLogo className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
 
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
