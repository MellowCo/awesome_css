import type { Ref } from 'vue'
import { computed, onMounted, ref } from 'vue'

// @ts-expect-error dot
import mojs from '@mojs/core'

export default function (heartRef: Ref) {
  let spread: any = null
  let circle: any = null
  let heart: any = null

  // 是否点赞
  const isLike = ref(false)
  // 爱心比例
  const scaleVal = ref(1)
  // 爱心样式
  const heartStyle = computed(() => ({
    fill: isLike.value ? 'red' : '',
    stroke: isLike.value ? 'red' : '',
    transform: `scale3d(${scaleVal.value},${scaleVal.value},1)`,
  }))

  onMounted(() => {
    // 扩散多个图形
    spread = new mojs.Burst({
      // 需要给父元素 添加 relative 定位
      // 不然会在屏幕中间生成动画
      parent: heartRef.value,
      count: 10,
      delay: 300,
      radius: { 0: 50 },
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
      children: {
        shape: ['circle', 'rect', 'polygon'],
        degreeShift: 'rand(-90, 90)',
        delay: 'stagger(0, 40)',
        radius: { 0: 'rand(5, 25)' },
        fill: [
          '#1abc9c',
          '#2ecc71',
          '#00cec9',
          '#3498db',
          '#9b59b6',
        ],
      },
      onStart() {
        isLike.value = true
      },
    })

    // 点赞波纹
    circle = new mojs.Shape({
      parent: heartRef.value,
      shape: 'circle',
      stroke: '#F64040',
      scale: { 0: 1 },
      strokeWidth: { 20: 0 },
      radius: { 0: 20 },
      fill: 'transparent',
      duration: 500,
    })

    // 爱心动画
    heart = new mojs.Tween({
      duration: 1200,
      onUpdate(progress: number) {
        if (progress > 0.3) {
          scaleVal.value = mojs.easing.elastic.out(
            1.43 * progress - 0.43,
          )
        }
        else {
          scaleVal.value = 0
        }
      },
    })
  })

  const start = () => {
    new mojs.Timeline().add(spread, circle, heart).play()
  }

  return {
    isLike,
    heartStyle,
    start,
  }
}
