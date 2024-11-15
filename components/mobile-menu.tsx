import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {AlignJustify, BookMarked, HomeIcon, UtensilsCrossed} from "lucide-react";
import Link from "next/link";
import {auth} from "@/auth";

const MobileMenu = async () => {
    const session = await auth();

    return (
        <Sheet>
            <SheetTrigger asChild={true} className={"md:hidden"}>
                <Button>
                    <AlignJustify size="md"/>
                </Button>
            </SheetTrigger>
            <SheetContent className={"pb-10 flex flex-col items-start justify-between"}>
                <SheetTitle className={"sr-only"}>
                    Menu
                </SheetTitle>
                <nav className={"w-full px-6 mt-20"}>
                    <ul className={"flex flex-col gap-y-6"}>
                        <li>
                            <Link
                                href="/"
                                className={"py-2 flex items-center  gap-x-3"}
                            >
                                <HomeIcon/>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/restaurants"
                                className={"py-2 flex items-center gap-x-3"}
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
                                className={"py-2 flex items-center gap-x-3"}
                            >
                                <BookMarked/>
                                <span>
                                    Reservations
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={"w-full px-6 mt-auto"}>
                    Profile
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileMenu;