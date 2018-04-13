import React, { Component } from 'react';
import './index.css';
import Flower from './flower.jpg';
import Scrollspy from 'react-scrollspy';
import {Quote} from './Quote.js';
import Time from './time.js';
import List from './toDoList.js';
import ListItem from './ListItem.js';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className="body">

        <div className="navigation">
          <a className="myName" href="https://www.google.com/" target="_blank"><h2>Welcome to the best dashboard ever</h2></a>
          <Scrollspy className = 'linksContainer' items={['About Me', 'Portfolio', 'Inspirational']} currentClassName='scrolled'>
            <div><a className = 'nav-link' href = '#'>Blog</a></div>
            <div><a className = 'nav-link' href = '#'>My Faves</a></div>
            <div><a className = 'nav-link' href = '#'>FUD Stuff</a></div>
          </Scrollspy>
        </div>

        <div className="header">
          <div className="container">
            <div className="row">

              <div className="col-md-4 headerItem" id="randomQuote">
                <Quote/>
              </div>

              <div className="col-md-4 headerItem" id="iGreetYou">
                <h1>Hey Friend!</h1>
                <p><Time/></p>
              </div>

              <div className="col-md-4 headerItem" id="makeMeDoThings">
                <h2 className="list">Just Add It To The List:</h2>
                <List/>
              </div>

            </div>
          </div>
        </div>

        <div className="navigation">
          <a className="myName" href="https://www.google.com/" target="_blank"><h2>Welcome</h2></a>
          <Scrollspy className = 'linksContainer' items={['About Me', 'Portfolio', 'Inspirational']} currentClassName='scrolled'>
            <div><a className = 'nav-link' href = '#'>Blog</a></div>
            <div><a className = 'nav-link' href = '#'>My Faves</a></div>
            <div><a className = 'nav-link' href = '#'>FUD Stuff</a></div>
          </Scrollspy>
        </div>

        <div className="main">
        </div>

      </div>
    )
  }
}

export default App;
