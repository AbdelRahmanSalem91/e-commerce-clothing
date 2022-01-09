import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selectors";

import { auth } from "../../firebase/Firebase.util";

import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import { selectCartHidden } from "../../redux/cart/cart-selectors";

const Header = ({ currentUser, hidden }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/shop">
            SHOP
          </Link>
          <Link className="link" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <div className="link" to="" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="link" to="/signin">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
      </nav>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
