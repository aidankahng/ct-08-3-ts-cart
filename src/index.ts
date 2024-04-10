import { v4 as uuidv4 } from 'uuid';
let uuid=uuidv4()
console.log(uuid)


type Item = {
    id:string,
    name:string,
    price:number,
    description:string
}

type User = {
    id:string,
    name:string,
    age:number,
    cart:Item[]
}

function createUser(name:string, age:number):User{
    let newUser:User = {
        id : uuidv4(),
        name : name,
        age : age,
        cart : []
    }
    return newUser
}

function createItem(name:string, price:number, description:string):Item{
    let newItem:Item = {
        id: uuidv4(),
        name: name,
        price: price,
        description: description
    }
    return newItem
}

function addToCart(toAdd:Item, user:User):void{
    user.cart.push(toAdd);
}

function removeOneFromCart(toRemove:Item, user:User):void{
    const indexToRemove = user.cart.indexOf(toRemove);
    if (indexToRemove > -1) {
        user.cart.splice(indexToRemove, 1);
    }
}

function removeAllFromCart(toRemove:Item, user:User):void{
    let i:number = 0;
    while (i < user.cart.length) {
        if (user.cart[i] === toRemove) {
            user.cart.splice(i, 1);
        } else {
            i = i + 1;
        }
    }
}

function removeSomeFromCart(toRemove:Item, user:User, num:number):void{
    let i:number = 0;
    let counter:number = 0;
    while (i < user.cart.length && counter < num) {
        if (user.cart[i] === toRemove) {
            user.cart.splice(i, 1);
            ++counter;
        } else {
            i = i + 1;
        }
    }
}

function cartTotal(user:User):number{
    let total:number = 0;
    for (let cartItem of user.cart) {
        total += cartItem.price;
    }
    return total;
}

function printCart(user:User):void{
    for (let cartItem of user.cart) {
        console.log(cartItem.description);
    }
}

let itemA:Item = createItem('Head of Broccoli', 3.65, 'This broccoli is green and a little damp');
let itemB:Item = createItem('A Banana', 0.23, 'An Organic Dole Banana');
let itemC:Item = createItem('Milk', 4.25, 'Half gallon of lactose filled milk');
let tJoe:User = createUser('Mr. T Joes', 52);

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