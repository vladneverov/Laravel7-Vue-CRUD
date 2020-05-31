require('./bootstrap');
window.Vue = require('vue');

import App from './components/App'
import Navbar from './components/parts/Navbar'
import Posts from './components/pages/posts/Index'
import ValidationErrors from './components/parts/ValidationErrors'

Vue.component('navbar', Navbar);
Vue.component('posts', Posts);
Vue.component('validation-errors', ValidationErrors)

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
