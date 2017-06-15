require('bootstrap/dist/css/bootstrap.min.css');
require('./css/main.css')
import Vue from 'vue';
Vue.component('my-button', {
 template: '<input type="button" class="btn btn-primary" value="Click me">'
})
new Vue({
    el: '#app',
    data: {
      message: "Hello There! This is my first Vue.js application! - amasenov"
    }
});