import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./common/Header";
import Footer from "./common/Footer";
import TemporaryStudy from "./Pages/Migration/Study Visa/TemporaryStudy";
import PostStudy from "./Pages/Migration/Study Visa/PostStudy";
import SkilledIndependent from "./Pages/Migration/Permanent Visa/SkilledIndependent";
import SkilledNominated from "./Pages/Migration/Permanent Visa/SkilledNominated";
import PermanentResidence from "./Pages/Migration/Regional Visa/PermanentResidence";
import SkilledWorkRegional from "./Pages/Migration/Regional Visa/SkilledWorkRegional";
import AustraliaBasics from "./Pages/Study Overseas/Study In Australia/AustraliaBasics";
import EarningAndSpending from "./Pages/Study Overseas/Study In Australia/EarningAndSpending";
import EducationSystem from "./Pages/Study Overseas/Study In Australia/EducationSystem";
import StudentVisa from "./Pages/Study Overseas/Study In Australia/StudentVisa";
import CanadaBasics from "./Pages/Study Overseas/Study In Canada/CanadaBasics";
import CanadaEarningAndSpending from "./Pages/Study Overseas/Study In Canada/CanadaEarningAndSpending";
import CanadaEducationSystem from "./Pages/Study Overseas/Study In Canada/CanadaEducationSystem";
import CanadaStudentVisa from "./Pages/Study Overseas/Study In Canada/CanadaStudentVisa";
import NZBasics from "./Pages/Study Overseas/Study In Newzealand/NZBasics";
import NZEarningAndSpending from "./Pages/Study Overseas/Study In Newzealand/NZEarningAndSpending";
import NZEducationSystem from "./Pages/Study Overseas/Study In Newzealand/NZEducationSystem";
import NZStudentVisa from "./Pages/Study Overseas/Study In Newzealand/NZStudentVisa";
import UKBasics from "./Pages/Study Overseas/Study In UK/UKBasics";
import UKEarningAndSpending from "./Pages/Study Overseas/Study In UK/UKEarningAndSpending";
import UKEducationSystem from "./Pages/Study Overseas/Study In UK/UKEducationSystem";
import UKStudentVisa from "./Pages/Study Overseas/Study In UK/UKStudentVisa";
import FamilySponsoredVisa from "./Pages/Visitor Visa/FamilySponsoredVisa";
import WorkAndHolidayVisa from "./Pages/Visitor Visa/WorkAndHolidayVisa";
import BusinessVisa from "./Pages/Others/BusinessVisa";
import PartnerVisa from "./Pages/Others/Family Visa/PartnerVisa";
import ParentVisa from "./Pages/Others/Family Visa/ParentVisa";
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
        <Route path="/migration/regional-visa/permanent" element={<PermanentResidence />} />
        <Route path="/migration/regional-visa/skilled-work" element={<SkilledWorkRegional />} />
        <Route path="/visitor-visa/family-sponsored" element={<FamilySponsoredVisa />} />
        <Route path="/visitor-visa/work-and-holiday" element={<WorkAndHolidayVisa />} />
        <Route path="/study-overseas/australia/basics" element={<AustraliaBasics />} />
        <Route path="/study-overseas/australia/finance" element={<EarningAndSpending />} />
        <Route path="/study-overseas/australia/education" element={<EducationSystem />} />
        <Route path="/study-overseas/australia/student-visa" element={<StudentVisa />} />
        <Route path="/study-overseas/canada/basics" element={<CanadaBasics />} />
        <Route path="/study-overseas/canada/finance" element={<CanadaEarningAndSpending />} />
        <Route path="/study-overseas/canada/education" element={<CanadaEducationSystem />} />
        <Route path="/study-overseas/canada/student-visa" element={<CanadaStudentVisa />} />
        <Route path="/study-overseas/new-zealand/basics" element={<NZBasics />} />
        <Route path="/study-overseas/new-zealand/finance" element={<NZEarningAndSpending />} />
        <Route path="/study-overseas/new-zealand/education" element={<NZEducationSystem />} />
        <Route path="/study-overseas/new-zealand/student-visa" element={<NZStudentVisa />} />
        <Route path="/study-overseas/uk/basics" element={<UKBasics />} />
        <Route path="/study-overseas/uk/finance" element={<UKEarningAndSpending />} />
        <Route path="/study-overseas/uk/education" element={<UKEducationSystem />} />
        <Route path="/study-overseas/uk/student-visa" element={<UKStudentVisa />} />
        <Route path="/others/business-visa" element={<BusinessVisa />} />
        <Route path="/others/family-visa/partner" element={<PartnerVisa />} />
        <Route path="/others/family-visa/parent" element={<ParentVisa />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
