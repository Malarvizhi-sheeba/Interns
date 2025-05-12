import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import heroBanner from "./assets/images/hero-banner.svg";
import pricingbannerimg from "./assets/images/pricing-banner.svg";
import mainbanner from "./assets/images/total-bgimg.png";
import Banner from "./components/Banner";
import Createsection from "./components/CreateSection";
import ManagingSection from "./components/ManagingSection";
import NavigateSection from "./components/NavigateSection";
import AccordionSection from "./components/AccordionSection";
import DownloadSection from "./components/DownloadSectionTemp";
import PlainSection from "./components/PlainSection";
import Footer from "./components/Footer";
import NavSection from "./components/NavSection";
import PricingBanner from "./components/PricingBanner";
import PricingTab from "./components/PricingTab";
import PricingTable from "./components/PricingTable";
import "./styles/AccordionSection.css";
import "./styles/Banner.css";
import "./styles/Createsection.css";
import "./styles/DownloadSectionTemp.css";
import "./styles/Footer.css";
import "./styles/ManagingSection.css";
import "./styles/NavigateSection.css";
import "./styles/Navbar.css";
import "./styles/PlainSection.css";
import "./styles/PricingBanner.css";
import "./styles/PricingTab.css";
import "./styles/PricingTable.css";

//  Environment Page
function EnvironmentPage() {
  return (
    <div className="mainbg" style={{ backgroundImage: `url(${mainbanner})` }}>
      <header
        className="top-section"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <NavSection />
        <Banner />
      </header>
      <Createsection />
      <ManagingSection />
      <NavigateSection />
      <AccordionSection />
      <DownloadSection />
      <PlainSection />
      <Footer />
    </div>
  );
}

// Pricing Page
function PricingPage() {
  return (
    <div class="main-bg" style={{ backgroundImage: `url(${mainbanner})` }}>
      <header
        className="top-section"
        style={{ backgroundImage: `url(${pricingbannerimg})` }}
      >
        <NavSection />
        <PricingBanner />
      </header>
      <PricingTab />
      <PricingTable />
      <Footer />
    </div>
  );
}

//  App Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EnvironmentPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
