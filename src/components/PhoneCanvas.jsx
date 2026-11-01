import { Suspense, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Environment,
  Lightformer,
  OrbitControls,
  RoundedBox,
  useTexture,
} from '@react-three/drei'
import { MathUtils, Shape, SRGBColorSpace } from 'three'

const screenWidth = 1.54
const screenHeight = 3.3

function configureTexture(texture) {
  texture.colorSpace = SRGBColorSpace
  texture.needsUpdate = true
}

function Phone({ active, screen, turn }) {
  const phone = useRef(null)
  const time = useRef(0)
  const texture = useTexture(screen, configureTexture)
  const invalidate = useThree((state) => state.invalidate)
  const shape = useMemo(() => {
    const w = screenWidth / 2,
      h = screenHeight / 2,
      r = 0.075
    return new Shape()
      .moveTo(-w + r, -h)
      .lineTo(w - r, -h)
      .quadraticCurveTo(w, -h, w, -h + r)
      .lineTo(w, h - r)
      .quadraticCurveTo(w, h, w - r, h)
      .lineTo(-w + r, h)
      .quadraticCurveTo(-w, h, -w, h - r)
      .lineTo(-w, -h + r)
      .quadraticCurveTo(-w, -h, -w + r, -h)
  }, [])

  useEffect(() => {
    invalidate()
  }, [texture, turn, invalidate])

  useFrame((state, delta) => {
    if (!phone.current) return
    const step = Math.min(delta, 0.05)
    if (active) time.current += step
    const targetY = -0.21 + [0, 0.4, -0.25][turn] + state.pointer.x * 0.09
    const targetX = 0.04 + state.pointer.y * 0.04
    phone.current.rotation.y = MathUtils.damp(
      phone.current.rotation.y,
      targetY,
      5,
      step,
    )
    phone.current.rotation.x = MathUtils.damp(
      phone.current.rotation.x,
      targetX,
      5,
      step,
    )
    phone.current.position.y = Math.sin(time.current * 0.8) * 0.035
    if (
      !active &&
      (Math.abs(phone.current.rotation.y - targetY) > 0.001 ||
        Math.abs(phone.current.rotation.x - targetX) > 0.001)
    )
      state.invalidate()
  })

  return (
    <group ref={phone} rotation={[0.04, -0.21, -0.085]}>
      <RoundedBox args={[1.68, 3.62, 0.2]} radius={0.095} smoothness={5}>
        <meshStandardMaterial
          color="#666c5d"
          metalness={0.85}
          roughness={0.25}
        />
      </RoundedBox>
      <RoundedBox args={[1.63, 3.57, 0.205]} radius={0.09} smoothness={5}>
        <meshStandardMaterial
          color="#131711"
          metalness={0.35}
          roughness={0.3}
        />
      </RoundedBox>
      <mesh position={[0, 0, 0.108]}>
        <shapeGeometry
          args={[shape, 12]}
          onUpdate={(geometry) => {
            const positions = geometry.attributes.position
            const uv = geometry.attributes.uv
            for (let i = 0; i < positions.count; i++)
              uv.setXY(
                i,
                positions.getX(i) / screenWidth + 0.5,
                positions.getY(i) / screenHeight + 0.5,
              )
            uv.needsUpdate = true
          }}
        />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
      <RoundedBox
        args={[0.3, 0.025, 0.012]}
        radius={0.006}
        position={[0, 1.733, 0.108]}
      >
        <meshStandardMaterial color="#060805" roughness={0.8} />
      </RoundedBox>
      <mesh position={[0.26, 1.733, 0.108]}>
        <circleGeometry args={[0.018, 16]} />
        <meshStandardMaterial
          color="#090f14"
          metalness={0.5}
          roughness={0.15}
        />
      </mesh>
      <RoundedBox
        args={[0.035, 0.31, 0.055]}
        radius={0.014}
        position={[0.85, 0.66, 0]}
      >
        <meshStandardMaterial color="#7b8271" metalness={0.8} roughness={0.2} />
      </RoundedBox>
      <RoundedBox
        args={[0.035, 0.4, 0.055]}
        radius={0.014}
        position={[-0.85, 0.62, 0]}
      >
        <meshStandardMaterial color="#7b8271" metalness={0.8} roughness={0.2} />
      </RoundedBox>
    </group>
  )
}

function ContextMonitor({ onUnavailable }) {
  const gl = useThree((state) => state.gl)
  useEffect(() => {
    const canvas = gl.domElement
    const lost = (event) => {
      event.preventDefault()
      onUnavailable()
    }
    canvas.addEventListener('webglcontextlost', lost)
    return () => canvas.removeEventListener('webglcontextlost', lost)
  }, [gl, onUnavailable])
  return null
}

export default function PhoneCanvas({ active, screen, turn, onUnavailable }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.3], fov: 38 }}
      dpr={[1, 1.5]}
      frameloop={active ? 'always' : 'demand'}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 5]} intensity={3} color="#fff9e9" />
      <Suspense fallback={null}>
        <Phone active={active} screen={screen} turn={turn} />
      </Suspense>
      <ContextMonitor onUnavailable={onUnavailable} />
      <Environment resolution={64}>
        <Lightformer
          intensity={3}
          position={[-4, 2, 2]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[3, 8, 1]}
        />
        <Lightformer
          intensity={3}
          position={[4, 1, 1]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[3, 8, 1]}
        />
      </Environment>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        minAzimuthAngle={-0.5}
        maxAzimuthAngle={0.5}
        minPolarAngle={Math.PI * 0.44}
        maxPolarAngle={Math.PI * 0.56}
      />
    </Canvas>
  )
}
