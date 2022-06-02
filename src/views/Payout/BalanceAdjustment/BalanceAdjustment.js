import { Bar, Button, Card, Dialog, Icon, SelectDialog, StandardListItem, Title } from '@ui5/webcomponents-react';
import React, { useState } from 'react'
import BalanceAdjustmentTable from './BalanceAdjustmentTable';



function PaperComponent(props) {
  return (
    <SelectDialog 
      handle="#tax-deduct-dialog"
      cancel={'[class*="MuiDialogContent-root"]'}
      draggable={true}
    >
      <Card {...props} />
    </SelectDialog >
  );
}

function BalanceAdjustment(props) {
  const {
    tableData,
    open,
    balAdjData,
    setBalAdjData,
    handleClose,
    setFormData,
    handleBalAdjDialogClose,
  } = props;
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
      <Button onClick={addBalAdjHandler}>Balance Adjustment</Button>
      <Dialog {...props} open={addRow} header={<Bar endContent={<Icon name="settings" />}>
               <Title style={{ cursor: "move" }} id="tax-deduct-dialog"> Balance Adjustment</Title>
              </Bar>} footer={<Bar endContent={<div> <Button autoFocus style={{marginRight:"3px"}}  onClick={handleSaveAndClose}>
            Save
          </Button><Button onClick={handleCloseDialog}>Cancel</Button>
         
        
         </div>} ></Bar>}>
              <BalanceAdjustmentTable
              tableData ={tableData}
              addRow={addRow}
              setAddRow={setAddRow}
              balAdjData={balAdjData}
              setBalAdjData={setBalAdjData}
              saveBalAdj={saveBalAdj}
              setFormData={setFormData}
              handleBalAdjDialogClose={handleBalAdjDialogClose}
            />
              
              </Dialog>
      
    </div>
  )
}

export default BalanceAdjustment