import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StoryItem from './storyitem.js'

class App extends Component {
  state = {
    stories: []
  }

  componentDidMount = () => {
   fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((res) => {
      res.json().then((storyIds) => {
        storyIds.slice(0, 50).forEach((storyId) => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((res) => {
            res.json().then((story) => {

              const storyAccess = this.state.stories
              storyAccess.push(story)
              this.setState({stories: storyAccess})
            });
          });
        });
      });
    });
  };


  render() {
    return (
      <div className="App">
      {this.state.stories.map((story, k) => {
        return <StoryItem key = {k} title= {story.title} by={story.by}>
      })
      </div>
    )
  }
}


export default App;
