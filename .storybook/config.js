import { configure } from '@storybook/vue'

import Vue from 'vue'
import Vuetify from 'vuetify'

import '../node_modules/vuetify/dist/vuetify.min.css'
import '../node_modules/material-design-icons/iconfont/material-icons.css'

Vue.use(Vuetify)

import GoBackButton from '../src/components/GoBackButton.vue'
import MachineBox from '../src/components/MachineBox.vue'
import Machines from '../src/components/Machines.vue'
import PageTitle from '../src/components/PageTitle.vue'

Vue.component('go-back-button', GoBackButton)
Vue.component('machine-box', MachineBox)
Vue.component('machines', Machines)
Vue.component('page-title', PageTitle)

const req = require.context('../src/stories', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

// function loadStories() {
//   require('../src/stories')
// }

configure(loadStories, module)
