import React from 'react';
import GameButton from "../GameButton/GameButton";
import HookButton from "../GameButton/HookButton";
// let uS = []
// let seq = [2,1]
// let spot = 0

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sequence: [2,1],
      userSequence: [],
      spot : 0,
    };
  }
  componentDidMount() {
    this.setInfo();
  }

  setInfo = () =>{
    this.setState({
    })

  }

  doThis = (n) => {
    if(this.state.sequence[this.state.spot] === n){
      console.log('CORRECT ' + this.state.spot)
      this.setState({
        spot: this.state.spot + 1
      })
      if(this.state.spot === this.state.sequence.length-1){
        let nextS = Math.floor(Math.random() * (3-1) + 1) //2 is number of buttons
        let joinNextS = this.state.sequence.concat(nextS);
        console.log("NEXT BUTTON IS: " + nextS)
        this.setState({
          spot: 0,
          sequence: joinNextS
        })
        console.log(this.state)
      }
    }

  }

  render() {
    return (
      <div>
        <HookButton onUserClick={this.doThis} num={1} color={'blue'} colorName={"1"}></HookButton>
        <HookButton onUserClick={this.doThis} num={2} color={'red'} colorName={"2"}></HookButton>
        {/*<GameButton onUserClick={this.doThis} num={1} color={'red'} colorName={"RED"}></GameButton>*/}
        {/*<GameButton onUserClick={this.doThis} num={2} color={'blue'} colorName={"BLUE"}></GameButton>*/}
      </div>
    );
  }
}

export default Game;