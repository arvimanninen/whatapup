import React from 'react';
import './mainmenu.css';

class MainMenu extends React.Component {
    render() {
        const buttons = this.props.categories.map((category) =>
            <EquipmentCategoryButton key={category.key} category={category} 
                handleViewChange={this.props.handleViewChange}>
            </EquipmentCategoryButton>
        );
        return(
            <div className="container">
                <header>
                    <div className="row">
                        <div className="col">
                            <h1>WhataPup</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>To-do app for the dog puppy acquirers </h2>
                        </div>
                    </div>
                </header>
                <div>{buttons}</div>
                <footer>
                    <div className="row">
                        <div className="col">
                            <a href="https://www.kennelliitto.fi/en/dogs/dont-support-puppy-mills">Don't support puppy mills!</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Information based on “Iloinen Koira” (The Happy Puppy)-brochure (Finnish Kennel Club *YEAR*)<br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            App made by Arvi Manninen 2018
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Released under MIT License
                        </div>
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
            <div class="row">
                <div class="col">
                    <button class="btn" onClick={() => this.props.handleViewChange("EquipmentList", category)}>{category.name}</button>
                </div>
            </div>
        );
    }
}

export default MainMenu;