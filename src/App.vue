<template>
  <div id="app">
    <div class="control">
      <el-button type="success" @click="start" :loading="loading">Start</el-button>
      <el-button type="danger" @click="stop">Stop</el-button>
      <el-button @click="reset">Reset</el-button>
      <el-color-picker v-model="color"></el-color-picker>
    </div>
    <div class="container">
      <div id="canvas" v-loading="loading"></div>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="appearance" name="1">
          <div>Gender: {{gender}}</div>
          <div>Age: {{age}}</div>
          <div>Ethnicity: {{ethnicity}}</div>
          <div>Glasses: {{glasses}}</div>
        </el-collapse-item>
        <el-collapse-item title="emotions" name="2">
          <div>Anger
            <el-progress
              :text-inside="true"
              :stroke-width="18"
              :percentage="anger"
              status="exception"
            ></el-progress>
          </div>
          <div>Contempt
            <el-progress :text-inside="true" :stroke-width="18" :percentage="contempt"></el-progress>
          </div>
          <div>Disgust
            <el-progress :text-inside="true" :stroke-width="18" :percentage="disgust"></el-progress>
          </div>
          <div>Engagement
            <el-progress :text-inside="true" :stroke-width="18" :percentage="engagement"></el-progress>
          </div>
          <div>Fear
            <el-progress :text-inside="true" :stroke-width="18" :percentage="fear"></el-progress>
          </div>
          <div>Joy
            <el-progress :text-inside="true" :stroke-width="18" :percentage="joy" status="success"></el-progress>
          </div>
          <div>Sadness
            <el-progress :text-inside="true" :stroke-width="18" :percentage="sadness"></el-progress>
          </div>
          <div>Surprise
            <el-progress :text-inside="true" :stroke-width="18" :percentage="surprise"></el-progress>
          </div>
          <div>Valence
            <el-progress :text-inside="true" :stroke-width="18" :percentage="valence"></el-progress>
          </div>
        </el-collapse-item>
        <el-collapse-item title="expressions" name="3">
          <div>Attention
            <el-progress :text-inside="true" :stroke-width="18" :percentage="attention"></el-progress>
          </div>
          <div>Brow Furrow
            <el-progress :text-inside="true" :stroke-width="18" :percentage="browFurrow"></el-progress>
          </div>
          <div>Brow Raise
            <el-progress :text-inside="true" :stroke-width="18" :percentage="browRaise"></el-progress>
          </div>
          <div>Cheek Raise
            <el-progress :text-inside="true" :stroke-width="18" :percentage="cheekRaise"></el-progress>
          </div>
          <div>ChinRaise
            <el-progress :text-inside="true" :stroke-width="18" :percentage="chinRaise"></el-progress>
          </div>
          <div>Dimpler
            <el-progress :text-inside="true" :stroke-width="18" :percentage="dimpler"></el-progress>
          </div>
          <div>Eye Closure
            <el-progress :text-inside="true" :stroke-width="18" :percentage="eyeClosure"></el-progress>
          </div>
          <div>Eye Widen
            <el-progress :text-inside="true" :stroke-width="18" :percentage="eyeWiden"></el-progress>
          </div>
          <div>Inner BrowRaise
            <el-progress :text-inside="true" :stroke-width="18" :percentage="innerBrowRaise"></el-progress>
          </div>
          <div>Jaw Drop
            <el-progress :text-inside="true" :stroke-width="18" :percentage="jawDrop"></el-progress>
          </div>
          <div>Lid Tighten
            <el-progress :text-inside="true" :stroke-width="18" :percentage="lidTighten"></el-progress>
          </div>
          <div>Lip Corner Depressor
            <el-progress :text-inside="true" :stroke-width="18" :percentage="lipCornerDepressor"></el-progress>
          </div>
          <div>Lip Press
            <el-progress :text-inside="true" :stroke-width="18" :percentage="lipPress"></el-progress>
          </div>
          <div>Lip Pucker
            <el-progress :text-inside="true" :stroke-width="18" :percentage="lipPucker"></el-progress>
          </div>
          <div>Lip Stretch
            <el-progress :text-inside="true" :stroke-width="18" :percentage="lipStretch"></el-progress>
          </div>
          <div>Lip Suck
            <el-progress :text-inside="true" :stroke-width="18" :percentage="lipSuck"></el-progress>
          </div>
          <div>Mouth Open
            <el-progress :text-inside="true" :stroke-width="18" :percentage="mouthOpen"></el-progress>
          </div>
          <div>Nose Wrinkle
            <el-progress :text-inside="true" :stroke-width="18" :percentage="noseWrinkle"></el-progress>
          </div>
          <div>Smile
            <el-progress :text-inside="true" :stroke-width="18" :percentage="smile"></el-progress>
          </div>
          <div>Smirk
            <el-progress :text-inside="true" :stroke-width="18" :percentage="smirk"></el-progress>
          </div>
          <div>Upper Lip Raise
            <el-progress :text-inside="true" :stroke-width="18" :percentage="upperLipRaise"></el-progress>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <footer>
      <a href="https://github.com/gimyboya/real-imoji" target="blank">Github</a>
    </footer>
  </div>
