import '../styles/globals.css'
import type { Metadata } from 'next'
import SiteShell, { metadataFor } from '../shell'

export const metadata: Metadata = metadataFor('en')
export { viewport } from '../shell'

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>
}
