import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class StoryItem extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className= "StoryItem">
        <h3> {this.props.title}</h3>
        <h4> {this.props.by}</h4>
      </div>
    )
  }
}
export default StoryItem;
