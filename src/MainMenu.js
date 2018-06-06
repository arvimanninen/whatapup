import React from 'react';
import ReactDOM from 'react-dom';
import EquipmentList from './EquipmentList';

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
        const buttons = this.props.categories.map((category) =>
            <EquipmentCategoryButton key={category.name} category={category} 
                handleViewChange={this.props.handleViewChange}>
            </EquipmentCategoryButton>
        );
        return(
            <div>{buttons}</div>
        );
    }
}

class EquipmentCategoryButton extends React.Component {
    render() {
        const category = this.props.category;
        //const handleViewChange = this.props.handleViewChange;
        return(
            <button onClick={() => this.props.handleViewChange("EquipmentList", category)}>{category.name}</button>
        );
    }
}

export default MainMenu;