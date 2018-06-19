<template>
    <div class="carocel-container">
        <v-carousel hide-controls hide-delimiters :interval="duration">
            <v-carousel-item v-for="(item,i) in images":src="item.src" :key="i"></v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
    export default {
        props: {
            images: null,
        },
        data() {
            return {
                duration: this.getRandomInt(1000)
            }
        },
        methods: {
            getRandomInt(max) {
                return 6000 + Math.floor(Math.random() * Math.floor(max));
            }
        }
    }
</script>

<style lang="scss" scoped>
    .carocel-container {
        width: 40%;
    }

    .carousel {
        width: 100%;
    }
</style>
