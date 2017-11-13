<template>
  <div id="app">
    <div class="container">
      <div id="canvas" v-loading="loading"></div>
    </div>
    
    <div>
      <el-button type="success" @click="start" :loading="loading">Start</el-button>
      <el-button type="danger" @click="stop">Stop</el-button>
      <el-button @click="reset">Reset</el-button>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

//Draw the detected facial feature points on the image
function drawFeaturePoints(img, featurePoints) {
  var contxt = $('#face_video_canvas')[0].getContext('2d');

  var hRatio = contxt.canvas.width / img.width;
  var vRatio = contxt.canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);

  contxt.strokeStyle = "#FFFFFF";
  for (var id in featurePoints) {
    contxt.beginPath();
    contxt.arc(featurePoints[id].x,
      featurePoints[id].y, 2, 0, 2 * Math.PI);
    contxt.stroke();

  }
}

export default {
  name: 'app',
  data () {
    return {
      detector: null,
      loading: false,
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
    this.detector = new affdex.CameraDetector(divRoot, width, height, FACE_MODE);

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
      that.loading = false;
      //Display canvas instead of video feed because we want to draw the feature points on it
      $("#face_video_canvas").css("display", "block");
      $("#face_video").css("display", "none");
    });

    this.detector.addEventListener("onWebcamConnectSuccess", function() {
      that.$notify({
        title: 'Success',
        message: 'Webcam access allowed',
        type: 'success'
      });
    });

    this.detector.addEventListener("onWebcamConnectFailure", function() {
        that.$notify({
          title: 'Failure',
          message: 'Webcam access denied',
          type: 'danger'
        });
      });

    //Add a callback to receive the results from processing an image.
    //The faces object contains the list of the faces detected in an image.
    //Faces object contains probabilities for all the different expressions, emotions and appearance metrics
    this.detector.addEventListener("onImageResultsSuccess", function(faces, image, timestamp) {
      // $('#results').html("");
      // log('#results', "Timestamp: " + timestamp.toFixed(2));
      // log('#results', "Number of faces found: " + faces.length);
      // if (faces.length > 0) {
      //   log('#results', "Appearance: " + JSON.stringify(faces[0].appearance));
      //   log('#results', "Emotions: " + JSON.stringify(faces[0].emotions, function(key, val) {
      //     return val.toFixed ? Number(val.toFixed(0)) : val;
      //   }));
      //   log('#results', "Expressions: " + JSON.stringify(faces[0].expressions, function(key, val) {
      //     return val.toFixed ? Number(val.toFixed(0)) : val;
      //   }));
      //   log('#results', "Emoji: " + faces[0].emojis.dominantEmoji);
      //   drawFeaturePoints(image, faces[0].featurePoints);
      // }
    });

  },
  methods: {
    start(){
      if (this.detector && !this.detector.isRunning) {
        this.detector.start();
        this.loading = true;
      }
    },

    stop() {
      if (this.detector && this.detector.isRunning) {
        this.detector.removeEventListener();
        this.detector.stop();
        this.loading = false;
        this.$message({
          message: 'Stopped Everything!',
          type: 'warning'
        });
      }
    },

    reset(){
      if (this.detector && this.detector.isRunning) {
        this.detector.reset();
        this.$message({
          message: 'Reset succesfully!',
          type: 'success'
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
