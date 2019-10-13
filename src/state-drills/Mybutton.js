import React from 'react';

export default function MyButton(props){
    return(
        <button onClick={props.handleClick}> Click Me!</button>
    )
}