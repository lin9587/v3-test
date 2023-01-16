import { defineComponent, onMounted, ref } from 'vue'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  Mesh,
  AxesHelper,
  PlaneGeometry,
  MeshBasicMaterial,
  BoxGeometry,
  SphereGeometry,
  SpotLight,
  MeshLambertMaterial,
} from 'three'

/**
 * defineComponent: vue3的组合式api 类型推导
 * setup: 组合式APi
 */
export default defineComponent({
  setup() {
    const containerRef = ref<HTMLDivElement>()

    // 创建场景 | 容器 | 舞台
    const scene = new Scene()
    // 创建摄像机 模拟人眼来观察屏幕的视觉
    const camera = new PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    // 设置摄像机位置 x y z
    camera.position.set(-30, 40, 30)
    // 设置摄像机朝向
    camera.lookAt(scene.position)

    // 重置舞台背景颜色，大小
    const renderer = new WebGLRenderer()
    renderer.setClearColor(new Color(0xeeeeee))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true

    // 添加灯光
    const spotLight = new SpotLight(0xffffff)
    spotLight.castShadow = true
    spotLight.position.set(-40, 60, -10)
    scene.add(spotLight)

    // 添加坐标系
    const axes = new AxesHelper(20)
    scene.add(axes)

    // 平面的几何体
    const planeGeometry = new PlaneGeometry(60, 20)
    // 基础的一些材质
    const meshBasicMaterial = new MeshLambertMaterial({
      color: 0xcccccc,
    })
    const plane = new Mesh(planeGeometry, meshBasicMaterial)
    plane.receiveShadow = true

    // 板的位置
    plane.rotation.x = -0.5 * Math.PI
    // plane.position.x = 15
    // plane.position.y = 0
    // plane.position.z = 0
    scene.add(plane)

    // three 内置的一些几何体之一
    const cubeGeometry = new BoxGeometry(4, 4, 4)
    const cubeMaterial = new MeshLambertMaterial({
      color: 0xff0000,
      wireframe: false,
    })
    const cube = new Mesh(cubeGeometry, cubeMaterial)
    cube.castShadow = true
    cube.position.set(2, 2, 2)
    scene.add(cube)

    // create a sphere
    const sphereGeometry = new SphereGeometry(4)
    const sphereMaterial = new MeshLambertMaterial({
      color: 0x7777ff,
      wireframe: false,
    })
    const sphere = new Mesh(sphereGeometry, sphereMaterial)
    sphere.castShadow = true

    // position the sphere
    sphere.position.x = 20
    sphere.position.y = 4
    sphere.position.z = 2

    // add the sphere to the scene
    scene.add(sphere)

    // 动画
    let step = 0
    function renderScene() {
      cube.rotation.x += 0.02
      cube.rotation.y += 0.02
      cube.rotation.z += 0.02

      // bounce the sphere up and down
      step += 0.04
      sphere.position.x = 20 + 10 * Math.cos(step)
      sphere.position.y = 2 + 10 * Math.abs(Math.sin(step))

      requestAnimationFrame(renderScene)
      renderer.render(scene, camera)
    }
    renderScene()

    // 真实dom渲染完成
    onMounted(() => {
      // 把舞台搬到页面上
      containerRef.value?.appendChild(renderer.domElement)

      // 把场景放进来  camera 用来观察场景
      renderer.render(scene, camera)
    })

    return () => (
      <div>
        <div class="container" ref={containerRef}></div>
      </div>
    )
  },
})
