import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


import MemberHeader from "../../components/member/MemberHeader";
import Footer from "../../components/member/Footer";
import Favorite from "../../components/member/Favorite";

import "bootstrap/dist/css/bootstrap.css";
import "../../styles/member/memberHome.css";

import target from "../../../src/images/memberrecrod/target.png";
import fork from "../../../src/images/memberrecrod/fork.png";
import logo from "../../../src/images/logo/logo.png";

function UserFav() {
  return (
    <div style={{ backgroundColor: "#F7F4E9" }}>
      <MemberHeader />
      <div className="wrapper">
        <div className="memberTitle">
          <h3 id="titleH3">追蹤清單</h3>
          <Favorite/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserFav;
