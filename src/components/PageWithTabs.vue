<template>
    <section>
        <v-tabs fixed centered>
            <v-tabs-bar class="cyan" dark>
                <v-tabs-slider class="yellow"></v-tabs-slider>
                <v-tabs-item
                v-for="i in items"
                :key="i"
                :href="'#tab-' + i"
                >
                {{ i }}
                </v-tabs-item>
            </v-tabs-bar>
            <v-tabs-items>
                <v-tabs-content
                v-for="i in items"
                :key="i"
                :id="'tab-' + i"
                >
                <v-card flat>
                    <v-card-text>{{ text }}</v-card-text>
                </v-card>
                </v-tabs-content>
            </v-tabs-items>
        </v-tabs>
    </section>
</template>

<script>
  export default {
    name: 'page-with-tabs',
    data () {
      return {
        items: ['Item One', 'Item Seventeen', 'Item Five'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
</script>

<style scoped>
    section {
        margin: 0 auto;
        max-width: 800px;
    }
</style>
