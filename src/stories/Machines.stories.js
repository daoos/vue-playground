import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import centered from './centered'

storiesOf('Machine Box', module)
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
    .addDecorator(centered)
    .add('grid of machines', () => ({
        template: '<machines />'
    }))

