import { Bar, Button, Input, Label, Table, TableCell, TableColumn, TableRow, TabSeparator } from '@ui5/webcomponents-react';
import React from 'react'

const headers = [
  "Acct Date",
    "Svc Date",
   "Product",
    "UOM", 
    "Interest",
    "Rec Interest",
      "Volume",
      "Value",
      "Taxes",
      "Deducts",
      "Revenue Net",
 ];
function PositionRevenue() {
  return (
    <div><div>
      <Bar  startContent={<>
        <label>Revenue</label>
            
            </>} endContent={<>
              <Input placeholder="Search" />
              <Button  style={{ marginRight:"5px"}} icon="edit"  design="Transparent"/>
    <Button  style={{ marginRight:"5px"}} icon="show" design="Transparent" />
    <Button style={{ marginRight:"5px"}}  icon="provision" design="Transparent" />
    <Button style={{ marginRight:"5px"}}  icon="horizontal-grip" design="Transparent" />
            </>}>
         
        </Bar>
    </div>
    <Table style={{
            overflow: "scroll",
            height: "auto",
            //   overflowX: "hidden",
            //   overflowY: "hidden",
            marginRight: 0,
            marginLeft: 0,
            paddingLeft: 0,
          }}
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

      
           <TableRow>
              <TableCell>
               <Label></Label>
             </TableCell>
            
             
           </TableRow>
     </Table> 
   </div>
  )
}

export default PositionRevenue