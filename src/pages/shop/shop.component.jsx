import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import {selectShopCollections} from "../../redux/shop/shop.selectors";

const Shop = (props) => {
  const {collections} = props;
  return (
    <div>
      <h1>Shop page</h1>
      {collections.map((element) => (
        <CollectionPreview key={element.id} {...element}/>
      ))}
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(Shop);