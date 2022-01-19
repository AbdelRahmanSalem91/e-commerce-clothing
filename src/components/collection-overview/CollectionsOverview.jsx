import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/CollectionPreview";
import { createStructuredSelector } from "reselect";
import "./collectionsOverview.styles.scss";
import { selectCollectionsForPreview } from "../../redux/shop/shop-selectors";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
