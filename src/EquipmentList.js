import React from 'react';

class EquipmentList extends React.Component {    
    render(){
        const category = this.props.category;
        let itemButtons = [];
        for(let i = 0; i < category.items.length; i++) {
            let item = category.items[i];
            item.completed ? 
                itemButtons.push(<EquipmentItemButton key={category.name + "-" + item.name} completed={true} categoryName={category.name} itemName={item.name} handleClick={this.props.handleItemClick} />)
                : 
                itemButtons.unshift(<EquipmentItemButton key={category.name + "-" + item.name} completed={false} categoryName={category.name} itemName={item.name} handleClick={this.props.handleItemClick}/>);
        }
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-1 col-md-2 col-lg-3"></div>
                    <div className="col text-center">
                        <h3>{category.name}</h3>
                        <br/>
                        <div>{itemButtons}</div>
                        <br/>
                        <button className="btn btn-secondary" onClick={() => this.props.handleViewChange("MainMenu")}>Back</button>
                    </div>
                    <div className="col-sm-1 col-md-2 col-lg-3"></div>
                </div>
            </div>
        );
    }
}

class EquipmentItemButton extends React.Component {
    render() {
        const completed = this.props.completed;
        const categoryName = this.props.categoryName;
        const itemName = this.props.itemName;
        // TODO: ADD handleClick
        return(
            <React.Fragment>
                {completed === true ?
                    <button className="btn btn-light btn-lg btn-block" key={itemName} onClick={() => this.props.handleClick(categoryName, itemName)}>
                        <s>{itemName}</s>
                    </button> 
                    : 
                    <button className="btn btn-primary btn-lg btn-block" key={itemName} onClick={() => this.props.handleClick(categoryName, itemName)}>
                        {itemName}
                    </button>
                }
            </React.Fragment>
        );
    }
    

}

export default EquipmentList;
