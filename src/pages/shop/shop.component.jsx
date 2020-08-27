import React from "react";
import SHOP_DATA from "./shop.data"
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

export default class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    return (
      <div>
        <h1>Shop page</h1>
        {this.state.collections.map((element) => (
          <CollectionPreview key={element.id} {...element}/>
        ))}
      </div>
    )
  }
}