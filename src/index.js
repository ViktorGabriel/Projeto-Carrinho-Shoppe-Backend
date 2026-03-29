import createItem from "./services/item.js";
import * as cartServices from "./services/cart.js"


const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shoppe Cart!");

const item1 = await createItem("Red Toy Car", 30.99, 1);
const item2 = await createItem("Blue Toy Car", 35.99, 3);


await cartServices.addItem(myCart,item1);
await cartServices.addItem(myCart,item2);

await cartServices.removeItem(myCart, item2)
await cartServices.removeItem(myCart, item2)

await cartServices.displayCart(myCart)

//await cartServices.deleteItem(myCart,item2.name)
await cartServices.calcTotal(myCart);
