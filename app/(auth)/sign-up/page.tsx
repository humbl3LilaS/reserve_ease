import SignUpForm from "@/features/sign-up/components/sign-up-form";

const SignUpPage = () => {
    return (

        <section className={"h-dvh w-dvw md:w-vw md:h-vh"}>

            <div className={"w-full h-full flex flex-col items-center justify-center gap-y-4 "}>
                <header className={"w-full max-w-[560px] p-8 bg-white rounded-xl lg:p-10 "}>
                    <h1>Sign Up</h1>
                </header>
                <SignUpForm/>
            </div>
        </section>
    );
};

export default SignUpPage;