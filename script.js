const goods = [
    { title: 'Отвертка', price: 50 },
    { title: 'Кусачки', price: 75 },
    { title: 'Пила', price: 120 },
    { title: 'Топор', price: 250 },
    { title: 'Дрель', price: 370 },
    { title: 'Молоток', price: 105 }
];

const renderGoodsItem = (title = "Пусто", price = 0) => `<div class="goods-item"><div class="photo"></div><h3>${title}</h3><p>${price}</p><button class="add-btn">Добавить</div>`
    ;

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    let [a, b, c, d, e, f] = goodsList
    document.querySelector('.goods-list').innerHTML = `${a + b + c + d + e + f}`;
}

renderGoodsList(goods);