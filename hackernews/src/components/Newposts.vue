<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <h1>{{ title}}</h1>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "New posts",
    err: "",
    posts: this.$store.state.newArticles
  }),
  created: function() {
    if (this.$store.state.newArticles.length === 0)
      this.$store.dispatch("getNewArticles");
  }
};
</script>

<style>
</style>
