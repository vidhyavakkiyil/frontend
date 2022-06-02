import { Bar, Button, Dialog, Icon, Title } from '@ui5/webcomponents-react';
import React, { useState } from 'react'

function Comments(args) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const onButtonClick = () => {
    setDialogIsOpen(true);
  };

  const handleClose = () => {
    setDialogIsOpen(false);
  };
  return (
    <>
    <Button onClick={onButtonClick}>Comment</Button>
          <Dialog {...args} open={dialogIsOpen} header={<Bar endContent={<Icon name="settings" />}>
               <Title>Comment</Title>
              </Bar>} footer={<Bar endContent={<div><Button onClick={handleClose}>Cancel</Button><label> </label><Button onClick={handleClose}>Save</Button></div>} ></Bar>}>
             
              </Dialog></>
  )
}

export default Comments