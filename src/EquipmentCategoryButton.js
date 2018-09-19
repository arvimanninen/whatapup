import React from 'react';

class EquipmentCategoryButton extends React.Component {
    render() {
        const categoryName = this.props.categoryName;
        return(
            <div>
                <button className="btn btn-primary btn-lg btn-block" onClick={() => 
                    this.props.handleViewChange("EquipmentList", categoryName)}>{categoryName}</button>
            </div>
        );
    }
}

export default EquipmentCategoryButton;