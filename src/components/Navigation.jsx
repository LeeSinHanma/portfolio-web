import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/portfolio'
import Icon from './Icon'
const links = [
  ['work', 'Work'],
  ['about', 'About'],
  ['toolkit', 'Toolkit'],
  ['journey', 'Journey'],
]
export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const toggle = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-15% 0px -65% 0px' },
    )
    links.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!open) return
    const escape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    const closeAtDesktop = () => {
      if (window.innerWidth > 960) setOpen(false)
    }
    document.addEventListener('keydown', escape)
    window.addEventListener('resize', closeAtDesktop)
    return () => {
      document.removeEventListener('keydown', escape)
      window.removeEventListener('resize', closeAtDesktop)
    }
  }, [open])
  return (
    <header className="site-header">
      <div className="nav-wrap shell">
        <a
          className="brand"
          href="#home"
          aria-label={`${profile.name}, home`}
          onClick={() => setOpen(false)}
        >
          ka<span>↗</span>
        </a>
        <a className="nav-name" href="#home">
          {profile.name}
          <span>Independent mind. Connected work.</span>
        </a>
        <button
          className="menu-toggle icon-button"
          ref={toggle}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <nav
          id="main-nav"
          className={`main-nav ${open ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <Icon size={15} />
          </a>
        </nav>
      </div>
    </header>
  )
}
