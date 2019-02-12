<template>
  <div class="home">
    <h1>Top posts on hackernews</h1>
    <div v-for="entry in posts" v-bind:key="entry.id">
      <div>
        <h3>{{ entry.title }} {{entry.score}}</h3>
        <a v-bind:href="entry.url">{{entry.url}}</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Topposts.vue";

export default {
  name: "home",
  data: function() {
    return {
      err: "",
      posts: []
    };
  },
  components: {
    HelloWorld
  },
  created: async function() {
    let url = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    let post = await url.json();
    this.posts = post.slice(0, 50);
    this.posts.forEach(element => {
      fetch("https://hacker-news.firebaseio.com/v0/item/" + element + ".json")
        .then(response => {
          return response.json();
        })
        .then(entries => {
          this.posts.push(entries);
        })
        .catch(err => {
          console.log(err);
        });
    });
    console.log(this.$store.state.posts);
  }
};
</script>

<style>
h1 {
  text-align: center;
  margin-bottom: 15px;
}
a {
  text-decoration: none;
  color: #d17000;
  transition: 0.5s;
}
a:hover {
  padding-left: 20px;
}
</style>

