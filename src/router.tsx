import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import App from "./App";
import HomePage from "./pages/HomePage";
import AdvisorLoginPage from "./pages/auth/AdvisorLoginPage";
import AdvisorSignupPage from "./pages/auth/AdvisorSignupPage";
import StudentLoginPage from "./pages/auth/StudentLoginPage";
import StudentSignupPage from "./pages/auth/StudentSignupPage";

const rootRoute = createRootRoute({
  component: () => (
    <App>
      <Outlet />
    </App>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const advisorSignupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth/advisor/signup",
  component: AdvisorSignupPage,
});

const advisorLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth/advisor/login",
  component: AdvisorLoginPage,
});

const studentSignupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth/student/signup",
  component: StudentSignupPage,
});

const studentLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth/student/login",
  component: StudentLoginPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  advisorSignupRoute,
  advisorLoginRoute,
  studentSignupRoute,
  studentLoginRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}

