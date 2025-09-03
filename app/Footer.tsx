import { social } from "@/types/main";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Fa from 'react-icons/fa6';

export default function Footer({ socials, name }: { socials: social[], name: string }) {

    const { theme } = useTheme()

    return (
        <footer className="w-full bg-white dark:bg-grey-800 text-gray-500 dark:text-gray-300">
            <div className="xl:max-w-6xl mx-auto py-4 lg:py-6 flex flex-col gap-4 md:gap-0 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full md:w-auto">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Contact:</span>
                            <a href="tel:9595621476" className="text-violet-600 hover:underline">9595621476</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Email:</span>
                            <a href="mailto:sameerrandive558@gmail.com" className="text-violet-600 hover:underline">sameerrandive558@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <a href="https://www.linkedin.com/in/sameer-randive-a82073225/" target="_blank" rel="noreferrer" className="grid place-items-center p-2 rounded-full text-lg hover:bg-gray-100 hover:dark:bg-grey-900 transition-colors border border-gray-200 dark:border-grey-700">
                            {React.createElement(Fa.FaLinkedin)}
                        </a>
                        <a href="https://github.com/sammy171207" target="_blank" rel="noreferrer" className="grid place-items-center p-2 rounded-full text-lg hover:bg-gray-100 hover:dark:bg-grey-900 transition-colors border border-gray-200 dark:border-grey-700">
                            {React.createElement(Fa.FaGithub)}
                        </a>
                    </div>
                </div>
                <p className="text-sm text-center md:text-right mt-2 md:mt-0 w-full md:w-auto">Made with <span className="animate-pulse">❤️</span> by <span className="text-violet-600">{name}</span></p>
            </div>
        </footer>
    )
}