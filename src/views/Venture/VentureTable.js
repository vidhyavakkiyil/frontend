import { Icon, Label, Table, TableCell, TableColumn, TableRow } from '@ui5/webcomponents-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import DOI from '../DOI/DOI';
const headers = [
"Client",
"Company Code",
"Joint Venture",
"Venture Interest Code",
"Venture name",
"Description",
"Venture Status",
"Status Effective Date",
"Country Key",
"Primary geographical location (PRI geo. loc.)",
"Secondary geographic location",
"Acquired Date",
"Venture Usage Type",
"Old lease ID",
"Unit venture flag",
"DOI by tract flag",
"Drill Fund Flag",
"Onshore/Offshore codes",
"Party Acquired From",
"Party Sold To",
"Legal description",
"Field ID",
"Spacing Order Number",
"Land Venture Number",
"DOI Print Flag",
"Creator and date/time created",
"Name of Person who Created the Object",
"UTC Time Stamp in Short Form (YYYYMMDDhhmmss)"];

const tableData = [ 
 "500",
"AG01",
"CP0002",
"2",
"Joint Venture",
"JOINT VENTURE",
"AC",
"01.01.2019",
"US",
"42",
"001",
"00.00.0000",
"1",
"",
 "",
 "",
"",
"1",
  "",
"",
"",
"",
 "" ,
"",
"",
"IL500021",
"20.210.409.201.305"];

  function VentureTable (props)  {
    console.log(props)
  const {  isLoading,title } = props;
  const navigate = useNavigate();
return (
  <div>
    
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
      busy={isLoading}
      busyDelay={0}
      //growing="Button"
      hideNoData={true}
      mode={"SingleSelect"}
      stickyColumnHeader={true}
    ><TableColumn> <Icon  onClick={() => navigate("/Venture_DoiTable")} name="settings"/></TableColumn>
      {tableData.map((row,index) => {
        return (
          <>
          <TableColumn>
            
           <Label  style={{marginLeft:"10px"}}>{row}</Label>
          </TableColumn></>
        );
      })}
    </Table>
  </div>
  )
}

export default VentureTable