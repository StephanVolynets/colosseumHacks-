import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <div className="flex w-[583px] h-[1303px]">
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="/"
            element={<Home className="w-[592px] h-[1098px]" />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
