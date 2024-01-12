<!-- src/components/SiteMap.vue -->

<template>
    <div>
      <ul>
        <li v-for="route in routes" :key="route.name">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
      <router-link to="/SiteMaps">View Full Site Map</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        routes: this.$router.options.routes,
      };
    },
  };
  </script>
  