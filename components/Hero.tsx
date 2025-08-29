import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Link as ScrollLink } from 'react-scroll'
import Typewriter from 'typewriter-effect';
import { IoIosArrowForward } from 'react-icons/io';
import wavingHand from '@/public/waving-hand.gif';
import { main } from '@/types/main';

interface HeroProps {
    mainData: main
}

const Hero = ({ mainData }: HeroProps) => {

    const { theme } = useTheme()
    const { name, titles, heroImage, shortDesc, techStackImages ,resumeUrl} = mainData

    return (
        <section
           suppressHydrationWarning
            id='home' className={`${theme === 'dark' && "bg-grey-900"} relative min-h-screen w-full mx-auto overflow-hidden`}>

            <div className="absolute -z-10 min-h-screen h-full w-full">
                <Image
                    src="/herobgc.jpg"
                    layout="fill"
                    objectFit="cover"
                    loading='lazy'
                    className='object-bottom'
                    quality={100} alt={''} />
            </div>

            <div className="py-16 lg:py-48 flex flex-col-reverse lg:flex-row justify-around gap-10 lg:gap-0">

                <div className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-4 md:mx-6 xl:mx-0">
                    <div className="flex items-center gap-1">
                        <Image unoptimized={true} alt='waving-hand' width={30} height={30} src={wavingHand} />
                        <p className="text-lg md:text-xl mt-2 md:mt-1.5">
                            Hey
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold relative">
                        I&apos;m {name}
                    </h1>
                    <div className="flex flex-row items-start md:items-center gap-1.5">
                        <h2 className="text-lg md:text-2xl">
                            I am into
                        </h2>
                        <Typewriter
                            options={{
                                strings: titles,
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                                delay: 50,
                                wrapperClassName: "text-violet-700 dark:text-violet-600 text-lg md:text-2xl font-medium",
                                cursorClassName: "text-violet-700 dark:text-violet-600 text-lg md:text-2xl"
                            }}
                        />
                    </div>

                    <p className='text-sm md:text-base text-gray-600 dark:text-gray-300'>
                        {shortDesc}
                    </p>

                    {/* <a href="https://sppuprep.tech" target="_blank" rel="noopener noreferrer" className="relative whitespace-nowrap before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500 before:bg-violet-300 dark:before:bg-violet-600">
                        <span className="relative">SPPU Prep</span>
                    </a> */}

                    <div className="flex gap-3 mt-4 justify-start lg:justify-start">
                        <ScrollLink
                            className="w-fit text-sm md:text-base py-2 px-4 cursor-pointer flex items-center gap-1 rounded-md bg-violet-600 hover:bg-violet-700 dark:bg-violet-700 hover:dark:bg-violet-800 transition-colors group text-white"
                            to={'about'}
                            offset={-60}
                            smooth={true}
                            duration={500}
                            isDynamic={true}
                        >
                            About Me
                            <IoIosArrowForward className='group-hover:translate-x-1 transition-transform' />
                        </ScrollLink>

                        <a
                            href={mainData.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit text-sm md:text-base py-2 px-4 cursor-pointer flex items-center gap-1 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 hover:dark:bg-gray-600 transition-colors group text-black dark:text-white"
                        >
                            Resume
                            <IoIosArrowForward className='group-hover:translate-x-1 transition-transform' />
                        </a>
                    </div>


                </div>

                <div className="relative mx-auto lg:mx-0 mt-12 md:mt-16 lg:mt-0">
                    <div className="w-56 h-56 md:w-80 md:h-80 lg:-translate-x-16">
                        <Image alt='avatar' width={1000} height={1000} className="rounded-full w-full h-full object-cover" src={heroImage} />
                    </div>

                    <div className="absolute grid -top-6 -left-12 lg:-top-14 lg:-left-32 w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-grey-800 rounded-full place-items-center hover:shadow-lg transition-shadow">
                        <Image alt='tech-stack' className="h-8 w-8 md:h-10 md:w-10 object-cover" src={techStackImages[0]} width={100} height={100} />
                    </div>
                    <div className="absolute grid top-0 -right-12 lg:-right-4 w-14 h-14 bg-white dark:bg-grey-800 rounded-full place-items-center hover:shadow-lg transition-shadow">
                        <Image alt='tech-stack' className="h-8 w-8 md:h-10 md:w-10 object-cover" src={techStackImages[1]} width={100} height={100} />
                    </div>
                    <div className="absolute grid bottom-[4rem] md:bottom-24 -right-16 md:-right-20 lg:bottom-[8.5rem] lg:-right-12 w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-grey-800 rounded-full place-items-center hover:shadow-lg transition-shadow">
                        <Image alt='tech-stack' className="h-6 w-6 md:h-10 md:w-10 object-cover" src={techStackImages[2]} width={100} height={100} />
                    </div>
                    <div className="absolute grid -bottom-10 -right-8 lg:-bottom-0 lg:right-6 w-14 md:w-16 h-14 md:h-16 bg-white dark:bg-grey-800 rounded-full place-items-center hover:shadow-lg transition-shadow">
                        <Image alt='tech-stack' className="h-10 w-10 object-cover" src={techStackImages[3]} width={100} height={100} />
                    </div>
                </div>

            </div>

            <defs>
                <linearGradient id="a" x1="56.392" y1="0" x2="189.028" y2="2.312" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2D88E2" />
                    <stop offset="1" stopColor="#36EC74" />
                </linearGradient>
            </defs>
        </section>
    )
}

export default Hero