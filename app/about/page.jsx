import "./About.css";

import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import Closing from "./Closing";

export const metadata = {
  title: "About Me",
}

export default function About() {
  return (
    <div className="container about-me">
      <header className="mb-4 text-center">
        <h1 className="pb-2">About Me</h1>
        <h1 className="catch">
          Problem-Solver. Quick Learner. Passionate Programmer.
        </h1>
      </header>

      <main>
        <Intro />

        <Skills />

        <Projects />

        <Closing />
      </main>
    </div>
  );
}