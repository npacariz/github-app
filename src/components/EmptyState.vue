<template>
    <v-ons-card>
        <img src="https://pbs.twimg.com/media/Bt5MoW0CIAE9Fda.jpg" width="300" height="200">
        <h4>There are no {{title}} here</h4>
    </v-ons-card>
</template>
<script>
import pluralize from 'pluralize'
  export default{
    props: {
        type: {
            type: String,
            default: "GitHub App"
        }
    },
    computed: {
        title() {
            return pluralize(this.type)
        }
    }
  };
</script>
