"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function AuthHeader() {

    const navLinks = [
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' },
    ];


    const pathName = usePathname();

    console.log("Current Pathname:", pathName);


    return (
        <header className="bg-gray-800 text-white p-4">

            <nav className="container mx-auto flex justify-center items-center gap-8">
                <ul className="flex justify-center items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathName === link.href || (pathName.startsWith(link.href) && link.href !== '/');

                        return (
                            <li key={link.href}>
                                <Link href={link.href} className={isActive ? "text-red-600 font-bold" : "font-normal"}> {link.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

        </header>
    )
}