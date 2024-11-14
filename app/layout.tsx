import type {Metadata} from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "ReserveEase",
    description: "Reserve your dinner with an Ease",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={"bg-[#f1f1f1]"}>
        {children}
        </body>
        </html>
    );
}
