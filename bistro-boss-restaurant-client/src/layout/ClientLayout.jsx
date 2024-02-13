import Footer2 from "@/components/footer/Footer2";
import Navbar from "@/components/navbar/Navbar";
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
