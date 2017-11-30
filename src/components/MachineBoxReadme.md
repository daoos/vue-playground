# Machine box component

## How to use into another component
```js
<template>
	<machine-box
	    @on-click="selectMachine"
	    :icon="computerIcon"
	    :machine="machine" v-for="machine in machines" :key="machine.machine_id"></machine-box>
</template>
<script>
	import MachineBox from '../components/MachineBox.vue'
	
	export default {
        name: 'myAnotherComponent',

        components: {
            MachineBox
        },
        
        data () {
            return {
                machines: [{
                	machine_name: 'Machine 1',
                	machine_id: '44444'
                }],
                computerIcon: 'computer' // Material icon
            }
        },

        methods: {
            selectMachine (machine) {
                console.log('Machine selected!')
            }
        }
    }
</script>
```