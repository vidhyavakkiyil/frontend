import React, { useState, useEffect } from "react";
import axios from "axios";
import Config from "../../Config";
import {
  DynamicPage,
  DynamicPageHeader,
  DynamicPageTitle,
  Label,
  Title,
  Button,
  Badge,
  ButtonDesign,
  Dialog,
  Bar,
  List,
  StandardListItem,
  Icon,
} from "@ui5/webcomponents-react";
import DOIHeader from "./components/DOIHeader/DOIHeader";
import DOITable from "./components/DOITable/DOITable";
import Breadcrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import CustomToolbar from "./components/Toolbar/Toolbar";
import MainHeader from "../../components/MainHeader/MainHeader";

const DOI = (props) => {
  console.log("Doi")
  const initialFormState = {
    company_code: [],
    venture: [],
    well_name: [],
    universal_doi_tier: [],
    universal_doi_type: [],
    product: [],
  };
  const [deckHeaderFormData, setDeckHeaderFormData] =
    useState(initialFormState);

  const [tableData, setTableData] = useState([]);
  const [filterdata, setfilterdata] = useState([]);

  const [isHeaderLoading, setIsHeaderLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const initialFormData = {
    company_code: "",
    venture: "",
    well_name: "",
    universal_doi_tier: "",
    universal_doi_type: "",
    product: "",
    effective_date: "",
    start_date: "",
    end_date: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const onChangeFormHandler = async (name, value) => {
    console.log(name, value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filterData = async () => {
    setTableData([]);
    let data = formData;
    let url = Config.NODE_API_BASE_URL + Config.GET_DECK_HEADER_TABLE_DATA;
    setIsLoading(true);
    await axios
      .post(url, data)
      .then((res) => {
        setfilterdata(res.data);
        setTableData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFormData = async () => {
    let url = Config.NODE_API_BASE_URL + Config.GET_DECK_HEADER_FORM_DATA;
    setIsHeaderLoading(true);
    await axios
      .get(url)
      .then((res) => {
        console.log("res.data", res.data);
        setDeckHeaderFormData({
          company_code: res.data.Company_Code,
          venture: res.data.Venture,
          well_name: res.data.Well_Name,
          universal_doi_tier: res.data.Universal_DOI_Tier,
          universal_doi_type: res.data.Universal_DOI_Type,
          product: res.data.Product,
        });
        setIsHeaderLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFormData();
  }, []);
  const [navigationItems, setNavigationItems] = useState([
    <Button
      key={"fullscreen"}
      icon="full-screen"
      design={ButtonDesign.Transparent}
    />,
    <Button
      key={"exitFullscreen"}
      icon="exit-full-screen"
      design={ButtonDesign.Transparent}
    />,
    <Button key={"decline"} icon="decline" design={ButtonDesign.Transparent} />,
  ]);

  const [actionItems, setActionItems] = useState([
    <div style={{ marginTop: "10px" }}>
        <Button key={"go"} design={ButtonDesign.Emphasized}>
            Go
        </Button>,
        <Button key={"hide filter bar"} design={ButtonDesign.Transparent}>
            Adapt Filter 
        </Button>,
    </div>
]);
const [dialogIsOpen, setDialogIsOpen] = useState(false);

const onButtonClick = () => {
  setDialogIsOpen(true);
};

const handleClose = () => {
  setDialogIsOpen(false);
};

  return (
    <><Title style={{ color: "#0854a0",position:"sticky",marginLeft:"10px",marginTop:"10px" }}  level={"H3"} wrappingType="None" >
    <MainHeader title={"Doi"}/>
     </Title><CustomToolbar deckHeaderFormData={deckHeaderFormData} filterData={filterData} Name={"DOI"} /><DynamicPage
      {...props}
      //alwaysShowContentHeader
      headerContentPinnable
      showHideHeaderButton
      backgroundDesign="Solid"
      description="Inquiry - Setup - Transfers"
   
      headerContent={
        <DynamicPageHeader >
           <DOIHeader
        deckHeaderFormData={deckHeaderFormData}
        onChangeFormHandler={onChangeFormHandler}
        formData={formData}
        isLoading={isHeaderLoading}
      />
        </DynamicPageHeader>
      }
    >
      <DOITable
        title={"Unified DOI Header"}
        tableData={tableData}
        isLoading={isLoading}
        filterData={filterData}
        style={{
          overflow: "scroll",
          height: "auto",
          //   overflowX: "hidden",
          //   overflowY: "hidden",
          marginRight: 0,
          marginLeft: 0,
          paddingLeft: 0,
        }}
      />
    </DynamicPage></>
  );
};

export default DOI;
