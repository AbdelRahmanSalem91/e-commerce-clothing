import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";
import CustomButton from "../custom-button/CustomButton";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton invertrd onClick={() => addItem(item)}>
        add to cart
      </CustomButton>
    </div>
  );
};

const mapToDispatch = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapToDispatch)(CollectionItem);
