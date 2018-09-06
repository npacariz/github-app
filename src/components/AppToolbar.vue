<template>
      <v-ons-toolbar>
        <div class="left">
            <slot name="back"></slot>
        </div>
        <div class="center">{{ title }}</div>
        <div class="right">
            <slot name="forward"></slot>
        </div>
      </v-ons-toolbar>
</template>
<script>
  export default{
    props: {
        title: {
            type: String,
            default: "GitHub App"
        }
    },
    data() {
      return {
       
      };
    },
  };
</script>
