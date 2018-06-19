<template>
    <div class="home" ref="homepage" id="home">
        <div>
            <div align="center">
                <div class="home-title">
                    Welcome to The Game Store
                </div>
                <div>
                    We welcome you to our website. <br/>
                    If you are ever in the neighbourhood, don't be afraid to drop in.
                </div>
            </div>
            <div class="home-carocel" align="center">
                <carocel :images="hq_imags" />
            </div>
        </div>
    </div>
</template>

<script>
    import carocel from "../modules/defaults/carocel"

    export default {
        name: "home",
        data() {
            return {
                hq_imags: [
                    {
                       src: "/static/hq/tgs_hq_inside.jpg"
                    },
                    {
                        src: "/static/hq/tgs_hq_outside.jpg"
                    },
                    {
                        src: "/static/hq/tgs_hq_sunrise.jpg"
                    }
                ]
            }
        },
        mounted() {
            this.$nextTick(() => {
                window.addEventListener('resize', () => {
                    let test = document.getElementById('home').style
                    let correctedHeigth = window.innerHeight - 150
                    test.height = correctedHeigth +"px"
                    console.log(test, test.height, correctedHeigth)
                });
            })
        },
        components: {
            carocel
        },
    }
</script>

<style scoped>

</style>