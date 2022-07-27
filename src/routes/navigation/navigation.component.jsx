import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";
import { ReactComponent as CrwnSvg } from "../../assets/crown (4).svg";
import { UserContext } from "../../contexts/user.context";
import { CartOpenContext } from "../../contexts/cartopen.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartOpenContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="">
          <div>
            <CrwnSvg />
          </div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              SIGN IN
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
