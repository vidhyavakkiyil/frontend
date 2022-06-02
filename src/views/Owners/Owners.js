import { Badge, Breadcrumbs, Button, ButtonDesign, DynamicPage, DynamicPageHeader, DynamicPageTitle, Icon, Label, Title } from "@ui5/webcomponents-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Config from "../../Config";
import BurdenGroupDialog from "./Components/BurdenGroup/BurdenGroupDialog";
import Comments from "./Components/Comments/Comments";
import OwnerDetailsTable from "./Components/OwnerHeader/OwnerDetailsTable/OwnerDetailsTable";
import OwnerHeader from "./Components/OwnerHeader/OwnerHeader";
import OwnerHeaderSkeleton from "./Components/OwnerHeader/OwnerHeaderSkeleton";
import TaxDeductDialog from "./Components/TaxDeduct/TaxDeduct/TaxDeductDialog";
import HeaderDetails from "./Components/OwnerHeader/HeaderDetails/HeaderDetails";
import DeckTotalsTable from "./Components/OwnerHeader/DeckTotalsTable/DeckTotalsTable";
import DoiOwnerTable from "../Venture/DoiOwnerTable";


const Owners = (props) => {
  console.log("owner")
  const params = useParams();
  const deckHeaderInitialData = {
    venture: "",
    deck_code: "",
    company_code: "",
    deck_type: "",
    product: "",
    start_date: "",
    end_date: "",
  };
  const [revenueDeckHeaderData, setRevenueDeckHeaderData] = useState(
    deckHeaderInitialData
  );
  const initialHeaderData = {
    entity_type: [],
    pra_owner: [],
    interest_type: [],
    suspense_reason: [],
    entitlement_interest: "0.0000000000",
    pay_code: [],
    jib_revenue_netting: false,
    jva_owner: [],
    nri: "",
    gwi: "",
  };
  const [ownerHeaderFormData, setOwnerHeaderFormData] =
    useState(initialHeaderData);
  const initialFormData = {
    entity_type: "",
    pra_owner: "",
    interest_type: "",
    suspense_reason: "",
    entitlement_interest: "0.0000000000",
    pay_code: "",
    jib_revenue_netting: false,
    jva_owner: "",
    nri: "",
    gwi: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [deckTotalsTableData, setDeckTotalsTableData] = useState([]);
  const [ownerDetailsTableData, setOwnerDetailsTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [taxDedcutDialogOpen, setTaxDedcutDialogOpen] = useState(false);
  const [commentsDialogOpen, setCommentsDialogOpen] = useState(false);
  const [burdenGroupDialogOpen, setBurdenGroupDialogOpen] = useState(false);
  const handletaxDedcutDialogOpen = () => {
    setTaxDedcutDialogOpen(true);
  };

  const handletaxDedcutDialogClose = () => {
    setTaxDedcutDialogOpen(false);
  };
  const handleCommentsDialogOpen = () => {
    setCommentsDialogOpen(true);
  };

  const handleCommentsDialogClose = () => {
    setCommentsDialogOpen(false);
  };
  const handleBurdenGroupDialogOpen = () => {
    setBurdenGroupDialogOpen(true);
  };

  const handleBurdenGroupDialogClose = () => {
    setBurdenGroupDialogOpen(false);
  };

  const getHeaderData = async () => {
    console.log("getHeaderData")
    let url =
      Config.NODE_API_BASE_URL +
      Config.GET_OWNER_HEADER_FORM_DATA +
      params.wellid;
    console.log(params.wellid)
    console.log(params)

    await axios.get(url).then((res) => {
      console.log("res.data", res.data);
      let rev_deck_header_detail = res.data.rev_deck_header_detail;
      let deck_header = res.data.deck_header;
      let deck_totals = res.data.deck_totals;
      console.log(rev_deck_header_detail)
      setRevenueDeckHeaderData(rev_deck_header_detail);
      setOwnerHeaderFormData((prev) => ({
        ...prev,
        entity_type: deck_header.Entity_Type,
        pra_owner: deck_header.Owner_ID,
        interest_type: deck_header.Interest_Type,
        pay_code: deck_header.Pay_Code,
        suspense_reason: deck_header.Suspense_Reason,
        jib_revenue_netting: true,
        jva_owner: deck_header.Owner_ID,
        nri: deck_header.NRI,
        gwi: deck_header.GWI,
      }));
      setFormData((prev) => ({
        ...prev,
        entity_type: deck_header.Entity_Type[0],
        pra_owner: deck_header.Owner_ID[0],
        interest_type: deck_header.Interest_Type[1],
        pay_code: deck_header.Pay_Code[0],
        suspense_reason: deck_header.Suspense_Reason[0],
        jib_revenue_netting: true,
        jva_owner: deck_header.Owner_ID[0],
        nri: deck_header.NRI,
        gwi: deck_header.GWI,
      }));
      setDeckTotalsTableData(deck_totals);
    });
  };
  
  const getOwnerDetailsTableData = async () => {
    setIsLoading(true);
    let url =
      Config.NODE_API_BASE_URL +
      Config.GET_OWNER_DETAILS_TABLE_DATA +
      params.wellid;
    await axios.get(url).then((res) => {
      let owner_details = res.data;
      console.log(owner_details)
      setOwnerDetailsTableData(owner_details);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getHeaderData();
    getOwnerDetailsTableData();
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
    <Button key={"edit"} design={ButtonDesign.Emphasized}>
        Edit
    </Button>,
    <Button key={"delete"} design={ButtonDesign.Transparent}>
        Delete
    </Button>,
]);
  return (
    <DynamicPage
      {...props}
      //alwaysShowContentHeader
      headerContentPinnable
      showHideHeaderButton
      backgroundDesign="Solid"
      description="Inquiry - Setup - Transfers"
      headerTitle={
        <DynamicPageTitle style={{ color: "#0854a0",position:"sticky" }}
        breadcrumbs={<Title level={"H3"} wrappingType="None">
        Revenue Ownership Owner Details Maintenance<Icon name="slim-arrow-down" tooltip="slim-arrow-down" design="Transparent" />
      </Title>}
        > </DynamicPageTitle>
      }
      headerContent={
        <DynamicPageHeader headerPinned>
         <HeaderDetails revenueDeckHeaderData={revenueDeckHeaderData} />
        </DynamicPageHeader>
      }
    >
      <TaxDeductDialog
        open={taxDedcutDialogOpen}
        handleClose={handletaxDedcutDialogClose}
      />
      <BurdenGroupDialog
        open={burdenGroupDialogOpen}
        handleClose={handleBurdenGroupDialogClose}
      />
      <Comments
        open={commentsDialogOpen}
        handleClose={handleCommentsDialogClose}
      />
      <DoiOwnerTable
          title={"Owner Details"}
          isLoading={isLoading}
          ownerDetailsTableData={ownerDetailsTableData}
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
        
    </DynamicPage>
  );
};

export default Owners;
