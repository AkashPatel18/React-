import React from 'react';
import logo from './logo.svg';
import "./App.css";

class App extends React.Component{

  render(){
    return(
      <div>
        <img src={logo} width="100" height="100"/>
        <h1 className="app-title">ToDo App</h1>
        <div className="container">
          Add an Item....
          <br/>
          <input
          type="text" className="input-text" 
          placeholder="Write A ToDO"
          ></input>
          <button className="add-btn">Add ToDo
          </button>
          <div className="list">
            <ul>
              <li>
                <input type="checkbox" name="" id=""></input>
                Learn New Things
                <button className = "btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}



export default App;