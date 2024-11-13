import "./About.css";

import Intro from "./about/Intro";
import Skills from "./about/Skills";
import Projects from "./about/Projects";
import Closing from "./about/Closing";

export default function About() {
  return (
    <div className="container about-me">
      <header className="text-center mb-4">
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
