import CollectionItem from "../collection-item/CollectionItem";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;