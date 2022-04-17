import { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as CrownLogo} from '../../assets/crown.svg';

import SignIn from '../../routes/sign-in/sign-in.component';
const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
            <div><Link to='/' className='logo-container'><CrownLogo className='logo' /></Link></div>
            <div className='nav-links-container'>
                <Link to='/shop' className='nav-link'>Shop</Link>
                <Link to='/contact' className='nav-link'>Contact</Link>
                <Link to='/sign-in' className='nav-link'>Sign In</Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    );
  }

  export default Navigation;