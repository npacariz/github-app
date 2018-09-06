<template>
    <v-ons-page>
      <app-toolbar :title="title">
          <v-ons-button slot="forward"  style="margin: 6px 0">Next</v-ons-button>
      </app-toolbar>
      <div class="center">
         <app-search :query.sync="query"/>
         <div v-if="listOfRepo.length > 0">
          <v-ons-list>
             <v-ons-list-header>Repositories of {{query}}</v-ons-list-header>
            <v-ons-list-item v-for="repo in listOfRepo" :key="repo.id">
            <img :src="repo.owner.avatar_url" height="42" width="42">
            <p align="right">{{ repo.name}}  {{repo.description}}</p>
              </v-ons-list-item>
          </v-ons-list>
        </div>
      </div>
         
    </v-ons-page>
</template>
<script>
import AppToolbar from './components/AppToolbar.vue';
import AppSearach from './components/AppSearach.vue';
import { github } from './services/GitHub.js';
import  debounce from 'lodash/debounce'
  export default{
    components: {
      'app-toolbar': AppToolbar,
      'app-search': AppSearach
    },
    data() {
      return {
        title: 'test',
        query: '',
        listOfRepo: []
      };
    },
    
    watch: {
      query: debounce( function (newValue) {
        github.getRepos(newValue).then((response) => { this.listOfRepo = response.data })
      }, 500)
    }
  };
</script>
