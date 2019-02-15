<template>
  <el-collapse-item title="expressions" name="3">
    <div>Attention
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.attention"></el-progress>
    </div>
    <div>Brow Furrow
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.browFurrow"></el-progress>
    </div>
    <div>Brow Raise
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.browRaise"></el-progress>
    </div>
    <div>Cheek Raise
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.cheekRaise"></el-progress>
    </div>
    <div>ChinRaise
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.chinRaise"></el-progress>
    </div>
    <div>Dimpler
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.dimpler"></el-progress>
    </div>
    <div>Eye Closure
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.eyeClosure"></el-progress>
    </div>
    <div>Eye Widen
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.eyeWiden"></el-progress>
    </div>
    <div>Inner BrowRaise
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.innerBrowRaise"></el-progress>
    </div>
    <div>Jaw Drop
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.jawDrop"></el-progress>
    </div>
    <div>Lid Tighten
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.lidTighten"></el-progress>
    </div>
    <div>Lip Corner Depressor
      <el-progress
        :text-inside="true"
        :stroke-width="18"
        :percentage="expressions.lipCornerDepressor"
      ></el-progress>
    </div>
    <div>Lip Press
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.lipPress"></el-progress>
    </div>
    <div>Lip Pucker
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.lipPucker"></el-progress>
    </div>
    <div>Lip Stretch
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.lipStretch"></el-progress>
    </div>
    <div>Lip Suck
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.lipSuck"></el-progress>
    </div>
    <div>Mouth Open
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.mouthOpen"></el-progress>
    </div>
    <div>Nose Wrinkle
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.noseWrinkle"></el-progress>
    </div>
    <div>Smile
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.smile"></el-progress>
    </div>
    <div>Smirk
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.smirk"></el-progress>
    </div>
    <div>Upper Lip Raise
      <el-progress :text-inside="true" :stroke-width="18" :percentage="expressions.upperLipRaise"></el-progress>
    </div>
  </el-collapse-item>
</template>

<script>
export default {
  props: ['expressions'],
}
</script>

<style>
</style>
