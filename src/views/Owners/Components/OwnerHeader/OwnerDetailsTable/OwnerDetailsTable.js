import { Bar, Button, ButtonDesign, FlexBox, Icon, Input, Label, Table, TableCell, TableColumn, TableRow, TabSeparator, Title } from '@ui5/webcomponents-react';
import React from 'react'
import { Link } from 'react-router-dom';

         

const headers = [
 "Entity Type",
   "Owner Name",
  "Interest Type",
   "Suspense Reason", 
   "Pay Code",
   "JVA Owner",
     "NRI",
     "GWI",
];
function OwnerDetailsTable(props) {
  const {title,isLoading,ownerDetailsTableData, ...rest } = props;
  console.log(ownerDetailsTableData)
  return (
    <div><div>
      <Bar  startContent={<>
        <label>{title}</label>
            
            </>} endContent={<>
              <Input placeholder="Search" ></Input>
              <Button  style={{ marginRight:"5px"}} icon="edit"  design="Transparent"/>
    <Button  style={{ marginRight:"5px"}} icon="show" design="Transparent" />
    <Button style={{ marginRight:"5px"}}  icon="provision" design="Transparent" />
    <Button style={{ marginRight:"5px"}}  icon="action-settings" design="Transparent" />
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
       busy={isLoading}
       busyDelay={0}
      // growing="Button"
       hideNoData={true}
       mode={"SingleSelect"}
       stickyColumnHeader={true}
     >

       {ownerDetailsTableData.map((row) => {
         return (
           <TableRow>
              <TableCell>
               <Label>{row.Entity_Type}</Label>
             </TableCell>
             <TableCell>
               <Label>{row.Owner_Name}</Label>
             </TableCell>
             <TableCell>
               <Label>{row.Interest_Type}</Label>
             </TableCell>
             <TableCell>
               <Label>{row.Suspense_Reason}</Label>
             </TableCell>
             
             <TableCell>
               <Label>{row.Pay_Code}</Label>
             </TableCell>
             <TableCell>
               <Label>{row.Owner_ID}</Label>
             </TableCell>
             <TableCell>
               <Label>{row.NRI}</Label>
             </TableCell>
             <TableCell>
               <Label>{row.GWI}</Label>
             </TableCell>
             
           </TableRow>
         );
       })}
     </Table> 
   </div>
  )
}

export default OwnerDetailsTable 