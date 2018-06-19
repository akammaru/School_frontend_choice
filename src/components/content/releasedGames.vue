<template>
    <div class="list-container">
        <div v-for="released in releasedGamesArray" align="center">
            <game-preview class="column" :game="released" :location="location"/>
        </div>
    </div>
</template>

<script>
    import releasedGames from "./JSON/releasedGames"
    import gamePreview from "../modules/games/preview"

    export default {
        name: "released",
        data() {
            return {
                location: 'released'
            }
        },
        computed: {
            releasedGamesArray() {
                return releasedGames
            },
        },
        components: {
            gamePreview
        }
    }
</script>

<style scoped>

</style>