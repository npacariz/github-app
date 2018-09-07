<template>
    <v-ons-navigator 
      :page-stack="pageStack"
      @push-page="nextPage"
    >
    </v-ons-navigator>
</template>
<script>
import GitApp from "./pages/GitApp";
export default {
  data() {
    return {
      pageStack: [GitApp]
    };
  },
  methods: {
    nextPage(nextPage) {
      this.pageStack.push(nextPage);
    }
  }
};
</script>
