require('./bootstrap');
window.Vue = require('vue');

import App from './components/App'
import Navbar from './components/parts/Navbar'
import Posts from './components/pages/posts/Index'

Vue.component('navbar', Navbar);
Vue.component('posts', Posts);

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
