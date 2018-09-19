import React from 'react';
import puppyImage1 from '../src/images/dogpuppy1.jpg';

class EquipmentCategoryIndicator extends React.Component {
    render() {
        const completedPerc = this.props.completedPerc;
        const indicatorImage = puppyImage1;
        const indicatorStyle = {
            width: "auto",
            height: completedPerc + "%",
            backgroundImage: "url(" + indicatorImage + ")",
            backgroundRepeat: "no-repeat",
            borderRadius: .3 + "rem"
        };
        return(
            <div style={indicatorStyle}>
            </div>
        );
    }
}

export default EquipmentCategoryIndicator;