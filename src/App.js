import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts.json'
import CardContact from './components/contacts/CardContact';


// const contact = contacts[Math.floor(Math.random()*contacts.length)];

class App extends Component {
  state = {
    contacts: contacts.slice(0,5),
  }

  renderList() {
    return (this.state.contacts.map((item, index) => {
      return <CardContact key ={`id${index}`}
      pictureUrl = {item.pictureUrl}
      name = {item.name}
      popularity = {item.popularity}
      deleteClick = {this.sortPopClick}
      id = {index} />
    }))
  }

  handleOnClick= ()=>{
    const contact = contacts[Math.floor(Math.random()*contacts.length)]
    this.setState({
      contacts: [...this.state.contacts, contact],
    })
  }

  sortOnClick= ()=>{
    const sortClick = this.state.contacts.sort((a,b)=>(a.name>b.name) ? 1 : ((b.name>a.name) ? -1 :0));
    this.setState({
      contacts: [...this.state.contacts, sortClick],
    })
  }

  sortPopClick = (id) => {
    console.log(id)
    const sortPopClick = [...this.state.contacts]
    sortPopClick.splice(id,1)
    this.setState({
      contacts: sortPopClick
    })
  }

  render() {
    return (
      <div className="App">    
        <button onClick={this.handleOnClick}>Random</button>
        <button onClick={this.sortOnClick}>Sort by name</button>
        <button onClick={this.sortPopClick}>Sort by popularity</button>
        {this.renderList()}
      </div>
    );
    
  }
  
}

export default App;
