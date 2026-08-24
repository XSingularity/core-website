import Script from 'next/script'
import Header from './components/header'
import Hero from './components/hero'
import Termometro from './components/termometro'
import Sintomas from './components/sintomas'
import Calculadora from './components/calculadora'
import DemoLuz from './components/demo-luz'
import Como from './components/como'
import Longevidad from './components/longevidad'
import Diagnostico from './components/diagnostico'
import Precios, { Preguntas } from './components/precios'
import Transparencia from './components/transparencia'
import Portfolio from './components/portfolio'
import Team from './components/team'
import Contact from './components/contact'

/**
 * Reading order follows the research hierarchy (PRODUCT.md): the owner's
 * reality → what it costs → the promise → proof → the free first step →
 * prices → transparency → work → people → conversation.
 */
export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q7L8F1MPXW" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q7L8F1MPXW');`}
      </Script>
      <Hero />
      <Termometro />
      <Sintomas />
      <Calculadora />
      <DemoLuz />
      <Como />
      <Longevidad />
      <Diagnostico />
      <Precios />
      <Preguntas />
      <Transparencia />
      <Portfolio />
      <Team />
      <Contact />
    </main>
  )
}
