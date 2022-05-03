import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/ui/cart-icon.component";
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {NavigationContainer, NavLinks, NavLink, LogoContainer} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <div>
          <LogoContainer to="/">
            <CrownLogo className="logo" />
          </LogoContainer>
        </div>
        <NavLinks>
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
          {currentUser ? (
            <NavLink as='span' className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth" className="nav-link">
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
 
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
