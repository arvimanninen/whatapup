import React from 'react';
import EquipmentCategoryRow from './EquipmentCategoryRow';

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

export default MainMenu;