import { project } from "@/types/main";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe, FaVideo } from "react-icons/fa6"
import { MdArticle } from "react-icons/md";

const ProjectCard = ({ name, image, category, techstack, links }: project) => {
    return (
        <div className="w-full bg-white dark:bg-grey-800 border border-gray-200 dark:border-grey-600 rounded-lg shadow-sm">
            <Link href={links.visit ? links.visit : links.code} target="_blank">
                <Image className="rounded-t-lg w-full h-48 object-cover object-center" src={image} alt={name} width={500} height={300} />
            </Link>
            <div className="p-5">
                <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{techstack}</p>
                    <p className="px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-xs font-semibold">{category}</p>
                </div>
                <h5 className="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <div className="flex items-center gap-3 mt-4">
                    {links.code && <Link href={links.code} target="_blank" className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 hover:dark:text-violet-600 transition-colors">
                        <FaGithub />
                        <p>Code</p>
                    </Link>}
                    {/* {links.video && <Link href={links.video} target="_blank" className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 hover:dark:text-violet-600 transition-colors">
                        <FaVideo />
                        <p>Video</p>
                    </Link>} */}
                       {links.visit && <Link href={links.visit} target="_blank" className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 hover:dark:text-violet-600 transition-colors">
                        <FaGlobe />
                        <p>Live</p>
                    </Link>}
                    {links.article && <Link href={links.article} target="_blank" className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 hover:dark:text-violet-600 transition-colors">
                        <MdArticle />
                        <p>Article</p>
                    </Link>}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard