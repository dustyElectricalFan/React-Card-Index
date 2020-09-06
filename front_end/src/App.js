import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {list} from './data';
import Attribute from './attribute';
import Display from'./display';



class App extends Component {
  state = {
  
    buttons: list,
    squery: "",
    isLoaded: false,
	  received : []
  };


  
  componentDidMount(){
    fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(json => {this.setState({isLoaded: true, received: json.data})});
  };

  addChoice = (attr) => {
  const newquery = this.state.squery + attr;
  this.setState({squery : newquery});
  console.log(this.state.squery);
  };

  showInfo = (x) =>{
   const received = [...this.state.received];
   const index = received.indexOf(x);
   received[index] = {...x};
   if(received[index].presence === 1)
   {
     received[index].presence = 0;
   }
   else
   {
     received[index].presence = 1;
   }
   this.setState({received});
  };

  setPresence = (x) =>{
  return (x === 0 ? {display: "none"} : {display: "block", width: "18rem"});
  }


  render()
  {
  const {isLoaded, received} = this.state;
  if(!isLoaded){return <div>Loading...</div>}
  else{
  return(
  <React.Fragment>
  {console.log(received)}
  {received.map(card => (<Display key = {card.name + card.rarity} name = {card.name} description = {card.skill} card = {card} presence = {this.setPresence(card.presence)} src = {card.image.toString()} showInfo = {this.showInfo}>  </Display>))}

  {this.state.buttons.map(bnt => <Attribute key = {bnt} id = {bnt} addChoice = {this.addChoice}></Attribute>)}

 </React.Fragment>
   
  );
  }
}}

export default App;
