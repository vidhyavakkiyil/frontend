import { Button, ButtonDesign, DynamicPage, DynamicPageHeader, DynamicPageTitle, Icon, Label, Table, TableColumn, Title } from '@ui5/webcomponents-react';
import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import VentureHeader from './VentureHeader';

const headers = [
  "Client",
  "Company Code",
  "Joint Venture",
  "Division of interest (DOI)",
 " Customer/Vendor Indicator",
  "PRA owner",
  "Participant Interest Type",
  "Owner Interest Sequence Number",
  "Effective from date",
  "Non-key-fields OIU_DO_DO",
  "Effective To Date",
  "Division of Interest Number",
  "Joint Interest Billing Offset Flag",
  "Net Revenue Interest Percent",
  "Suspense Reason Code",
  "Tax Free Code",
  "Bearer Group Number",
  "Payout Code",
  "Pay Code",
  "Entitlement Code",
 " Sliding Scale Indicator Flag",
  "MMS Percent of Proceeds Flag",
  "Dual Accounting Flag",
  "Entity Code",
  "Accounting Entry Override Flag",
  "Interest Category",
  "Minimum Royalty Date",
  "Currency Key",
  "Minimum Royalty Amount",
  "Advance Arrears Payment Code",
  "Carried bearer group code",
  "Pay on Lease Use Fuel",
  "JIB Partner",
  "Production Payment Owner",
  "MMS Reconciliation Flag",
  "Creator and date/time created",
  "Name of Person who Created the Object",
  "UTC Time Stamp in Short Form (YYYYMMDDhhmmss)",
  ];
    
    const tableData = [ 
      "500",
      "AG01",
      "CP0002",
      "00001",
      "V",
      "1. 400005 2. 400006 3. 400007",
      "1. WI 2. RI 3. WI",
      "01",
      "1.1.2019",
      "",
      "31.12.9999",
      "1. 41000000230",
      "2. 41000000231",
      "3. 41000000232",
      "",
      "",
      "01",
      "2. For RI - 01",
      "",
      "1",
      "A",
      "",
      "",
      "",
      "1.08 2. 08 3. 08",
      "",
     " 1. W 2. R 3. W",
      "00.00.00",
      "",
      "0",
      "",
      "",
      "N",
      "",
      "",
      "OIL500021",
      "20.210.409.201.628",
      
  ];
function DoiOwnerTable(props) {
    const navigate = useNavigate();
  
  return (
   <>
        <VentureHeader />
   <Table
    {...props}
    columns={headers.map((columm, index) => {
      return (
        <TableColumn
        //minWidth={800}
        // style={{
        //   width: "12rem",
        // }}
        >
          <label style={{marginRight:"20px"}}>{columm}</label>
        </TableColumn>
      );
    })}
    busyDelay={0}
    //growing="Button"
    hideNoData={true}
    mode={"SingleSelect"}
    stickyColumnHeader={true}
    style={{
      overflow: "scroll",
      height: "200px",
      //   overflowX: "hidden",
      //   overflowY: "hidden",
      marginRight: 0,
      marginLeft: 0,
      paddingLeft: 0,}}
  ><TableColumn> <Icon   name="settings"/></TableColumn>
    {tableData.map((row,index) => {
      return (
        <>
        <TableColumn>
          
         <Label  style={{marginLeft:"10px"}}>{row}</Label>
        </TableColumn></>
      );
    })}
  </Table></>
  )
}

export default DoiOwnerTable