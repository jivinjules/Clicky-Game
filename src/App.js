import React, { Component } from 'react';
import FriendCard from './Components/FriendCard/FriendCard'
import Wrapper from "./Components/Wrapper/Wrapper"
import Title from './Components/Title/Title'
import friends from './friends.json'
import './App.css';

class App extends Component {
  state = {
    friends,
    score: 0,
    topScore: 0,
    chosenCard: [],
    rightOrWrong: ""
  };

  render() {
    return (
      <Wrapper>
        <Title>Curious George Clicky Game!</Title>
        <p>Directions: Click on any character. After you click, the characters will reshuffle. Don't click on a character you've already clicked on!</p>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
