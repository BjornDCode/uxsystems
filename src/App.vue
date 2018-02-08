<template>
    <main>
        <navigation></navigation>
        <intro :data="introData"></intro>
        <company :data="companyData"></company>
    </main>
</template>

<script>
    import Prismic from 'prismic-javascript';

    import Navigation from './components/Navigation';
    import Intro from './sections/Intro';
    import Company from './sections/Company';
    

    export default {
        components: {
            'navigation': Navigation,
            'intro': Intro,
            'company': Company
        },

        data() {
            return {
                introData: false,
                companyData: false
            };
        },

        mounted() {
            var apiEndpoint = "https://uxswebsite.cdn.prismic.io/api/v2";
 
            Prismic.getApi(apiEndpoint).then(function(api) {
                return api.query(""); // An empty query will return all the documents
            }).then((response) => {
                console.log("Documents: ", response.results);
                this.introData = response.results[1].data;
                this.companyData = response.results[0].data;
                // console.log(this.introData)
                console.log(this.companyData)
            }, function(err) {
                console.log("Something went wrong: ", err);
            });
        }
    }
</script>
