import ClientLayout from "@/layout/ClientLayout";
import HomePage from "@/pages/client/HomePage";
import MenuPage from "@/pages/client/MenuPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ClientLayout></ClientLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
            },
            {
                path: "menu",
                element: <MenuPage></MenuPage>,
            },
        ],
    },
]);
