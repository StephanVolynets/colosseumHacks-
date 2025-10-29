import { Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./components/home";
import AppComponent from "./components/AppComponent";
import LandingPage from "@/components/LandingPage";
import routes from "tempo-routes";

function App() {
  const tempoRoutes = useRoutes(routes);

  return (
    <div className="min-h-screen bg-background">
      <LandingPage />
      <Suspense fallback={<p>Loading...</p>}>
        {tempoRoutes}
        <Routes>
          <Route
            path="/"
            element={<Home className="w-[592px] h-[1098px]" />}
          />
          <Route
            path="/app"
            element={<AppComponent className="w-full h-full" />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;