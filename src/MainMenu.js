import React from 'react';
import ReactDOM from 'react-dom';

class MainMenu extends React.Component {
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
        ]};
    }
    
    render() {
        const buttons = this.state.categories.map((category) =>
            <EquipmentCategoryButton name={category.name}></EquipmentCategoryButton>
        );
        return(
            <div>{buttons}</div>
        );
    }
}

class EquipmentCategoryButton extends React.Component {
    render() {
        const name = this.props.name;
        return(
            <button>{name}</button>
        );
    }
}

export default MainMenu;