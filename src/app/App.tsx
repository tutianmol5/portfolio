import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { WhatIsAutomation } from "./components/WhatIsAutomation";
import { HowItHelps } from "./components/HowItHelps";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div
      className="bg-[#080808] text-[#EFEFEF] min-h-screen"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <Navbar />
      <Hero />
      <SelectedWork />
      <WhatIsAutomation />
      <HowItHelps />
      <AboutUs />
      <Contact />
    </div>
  );
}