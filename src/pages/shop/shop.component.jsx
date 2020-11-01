import React from "react";
import { connect } from "react-redux";
import {Route} from "react-router-dom"

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collection");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      this.props.setCollections(convertCollectionsSnapshotToMap(snapshot));
      this.setState({loading: false});
    })
  }

  render() {
    const {match} = this.props;
    const {loading} = this.state;
    return (
      <div className="shop-page">
        <h1>Shop page</h1>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}/>
        <Route path={`${match.path}/:collectionId`}  render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props} />}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);