import { Label, Table, TableCell, TableColumn, TableRow, TabSeparator } from '@ui5/webcomponents-react';
import React from 'react'



const headers = [
  "Bank ID",
  "Bank Name",
  "Routing Number",
  "Account Number",
  "Account Type",
 
];
function MinimumPayTable(props) {
  const { tableData,title } = props;
  return (
    <div><label style={{marginBottom:'10px'}}>{title}</label>
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
              <Label>{columm}</Label><TabSeparator />
            </TableColumn>
          );
        })}
        busyDelay={0}
       // growing="Button"
        hideNoData={true}
        mode={"SingleSelect"}
        stickyColumnHeader={true}
      >


        {tableData.map((row) => {
          return (
            <TableRow>
              <TableCell>
                <Label>{row.pay_code}</Label>
              </TableCell>
              <TableCell>
                <Label>{row.minimum_pay}</Label>
              </TableCell>
              <TableCell>
                <Label>{row.effective_date_from}</Label>
              </TableCell>
              <TableCell>
                <Label>{row.effective_date_to}</Label>
              </TableCell>
              <TableCell>
                <Label>{row.account_type}</Label>
              </TableCell>
              
            </TableRow>
          );
        })}
      </Table>
    </div>
  )
}

export default MinimumPayTable