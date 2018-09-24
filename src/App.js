import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';
import MainMenu from './MainMenu';
import EquipmentList from './EquipmentList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {categories: [], currentView: "MainMenu", currentCategoryName: null};
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleEquipmentListItemClick = this.handleEquipmentListItemClick.bind(this);
    // TODO: REMOVE THIS?
    this.getCategory = this.getCategory.bind(this);
  }
  
  componentDidMount() {
    let cat = [];
    class Category {
      constructor(nName) {
        this.name = nName;
        this.items = [];
      }
    }
    class Item {
      constructor(nName, nCompleted) {
        this.name = nName;
        this.completed = nCompleted;
      }
    }
    axios
      .get("http://localhost:1841/restapi")
      .then(response => {
        console.log("HTTP GET successful!");
        let currentCategoryName = "";
        let currentIndex = -1;
        for(let i = 0; i < response.data.length; i++) {
          const itemDto = response.data[i];
          if(itemDto.categoryName !== currentCategoryName) {
            currentCategoryName = itemDto.categoryName;
            console.log("currentCategoryName: " + currentCategoryName);

            cat.push(new Category(currentCategoryName));
            currentIndex++;
            console.log("currentIndex: " + currentIndex);
          }
          let completed = localStorage.getItem(JSON.stringify(itemDto.itemName));  
          if(completed === "true") {
            completed = true;
          } else {
            completed = false;
          }
          cat[currentIndex].items.push(new Item(itemDto.itemName, completed));
        }
        this.setState({
          categories: cat
        });
      })
      .catch(error => alert("Error in getting questions! " + error))
    ;
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
