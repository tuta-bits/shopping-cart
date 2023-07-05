// Cart

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// Open cart
cartIcon.onclick = () => {
    cart.classList.add('active');
};

// Close cart
closeCart.onclick = () => {
    cart.classList.remove('active');
};

// For Cart smooth functioning
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready();
}

function ready() {
    loadContent();
}

// creating ready function
function loadContent() {
    // remove items from cart
    let removeCartButtons = document.querySelectorAll('.cart-remove');
    removeCartButtons.forEach((button)=>{
        button.addEventListener('click', removeCartItem);
    });



    // Quantity changes
    let quantityInputs = document.querySelectorAll('.cart-quantity');
    quantityInputs.forEach((input)=>{
        input.addEventListener('change', quantityChanged);
    });

    // Add to cart
    let addCart = document.querySelectorAll('.add-cart');
    addCart.forEach((button)=>{
        button.addEventListener('click', addCartClicked);
    });

 
      // Checkout function
      document.getElementsByClassName('btn-buy')[0].addEventListener('click', checkoutButtonClicked);


   updateTotal();
}



// Checkout Button Function
function checkoutButtonClicked() {
    alert('Your order has been placed \n!!! Thanks !!!');
    var cartContent = document.getElementsByClassName('cart-content')[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }

    loadContent();
    
}

//removeCartItem function
function removeCartItem() {
    let title = this.parentElement.querySelector('.cart-product-title').innerHTML;
    itemList = itemList.filter(el => el.title != title);
    this.parentElement.remove();
    loadContent();
} 


// Quantity Changed
function quantityChanged() {
    if (isNaN(this.value) || this.value <= 0) {
        this.value = 1;
    }

    loadContent();
}

let itemList = [];

//Add addCartClicked function
function addCartClicked() {
    let shopProducts = this.parentElement;
    let title = shopProducts.querySelector('.product-title').innerHTML;
    let price = shopProducts.querySelector('.price').innerHTML;
    let productImg = shopProducts.querySelector('.product-img').src;
    //console.log(title, price, prodcutImg);

    let newProduct = {title, price, productImg}

    //Check product alreday exist in cart
    if (itemList.find((el) => el.title == newProduct.title)) {
        alert("You've already added this item to cart");
        return;
    }
    else {
        itemList.push(newProduct);
    }

    // Adding products to cart
    let newProductElem = addProductToCart(title, price, productImg);
    let cartShopBox = document.createElement('div');
    cartShopBox.innerHTML = newProductElem;
    let cartItems = document.querySelector('.cart-content');
    cartItems.append(cartShopBox);
    loadContent();

}




// Add product to cart function

function addProductToCart(title, price, productImg) {
    return `
    <div class="cart-box">
        <img src="${productImg}"class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="bx bx-trash cart-remove"></i>
    </div>  
    `;
}

    





const myCart = [];
//-------------------------
       // Add item to cart
       function addItem() {
        
        let title = document.querySelector('.got').innerHTML;
        let price = document.querySelector('.rap').innerHTML;
        let prodImg = document.querySelector('.here').src;
        console.log(title, price, prodImg);


        let newProd = {title, price, prodImg};

        if (myCart.find((el) => el.prodImg == newProd.prodImg)) {
            alert("You've already added this item to cart");
            return;
        }
        else {
            myCart.push(newProd);
        }

        //-------------------------
        //Add product to cart

        let prodElem = addProd(title, price, prodImg);
        let cartBox = document.createElement('div');
        cartBox.innerHTML = prodElem;
        let cartItem = document.querySelector('.cart-content');
        cartItem.append(cartBox);
        loadContent();

      }

      //--------------------
      // Display the product in the cart
      
      function addProd(title, price, prodImg) {
        return `
        <div class="cart-box">
        <img src="${prodImg}"class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="bx bx-trash cart-remove"></i>
    </div>
        `
      }





//Update total
function updateTotal() {
    const cartContent = document.querySelectorAll('.cart-box');
    const totalValue = document.querySelector('.total-price');

    let total = 0;


    cartContent.forEach(product =>{
        let priceElement = document.querySelector('.cart-price');
        let price = parseFloat(priceElement.innerHTML.replace('$', ''))
        let quantity = product.querySelector('.cart-quantity').value;
        total += (price * quantity);
        product.querySelector('.cart-price').innertext = '$' + (price * quantity);
    });

    totalValue.innerHTML = '$' + total;

        
    
        // Add Product Count in Cart Icon

        const cartCount=document.querySelector('.box');
        let count=itemList.length || myCart.length;
        cartCount.innerHTML=count;

        if(count==0){
        cartCount.style.display='none';
        }else{
        cartCount.style.display='block';
        }

}



//Button with Increment and Decrement Number
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const num = document.querySelector('.num');


let a = 1;

plus.addEventListener('click', ()=>{
    a++;
    a = (a < 10) ? '' + a : a;
    num.innerHTML = a;
});

minus.addEventListener('click', ()=>{
    if(a > 1) {
        a--;
        a = (a < 10) ? '' + a : a;
        num.innerHTML = a;
    }
});


// Navbar indicator and active menu icon
const navBar = document.querySelector('.navbar');
const plot = document.querySelectorAll('.grp')
const indi = document.querySelector('.indi');

plot.forEach((grp, index) => {
    grp.addEventListener('click', e =>{
        e.preventDefault();// Prevent submitting
        navBar.querySelector('.active').classList.remove('active');
        grp.classList.add('active');

        indi.style.transform = `translateX(calc(${index * 123}px))`;
    });
});