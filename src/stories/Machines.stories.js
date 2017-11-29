import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme';
import { withKnobs, object, button } from '@storybook/addon-knobs';

import MachineBox from '../components/MachineBox.vue'
import Machines from '../components/Machines.vue'
import MachinesReadme from '../components//MachinesReadme.md'

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
            template: `<machine-box :machine="machine" :icon="icon" />`,
            data () {
                return {
                    machine: myMachine,
                    icon: 'computer'
                }
            }
        }
    });


storiesOf('Machine Box', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme(MachinesReadme))
    .addDecorator(padding)
    .add('grid of machines', () => {
        return {
            components: {
                Machines
            },
            template: '<machines :loading="loading" :machines="machines" />',
            data () {
                return {
                    loading: false,
                    machines: [],
                    allMachines: [
                    {
                        root: '/m/1',
                        machine_id: '1',
                        machine_name: 'Machine 1'
                    },
                    {
                        root: '/m/2',
                        machine_id: '2',
                        machine_name: 'Machine 2'
                    },
                    {
                        root: '/m/3',
                        machine_id: '3',
                        machine_name: 'Machine 3'
                    },
                    {
                        root: '/m/4',
                        machine_id: '4',
                        machine_name: 'Machine 5'
                    },
                    {
                        root: '/m/6',
                        machine_id: '6',
                        machine_name: 'Machine 6'
                    }]
                }
            },
            methods: {
                loadMachines() {
                    this.loading = true;

                    setTimeout(() => {
                        this.machines = this.allMachines;
                        this.loading = false;
                    }, 2000);
                }
            },
            created() {
                this.loadMachines()
            }
        }
    });
    
