import React, { Component } from 'react';


class ListItem extends Component {


  render() {
    return (
      <div>
      <p className="renderedListItem">{this.props.text}</p>
      </div>
    )
  }
}
export default ListItem;
