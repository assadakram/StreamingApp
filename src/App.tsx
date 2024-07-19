import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 overflow-hidden 2xl:mx-auto">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
