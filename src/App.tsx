import "./App.css";
import LeftSection from "./sections/LeftSection/LeftSection";
import RightSection from "./sections/RightSection/RightSection";

function App() {
  return (
    <div className="mt-14 grid grid-cols-[40%_60%] mx-auto max-w-6xl">
        <LeftSection />
        <RightSection /> 
    </div>
  );
}

export default App;
