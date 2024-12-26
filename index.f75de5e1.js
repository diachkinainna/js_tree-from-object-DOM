'use strict';
const food = {
    Drink: {
        Wine: {},
        Schnaps: {}
    },
    Fruit: {
        Red: {
            Cherry: {},
            Strawberry: {}
        },
        Yellow: {
            Banana: {},
            Pineapple: {}
        }
    }
};
document.body.id = 'tree';
const tree = document.querySelector('#tree');
function createTree(element, data) {
    const list = document.createElement('ul');
    for(const key in data){
        const listElement = document.createElement('li');
        listElement.textContent = key;
        if (Object.keys(data[key]).length > 0) createTree(listElement, data[key]);
        list.appendChild(listElement);
    }
    element.appendChild(list);
}
createTree(tree, food);

//# sourceMappingURL=index.f75de5e1.js.map
