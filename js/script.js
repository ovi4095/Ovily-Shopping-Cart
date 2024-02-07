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



document.querySelector('#product-one').getElementsByTagName('button')[0].addEventListener('click', value => getData('one'));
document.querySelector('#product-two').getElementsByTagName('button')[0].addEventListener('click', value => getData('two'));
document.querySelector('#product-three').getElementsByTagName('button')[0].addEventListener('click', value => getData('three'));
document.querySelector('#product-four').getElementsByTagName('button')[0].addEventListener('click', value => getData('four'));
document.querySelector('#product-five').getElementsByTagName('button')[0].addEventListener('click', value => getData('five'));
document.querySelector('#product-six').getElementsByTagName('button')[0].addEventListener('click', value => getData('six'));

class Item {
    constructor(name, image) {
        this.name = name;
        this.image= image;
    }
}

class Cart{
    static addItem(item) {
        // console.log(item.name,item.image);
        let cartItem = document.getElementById('cart-list');
        let items= document.createElement('li');
        items.className = "li_decorate grid grid--1x3 grid_li--1x3";
        items.innerHTML = `
        <img class="li_image" src="${item.image}" alt="photo" />
            <div class="item_info">
              <p>${item.name}</p>
              <p>Quantity:1</p>
            </div>
            <a class="removeBtn-position" href="#"
              ><img
                class="remove-icon"
                src="images/delete_icon.png"
                alt="remove item"
            /></a>
        `;
        cartItem.appendChild(items);
    }
}


function getData(value) {

    let name = document.querySelector(`#product-${value}`).
    getElementsByClassName('card__header')[0].
    getElementsByTagName('h2')[0].innerText;

    let image =document.querySelector(`#product-${value}`).
    getElementsByClassName('card__img')[0].src;
   
    let item = new Item(name,image);
    // let cart = new Cart();

    Cart.addItem(item);
    // console.log(item);    
}

