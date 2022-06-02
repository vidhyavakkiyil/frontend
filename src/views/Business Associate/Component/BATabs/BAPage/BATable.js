import React from "react";
import { useNavigate } from "react-router-dom";
import { Label, Table, TableCell, TableColumn, TableRow, TabSeparator, TextAlign } from "@ui5/webcomponents-react";



const headers = [
  "BA Number",
  "Name 1",
  "Address 1",
  "Address 2",
  "Address 3",
  "City",
  "State",
  "Postal Code",
 
];

const BATable = (props) => {
  console.log(props)
  const { tableData, isLoading, filterData ,title} = props;

  return (
    <div><label style={{marginBottom:'20px'}}>Business Partner Details</label>
      <Table
        columns={headers.map((columm, index) => {
          return (
            <TableColumn
            //minWidth={1000}
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
        hideNoData={false}
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
  );
};

export default BATable;
