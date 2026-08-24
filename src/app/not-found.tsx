import Link from 'next/link'
import Singularity from './components/singularity'

export default function NotFound() {
  return (
    <main className="container flex flex-1 flex-col items-center justify-center py-24 text-center">
      <Singularity size={72} className="text-navy" />
      <h1 className="mt-8 font-display text-4xl font-extrabold md:text-5xl">Esta página no existe.</h1>
      <p className="mt-4 max-w-prose text-lg">Pero tu negocio sí. Vuelve al inicio y empieza por el diagnóstico gratis.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-md bg-navy px-6 py-3 font-display text-lg font-bold text-paper transition hover:bg-navy-soft"
      >
        Volver al inicio
      </Link>
    </main>
  )
}
