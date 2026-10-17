import React from "react";
import Router from "./Router";
import Navbar from "./components/Navbar";
import CurtainTransition from "./components/transitions/CurtainTransition";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0d0101] text-white">
      {/* ── Cinematic Opening Curtain Transition ── */}
      <CurtainTransition />

      <Navbar />
      <Router />
    </div>
  );
};

export default App;
