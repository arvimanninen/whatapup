import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StorageApi from './StorageApi';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
let getCategories = () => {
    const categories = [
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
    const storageApi = new StorageApi();
    for(let i = 0; i < categories.length; i++) {
        for(let k = 0; k < categories[i].items.length; k++) {
            const completed = storageApi.getCategoryItemCompleted(categories[i].items[k].key);
            if(completed === true || completed === false) {
                categories[i].items[k].completed === completed;
            }
        }
    }
    return categories;
}

ReactDOM.render(<App categories={getCategories()} />, document.getElementById('root'));
// registerServiceWorker();
