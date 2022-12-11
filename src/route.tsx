import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./routes";

const ComingSoonPage = ({
  name = "page"
}: {
  name: string
}) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <div>{name} page is</div>
        <div className="text-6xl font-semibold">Coming Soon!</div>
      </div>
    </div>
  );
};

const RouteProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<ComingSoonPage name="About" />} />
          <Route path="/shop" element={<ComingSoonPage name="Shop" />} />
          <Route path="/blog" element={<ComingSoonPage name="Blog" />} />
          <Route path="/shipping" element={<ComingSoonPage name="Shipping" />} />
          <Route path="/signin" element={<ComingSoonPage name="Signin" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteProvider;
