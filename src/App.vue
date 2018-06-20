<template>
    <div class="app" id="app">
        <website-header />
        <website-nav />
        <div class="content-container">
            <router-view/>
        </div>
        <website-footer/>
    </div>
</template>

<script>
    import websiteHeader from '@/components/modules/defaults/header'
    import websiteFooter from '@/components/modules/defaults/footer'
    import websiteNav from '@/components/modules/defaults/nav'

    export default {
        name: 'App',
        components: {
            websiteFooter,
            websiteHeader,
            websiteNav,
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
    }
</style>
