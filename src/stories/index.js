/* eslint-disable react/react-in-jsx-scope */
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import '../../node_modules/vuetify/dist/vuetify.min.css'
import '../../node_modules/material-design-icons/iconfont/material-icons.css'

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from '../components/MyButton.vue';
import Welcome from '../components/Welcome.vue';
import GoBackButton from '../components/GoBackButton.vue';
import PageWithTabs from '../components/PageWithTabs.vue'

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }));

storiesOf('Go back Button', module)
  .add('without text', () => ({
    components: { GoBackButton },
    template: '<go-back-button />',
  }));

storiesOf('Page with tabs', module)
  .add('with text', () => ({
    components: { PageWithTabs },
    template: '<page-with-tabs />',
  }));
/* eslint-enable react/react-in-jsx-scope */
