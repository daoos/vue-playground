<template>
  <div>
    <v-btn
      class="ma-3" 
      outline 
      small 
      color="blue darken-1" 
      title="Voltar"
      @click="clicked">
      <v-icon>arrow_back</v-icon>
    </v-btn>
  </div>
</template>

<script>
  import { action } from '@storybook/addon-actions';

  export default {
    name: 'go-back-button',
    methods: {
      clicked () {
        action('clicked')()
      }
    }
  }
</script>