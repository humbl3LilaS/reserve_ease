import {ReactNode} from "react";

const ClientLayout = ({children}:{children:ReactNode}) => {
    return (
        <>
         <header>Main header</header>
         <main>{children}</main>
        </>
    );
};

export default ClientLayout;
