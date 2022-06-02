import { Label, Table, TableCell, TableColumn, TableRow, TabSeparator } from '@ui5/webcomponents-react';
import React from 'react'

const headers = [
    "Interest Type",
      "NRI",
   ];
const columns = [
    {
      title: "Interest Type",
      field: "interest_type",
      headerStyle: {
        paddingTop: 0,
        paddingBottom: 5,
        fontWeight: "bold",
        textAlign: "left",
      },
      width: "15%",
    },
    {
      title: "Net Revenue Interest",
      field: "nri",
      type: "numeric",
      headerStyle: { paddingTop: 0, paddingBottom: 5, fontWeight: "bold" },
      //align: "right",
      // cellStyle: {
      //   textAlign: "right",
      // },
      width: "70%",
    },
  ];
  
  const data = [
    {
      interest_type: "WI",
      nri: "0.95000000",
    },
    {
      interest_type: "RI",
      nri: "0.02500000",
    },
    {
      interest_type: "ORRI",
      nri: "0.01250000",
    },
    {
      interest_type: "STATE",
      nri: "0.01250000",
    },
    {
      interest_type: "FEDERAL",
      nri: "0.00000000",
    },
    {
      interest_type: "INDIAN",
      nri: "0.00000000",
    },
    {
      interest_type: "Totals:",
      nri: "1.00000000",
    },
  ];
  
  if (columns) {
    columns.map((data) => {
      data.cellStyle = { paddingTop: 1, paddingBottom: 1 };
    });
  }
  
  const MyNewTitle = ({ text, variant }) => (
    <Label
      variant={variant}
      style={{
        whiteSpace: "nowrap",
        overflow: "show",
        //textOverflow: "ellipsis",
        fontSize: "20px",
        textAlign: "center",
        minHeight: "42px",
        alignSelf: "center",
        //lineHeight: "13px",
        //paddingLeft: "10px",
      }}
    >
      {text}
    </Label>
  );

function DeckTotalsTable(props) {
    let { deckTotalsTableData } = props;
  return (
    <div ><label style={{marginBottom:'10px'}}>{<MyNewTitle  text="Deck Totalsq" />}</label>
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
       busyDelay={0}
       //growing="Button"
       hideNoData={true}
       mode={"SingleSelect"}
       stickyColumnHeader={true}
     >

       {data.map((row) => {
         return (
           <TableRow>
              <TableCell>
               <Label>{row.interest_type}</Label>
             </TableCell>
             <TableCell>
               <Label>{row.nri}</Label>
             </TableCell>
             
           </TableRow>
         );
       })}
     </Table> 
   </div>
  )
}

export default DeckTotalsTable