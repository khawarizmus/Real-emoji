import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detector: null,
    appearance: {
      gender: '',
      age: '',
      ethnicity: '',
      glasses: ''
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
      valence: 0
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
      upperLipRaise: 0
    }
  },
  getters: {
    getDetector: (state) => {
      return state.detector
    },
    getAppearance: (state) => {
      return state.appearance
    },
    getEmotions: (state) => {
      return state.emotions
    },
    getExpressions: (state) => {
      return state.expressions
    }
  },
  mutations: {
    detector (state, detector) {
      state.detector = detector
    },
    appearance (state, appearance) {
      state.appearance = appearance
    },
    emotions (state, emotions) {
      state.emotions = emotions
    },
    expressions (state, expressions) {
      state.expressions = expressions
    },
    gender (state, gender) {
      state.appearance.gender = gender
    },
    age (state, age) {
      state.appearance.age = age
    },
    ethnicity (state, ethnicity) {
      state.appearance.ethnicity = ethnicity
    },
    glasses (state, glasses) {
      state.appearance.glasses = glasses
    },
    anger (state, anger) {
      state.emotions.anger = anger
    },
    contempt (state, contempt) {
      state.emotions.contempt = contempt
    },
    disgust (state, disgust) {
      state.emotions.disgust = disgust
    },
    engagement (state, engagement) {
      state.emotions.engagement = engagement
    },
    fear (state, fear) {
      state.emotions.fear = fear
    },
    joy (state, joy) {
      state.emotions.joy = joy
    },
    sadness (state, sadness) {
      state.emotions.sadness = sadness
    },
    surprise (state, surprise) {
      state.emotions.surprise = surprise
    },
    valence (state, valence) {
      state.emotions.glasses = valence
    },
    attention (state, attention) {
      state.expressions.attention = attention
    },
    browFurrow (state, browFurrow) {
      state.expressions.browFurrow = browFurrow
    },
    browRaise (state, browRaise) {
      state.expressions.browRaise = browRaise
    },
    cheekRaise (state, cheekRaise) {
      state.expressions.cheekRaise = cheekRaise
    },
    chinRaise (state, chinRaise) {
      state.expressions.chinRaise = chinRaise
    },
    dimpler (state, dimpler) {
      state.expressions.dimpler = dimpler
    },
    eyeClosure (state, eyeClosure) {
      state.expressions.eyeClosure = eyeClosure
    },
    eyeWiden (state, eyeWiden) {
      state.expressions.eyeWiden = eyeWiden
    },
    innerBrowRaise (state, innerBrowRaise) {
      state.expressions.innerBrowRaise = innerBrowRaise
    },
    jawDrop (state, jawDrop) {
      state.expressions.jawDrop = jawDrop
    },
    lidTighten (state, lidTighten) {
      state.expressions.lidTighten = lidTighten
    },
    lipCornerDepressor (state, lipCornerDepressor) {
      state.expressions.lipCornerDepressor = lipCornerDepressor
    },
    lipPress (state, lipPress) {
      state.expressions.lipPress = lipPress
    },
    lipPucker (state, lipPucker) {
      state.expressions.lipPucker = lipPucker
    },
    lipStretch (state, lipStretch) {
      state.expressions.lipStretch = lipStretch
    },
    lipSuck (state, lipSuck) {
      state.expressions.lipSuck = lipSuck
    },
    mouthOpen (state, mouthOpen) {
      state.expressions.mouthOpen = mouthOpen
    },
    noseWrinkle (state, noseWrinkle) {
      state.expressions.noseWrinkle = noseWrinkle
    },
    smile (state, smile) {
      state.expressions.smile = smile
    },
    smirk (state, smirk) {
      state.expressions.smirk = smirk
    },
    upperLipRaise (state, upperLipRaise) {
      state.expressions.upperLipRaise = upperLipRaise
    }
  },
  actions: {}
})
