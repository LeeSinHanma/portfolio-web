export default function Icon({ name = 'arrow', size = 20, ...props }) {
  const paths = {
    arrow: <path d="M5 19 19 5M5 5h14v14" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    download: <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 8h16M4 16h16" />,
    copy: (
      <>
        <rect x="8" y="8" width="12" height="13" rx="2" />
        <path d="M16 8V3H3v13h5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    pause: <path d="M9 5v14M15 5v14" />,
    play: <path d="m8 4 12 8-12 8Z" />,
    rotate: <path d="M20 10a8 8 0 1 0-2 8M20 4v6h-6" />,
    interface: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M9 9v11" />
      </>
    ),
    layers: <path d="m12 3 10 5-10 5L2 8Zm-9 10 9 5 9-5M3 18l9 5 9-5" />,
    code: <path d="m7 6-6 6 6 6M17 6l6 6-6 6M14 3l-4 18" />,
    scan: (
      <>
        <path d="M3 8V3h5m8 0h5v5m0 8v5h-5M8 21H3v-5" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="4" ry="10" />
        <path d="M2 12h20" />
      </>
    ),
    location: (
      <>
        <path d="M19 10c0 6-7 11-7 11S5 16 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    cube: (
      <>
        <path d="m12 2 9 5v10l-9 5-9-5V7Zm0 10 9-5M12 12 3 7m9 5v10M7.5 4.5l9 5" />
      </>
    ),
    palette: (
      <>
        <path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1.4-3.4 1.5 1.5 0 0 1 1.1-2.6H18a4 4 0 0 0 4-4c0-4.4-4.5-8-10-8Z" />
        <circle cx="7.5" cy="11" r=".6" />
        <circle cx="10" cy="7" r=".6" />
        <circle cx="15" cy="7" r=".6" />
        <circle cx="18" cy="10" r=".6" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
      </>
    ),
    api: (
      <>
        <path d="m7 7-5 5 5 5m10-10 5 5-5 5m-4-13-2 16" />
      </>
    ),
    network: (
      <>
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <path d="M12 8v4H5v4m7-4h7v4" />
      </>
    ),
    tree: (
      <>
        <path d="M8 21h8m-4 0v-6M12 2l-6 7h3l-5 7h16l-5-7h3Z" />
      </>
    ),
    brain: (
      <>
        <path d="M12 5a3 3 0 0 0-5-2 4 4 0 0 0-3 6 4 4 0 0 0 0 7 4 4 0 0 0 8 3Zm0 0a3 3 0 0 1 5-2 4 4 0 0 1 3 6 4 4 0 0 1 0 7 4 4 0 0 1-8 3M7 8l2 2m8-2-2 2M6 15h3m6 0h3" />
      </>
    ),
    dataset: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18M3 15h18M15 9v12" />
      </>
    ),
    pipeline: (
      <>
        <circle cx="5" cy="5" r="3" />
        <circle cx="19" cy="19" r="3" />
        <path d="M8 5h6a5 5 0 0 1 0 10h-4a5 5 0 0 0-5 5m5-1 2-4-4-2" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  )
}
