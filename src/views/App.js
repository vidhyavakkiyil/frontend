import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents-icons/dist/accelerated.js";
import "@ui5/webcomponents-icons/dist/accept.js";
import "@ui5/webcomponents-icons/dist/zoom-out.js";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import "@ui5/webcomponents/dist/Assets";
import "@ui5/webcomponents-fiori/dist/Assets";
import Header from "../components/Header/Header";
import SideNavigation from "../components/SideNavigation/SideNavigation";
import Home from "./Home/Home";
import DOI from "./DOI/DOI";
import Venture from "./Venture/Venture";
import Owners from "./Owners/Owners";
import "./App.css";
import BusinessAssociate from "./Business Associate/BusinessAssociate";
import Payout from "./Payout/Payout";
import TaxDeductDialog from "./Owners/Components/TaxDeduct/TaxDeduct/TaxDeductDialog";
import TaxDeductTable from "./Owners/Components/TaxDeduct/TaxDeduct/TaxDeductTable ";
import Venture_DoiTable from "./Venture/Venture_DoiTable";
import DoiOwnerTable from "./Venture/DoiOwnerTable";
import Add from "./DOI/components/Toolbar/Add";
import PayoutPostion from "./Payout/Payout_Position/PayoutPosition";

//import "core-js";

function App() {
  //setTheme("sap_belize");
  useEffect(() => {
    setTheme("sap_fiori_dark");
  }, []);
  const [condensed, setCondensed] = useState(false);
  return (
    <Router>
      <div
        style={{
          display: "row",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Header condensed={condensed} setCondensed={setCondensed} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <aside style={{ width: condensed ? "55px" : "220px" }}>
            <SideNavigation condensed={condensed} />
          </aside>
          <main
            style={{
              width: condensed ? "100%" : "85%",
              //paddingLeft: 0,
              paddingTop: 3,
              marginTop: 0,
            }}
          >  
            <Routes>
              <Route path="/" element={<Venture/>} />
              <Route path="/BusinessAssociate" element={<BusinessAssociate />} />
              <Route path="/doi" element={<DOI />} />
              <Route path="/Payout" element={<Payout />} />
              <Route path="/Owners/:wellid" element={<Owners />} />
              <Route path="/TaxDeductTable" element={<TaxDeductTable />}/>
              <Route path="/Payout_Position" element={<PayoutPostion/>}/>

              <Route path="/DoiOwnerTable" element={<DoiOwnerTable />}/>
              <Route path="/Add" element={<Add true/>}/>

              <Route path="/Venture_DoiTable" element={<Venture_DoiTable />}/>


            </Routes>
          </main>
        </div>
        {/* <Footer style={{ width: "100%" }} /> */}
      </div>
    </Router>
  );
}

export default App;
