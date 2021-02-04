import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import { secondsFilter, numberFilter } from '@/filters'
import { BootstrapVue } from 'bootstrap-vue'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSearch, faChevronRight, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// firebase
import './firebase';

// estilos app
import './styles/main.scss';

// importa service-worker
import './registerServiceWorker'

// después de las importaciones, le decimos a Vue que las use:
library.add(faBars, faSearch, faChevronRight, faUser, faSignOutAlt) // añade iconos de fontawesome a libreria
Vue.component('fa-icon', FontAwesomeIcon) // definimos el componente <fa-icon> para usar los iconos en los templates

Vue.filter('duration', secondsFilter) // añade filtro para la duración de las canciones
Vue.filter('number', numberFilter) // añade filtro para el formato de número de fans

Vue.use(BootstrapVue) // instala BootstrapVue
Vue.config.productionTip = false

Vue.use(VueMeta) // aplica vue-meta

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')