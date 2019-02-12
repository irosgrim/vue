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
    title: "Top articles",
    err: "",
    posts: this.$store.state.topArticles
  }),
  created: function() {
    if (this.$store.state.topArticles.length === 0)
      this.$store.dispatch("getTopArticles");
  }
};
</script>

<style>
</style>
