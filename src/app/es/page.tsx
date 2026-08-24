import type { Metadata } from 'next'
import Home from '../home'

// `/es/` keeps resolving for inbound links; `/` is the canonical home now that
// the site is Spanish only.
export const metadata: Metadata = { alternates: { canonical: '/' } }

export default function Page() {
  return <Home />
}
