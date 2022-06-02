import { BusyIndicator, Button, CheckBox, Grid, Label, Option, ResponsiveGridLayout, Select, Toolbar, ToolbarSeparator, ToolbarSpacer } from '@ui5/webcomponents-react';
import React from 'react'
import DeckTotalsTable from './DeckTotalsTable/DeckTotalsTable';
import OwnerToolbar from './OwnerToolbar';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 180,
      maxWidth: 300,
    },
  },
};
function OwnerHeader(props) {
  const {
    formData,
    ownerHeaderFormData,
    onChangeFormHandler,
    isLoading,
    addNewOwnerDetailsData,
    deckTotalsTableData,
    handletaxDedcutDialogOpen,
    handleBurdenGroupDialogOpen,
    handleCommentsDialogOpen,
  } = props;
  return (
    <Grid {...props}>
      <div data-layout-span="XL10 L10 M10 S12" >
        <BusyIndicator active={isLoading} delay={0}>
          <ResponsiveGridLayout {...props} columnGap="0.5rem">
            <div
              className="responsiveGridLayoutItem"
              style={{ gridColumn: "span 3" }}
            >
              <Label id=" EntityType"> Entity Type</Label>
              <Select
                labelId="entity-type-label"
                id="entity-type"
                name="entity_type"
                value={formData.entity_type}
                label="Entity Type"
                size="small"
                MenuProps={MenuProps}
                onChange={onChangeFormHandler}
              >
                <Option value="">
                  <em>None</em>
                </Option>
                {ownerHeaderFormData.entity_type.map((entity_type) => {
                  return (
                    <Option value={entity_type}>
                      {entity_type}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div
              className="responsiveGridLayoutItem"
              style={{ gridColumn: "span 3" }}
            >
              <Label id=" PraOwner">PRA Owner</Label>
              <Select
                labelId="pra-owner-label"
                id="pra_owner"
                name="pra_owner"
                value={formData.pra_owner}
                label="Entity Type"
                size="small"
                MenuProps={MenuProps}
                onChange={onChangeFormHandler}
              >
                <Option value="">
                  <em>None</em>
                </Option>
                {ownerHeaderFormData.pra_owner.map((pra_owner) => {
                  return (
                    <Option value={pra_owner}>
                      {pra_owner}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div
              className="responsiveGridLayoutItem"
              style={{ gridColumn: "span 3" }}
            >
              <Label id=" interesttype"> interest_type</Label>
              <Select
                labelId="interest-type-label"
                id="interest_type"
                name="interest_type"
                value={formData.interest_type}
                label="Interest Type"
                size="small"
                MenuProps={MenuProps}
                onChange={onChangeFormHandler}
              >
                <Option value="">
                  <em>None</em>
                </Option>
                {ownerHeaderFormData.interest_type.map((interest_type) => {
                  return (
                    <Option value={interest_type}>
                      {interest_type}
                    </Option>
                  );
                })}
              </Select>
            </div>

            <div
              className="responsiveGridLayoutItem"
              style={{ gridColumn: "span 3" }}
            >
              <Label id=" SuspenseReason"> Suspense Reason</Label>
              <Select
                labelId="suspense-reason-label"
                id="suspense-reason"
                name="suspense_reason"
                value={formData.suspense_reason}
                label="Suspense Reason"
                size="small"
                MenuProps={MenuProps}
                onChange={onChangeFormHandler}
              >
                <Option value="">
                  <em>None</em>
                </Option>
                {ownerHeaderFormData.suspense_reason.map((suspense_reason) => {
                  return (
                    <Option value={suspense_reason}>
                      {suspense_reason}
                    </Option>
                  );
                })}
              </Select>
            </div>

            <div
              className="responsiveGridLayoutItem"
              style={{ gridColumn: "span 3" }}
            >
              <Label id=" praOwner"> JVA Owner</Label>
              <Select
                labelId="pra-owner-label"
                id="pra-owner"
                name="pra_owner"
                value={formData.pra_owner}
                label="Pra Owner"
                size="small"
                MenuProps={MenuProps}
                onChange={onChangeFormHandler}
              >
                <Option value="">
                  <em>None</em>
                </Option>
                {ownerHeaderFormData.pra_owner.map((pra_owner) => {
                  return (
                    <Option value={pra_owner}>
                      {pra_owner}
                    </Option>
                  );
                })}
              </Select>
            </div>

            <div
              className="responsiveGridLayoutItem"
              style={{ gridColumn: "span 3" }}
            >
              <Label id=" gwi">Gross Working Interest</Label>
              <Select
                labelId="gwi-type-label"
                id="gwi-type"
                name="gwi"
                value={formData.gwi}
                label="Entity Type"
                size="small"
                MenuProps={MenuProps}
                onChange={onChangeFormHandler}
              >
                <Option value="">
                  <em>None</em>
                </Option>
                {ownerHeaderFormData.gwi.map((gwi) => {
                  return (
                    <Option value={gwi}>
                      {gwi}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div
              className="responsiveGridLayoutItem"
              style={{ gridColumn: "span 3" }}
            >
              <Label id=" nri"> Net Revenue Interest</Label>
              <Select
                labelId="nri-label"
                id="nri-type"
                name="nri"
                value={formData.nri}
                label="nri Type"
                size="small"
                MenuProps={MenuProps}
                onChange={onChangeFormHandler}
              >
                <Option value="">
                  <em>None</em>
                </Option>
                {ownerHeaderFormData.nri.map((nri) => {
                  return (
                    <Option value={nri}>
                      {nri}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div
              className="responsiveGridLayoutItem"
              style={{ gridColumn: "span 3" }}
            >
              <CheckBox
                name="jib_revenue_netting"
                checked={
                  ownerHeaderFormData.jib_revenue_netting
                    ? ownerHeaderFormData.jib_revenue_netting
                    : false
                }
                onChange={onChangeFormHandler}
              /><Label id="Jib Revenue Netting"> Jib Revenue Netting</Label></div>

          </ResponsiveGridLayout> </BusyIndicator>
          <OwnerToolbar
        addNewOwnerDetailsData={addNewOwnerDetailsData}
        handletaxDedcutDialogOpen={handletaxDedcutDialogOpen}
        handleBurdenGroupDialogOpen={handleBurdenGroupDialogOpen}
        handleCommentsDialogOpen={handleCommentsDialogOpen} />
      </div >
      <div data-layout-span="XL2 L2 M2 S12" ><DeckTotalsTable /></div>



      



    </Grid>
  )
}

export default OwnerHeader 