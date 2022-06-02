import { Button, ButtonDesign, DynamicPage, DynamicPageHeader, DynamicPageTitle, Icon, Title } from '@ui5/webcomponents-react';
import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router-dom';
import Config from '../../../Config';
import CustomToolbar from '../../DOI/components/Toolbar/Toolbar';
import PositionHeader from './PositionHeader/PositionHeader';
import PayoutPositionTable from './PositionTable/PayoutPositionTable';

function PayoutPostion(props) {
  const params = useParams();
  const positionHeaderInitialData = {
    company: "",
    venture: "",
    owner: "",
    well_id: "",
    well_name: "",
    start_date: "",
    end_date: "",
    beginning_balance: "",
  };
  const [positionHeaderData, setPositionHeaderData] = useState(
    positionHeaderInitialData
  );

  const getPositionHeaderData = async () => {
    let url =
      Config.NODE_API_BASE_URL +
      Config.GET_POSITION_HEADER_DATA +
      params.ownerid;
    await axios.get(url).then((res) => {
      let data = res.data[0];
      setPositionHeaderData({
        company: data.company + " - " + data.company_name,
        venture: data.venture + " - " + data.venture_name,
        owner: data.owner_ID + " - " + data.owner_name,
        well_id: data.well_ID,
        well_name: data.well_name,
        start_date: data.start_date,
        end_date: data.end_date,
        beginning_balance: "$0.00",
      });
      setPayoutPosition((prev) => ({
        ...prev,
        bal_adj_total: data.bal_adj_total,
      }));
    });
  };

  useEffect(() => {
    console.log("positionHeaderData::", positionHeaderData);
  }, [positionHeaderData]);

  //Payout Position
  const [payoutPosition, setPayoutPosition] = useState({
    total_revenue: 0.0,
    total_expense: 0.0,
    bal_adj_total: 0.0,
  });
  // Expense Details
  const [expenseTableData, setExpenseTableData] = useState([]);
  const getPositionExpenseTableData = async () => {
    let url =
      Config.NODE_API_BASE_URL +
      Config.GET_POSITION_EXPENSE_TABLE_DATA +
      params.ownerid;
    await axios.get(url).then((res) => {
      setExpenseTableData(res.data);
      let totalExp = 0.0;
      res.data.forEach((row) => {
        totalExp += parseFloat(row.total_exp_amt);
      });
      setPayoutPosition((prev) => ({ ...prev, total_expense: totalExp }));
    });
  };
  // Revenue Details
  const [revenueTableData, setRevenueTableData] = useState([]);
  const getPositionRevenueTableData = async () => {
    let url =
      Config.NODE_API_BASE_URL +
      Config.GET_POSITION_REVENUE_TABLE_DATA +
      params.ownerid;
    await axios.get(url).then((res) => {
      setRevenueTableData(res.data);
      let totalRev = 0.0;
      res.data.forEach((row) => {
        totalRev += parseFloat(row.net);
      });
      setPayoutPosition((prev) => ({ ...prev, total_revenue: totalRev }));
    });
  };
  useEffect(() => {
    getPositionHeaderData();
    getPositionExpenseTableData();
    getPositionRevenueTableData();
  }, []);
  const [headerVariant, setHeaderVariant] = useState('Header Variant 1');
  const [navigationItems, setNavigationItems] = useState([<Button key={'decline'} icon="decline" design={ButtonDesign.Transparent} />]);
  const [actionItems, setActionItems] = useState([<Button key={'edit'} design={ButtonDesign.Emphasized}>
          Edit
        </Button>, <Button key={'delete'} design={ButtonDesign.Transparent}>
          Delete
        </Button>]);

  const selectVariant = e => {
    const selectedVariant = e.detail.selectedVariant.children;
    setHeaderVariant(selectedVariant);
    setNavigationItems(selectedVariant === 'Header Variant 2' ? [<Button key={'fullscreen'} icon="full-screen" design={ButtonDesign.Transparent} />, <Button key={'exitFullscreen'} icon="exit-full-screen" design={ButtonDesign.Transparent} />, <Button key={'decline'} icon="decline" design={ButtonDesign.Transparent} />] : [<Button key={'decline'} icon="decline" design={ButtonDesign.Transparent} />]);
    setActionItems(selectedVariant === 'Header Variant 1' ? [<Button key={'edit'} design={ButtonDesign.Emphasized}>
                  Edit
                </Button>, <Button key={'delete'} design={ButtonDesign.Transparent}>
                  Delete
                </Button>] : [<Button key={'copy'} design={ButtonDesign.Transparent}>
                  Copy
                </Button>, <Button key={'action'} icon="action" design={ButtonDesign.Transparent} />]);
  };

  const [collapsed, setCollapsed] = useReducer(coll => !coll, true);
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
        Payout_Position +/- Inquiry and Reporting
      </Title>}
        > </DynamicPageTitle>
      }
      headerContent={
        <DynamicPageHeader headerPinned>
          <PositionHeader positionHeaderData={positionHeaderData}/>
        </DynamicPageHeader>
      }
    ><PayoutPositionTable/>
     </DynamicPage>
  )
}

export default PayoutPostion


