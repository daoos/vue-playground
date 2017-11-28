import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Welcome from '../components/Welcome.vue';

import { padding } from './decorators'

storiesOf('Welcome', module)
    .addDecorator(padding)
    .add('to Storybook', () => ({
        components: { Welcome },
        template: '<welcome :showApp="action" />',
        methods: { action: linkTo('Button') },
    }));