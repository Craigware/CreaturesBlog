<script setup>
import { RouterView, RouterLink } from 'vue-router';
import DropDown from './components/DropDown.vue';

const arr = [1,2,3];
</script>

<template>
  <div>
  <nav>
    <h1><RouterLink to="/">Creature's Keep</RouterLink></h1>
    <hr>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/Design-Document">Design Document</RouterLink>
    <RouterLink to="/About-Me">About Me</RouterLink>
    <RouterLink to="/Blog-Posts">Blog Posts</RouterLink>
    <RouterLink to="/Concept-Art">Concept Art</RouterLink>
    <RouterLink to="/Documentation">Documentation</RouterLink>
    <DropDown :options=[1,2,3]></DropDown>
  </nav>

  <main>
    <RouterView></RouterView>
  </main>
  </div>
</template>

<style scoped>
  div {
    display: grid;
    grid-template-columns: 1.25fr 8.75fr;
  }

  nav {
    display: inline-block;
    height: calc(100% - 16px);
    padding: 8px;
    vertical-align: top;
    background-color: rgb(50, 50, 70);

    a {
      color: white;
      text-decoration: none;
      display: block;
    }

    a:nth-child(even) {
      background-color: rgb(40,40,50);
    }
  }

  main {
    display: inline-block;
    vertical-align: top;
  }
</style>