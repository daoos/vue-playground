<template>
  <v-flex class="machine-box" xs3 @click="handleClick(machine)">
    <div>
      <v-layout justify-center>
        <v-flex class="text-xs-center">
          <i class="material-icons">computer</i>
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
    name: "MachineBox",
    props: {
      machine: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleClick(machine) {
        action("clicked")();
      }
    }
  };
</script>

<style lang="scss" scoped>
.machine-box {
  padding: 15px;
  color: #999;
  font-family: Roboto;
  cursor: pointer;

  &:hover {
    background-color: #add6ff;
  }
}
</style>
