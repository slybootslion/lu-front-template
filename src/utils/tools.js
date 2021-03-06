import { ElMessage } from 'element-plus'
import dayjs from 'dayjs'

export const StorageCache = {
  set (key, val) {
    localStorage.setItem(key, val)
  },
  get (key) {
    return localStorage.getItem(key)
  },
  remove (key) {
    localStorage.removeItem(key)
  },
  clear () {
    localStorage.clear()
  },
}

export const showMessage = (message, type = 'error', duration = 1500) => ElMessage({ message, type, duration })

export const formatDate = (date, str = 'YYYY-MM-DD HH:mm:ss') => dayjs(date).format(str)

export class TimerSimulateInterval {
  constructor () {
    this.timer = null
    this.clear = false
    this.countLimit = 0
  }

  /*
  * 设置定时器，
  * 1参数：定时器回调
  * 2参数：每次定时器执行间隔时长，默认1秒
  * 3参数：定时器执行次数，默认5次，可传Infinity不限制次数
  * */
  simulateInterval ({ callback, interval = 1000, countLimit = 5 }) {
    let timerId = null
    this.clear = false
    this.countLimit = countLimit
    let c = 0
    const fn = () => {
      if (this.clear) return
      if (c >= this.countLimit) {
        this.simulateClearInterval()
        return
      }
      callback()
      const prevTimerId = timerId
      timerId = setTimeout(fn, interval)
      clearTimeout(prevTimerId)
      this.timer = timerId
      c++
    }

    setTimeout(fn, interval)
  }

  simulateClearInterval (callback) {
    clearTimeout(this.timer)
    this.clear = true
    callback && callback()
  }
}
