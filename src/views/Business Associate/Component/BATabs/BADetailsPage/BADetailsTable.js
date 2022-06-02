import { Label, Table, TableCell, TableColumn, TableRow, TabSeparator } from '@ui5/webcomponents-react';
import React from 'react'


const headers = [
  "Usage Code",
  "TIN / SS#",
  "Entity Type",
  "Tax Type",
];
function BADetailsTable(props) {
  const { tableData, isLoading, filterData ,title} = props;
  return (
    <div><label style={{marginBottom:'10px'}}>{title}</label>
     <Table
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
              <TableCell>
                <Label>{row.ba_number}</Label>
              </TableCell>
              <TableCell>
                <Label>{row.name_1}</Label>
              </TableCell>
              <TableCell>
                <Label>{row.address_1}</Label>
              </TableCell>
              <TableCell>
                <Label>{row.address_2}</Label>
              </TableCell>
              <TableCell>
                <Label>{row.address_3}</Label>
              </TableCell>
              
            </TableRow>
          );
        })}
      </Table> 
    </div>
  )
}

export default BADetailsTable