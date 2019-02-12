<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Hacker News</span>
        <span class="font-weight-light">VueJs clone</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/">Top posts</v-btn>
        <v-btn flat to="/newposts">New posts</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>
