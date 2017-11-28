import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs';

import PageTitle from '../components/custom-elements/PageTitle.vue'

import { padding } from './decorators'

storiesOf('Page Title', module)
    .addDecorator(withKnobs)
    .addDecorator(padding)
    .add('page title component', () => {
        const title = text('Title text', 'My title');
        return {
            components: { PageTitle },
            template: `<page-title content="${title}"/>`,
        }
    });
