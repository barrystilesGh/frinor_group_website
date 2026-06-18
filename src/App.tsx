import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutUs from "./pages/AboutUs";
import OurService from "./pages/OurService";
import ContactUs from "./pages/ContactUs";
import MissingPage from "./pages/MissingPage";
import "../src/General.css";
import type { JSX } from "react";

const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/ourservice' element={<OurService />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='*' element={<MissingPage />} />
      </Routes>
    </>
  );
};

export default App;
