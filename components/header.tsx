import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/components/mobile-menu";
import {BookMarked, HomeIcon, UtensilsCrossed} from "lucide-react";
import {Button} from "@/components/ui/button";

const Header = () => {
    return (
        <header className={"w-dvw md:w-vw h-20 px-6 flex items-center  gap-x-20 bg-slate-400 md:px-10"}>
            <Link href="/">
                <Image src="/logo.svg" alt="Logo" width={40} height={40}/>
            </Link>
            <nav className={"hidden md:block"}>
                <ul className={"flex items-center gap-x-10 lg:gap-x-14"}>
                    <li className={"py-2"}>
                        <Link
                            href="/"
                            className={"flex items-center justify-center gap-x-2"}
                        >
                            <HomeIcon className={"hidden size-5 lg:block"}/>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/restaurants"
                            className={"flex items-center gap-x-2"}
                        >
                            <UtensilsCrossed className={"hidden size-5 lg:block"}/>
                            <span>
                                    Restaurants
                                </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/reservations"
                            className={"flex items-center gap-x-2"}
                        >
                            <BookMarked className={"hidden size-5 lg:block"}/>
                            <span>
                                    Reservations
                                </span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <Button className={"ml-auto bg-green-600 shadow-none"}>
                Find a table
            </Button>

            <MobileMenu/>
        </header>
    );
};

export default Header;