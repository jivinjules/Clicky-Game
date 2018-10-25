import React, { Component } from 'react';
import FriendCard from './Components/FriendCard/FriendCard'
import Wrapper from "./Components/Wrapper/Wrapper"
import Title from './Components/Title/Title'
import friends from './friends.json'
import './App.css';
import Navbar from './Components/Navbar/navbar'

class App extends Component {
state = {
      friends,
      score: 0,
      topScore: 0,
      alreadyChosenIds: []  
    };

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
      this.setState({ topScore: this.state.topScore + 1 })
    }
    // console.log("NEW ARRAY")
    return friendArray

  }

  handleClick = id => {
 
     console.log(id)
     if (this.state.alreadyChosenIds.indexOf(id) === -1) {
       this.handleScoring();
      this.setState({ alreadyChosenIds: this.state.alreadyChosenIds.concat(id) });
        } else 
          if (this.state.alreadyChosenIds.indexOf(id) >= 0) { 
          this.handleEndOfGame();
        }
  }

  handleScoring = () => {
////////******CHECK THE SCORING.************* */
    this.setState({ score: this.state.score + 1 })
    if (this.state.score >= this.state.topScore) {
      this.setState({topScore: this.state.score})
    } else if (this.state.score === 15) {
      alert("WOW! YOU GOT THEM ALL CORRECT!")
    }
    this.setState({ friends: this.shuffle(this.state.friends) })
  }

  handleEndOfGame = () => {
    alert("Sorry. Better Luck Next Time.")
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      alreadyChosenIds: []
      });
    this.setState({ friends: this.shuffle(this.state.friends) })
  };


  render() {
    return (
      <Wrapper>
        <Navbar><span id="score"> Score: ={this.state.score} </span>{"  "} <span id="topscore"> Top Score: ={this.state.topScore}</span>{" "} <span id="correct"> {" "}</span></Navbar>
        <Title>Memory Game!</Title>
        <p>Directions: Click on any character. After you click, the characters will reshuffle. Don't click on a character you've already clicked on!</p>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleClick={this.handleClick}
            handleScoring={this.handleScoring}
            handleEndOfGame={this.handleEndOfGame}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
