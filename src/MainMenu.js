import React from 'react';
import puppyImage1 from '../src/images/dogpuppy1.jpg';

class MainMenu extends React.Component {

    render() {
        const categories = this.props.categories;
        const categoryRows = categories.map((cat) => 
            <EquipmentCategoryRow key={cat.name + "-row"} category={cat} handleViewChange={this.props.handleViewChange}/>
        );
        
        return(
            <div className="container-fluid">
                <div className="row">
                    <header className="col-12 text-center">
                        <h1>WhataPup</h1>
                        <h2>To-do app for the dog puppy acquirers </h2>
                    </header>
                </div>
                <div className="text-center">
                    {categoryRows}
                </div>
                <div className="row">
                    <footer className="col-12 text-center">
                        <a href="https://www.kennelliitto.fi/en/dog-ownership/getting-dog/dont-support-puppy-mills" target="_blank">Don't support puppy mills!</a>
                        <br/>
                        Information based on “Iloinen Koira” (The Happy Puppy)-brochure (Finnish Kennel Club *YEAR*)
                        <br/>
                        App made by Arvi Manninen 2018
                        <br/>
                        Released under MIT License 
                        <br />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                    </footer>
                </div>
            </div>
        );
    }
}
/*
class EquipmentCategoryIndicator extends React.Component {
    render() {
        const completed = this.props.itemsCompleted;
        const total = this.props.itemsTotal;
        const imagePath = this.props.imagePath;
        let heightPercent = completed / 100;
        let image = <img src={imagePath} />

        image.style.clipPath = "inset(60px 60px 60px 60px)" 
        return(
            <React.Fragment>
                {image}
                <p> {this.props.itemsCompleted}
                {this.props.itemsTotal} </p>
            </React.Fragment>
        )
    }
}
*/
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

class EquipmentCategoryRow extends React.Component {
    render() {
        
        const category =  this.props.category;
        const itemsTotal = this.props.category.items.length;
        let itemsCompleted = 0;
        // TODO: CHANGE TO filter -FUNCTION
        for(let i = 0; i < this.props.category.items.length; i++) {
            if(category.items[i].completed === true) {
                itemsCompleted++;
            }
        }
        const percPerItem = 100 / itemsTotal;
        const completedPerc = itemsCompleted * percPerItem;
        console.log("completedPerc: " + completedPerc);
        const bgImage = puppyImage1;
        const rowStyle = {
            height: 175 + "px"
        };
        const bgStyle = {
            width: "auto",
            height: completedPerc + "%",
            backgroundImage: "url(" + bgImage + ")",
            backgroundRepeat: "no-repeat",
            borderRadius: 25 + "px"
        };
        
        return(
            <div className="row" style={rowStyle}>
                <div className="col-9">
                    <EquipmentCategoryButton  categoryName={category.name} 
                    handleViewChange={this.props.handleViewChange}></EquipmentCategoryButton>
                    <br/>
                    Items acquired: <strong>{itemsCompleted}</strong> / {itemsTotal}
                </div>
                <div className="col-3">
                    <div style={bgStyle}>
                    </div>
                </div>              
            </div>
        );

    }
}


export default MainMenu;