import React, { Component } from "react";
import Player from "./components/Player";
import "./App.css";

const weapons = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]

class App extends Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ''
  };

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ""
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 100);
  };

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;

    if (playerOne === playerTwo) {

      return "Oops it's a Tie!";
      
    } else if (
      (playerOne === "Rock" && playerTwo === "Scissors") ||
      (playerOne === "Rock" && playerTwo === "Lizard") ||
      (playerOne === "Paper" && playerTwo === "Rock") ||
      (playerOne === "Paper" && playerTwo === "Spock") ||
      (playerOne === "Scissors" && playerTwo === "Paper") ||
      (playerOne === "Scissors" && playerTwo === "Lizard") ||      
      (playerOne === "Lizard" && playerTwo === "Paper") ||
      (playerOne === "Lizard" && playerTwo === "Spock") ||
      (playerOne === "Spock" && playerTwo === "Rock") ||
      (playerOne === "Spock" && playerTwo === "Scissors")
    ) {
      return <span className="you">You Won!</span>;
    } else {
      return <span className="pc">Computer Won!</span>;
    }
  };

  selectWeapon = (weapon: string) => {
    this.setState({
      playerOne: weapon,
      winner: ""
    });
  };
  
  render() {

    const { playerOne, playerTwo, winner } = this.state;

    return (
      <>        
        <div className="winner-wrapper">
          <div className="winner">
            {winner ? this.selectWinner() : 'R P S L S'}
          </div>
        </div>     
        <div className="players-wrapper">
          <Player weapon={playerOne} />
          <Player weapon={playerTwo} />
        </div>
        <div className="weapons-wrapper">
          {weapons.map((item => {
            return ( <button
            className="weapon-btn"
            onClick={() => this.selectWeapon(item)}
          >
            {item}
          </button> )
          }))}          
        </div>
        <div className="start-wrapper">
          <button className="start-btn" onClick={this.startGame}>
            Start!
          </button>
        </div>
      </>
    );
  }
}

export default App;
