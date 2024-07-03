<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div>
  <!-- <nav>
    <h1>Creature's Keep</h1>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/Design-Document">Design Document</RouterLink>
    <RouterLink to="/About-Me">About Me</RouterLink>
    <RouterLink to="/Blog-Posts">Blog Posts</RouterLink>
    <RouterLink to="/Concept-Art">Concept Art</RouterLink>
  </nav> -->
  <main>
    <RouterView></RouterView>
  </main>
  </div>
</template>

<style scoped>
  div {
    display: grid;
    /* grid-template-columns: 1.25fr 8.75fr; */
  }

  nav {
    display: inline-block;
    height: calc(100% - 16px);
    padding: 8px;
    text-align: center;
    vertical-align: top;
    background-color: green;

    a {
      text-align: left;
      color: white;
      text-decoration: none;
      display: block;
    }
  }

  main {
    display: inline-block;
    vertical-align: top;
  }
</style>