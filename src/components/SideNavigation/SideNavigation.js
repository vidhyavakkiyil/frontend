import React from "react";
import {
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
} from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";

const CustomSideNavigation = (props) => {
  const navigate = useNavigate();
  const { condensed } = props;
  return (
    <SideNavigation
      {...props}
      fixedItems={[
        <SideNavigationItem text="Useful Links" icon="chain-link"
         />,
        <SideNavigationItem text="History" icon="history" />,
      ]}
      style={{ height: "100vh", width: condensed ? "50px" : "219px",position:"sticky" }}
      expanded={true}
    >
    <SideNavigationItem
        text="Venture"
        icon="settings"
        onClick={() => navigate("/")}
      />
      {/* <SideNavigationItem
        text="DOI"
        expanded
        icon="business-by-design"
        onClick={() => navigate("/doi")}
      />
       <SideNavigationItem
        text="Business Partner"
        icon="globe"
        onClick={() => navigate("/BusinessAssociate")}
      />
      
     
       <SideNavigationItem
        text="Payout"
        expanded
        icon="globe"
        onClick={() => navigate("/Payout")}
      ><SideNavigationSubItem />
      </SideNavigationItem> */}
    </SideNavigation>
  );
};

export default CustomSideNavigation; 
