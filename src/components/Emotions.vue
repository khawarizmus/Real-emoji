<template>
  <el-collapse-item title="emotions" name="2">
    <div>Anger
      <el-progress
        :text-inside="true"
        :stroke-width="18"
        :percentage="emotions.anger"
        status="exception"
      ></el-progress>
    </div>
    <div>Contempt
      <el-progress :text-inside="true" :stroke-width="18" :percentage="emotions.contempt"></el-progress>
    </div>
    <div>Disgust
      <el-progress :text-inside="true" :stroke-width="18" :percentage="emotions.disgust"></el-progress>
    </div>
    <div>Engagement
      <el-progress :text-inside="true" :stroke-width="18" :percentage="emotions.engagement"></el-progress>
    </div>
    <div>Fear
      <el-progress :text-inside="true" :stroke-width="18" :percentage="emotions.fear"></el-progress>
    </div>
    <div>Joy
      <el-progress
        :text-inside="true"
        :stroke-width="18"
        :percentage="emotions.joy"
        status="success"
      ></el-progress>
    </div>
    <div>Sadness
      <el-progress :text-inside="true" :stroke-width="18" :percentage="emotions.sadness"></el-progress>
    </div>
    <div>Surprise
      <el-progress :text-inside="true" :stroke-width="18" :percentage="emotions.surprise"></el-progress>
    </div>
    <div>Valence
      <el-progress :text-inside="true" :stroke-width="18" :percentage="emotions.valence"></el-progress>
    </div>
  </el-collapse-item>
</template>

<script>
export default {
  props: ['emotions'],
}
</script>

<style>
</style>
