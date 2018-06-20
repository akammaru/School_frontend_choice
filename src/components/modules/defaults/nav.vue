<template>
    <div>
        <nav class="navbar is-hidden-touch" role="navigation" aria-label="main nagivation">
            <div class="navbar-menu nav-main columns" :class="{ 'is-active': showNav }">
                <div class=" column is-1">&nbsp;</div>
                <div class="column is-10 navbar-start">
                    <router-link class="navbar-item navbar-button" title="home" :class="{active: active(1)}" to="/"
                                 @click.native="activeLink = 1">Home
                    </router-link>
                    <router-link class="navbar-item navbar-button" title="released games" :class="{active: active(2)}" to="/released"
                                 @click.native="activeLink = 2">Released games
                    </router-link>
                    <router-link class="navbar-item navbar-button" title="upcomming games" :class="{active: active(3)}" to="/upcoming"
                                 @click.native="activeLink = 3">Upcoming games
                    </router-link>
                    <router-link class="navbar-item navbar-button" title="contact" :class="{active: active(4)}" to="/contact"
                                 @click.native="activeLink = 4">Contact
                    </router-link>
                </div>
                <div class="column is-1"></div>
            </div>
        </nav>
            <nav class="navbar is-hidden-desktop">
                <div class="navbar-brand">
                    <!--
                Using the v-on: directive to listen for the click event and toggle the data property showNav. Also, using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
                -->
                    <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <!--
              Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
              -->
                <div class="navbar-menu" :class="{ 'is-active': showNav }">
                    <div class="navbar-end">
                        <router-link class="navbar-item" title="home" :class="{active: active(1)}" to="/"
                                     @click.native="[activeLink = 1, switchActive()]">Home
                        </router-link>
                        <router-link class="navbar-item" title="released games" :class="{active: active(2)}" to="/released"
                                     @click.native="[activeLink = 2, switchActive()]">Released games
                        </router-link>
                        <router-link class="navbar-item" title="upcomming games" :class="{active: active(3)}" to="/upcoming"
                                     @click.native="[activeLink = 3, switchActive()]">Upcoming games
                        </router-link>
                        <router-link class="navbar-item" title="contact" :class="{active: active(4)}" to="/contact"
                                     @click.native="[activeLink = 4, switchActive()]">Contact
                        </router-link>
                    </div>
                </div>
            </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeLink: 1,
                showNav: false
            }
        },
        computed: {},
        methods: {
            active(value) {
                return this.activeLink === value
            },
            switchActive() {
                this.showNav = false
            }
        }
    }
</script>

<style scoped lang="sass">

</style>