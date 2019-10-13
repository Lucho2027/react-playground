import React from 'react';
import MyButton from './Mybutton';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
      };
    
      state = {
        chamber: null,
        spinningTheChamber: false,
      };
    handleTheSpin = () => {
        this.setState({
            spinningTheChamber: true,

        })
        this.timeout =  setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })

        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }


    renderDisplay(){
        const {chamber, spinningTheChamber} = this.state
        const {bulletInChamber} = this.props
        if (spinningTheChamber){
            return 'spinning the chamber and pulling the trigger! ...'
        }
        else if (chamber === bulletInChamber){
            return 'BANG!!!'
        }
        else{
            return  'you\'re safe!'
        }
        
    }
    render() {
        
        return (
            <div className = 'RouletteGun'>
                 <p>{this.renderDisplay()}</p>
                <button onClick={this.handleTheSpin}>
                    Pull the trigger!
                </button>
                <MyButton handleClick={this.handleTheSpin}/>
                
               
            </div>
        )
    }
}
export default RouletteGun;