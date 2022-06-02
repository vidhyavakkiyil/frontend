import { Button, Icon, Label, Table, TableCell, TableColumn, TableRow, TabSeparator, Toolbar } from '@ui5/webcomponents-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SubToolbar from '../../DOI/components/Toolbar/SubToolbar';
import PayoutPostion from '../Payout_Position/PayoutPosition';
import Provisions from '../Provisions/Provisions';


const headers = [
  "",
  "Company ID",
  "Company Name",
  "Venture ID",
  "Venture Name",
  "Well ID",
  "Owner ID",
  "Owner Name",
  "Payout Type",
  "BPO DOI",
  "APO DOI",
  "Reporting Frequency",
  "Balance Adj Total",
  "Start Date",
  "End Date",

];



function PayoutHeaderTable(props) {
  const { tableData, isLoading, title, filterData, provisionTableData } = props;
  const navigate = useNavigate();
  return (
    <div>
      <Toolbar filterData={filterData} />
      <label >{title}</label>
      <div ><SubToolbar /></div>
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
              <Label style={{ marginLeft: "10px" }}>{columm}</Label>
            </TableColumn>
          );
        })}
        busy={isLoading}
        busyDelay={0}
        //growing="Button"
        hideNoData={true}
        mode={"SingleSelect"}
        stickyColumnHeader={true}
      >

        {tableData.map((row) => {
          return (
            <TableRow>
              <TableCell style={{ marginLeft: '10px' }}>
                <div><Button icon='customer-briefing' onClick={() => navigate("/Payout_Position")}></Button>
                  <Provisions
                    provisionTableData={provisionTableData}
                  /></div>

              </TableCell>
              <TableCell>
                <Label style={{ marginLeft: '10px' }}>{row.company}</Label>
              </TableCell>
              <TableCell>
                <Label style={{ marginLeft: '10px' }}>{row.company_name}</Label>
              </TableCell>
              <TableCell>
                <Label style={{ marginLeft: '10px' }}>{row.venture}</Label>
              </TableCell>
              <TableCell>
                <Label style={{ marginLeft: '10px' }}>{row.venture_name}</Label>
              </TableCell>
              <TableCell>
                <Label>{row.well_ID}</Label>
              </TableCell>
              <TableCell>
                <Label >{row.owner_ID}</Label>
              </TableCell>
              <TableCell>
                <Label style={{ marginLeft: '10px' }}>{row.owner_name}</Label>
              </TableCell>
              <TableCell>
                <Label style={{ marginLeft: '10px' }}>{row.payout_type}</Label>
              </TableCell>
              <TableCell>
                <Label style={{ marginLeft: '10px' }}>{row.BPO_DOI}</Label>
              </TableCell>
              <TableCell>
                <Label style={{ marginLeft: '10px' }}>{row.APO_DOI}</Label>
              </TableCell>
              <TableCell>
                <Label style={{ marginLeft: '10px' }}>{row.reporting_frequency}</Label>
              </TableCell>
              <TableCell>
                <Label style={{ marginLeft: '10px' }}>{row.bal_adj_total}</Label>
              </TableCell>
              <TableCell>
                <Label style={{ marginLeft: '10px' }}>{row.start_date}</Label>
              </TableCell>
              <TableCell>
                <Label style={{ marginLeft: '10px' }}>{row.end_date}</Label>
              </TableCell> 
            </TableRow>
          );
        })}
      </Table>
    </div>
  )
}

export default PayoutHeaderTable