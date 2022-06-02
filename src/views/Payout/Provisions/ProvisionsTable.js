import { Bar, Button, Card, CheckBox, Label, Table, TableCell, TableColumn, TableRow } from '@ui5/webcomponents-react';
import React from 'react'
import SubToolbar from '../../DOI/components/Toolbar/SubToolbar';
const headers = [
  "Account",
  "Account Description",
  "%",
  "Exempt"
];
function createData(col1, col2, col3, col4) {
  return { col1, col2, col3, col4 };
}

function ProvisionsTable(props) {
  const { provisionTableData } = props;
  const rows = provisionTableData.map((row) => {
    return createData(
      row.account_ID,
      row.account_description,
      row.penalty_percentage.toString() + " %",
      <CheckBox
        key={row.account_ID}
        id={row.account_ID}
        checked={parseInt(row.penalty_percentage) === 0 ? true : false}
      />
    );
  });
  console.log(rows)
  console.log(provisionTableData)
  return (

    <div>

      <Bar >
      <SubToolbar/>
      </Bar>



      <Table
        {...props}
        columns={
          headers.map((columm, index) => {
            return (
              <TableColumn
              //minWidth={800}
              // style={{
              //   width: "12rem",
              // }}
              >
                <Label style={{marginLeft:"10px"}}>{columm}</Label>
              </TableColumn>
            );
          })
            
          }
        busyDelay={0}
        //growing="Button"
        hideNoData={true}
        mode={"SingleSelect"}
        stickyColumnHeader={true}
      >
{rows.map((row) => {
          return (
            <TableRow>
              <TableCell>
                <Label>{row.col1}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:'10px'}}>{row.col2}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:'10px'}}>{row.col3}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:'10px'}}>{row.venture_name}</Label>
              </TableCell>
              
              
              
            </TableRow>
          );
        })}
      </Table>





    </div>
  )
}

export default ProvisionsTable