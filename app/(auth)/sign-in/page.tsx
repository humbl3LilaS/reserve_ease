import SignInForm from "@/features/sign-in/components/sign-in-form";

const SignInPage = () => {
    return (
        <section className={"h-dvh w-dvw md:w-vw md:h-vh"}>
            <div className={"w-full h-full flex flex-col items-center justify-center gap-y-4 "}>
                <header className={"w-full max-w-[560px] p-8 bg-white rounded-xl lg:p-10 "}>
                    <h1 className={"text-red-500"}>Sign In</h1>
                </header>
                <SignInForm />
            </div>
        </section>
    );
};

export default SignInPage;