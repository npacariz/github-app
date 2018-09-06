<template>
    <v-ons-page>
      <v-ons-toolbar>
        <div class="right">
          <v-ons-toolbar-button>
              <slot name="back"></slot>
          </v-ons-toolbar-button>
        </div>
        <div class="center">{{ title }}</div>
        <div class="right">
          <v-ons-toolbar-button>
                <slot name="forward"></slot>
          </v-ons-toolbar-button>
        </div>
      </v-ons-toolbar>
    </v-ons-page>
</template>
<script>
  export default{
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
      return {
        title: 'AppToolbar'
      };
    },
  };
</script>
