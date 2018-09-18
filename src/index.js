import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/global.css';
// import registerServiceWorker from './registerServiceWorker';

const CATEGORIES = [
    {name: "Basic equipment", items: [
        {name: "Collar", completed: false},
        {name: "Leash", completed: false},
        {name: "Resting place", completed: false},
        {name: "Food bowl", completed: false},
        {name: "Water bowl", completed: false},
        {name: "Nail scissors", completed: false},
        {name: "Brush", completed: false},
        {name: "Suitable food", completed: false},
        {name: "Teethers", completed: false},
        {name: "Toys", completed: false}
    ]},
    {name: "First aid equipment", items: [
        {name: "Gauze", completed: false},
        {name: "Cotton wool", completed: false},
        {name: "Wound cleanser", completed: false},
        {name: "Viper package", completed: false},
        {name: "Charcoal pills", completed: false},
        {name: "Thermometer", completed: false},
        {name: "Tick removal tongs", completed: false}
    ]}
];

// CHANGE NEXT LINE AS A COMMENT BEFORE TESTING
ReactDOM.render(<App categories={CATEGORIES} />, document.getElementById('root'));
// registerServiceWorker();

// FOR TESTS
export default CATEGORIES;