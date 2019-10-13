import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion';


class App extends Component {
  render() {
    const tabsProp = [
      { name: 'First tab',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
      { name: 'Second tab',
        content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { name: 'Third tab',
        content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
    ];
    const sections = [
      {
        title: 'Section 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        title: 'Section 2',
        content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
      },
      {
        title: 'Section 3',
        content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
      },
    ];
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <TheDate/>
        <Counter count ={123} step= {123}/>
        <HelloWorld who={''}/>
        <Bomb count={123} word='' />
        <RouletteGun bulletInChamber = {8} spinningTheChamber = {''} chamber={123}  />
        <Tabs tabs={tabsProp} />
        <h2>Accordion</h2>
        <Accordion sections ={sections} />
      </div>
    );
  }
}

export default App;