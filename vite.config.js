import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { cp } from 'node:fs/promises'
import { join, relative, resolve, sep } from 'node:path'
import process from 'node:process'

function siteMetadata(siteUrl) {
  return {
    name: 'portfolio-site-metadata',
    transformIndexHtml(html) {
      if (!siteUrl) return html
      const url = new URL(siteUrl)
      if (!['https:', 'http:'].includes(url.protocol))
        throw new Error('SITE_URL must use https:// or http://')
      const origin = url.origin
      return {
        html: html.replaceAll(
          'content="/og-image.png"',
          `content="${origin}/og-image.png"`,
        ),
        tags: [
          {
            tag: 'link',
            attrs: { rel: 'canonical', href: `${origin}/` },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: { property: 'og:url', content: `${origin}/` },
            injectTo: 'head',
          },
        ],
      }
    },
  }
}

// Keep the supplied source recordings available locally without shipping them.
// Everything else under public/ continues to be included automatically.
function curatedPublicAssets() {
  let root, output
  return {
    name: 'curated-public-assets',
    apply: 'build',
    configResolved(config) {
      root = config.root
      output = resolve(root, config.build.outDir)
    },
    async closeBundle() {
      const source = join(root, 'public')
      await cp(source, output, {
        recursive: true,
        filter: (path) =>
          relative(source, path).split(sep)[0] !== 'ride-out-assets',
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['SITE_', 'VERCEL_'])
  const productionDomain = env.VERCEL_PROJECT_PRODUCTION_URL
  const siteUrl =
    env.SITE_URL || (productionDomain ? `https://${productionDomain}` : '')
  return {
    plugins: [react(), curatedPublicAssets(), siteMetadata(siteUrl)],
    build: { copyPublicDir: false },
  }
})
