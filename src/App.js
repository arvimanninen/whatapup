import React, { Component } from 'react';
import update from 'immutability-helper';
import MainMenu from './MainMenu';
import EquipmentList from './EquipmentList';

class App extends Component {
  constructor(props) {
    super(props);
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
        console.log(categories[i].name + "." + categories[i].items[k].name + ".completed: " + completed);  
        if(completed === "true") {
          completed = true;
        } else {
          completed = false;
        }      
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
    const categoryIndex = this.state.categories.findIndex((category) => category.name === categoryName);
    const itemIndex = this.state.categories[categoryIndex].items.findIndex((item) => item.name === itemName);
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
    return this.state.categories.find((category) => category.name === categoryName)
  }

  render() {
    const currentCategory = this.getCategory(this.state.currentCategoryName);
    return (
      <div>
        {this.state.currentView === "MainMenu" ? 
          <MainMenu categories={this.state.categories} handleViewChange={this.handleViewChange}>
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
