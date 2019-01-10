import React, { Component } from 'react';
import WarriorCard from "./components/WarriorCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import warriors from "./warriors.json";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      warriors,
      score: 0,
      topScore: 0,
      clicked: [],
      message: "Click on an image to earn points, but don't click on any more than once!"
    };
    //Still have to bind this when creating my own methods for some reason
    this.addPoint = this.addPoint.bind(this);
    this.wasClicked = this.wasClicked.bind(this)
  };

  // Working on randomizing
  scramble() {
    let newArr = warriors.sort((a, b) => { return .5 - Math.random() })
    this.setState(() => {
      return {
        warriors: newArr
      }
    })
  }

  addPoint() {
    this.setState(prevPoint => {
      return {
        score: prevPoint.score + 1
      }
    })
  }

  topScoring() {
    this.setState(prevPoint => {
      return {
        topScore: prevPoint.topScore + 1
      }
    })
  }

  resetGame() {
    this.setState(() => {
      return {
        score: 0
      }
    })
    this.setState(() => {
      return {
        clicked: []
      }
    })
    this.setState(() => {
      return{
        message: "Click on an image to earn points, but don't click on any more than once!"
      }
    })
  }

  wasClicked(id) {
    this.scramble();
    if (this.state.clicked.includes(id)) {
      this.resetGame()
      this.scramble();
    } else {
      this.state.clicked.push(id);
      this.addPoint();
      if (this.state.score >= this.state.topScore) {
        this.topScoring()
      };
      if (this.state.clicked.length === 12) {
        this.scramble();
      } else {
        this.setState(() => {
          return{
            message: "Keep going!"
          }
        })
      }
      // console.log(this.state.clicked)
    }
  }

  render() {
    return (
      <Wrapper>
        <Title>Dragon Dropper! <br />
        <span className="inst">{this.state.message}</span><br />
        <hr /> <span className="scoreStyle">Score: {this.state.score} | Top Score: {this.state.topScore}</span>
        
        </Title>
        {this.state.warriors.map(warrior => (
          <WarriorCard
            key={warrior.id}
            warrior={warrior}
            wasClicked={this.wasClicked}
          />
        ))}
      </Wrapper>
    )
  }

}

export default App;
