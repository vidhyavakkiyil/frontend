import { Button, CheckBox, Grid, Label, ResponsiveGridLayout, Select, Toolbar, ToolbarSeparator, ToolbarSpacer } from '@ui5/webcomponents-react'
import React from 'react'
import { Link } from 'react-router-dom'
import TaxDeductTable from '../TaxDeduct/TaxDeduct/TaxDeductTable '
import DeckTotalsTable from './DeckTotalsTable/DeckTotalsTable'
import OwnerToolbar from './OwnerToolbar'


function OwnerHeaderSkeleton(props) {
  return (
    <Grid {...props}>
          <div data-layout-span="XL10 L10 M10 S12" >
         <ResponsiveGridLayout {...props} >
        <div
          className="responsiveGridLayoutItem"
          style={{ gridColumn: "span 3",marginTop:"50px" }}
        >
          <Label id=" EntityType"> Entity Type</Label>
          <Select
            labelId="entity-type-label"
            id="entity-type"
            name="entity_type"
            label="Entity Type"
            size="small"
          >
          </Select>
        </div>
        <div
          className="responsiveGridLayoutItem"
          style={{ gridColumn: "span 3" ,marginTop:"50px"}}
        >
          <Label id=" PraOwner">PRA Owner</Label>
          <Select
            labelId="pra-owner-label"
            id="pra_owner"
            name="pra_owner"
            label="Entity Type"
            size="small"
          >
          </Select>
        </div>
        <div
          className="responsiveGridLayoutItem"
          style={{ gridColumn: "span 3",marginTop:"50px" }}
        >
          <Label id=" interesttype"> interest_type</Label>
          <Select
            labelId="interest-type-label"
            id="interest_type"
            name="interest_type"
            label="Interest Type"
            size="small"
          >
          </Select>
        </div>

        <div
          className="responsiveGridLayoutItem"
          style={{ gridColumn: "span 3",marginTop:"50px" }}
        >
          <Label id=" SuspenseReason"> Suspense Reason</Label>
          <Select
            labelId="suspense-reason-label"
            id="suspense-reason"
            name="suspense_reason"
            label="Suspense Reason"
            size="small"
          >
          </Select>
        </div>

        <div
          className="responsiveGridLayoutItem"
          style={{ gridColumn: "span 3",marginTop:"50px" }}
        >
          <Label id=" praOwner"> JVA Owner</Label>
          <Select
            labelId="pra-owner-label"
            id="pra-owner"
            name="pra_owner"
            label="Pra Owner"
            size="small"
          >
          </Select>
        </div>

        <div
          className="responsiveGridLayoutItem"
          style={{ gridColumn: "span 3",marginTop:"50px" }}
        >
          <Label id=" nri">Net Revenue Interest</Label>
          <Select
            labelId="nri-label"
            id="nrie"
            name="nri"
            label="nri Type"
            size="small"
          >
          </Select>
        </div>
        <div
          className="responsiveGridLayoutItem"
          style={{ gridColumn: "span 3",marginTop:"50px" }}
        >
          <Label id=" gwi"> Gross Working Interest</Label>
          <Select
            labelId="gwi-label"
            id="gwi-type"
            name="gwi"
            label="gwi Type"
            size="small"
          >
          </Select>
        </div>
        <div
          className="responsiveGridLayoutItem"
          style={{ gridColumn: "span 3" ,marginTop:"50px"}}
        >
          <CheckBox
            name="jib_revenue_netting"
            checked={true}
          /><Label id="Jib Revenue Netting"> Jib Revenue Netting</Label></div></ResponsiveGridLayout>
          <OwnerToolbar />
          </div >
          <div  data-layout-span="XL2 L2 M2 S12" ><DeckTotalsTable /></div>
          </Grid>
    
  )
}

export default OwnerHeaderSkeleton