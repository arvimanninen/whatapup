import React from 'react';
import './mainmenu.css';

class MainMenu extends React.Component {
    render() {
        const buttons = this.props.categories.map((category) =>
            <div className="row">
                <div className="col-sm-1 col-md-2 col-lg-3"></div>
                <div className="col">
                    <EquipmentCategoryButton key={category.key} category={category} 
                            handleViewChange={this.props.handleViewChange}>
                    </EquipmentCategoryButton>
                </div>
                <div className="col-sm-1 col-md-2 col-lg-3"></div>
            </div>
        );
        return(
            <div className="container-fluid">
                <header>
                    <div className="row">
                        <div className="col-sm-1 col-md-2 col-lg-3"></div>
                        <div className="col text-center">
                            <h1>WhataPup</h1>
                            <h2>To-do app for the dog puppy acquirers </h2>
                        </div>
                        <div className="col-sm-1 col-md-2 col-lg-3"></div>
                    </div>
                </header>
                <div>{buttons}</div>
                <footer>
                    <div className="row">
                        <div className="col-sm-1 col-md-2 col-lg-3"></div>
                        <div className="col text-center">
                            <a href="https://www.kennelliitto.fi/en/dogs/dont-support-puppy-mills">Don't support puppy mills!</a>
                            <br/>
                            Information based on “Iloinen Koira” (The Happy Puppy)-brochure (Finnish Kennel Club *YEAR*)
                            <br/>
                            App made by Arvi Manninen 2018
                            <br/>
                            Released under MIT License
                        </div>
                        <div className="col-sm-1 col-md-2 col-lg-3"></div>
                    </div>
                </footer>
            </div>
        );
    }
}

class EquipmentCategoryButton extends React.Component {
    render() {
        const category = this.props.category;
        return(
            <button class="btn btn-primary btn-large" onClick={() => this.props.handleViewChange("EquipmentList", category)}>{category.name}</button>
        );
    }
}

export default MainMenu;