<template>
     <v-ons-page>
      <app-toolbar :title="title">
          <template slot="back">
              <v-ons-back-button>Back</v-ons-back-button>
          </template>
      </app-toolbar>
      <div class="center">
     
          
      </div>
    </v-ons-page>
</template>
<script>
import AppToolbar from '../components/AppToolbar.vue';

export default {
    components: {
        AppToolbar
    },
    data() {
        return {
        title: 'Profile'
        };
    },
    methods: {
    
    }
};
</script>
