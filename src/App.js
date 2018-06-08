import React, { Component } from 'react';
import update from 'immutability-helper';
import MainMenu from './MainMenu';
import EquipmentList from './EquipmentList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {categories: [
      {key: "CategoryA", name: "Category A", items: [
        {key: "A-1", name: "Item a1", completed: false},
        {key: "A-2", name: "Item a2", completed: false},
        {key: "A-3", name: "Item a3", completed: false}
      ]},
      {key: "CategoryB", name: "Category B", items: [
        {key: "B-1", name: "Item b1", completed: false},
        {key: "B-2", name: "Item b2", completed: false},
        {key: "B-3", name: "Item b3", completed: false}
      ]},
      {key: "CategoryC", name: "Category C", items: [
        {key: "C-1", name: "Item c1", completed: false},
        {key: "C-2", name: "Item c2", completed: false},
        {key: "C-3", name: "Item c3", completed: false}
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
  
  handleItemClick(categoryKey, itemKey) {
    let categoryKeys = this.state.categories.map((category) => category.key);
    let categoryIndex = categoryKeys.indexOf(categoryKey);
    let itemKeys = this.state.categories[categoryIndex].items.map((item) => item.key);
    let itemIndex = itemKeys.indexOf(itemKey);
    console.log("categoryIndex: " + categoryIndex);
    console.log("itemIndex: " + itemIndex);
    let itemCompleted = false;
    if(this.state.categories[categoryIndex].items[itemIndex].completed === false) {
      itemCompleted = true;
    } 
    let updatedCategories = update(this.state.categories, {[categoryIndex]: {items: {[itemIndex]: {completed: {$set: itemCompleted}}}}});
    this.setState({
      categories: updatedCategories
    });
    // this.state.categories[categoryIndex].items[itemIndex].completed = itemCompleted;
    // this.forceUpdate();
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

class StorageApi {

}

export default App;
