
export const metadata = {
    title: "Resume | Sparsh's Portfolio",
    description: 'Explore my resume, my academic and professional qualifications, my interests and so on.',
    keywords: "sparsh's portfolio, sparsh's resume, sparsh's cv, sparsh's skills, sparsh's contact",
    author: 'Sparsh Pandya',
    openGraph: {
        title: "Resume | Sparsh's Portfolio",
        description: 'Explore my resume, my academic and professional qualifications, my interests and so on.'
    }
}

export default function Resume() {
    return (
        <div data-scroll-index="4" id="resume">

            <div className="resume-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                    <i className="fal fa-folder-open text-theme"></i>
                    RESUME
                </div>
                <div className="mb-8 mt-7 md:my-10 section-title">
                    <h2
                        className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                        Work <span className="font-semibold text-theme">Experience</span>
                    </h2>
                </div>

                <div className="experience">
                    <ul
                        className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2 *:p-5 *:border *:rounded-xl md:*:flex max-md:*:space-y-2 *:border-platinum dark:*:border-metalBlack md:*:border-0 md:*:p-0 md:*:rounded-none">
                        <li>
                            <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                                <h6
                                    className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                                    Envato Market
                                </h6>
                                <p className="text-[13px] md:text-sm text-theme">
                                    Mar, 2022 - Current
                                </p>
                            </div>
                            <div
                                className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4
                                    className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    Lead UX Designer
                                </h4>
                                <p>
                                    Owing to advancements in product other designer technologies aute voluptate.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <br />
                <div className="mb-8 mt-7 md:my-10 section-title">
                    <h2
                        className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                        My <span className="font-semibold text-theme">Education</span>
                    </h2>
                </div>

                <div className="experience">
                    <ul
                        className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2 *:p-5 *:border *:rounded-xl md:*:flex max-md:*:space-y-2 *:border-platinum dark:*:border-metalBlack md:*:border-0 md:*:p-0 md:*:rounded-none">
                        <li>
                            <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                                <h6
                                    className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                                    Gujarat Technological University
                                </h6>
                                <p className="text-[13px] md:text-sm text-theme">
                                    2019-2022
                                </p>
                            </div>
                            <div
                                className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4
                                    className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    Diploma in Computer Engineering
                                </h4>
                                <p>
                                    Ahmedabad, Gujarat, India
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                                <h6
                                    className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                                    Conestoga College
                                </h6>
                                <p className="text-[13px] md:text-sm text-theme">
                                    2023 - 2024
                                </p>
                            </div>
                            <div
                                className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                                <h4
                                    className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                                    Post Graduate Diploma In Web Development
                                </h4>
                                <p>
                                    Waterloo, Ontario, Canada
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}