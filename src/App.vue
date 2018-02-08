<template>
    <main>
        <intro :data="introData"></intro>
    </main>
</template>

<script>
    import Prismic from 'prismic-javascript';

    import Intro from './sections/Intro';

    export default {
        components: {
            'intro': Intro
        },

        data() {
            return {
                introData: false
            };
        },

        mounted() {
            var apiEndpoint = "https://uxswebsite.cdn.prismic.io/api/v2";
 
            Prismic.getApi(apiEndpoint).then(function(api) {
                return api.query(""); // An empty query will return all the documents
            }).then((response) => {
                // console.log("Documents: ", response.results);
                this.introData = response.results[0].data;
                console.log(this.introData)
            }, function(err) {
                console.log("Something went wrong: ", err);
            });
        }
    }
</script>
