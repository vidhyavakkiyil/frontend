import { Bar, Button, Card, Dialog, Icon, SelectDialog, StandardListItem, Title } from '@ui5/webcomponents-react';
import React, { useState } from 'react'
import ProvisionsTable from './ProvisionsTable';



function PaperComponent(props) {
  return (
    <SelectDialog
      handle="#tax-deduct-dialog"
      cancel={'[class*="MuiDialogContent-root"]'}
      draggable={true}
    >
      <Card {...props} />
    </SelectDialog>
  );
}


function Provisions(props) {
  const { open, provisionTableData, handleProvisionDialogClose } = props;
  console.log(provisionTableData)
  const [addRow, setAddRow] = React.useState(false);
  const addBalAdjHandler = () => {
    setAddRow(true);
  };
  const handleCloseDialog = () => {
    setAddRow(false);
  };
  const [saveBalAdj, setSaveBalAdj] = useState(false);

  const handleSaveAndClose = () => {
    setSaveBalAdj(true);
  };
  return (
    <div>
      <Button onClick={addBalAdjHandler} icon="provision"></Button>
      <Dialog {...props} open={addRow} header={<Bar endContent={<Icon name="settings" />}>
               <Title style={{ cursor: "move" }} id="tax-deduct-dialog"> Balance Adjustment</Title>
              </Bar>} footer={<Bar endContent={<div><Button onClick={handleCloseDialog}>Cancel</Button>
         
        
          <Button autoFocus onClick={handleSaveAndClose}>
            Save
          </Button></div>} ></Bar>}>
            <ProvisionsTable provisionTableData={provisionTableData} />
            </Dialog>
    </div>
  )
}

export default Provisions