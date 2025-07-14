"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    text: string;
    link: string;
}

export default function NavLink({ text, link }: NavLinkProps) {
    const pathname = usePathname();

    const isActive = pathname === link;

    return (
        <Link
            href={link}
            className={`
                relative text-black transition-colors duration-300
                after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-white
                after:transition-transform after:duration-300 after:ease-in-out
                ${isActive
                    ? "after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                }
            `}
        >
            {text}
        </Link>
    );
}
