export default {
	addTopStory: function(state, article) {
		state.topStories.push(article);
	},
	addNewStory: function(state, article) {
		state.newStories.push(article);
	}
};
