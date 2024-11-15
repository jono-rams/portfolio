export default function Projects() {
  return (
    <section id="projects" className="mb-4 projs">
      <h2 className="py-3 text-center">Project Highlights</h2>
      <div>
        <article className="mb-3">
          <a href="https://github.com/jono-rams/rt-chatroom" target="_blank">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">
                  Realtime Chatroom (JavaScript, Firebase)
                </h3>
                <p className="card-text">
                  Developed a dynamic chat application with multiple channels,
                  allowing users to communicate in real-time. Implemented
                  Firebase Firestore for efficient chat storage and retrieval,
                  ensuring seamless user interactions.
                </p>
              </div>
            </div>
          </a>
        </article>

        <article className="mb-3">
          <a
            href="https://github.com/jono-rams/Taxi-Booking-System"
            target="_blank"
          >
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">
                  Taxi Booking System (Python, SQLite3)
                </h3>
                <p className="card-text">
                  Built a comprehensive taxi booking platform featuring user
                  roles for customers, drivers, and administrators. Utilized
                  SQLite3 for data management and implemented user
                  authentication and booking functionalities.
                </p>
              </div>
            </div>
          </a>
        </article>

        <article className="mb-3">
          <a href="https://github.com/jono-rams/weather-js" target="_blank">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">
                  Weather Website (JavaScript, Bootstrap, AccuWeather API)
                </h3>
                <p className="card-text">
                  Created a user-friendly website that provides current weather
                  conditions for any city, styled with Bootstrap and utilizing
                  AccuWeather's API for accurate and up-to-date data.
                </p>
              </div>
            </div>
          </a>
        </article>

        <article className="mb-3">
          <a href="https://github.com/jono-rams/magic-memory" target="_blank">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Memory Match Game (React)</h3>
                <p className="card-text">
                  Designed an engaging memory match game using React, showcasing
                  my ability to create interactive and visually appealing web
                  applications.
                </p>
              </div>
            </div>
          </a>
        </article>

        <article className="mb-3">
          <a href="https://github.com/jono-rams/Enigma" target="_blank">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Enigma Machine Recreation (C++)</h3>
                <p className="card-text">
                  Replicated the functionality of the Enigma machine,
                  demonstrating proficiency in C++ and a passion for historical
                  cryptography.
                </p>
              </div>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
}
