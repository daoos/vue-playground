import Vue from 'vue'
import GoBackButton from '../components/buttons/GoBackButton.vue';
import GoBackButtonReadme from '../components/buttons/GoBackButtonReadme.md'
import { storiesOf } from '@storybook/vue';
import { withReadme } from 'storybook-readme';

storiesOf('Go back Button', module)
    .add('without text', withReadme(GoBackButtonReadme, () => ({
        components: { GoBackButton },
        template: '<go-back-button />',
    })));
