import ProductList from './../product-list/ProductList.vue';

export default {
  name: 'Container',
  props: {
    msg: String
  },
  components: {
    ProductList
  }
}

