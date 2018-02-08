<template>
    <section class="company">
        <div class="content">
            <div class="image-container">
                <img :src="image" alt="Martin Schultz">
                <span>{{ name }}</span>
                <span>{{ jobTitle }}</span>
            </div>
            <div class="text">
                <h2>{{ headline }}</h2>
                <p>{{ subheader }}</p>
                <a :href="linkedIn.url" class="button">{{ linkedIn.text }}</a>
            </div>
        </div>
        <div class="awards">
            <h3>Awards</h3>
            <ul class="logos">
                <li class="logo" v-for="logo in logos">
                    <img :src="logo.logo.url" :alt="logo.logo.alt">
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['data'],

        computed: {
            headline() {
                if (!this.data) return;
                return this.data.headline[0].text;
            },

            subheader() {
                if (!this.data) return;
                return this.data.subheader[0].text;
            },

            image() {
                if (!this.data) return;
                return this.data.image.url;
            },

            name() {
                if (!this.data) return;
                return this.data.name[0].text;
            },

            jobTitle() {
                if (!this.data) return;
                return this.data['job-title'][0].text;
            },

            logos() {
                if (!this.data) return;
                return this.data.logos;
            },

            linkedIn() {
                if (!this.data) return {};
                return {
                    url: this.data['linked-in'].url,
                    text: this.data['linked-in-text'][0].text
                }
            }
        }
    }
</script>
