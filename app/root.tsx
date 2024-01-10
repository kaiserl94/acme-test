import { Layout } from "./components/Layout";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
} from "@remix-run/react";
import mainCss from "./styles/output.css";
import type { LinksFunction } from "@remix-run/node";
import React from 'react';

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: mainCss },
    ];
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="data:image/x-icon;base64,AA"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Layout />
                <Outlet />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}