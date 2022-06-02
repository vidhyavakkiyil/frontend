import { Bar, Button, Dialog, Icon, Title } from '@ui5/webcomponents-react';
import React, { useState } from 'react'
import BurdenGroupForm from './BurdenGroupForm';

function BurdenGroupDialog(args) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const onButtonClick = () => {
    setDialogIsOpen(true);
  };

  const handleClose = () => {
    setDialogIsOpen(false);
  };
  return (
  <>
    <Button onClick={onButtonClick}>BurdenGroup</Button>
          <Dialog {...args} open={dialogIsOpen} header={<Bar endContent={<Icon name="settings" />}>
               <Title>Tax / Deduct Code-Exempt,free</Title>
              </Bar>} footer={<Bar endContent={<div><Button onClick={handleClose}>Cancel</Button><label> </label><Button onClick={handleClose}>Save</Button></div>} ></Bar>}>
             
              <BurdenGroupForm/> 
              </Dialog></>
  )
}

export default BurdenGroupDialog