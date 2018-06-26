import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import registerServiceWorker from './registerServiceWorker';

const CATEGORIES = [
    {name: "Category A", items: [
        {name: "Item a1", completed: false},
        {name: "Item a2", completed: false},
        {name: "Item a3", completed: false}
    ]},
    {name: "Category B", items: [
        {name: "Item b1", completed: false},
        {name: "Item b2", completed: false},
        {name: "Item b3", completed: false}
    ]},
    {name: "Category C", items: [
        {name: "Item c1", completed: false},
        {name: "Item c2", completed: false},
        {name: "Item c3", completed: false}
    ]}
];

// CHANGE NEXT LINE AS A COMMENT BEFORE TESTING
ReactDOM.render(<App categories={CATEGORIES} />, document.getElementById('root'));
// registerServiceWorker();

// FOR TESTS
export default CATEGORIES;