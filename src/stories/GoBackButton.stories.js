import Vue from 'vue'
import GoBackButton from '../components/GoBackButton.vue';
import { storiesOf } from '@storybook/vue';

storiesOf('Go back Button', module)
    .add('without text', () => ({
        components: { GoBackButton },
        template: '<go-back-button />',
    }));
