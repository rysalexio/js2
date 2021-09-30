const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://via.placeholder.com/200x150',
    isVisibleCart: false, //данные видимости корзины
    searchLine: '',
    isVisibleSearch: false, //видимость результата поиска
    cartList: 'Корзина пуста',
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(good) {
      console.dir(good);
    },
    FilterGoods(searchLine) { //поиск с выводом в консоль
      this.getJson(`${API + this.catalogUrl}`)
        .then(item => {
          for (let i = 0; i < item.length; i++) {
            if (searchLine.toLowerCase() == item[i].product_name.toLowerCase()) {
              console.log(item[i])
            }
          }
        })
    },
  },
  beforeCreate() {

  },
  created() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        this.products = data;
      });
  },
  beforeMount() {

  },
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  },
});
