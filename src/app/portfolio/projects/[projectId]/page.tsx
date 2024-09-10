import { fetchProjectsById } from "@/actions/fetchProjects"
import Link from "next/link";

export const metadata = {
    title: "Project Details | Sparsh's Portfolio",
    description: "See my project's description, main technology, duration and all the technologies used in the project.",
    keywords: "sparsh's portfolio, sparsh's project details, sparsh's projects",
    author: 'Sparsh Pandya',
    openGraph: {
        title: "Project Details | Sparsh's Portfolio",
        description: "See my project's description, main technology, duration and all the technologies"
    }
}

export default async function ProjectDetails({ params }: { params: { projectId: string } }) {
    // converting the project id to the number
    const projectId: number = Number(params.projectId);
    const project = await fetchProjectsById(projectId);

    return (
        <div className="py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">

            {project && Object.keys(project).length > 0 ? (
                <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                        <i className="fal fa-tasks-alt text-theme"></i>
                        Project Details
                    </div>

                    <h2
                        className="text-2xl font-semibold leading-normal text-black dark:text-white mt-7 lg:mt-10 article-title lg:text-3xl lg:leading-normal">
                        {project.name}
                    </h2>
                    <div className="mb-4 overflow-hidden mt-7 xl:my-8 thumb rounded-xl xl:rounded-2xl">
                        <img src="/img/portfolio/portfolio-img1-xl.png" className="w-full"
                            alt="Project Thumbnail Image" />
                    </div>
                    <div className="post-meta sm:flex items-center justify-between my-8 mb-10 max-sm:space-y-3.5">
                        <div>
                            <h6 className="text-black dark:text-white">GITHUB LINK</h6>
                            <Link href={project.github}><p className="text-regular">Explore My Github</p></Link>
                        </div>
                        <div>
                            <h6 className="text-black dark:text-white">MAIN TECHNOLOGY</h6>
                            <p className="text-regular">{project.mainTech}</p>
                        </div>
                        <div>
                            <h6 className="text-black dark:text-white">DURATION</h6>
                            <p className="text-regular">{project.duration}</p>
                        </div>
                    </div>


                    <div>
                        <h3 className="mb-3 text-lg font-medium text-black dark:text-white xl:text-2xl">Project Description</h3>
                        {/* <p className="text-regular !leading-[2]">{project.description}</p> */}
                        <ul className="text-regular !leading-[2] list-disc ml-6 my-4">
                            {project.description && project.description.length > 0 ? (
                                project.description.map((desc: string) => {
                                    return <li>{desc}</li>
                                })
                            ): (<li>No Description Provided!</li>)}
                        </ul>

                        <div className="grid gap-5 my-8 sm:grid-cols-2 md:gap-8">
                            <div className="overflow-hidden rounded-xl xl:rounded-2xl">
                                <img src="/img/portfolio/portfolio-img1-2.png" className="w-full"
                                    alt="Project Inner Colum Image" />
                            </div>
                            <div className="overflow-hidden rounded-xl xl:rounded-2xl">
                                <img src="/img/portfolio/portfolio-img1-1.png" className="w-full"
                                    alt="Project Inner Colum Image" />
                            </div>
                        </div>

                        <h3 className="mt-12 mb-10 text-2xl font-medium text-black dark:text-white">Technologies</h3>
                        <div className="progressbar-wrap space-y-7">
                            {project.technologies && project.technologies.length > 0 ? (
                                project.technologies.map((tech: { name: string, image: string }) => {
                                    const { name, image } = tech;
                                    return (
                                        <div className="flex flex-wrap items-center gap-5 progressbar">
                                            <div className="w-8 icon">
                                                <img src="/img/skill/css.svg" alt="CSS3" />
                                            </div>
                                            <div className="flex-1 bar" data-percentage="80%">
                                                <h5 className="mb-2 text-black dark:text-white progress-title-holder text-regular">
                                                    <span className="progress-title">{name}</span>
                                                </h5>
                                                <div className="progress-outer bg-platinum dark:bg-greyBlack h-1.5 rounded-2xl">
                                                    <div className="progress-content bg-theme h-1.5 w-0 rounded-2xl"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : 'No Skills Found!'}

                        </div>
                    </div>
                </div>
            ) : "Couldn't Load Details! Try Again Later!"}

        </div>
    )
}