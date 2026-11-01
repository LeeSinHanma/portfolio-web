export default function ProjectVisual({ project }) {
  if (project.id === 'rideout')
    return (
      <div className="project-visual rideout-visual">
        <div className="rideout-grid" aria-hidden="true" />
        <div className="rideout-visual-brand">
          <img src="/media/rideout-logo.webp" width="42" height="42" alt="" />
          <span>
            RideOut<span>EVERY RIDE, TOGETHER.</span>
          </span>
        </div>
        <span className="rideout-route route-one" aria-hidden="true" />
        <span className="rideout-route route-two" aria-hidden="true" />
        <div className="phone phone-back">
          <img
            src={project.media.summary}
            alt="RideOut ride summary showing ride duration and route details"
            width="480"
            height="1026"
            loading="lazy"
          />
        </div>
        <div className="phone phone-front">
          <img
            src={project.media.map}
            alt="RideOut real-time group navigation and rider locations on a map"
            width="480"
            height="1026"
            loading="lazy"
          />
        </div>
        <div className="rideout-note">
          <span className="live-dot" /> REAL APP. REAL ADVENTURES.
        </div>
        <img
          className="rideout-mascot"
          src="/media/rideout-mascot.webp"
          width="100"
          height="100"
          alt="RideOut helmet-wearing mascot"
          loading="lazy"
        />
        <span className="visual-corner mono">FLUTTER / ANDROID</span>
      </div>
    )
  if (project.id === 'sentrydrive')
    return (
      <div className="project-visual sentry-visual">
        <span className="visual-label mono">SENTRYDRIVE / SYSTEM STUDY</span>
        <svg
          className="eye-study"
          viewBox="0 0 500 280"
          fill="none"
          aria-label="System illustration: eye-closure detection flowing into a web dashboard"
          role="img"
        >
          <defs>
            <pattern
              id="vision-grid"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M25 0H0v25"
                stroke="#667c74"
                strokeWidth=".5"
                opacity=".2"
              />
            </pattern>
          </defs>
          <rect width="500" height="280" fill="url(#vision-grid)" />
          <path
            d="M105 140Q250-18 395 140Q250 298 105 140Z"
            stroke="#c2d7c7"
            strokeWidth="1.5"
          />
          <path
            d="M105 140Q250 20 395 140Q250 260 105 140Z"
            stroke="#c2d7c7"
            opacity=".2"
          />
          <circle cx="250" cy="140" r="57" stroke="#c2d7c7" />
          <circle
            cx="250"
            cy="140"
            r="38"
            stroke="#c2d7c7"
            strokeDasharray="2 6"
          />
          <circle cx="250" cy="140" r="19" fill="#c2d7c7" />
          <path
            d="M155 90V65h25m140 0h25v25m0 100v25h-25m-140 0h-25v-25"
            stroke="#c2d7c7"
            strokeWidth="1.5"
          />
          <path
            d="M70 140h360M250 30v220"
            stroke="#c2d7c7"
            strokeDasharray="3 8"
            opacity=".2"
          />
          {[
            [105, 140],
            [395, 140],
            [250, 61],
            [250, 219],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="#d6e4a3" />
          ))}
        </svg>
        <div className="visual-flow mono">
          <span>VISION</span>
          <span>→</span>
          <span>EVENTS</span>
          <span>→</span>
          <span>DASHBOARD</span>
        </div>
        <span className="illustration-label">
          Conceptual system illustration
        </span>
      </div>
    )
  const points = [
    [228, 236],
    [187, 207],
    [160, 177],
    [139, 152],
    [123, 133],
    [205, 164],
    [192, 123],
    [185, 88],
    [180, 58],
    [236, 151],
    [233, 103],
    [230, 66],
    [228, 36],
    [268, 157],
    [274, 112],
    [280, 80],
    [286, 53],
    [295, 177],
    [314, 147],
    [331, 126],
    [344, 108],
  ]
  return (
    <div className="project-visual signify-visual">
      <span className="visual-label mono">SIGNIFY / LANDMARK STUDY</span>
      <svg
        className="hand-study"
        viewBox="0 0 470 280"
        fill="none"
        role="img"
        aria-label="Conceptual illustration of hand landmarks used for sign-language recognition"
      >
        <circle cx="235" cy="140" r="115" stroke="#b6b3d3" opacity=".1" />
        <circle
          cx="235"
          cy="140"
          r="85"
          stroke="#b6b3d3"
          opacity=".12"
          strokeDasharray="2 7"
        />
        {[
          [0, 1, 2, 3, 4],
          [0, 5, 6, 7, 8],
          [5, 9, 10, 11, 12],
          [9, 13, 14, 15, 16],
          [13, 17, 18, 19, 20],
          [0, 17],
          [5, 17],
        ].map((indices, i) => (
          <polyline
            key={i}
            points={indices.map((n) => points[n].join(',')).join(' ')}
            stroke="#c7c2e5"
            strokeWidth="1.4"
          />
        ))}
        {points.map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i === 0 ? 5 : 3}
            fill={i === 0 ? '#d9edaa' : '#c7c2e5'}
          />
        ))}
        <path
          d="M120 78V48h30m170 0h30v30m0 140v30h-30m-170 0h-30v-30"
          stroke="#b6b3d3"
          opacity=".35"
        />
        <path d="M75 140h30m260 0h30" stroke="#b6b3d3" opacity=".35" />
      </svg>
      <div className="visual-flow mono">
        <span>GESTURE</span>
        <span>→</span>
        <span>FEATURES</span>
        <span>→</span>
        <span>LETTER</span>
      </div>
      <span className="illustration-label">Conceptual system illustration</span>
    </div>
  )
}
