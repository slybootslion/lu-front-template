<script setup>
import { useSampleState } from '../../store/sample'

const { addCount } = useSampleState()
</script>

<template>
  <router-link to="/">back home</router-link>
  <div>about</div>
  <el-button type="primary" @click="() => addCount(1)">
    add 1
  </el-button>
</template>

<style scoped lang="scss">
//
</style>
