import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
export default function ProjectDialog({ project, onClose }) {
  const dialog = useRef(null)
  const [videoError, setVideoError] = useState(false)
  useEffect(() => {
    const element = dialog.current
    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement
    element.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus({ preventScroll: true })
    }
  }, [])

  const containFocus = (event) => {
    if (event.key !== 'Tab') return
    const targets = dialog.current.querySelectorAll(
      'button:not([disabled]), a[href], video[controls], [tabindex="0"]',
    )
    const first = targets[0]
    const last = targets[targets.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last?.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first?.focus()
    }
  }
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="dialog-title"
      onKeyDown={containFocus}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="dialog-panel">
        <div className="dialog-top">
          <span className="eyebrow">PROJECT NOTES / {project.number}</span>
          <button
            className="icon-button"
            onClick={onClose}
            aria-label="Close project details"
          >
            <Icon name="close" />
          </button>
        </div>
        <p className="eyebrow dialog-category">
          {project.category}
          {project.year ? ` · ${project.year}` : ''}
        </p>
        <h2 id="dialog-title">
          {project.name}
          <span>.</span>
        </h2>
        <p className="dialog-intro">{project.description}</p>
        <div className="dialog-facts">
          <div>
            <span className="eyebrow">MY ROLE</span>
            <p>{project.role}</p>
          </div>
          <div>
            <span className="eyebrow">CONTEXT</span>
            <p>{project.status}</p>
          </div>
        </div>
        <h3>What I worked on</h3>
        <ul className="contributions">
          {project.contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="tags">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.media && (
          <div className="project-demo">
            <h3>A look inside RideOut</h3>
            <p>Original app recording. Press play to explore.</p>
            {videoError ? (
              <p className="media-error" role="status">
                The recording could not load. You can still explore the app on
                Google Play below.
              </p>
            ) : (
              <video
                controls
                playsInline
                preload="none"
                poster={project.media.map}
                aria-label="RideOut original app demonstration"
                onError={() => setVideoError(true)}
              >
                <source src={project.media.video} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            )}
          </div>
        )}
        {project.links.length > 0 && (
          <div className="dialog-links">
            {project.links.map((link) => (
              <a
                className="button button-primary"
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <Icon size={17} />
              </a>
            ))}
          </div>
        )}
      </div>
    </dialog>
  )
}
