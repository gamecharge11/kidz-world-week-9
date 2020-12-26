var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var book1Add = document.getElementById("book-1");
var book2Add = document.getElementById("book-2");
var book3Add = document.getElementById("book-3");
var book4Add = document.getElementById("book-4");
var book5Add = document.getElementById("book-5");
var book6Add = document.getElementById("book-6");

var game1Add = document.getElementById("game-1");
var game2Add = document.getElementById("game-2");
var game3Add = document.getElementById("game-3");
var game4Add = document.getElementById("game-4");

var craft1Add = document.getElementById("craft-1");
var craft2Add = document.getElementById("craft-2");
var craft3Add = document.getElementById("craft-3");
var craft4Add = document.getElementById("craft-4");

var book1 = {
    name:"This was our pact",
    quantity:0,
    dollars:7,
    cents:49,
};
var book2 = {
    name:"The famous five",
    quantity:0,
    dollars:4,
    cents:59,
};
var book3 = {
    name:"Matlida",
    quantity:0,
    dollars:6,
    cents:80,
};
var book4 = {
    name:"Harry Potter",
    quantity:0,
    dollars:10,
    cents:0,
};
var book5 = {
    name:"For Young Readers",
    quantity:0,
    dollars:7,
    cents:29,
};
var book6 = {
    name:"Wimpy Kid - DIY",
    quantity:0,
    dollars:4,
    cents:99,
};

var game1 = {
    name:"Dart Board",
    quantity:0,
    dollars:17,
    cents:49,
};
var game2 = {
    name:"Connect 4",
    quantity:0,
    dollars:19,
    cents:99,
};
var game3 = {
    name:"Jenga",
    quantity:0,
    dollars:20,
    cents:99,
};
var game4 = {
    name:"Monopoly",
    quantity:0,
    dollars:19,
    cents:49,
};
var craft1 = {
    name:"Bookmarks",
    quantity:0,
    dollars:12,
    cents:49,
};
var craft2 = {
    name:"Birthday Card",
    quantity:0,
    dollars:19,
    cents:99,
};
var craft3 = {
    name:"Stuffed toys",
    quantity:0,
    dollars:15,
    cents:99,
};
var craft4 = {
    name:"Dream catcher drawing",
    quantity:0,
    dollars:18,
    cents:49,
};

function updateCart () {
    cart = book1.quantity+
    book2.quantity+
    book3.quantity+
    book4.quantity+
    book5.quantity+
    book6.quantity+
    game1.quantity+
    game2.quantity+
    game3.quantity+
    game4.quantity+
    craft1.quantity+
    craft2.quantity+
    craft3.quantity+
    craft4.quantity;
    cartValue.innerHTML=cart;
}

book1Add.onclick=(e)=>{
    book1.quantity++
    updateCart()
}
book2Add.onclick=(e)=>{
    book2.quantity++
    updateCart()
}
book3Add.onclick=(e)=>{
    book3.quantity++
    updateCart()
}
book4Add.onclick=(e)=>{
    book4.quantity++
    updateCart()
}
book5Add.onclick=(e)=>{
    book5.quantity++
    updateCart()
}
game1Add.onclick=(e)=>{
    game1.quantity++
    updateCart()
}
game2Add.onclick=(e)=>{
    game2.quantity++
    updateCart()
}
game3Add.onclick=(e)=>{
    game3.quantity++
    updateCart()
}
game4Add.onclick=(e)=>{
    game4.quantity++
    updateCart()
}
craft1Add.onclick=(e)=>{
    craft1.quantity++
    updateCart()
}
craft2Add.onclick=(e)=>{
    craft1.quantity++
    updateCart()
}
craft3Add.onclick=(e)=>{
    craft1.quantity++
    updateCart()
}
craft4Add.onclick=(e)=>{
    craft1.quantity++
    updateCart()
}
