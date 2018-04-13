import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem.js';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      toDoList:[]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleDelete = (name, i) => {
    const todos = this.state.toDoList.slice();
    todos.splice(i, 1);
    this.setState({todoList: todos});
  }

  handleClear = (event) => {
  this.setState({value:''});
  }

  handleSubmit = (event) => {
    const tempArr = this.state.toDoList;
    event.preventDefault();
    tempArr.push(this.state.value);
    this.setState({toDoList: tempArr,
      value: ''});
  }

  renderListItem = () => {
    const temp = this.state.toDoList
    return temp.map((item, index) => {
      return <ListItem
        text={item}
        key={index}/>
    })
  }


render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value= {this.state.value} onChange={this.handleChange}/>
            <button onClick ={this.handleSubmit}>Submit</button>
            <button onClick ={this.handleClear}>Clear</button>
          </label>
        </form>
        {this.renderListItem()}

      </div>

    );
  };
}

export default List;
