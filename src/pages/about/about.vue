<script setup>
import { useSampleState } from '../../store/sample'

const { addCount } = useSampleState()
</script>

<template>
  <router-link to="/">back home</router-link>
  <div>about</div>
  <var-button type="primary" @click="() => addCount(1)">add 1</var-button>
</template>

<style scoped lang="scss">
//
</style>
