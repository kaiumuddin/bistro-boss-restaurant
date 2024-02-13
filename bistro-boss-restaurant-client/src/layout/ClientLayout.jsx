import Footer2 from "@/components/Footer2";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export default function ClientLayout() {
    return (
        <>
            <Navbar />
            <Outlet></Outlet>
            <Footer2 />
        </>
    );
}
