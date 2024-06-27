import React, { ReactElement } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { PagePaths } from "./utils/PagePaths.ts";
import { PageLayout } from "./components/Layout/PageLayout.tsx";
import { Home } from "./pages/Home/Home.tsx";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import { UserManagement } from "./pages/UserManagement/UserManagement.tsx";
import { Provider } from "react-redux";
import { appStore } from "./redux/store.ts";
import { Workshops } from "./pages/Workshops/Workshops.tsx";
import { Login } from "./pages/Login/Login.tsx";
import { Workshop } from "./pages/Workshops/Workshop/Workshop.tsx";
import { UserSessionManager } from "./components/UserSessionRestore/UserSessionManager.tsx";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const createRoute = (path: keyof typeof PagePaths | string, wrappedElement: JSX.Element): JSX.Element | undefined => (
    <Route path={path} element={<PageLayout>{wrappedElement}</PageLayout>} />
);

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {createRoute("HOME", <Home />)}
            {createRoute("USER_MANAGEMENT", <UserManagement />)}
            {createRoute("WORKSHOPS", <Workshops />)}
            {createRoute("LOGIN", <Login />)}
            {createRoute("WORKSHOP/:workshopId", <Workshop />)}
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
        <Provider store={appStore}>
            <UserSessionManager />
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
