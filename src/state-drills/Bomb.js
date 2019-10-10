import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0, 
            word: ''
        };
        
    }
    componentDidMount() {
        
        this.interval = setInterval(() => {
            
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
     
        let word
        if (this.state.count > 8) {
            word = 'BOOM!!'

        }
        else if (this.state.count % 2 === 0) {
            word = 'tick'
        }

        else {
            word = 'tock'
        }

        return (

            <div>{word}</div>
        )
    }
}

export default Bomb