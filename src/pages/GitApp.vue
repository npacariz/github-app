<template>
    <v-ons-page>
      <app-toolbar :title="title">
      </app-toolbar>
      <div class="center">
         <app-search :query.sync="query"/>
         <div style="text-align:center; padding-top: 50px" v-if="spiner" >
            <v-ons-progress-circular indeterminate></v-ons-progress-circular>
         </div>
         <div v-if="listOfRepo.length > 0 && isSearched">
           <v-ons-button @click="takeToProfilePage">View Profile</v-ons-button>
            <v-ons-list-header>Repositories of {{query}}</v-ons-list-header>
            <v-ons-list-item v-for="repo in listOfRepo" :key="repo.id">
              <div class="left">
                <img class="list-item__thumbnail" :src="repo.owner.avatar_url">
              </div>
              <div class="center">
                <span class="list-item__title">{{ repo.name}} </span><span class="list-item__subtitle">{{repo.description}}</span>
              </div>
            </v-ons-list-item>
          </div>
          <div v-if="listOfRepo.length === 0 && isSearched">
            <empty-state :type="type" />
          </div>
          <div v-if="error" >
            <error-not-found />
          </div>
      </div>
         
    </v-ons-page>
</template>
<script>
import AppToolbar from '../components/AppToolbar.vue';
import AppSearach from '../components/AppSearach.vue';
import EmptyState from '../components/EmptyState.vue';
import ErrorNotFound from '../components/ErrorNotFound.vue';
import { github } from '../services/GitHub.js';
import  debounce from 'lodash/debounce';
import Profile from './Profile.vue'
  export default{
    components: {
      'app-toolbar': AppToolbar,
      'app-search': AppSearach,
      EmptyState,
      ErrorNotFound
    },
    data() {
      return {
        title: 'test',
        query: '',
        listOfRepo: [],
        type: 'repository',
        spiner: false, 
        error: false,
        isSearched: false
      };
    },
    methods: {
      takeToProfilePage() {

        this.$emit('push-page', {
          extends: Profile,
          onsNavigatorProps: {username: this.query }
          })
      }
    },
    watch: {
      query: debounce( function (newValue) {
        if(newValue !== '') {
          this.spiner = true
        github.getRepos(newValue)
        .then((response) => { 
          this.listOfRepo = response.data 
            this.isSearched = true
            this.error = false;
          })
          .catch((error) => {
             if ( error.response.status === 404 ) {
                this.error = true;
                this.isSearched = false
             }
          })
          .finally(() => {this.spiner = false})
        }else{
          this.isSearched = false;
          this.error = false;
        }
        
      }, 500)
    }
  };
</script>
