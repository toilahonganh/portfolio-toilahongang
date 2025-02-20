import Link from "next/link";
import { TextsShared } from "../shared";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex w-full h-16 items-center justify-between bg-bannerBgColor px-5 md:px-20 md:py-10">
            {/* Logo bên trái ngoài cùng */}
            <div>
                <Link href="/">
                    <Image 
                        src="/next.svg" 
                        width={80} 
                        height={80} 
                        alt="Logo"
                    />
                </Link>
            </div>

            {/* Navigation giữa */}
            <nav className="flex space-x-8 text-black">
                {Object.entries(TextsShared.Header).map(([key, value]) => (
                    <Link key={key} href={value}>
                        <p className="cursor-pointer hover:underline">{key}</p>
                    </Link>
                ))}
            </nav>

            {/* Toggle Theme nằm ngoài cùng bên phải */}
            <div>
                <ThemeToggle />
            </div>
        </header>
    );
}
