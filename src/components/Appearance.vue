<template>
  <el-collapse-item title="appearance" name="1">
    <div>Gender: {{appearance.gender}}</div>
    <div>Age: {{appearance.age}}</div>
    <div>Ethnicity: {{appearance.ethnicity}}</div>
    <div>Glasses: {{appearance.glasses}}</div>
  </el-collapse-item>
</template>

<script>
export default {
  props: ['appearance'],
}
</script>

<style>
</style>
