import Vue from 'vue'
import { storiesOf } from '@storybook/vue';

import PageWithTabs from '../components/PageWithTabs.vue'

storiesOf('Page with tabs', module)
    .add('with text', () => ({
        components: { PageWithTabs },
        template: '<page-with-tabs />',
    }));