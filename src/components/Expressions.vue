<template>
  <v-expansion-panel class="elevation-16">
    <v-expansion-panel-content>
      <div slot="header">Advanced Expressions</div>
      <v-card>
        <v-card-text>
          <v-layout wrap justify-center>
            <v-flex mx-1 xs5>
              <div>Attention</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.attention"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Brow Furrow</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.browFurrow"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Brow Raise</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.browRaise"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Cheek Raise</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.cheekRaise"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>ChinRaise</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.chinRaise"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Dimpler</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.dimpler"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Eye Closure</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.eyeClosure"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Eye Widen</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.eyeWiden"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Inner BrowRaise</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.innerBrowRaise"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Jaw Drop</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.jawDrop"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Lid Tighten</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.lidTighten"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Lip Corner Depressor</div>
              <v-progress-linear
                height="18"
                color="#42b983"
                v-model="expressions.lipCornerDepressor"
              ></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Lip Press</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.lipPress"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Lip Pucker</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.lipPucker"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Lip Stretch</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.lipStretch"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Lip Suck</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.lipSuck"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Mouth Open</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.mouthOpen"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Nose Wrinkle</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.noseWrinkle"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Smile</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.smile"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Smirk</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.smirk"></v-progress-linear>
            </v-flex>
            <v-flex mx-1 xs5>
              <div>Upper Lip Raise</div>
              <v-progress-linear height="18" color="#42b983" v-model="expressions.upperLipRaise"></v-progress-linear>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
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
