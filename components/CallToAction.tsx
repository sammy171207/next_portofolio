import Link from "next/link"
import { FaGithub } from "react-icons/fa6"

const CallToAction = () => {
    return (
        <div className="w-full bg-violet-600">
            <div className="xl:max-w-6xl mx-auto md:mx-6 lg:mx-10 xl:mx-auto py-16 md:py-24 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold">See the source code</h2>
                <p className="text-lg mt-4">This portfolio is open source and you can see the source code on GitHub.</p>
                <Link href={'https://github.com/sammy171207'} target="_blank" className="mt-8 bg-white text-violet-600 px-6 py-3 rounded-md font-semibold text-lg inline-flex items-center gap-2"> <FaGithub /> See on GitHub</Link>
            </div>
        </div>
    )
}

export default CallToAction