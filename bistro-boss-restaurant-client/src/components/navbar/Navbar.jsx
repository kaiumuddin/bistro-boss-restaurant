import { ModeToggle } from "../theme/mode-toggle";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LayxGyFj3I1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import {
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenu,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

export default function Navbar() {
    return (
        <header className="fixed z-50 w-full backdrop-blur-sm">
            <div className="container flex h-20 w-full shrink-0 items-center">
                <a className="mr-6 hidden lg:flex" href="#">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Restaurant Name</span>
                </a>
                <div className="flex w-full justify-center">
                    <NavigationMenu className="hidden lg:flex">
                        <NavigationMenuList>
                            <NavigationMenuLink asChild>
                                <Button variant="link">Home</Button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Button variant="link">Menu</Button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Button variant="link">About Us</Button>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Button variant="link">Contact</Button>
                            </NavigationMenuLink>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="ml-auto flex items-center justify-center gap-4">
                    <a
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="#"
                    >
                        <FacebookIcon className="h-6 w-6" />
                    </a>
                    <a
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="#"
                    >
                        <TwitterIcon className="h-6 w-6" />
                    </a>
                    <a
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href="#"
                    >
                        <InstagramIcon className="h-6 w-6" />
                    </a>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}

function FacebookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function InstagramIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

function TwitterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}
