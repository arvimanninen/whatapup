import React from 'react';

class EquipmentList extends React.Component {

    render(){
        const category = this.props.category;
        const items = category.items.map((item) =>
        <div className="row">
            <div className="col-sm-1 col-md-2 col-lg-3"></div>
            <div className="col">
                <button className="btn btn-primary btn-lg" key={item.key} onClick={() => this.props.handleItemClick(item.key)}>{item.name}</button>
            </div> 
            <div className="col-sm-1 col-md-2 col-lg-3"></div>    
        </div>
        );
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-1 col-md-2 col-lg-3"></div>
                    <div className="col">
                        <h3>{category.name}</h3>
                    </div>
                    <div className="col-sm-1 col-md-2 col-lg-3"></div>
                </div>
                <div>{items}</div>
                <div className="row">
                    <div className="col-sm-1 col-md-2 col-lg-3"></div>
                    <div className="col">
                        <button className="btn btn-secondary" onClick={() => this.props.handleViewChange("MainMenu")}>Back</button>
                    </div>
                    <div className="col-sm-1 col-md-2 col-lg-3"></div>
                </div>
            </div>
        );
    }
}

export default EquipmentList;