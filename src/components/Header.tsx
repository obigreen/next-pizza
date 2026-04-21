import Link from "next/link";
import {Menu} from "@/src/components/Menu";

export function Header() {
    return (
        <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between bg-black">
            <Link href="/" className='flex items-center gap-3'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.656l-5.214-6.817-5.963 6.817H1.686l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
            </Link>

            <Menu/>
        </header>


    )
}