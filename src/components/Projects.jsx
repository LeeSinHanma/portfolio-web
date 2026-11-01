import { useState } from 'react'
import { projects } from '../data/portfolio'
import Icon from './Icon'
import ProjectVisual from './ProjectVisual'
import ProjectDialog from './ProjectDialog'
const filters = ['All work', 'Mobile', 'Web', 'AI & vision', 'Desktop']
export default function Projects() {
  const [filter, setFilter] = useState('All work')
  const [selected, setSelected] = useState(null)
  const visible = projects.filter(
    (project) => filter === 'All work' || project.categories.includes(filter),
  )
  const featured = visible.filter((project) => project.featured)
  const additional = visible.filter((project) => !project.featured)
  return (
    <section
      id="work"
      className="work-section section shell"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span>01 /</span> SELECTED WORK
          </p>
          <h2 id="work-title">
            Built with purpose<span className="accent">.</span>
          </h2>
        </div>
        <p>
          A few ideas I’ve turned
          <br />
          into working software.
        </p>
      </div>
      <div className="work-filters" role="group" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            key={item}
            aria-pressed={item === filter}
            onClick={() => setFilter(item)}
          >
            {item}
            {item === 'All work' && <span>06</span>}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        Showing {visible.length} projects for {filter}.
      </p>
      <div className="project-grid">
        {featured.map((project) => (
          <article
            key={project.id}
            className={`project-card ${project.id === 'rideout' ? 'project-card-featured' : ''}`}
          >
            <button
              className="visual-button"
              aria-label={`Explore ${project.name} project`}
              onClick={() => setSelected(project)}
            >
              <ProjectVisual project={project} />
              <span className="visual-open">
                <Icon size={22} />
              </span>
            </button>
            <div className="project-info">
              <div className="project-kicker mono">
                <span>
                  {project.number} / {project.category}
                </span>
                <span>{project.year}</span>
              </div>
              <div className="project-title-row">
                <h3>
                  <button onClick={() => setSelected(project)}>
                    {project.name}
                    <Icon size={27} />
                  </button>
                </h3>
                <span className="project-status">
                  <span />
                  {project.status}
                </span>
              </div>
              <p>{project.description}</p>
              <div className="tags">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button
                className="text-link"
                onClick={() => setSelected(project)}
              >
                Explore project <Icon size={15} />
              </button>
            </div>
          </article>
        ))}
      </div>
      {additional.length > 0 && (
        <div className="additional-work">
          <div className="additional-heading">
            <span className="eyebrow">ALSO ON MY WORKBENCH</span>
            <span className="mono">
              {String(additional.length).padStart(2, '0')} PROJECTS
            </span>
          </div>
          {additional.map((project) => (
            <button
              key={project.id}
              className="additional-project"
              onClick={() => setSelected(project)}
            >
              <span className="mono project-number">{project.number}</span>
              <span className="additional-name">
                {project.name}
                <span>{project.description}</span>
              </span>
              <span className="additional-stack">
                {project.stack.slice(0, 2).join(' / ')}
              </span>
              <Icon size={21} />
            </button>
          ))}
        </div>
      )}
      {selected && (
        <ProjectDialog
          key={selected.id}
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}
