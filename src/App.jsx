import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./common/Header";
import Footer from "./common/Footer";
import TemporaryStudy from "./Pages/Migration/Study Visa/TemporaryStudy";
import PostStudy from "./Pages/Migration/Study Visa/PostStudy";
import SkilledIndependent from "./Pages/Migration/Permanent Visa/SkilledIndependent";
import SkilledNominated from "./Pages/Migration/Permanent Visa/SkilledNominated";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/migration/study-visa/temporary" element={<TemporaryStudy />} />
        <Route path="/migration/study-visa/post-study" element={<PostStudy />} />
        <Route path="/migration/permanent-visa/skilled-independent" element={<SkilledIndependent />} />
        <Route path="/migration/permanent-visa/skilled-nominated" element={<SkilledNominated />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
