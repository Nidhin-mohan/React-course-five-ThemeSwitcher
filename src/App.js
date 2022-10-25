import React, {useState} from "react";
import ThemeContex from "./Context/ThemeContext";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

const App = () => {
 const themeHook = useState("light")
 return (
  <ThemeContex.Provider value={themeHook}>
    <div>
      <Header/>
      <HeroSection/>
    </div>
  </ThemeContex.Provider>
 )
}

export default App;
