import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/components/mobile-menu";
import {BookMarked, HomeIcon, UtensilsCrossed} from "lucide-react";
import {Button} from "@/components/ui/button";
import {redirect} from "next/navigation";
import {auth, signOut} from "@/auth";

const Header = async () => {
    const session = await auth();
    return (
        <header
            className={"w-dvw md:w-vw h-20 px-6 flex items-center justify-between relative z-30 md:justify-start  md:gap-x-20 md:px-10"}>
            <Link href="/">
                <Image src="/logo.svg" alt="Logo" width={40} height={40}/>
            </Link>
            <nav className={"hidden md:block"}>
                <ul className={"flex items-center gap-x-10 text-white lg:gap-x-14"}>
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

            <div className={"hidden ml-auto md:block"}>
                <Button className={"mr-8 bg-green-600 shadow-none"}
                        onClick={async () => {
                            "use server"
                            redirect("/reservations")
                        }}
                >
                    Find a table
                </Button>

                {/*Todo: replace with profile button*/}
                {session && <Button onClick={async () => {
                    "use server"
                    await signOut();
                }}>
                    Logout
                </Button>}
            </div>

            <MobileMenu/>
        </header>
    );
};

export default Header;