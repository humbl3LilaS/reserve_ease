import {auth} from "@/auth";

const HomePage = async () => {
    const session = await auth();
    console.log("session", session);
    return (
        <h1 className={"text-4xl text-green-500"}>Reserve Ease</h1>
    );
}

export default HomePage;
