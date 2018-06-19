<template>
    <span class="preview-container">
        <span class="preview-thumbnail">
            <img class="preview-img" :src="game.img"/>
        </span>
        <span class="preview-text">
            <div class="preview-name">
            {{ game.name }}
        </div>
        <div class="preview-summary">
            {{ game.short_text}}
        </div>
        <tag :game="game"/>
         <div>
            <button type="button" @click="openDetail"> more info</button>
         </div>
        </span>
    </span>
</template>

<script>
    import tag from "./tag"

    export default {
        name: "preview",
        props: {
            game: {
                type: Object
            }
        },
        data() {
            return {}
        },
        computed: {

        },
        methods: {
            openDetail() {
                this.$store.dispatch('setCurrentGame', {'game': this.game})
                this.$router.push({
                    name: 'gameDetail',
                    params: {
                        name: this.game.name
                    }
                })
            }
        },
        components: {
            tag,
        }
    }
</script>

<style scoped>

</style>