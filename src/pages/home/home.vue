<script setup>
import { useSampleState } from '../../store/sample'

const { count } = useSampleState()
</script>

<template>
  <div>home</div>
  {{ count }}
  <div>
    <router-link to="/about">to about</router-link>
  </div>
</template>

<style scoped lang="scss">
//
</style>
