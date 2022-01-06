import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/Firebase.util";

const Header = ({ currentUser }) => {
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
