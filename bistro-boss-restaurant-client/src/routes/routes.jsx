import ClientLayout from "@/layout/ClientLayout";
import HomePage from "@/pages/client_pages/HomePage";
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
        ],
    },
]);
