import React from "react";
import "./collection-overview.styles.scss";

import { CollectionPreview } from "../collection-preview/collection-preview.component";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

const collectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
  });

export default connect(mapStateToProps)(collectionOverview);
