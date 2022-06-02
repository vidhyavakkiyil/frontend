import { BusyIndicator, Button, CheckBox, FlexBox, Icon, Label, MultiInput, Option, ResponsiveGridLayout, Select, TabSeparator, Token, Toolbar, ToolbarSpacer } from '@ui5/webcomponents-react'
import React from 'react'

function SubToolbar(props) {
  return (
    
    <FlexBox {...props}>
   <Select
         style={{ marginLeft:"30px", marginRight:"10px"}} 
         text="axaas"
         name="company_code"
         label="Company"
         required={true}
         value="Company"
         placeholder="Select"
     ><Option value="">
     <em>Popin Layout Options</em>
   </Option></Select>
     <Label style={{marginTop:"10px"}}>Sticky Options : </Label>
     <CheckBox style={{ marginRight:"10px"}}   text="ColumnHeaders" />
     <CheckBox style={{ marginRight:"10px"}}    text="HeaderToolbar" />
     <CheckBox style={{ marginRight:"10px"}}    text="InfoToolbar" />
     <Button   style={{ marginRight:"1px"}} design="Transparent">Hide/Show Info Toolbar</Button>
 <FlexBox >
<Button  style={{ marginRight:"7px"}} icon="edit"  design="Positive"/>
<Button  style={{ marginRight:"7px"}} icon="show" design="Positive" />
<Button style={{ marginRight:"7px"}}  icon="provision" design="Positive" />
<Button style={{ marginRight:"7px"}}  icon="horizontal-grip" design="Transparent" />

</FlexBox>
     

 </FlexBox>
  )
}

export default SubToolbar