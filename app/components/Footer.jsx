import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bottom-0 w-full py-4 bg-gray-900">
      <div className="container px-4 mx-auto sm:px-6">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="mb-2 text-white sm:mb-0">
            <p>Powered by Next.js and Firebase</p>
          </div>
          <div className="flex flex-col items-center space-y-2 sm:flex sm:space-y-0 sm:space-x-4">
            <div className="text-center text-white sm:text-left">
              <p>
                Code for this site can be found on{" "}
                <a
                  href="https://github.com/jono-rams/portfolio"
                  className="text-white"
                  target="_blank"
                >
                  GitHub{" "}
                  <Image
                    src="/github-logo.svg"
                    alt="GitHub"
                    width={20}
                    height={20}
                    className="inline-block w-6 h-6 align-middle"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}