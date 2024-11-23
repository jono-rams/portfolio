import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-gray-900">
      <div className="container px-4 mx-auto sm:px-6">
        <div className="flex flex-col items-center text-xs sm:items-start md:text-left sm:text-left sm:text-sm md:text-lg">
          <p>Copyright &copy; 2024 Jonathan Rampersad</p>
        </div>
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="text-xs text-white sm:mb-0 sm:text-sm md:text-xl">
            <p>Powered by Next.js and Firebase</p>
          </div>
          <div className="text-xs text-white sm:text-left sm:text-sm md:text-xl">
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
                  className="inline-block align-middle md:h-6 md:w-6"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
