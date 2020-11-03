import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionContainer from "../../pages/collection/collection.container";

import { fetchCollectionsAsync } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchShopCollections();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <h1>Shop page</h1>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchShopCollections: () => dispatch(fetchCollectionsAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
