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
    
  }

  handleViewChange(targetView, targetCategory) {
    this.setState({
      currentView: targetView,
      currentCategory: targetCategory
    });
  }
  /*
    const buttons = this.state.categories.map((category) =>
            <EquipmentCategoryButton name={category.name} url={category.url}></EquipmentCategoryButton>
        );
  */
  

  render() {
    return (
      <div>
        {this.state.currentView === "MainMenu" ? 
          <MainMenu categories={this.state.categories} handleViewChange={this.handleViewChange}>
          </MainMenu> 
        : null}
        {this.state.currentView === "EquipmentList" ? 
          <EquipmentList category={this.state.currentCategory} handleViewChange={this.handleViewChange}>
          </EquipmentList> 
        : null}
      </div>
    );
  }
}

export default App;
