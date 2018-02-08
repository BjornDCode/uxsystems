<template>
    <section>
        <h1>{{ headline }}</h1>
    </section>
</template>

<script>
    export default {
        props: ['data'],

        computed: {
            headline() {
                if (!this.data) return;
                return this.data.headline[0].text;
            }
        }
    }
</script>
