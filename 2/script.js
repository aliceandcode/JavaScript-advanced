'use strict';

class ProductList {
    constructor(container = '.goods-list') {
        this.container = container;
        this.goods = [];
        this.productList = [];

        this.fetcher();
        this.render();
    }

    fetcher() {
        this.goods = [
        {id: 1, title: 'Notebook', price: 1000},
        {id: 2, title: 'Mouse', price: 100},
        {id: 3, title: 'Keyboard', price: 250},
        {id: 4, title: 'Gamepad', price: 150},
          ];
    }

    calcCost() {
        return this.productList.reduce((acc, product) => acc + product.price, 0); 
    }

    render() {
        const div = document.querySelector('.goods-list');

        for (const item of this.goods) {
            const productObj = new ProductItem(item);
            this.productList.push(productObj);
            div.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}

class ProductItem {
    constructor(item, img = 'https://via.placeholder.com/200x150') {
        this.title = item.title;
        this.price = item.price;
        this.img = img;
    }

    render() {
        return `<div class="goods-item">
        <img src="${this.img}" alt="Some img">
        <h3 class="item-title">${this.title}</h3>
        <p>${this.price}</p>
        <button class="buy-btn">Купить</button>
        </div>`;
    }

}

const generateProducts = new ProductList();

    
    class productCart {
      constructor(id, price) {
        this.id = id;
        this.price = price;
      }

      addToCart() {

      }

      deleteFromCart() {

      }
    }

