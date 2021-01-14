import React from "react";
import Rock from "../assets/images/rock.svg";
import Paper from "../assets/images/paper.svg";
import Scissors from "../assets/images/scissors.svg";
import Lizard from "../assets/images/lizard.svg";
import Spock from "../assets/images/spock.svg";

type Weapon = {
  weapon: string;
}

const Player = ({ weapon }: Weapon) => (
  <>
    <div className="player">
      <img
        className="player-image"
        src={
          weapon === "Rock" ? Rock :
          weapon === "Paper" ? Paper :  
          weapon === "Scissors" ? Scissors :
          weapon === "Lizard" ? Lizard :
          weapon === "Spock" ? Spock : ''
        }
        alt="Rock Paper Scissors Lizard Spock"
      />
    </div>
  </>
);

export default Player;
