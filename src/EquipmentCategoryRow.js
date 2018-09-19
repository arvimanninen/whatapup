import React from 'react';
import EquipmentCategoryButton from './EquipmentCategoryButton';
import EquipmentCategoryIndicator from './EquipmentCategoryIndicator';

class EquipmentCategoryRow extends React.Component {
    render() {
        const category =  this.props.category;
        const itemsTotal = this.props.category.items.length;
        let itemsCompleted = 0;
        for(let i = 0; i < itemsTotal; i++) {
            if(category.items[i].completed === true) {
                itemsCompleted++;
            }
        }
        const percPerItem = 100 / itemsTotal;
        const completedPerc = itemsCompleted * percPerItem;
        console.log("completedPerc: " + completedPerc);
        const rowStyle = {
            height: 175 + "px"
        };
        return(
            <div className="row" style={rowStyle}>
                <div className="col-9">
                    <EquipmentCategoryButton categoryName={category.name} 
                    handleViewChange={this.props.handleViewChange}>
                    </EquipmentCategoryButton>
                    <br/>
                    Items acquired: <strong>{itemsCompleted}</strong> / {itemsTotal}
                </div>
                <div className="col-3">
                    <EquipmentCategoryIndicator completedPerc={completedPerc}>
                    </EquipmentCategoryIndicator>
                </div>              
            </div>
        );
    }
}

export default EquipmentCategoryRow;