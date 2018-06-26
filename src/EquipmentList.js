import React from 'react';
import update from 'immutability-helper';

class EquipmentList extends React.Component {
    // TODO: CHANGE FUNCTION NAME!
    
    
    onItemClick(itemKey) {
        const itemKeys = this.state.itemKeyPairs.map((ikp) => ikp.key);
        const itemIndex = itemKeys.indexOf(itemKey);
        let itemCompleted = false;
        if(this.state.items[itemIndex].completed === false) {
            itemCompleted = true;
        }
        const updatedItemKeyPairs = update(this.state.itemKeyPairs, 
            {[itemIndex]: {completed: {$set: itemCompleted}}}
        );
        this.setState({
            itemKeyPairs: updatedItemKeyPairs
        });
        this.props.handleItemClick(itemKey);
    }

    

    render(){
        const category = this.props.category;
        let itemButtons = [];
        for(let i = 0; i < category.items.length; i++) {
            let item = category.items[i];
            if(item.completed === false) {
                itemButtons.unshift(<button className="btn btn-primary btn-lg" 
                    key={item.name} onClick={() => this.props.handleItemClick(category.name, item.name)}>{item.name}
                </button>);
            } else {
                itemButtons.push(<button className="btn btn-light btn-lg" 
                    key={item.name} onClick={() => this.props.handleItemClick(category.name, item.name)}>{item.name}
                </button>);
            }
        }
        /*
        const itemButtons = category.items.map((item) =>
                <button className="btn btn-primary btn-lg" key={item.key} onClick={() => 
                this.props.handleItemClick(item.key)}>{item.name}</button>
        );
        */
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-1 col-md-2 col-lg-3"></div>
                    <div className="col">
                        <h3>{category.name}</h3><br/>
                        <div>{itemButtons}</div><br/>
                        <button className="btn btn-secondary" onClick={() => this.props.handleViewChange("MainMenu")}>Back</button>
                    </div>
                    <div className="col-sm-1 col-md-2 col-lg-3"></div>
                </div>
            </div>
        );
    }
}



export default EquipmentList;