import { useState, ReactNode } from "react";
// Import your components
import Footer from "../Footer/Footer";
import TopBanner from "../topbanner/TopBanner";
import MenuBanner from "../MenuBanner/MenuBanner";
import SecondBanner from "../SecondBanner/SecondBanner";
import './header.css'
import ToastNotification from "../Helpers/ToastNotification";

interface LayoutProps {
    children: ReactNode;
    childrenClasses?: string;
}

export default function Layout({ children, childrenClasses }: LayoutProps) {
    const [drawer, setDrawer] = useState(false);

    return (
        <>

            <div className="w-full overflow-x-hidden">
                <div className="header">
                    <TopBanner />
                    <SecondBanner />
                    <MenuBanner />
                </div>

                <div className={`w-full ${childrenClasses || "pt-[30px] pb-[60px]"}`}>
                    {children}
                </div>

                <Footer />
                <ToastNotification />
            </div>
        </>
    );
}
