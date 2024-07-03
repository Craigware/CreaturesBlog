<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<div id="LandingBanner">
  <img src="https://placehold.co/1920x480">
</div>
<section id="Blogs">
  <div id="LatestBlog">
    <h1>Creature's Update 07-03-2024; World Generation, Attacks, Creatures.</h1>
    <hr>
    <img src="https://placehold.co/600x400" />
    <p>
      Hello, welcome to my first blog post about Creature's! There is going to be a lot
      of content in this post around the general concept of the game as well as initial development.
      
      <RouterLink>Continue Reading.</RouterLink>
    </p>
  </div>
  <div id="BlogList">
    <div class="old-post">
      <h1>Initial Post</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci temporibus dignissimos sint, vitae nihil ratione nemo impedit quod facilis voluptates. Inventore eaque asperiores commodi alias nobis incidunt, laudantium quis? Vel?</p>
    </div>
    <div class="old-post">
      <h1>Initial Post</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci temporibus dignissimos sint, vitae nihil ratione nemo impedit quod facilis voluptates. Inventore eaque asperiores commodi alias nobis incidunt, laudantium quis? Vel?</p>
    </div>
     <div class="old-post">
      <h1>Initial Post</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci temporibus dignissimos sint, vitae nihil ratione nemo impedit quod facilis voluptates. Inventore eaque asperiores commodi alias nobis incidunt, laudantium quis? Vel?</p>
    </div>    <div class="old-post">
      <h1>Initial Post</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci temporibus dignissimos sint, vitae nihil ratione nemo impedit quod facilis voluptates. Inventore eaque asperiores commodi alias nobis incidunt, laudantium quis? Vel?</p>
    </div>    <div class="old-post">
      <h1>Initial Post</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci temporibus dignissimos sint, vitae nihil ratione nemo impedit quod facilis voluptates. Inventore eaque asperiores commodi alias nobis incidunt, laudantium quis? Vel?</p>
    </div>
  </div>
</section>
<section id="GameDescription">

</section>
</template>

<style>
#LandingBanner {
  max-width: 100%;
  max-height: 40vh;
  overflow: hidden;
  background-color: blue;
  img {
    max-width: 100%;
    object-fit: contain;
  }
}

#Blogs {
  display: grid;
  grid-template-columns: 2fr 1.2fr;
  margin: 2rem 2rem 0 2rem;
} 

#LatestBlog {
  padding: 1rem;
  color: white;
  max-height: 55vh;

  img {
    margin: 8px 0;
  }
}

#BlogList {
  padding: 0.5rem;
  max-height: 55vh;
  overflow-y: scroll;
}

.old-post {
  margin: 0 0 16px 0;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 2px 10px black;
  background-color: blue;
}

#GameDescription {
  height: 100vh;
  background-color: rgb(50, 50, 50);
}
</style>