import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { withKnobs, object } from '@storybook/addon-knobs';

import MachineBox from '../components/MachineBox.vue'
import Machines from '../components/Machines.vue'

import { padding } from './decorators'

storiesOf('Machine Box', module)
    .addDecorator(withKnobs)
    .addDecorator(padding)
    .add('only one machine component', () => {
        const myMachine = object('Machine Object', {
            machine_name: 'Machine 006'
        })

        return {
            components: { MachineBox },
            template: `<machine-box :machine="machine"/>`,
            data () {
                return {
                    machine: myMachine
                }
            }
        }
    });


storiesOf('Machine Box', module)
    .addDecorator(padding)
    .add('grid of machines', () => ({
            components: {
                Machines
            },
            template: '<machines />'
        
    }));

