<template>

    <section style="height: 100%;">
        
        <page-title content="Minhas máquinas"></page-title>

        <v-layout row wrap v-if="!loading" class="machines">

                <machine-box
                    @on-click="selectMachine"
                    :machine="machine" v-for="machine in machines" :key="machine.machine_id"></machine-box>

                <template v-if="error">
                    <v-layout
                        column
                        align-center
                        justify-center>
                            <v-alert color="error" icon="warning" value="true">
                                {{ errorMessage }}
                            </v-alert>

                            <div class="mt-5">
                                <v-btn outline color="error" @click="loadMachines">Tentar de novo</v-btn>
                            </div>
                    </v-layout>

                </template>

        </v-layout>

        <v-layout 
            v-else
            row 
            justify-center
            align-center 
            style="height: 85%;">
            <v-progress-circular
                indeterminate 
                v-bind:size="70" 
                v-bind:width="7" 
                color="blue"></v-progress-circular>
        </v-layout>
    </section>

</template>

<script>
    import PageTitle from './PageTitle.vue'
    import MachineBox from './MachineBox.vue'
    
    export default {
        name: 'Machines',

        components: {
            PageTitle,
            MachineBox
        },

        data () {
            return {
                loading: false,
                machines: [],
                error: false,
                errorMessage: ''
            }
        },

        methods: {
            selectMachine (machine) {
                
            },
            loadMachines () {
                this.loading = true;

                setTimeout(() => {
                    this.machines = [{
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
                    }];
                    this.loading = false;
                }, 2000);
            }
        },

        created () {
            this.loadMachines()
        }
    }
</script>

<style lang="scss" scoped>
    .machines {
        user-select: none;
    }    
</style>