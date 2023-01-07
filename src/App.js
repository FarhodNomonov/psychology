import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import { RootRoutes } from "./router";
import UseScreen from "./ui/screen";

function App() {
  return (
    <UseScreen className="App">
      <Header />
      <Routes>
        {RootRoutes.map((props) => (
          <Route {...props} />
        ))}
      </Routes>
      <Footer />
    </UseScreen>
  );
}

export default App;
