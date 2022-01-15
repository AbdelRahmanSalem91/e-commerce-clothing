import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop-selectors";
import "./collection.styles.scss";

const Collection = ({ collection }) => {
  return (
    <div className="collection-page">
      <h2 className="title">Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
