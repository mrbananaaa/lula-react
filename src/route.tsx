import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import LoadingPage from "./components/LoadingPage";

const HomePage = lazy(() => import("./routes"));
const ComingSoonPage = lazy(() => import("./components/ComingSoonPage"));

const RouteProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<LoadingPage />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<LoadingPage />}>
                <ComingSoonPage name="About" />
              </Suspense>
            }
          />
          <Route
            path="/shop"
            element={
              <Suspense fallback={<LoadingPage />}>
                <ComingSoonPage name="Shop" />
              </Suspense>
            }
          />
          <Route
            path="/blog"
            element={
              <Suspense fallback={<LoadingPage />}>
                <ComingSoonPage name="Blog" />
              </Suspense>
            }
          />
          <Route
            path="/shipping"
            element={
              <Suspense fallback={<LoadingPage />}>
                <ComingSoonPage name="Shipping" />
              </Suspense>
            }
          />
          <Route
            path="/signin"
            element={
              <Suspense fallback={<LoadingPage />}>
                <ComingSoonPage name="Signin" />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteProvider;
