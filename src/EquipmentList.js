import React from 'react';
import ReactDOM from 'react-dom';

class EquipmentList extends React.Component {
    render(){
        const category = this.props.category;
        const items = category.items.map((item) => <li key={item.name}>{item.name}</li>);
        return(
            <div>
                <h3>{category.name}</h3>
                <ul>{items}</ul>
                <button onClick={() => this.props.handleViewChange("MainMenu")}>Back</button>
            </div>
        );
    }
}

export default EquipmentList;