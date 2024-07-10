<script setup>
  const props = defineProps({ 
    "options": Array
  });
  
  console.log(typeof(props.options.map((i) => console.log(i))));

  

</script>

<template>
</template>

<style scoped>
</style>