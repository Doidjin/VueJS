import Vue from 'vue'
import App from './App.vue'
//Importando o módulo
import VueResource from 'vue-resource';

//Registrando o módulo/plugin no Global View Object
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
