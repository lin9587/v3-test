// 鼠标点击 获取鼠标坐标
import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default () => {
  // 数据
  const point = reactive({
    x: 0,
    y: 0,
  })

  // 方法
  const savePoint = (event: { pageX: number; pageY: number }) => {
    point.x = event.pageX
    point.y = event.pageY
  }

  onMounted(() => {
    window.addEventListener('click', savePoint)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })

  return point
}
