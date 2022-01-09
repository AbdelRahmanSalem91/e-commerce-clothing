import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";

import { ReactComponent as CartLogo } from "../../assets/shopping-bag.svg";
import "./cartIcon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <CartLogo className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
