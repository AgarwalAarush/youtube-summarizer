<template>

    <nav class="nav-bar">
        <router-link to="/"><img class="nav-bar" src="../assets/logo.png" width="50" height="50"></router-link>
        <router-link to="/create" style="text-decoration:none"><p class="nav-bar">Create</p></router-link>
        <router-link to="/Settings" style="text-decoration:none"><p class="nav-bar">Settings</p></router-link>
    </nav>

</template>

<style>

p {
    color: #000000
}

img {
    vertical-align: middle;
}

.nav-bar {
    display: flex;
    flex-direction: row;
    padding-right: 5px;
    padding-left: 5px;
    align-items: center;
    justify-content: center;
}

</style>