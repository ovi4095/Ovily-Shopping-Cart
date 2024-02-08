// <--------------------test Area------------------>

// console.log(name);
// console.log(image);

// console.log(document.querySelector('#product-one')
//                     .getElementsByTagName('button'));
// let name = document.getElementById('brand-name').innerText;
    // let image = document.getElementById('image1').src;
    
/* <li class="li_decorate grid grid--1x3 grid_li--1x3">
            <img class="li_image" src="images/iphone15.png" alt="photo" />
            <div class="item_info">
              <p>iPhone 15 pro</p>
              <p>Quantity:1</p>
            </div>
            <a class="removeBtn-position" href="#"
              ><img
                class="remove-icon"
                src="images/delete_icon.png"
                alt="remove item"
            /></a>
          </li> */



// <--------------------test Area------------------>




//// Class Function

// Create Item
class Item {
    constructor(catagory, name, image, uniValu) {
        this.catagory = catagory;
        this.name = name;
        this.image= image;
        this.uniValu= uniValu;
    }
}

// Adding or deleting Cart item
class Cart{
    static addItem(item) {
        let cartItem = document.getElementById('cart-list');
        let items= document.createElement('li');
        items.className = `li_decorate grid grid--1x3 grid_li--1x3 ${item.catagory}`;
        items.innerHTML = `
        <img class="li_image" src="${item.image}" alt="photo" />
            <div class="item_info">
              <p>${item.name}</p>
              <p>Quantity:1</p>
            </div>
            <img
                id ="${item.uniValu}"
                class="remove-icon"
                src="images/delete_icon.png"
                srcset=""
                alt="remove item"
            />
        `;
        cartItem.appendChild(items);
    }
    static deletefromList(target) {
        if(target.hasAttribute('srcset')){
            target.parentElement.remove();
            SaveData.removeItem(target.id);
        
    } 
}}

// Save or Delete From Local Storage

class SaveData {
    static getCartItem() {
        let cartItems;
        if(localStorage.getItem('cartItems') === null) {
            cartItems = [];
        } else {
            cartItems = JSON.parse(localStorage.getItem('cartItems'));
        }
        return cartItems;
    }

    static addCartItem(item) {
        let cartItems = SaveData.getCartItem();
        cartItems.push(item);

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    static displayCardItem() {
        let cartItems = SaveData.getCartItem();
        cartItems.forEach( item => {
             Cart.addItem(item);  
        });
    }
    static removeItem(id) {
        let cartItems = SaveData.getCartItem();

        cartItems.forEach((item, index) => {
            if(parseInt(item.uniValu) === parseInt(id)) {
                cartItems.splice(index, 1);
            }
        });

        localStorage.setItem('cartItems', JSON.stringify(cartItems));

    }
}



// Event Listeners
document.querySelector('#product-one').getElementsByTagName('button')[0].addEventListener('click', value => getData('one'));
document.querySelector('#product-two').getElementsByTagName('button')[0].addEventListener('click', value => getData('two'));
document.querySelector('#product-three').getElementsByTagName('button')[0].addEventListener('click', value => getData('three'));
document.querySelector('#product-four').getElementsByTagName('button')[0].addEventListener('click', value => getData('four'));
document.querySelector('#product-five').getElementsByTagName('button')[0].addEventListener('click', value => getData('five'));
document.querySelector('#product-six').getElementsByTagName('button')[0].addEventListener('click', value => getData('six'));
document.querySelector('#clear-btn').addEventListener('click', clearList);
document.querySelector('#cart-list').addEventListener('click', removeItem);
document.addEventListener('DOMContentLoaded', SaveData.displayCardItem);

// Functions 

// function checkData(value) { // Further work will  be done
//         getData(value);
//     }


function getData(value) {
    let catagory = document.querySelector(`#product-${value}`).
    getElementsByClassName('card__header')[0].
    getElementsByTagName('h1')[0].innerText;

    let name = document.querySelector(`#product-${value}`).
    getElementsByClassName('card__header')[0].
    getElementsByTagName('h2')[0].innerText;

    let image =document.querySelector(`#product-${value}`).
    getElementsByClassName('card__img')[0].src;
    
    let uniValu = parseInt(Math.random()*1000);

    let item = new Item(catagory, name,image, uniValu);


    Cart.addItem(item);

    SaveData.addCartItem(item);
  
}

function clearList() {
    let cartItem = document.getElementById('cart-list');
    cartItem.innerHTML =``;
    localStorage.clear();
}

function removeItem(value) {
    Cart.deletefromList(value.target);

}
