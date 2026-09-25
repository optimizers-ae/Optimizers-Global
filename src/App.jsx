import Router from "./Router";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0d0101] text-white">
      <Navbar />
      <Router />
    </div>
  );
};

export default App;
