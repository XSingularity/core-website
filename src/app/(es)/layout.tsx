import '../styles/globals.css'
import type { Metadata } from 'next'
import SiteShell, { metadataFor } from '../shell'

export const metadata: Metadata = metadataFor('es')
export { viewport } from '../shell'

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="es">{children}</SiteShell>
}
