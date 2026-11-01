import {
  Component,
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { projects } from '../data/portfolio'
import Icon from './Icon'

const PhoneCanvas = lazy(() => import('./PhoneCanvas'))
const rideout = projects.find((project) => project.id === 'rideout')
const screens = [
  {
    label: 'Navigation',
    image: rideout.media.map,
    alt: 'RideOut showing real-time rider locations and a shared navigation route',
    caption: 'Real-time group navigation.',
  },
  {
    label: 'Ride summary',
    image: rideout.media.summary,
    alt: 'RideOut showing a completed ride, its duration, and route details',
    caption: 'A ride, from start to finish.',
  },
]

function StaticPhone({ screen }) {
  return (
    <div className="static-phone">
      <div className="fallback-device">
        <img src={screen.image} width="480" height="1026" alt={screen.alt} />
        <span className="fallback-speaker" aria-hidden="true" />
      </div>
    </div>
  )
}

class SceneBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

export default function HeroShowcase() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [paused, setPaused] = useState(false)
  const [screenIndex, setScreenIndex] = useState(0)
  const [turn, setTurn] = useState(0)
  const container = useRef(null)
  const screen = screens[screenIndex]
  const disableScene = useCallback(() => setEnabled(false), [])

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      if (motion.matches || navigator.connection?.saveData) {
        setEnabled(false)
        return
      }
      const probe = document.createElement('canvas')
      try {
        const context = probe.getContext('webgl2')
        setEnabled(Boolean(context))
        context?.getExtension('WEBGL_lose_context')?.loseContext()
      } catch {
        setEnabled(false)
      }
    }
    const timer = window.setTimeout(update, 300)
    motion.addEventListener('change', update)
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '100px' },
    )
    observer.observe(container.current)
    return () => {
      clearTimeout(timer)
      motion.removeEventListener('change', update)
      observer.disconnect()
    }
  }, [])

  const fallback = <StaticPhone screen={screen} />
  return (
    <div className="hero-art" ref={container}>
      <div className="scene-meta mono">
        <span>
          <span className="tiny-cross">+</span> BUILT & PUBLISHED / 01
        </span>
        <span>MY WORK, IN YOUR HANDS</span>
      </div>
      <div className="showcase-project">
        <img src="/media/rideout-logo.webp" width="38" height="38" alt="" />
        <div>
          <h2>{rideout.name}</h2>
          <p>Android navigation & group tracking</p>
        </div>
        <span className="showcase-published">
          <span className="live-dot" /> SHIPPED
        </span>
      </div>
      <div
        className="showcase-stage"
        role="img"
        aria-label={`RideOut product preview. ${screen.alt}.`}
      >
        <div className="scene-grid" aria-hidden="true" />
        <SceneBoundary fallback={fallback}>
          {enabled ? (
            <Suspense fallback={fallback}>
              <PhoneCanvas
                active={visible && !paused}
                screen={screen.image}
                turn={turn}
                onUnavailable={disableScene}
              />
            </Suspense>
          ) : (
            fallback
          )}
        </SceneBoundary>
        <span className="scene-coordinate mono" aria-hidden="true">
          DESIGNED · DEVELOPED · DEPLOYED
        </span>
        <span className="scene-orbit-label mono" aria-hidden="true">
          FLUTTER / NODE.JS / FIREBASE
        </span>
      </div>
      <div className="scene-controls">
        <div
          className="scene-modes"
          role="group"
          aria-label="Choose a RideOut screen"
        >
          {screens.map((item, index) => (
            <button
              key={item.label}
              aria-pressed={screenIndex === index}
              onClick={() => setScreenIndex(index)}
            >
              <span className="mode-dot" />
              {item.label}
            </button>
          ))}
        </div>
        {enabled && (
          <div className="scene-actions">
            <button
              className="icon-button"
              aria-label="Turn phone"
              onClick={() => setTurn((value) => (value + 1) % 3)}
            >
              <Icon name="rotate" size={15} />
            </button>
            <button
              className="icon-button"
              aria-label={paused ? 'Resume phone motion' : 'Pause phone motion'}
              aria-pressed={paused}
              onClick={() => setPaused(!paused)}
            >
              <Icon name={paused ? 'play' : 'pause'} size={15} />
            </button>
          </div>
        )}
      </div>
      <div className="scene-caption">
        <span aria-live="polite">{screen.caption}</span>
        <span className="mono">
          {enabled ? 'DRAG TO TURN ↔' : 'ORIGINAL APP SCREENS'}
        </span>
      </div>
      <a
        className="showcase-store-link"
        href={rideout.links[0].url}
        target="_blank"
        rel="noreferrer"
      >
        Explore RideOut on Google Play <Icon size={13} />
      </a>
    </div>
  )
}
