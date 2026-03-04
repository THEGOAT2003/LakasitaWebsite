import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Homepage from "./Homepage/Homepage";
import Menu from "./Menu/Menu";
import Whine from "./Whine/Whine";
import { Routes, Route } from "react-router-dom";
import "./index.css"
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="appLayout">
      <Header />

      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/whine" element={<Whine />} />
          <Route path="/privacy-policy" element= {<PrivacyPolicy/>}/>
        </Routes>
      </main>

      <Footer />
      <Analytics></Analytics>
    </div>
  );
}

export default App;
