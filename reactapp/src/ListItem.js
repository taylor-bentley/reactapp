import React, { Component } from 'react';


class ListItem extends Component {


  render() {
    return (
      <div>
      <p>{this.props.text}</p>
      </div>
    )
  }
}
export default ListItem;
