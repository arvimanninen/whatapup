import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const CATEGORIES = [
    {key: "CategoryA", name: "Category A", items: [
        {key: "A-1", name: "Item a1", completed: false},
        {key: "A-2", name: "Item a2", completed: false},
        {key: "A-3", name: "Item a3", completed: false}
    ]},
    {key: "CategoryB", name: "Category B", items: [
        {key: "B-1", name: "Item b1", completed: false},
        {key: "B-2", name: "Item b2", completed: false},
        {key: "B-3", name: "Item b3", completed: false}
    ]},
    {key: "CategoryC", name: "Category C", items: [
        {key: "C-1", name: "Item c1", completed: false},
        {key: "C-2", name: "Item c2", completed: false},
        {key: "C-3", name: "Item c3", completed: false}
    ]}
];

// CHANGE NEXT LINE AS A COMMENT BEFORE TESTING
// ReactDOM.render(<App categories={CATEGORIES} />, document.getElementById('root'));
// registerServiceWorker();

export default CATEGORIES;