<template>
  <div>
    <div>Attention
      <v-progress-linear height="18" v-model="expressions.attention"></v-progress-linear>
    </div>
    <div>Brow Furrow
      <v-progress-linear height="18" v-model="expressions.browFurrow"></v-progress-linear>
    </div>
    <div>Brow Raise
      <v-progress-linear height="18" v-model="expressions.browRaise"></v-progress-linear>
    </div>
    <div>Cheek Raise
      <v-progress-linear height="18" v-model="expressions.cheekRaise"></v-progress-linear>
    </div>
    <div>ChinRaise
      <v-progress-linear height="18" v-model="expressions.chinRaise"></v-progress-linear>
    </div>
    <div>Dimpler
      <v-progress-linear height="18" v-model="expressions.dimpler"></v-progress-linear>
    </div>
    <div>Eye Closure
      <v-progress-linear height="18" v-model="expressions.eyeClosure"></v-progress-linear>
    </div>
    <div>Eye Widen
      <v-progress-linear height="18" v-model="expressions.eyeWiden"></v-progress-linear>
    </div>
    <div>Inner BrowRaise
      <v-progress-linear height="18" v-model="expressions.innerBrowRaise"></v-progress-linear>
    </div>
    <div>Jaw Drop
      <v-progress-linear height="18" v-model="expressions.jawDrop"></v-progress-linear>
    </div>
    <div>Lid Tighten
      <v-progress-linear height="18" v-model="expressions.lidTighten"></v-progress-linear>
    </div>
    <div>Lip Corner Depressor
      <v-progress-linear height="18" v-model="expressions.lipCornerDepressor"></v-progress-linear>
    </div>
    <div>Lip Press
      <v-progress-linear height="18" v-model="expressions.lipPress"></v-progress-linear>
    </div>
    <div>Lip Pucker
      <v-progress-linear height="18" v-model="expressions.lipPucker"></v-progress-linear>
    </div>
    <div>Lip Stretch
      <v-progress-linear height="18" v-model="expressions.lipStretch"></v-progress-linear>
    </div>
    <div>Lip Suck
      <v-progress-linear height="18" v-model="expressions.lipSuck"></v-progress-linear>
    </div>
    <div>Mouth Open
      <v-progress-linear height="18" v-model="expressions.mouthOpen"></v-progress-linear>
    </div>
    <div>Nose Wrinkle
      <v-progress-linear height="18" v-model="expressions.noseWrinkle"></v-progress-linear>
    </div>
    <div>Smile
      <v-progress-linear height="18" v-model="expressions.smile"></v-progress-linear>
    </div>
    <div>Smirk
      <v-progress-linear height="18" v-model="expressions.smirk"></v-progress-linear>
    </div>
    <div>Upper Lip Raise
      <v-progress-linear height="18" v-model="expressions.upperLipRaise"></v-progress-linear>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    expressions() {
      return this.$store.getters.getExpressions
    },
  },
}
</script>

<style>
</style>
