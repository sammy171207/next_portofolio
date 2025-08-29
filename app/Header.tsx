import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { FaNodeJs } from 'react-icons/fa6'

const Header = ({ logo }: { logo: string }) => {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <header className="w-full flex items-center justify-between h-20 border-b border-gray-200 dark:border-grey-800 bg-white dark:bg-grey-900 px-6 md:px-10 lg:px-16 xl:px-24 sticky top-0 z-20">
            <Link href={'/'} className="font-bold text-xl md:text-2xl flex items-center gap-2">
                <FaNodeJs className="text-violet-600" />
                {logo}
            </Link>

            <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-10 h-10 p-3 bg-gray-200 rounded-full dark:bg-grey-800 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all duration-300"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <BiSun /> : <BiMoon />}
            </button>
        </header>
    )
}

export default Header