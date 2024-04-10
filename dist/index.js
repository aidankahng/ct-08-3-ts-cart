"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
let uuid = (0, uuid_1.v4)();
console.log(uuid);
function createUser(name, age) {
    let newUser = {
        id: (0, uuid_1.v4)(),
        name: name,
        age: age,
        cart: []
    };
    return newUser;
}
function createItem(name, price, description) {
    let newItem = {
        id: (0, uuid_1.v4)(),
        name: name,
        price: price,
        description: description
    };
    return newItem;
}
function addToCart(toAdd, user) {
    user.cart.push(toAdd);
}
function removeOneFromCart(toRemove, user) {
    const indexToRemove = user.cart.indexOf(toRemove);
    if (indexToRemove > -1) {
        user.cart.splice(indexToRemove, 1);
    }
}
function removeAllFromCart(toRemove, user) {
    let i = 0;
    while (i < user.cart.length) {
        if (user.cart[i] === toRemove) {
            user.cart.splice(i, 1);
        }
        else {
            i = i + 1;
        }
    }
}
function removeSomeFromCart(toRemove, user, num) {
    let i = 0;
    let counter = 0;
    while (i < user.cart.length && counter < num) {
        if (user.cart[i] === toRemove) {
            user.cart.splice(i, 1);
            ++counter;
        }
        else {
            i = i + 1;
        }
    }
}
function cartTotal(user) {
    let total = 0;
    for (let cartItem of user.cart) {
        total += cartItem.price;
    }
    return total;
}
function printCart(user) {
    for (let cartItem of user.cart) {
        console.log(cartItem.description);
    }
}
let itemA = createItem('Head of Broccoli', 3.65, 'This broccoli is green and a little damp');
let itemB = createItem('A Banana', 0.23, 'An Organic Dole Banana');
let itemC = createItem('Milk', 4.25, 'Half gallon of lactose filled milk');
let tJoe = createUser('Mr. T Joes', 52);
addToCart(itemA, tJoe);
printCart(tJoe);
console.log(cartTotal(tJoe));
addToCart(itemB, tJoe);
addToCart(itemB, tJoe);
addToCart(itemB, tJoe);
printCart(tJoe);
console.log(cartTotal(tJoe));
addToCart(itemC, tJoe);
addToCart(itemC, tJoe);
addToCart(itemC, tJoe);
printCart(tJoe);
console.log(cartTotal(tJoe));
removeAllFromCart(itemB, tJoe);
printCart(tJoe);
console.log(cartTotal(tJoe));
removeSomeFromCart(itemC, tJoe, 2);
printCart(tJoe);
console.log(cartTotal(tJoe));
removeOneFromCart(itemA, tJoe);
