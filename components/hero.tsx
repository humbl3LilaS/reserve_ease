import Header from "@/components/header";
import Image from "next/image";

const Hero = () => {
    return (

        <section className="relative z-20">
            <Header/>
            <div className="relative py-16 text-center text-white z-30 md:py-36 lg:py-64">
                <p className={"font-bold tracking-wide uppercase lg:text-2xl"}>
                    Book your table
                </p>
                <p className={"mt-4 text-3xl font-extrabold tracking-wider uppercase lg:text-6xl"}>
                    reservations
                </p>
            </div>
            <div className={"absolute inset-0 z-10 block w-full h-full"}>
                {/*Todo: add image scrolling per second using animations*/}
                <Image
                    src={"/images/bg-3.jpg"}
                    alt={"background"}
                    width={1440}
                    height={400}
                    className={"grayscale w-full h-full"}
                />
            </div>
        </section>
    );
};

export default Hero;