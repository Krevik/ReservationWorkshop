import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { PagePaths } from "./utils/PagePaths.ts";
import { PageLayout } from "./components/Layout/PageLayout.tsx";
import { Home } from "./pages/Home/Home.tsx";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path={PagePaths.HOME}
                element={
                    <PageLayout>
                        <Home />
                    </PageLayout>
                }
            />
            <Route
                path="*"
                element={
                    <PageLayout>
                        <Home />
                    </PageLayout>
                }
            />
        </>,
    ),
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
