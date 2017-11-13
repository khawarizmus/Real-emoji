<template>
  <div id="app">
    <div class="container">
      <div id="canvas" style="width:680px;height:480px;"></div>
    </div>
    
    <div>
      <el-button type="success" @click="start">Start</el-button>
      <el-button type="danger" @click="stop">Stop</el-button>
      <el-button>Reset</el-button>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'app',
  data () {
    return {
      detector: null,
    }
  },
  mounted() {
    const divRoot = $("#canvas")[0];
    const width = 640;
    const height = 480;
    /*
      Face detector configuration - If not specified, defaults to F
      affdex.FaceDetectorMode.LARGE_FACES
      affdex.FaceDetectorMode.LARGE_FACES=Faces occupying large portions of the frame
      affdex.FaceDetectorMode.SMALL_FACES=Faces occupying small portions of the frame
    */
    const FACE_MODE = affdex.FaceDetectorMode.LARGE_FACES;

    //Construct a FrameDetector and specify the image width / height and face detector mode.
    this.detector = new affdex.FrameDetector(FACE_MODE);

    //Enable detection of all Expressions, Emotions and Emojis classifiers.
    this.detector.detectAllEmotions();
    this.detector.detectAllExpressions();
    this.detector.detectAllEmojis();
    this.detector.detectAllAppearance();

    const that = this;
    //Add a callback to notify when the detector is initialized and ready for runing.
    this.detector.addEventListener("onInitializeSuccess", function() {
      that.$message({
        message: 'Detection is initialized!',
        type: 'success'
      });
      //Display canvas instead of video feed because we want to draw the feature points on it
      $("#face_video_canvas").css("display", "block");
      $("#face_video").css("display", "none");
    });
  },
  methods: {
    start(){
      if (this.detector && !this.detector.isRunning) {
        this.detector.start();
      }
    },

    stop() {
      if (this.detector && this.detector.isRunning) {
        this.detector.removeEventListener();
        this.detector.stop();
        this.$message({
        message: 'Stopped Everything!',
        type: 'warning'
      });
      }
    }
  }
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

h1, h2 {
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
</style>
