<template>
    <div class="detail">
        <div class="detail-title">
            {{game.name}}
        </div>
        <div class="detail-container">
            <img class="detail-image" :src="game.img" :alt="imageAlt"/>
            <span class="detail-description-container">
                <span class="detail-paragraph" v-for="paragraph in game.content">
                    {{paragraph}}
                    <br/>
                    <br/>
                </span>
            </span>
        </div>
        <div class="detail-game">
            <hr class="detail-line">
            <div v-if="exists(game.yt_vid)" class="detail-yt-vid" align="center">
                <iframe class="detail-vid" :src="ytVid" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <hr class="detail-line">
            <div class="detail-title">
                Sources:
            </div>
            <div v-for="link in game.source" align="center">
                <a :href="link.url" :title="linkTitle(link.name)">{{ link.name }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "gameDetail",
        data() {
            return {
                game: Object
            }
        },
        computed: {
            imageAlt() {
                return this.game.name + '_cover_image'
            },
            ytVid() {
                return 'https://www.youtube-nocookie.com/embed/' + this.game.yt_vid
            }
        },
        methods: {
            notFound() {
                this.$router.push({
                    name: 'notFound'
                })
            },
            linkTitle(linkName) {
                return this.game.name + '_' +  linkName
            },
            exists(input) {
                return input !== null && input !== undefined
            }
        },
        mounted() {
            let gameId = parseInt(this.$store.getters.getCurrentGameId)
            if (gameId !== null && gameId > 0 && gameId <= 9) {
                this.game = this.$store.getters.getTodoById(gameId)
            } else if (gameId !== null && gameId > 9 && gameId <= 12) {
                this.game = this.$store.getters.getUpcommingGame(gameId)
            } else if (gameId > 12 || isInteger(gameId)) {
                this.notFound()
            }
        }

    }
</script>

<style scoped>

</style>