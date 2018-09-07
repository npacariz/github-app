<template>
     <v-ons-page>
      <app-toolbar :title="title">
          <template slot="back">
              <v-ons-back-button>Back</v-ons-back-button>
          </template>
      </app-toolbar>
      <div class="center">
          <h4>Name: {{user.name}}</h4> 
          <h4>location: {{user.location}}</h4>
          <h4>followers: {{user.followers}}</h4> 
          <h4>following: {{user.following}}</h4> 
            <div>
              <h1>Notes</h1>
               <v-ons-input v-model="notes"></v-ons-input>
               <v-ons-button @click="saveNotes">Save</v-ons-button>
          </div>
      </div>
    </v-ons-page>
</template>
<script>
import AppToolbar from '../components/AppToolbar.vue';
import { github } from '../services/GitHub.js';

export default {
    components: {
        AppToolbar
    },

    props: { username: {
        type: String
    }
    },
    data() {
        return {
            title: 'Profile',
            user: {},
            notes: ''
        };
    },
    methods: {
        saveNotes() {
            let oldItems = []
            oldItems.push(JSON.stringify(localStorage.getItem('notes')));
            let newItem = `${this.username}: ${this.notes}`;
            oldItems.push(newItem)
            localStorage.setItem('notes', oldItems)
        }
    },
    created() {
        github.getProfile(this.username).then(response => {
            this.user = response.data
        })
    },
};
</script>
