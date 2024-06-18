import PrivateRoutes from "./PrivateRoutes";
import Login from "@/pages/Login/Login";
import PageNotFound from "../pages/PageNotFound";
import Proposals from "../pages/Proposals/Proposals";
import User from "../pages/User/User";
import Home from "@/pages/Home/Home";
import Cars from "@/pages/Cars/Cars";
import Proposal from "@/pages/Proposal/Proposal";
import Result from "@/pages/Result/Result";

export const routes = [
    {
        path: "/",
        element: <PrivateRoutes />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "cars",
                element: <Cars />,
            },
            {
                path: "user",
                element: <User />,
            },
            {
                path: "proposal",
                element: <Proposal />,
            },
            {
                path: "proposals",
                element: <Proposals />,
            },
            {
                path: "result",
                element: <Result />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
];