</template>

<script>
import $ from 'jquery'

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
  data() {
    return {
      detector: null,
      loading: false,
      activeNames: ['0'],
      color: '#409EFF',
      gender: '',
      age: '',
      ethnicity: '',
      glasses: '',
      anger: 0,
      contempt: 0,
      disgust: 0,
      engagement: 0,
      fear: 0,
      joy: 0,
      sadness: 0,
      surprise: 0,
      valence: 0,
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

    this.detector.addEventListener('onWebcamConnectSuccess', function() {
      that.$notify({
        title: 'Success',
        message: 'Webcam access allowed',
        type: 'success',
      })
    })

    this.detector.addEventListener('onWebcamConnectFailure', function() {
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
        console.log(faces)
        // draw the feature points
        drawFeaturePoints(
          that,
          image,
          faces[0].emojis.dominantEmoji,
          faces[0].featurePoints
        )
        // appearance
        that.gender = faces[0].appearance.gender
        that.age = faces[0].appearance.age
        that.ethnicity = faces[0].appearance.ethnicity
        that.glasses = faces[0].appearance.glasses
        // emotions
        that.anger = faces[0].emotions.anger
        that.contempt = faces[0].emotions.contempt
        that.disgust = faces[0].emotions.disgust
        that.engagement = faces[0].emotions.engagement
        that.fear = faces[0].emotions.fear
        that.joy = faces[0].emotions.joy
        that.sadness = faces[0].emotions.sadness
        that.surprise = faces[0].emotions.surprise
        that.valence = faces[0].emotions.valence
        // expressions
        that.attention = faces[0].expressions.attention
        that.browFurrow = faces[0].expressions.browFurrow
        that.browRaise = faces[0].expressions.browRaise
        that.cheekRaise = faces[0].expressions.cheekRaise
        that.chinRaise = faces[0].expressions.chinRaise
        that.dimpler = faces[0].expressions.dimpler
        that.eyeClosure = faces[0].expressions.eyeClosure
        that.eyeWiden = faces[0].expressions.eyeWiden
        that.innerBrowRaise = faces[0].expressions.innerBrowRaise
        that.jawDrop = faces[0].expressions.jawDrop
        that.lidTighten = faces[0].expressions.lidTighten
        that.lipCornerDepressor = faces[0].expressions.lipCornerDepressor
        that.lipPress = faces[0].expressions.lipPress
        that.lipPucker = faces[0].expressions.lipPucker
        that.lipStretch = faces[0].expressions.lipStretch
        that.lipSuck = faces[0].expressions.lipSuck
        that.mouthOpen = faces[0].expressions.mouthOpen
        that.noseWrinkle = faces[0].expressions.noseWrinkle
        that.smile = faces[0].expressions.smile
        that.smirk = faces[0].expressions.smirk
        that.upperLipRaise = faces[0].expressions.upperLipRaise
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
