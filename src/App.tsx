import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AppComponent from "./components/AppComponent";

function App() {
  return (
    <div className="flex w-[583px] h-[1303px]">
      <Suspense fallback={<p>Loading...</p>}>
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