import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { padding } from './decorators'

storiesOf('Machine Box', module)
    .addDecorator(padding)
    .add('only component with machine name', () => ({
        template: '<machine-box :machine="myMachine"/>',
        data () {
            return {
                myMachine: {
                    machine_name: 'Machine 006'
                }
            }
        }
    }))
    .addDecorator(padding)
    .add('grid of machines', () => ({
        template: '<machines />'
    }))

