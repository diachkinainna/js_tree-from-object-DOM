'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

document.body.id = 'tree';

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  for (const key in data) {
    const elementList = document.createElement('li');

    elementList.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(elementList, data[key]);
    }

    list.appendChild(elementList);
  }

  element.appendChild(list);
}

createTree(tree, food);
