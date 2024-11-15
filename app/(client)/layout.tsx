import {ReactNode} from "react";

const ClientLayout = ({children}:{children:ReactNode}) => {
    return (
        <>
         <main>{children}</main>
        </>
    );
};

export default ClientLayout;
