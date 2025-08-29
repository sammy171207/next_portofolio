import { social } from "@/types/main";
import Link from "next/link";
import * as Fa from 'react-icons/fa6';
import React from "react";

const Socials = ({ socials }: { socials: social[] }) => {
    return (
        <div className="hidden xl:flex flex-col gap-5 fixed top-1/2 -translate-y-1/2 left-10 z-20">
            {socials.map((s: social) => (
                <Link href={s.link} target="_blank" rel="noreferrer" key={s.icon} className="grid place-items-center p-3 rounded-full bg-gray-200 dark:bg-grey-800 text-2xl hover:text-violet-600 hover:dark:text-violet-600 text-gray-500 dark:text-gray-300  transition-colors">
                    {
                        // @ts-ignore
                        React.createElement(Fa[`${s.icon}`])
                    }
                </Link>
            ))}
        </div>
    )
}

export default Socials