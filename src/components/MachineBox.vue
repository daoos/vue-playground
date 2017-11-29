<template>
    <v-flex class="machine-box" xs3 @click="handleClick(machine)">
        <div>
            <v-layout justify-center>
                <v-flex class="text-xs-center">
                    <i class="material-icons">{{ icon }}</i>
                </v-flex>
            </v-layout>

            <v-layout justify-center>
                <v-flex class="subheading text-xs-center">{{ machine.machine_name }}</v-flex>
            </v-layout>
        </div>
    </v-flex>
</template>
<script>
    import { action } from "@storybook/addon-actions";

    export default {
        name: "machine-box",
        props: {
            machine: {
                type: Object,
                required: true
            },
            icon: String
        },
        methods: {
            handleClick(machine) {
                this.$emit("on-click", machine);
                action("clicked")(machine);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .machine-box {
        color: #999;
        cursor: pointer;
        font-family: Roboto;
        padding: 15px;

        &:hover {
            background-color: #add6ff;
        }
    }
</style>
