<template>
    <section class="company" id="company">
        <div class="content">
            <div class="image-container">
                <img :src="image" alt="Martin Schultz">
                <span>Martin Schultz</span>
                <span>Managing Partner, UX Systems</span>
                <span><a href="tel:45-26-15-61-23" class="link">+45 26 15 61 23</a></span>
                <span><a href="mailto:ms@ux.systems" class="link">ms@ux.systems</a></span>
            </div>
            <div class="text">
                <h2>{{ headline }}</h2>
                <p>{{ subheader }}</p>
                <a href="https://www.linkedin.com/in/martinschultz/" class="link-button link">
                    LinkedIn profile &amp; recommendations
                </a>
            </div>
        </div>
        <div class="awards">
            <h2>Industry recognition</h2>
            <ul class="logos">
                <li class="logo" v-for="logo in logos">
                    <a :href="logo.link.url">
                        <img :src="logo.logo.url" :alt="logo.logo.alt">
                    </a>
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

            logos() {
                if (!this.data) return;
                return this.data.logos;
            },

        }
    }
</script>
