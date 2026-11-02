import { useEffect, useState } from 'react'
import {
  certifications,
  education,
  experience,
  profile,
  skillGroups,
} from './data/portfolio'
import Icon from './components/Icon'
import Navigation from './components/Navigation'
import HeroShowcase from './components/HeroShowcase'
import Projects from './components/Projects'
import SkillIcon from './components/SkillIcon'

function Contact() {
  const [copyState, setCopyState] = useState('idle')
  useEffect(() => {
    if (copyState === 'idle') return
    const timer = setTimeout(() => setCopyState('idle'), 3500)
    return () => clearTimeout(timer)
  }, [copyState])
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyState('copied')
    } catch {
      setCopyState('failed')
    }
  }
  return (
    <section
      id="contact"
      className="contact-section section"
      aria-labelledby="contact-title"
    >
      <div className="shell">
        <div className="contact-top">
          <p className="eyebrow">
            <span>05 /</span> THE NEXT CONNECTION
          </p>
          <span className="contact-location">
            <Icon name="location" size={14} />
            {profile.location}
          </span>
        </div>
        <div className="contact-main">
          <h2 id="contact-title">
            Have something
            <br />
            in <em>mind?</em>
          </h2>
          <a
            className="contact-circle"
            href={`mailto:${profile.email}`}
            aria-label="Start a conversation by email"
          >
            <Icon size={60} />
          </a>
        </div>
        <p className="contact-intro">
          A role, a collaboration, or an interesting problem.
          <br />
          I’d love to hear about it.
        </p>
        <div className="contact-bottom">
          <div className="email-wrap">
            <a className="email-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <button
              className="icon-button copy-button"
              onClick={copyEmail}
              aria-label="Copy email address"
            >
              <Icon
                name={copyState === 'copied' ? 'check' : 'copy'}
                size={18}
              />
            </button>
            <span className="copy-feedback" role="status">
              {copyState === 'copied'
                ? 'Email copied'
                : copyState === 'failed'
                  ? 'Please select and copy the email address.'
                  : ''}
            </span>
          </div>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
              <Icon size={16} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
              <Icon size={16} />
            </a>
            <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>
              Call
              <Icon size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <section id="home" className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-eyebrow eyebrow">
              <span className="live-dot" /> SOFTWARE ENGINEER · PHILIPPINES
            </p>
            <h1 id="hero-title">
              Ideas into
              <br />
              <em>working</em>
              <br />
              software<span className="accent">.</span>
            </h1>
            <div className="hero-introduction">
              <span className="intro-line" aria-hidden="true" />
              <div>
                <p className="hero-name">Hi, I’m {profile.name}.</p>
                <p>{profile.introduction}</p>
              </div>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <Icon name="down" size={17} />
              </a>
              <a className="button button-quiet" href={profile.resume} download>
                Resume <Icon name="download" size={17} />
              </a>
            </div>
          </div>
          <HeroShowcase />
          <div className="hero-footer mono">
            <span>{profile.specialty.toUpperCase()}</span>
            <a href="#work">
              SCROLL TO DISCOVER <Icon name="down" size={14} />
            </a>
            <span>PORTFOLIO — 2026</span>
          </div>
        </section>
        <div className="discipline-strip" aria-label="Development disciplines">
          <div className="shell">
            <span>From the interface to the infrastructure.</span>
            <div>
              <span>WEB DEVELOPMENT</span>
              <span>MOBILE APPLICATIONS</span>
              <span>COMPUTER VISION</span>
            </div>
          </div>
        </div>
        <Projects />
        <section
          id="about"
          className="about-section section"
          aria-labelledby="about-title"
        >
          <div className="shell about-layout">
            <div className="about-heading">
              <p className="eyebrow">
                <span>02 /</span> THE PERSON BEHIND THE CODE
              </p>
              <h2 id="about-title">
                Curiosity first.
                <br />
                <em>Code follows.</em>
              </h2>
              <div className="about-monogram" aria-hidden="true">
                <span>k</span>
                <span>a</span>
                <Icon size={35} />
                <span className="mono">ALWAYS A WORK IN PROGRESS.</span>
              </div>
            </div>
            <div className="about-copy">
              <p className="about-lead">{profile.about}</p>
              <p>{profile.approach}</p>
              <p>{profile.background}</p>
              <div className="about-notes">
                <div>
                  <span className="eyebrow">BASED IN</span>
                  <span>{profile.location}</span>
                </div>
                <div>
                  <span className="eyebrow">CURRENTLY</span>
                  <span>
                    {profile.study}
                    <br />
                    {profile.graduation}
                  </span>
                </div>
              </div>
              <a className="text-link" href={profile.resume} download>
                The full story, on paper <Icon name="download" size={16} />
              </a>
            </div>
          </div>
        </section>
        <section
          id="toolkit"
          className="toolkit-section section shell"
          aria-labelledby="toolkit-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span>03 /</span> TOOLS OF THE TRADE
              </p>
              <h2 id="toolkit-title">
                A versatile toolkit<span className="accent">.</span>
              </h2>
            </div>
            <p>
              Different challenges.{' '}
              <br />
              The right tools for the job.
            </p>
          </div>
          <div className="skills-list">
            {skillGroups.map((group) => (
              <details className="skill-group" key={group.name} open>
                <summary>
                  <span className="skill-icon">
                    <Icon name={group.icon} size={22} />
                  </span>
                  <span className="skill-heading">
                    {group.name}
                    <span>{group.note}</span>
                  </span>
                  <span className="skill-count mono">
                    {String(group.skills.length).padStart(2, '0')} TOOLS
                  </span>
                  <Icon name="plus" size={22} />
                </summary>
                <div
                  className="skill-icons"
                  role="group"
                  aria-label={`${group.name} technologies`}
                >
                  {group.skills.map((skill) => (
                    <SkillIcon key={skill} skill={skill} />
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>
        <section
          id="journey"
          className="journey-section section"
          aria-labelledby="journey-title"
        >
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span>04 /</span> THE PATH SO FAR
                </p>
                <h2 id="journey-title">
                  Every chapter counts<span className="accent">.</span>
                </h2>
              </div>
              <p>
                Learning, building,
                <br />
                and connecting the dots.
              </p>
            </div>
            <div className="journey-layout">
              <div>
                <h3 className="journey-subtitle">
                  Professional experience <span className="mono">01—03</span>
                </h3>
                <div className="timeline">
                  {experience.map((job, i) => (
                    <article
                      key={`${job.company}-${job.role}`}
                      className="timeline-item"
                    >
                      <span
                        className={`timeline-dot ${i === 0 ? 'current' : ''}`}
                      />
                      <p className="mono timeline-date">{job.date}</p>
                      <h4>{job.role}</h4>
                      <p className="timeline-company">
                        {job.company}
                        <span>{job.location}</span>
                      </p>
                      <p className="timeline-description">{job.description}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="education-column">
                <h3 className="journey-subtitle">Education & certification</h3>
                {education.map((item) => (
                  <article className="education-card" key={item.school}>
                    <p className="mono">{item.date}</p>
                    <h4>{item.course}</h4>
                    <p>{item.school}</p>
                  </article>
                ))}
                {certifications.map((item) => (
                  <article className="certification-card" key={item}>
                    <Icon name="check" size={22} />
                    <div>
                      <span className="eyebrow">CERTIFICATION</span>
                      <h4>{item}</h4>
                    </div>
                    <span className="certification-mark" aria-hidden="true">
                      ✳
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="site-footer shell">
        <a className="brand" href="#home" aria-label="Back to top">
          ka<span>↗</span>
        </a>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="footer-credit">
          Thoughtfully built with React & Three.js
        </span>
        <a className="back-top" href="#home">
          Back to top <Icon name="arrow" size={15} />
        </a>
      </footer>
    </>
  )
}
