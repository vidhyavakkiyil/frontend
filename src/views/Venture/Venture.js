import { Bar, BarDesign, Button, ButtonDesign, DynamicPage, DynamicPageHeader, DynamicPageTitle, Icon, Label, Title } from "@ui5/webcomponents-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";
import Config from "../../Config";
import DOIHeader from "../DOI/components/DOIHeader/DOIHeader";
import Add from "../DOI/components/Toolbar/Add";
import CustomToolbar from "../DOI/components/Toolbar/Toolbar";
import VentureHeader from "./VentureHeader";
import VentureTabs from "./VentureTab/VentureTabs";
import VentureTable from "./VentureTable";



const Venture = (props) => {
  const navigate = useNavigate();
  const [addDeckHeaderDialogOpen, setAddDeckHeaderDialogOpen] = useState(false);
  const handleAddDeckHeaderDialogOpen = () => {
    setAddDeckHeaderDialogOpen(true);
  };

  const handleAddDeckHeaderDialogClose = () => {
    setAddDeckHeaderDialogOpen(false);
  };
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

  const onChangeFormHandler = async (event, value) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  // const onChangeFormHandlerNew = async (event, values) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [event.target.id.split("-")[0]]: values,
  //   }));
  // };

  const ventureAttributes = async () => {
      let data = formData;
      let url =
          Config.NODE_API_BASE_URL + Config.GET_BUSINESS_ASSOCIATE_TABLE_DATA;
      setIsLoading(true);
      await axios
          .post(url, data)
          .then((res) => {
              console.log("res.data", res.data);
              
              setIsLoading(false);
          })
          .catch((err) => {
              console.log(err);
          });

  }

  const filterData = async () => {
    let data = formData;
    let url = Config.NODE_API_BASE_URL + Config.GET_DECK_HEADER_TABLE_DATA;
    setIsLoading(true);
    await axios
      .post(url, data)
      .then((res) => {
        console.log("res.data", res.data);
        setTableData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFormData = async () => {
    let url = Config.NODE_API_BASE_URL + Config.GET_DECK_HEADER_FORM_DATA;
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFormData();
  }, []);

  useEffect(() => {
    console.log("deckHeaderFormData::", deckHeaderFormData);
  }, [deckHeaderFormData]);

  /* Add Deck Header Functionalities */

  const initialNewFormState = {
    company_code: [],
    venture: [],
    well_id: [],
    well_name: [],
    universal_doi_type: [],
    product: [],
  };
  const [deckHeaderCreateFormData, setDeckHeaderCreateFormData] =
    useState(initialNewFormState);
  const initialFormCreateData = {
    Company_Code: "",
    Venture: "",
    Well_ID: "",
    Well_Name: "",
    Universal_DOI_Tier: "",
    Universal_DOI_Type: "",
    Product: "",
    Start_Date: "",
    End_Date: "",
  };
  const [formDataCreate, setFormDataCreate] = useState(initialFormCreateData);

  const onChangeCreateFormHandler = async (event) => {
    setFormDataCreate((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const getFormCreateData = async () => {
    let url = Config.NODE_API_BASE_URL + Config.GET_DECK_HEADER_FORM_DATA;
    await axios
      .get(url)
      .then((res) => {
        console.log("res.data", res.data);
        setDeckHeaderCreateFormData({
          company_code: res.data.Company_Code,
          venture: res.data.Venture,
          well_id: res.data.Well_ID,
          well_name: res.data.Well_Name,
          universal_doi_type: res.data.Universal_DOI_Type,
          product: res.data.Product,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFormCreateData();
  }, []);

  useEffect(() => {
    console.log("deckHeaderCreateFormData::", deckHeaderCreateFormData);
  }, [deckHeaderCreateFormData]);

  const handleSaveNewDeckHeader = async () => {
    let data = formDataCreate;
    let url = Config.NODE_API_BASE_URL + Config.CREATE_NEW_DECK_HEADER_DATA;
    console.log("New data to be created::", data);
    await axios
      .post(url, data)
      .then((res) => {
        console.log("res.data", res.data);
        if (res.status === 200) {
          console.log(res.data);
          navigate(
            "/ownerdetails/create/" +
              formDataCreate.Well_ID +
              "/" +
              formDataCreate.Universal_DOI_Tier
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  


  return(
    <><Title style={{ color: "#0854a0",position:"sticky",marginLeft:"10px",marginTop:"10px" }}  level={"H3"} wrappingType="None" >
    <MainHeader title={"Venture"}/>
    </Title><CustomToolbar filterData={filterData} Name={"Venture"}  />
     <DynamicPage
      {...props}
      //alwaysShowContentHeader
      headerContentPinnable
      showHideHeaderButton 
      backgroundDesign="Transparent"
      description="Inquiry - Setup - Transfers"

      headerContent={
        <DynamicPageHeader headerPinned>
          <VentureHeader
            deckHeaderFormData={deckHeaderFormData}
            onChangeFormHandler={onChangeFormHandler}
            formData={formData}
          />
          <VentureTable
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
        </DynamicPageHeader>
      }
    >
      { <VentureTabs
      title={"Attributes"}
      tableData={tableData}
      isLoading={isLoading}
      filterData={filterData}
            />}
    </DynamicPage></>
  );
};

export default Venture;
