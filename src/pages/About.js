import "./About.css"

import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="container about-me">
      <header className="text-center mb-4">
        <h1 className='pb-2'>About Me</h1>
        <h1 className="catch">Problem-Solver. Quick Learner. Passionate Programmer.</h1>
      </header>

      <main>
        <section id="intro" className="mb-5 intro">
          <p className="about-opening text-center">Fueled by a passion for game development, I embarked on a programming journey that began with mastering the intricacies of C++. This low-level foundation, demanding both problem-solving skills and a deep understanding of core programming concepts, has equipped me to rapidly learn and adapt to new languages and technologies. Today, I'm a versatile programmer eager to tackle complex challenges and bring creative ideas to life through code.</p>
        </section>

        <section id="skills" className="mb-4">
          <h2 className="text-center pb-3">Technical Skills</h2>

          <div>
            <h3 className="text-center py-2">Languages</h3>
            <div className="row languages">
              <div className="col-md-4 d-flex justify-content-center">
                <ul>
                  <li>C/C++</li>
                  <li>Python</li>
                </ul>
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <ul>
                  <li>Dart</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <ul>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-center py-2">Frameworks</h3>
            <div className="row frameworks justify-content-center">
              <div className="col-md-4 d-flex justify-content-center">
                <ul>
                  <li>Flutter</li>
                </ul>
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <ul>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tools">
            <h3 className="py-2 text-center"> Tools & Technologies</h3>
            <ul>
              <li className="my-2">IDEs: VS Code, Visual Studio, PyCharm, Android Studio</li>
              <li className="my-2">Version Control: Git with GitHub (Actions & Rulesets)</li>
              <li className="my-2">Front-End Development: Bootstrap, Babel, Webpack</li>
              <li className="my-2">Backend as a Service: Firebase (Firestore, Auth, Hosting)</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="mb-4 projs">
          <h2 className="text-center py-3">Project Highlights</h2>
          <div>
            <div className="mb-3">
              <Link to="https://github.com/jono-rams/rt-chatroom" target="_blank">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Realtime Chatroom (JavaScript, Firebase)</h3>
                    <p className="card-text">Developed a dynamic chat application with multiple channels, allowing users to communicate in real-time. Implemented Firebase Firestore for efficient chat storage and retrieval, ensuring seamless user interactions.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mb-3">
              <Link to="https://github.com/jono-rams/Taxi-Booking-System" target="_blank">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Taxi Booking System (Python, SQLite3)</h3>
                    <p className="card-text">Built a comprehensive taxi booking platform featuring user roles for customers, drivers, and administrators. Utilized SQLite3 for data management and implemented user authentication and booking functionalities.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mb-3">
              <Link to="https://github.com/jono-rams/weather-js" target="_blank">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Weather Website (JavaScript, Bootstrap, AccuWeather API)</h3>
                    <p className="card-text">Created a user-friendly website that provides current weather conditions for any city, styled with Bootstrap and utilizing AccuWeather's API for accurate and up-to-date data.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mb-3">
              <Link to="https://github.com/jono-rams/magic-memory" target="_blank">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Memory Match Game (React)</h3>
                    <p className="card-text">Designed an engaging memory match game using React, showcasing my ability to create interactive and visually appealing web applications.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mb-3">
              <Link to="https://github.com/jono-rams/Enigma" target="_blank">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Enigma Machine Recreation (C++)</h3>
                    <p className="card-text">Replicated the functionality of the Enigma machine, demonstrating proficiency in C++ and a passion for historical cryptography.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section id="closing" className="pt-4">
          <p className="text-center">
            Beyond coding, I'm a friendly, selfless individual who thrives on collaboration and helping others succeed. While my dream is to become a game developer, I'm passionate about the entire programming field, from web development to mobile apps. I'm a lifelong learner, always eager to explore new languages, frameworks, and technologies.  I believe in the power of teamwork and never hesitate to ask questions or seek guidance. I'm excited about the future of programming and eager to contribute my skills and enthusiasm to innovative projects.
          </p>
        </section>

      </main>
      <footer></footer>
    </div>
  )
}
