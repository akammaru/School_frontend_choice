<template>
    <div class="nav-main navbar-menu">
        <router-link class="navbar-item navbar-button" :class="{active: active(1)}" to="/" @click.native="activeLink = 1">Home</router-link>
        <router-link class="navbar-item navbar-button" :class="{active: active(2)}" to="/released" @click.native="activeLink = 2">Released games</router-link>
        <router-link class="navbar-item navbar-button" :class="{active: active(3)}" to="/upcoming" @click.native="activeLink = 3">Upcoming games</router-link>
        <router-link class="navbar-item navbar-button" :class="{active: active(4)}" to="/contact" @click.native="activeLink = 4">Contact</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeLink: 1
            }
        },
        methods: {
            active(value) {
                return this.activeLink === value

            }
        },
    }
</script>

<style scoped lang="sass">

</style>