import Vue from 'vue'
import { storiesOf } from '@storybook/vue';

import PageWithTabs from '../components/PageWithTabs.vue'

import { padding } from './decorators'

storiesOf('Page with tabs', module)
    .addDecorator(padding)
    .add('with text', () => ({
        components: { PageWithTabs },
        template: '<page-with-tabs />',
    }));