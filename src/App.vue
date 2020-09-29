<template>
<div id="app">
    <div id="header">
        &nbsp;
        <i class="fa fa-link"> </i> &nbsp; Kenaf &nbsp; &nbsp; Language:
        {{ userLang }}
        <menu type="list" id="lang">
            <menuitem label="English" v-on:click="userLang = 'English'">
            En
            </menuitem>
            <menuitem label="Tamil" v-on:click="userLang = 'Tamil'"> Ta </menuitem>
            <menuitem label="French" v-on:click="userLang = 'French'">
            Fr
            </menuitem>
        </menu>
    </div>

    <div id=" nav">
        <router-link to="/"> Home </router-link> |
        <router-link to="/login">
            <i class="fa fa-sign-in" aria-hidden="true"> </i> &nbsp; Login
        </router-link>
        |
        <router-link to="/register">
            <i class="fa fa-user-o" aria-hidden="true"> </i> &nbsp; Register
        </router-link>
        |
        <router-link to="/profile">
            <i class="fa fa-address-card-o" aria-hidden="true"> </i> &nbsp; Profile
        </router-link>
        |
        <router-link to="/notification">
            <i class="fa fa-bell-o" aria-hidden="true"> </i> &nbsp; Notification
        </router-link>
        |
        <router-link to="/settings">
            <i class="fa fa-cog" aria-hidden="true"> </i> &nbsp; Settings
        </router-link>
    </div>
    <router-view />
    <div id="footer">
        <p>
            Kenaf.network | Copyright &nbsp;
            <i class="fa fa-copyright" aria-hidden="true"> </i> 2020
        </p>
    </div>
</div>
</template>

<script>
import Home from "/src/views/Home.vue";

export default {
    name: "App",
    components: {
        Home,
    },
    data() {
        return {
            userLang: null,
        };
    },
};
</script>
