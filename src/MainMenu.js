import React from 'react';

class MainMenu extends React.Component {
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