import React from "react";
import { Routes, Route } from "react-router-dom";

// style
import "./styles/member/body.css";
import "./styles/member/main.css";
import "./styles/member/MemberHeader.css";

import "./styles/member/footer.css";

// Route
import LoginPage from "./pages/LoginPage";
import MemberRegister1 from "./pages/memberRegister1";
import MemberRegister2 from "./pages/memberRegister2";
import MemberHomePage from "./pages/user/MemberHomePage";
import MemberChartList from "./pages/user/MemberChartList";
import MemberData from "./pages/user/MemberData";
import UserFav from "./pages/user/UserFav";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div className="App">
      <ScrollTop />
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/MemberHomePage" element={<MemberHomePage />} />
        <Route path="/MemberRegister1" element={<MemberRegister1 />} />
        <Route path="/MemberRegister2" element={<MemberRegister2 />} />
        <Route path="/MemberChartList" element={<MemberChartList />} />
        <Route path="/MemberData" element={<MemberData />} />
        <Route path="/UserFav" element={<UserFav />} />
      </Routes>
    </div>
  );
}

export default App;
