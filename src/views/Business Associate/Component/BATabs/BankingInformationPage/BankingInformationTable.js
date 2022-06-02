import { Label, Table, TableCell, TableColumn, TableRow, TabSeparator } from '@ui5/webcomponents-react';
import React from 'react'


const headers = [
  "Bank ID",
  "Bank Name",
  "Routing Number",
  "Account Number",
  "Account Type",
 
];
function BankingInformationTable(props) {
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
        //growing="Button"
        hideNoData={true}
        mode={"SingleSelect"}
        stickyColumnHeader={true}
      >

        {tableData.map((row) => {
          return (
            <TableRow>
              <TableCell>
                <Label>{row.bank_id}</Label>
              </TableCell>
              <TableCell>
                <Label>{row.bank_name}</Label>
              </TableCell>
              <TableCell>
                <Label>{row.routing_number}</Label>
              </TableCell>
              <TableCell>
                <Label>{row.account_number}</Label>
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

export default BankingInformationTable