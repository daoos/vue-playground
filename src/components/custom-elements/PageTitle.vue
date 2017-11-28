<template>
    <h1 class="title page-title">{{ content }}</h1>
</template>

<script>
    export default {
        name: 'page-title',
        props: ['content']
    }
</script>
<style lang="scss">
    .page-title {
        font-family: Roboto;
        border-bottom: 1px solid #ebebeb;
        padding-bottom: 8px;
    }
</style>