import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { padding } from './decorators'

import MachineBox from '../components/MachineBox.vue'
import Machines from '../components/Machines.vue'

storiesOf('Machine Box', module)
    .addDecorator(padding)
    .add('only component with machine name', () => ({
        components: { MachineBox },
        template: '<machine-box :machine="myMachine"/>',
        data () {
            return {
                myMachine: {
                    machine_name: 'Machine 006'
                }
            }
        }
    }))
    .add('grid of machines', () => ({
        components: {
            Machines
        },
        template: '<machines />'
    }))

