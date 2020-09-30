import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";

import {selectShopCollections} from "../../redux/shop/shop.selectors";

import "./collection-overview.styles.scss";

const CollectionOverview = (props) => {
  const {collections} = props;

  return (
    <div className="collection-overview">
      {collections.map((element) => (
        <CollectionPreview key={element.id} {...element}/>
      ))}
    </div>
  )
};
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionOverview);