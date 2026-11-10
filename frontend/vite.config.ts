import path from 'node:path'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type PluginOption } from 'vite'
import prerenderModule from '@prerenderer/rollup-plugin'
import { ROUTES } from './src/router/routes.ts'
import { SITE_URL } from './src/seo/siteConfig.ts'

/**
 * The plugin re-exports its CommonJS default; depending on the module system
 * it arrives either as the function itself or wrapped in `{ default }`.
 * Normalize both shapes, keeping the options typed structurally.
 */
type PrerenderOptions = {
  routes: string[]
  renderer: string
  rendererOptions?: Record<string, unknown>
  postProcess?(renderedRoute: { html: string; route?: string }, routes: unknown[]): void
}
const prerender = ((prerenderModule as { default?: unknown }).default ?? prerenderModule) as (
  options: PrerenderOptions,
) => PluginOption

/**
 * Public, indexable routes to prerender at build time.
 *
 * Static routes come from the route registry; project detail routes are an
 * explicit allowlist (kept in sync with the `PROJECTS` ids in
 * `@/constants/home`) so build-time tooling never renders more than it
 * should. Non-page routes (404, `/#anchors`) stay out.
 */
const PRERENDER_ROUTES: string[] = [
  ROUTES.home,
  ROUTES.about,
  ROUTES.services,
  ROUTES.works,
  `${ROUTES.works}/project-one`,
  `${ROUTES.works}/project-two`,
  `${ROUTES.works}/project-three`,
  `${ROUTES.works}/project-four`,
  ROUTES.contact,
  ROUTES.privacy,
  ROUTES.terms,
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    /**
     * Static prerendering for crawlers (`react-snap` is incompatible with
     * this stack — abandoned, pre-React-18, no ESM/Vite support). Renders
     * each route of the real built app in headless Chrome and writes
     * `route/index.html` with the content + `@/seo` metadata already in
     * place. Runs on `closeBundle`, i.e. only after the production build.
     */
    prerender({
      routes: PRERENDER_ROUTES,
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        /** Wait past route lazy-loading and the page transition before snapshotting. */
        renderAfterTime: 2_000,
        maxConcurrentRoutes: 2,
        launchOptions: {
          args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        },
      },
      /** The snapshot DOM resolves asset hrefs against the prerender server — point them at production. */
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html.replace(
          /(http:\/\/)?(localhost|127\.0\.0\.1):\d*/g,
          SITE_URL,
        );
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
