import React, { useState, useEffect } from "react";
import { Button, Card, Input, Title  } from "@ui5/webcomponents-react";
import DynamicPage from "../../components/DynamicPage/DynamicPage";
import Config from "../../Config";
import axios from "axios";

const Home = () => {
  return (
    <div><Card  style={{width:'200px'}}>Business Partner Information</Card>
      <DynamicPage />
    </div>
  );
};

export default Home;
