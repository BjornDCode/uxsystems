<template>
    <section class="intro">
        <div class="text">
            <h1>{{ headline }}</h1>
            <p v-if="subheader">{{ subheader }}</p>
        </div>
        <div class="companies">
            <h3>Clients &amp; Projects</h3>
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
            logos() {
                if (!this.data) return;
                return this.data.logos;
            }
        }
    }
</script>
