<template>
  <div id="app">
    <div class="control">
      <el-button type="success" @click="start" :loading="loading">Start</el-button>
      <el-button type="danger" @click="stop">Stop</el-button>
      <el-button @click="reset">Reset</el-button>
      <el-color-picker v-model="color"></el-color-picker>
    </div>
    <div class="container">
      <div id="canvas" :loading="loading"></div>
      <el-collapse v-model="activeNames">
        <appearance :appearance="appearance"></appearance>
        <emotions :emotions="emotions"></emotions>
        <expressions :expressions="expressions"></expressions>
      </el-collapse>
    </div>
    <footer>
      <a href="https://github.com/gimyboya/real-imoji" target="blank">Github</a>
    </footer>
  </div>
</template>

<script>
import $ from 'jquery'
import Appearance from '@/components/Appearance'
import Emotions from '@/components/Emotions'
import Expressions from '@/components/Expressions'

//Draw the detected facial feature points on the image
function drawFeaturePoints(vm, img, emoji, featurePoints) {
  var contxt = $('#face_video_canvas')[0].getContext('2d')

  var hRatio = contxt.canvas.width / img.width
  var vRatio = contxt.canvas.height / img.height
  var ratio = Math.min(hRatio, vRatio)

  contxt.strokeStyle = vm.color
  for (var id in featurePoints) {
    if (id == 11) {
      contxt.font = '11em Arial'
      contxt.fillText(
        emoji,
        featurePoints[id].x - 300,
        featurePoints[id].y + 120
      )
    } else {
      contxt.beginPath()
      contxt.arc(featurePoints[id].x, featurePoints[id].y, 2, 0, 2 * Math.PI)
      contxt.stroke()
    }
  }
}

export default {
  name: 'app',
  components: {
    Appearance,
    Emotions,
    Expressions,
  },
  data() {
    return {
      loading: false,
      detector: null,
      activeNames: ['0'],
      color: '#409EFF',
      appearance: {
        gender: '',
        age: '',
        ethnicity: '',
        glasses: '',
      },
      emotions: {
        anger: 0,
        contempt: 0,
        disgust: 0,
        engagement: 0,
        fear: 0,
        joy: 0,
        sadness: 0,
        surprise: 0,
        valence: 0,
      },
      expressions: {
        attention: 0,
        browFurrow: 0,
        browRaise: 0,
        cheekRaise: 0,
        chinRaise: 0,
        dimpler: 0,
        eyeClosure: 0,
        eyeWiden: 0,
        innerBrowRaise: 0,
        jawDrop: 0,
        lidTighten: 0,
        lipCornerDepressor: 0,
        lipPress: 0,
        lipPucker: 0,
        lipStretch: 0,
        lipSuck: 0,
        mouthOpen: 0,
        noseWrinkle: 0,
        smile: 0,
        smirk: 0,
        upperLipRaise: 0,
      },
    }
  },
  mounted() {
    const that = this
    const divRoot = $('#canvas')[0]
    const width = 640
    const height = 480
    /*
      Face detector configuration - If not specified, defaults to F
      affdex.FaceDetectorMode.LARGE_FACES
      affdex.FaceDetectorMode.LARGE_FACES=Faces occupying large portions of the frame
      affdex.FaceDetectorMode.SMALL_FACES=Faces occupying small portions of the frame
    */
    const FACE_MODE = affdex.FaceDetectorMode.SMALL_FACE

    //Construct a FrameDetector and specify the image width / height and face detector mode.
    this.detector = new affdex.CameraDetector(divRoot, width, height, FACE_MODE)

    //Enable detection of all Expressions, Emotions and Emojis classifiers.
    this.detector.detectAllEmotions()
    this.detector.detectAllExpressions()
    this.detector.detectAllEmojis()
    this.detector.detectAllAppearance()

    //Add a callback to notify when the detector is initialized and ready for runing.
    this.detector.addEventListener('onInitializeSuccess', function() {
      that.$message({
        message: 'Detection is initialized!',
        type: 'success',
      })
      that.loading = false
      //Display canvas instead of video feed because we want to draw the feature points on it
      $('#face_video_canvas').css('display', 'block')
      $('#face_video').css('display', 'none')
    })
    //Add a callback to notify when the detector has failed to load.
    this.detector.addEventListener('onInitializeFailure', function() {
      that.$message({
        message: 'Failed to load correctly',
        type: 'error',
      })
    })

    this.detector.addEventListener('onWebcamConnectSuccess', function() {
      that.$notify({
        title: 'Success',
        message: 'Webcam access allowed',
        type: 'success',
      })
    })

    this.detector.addEventListener('onWebcamConnectFailure', function(e) {
      that.$notify({
        title: 'Failure',
        message: 'Webcam access denied',
        type: 'danger',
      })
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
        drawFeaturePoints(
          that,
          image,
          faces[0].emojis.dominantEmoji,
          faces[0].featurePoints
        )
        // appearance
        that.appearance = faces[0].appearance
        // emotions
        that.emotions = faces[0].emotions
        // expressions
        that.expressions = faces[0].expressions
      }
    })
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
        this.$message({
          message: 'Stopped Everything!',
          type: 'warning',
        })
      }
    },

    reset() {
      if (this.detector && this.detector.isRunning) {
        this.detector.reset()
        this.$message({
          message: 'Reset succesfully!',
          type: 'success',
        })
      }
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.container {
  display: flex;
  margin: 20px 0px;
}

.control {
  display: flex;
  justify-content: center;
}

.el-collapse {
  flex-grow: 1;
}

.el-collapse-item__content {
  text-align: left;
}

.el-collapse-item__content > div {
  margin-left: 20px;
}

footer {
  display: flex;
  justify-content: center;
}
</style>
