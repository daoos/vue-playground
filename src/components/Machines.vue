<template>

    <section style="height: 100%;">
        
        <page-title content="Minhas máquinas"></page-title>

        <v-layout row wrap v-if="!loading" class="machines">

                <machine-box
                    @on-click="selectMachine"
                    :icon="computerIcon"
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
    import { action } from "@storybook/addon-actions";
    
    import PageTitle from './custom-elements/PageTitle.vue'
    import MachineBox from './MachineBox.vue'
    
    export default {
        name: 'machines',

        components: {
            PageTitle,
            MachineBox
        },

        props: {
            machines: Array,
            loading: Boolean
        },

        data () {
            return {
                error: false,
                errorMessage: '',
                computerIcon: 'computer'
            }
        },

        methods: {
            selectMachine (machine) {
                action("clicked")(machine)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .machines {
        margin-top: 30px;
        user-select: none;
    }    
</style>