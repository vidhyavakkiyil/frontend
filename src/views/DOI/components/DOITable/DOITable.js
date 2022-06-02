import React from "react";
import {
  Table,
  TableColumn,
  Label,
  TableRow,
  TableCell,
  ToolbarSpacer,
  Button,
  Toolbar,
  Icon,
  BusyIndicator,
} from "@ui5/webcomponents-react";
import Owners from "../../../Owners/Owners";
import { useNavigate } from "react-router-dom";
import VentureHeader from "../../../Venture/VentureHeader";
import SubToolbar from "../Toolbar/SubToolbar";


const headers = [
  "Company Code",
  "Venture",
  "DOI Code",
  "Well ID",
  "Well Name",
  "DOI Type",
  "Product",
  "Start Date",
  "End Date",
  "DOI Total",
  "Total WI",
  "Total RI",
  "Total ORRI",
  "Total State",
  "Total Federal",
  "Total Indian",
];

const CustomTable = (props) => {
  const navigate = useNavigate();
  const { tableData, isLoading, filterData,title } = props;
  console.log(tableData)
  return (
    <div>
      <label >{title}</label>
      <div ><SubToolbar/></div>
      <BusyIndicator ><Table
        {...props}
        columns={headers.map((columm, index) => {
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
        })}
        busy={isLoading}
        busyDelay={0}
       // growing="Button"
        hideNoData={true}
        mode={"SingleSelect"}
        stickyColumnHeader={true}
      >
        {tableData.map((row) => {
          return (
            <TableRow>
              <TableCell><Icon  onClick={() => navigate("/Owners/"+row.Well_ID)} name="settings"/></TableCell>
              <TableCell>
                <Label style={{marginLeft:"10px"}}>{row.Company_Code}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:"10px"}}>{row.Venture}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:"10px"}}>{row.Universal_DOI_Tier}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:"10px"}}>{row.Well_ID}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:"10px"}}>{row.Well_Name}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:"10px"}}>{row.Universal_DOI_Type}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:"10px"}}>{row.Product}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:"10px"}}>{row.Start_Date}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:"10px"}}>{row.End_Date}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:"10px"}}>{row.Universal_DOI_Total}</Label>
              </TableCell>
              <TableCell>
                <Label>{row.Total_WI}</Label>
              </TableCell>
              <TableCell>
                <Label>{row.Total_RI}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:"10px"}}>{row.Total_ORRI}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:"10px"}}>{row.Total_State}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:"10px"}}>{row.Total_Federal}</Label>
              </TableCell>
              <TableCell>
                <Label style={{marginLeft:"10px"}}>{row.Total_Indian}</Label>
              </TableCell>
            </TableRow>
          );
        })}
      </Table></BusyIndicator >
    </div>
  );
};

export default CustomTable;
