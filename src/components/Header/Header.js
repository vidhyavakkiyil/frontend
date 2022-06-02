import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  ShellBar,
  StandardListItem,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js";
import sapLogo from "../../assets/img/logo/sap-logo.png";
import "./Header.css";

const Header = (props) => {
  const navigate = useNavigate();
  const { condensed, setCondensed } = props;

  const MenuIcon = (props) => {
    return (
      <Button
        icon="menu2"
        type="positive"
        slot={props.slot}
        style={{ width: "15px" }}
        onClick={() => setCondensed(!condensed)}
      ></Button>
    );
  };

  //   const searchField = (props) => {
  //     return (
  //       <Input
  //         type="Text"
  //         icon="search"
  //         onChange={() => {}}
  //         slot={props.slot}
  //         placeholder="Search"
  //       />
  //     );
  //   };
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <ShellBar
      {...props}
      logo={<img src={sapLogo} alt="SAP" />}
      onLogoClick={handleLogoClick}
      primaryTitle="PRA"
      secondaryTitle={"subtitle"}
      showCoPilot
      //searchField={searchField}
      showNotifications
      notificationsCount={3}
      onNotificationsClick={() => {}}
      showProductSwitch
      onProductSwitchClick={() => {}}
      startButton={<MenuIcon />}
      menuItems={[
        <StandardListItem data-key="1" style={{ margin: 0 }}>
          DOI
        </StandardListItem>,
        <StandardListItem data-key="2" style={{ margin: 0 }}>
          Business Partner
        </StandardListItem>,
        <StandardListItem data-key="3" style={{ margin: 0 }}>
          Owners
        </StandardListItem>,
        <StandardListItem data-key="3" style={{ margin: 0 }}>
        Payout
      </StandardListItem>,
      ]}
      onMenuItemClick={() => {}}
      profile={<Avatar initials="S" icon="employee" size="XS"></Avatar>}
    />
  );
};

export default Header;
