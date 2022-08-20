var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var root = document.querySelector('#root');
root.onmouseenter = handleChange;
function handleChange(ev) {
    ev.target.style.color = "red";
}
// function handleSetName(event){
//   let name=event.target.value;
//   console.log(name)
//   localStorage.setItem('name',JSON.stringify({name}));
// }
// function handleLoadSeller(){
//   const UserInput=JSON.parse(localStorage.getItem('name'));
// }
// function handleLoadIndex(){
// }
var htmlCart = document.querySelector(".cart");
var totalToPay = document.querySelector(".totalToPay");
var milk = {
    name: "milk",
    price: 6,
    description: "3% milk",
    image: "https://www.tnuva.co.il/uploads/f_606ee43fa87cf_1617880127.jpg",
    id: uid()
};
var bread = {
    name: "bread",
    price: 9,
    description: "white bread",
    image: "https://www.einbar.co.il/wp-content/uploads/2020/08/%D7%9C%D7%97%D7%9D-%D7%99%D7%9C%D7%93%D7%99%D7%9D-%D7%9C%D7%90%D7%AA%D7%A8.jpg",
    id: uid()
};
var butter = {
    name: "butter",
    price: 9,
    description: "the butter",
    image: "https://ynet-images1.yit.co.il/picserver5/crop_images/2020/10/04/BJF90wPID/BJF90wPID_0_530_2560_1441_0_x-large.jpg",
    id: uid()
};
var eggs = {
    name: "eggs",
    price: 21,
    description: "the eggs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bII5tIeCOVPE92gwVSLi1v_-WieT9qhIsg&usqp=CAU",
    id: uid()
};
var tomato = {
    name: "tomato",
    price: 3,
    description: "1kg tomato",
    image: "https://s3-us-west-2.amazonaws.com/melingoimages/Images/98055.jpg",
    id: uid()
};
var cabbage = {
    name: "cabbage",
    price: 5,
    description: "1kg cabbage",
    image: "https://media.istockphoto.com/photos/green-cabbage-isolated-on-white-picture-id673162168?k=20&m=673162168&s=612x612&w=0&h=3QKF6zzzCAUL3pKxW6kVbZ7lUt1JUY_SchOUMyOHwhs=",
    id: uid()
};
var tea = {
    name: "tea",
    price: 12,
    description: "tea",
    image: "https://www.wallashops.co.il/on/demandware.static/-/Sites-wallashops-m-catalog/default/dwd19f9a45/productImages/images_from_feed/hury/9KA989DE9D/openfile_aspx_id_148684&type_png.jpg",
    id: uid()
};
var coffee = {
    name: "coffee",
    price: 15,
    description: "coffee",
    image: "https://superpharmstorage.blob.core.windows.net/hybris/products/mobile/medium/7290000176062.jpg",
    id: uid()
};
var toiletPaper = {
    name: "toilet paper",
    price: 35,
    description: "toilet paper",
    image: "https://h7z8m6j8.stackpathcdn.com/wp-content/uploads/2019/04/90-%D7%9E%D7%9E%D7%97%D7%98%D7%95%D7%AA-%D7%A4%D7%A0%D7%99%D7%9D-%D7%A7%D7%9C%D7%99%D7%A0%D7%A7%D7%A1-%D7%91%D7%95%D7%98%D7%99%D7%A7-%D7%91%D7%A7%D7%95%D7%A4%D7%A1%D7%90.jpg",
    id: uid()
};
//making an array of the products
var arrayOfProducts = [
    milk,
    bread,
    butter,
    eggs,
    tomato,
    cabbage,
    tea,
    coffee,
    toiletPaper,
];
var cart = [];
arrayOfProducts.forEach(function (product) {
    var cont = document.querySelector(".containerOfProducts");
    var imageTitle = document.querySelector(".imageTitle");
    var products = [
        {
            src: "" + product.image,
            title: "" + product.description,
            tags: "" + product.price,
            id: "" + product.id
        },
    ];
    products.forEach(function (par) {
        cont.innerHTML += "<div class=\"parent\"><img src=\"" + par.src + "\" alt=\"" + par.title + "\"><div id=" + par.id + "><div>" + par.title + "</div><div>" + par.tags + "\u20AA</div><button onclick=\"addMeToCart(event)\" class=\"addMe\">Add</button></div></div>";
    });
});
function addMeToCart(event) {
    event.preventDefault();
    var productId = event.target.parentElement.id;
    var productPrice = event.target.parentElement.price;
    function totalPay() {
        var balance = 0;
        for (var key in productPrice) {
            ++balance;
        }
    }
    var productInCartIndex = cart.findIndex(function (element) { return element.id == productId; });
    var productInProductsArrayIndex = arrayOfProducts.findIndex(function (element) { return element.id == productId; });
    setItem(arrayOfProducts[productInProductsArrayIndex]);
    if (productInCartIndex != -1) {
        cart[productInCartIndex].quantity++;
    }
    else {
        var currentProduct = {
            id: productId,
            quantity: 1,
            price: productPrice
        };
        cart.push(currentProduct);
    }
    var cartTotal = cartHtmlBuild();
    localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
    htmlCart.innerHTML += "<div>Total amount: " + cartTotal + "\u20AA";
    htmlCart.innerHTML += "<button onclick=\"alertFunction()\">Buy now!</button>";
}
function alertFunction() {
    alert("thank you for buying but we dont have payment system! :)");
}
function uid() {
    return "id-" + Math.ceil(Math.random() * 1e8);
}
function countCart() {
    var count = 0;
    // loop through each key/value
    for (var key in cart) {
        // increase the count
        ++count;
    }
}
function cartHtmlBuild() {
    countCart();
    var cartTotal = 0;
    var count = 0;
    // loop through each key/value
    for (var key in cart) {
        // increase the count
        ++count;
    }
    var htmlCartCount = document.querySelector(".num-cart-product");
    htmlCartCount.innerHTML = "" + count;
    htmlCart.innerHTML = "<div class=\u201DHeader\u201D><h3 class=\u201DHeading\u201D>Shopping Cart</h3></div><div class=\"quantityOfProducts\"><h3 class=\u201DHeading\u201D>products added to cart: " + count + "</h3></div>";
    cart.forEach(function (product) {
        var currentCartProduct = arrayOfProducts.find(function (element) { return element.id == product.id; });
        var totalPayProduct = currentCartProduct.price * product.quantity;
        cartTotal += totalPayProduct;
        htmlCart.innerHTML += "<div class=\"parentProduct\"><img src=\"" + currentCartProduct.image + "\" alt=\"" + currentCartProduct.description + "\"><div id=" + currentCartProduct.id + "><div><b>" + currentCartProduct.name + "</b></div><div>" + currentCartProduct.price + "\u20AA</div><div>quantity: " + product.quantity + "<div>Total amount: " + totalPayProduct + "\u20AA</div>";
    });
    return cartTotal;
}
function setItem(product) {
    var _a, _b;
    var cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.id] == undefined) {
            cartItems = __assign(__assign({}, cartItems), (_a = {}, _a[product.id] = product, _a));
        }
    }
    else {
        cartItems = (_b = {},
            _b[product.id] = product,
            _b);
    }
    localStorage.setItem("productInCart", JSON.stringify(cartItems));
}
// reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
// cart.forEach(function (par) {
//     htmlCart.innerHTML += `<div class="parent"><img src="${par.src}" alt="${par.title}"><div id=${par.id} class="overlay"><div>${par.title}</div><div>${par.tags}₪</div><button onclick="addMeToCart(event)" class="addMe">Add</button></div></div>`;
//   });
// When the user clicks on div, open the popup
