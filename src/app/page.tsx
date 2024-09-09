import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home | Sparsh's Portfolio",
  description: 'Get to know about my role in programming, my job preferences and availibility and connect with me.',
  keywords: "sparsh's portfolio, sparsh's role, sparsh's preferences, sparsh's image, hire sparsh",
  author: 'Sparsh Pandya',
  openGraph: {
      title: "Home | Sparsh's Portfolio",
      description: 'Get to know about my programming role, job preferences and availibility and connect with me.'
  }
}

export default function Home() {
  return (
    <div data-scroll-index="0" id="home">

      <div className="hero-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-home text-theme"></i>
          INTRODUCE
        </div>
        <div className="items-center gap-6 hero-content md:flex xl:gap-10">
          <div className="text-content pt-7 lg:pt-8 max-lg:max-w-[30rem]">
            <h1
              className="text-[32px] lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold text-black dark:text-white leading-1.27 lg:leading-1.27 xl:leading-1.27 2xl:leading-1.27 mb-4 lg:mb-5">
              Hello I'm Sparsh <br />
              <span className="text-theme">Full-stack Developer</span>
            </h1>
            <p>
              I am a <span className="font-medium text-black dark:text-white/90">Full-stack Developer</span> at heart and, i create features that are best suited for the job at hand.
            </p>
            <ul className="flex items-center mt-4 -mx-3 lg:mt-5 *:flex *:items-center *:mx-3 *:text-regular">
              <li>
                <i className="mr-2 fal fa-check-double text-theme"></i>
                Available for work
              </li>
              <li>
                <i className="mr-2 fal fa-check-double text-theme"></i>
                Full Time Job
              </li>
            </ul>
            <ul className="mt-7 buttons">
              <li data-scroll-nav="8">
                <Link href='/contact-me'
                  className="btn-theme inline-flex items-center gap-2 bg-theme py-4 md:py-4.5 lg:px-9 px-7 rounded-4xl leading-none transition-all duration-300 hover:shadow-theme_shadow text-white font-medium text-[15px] md:text-base">
                  <i className="fal fa-paper-plane"></i>
                  HIRE ME
                </Link>
              </li>
            </ul>

          </div>
          <div className="hero-image flex-[0_0_20.3rem] max-md:hidden">
            <img
              src="/img/hero-img-1.png"
              className="dark:hidden"
              alt="Hero Image - Light Mode" />
            <img
              src="/img/author-b&w.jpg"
              className="hidden dark:block"
              alt="Hero Image - Dark Mode" />
          </div>
        </div>
        <div className="mb-2 mt-14 xl:mb-0 xl:mt-20">
          <div className="items-center grid-cols-12 overflow-hidden md:grid">
            <div className="hidden col-span-2 md:inline-block">
              <h6
                className="font-medium text-black dark:text-white/80 text-sm md:max-w-[8rem] border-l border-theme pl-4">
                Trusted companies
              </h6>
            </div>
            <div className="col-span-10 logo-slider">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="#"
                      className="transition duration-200 flex-center">
                      <img src="/img/partners/logo1.svg" alt="Partner Name" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#"
                      className="transition duration-200 flex-center">
                      <img src="/img/partners/logo2.svg" alt="Partner Name" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#"
                      className="transition duration-200 flex-center">
                      <img src="/img/partners/logo3.svg" alt="Partner Name" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#"
                      className="transition duration-200 flex-center">
                      <img src="/img/partners/logo4.svg" alt="Partner Name" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#"
                      className="transition duration-200 flex-center">
                      <img src="/img/partners/logo2.svg" alt="Partner Name" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#"
                      className="transition duration-200 flex-center">
                      <img src="/img/partners/logo4.svg" alt="Partner Name" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#"
                      className="transition duration-200 flex-center">
                      <img src="/img/partners/logo2.svg" alt="Partner Name" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#"
                      className="transition duration-200 flex-center">
                      <img src="/img/partners/logo4.svg" alt="Partner Name" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#"
                      className="transition duration-200 flex-center">
                      <img src="/img/partners/logo2.svg" alt="Partner Name" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
