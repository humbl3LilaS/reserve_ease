import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {AlignJustify, BookMarked, HomeIcon, UtensilsCrossed} from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {

    return (
        <Sheet>
            <SheetTrigger asChild={true} className={"md:hidden"}>
                <Button>
                    <AlignJustify size="md"/>
                </Button>
            </SheetTrigger>
            <SheetContent className={" flex items-start justify-center"}>
                <nav className={"w-full mt-20"}>
                    <ul className={"flex flex-col gap-y-10 justify-center items-center"}>
                        <li className={"py-2"}>
                            <Link
                                href="/"
                                className={"flex items-center justify-center gap-x-3"}
                            >
                                <HomeIcon/>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/restaurants"
                                className={"flex items-center gap-x-3"}
                            >
                                <UtensilsCrossed/>
                                <span>
                                    Restaurants
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/reservations"
                                className={"flex items-center gap-x-3"}
                            >
                                <BookMarked/>
                                <span>
                                    Reservations
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileMenu;