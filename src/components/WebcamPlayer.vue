<template>
  <v-card class="player elevation-16 mx-auto" max-width="680">
    <v-card-text>
      <div v-show="!loading" id="canvas"></div>
      <v-layout max-width="680" v-show="loading" justify-center align-center>
        <v-progress-circular :size="70" :width="7" color="white" indeterminate></v-progress-circular>
      </v-layout>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="justify-center">
      <v-btn @click="reset" fab small color="cyan">
        <v-icon v-text="'mdi-replay'"></v-icon>
      </v-btn>
      <v-btn @click="start" fab large color="blue">
        <v-icon v-text="'mdi-play'"></v-icon>
      </v-btn>
      <v-btn @click="stop" fab small color="red">
        <v-icon v-text="'mdi-stop'"></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { EventBus } from '@/plugins/event-bus.js'

export default {
  data() {
    return {
      loading: false,
    }
  },
  mounted() {
    const that = this
    EventBus.$on('InitializeSuccess', () => (that.loading = false))
  },
  computed: {
    detector() {
      return this.$store.getters.getDetector
    },
  },
  methods: {
    start() {
      if (this.detector && !this.detector.isRunning) {
        this.detector.start()
        this.loading = true
      }
    },

    stop() {
      if (this.detector && this.detector.isRunning) {
        this.detector.removeEventListener()
        this.detector.stop()
        this.loading = false
      }
    },

    reset() {
      if (this.detector && this.detector.isRunning) {
        this.detector.reset()
      }
    },
  },
}
</script>

<style>
#canvas {
  display: flex;
  justify-content: center;
}
</style>

