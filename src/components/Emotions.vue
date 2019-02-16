<template>
  <v-card class="elevation-0">
    <v-card-title>
      <h4>Appearance</h4>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-layout wrap justify-center>
        <v-flex mx-1 xs5>
          <div>Anger</div>
          <v-progress-linear height="18" v-model="emotions.anger" color="#42b983"></v-progress-linear>
        </v-flex>
        <v-flex mx-1 xs5>
          <div>Contempt</div>
          <v-progress-linear height="18" v-model="emotions.contempt" color="#42b983"></v-progress-linear>
        </v-flex>
        <v-flex mx-1 xs5>
          <div>Disgust</div>
          <v-progress-linear height="18" v-model="emotions.disgust" color="#42b983"></v-progress-linear>
        </v-flex>
        <v-flex mx-1 xs5>
          <div>Engagement</div>
          <v-progress-linear height="18" v-model="emotions.engagement" color="#42b983"></v-progress-linear>
        </v-flex>
        <v-flex mx-1 xs5>
          <div>Fear</div>
          <v-progress-linear height="18" v-model="emotions.fear" color="#42b983"></v-progress-linear>
        </v-flex>
        <v-flex mx-1 xs5>
          <div>Joy</div>
          <v-progress-linear height="18" v-model="emotions.joy" status="success" color="#42b983"></v-progress-linear>
        </v-flex>
        <v-flex mx-1 xs5>
          <div>Sadness</div>
          <v-progress-linear height="18" v-model="emotions.sadness" color="#42b983"></v-progress-linear>
        </v-flex>
        <v-flex mx-1 xs5>
          <div>Surprise</div>
          <v-progress-linear height="18" v-model="emotions.surprise" color="#42b983"></v-progress-linear>
        </v-flex>
        <v-flex mx-1 xs5>
          <div>Valence</div>
          <v-progress-linear height="18" v-model="emotions.valence" color="#42b983"></v-progress-linear>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    emotions() {
      return this.$store.getters.getEmotions
    },
  },
}
</script>

<style>
</style>
