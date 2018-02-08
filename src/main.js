import Vue from 'vue';

import App from './App.vue';

new Vue({
    el: '#app',
    render: h => h(App)
});

// var Prismic = require('prismic-javascript');
 
// var apiEndpoint = "https://uxswebsite.cdn.prismic.io/api/v2";
 
// Prismic.getApi(apiEndpoint).then(function(api) {
//   return api.query(""); // An empty query will return all the documents
// }).then(function(response) {
//   console.log("Documents: ", response.results);
// }, function(err) {
//   console.log("Something went wrong: ", err);
// });


