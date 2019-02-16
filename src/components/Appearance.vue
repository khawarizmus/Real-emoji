<template>
  <v-card class="elevation-0">
    <v-card-title>
      <h4>Appearance</h4>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-layout>
        <v-flex>
          <div>Gender:</div>
          <div class="appearance-text">{{appearance.gender}}</div>
        </v-flex>
        <v-flex>
          <div>Age:</div>
          <div class="appearance-text">{{appearance.age}}</div>
        </v-flex>
        <v-flex>
          <div>Ethnicity:</div>
          <div class="appearance-text">{{appearance.ethnicity}}</div>
        </v-flex>
        <v-flex>
          <div>Glasses:</div>
          <div class="appearance-text">{{appearance.glasses}}</div>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    appearance() {
      return this.$store.getters.getAppearance
    },
  },
}
</script>

<style>
.appearance-text {
  color: #42b983;
}
</style>
