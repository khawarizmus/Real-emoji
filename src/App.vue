<template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title>Real emoji</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout row wrap justify-center align-center>
          <v-flex sm12>
            <v-alert :value="booted" dismissible type="success">Booted successfully!</v-alert>
            <v-alert :value="failed" dismissible type="error">Failed to load correctly.</v-alert>
            <v-alert :value="webcamOk" dismissible type="info">This may take few minutes</v-alert>
            <v-alert :value="webcamOk" dismissible type="info">Webcam access allowed...</v-alert>
            <v-alert :value="webcamNotOk" dismissible type="error">Webcam access denied.</v-alert>
          </v-flex>
          <v-flex class="player-wrapper" sm12 md6>
            <webcam-player></webcam-player>
          </v-flex>
          <v-flex sm12 md6>
            <v-card class="elevation-16 mx-auto">
              <v-card-text>
                <appearance></appearance>
                <emotions></emotions>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex sm12>
            <expressions></expressions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <v-btn href="https://github.com/gimyboya/real-imoji" target="blank">
        <v-icon v-text="'mdi-github-circle'"></v-icon>
      </v-btn>
      <v-btn href="https://twitter.com/gimyboya" target="blank">
        <v-icon v-text="'mdi-twitter'"></v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import $ from 'jquery'
import { EventBus } from '@/plugins/event-bus.js'
import WebcamPlayer from '@/components/WebcamPlayer'
import Appearance from '@/components/Appearance'
import Emotions from '@/components/Emotions'
import Expressions from '@/components/Expressions'

export default {
  name: 'app',
  components: {
    Appearance,
    Emotions,
    Expressions,
    'webcam-player': WebcamPlayer,
  },
  data() {
    return {
      booted: false,
      failed: false,
      webcamOk: false,
      webcamNotOk: false,
    }
  },
  mounted() {
    const that = this
    const divRoot = $('#canvas')[0]
    // TODO: calculate the width according to the size of the device
    console.log('width:', this.computedWidth)
    console.log('inner width:', $('.player').innerWidth())
    const width = this.computedWidth
    console.log('height:', this.computedHeight)
    const height = this.computedHeight
    // const width = 640
    // const height = 480
    /*
      Face detector configuration - If not specified, defaults to F
      affdex.FaceDetectorMode.LARGE_FACES
      affdex.FaceDetectorMode.LARGE_FACES=Faces occupying large portions of the frame
      affdex.FaceDetectorMode.SMALL_FACES=Faces occupying small portions of the frame
    */
    const FACE_MODE = affdex.FaceDetectorMode.SMALL_FACE

    //Construct a FrameDetector and specify the image width / height and face detector mode.
    this.$store.commit(
      'detector',
      new affdex.CameraDetector(divRoot, width, height, FACE_MODE)
    )

    //Enable detection of all Expressions, Emotions and Emojis classifiers.
    this.detector.detectAllEmotions()
    this.detector.detectAllExpressions()
    this.detector.detectAllEmojis()
    this.detector.detectAllAppearance()

    //Add a callback to notify when the detector is initialized and ready for runing.
    this.detector.addEventListener('onInitializeSuccess', function() {
      EventBus.$emit('InitializeSuccess')
      that.booted = true
      //Display canvas instead of video feed because we want to draw the feature points on it
      $('#face_video_canvas').css('display', 'block')
      $('#face_video').css('display', 'none')
    })
    //Add a callback to notify when the detector has failed to load.
    this.detector.addEventListener('onInitializeFailure', function() {
      that.failed = true
    })

    this.detector.addEventListener('onWebcamConnectSuccess', function() {
      that.webcamOk = true
    })

    this.detector.addEventListener('onWebcamConnectFailure', function(e) {
      that.webcamNotOk = true
    })

    //Add a callback to receive the results from processing an image.
    //The faces object contains the list of the faces detected in an image.
    //Faces object contains probabilities for all the different expressions, emotions and appearance metrics
    this.detector.addEventListener('onImageResultsSuccess', function(
      faces,
      image,
      timestamp
    ) {
      if (faces.length > 0) {
        // draw the feature points
        that.drawFeaturePoints(
          that,
          image,
          faces[0].emojis.dominantEmoji,
          faces[0].featurePoints
        )
        // appearance
        that.$store.commit('appearance', faces[0].appearance)
        // emotions
        that.$store.commit('emotions', faces[0].emotions)
        // expressions
        that.$store.commit('expressions', faces[0].expressions)
      }
    })
  },
  computed: {
    detector() {
      return this.$store.getters.getDetector
    },
    computedWidth() {
      return $('.player').width() - 40
    },
    computedHeight() {
      return $('.player').width() / 1.33
    },
  },
  methods: {
    drawFeaturePoints(vm, img, emoji, featurePoints) {
      var contxt = $('#face_video_canvas')[0].getContext('2d')

      var hRatio = contxt.canvas.width / img.width
      var vRatio = contxt.canvas.height / img.height
      var ratio = Math.min(hRatio, vRatio)

      contxt.strokeStyle = '#42b983'
      for (var id in featurePoints) {
        if (id == 11) {
          contxt.font = '50px Arial'
          contxt.fillText(
            emoji,
            featurePoints[id].x + -30,
            featurePoints[id].y + -60
          )
        } else {
          contxt.beginPath()
          contxt.arc(
            featurePoints[id].x,
            featurePoints[id].y,
            3,
            0,
            2 * Math.PI
          )
          contxt.fillStyle = '#42b983'
          contxt.fill()
        }
      }
    },
  },
}
</script>

<style>
.player-wrapper {
  width: 100%;
}
footer {
  display: flex;
  justify-content: center;
}
</style>
