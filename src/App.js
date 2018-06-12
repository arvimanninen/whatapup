import React, { Component } from 'react';
import update from 'immutability-helper';
import MainMenu from './MainMenu';
import EquipmentList from './EquipmentList';
import StorageApi from './StorageApi';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {categories: [...this.props.categories], currentView: "MainMenu", currentCategory: null};

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
    const categoryKeys = this.state.categories.map((category) => category.key);
    const categoryIndex = categoryKeys.indexOf(categoryKey);
    const itemKeys = this.state.categories[categoryIndex].items.map((item) => item.key);
    const itemIndex = itemKeys.indexOf(itemKey);
    console.log("categoryIndex: " + categoryIndex);
    console.log("itemIndex: " + itemIndex);
    let itemCompleted = false;
    if(this.state.categories[categoryIndex].items[itemIndex].completed === false) {
      itemCompleted = true;
    } 
    const updatedCategories = update(this.state.categories, {[categoryIndex]: {items: {[itemIndex]: {completed: {$set: itemCompleted}}}}});
    const storageApi = new StorageApi();
    storageApi.setCategoryItemCompleted(itemKey, itemCompleted);
    
    this.setState({
      categories: updatedCategories
    });
    
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
