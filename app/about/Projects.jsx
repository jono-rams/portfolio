import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="mb-4 projs">
      <h2 className="py-3 text-4xl font-bold text-center">
        Project Highlights
      </h2>
      <div>
        <article className="mb-3">
          <a href="https://github.com/jono-rams/rt-chatroom" target="_blank">
            <div className="card">
              <fieldset className="card-body">
                <legend className="text-xl lg:text-3xl card-title">
                  Realtime Chatroom (JavaScript, Firebase)
                </legend>
                <p className="text-lg lg:text-2xl card-text">
                  Developed a dynamic chat application with multiple channels,
                  allowing users to communicate in real-time. Implemented
                  Firebase Firestore for efficient chat storage and retrieval,
                  ensuring seamless user interactions.
                </p>
              </fieldset>
              <Image 
                className="external-link-icon" 
                src="/external-link.svg" 
                alt="External Link" 
                width={24} 
                height={24}
              />
            </div>
          </a>
        </article>

        <article className="mb-3">
          <a
            href="https://github.com/jono-rams/Taxi-Booking-System"
            target="_blank"
          >
            <div className="card">
              <fieldset className="card-body">
                <legend className="text-xl lg:text-3xl card-title">
                  Taxi Booking System (Python, SQLite3)
                </legend>
                <p className="text-lg lg:text-2xl card-text">
                  Built a comprehensive taxi booking platform featuring user
                  roles for customers, drivers, and administrators. Utilized
                  SQLite3 for data management and implemented user
                  authentication and booking functionalities.
                </p>
              </fieldset>
              <Image 
                className="external-link-icon" 
                src="/external-link.svg" 
                alt="External Link" 
                width={24} 
                height={24}
              />
            </div>
          </a>
        </article>

        <article className="mb-3">
          <a href="https://github.com/jono-rams/weather-js" target="_blank">
            <div className="card">
              <fieldset className="card-body">
                <legend className="text-xl lg:text-3xl card-title">
                  Weather Website (JavaScript, AccuWeather API)
                </legend>
                <p className="text-lg lg:text-2xl card-text">
                  Created a user-friendly website that provides current weather
                  conditions for any city, styled with Bootstrap and utilizing
                  AccuWeather&#39;s API for accurate and up-to-date data.
                </p>
              </fieldset>
              <Image 
                className="external-link-icon" 
                src="/external-link.svg" 
                alt="External Link" 
                width={24} 
                height={24}
              />
            </div>
          </a>
        </article>

        <article className="mb-3">
          <a href="https://github.com/jono-rams/magic-memory" target="_blank">
            <div className="card">
              <fieldset className="card-body">
                <legend className="text-xl lg:text-3xl card-title">
                  Memory Match Game (React)
                </legend>
                <p className="text-lg lg:text-2xl card-text">
                  Designed an engaging memory match game using React, showcasing
                  my ability to create interactive and visually appealing web
                  applications.
                </p>
              </fieldset>
              <Image 
                className="external-link-icon" 
                src="/external-link.svg" 
                alt="External Link" 
                width={24} 
                height={24}
              />
            </div>
          </a>
        </article>

        <article className="mb-3">
          <a href="https://github.com/jono-rams/wordle-api" target="_blank">
            <div className="card">
              <fieldset className="card-body">
                <legend className="text-xl lg:text-3xl card-title">
                  Wordle API (Hono)
                </legend>
                <p className="text-lg lg:text-2xl card-text">
                  Developed a Wordle API using Hono, deployed on Cloudflare
                  Workers for optimal performance and scalability. This API
                  allows developers to seamlessly integrate Wordle-like
                  functionality into their applications.
                </p>
              </fieldset>
              <Image 
                className="external-link-icon" 
                src="/external-link.svg" 
                alt="External Link" 
                width={24} 
                height={24}
              />
            </div>
          </a>
        </article>

        <article className="mb-3">
          <a href="https://github.com/jono-rams/Enigma" target="_blank">
            <div className="card">
              <fieldset className="card-body">
                <legend className="text-xl lg:text-3xl card-title">
                  Enigma Machine Recreation (C++)
                </legend>
                <p className="text-lg lg:text-2xl card-text">
                  Replicated the functionality of the Enigma machine,
                  demonstrating proficiency in C++ and a passion for historical
                  cryptography.
                </p>
              </fieldset>
              <Image 
                className="external-link-icon" 
                src="/external-link.svg" 
                alt="External Link" 
                width={24} 
                height={24}
              />
            </div>
          </a>
        </article>
      </div>
    </section>
  );
}
