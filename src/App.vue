<template>
    <div class="container">

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/create">Create Post</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/posts">Posts</router-link>
                </li>
            </ul>
        </nav>
        <br/>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>

</template>

<script>

    export default {
        name: 'app',
        components: {}
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
