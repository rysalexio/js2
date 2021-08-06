class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><div class="photo"></div><h3>${this.title}</h3><p>${this.price}</p><button class="add-btn">Добавить</div>`;
    }
}
class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Отвертка', price: 50 },
            { title: 'Кусачки', price: 75 },
            { title: 'Пила', price: 120 },
            { title: 'Топор', price: 250 },
            { title: 'Дрель', price: 370 },
            { title: 'Молоток', price: 105 }
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    sumPrices() {
        let summ = 0;
        this.goods.forEach(prices => {
            const itemPrice = prices.price;
            summ += itemPrice;
        });
        console.log(summ)
    }
}
const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumPrices()

class CartsItem extends GoodsItem {
    constructor(title, price, amount) {
        super(title, price);
        this.amount = amount;
    }
    render() {
        return `<div class="carts-item"><h3>${this.title}</h3><span>${this.amount}</span><p>${this.price}</p></div>`;
    }
}

let cartButton = document.querySelector(".cart-button")
let allItems = document.querySelector(".all-items")
cartButton.addEventListener('click', function () {
    allItems.classList.toggle('visible-carts')
})

class AllCarts {
    constructor() {
        this.goods = [];
    }
    render() {
        let listHtml = `<div class="carts-item"><h3>Товар</h3><span>Количество</span><p>Цена</p></div>`;
        this.goods.forEach(good => {
            listHtml += good.render();
        });
        listHtml += `<div class="carts-item"><h3>Итого</h3><span>${1}</span><p>${1}</p></div>`
        document.querySelector('.all-items').innerHTML = listHtml;
    }
}
const carts = new AllCarts();

let addBtn = document.querySelectorAll(".add-btn")
addBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let cartItem = new CartsItem(btn.parentNode.childNodes[1].innerText, parseInt(btn.parentNode.childNodes[2].innerText), 1)
        carts.goods.push(cartItem)
        carts.render()
    })
})

