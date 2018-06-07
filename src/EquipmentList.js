import React from 'react';

class EquipmentList extends React.Component {
    
    render(){
        const category = this.props.category;
        const items = category.items.map((item) => 
            <button key={item.name} 
            onClick={() => this.props.handleItemClick(category.name, item.name)}>{item.name}</button>);
        return(
            <div>
                <h3>{category.name}</h3>
                <div>{items}</div>
                <button onClick={() => this.props.handleViewChange("MainMenu")}>Back</button>
            </div>
        );
    }
}

export default EquipmentList;