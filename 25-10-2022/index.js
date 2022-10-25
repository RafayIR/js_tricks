const people = [
    {
        name: 'Rafay',
        age: 25,
    },
    {
        name: 'Fatima',
        age: 27,
    },
    {
        name: 'Ali',
        age: 30
    }
]

const age = people.map((item) => {

    return item.name
})

console.log(age);

const newPeople = people.map((item) => {
    return {
        firstname: item.name.toUpperCase(),
        age: item.age
    }
})

console.log(newPeople);

const names = people.map((person) => {
    return `<h2> ${person.name} </h2>`;

});

const result = document.querySelector('#result');
result.innerHTML = names.join('');


// Unique Values
const menu = [
    {
        name: 'pancakes',
        category: 'breakfast',
    },
    {
        name: 'burger',
        category: 'lunch',
    },
    {
        name: 'steak',
        category: 'dinner',
    },
    {
        name: 'bacon',
        category: 'breakfast',
    },
    {
        name: 'eggs',
        category: 'breakfast',
    },
    {
        name: 'pasta',
        category: 'dinner',
    },
];


const categories = ['all', ...new Set(menu.map((item) => {
    return item.category;
}))
]
console.log(categories);


const resultMenu = document.querySelector('.result');

resultMenu.innerHTML = categories.map( (category) => {
    return `<button>${category}<button> `;
}).join('');


// ARRAY FROM


const udemy = 'udemy';

// console.log(Array.from(udemy));

const text = document.querySelectorAll('.text');

const newtext = Array.from(text).find( (item) => item.textContent === 'person');
// console.log(newtext);
// console.log(text);

const items = Array.from( {length : 120}, (_, index) => {
    return index
});

const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);
console.log(pages);


const newItems = Array.from( { length : pages}, (_, index) => {
    const start = index * itemsPerPage;
    const tempItems = items.slice(start, start + itemsPerPage);

    return tempItems;
});

console.log(items);

console.log(newItems);