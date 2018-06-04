import React, { Component } from 'react';

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
    ], currentView: "MainMenu"};
  }
  /*
    const buttons = this.state.categories.map((category) =>
            <EquipmentCategoryButton name={category.name} url={category.url}></EquipmentCategoryButton>
        );
  */
  getCategoryNames = () => this.state.categories.map((category) => category.name);

  render() {
    return (
      <div>
        {this.state.currentView === "MainMenu" ? <MainMenu></MainMenu> : null}
      </div>
    );
  }
}

export default App;
