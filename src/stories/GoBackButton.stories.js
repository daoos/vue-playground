import Vue from 'vue'
import { storiesOf } from '@storybook/vue';
import { withReadme } from 'storybook-readme';

import GoBackButton from '../components/buttons/GoBackButton.vue';
import GoBackButtonReadme from '../components/buttons/GoBackButtonReadme.md'

import { padding } from './decorators'

storiesOf('Go back Button', module)
    .addDecorator(withReadme(GoBackButtonReadme))
    .addDecorator(padding)
    .add('without text', () => ({
        components: { GoBackButton },
        template: '<go-back-button />',
    }));
