export default {
    name: 'ProductList',
    props: {
      msg: String
    },
    data: function() {
      return {
        products: [
          {name: 'prod1', value: '10'},
          {name: 'prod2', value: '20'},
          {name: 'prod3', value: '30'},
        ]
      }
    }
  }