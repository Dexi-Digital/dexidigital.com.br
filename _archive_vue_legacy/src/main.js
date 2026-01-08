import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueGtag from 'vue-gtag'
import VueI18n from 'vue-i18n'
import ptBR from './locales/pt-BR.json'
import en from './locales/en.json'


import Vue2Editor from "vue2-editor";
Vue.use(Vue2Editor);

Vue.use(VueGtag, {
  config: {
    id: 'G-4R29PPN3G6'
  },
});
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: store.state.language, // Idioma padrão
  fallbackLocale: 'pt-BR',
  messages: {
   'pt-BR': ptBR,
    'en':en,// Adicione mais idiomas conforme necessário
  }
})

import 'bootstrap/dist/css/bootstrap.css'
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

import VueMeta from 'vue-meta';
Vue.use(VueMeta);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
