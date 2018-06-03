import React from 'react';
import ReactDOM from 'react-dom';
class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {categories: [
            {name: "Category A", url: "https://www.google.com"},
            {name: "Category B", url: "https://www.google.com"},
            {name: "Category C", url: "https://www.google.com"}
        ]};
    }

    render() {
        const buttons = this.state.categories.map((category) =>
            <EquipmentCategoryButton name={category.name} url={category.url}></EquipmentCategoryButton>
        );
        return(
            <div>{buttons}</div>
        );
    }
}

class EquipmentCategoryButton extends React.Component {
    render() {
        const name = this.props.name;
        const url = this.props.url;
        return(
            <a href={url}>{name}</a>
        );
    }
}

export default MainMenu;