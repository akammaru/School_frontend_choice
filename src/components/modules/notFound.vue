<template>
    <div>
        {{ notFound }}
    </div>
</template>

<script>
    export default {
        name: "notFound",
        data() {
            return {
                notFound: 'Error: 404. Page was not found.'
            }
        }
    }
</script>

<style scoped>

</style>