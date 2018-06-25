import React from 'react';
import './mainmenu.css';

class MainMenu extends React.Component {
    render() {
        const categoryButtons = this.props.categories.map((category) => 
            <EquipmentCategoryButton key={category.key} category={category} 
            handleViewChange={this.props.handleViewChange}>
            </EquipmentCategoryButton>
        );
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-1 col-md-2 col-lg-3"></div>
                    <div className="col text-center">
                        <header>
                            <h1>WhataPup</h1>
                            <h2>To-do app for the dog puppy acquirers </h2>
                        </header>
                        <div>
                            {categoryButtons}
                        </div>
                        <footer>
                            <a href="https://www.kennelliitto.fi/en/dogs/dont-support-puppy-mills">Don't support puppy mills!</a>
                            <br/>
                            Information based on “Iloinen Koira” (The Happy Puppy)-brochure (Finnish Kennel Club *YEAR*)
                            <br/>
                            App made by Arvi Manninen 2018
                            <br/>
                            Released under MIT License
                        </footer>
                    </div>
                    <div className="col-sm-1 col-md-2 col-lg-3"></div>
                </div>
            </div>
        );
    }
}

class EquipmentCategoryButton extends React.Component {
    render() {
        const categoryName = this.props.category.name;
        return(
            <button className="btn btn-primary btn-lg" onClick={() => this.props.handleViewChange("EquipmentList", categoryName)}>{categoryName}</button>
        );
    }
}

export default MainMenu;