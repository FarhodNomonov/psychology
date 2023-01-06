import React from "react";
import { Route, Routes } from "react-router-dom";
import { RootRoutes } from "./router";

function App() {
  return (
    <div className="App">
      <Routes>
        {RootRoutes.map((props) => (
          <Route {...props} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
