import React from 'react';

class GameButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: '2'};
    }
    componentDidMount() {
      this.setInfo();
    }

    setInfo = () =>{
      this.setState({
        num: this.props.num,
        color:this.props.color,
        colorName:this.props.colorName
      })
    }
    sendNum = () => {
      this.props.onUserClick(this.state.num);
    }
    render() {

      return (
        <div>
          <button onClick={this.sendNum} style={{ backgroundColor: this.state.color }}>{this.props.colorName}</button>
        </div>
      );
    }
}

export default GameButton;