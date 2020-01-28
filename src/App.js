import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';


class App extends Component{
  constructor(){
    super();

    this.state={
      monsters: [],
      searchField: ''    
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters:users}));
  }

  /* Arrow Function : using it change the event binding*/

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  };

  render(){
    const { monsters, searchField} = this.state;
    {/*
       Tha above line is equal to

       const monsters = this.state.monsters;
       const searchField = this.state.searchField;
     */}
    const filteredMonsters = monsters.filter(monster => 
                              monster.name.toLowerCase().includes(searchField.toLowerCase()) 
    );
{/* includes are act as array of C# */}
  return (
    <div className="App">
      
      <h1> Monster Rolodex</h1>

      <SearchBox
        placeholder='Search Monsters' 
        handleChange={this.handleChange}
      />

      {/* <CardList monsters = {this.state.monsters} />    the below line is new after filter but before filter this was the code will change the way of binding because filter need to applied*/}  
      <CardList monsters = {filteredMonsters}/> 

    </div>
  );
}
  }

export default App;
