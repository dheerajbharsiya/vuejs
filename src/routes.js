import App from './App.vue';
import ProductList from './components/product-list/ProductList';

export const routes = [
    {
        path: '/home',
        component: App
    },
    {
        path: '/product-list',
        component: ProductList
    }
];