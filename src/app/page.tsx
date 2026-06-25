import React from "react";
import Script from "next/script";
import Header from "./components/header";
import Intro from "./components/intro";
import Team from "./components/team";
import Workflow from "./components/workflow";
import Contact from "./components/contact";
import Tech from "./components/tech";
import Services from "./components/services";

export default function Home() {
  return (
    <main>
      <Header />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q7L8F1MPXW" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Q7L8F1MPXW');
        `}
      </Script>
      <Intro />
      <Tech />
      <div id="Workflow"><Workflow /></div>
      <div id="Team"><Team /></div>
      <div id="Services"><Services /></div>
      <div id="Contact"><Contact /></div>
    </main>
  );
}
