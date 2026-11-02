import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { skillIcons } from '../data/skillIcons'
import Icon from './Icon'

function tooltipPosition(element) {
  if (!element) return null
  const rect = element.getBoundingClientRect()
  if (rect.bottom < 0 || rect.top > window.innerHeight) return null
  return {
    left: Math.max(
      122,
      Math.min(rect.left + rect.width / 2, window.innerWidth - 122),
    ),
    top: rect.top > 200 ? rect.top - 10 : rect.bottom + 10,
    above: rect.top > 200,
  }
}

export default function SkillIcon({ skill }) {
  const [tooltip, setTooltip] = useState(null)
  const [imageFailed, setImageFailed] = useState(false)
  const closeTimer = useRef(null)
  const button = useRef(null)
  const tooltipId = useId()
  const icon = skillIcons[skill] || { symbol: 'code' }

  useEffect(() => () => clearTimeout(closeTimer.current), [])
  useEffect(() => {
    if (!tooltip) return
    // Native keyboard focus can scroll an icon into view after its focus event.
    // Keep that tooltip anchored; dismiss hover-only tooltips during scrolling.
    const update = () =>
      setTooltip(
        document.activeElement === button.current
          ? tooltipPosition(button.current)
          : null,
      )
    window.addEventListener('scroll', update, true)
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update, true)
      window.removeEventListener('resize', update)
    }
  }, [tooltip])

  const show = (event) => {
    clearTimeout(closeTimer.current)
    setTooltip(tooltipPosition(event.currentTarget))
  }
  const closeSoon = (event) => {
    if (event.pointerType === 'touch') return
    closeTimer.current = setTimeout(() => setTooltip(null), 120)
  }

  return (
    <>
      <button
        ref={button}
        type="button"
        className="skill-tile"
        aria-label={skill}
        aria-describedby={tooltip ? tooltipId : undefined}
        style={{ '--skill-color': icon.color || 'var(--accent)' }}
        onPointerEnter={show}
        onPointerLeave={closeSoon}
        onFocus={show}
        onClick={show}
        onBlur={() => setTooltip(null)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            clearTimeout(closeTimer.current)
            setTooltip(null)
          }
        }}
      >
        {icon.logo && !imageFailed ? (
          <img
            className={
              icon.monochrome ? 'skill-logo skill-logo-light' : 'skill-logo'
            }
            src={`/icons/${icon.logo}.svg`}
            width="38"
            height="38"
            alt=""
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <Icon name={icon.symbol || 'code'} size={36} />
        )}
      </button>
      {tooltip &&
        createPortal(
          <span
            id={tooltipId}
            className="skill-tooltip"
            role="tooltip"
            data-above={tooltip.above}
            style={{ left: tooltip.left, top: tooltip.top }}
            onPointerEnter={() => clearTimeout(closeTimer.current)}
            onPointerLeave={closeSoon}
          >
            {skill}
          </span>,
          document.body,
        )}
    </>
  )
}
