import React, { Component } from 'react';
import update from 'immutability-helper';
import MainMenu from './MainMenu';
import EquipmentList from './EquipmentList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {keyPairs: [], currentView: "MainMenu", currentCategory: null};
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.createKeyPairs();
  }

  createKeyPairs() {
    const categories = this.props.categories;
    for(let i = 0; i < categories.length; i++) {
      for(let k = 0; k < categories[i].items.length; k++) {
        // CHECKS IF COMPLETATION INFORMATION IS ALREADY IN localStorage
        let completed = localStorage.getItem(JSON.stringify(categories[i].items[k].key));
        if(completed === "true") {
          completed = true;
        } else {
          completed = false;
        }
        console.log(categories[i].items[k].key + ": " + completed);        
        this.state.keyPairs.push({key: categories[i].items[k].key, completed: completed});
      }
    }
  }

  handleViewChange(view, category) {
    this.setState({
      currentView: view,
      currentCategory: category
    });
  }
  
  handleItemClick(itemKey) {
    const itemKeys = this.state.keyPairs.map((keyPair) => keyPair.key);
    const itemIndex = itemKeys.indexOf(itemKey);
    let itemCompleted = false;
    if(this.state.keyPairs[itemIndex].completed === false) {
      itemCompleted = true;
    }
    const updatedKeyPairs = update(this.state.keyPairs, 
      {[itemIndex]: {completed: {$set: itemCompleted}}}
    );
    this.setState({
      keyPairs: updatedKeyPairs
    });
    localStorage.setItem(JSON.stringify(itemKey), JSON.stringify(itemCompleted));
  }
  
  render() {
    return (
      <div>
        {this.state.currentView === "MainMenu" ? 
          <MainMenu categories={this.props.categories} handleViewChange={this.handleViewChange}>
          </MainMenu> : null}
        {this.state.currentView === "EquipmentList" ? 
          <EquipmentList category={this.state.currentCategory} handleViewChange={this.handleViewChange}
          handleItemClick={this.handleItemClick}>
          </EquipmentList> : null}
      </div>
    );
  }
}


export default App;
