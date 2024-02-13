/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qHISFx2umov
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function Footer2() {
    return (
        <footer className="bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground py-8">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                        Contact Information
                    </h3>
                    <p className="text-sm">
                        123 Main St.
                        <br />
                        Anytown, USA 12345
                        <br />
                        Phone: (123) 456-7890
                        <br />
                        Email: info@restaurant.com
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#">
                            <FacebookIcon className="h-6 w-6" />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="#">
                            <InstagramIcon className="h-6 w-6" />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="#">
                            <TwitterIcon className="h-6 w-6" />
                            <span className="sr-only">Twitter</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <nav className="space-x-3 text-sm">
                        <a className="hover:underline" href="#">
                            Menu
                        </a>
                        <a className="hover:underline" href="#">
                            About Us
                        </a>
                        <a className="hover:underline" href="#">
                            Contact Us
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
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
