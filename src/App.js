import React, { Component } from 'react';
import update from 'immutability-helper';
import MainMenu from './MainMenu';
import EquipmentList from './EquipmentList';

class App extends Component {
  constructor(props) {
    super(props);
    //this.state = {keyPairs: [], currentView: "MainMenu", currentCategory: null};
    this.state = {categories: [], currentView: "MainMenu", currentCategoryName: null};
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleEquipmentListItemClick = this.handleEquipmentListItemClick.bind(this);
    this.formatState();
  }

  formatState() {
    const categories = this.props.categories;
    for(let i = 0; i < categories.length; i++) {
      this.state.categories.push({name: categories[i].name, items: []});
      for(let k = 0; k < categories[i].items.length; k++) {
        // CHECKS IF COMPLETATION INFORMATION IS ALREADY IN localStorage
        let completed = localStorage.getItem(JSON.stringify(categories[i].items[k].name));
        if(completed === "true") {
          completed = true;
        } else {
          completed = false;
        }
        console.log(categories[i].items[k].key + ": " + completed);        
        this.state.categories[i].items.push({name: categories[i].items[k].name, completed: completed});
      }
    }
  }
  
  handleViewChange(view, categoryName) {
    this.setState({
      currentView: view,
      currentCategoryName: categoryName
    });
  }
  
  handleEquipmentListItemClick(categoryName, itemName) {
    const categoryNames = this.state.categories.map((category) => category.name);
    const categoryIndex = categoryNames.indexOf(categoryName);
    const itemNames = this.state.categories[categoryIndex].items.map((item) => item.name);
    const itemIndex = itemNames.indexOf(itemName);
    let itemCompleted = false;
    if(this.state.categories[categoryIndex].items[itemIndex].completed === false) {
      itemCompleted = true;
    }
    const updatedCategories = update(this.state.categories, 
      {[categoryIndex]: {items: {[itemIndex]: {completed: {$set: itemCompleted}}}}}
    );
    this.setState({
      categories: updatedCategories
    });
    localStorage.setItem(JSON.stringify(itemName), JSON.stringify(itemCompleted));
  }

  getCategory(categoryName) {
    const categoryNames = this.state.categories.map((category) => category.name);
    const currentCategoryIndex = categoryNames.indexOf(categoryName);
    return this.state.categories[currentCategoryIndex];
  }

  render() {
    const currentCategory = this.getCategory(this.state.currentCategoryName);
    return (
      <div>
        {this.state.currentView === "MainMenu" ? 
          <MainMenu categories={this.props.categories} handleViewChange={this.handleViewChange}>
          </MainMenu> 
        : null}
        {this.state.currentView === "EquipmentList" ? 
          <EquipmentList category={currentCategory} handleViewChange={this.handleViewChange}
          handleItemClick={this.handleEquipmentListItemClick}>
          </EquipmentList> 
        : null}
      </div>
    );
  }
}


export default App;
