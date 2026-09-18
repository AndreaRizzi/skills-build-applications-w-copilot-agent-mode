const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const browserHostname = typeof window !== 'undefined' ? window.location.hostname : ''
const forwardedApiHost = browserHostname.replace(/-5173\.app\.github\.dev$/, '-8000.app.github.dev')

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : forwardedApiHost !== browserHostname
    ? `https://${forwardedApiHost}`
  : 'http://localhost:8000'

export async function fetchCollection(endpoint) {
  const path = endpoint.startsWith('/api/')
    ? endpoint
    : `/api/${endpoint.replace(/^\/+|\/+$/g, '')}/`
  const response = await fetch(`${apiBaseUrl}${path}`)
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  const payload = await response.json()
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload.items)) return payload.items
  if (Array.isArray(payload.results)) return payload.results
  return []
}
