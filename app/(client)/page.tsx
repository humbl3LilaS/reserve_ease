import {auth} from "@/auth";
import Hero from "@/components/hero";

const HomePage = async () => {
    const session = await auth();
    return (
        <>
            <Hero/>
        </>
    );
}

export default HomePage;
