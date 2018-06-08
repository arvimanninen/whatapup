import React from 'react';

class MainMenu extends React.Component {
    render() {
        const buttons = this.props.categories.map((category) =>
            <EquipmentCategoryButton key={category.key} category={category} 
                handleViewChange={this.props.handleViewChange}>
            </EquipmentCategoryButton>
        );
        return(
            <div>
                <header>
                    <h1>WhataPup</h1>
                    <h2>To-do app for the dog puppy acquirers </h2>
                </header>
                <div>{buttons}</div>
                <footer>
                    <a href="https://www.kennelliitto.fi/en/dogs/dont-support-puppy-mills">Don't support puppy mills!</a>
                    <p>
                        Information based on “Iloinen Koira” (The Happy Puppy)-brochure (Finnish Kennel Club *YEAR*)<br/>
                        App made by Arvi Manninen 2018<br/>
                        Released under MIT License<br/>
                    </p>
                </footer>
            </div>
        );
    }
}

class EquipmentCategoryButton extends React.Component {
    render() {
        const category = this.props.category;
        return(
            <button onClick={() => this.props.handleViewChange("EquipmentList", category)}>{category.name}</button>
        );
    }
}

export default MainMenu;