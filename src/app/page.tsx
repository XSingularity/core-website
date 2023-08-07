import Image from 'next/image'
import Intro from "./components/intro";
import Team from "./components/team";
import Timeline from "./components/timeline";
import Contact from "./components/contact";
export default function Home() {
  return (
<main>
<Intro/>
<Team/>
<Timeline/>
<Contact/>
</main>
  )
}

