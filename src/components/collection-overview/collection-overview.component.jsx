import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";

import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

import {CollectionOverviewContainer} from "./collection-overview.styles";

const CollectionOverview = (props) => {
  const {collections} = props;

  return (
    <CollectionOverviewContainer>
      {collections.map((element) => (
        <CollectionPreview key={element.id} {...element}/>
      ))}
    </CollectionOverviewContainer>
  )
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);