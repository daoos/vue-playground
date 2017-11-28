import { configure } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options';

import Vue from 'vue'
import Vuetify from 'vuetify'

import '../node_modules/vuetify/dist/vuetify.min.css'
import '../node_modules/material-design-icons/iconfont/material-icons.css'

Vue.use(Vuetify)

import components from '../src/components'
components.forEach(c => Vue.component(c))

const req = require.context('../src/stories', true, /\.stories\.js$/)
const loadStories = () => req.keys().forEach((filename) => req(filename))

setOptions({
  name: 'Vue playground',
  url: 'https://github.com/delete/vue-playground',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
});

configure(loadStories, module)
