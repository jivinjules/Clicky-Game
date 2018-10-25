import React, { Component } from 'react';
import FriendCard from './Components/FriendCard/FriendCard'
import Wrapper from "./Components/Wrapper/Wrapper"
import Title from './Components/Title/Title'
import friends from './friends.json'
import './App.css';
import Navbar from './Components/Navbar/navbar'

class App extends Component {
  constructor() {
    super()

    this.state = {
      friends,
      score: 0,
      topScore: 0,
      rightOrWrong: '',
      alreadyChosenIds: []  
    };
    this.handleClick = this.handleClick.bind(this)
  }

  //FISHER YATES SORTING FORMULA FOR SHUFFLING AN ARRAY
  shuffle = friendArray => {
    var i = 0
      , j = 0
      , temp = null

    for (i = friendArray.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = friendArray[i]
      friendArray[i] = friendArray[j]
      friendArray[j] = temp
      this.setState({ score: this.state.score + 1 })
      this.setState({ topScore: this.state.topScore + 1 })
    }
    // console.log("NEW ARRAY")
    return friendArray

  }

  handleClick = id => {
 
     console.log(id)
    this.setState({ friends: this.shuffle(this.state.friends) })

    // const chosenCard = this.state.friends
    // const chosenCardId = friends.filter(friends => friend.id === id)
//  const array = [];
//  array.push(id)
//  console.log(array)
  }

  render() {
    return (
      <Wrapper>
        <Navbar><span id="score"> Score: ={this.state.score} </span>{"  "} <span id="topscore"> Top Score: ={this.state.topScore}</span>{" "} <span id="correct"> Correct? {this.state.rightOrWrong} {" "}</span></Navbar>
        <Title>Memory Game!</Title>
        <p>Directions: Click on any character. After you click, the characters will reshuffle. Don't click on a character you've already clicked on!</p>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleClick={this.handleClick}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
