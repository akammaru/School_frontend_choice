<template>
    <div class="list-container">
        <div v-for="released in releasedGamesArray" align="center">
            <game-preview class="column" :game="released" :location="location"/>
        </div>
    </div>
</template>

<script>
    import upcomingGames from "./JSON/upcommingGames"
    import gamePreview from "../modules/games/preview"

    export default {
        name: "upcoming",
        data() {
            return {
                location: 'upcoming'
            }
        },
        computed: {
            releasedGamesArray() {
                return upcomingGames
            },
        },
        components: {
            gamePreview
        }
    }
</script>

<style scoped>

</style>