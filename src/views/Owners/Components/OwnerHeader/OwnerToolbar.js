import { Button, Toolbar, ToolbarSeparator, ToolbarSpacer } from '@ui5/webcomponents-react'
import React from 'react'
import TaxDeductDialog from '../TaxDeduct/TaxDeduct/TaxDeductDialog';

function OwnerToolbar(props) {
    const {
        addNewOwnerDetailsData,
        handletaxDedcutDialogOpen,
        handleBurdenGroupDialogOpen,
        handleCommentsDialogOpen,
      } = props;
  return (
    <Toolbar {...props} style={{marginTop:"100px",alignItems:"center"}}>
    <ToolbarSpacer />
  <Button icon="add" tooltip="Add" design="transparent" onClick={addNewOwnerDetailsData} /><ToolbarSeparator />
  <Button icon="edit" tooltip="Edit" design="transparent" /><ToolbarSeparator />
  <Button icon="delete" tooltip="Delete" design="transparent" /><ToolbarSeparator />
  <Button icon="cancel" tooltip="Cancel" design="transparent" /><ToolbarSeparator />
  <Button icon="chain-link" tooltip="Tax / Deduct" design="transparent" onClick={handletaxDedcutDialogOpen}/><ToolbarSeparator />
  <Button icon="globe" tooltip="Burden Group" design="transparent" /><ToolbarSeparator />
  <Button icon="comment" tooltip="Comment" design="transparent" onClick={handleBurdenGroupDialogOpen}/><ToolbarSeparator />
  <Button icon="business-by-design" tooltip="Price Contract" design="transparent" onClick={handleCommentsDialogOpen}/><ToolbarSeparator />
  </Toolbar>
  )
}

export default OwnerToolbar