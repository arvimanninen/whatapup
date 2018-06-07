import React, { Component } from 'react';
import MainMenu from './MainMenu';
import EquipmentList from './EquipmentList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {categories: [
      {name: "Category A", items: [
        {name: "Item a1", completed: false},
        {name: "Item a2", completed: false},
        {name: "Item a3", completed: false}
      ]},
      {name: "Category B", items: [
        {name: "Item b1", completed: false},
        {name: "Item b2", completed: false},
        {name: "Item b3", completed: false}
      ]},
      {name: "Category C", items: [
        {name: "Item c1", completed: false},
        {name: "Item c2", completed: false},
        {name: "Item c3", completed: false}
      ]}
    ], currentView: "MainMenu", currentCategory: null};

    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    
  }

  handleViewChange(view, category) {
    this.setState({
      currentView: view,
      currentCategory: category
    });
  }
  
  handleItemClick(categoryName, itemName) {
    let categoryNames = this.state.categories.map((category) => category.name);
    let categoryIndex = categoryNames.indexOf(categoryName);
    let itemNames = this.state.categories[categoryIndex].items.map((item) => item.name);
    let itemIndex = itemNames.indexOf(itemName);
    console.log("categoryIndex: " + categoryIndex);
    console.log("itemIndex: " + itemIndex);
    let itemCompleted = null;
    if(this.state.categories[categoryIndex].items[itemIndex].completed === false) {
      itemCompleted = true;
    } else {
      itemCompleted = false;
    }
    this.state.categories[categoryIndex].items[itemIndex].completed = itemCompleted;
    this.forceUpdate();
  }
  
  render() {
    return (
      <div>
        {this.state.currentView === "MainMenu" ? 
          <MainMenu categories={this.state.categories} handleViewChange={this.handleViewChange}>
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
