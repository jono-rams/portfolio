export default function Intro() {
  return (
    <section id="intro" className="mb-5 intro text-center">
      <p className="text-center about-opening">
        Fueled by a passion for game development, I embarked on a programming
        journey that began with mastering the intricacies of C++. This low-level
        foundation, demanding both problem-solving skills and a deep
        understanding of core programming concepts, has equipped me to rapidly
        learn and adapt to new languages and technologies. Today, I&#39;m a
        versatile programmer eager to tackle complex challenges and bring
        creative ideas to life through code.
      </p>

      <a
        href="https://firebasestorage.googleapis.com/v0/b/portfolio-21255.appspot.com/o/docs%2FResume.pdf?alt=media&token=4395395e-95af-4909-b79e-a806a0d84a22"
        target="_blank"
        rel="noopener noreferrer"
        download="Jonathan_Rampersad_Resume.pdf"
        className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 mt-8 text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download My Resume
      </a>
    </section>
  );
}
