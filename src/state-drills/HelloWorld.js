import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
      
      super(props)
      this.state = { who : 'World' }
    }
    handleButtonWorld = () => {
      
      this.setState({ who: 'World'})
    }
    handleButtonFriend = () => {
      
        this.setState({ who: 'Friend'})
      }
      handleButtonReact = () => {
      
        this.setState({ who: 'React'})
      };


    render() {
      return (
        <div>
          <p>Hello,{this.state.who}</p>
          <button onClick={this.handleButtonWorld}>
           world
          </button>
          <button onClick={this.handleButtonFriend}>
           Friend
          </button>
          <button onClick={this.handleButtonReact}>
           React
          </button>
        </div>
      )
    }
  }
  export default HelloWorld;