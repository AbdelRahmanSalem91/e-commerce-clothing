import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collection-overview/CollectionsOverview";
import CollectionPage from "../collection/CollectionPage";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
