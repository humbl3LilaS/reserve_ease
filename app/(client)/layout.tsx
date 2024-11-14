import {ReactNode} from "react";
import Header from "@/components/header";

const ClientLayout = ({children}:{children:ReactNode}) => {
    return (
        <>
         <Header/>
         <main>{children}</main>
        </>
    );
};

export default ClientLayout;
