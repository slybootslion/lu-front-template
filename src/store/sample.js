import { defineStore } from 'pinia'
import { ref } from 'vue'
import { pinia } from './index'

export const useSampleState = defineStore('sampleState', () => {
  const count = ref(0)

  const addCount = num => {
    count.value = count.value + num
  }

  return { count, addCount }
})

export const useSampleStateOutSide = () => useSampleState(pinia)
