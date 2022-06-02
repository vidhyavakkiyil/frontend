import { Bar, Button, Dialog, Icon, List, StandardListItem, Title } from '@ui5/webcomponents-react';
import React, { useState } from 'react'
import TaxDeductTable from './TaxDeductTable ';


const headers = [
    
  "Tax / Deduct Code",
  "Exempt",
  "Free"
];
const tableData =[
  "Pay",
  "$25.00",
   "10/10/2021",
   "01/04/2022",
];
 

function TaxDeductDialog(args) {
console.log("taxdeductdialog")
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const onButtonClick = () => {
    setDialogIsOpen(true);
  };

  const handleClose = () => {
    setDialogIsOpen(false);
  };
  
  return (
    <> 
     <Button onClick={onButtonClick}>TaxDeductTable</Button>
          <Dialog {...args} open={dialogIsOpen} header={<Bar endContent={<Icon name="settings" />}>
               <Title>Tax / Deduct Code-Exempt,free</Title>
              </Bar>} footer={<Bar endContent={<div><Button onClick={handleClose}>Cancel</Button><label> </label><Button onClick={handleClose}>Save</Button></div>} ></Bar>}>
             
              <TaxDeductTable 
              tableData={tableData}/>
              </Dialog>
    </>
  )
}



export default TaxDeductDialog