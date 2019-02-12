import axios from 'axios';

export default {
	getTopArticles: ({ commit }) => {
		fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
			.then(response => {
				let results = response.data.slice(0, 25);
				results.forEach(element => {
					fetch(
						'https://hacker-news.firebaseio.com/v0/item/' + element + '.json'
					)
						.then(result => {
							commit('addTopStory', result);
						})
						.catch(err => {
							console.log(err);
						});
				});
			})
			.catch(err => {
				console.log(err);
			});
	},
	getNewArticles: ({ commit }) => {
		fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
			.then(response => {
				let results = response.data.slice(0, 25);
				results.forEach(element => {
					fetch(
						'https://hacker-news.firebaseio.com/v0/item/' + element + '.json'
					)
						.then(result => {
							commit('addNewStory', result);
						})
						.catch(err => {
							console.log(err);
						});
				});
			})
			.catch(err => {
				console.log(err);
			});
	}
};
