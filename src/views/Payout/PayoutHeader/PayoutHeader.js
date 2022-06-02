import { BusyIndicator, Button, ButtonDesign, DatePicker, FilterBar, FilterGroupItem, Input, Label, Option, ResponsiveGridLayout, Select } from '@ui5/webcomponents-react';
import React from 'react'




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
function PayoutHeader(args) {
  const {
    payoutFormMasterData,
    formData,
    populateFormData,
    onChangeFormHandler,
    onChangeDateHandler,
    filterData,
    isLoading,
    handleAddPayoutButtonClicked,
    handleBalAdjBtnClicked,
  } = args;
  return (
      <FilterBar style={{marginTop:"-50px"}}  showFilterConfiguration considerGroupName showGoOnFB showSearchOnFiltersDialog  useToolbar={false} filterContainerWidth={"200px"}>
          <FilterGroupItem label={args.label}  groupName={args.groupName} labelTooltip={args.labelTooltip} loading={args.loading} required={args.required} visible={args.visible} visibleInFilterBar={args.visibleInFilterBar} considerGroupName={args.considerGroupName} >
          <Input placeholder="Placeholder" />
          </FilterGroupItem>
          <FilterGroupItem >
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >Company</Label>
            <Select
              name="company_code"
              label="Company"
              required={true}
              value={populateFormData.company}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
            ><Option value="">
            <em>None</em>
          </Option>
          {payoutFormMasterData.company.map((company) => {
            return (
              <Option value={company}>{company}</Option>
            );
          })}</Select>
          </div>
          </FilterGroupItem>
          <FilterGroupItem >
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >Venture Name</Label>
            <Select
              name="venture"
              label="Venture"
              value={populateFormData.venture}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
              ><Option value="">
              <em>None</em>
            </Option>
            {payoutFormMasterData.venture.map((venture) => {
              return (
                <Option value={venture}>{venture}</Option>
              );
            })}</Select>
          </div>
          </FilterGroupItem>
          <FilterGroupItem >
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >Owner Detail</Label>
            <Select
              name="Owner"
              label="Owner"
              value={populateFormData.owner}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
              ><Option value="">
              <em>None</em>
            </Option>
            {payoutFormMasterData.owner.map((owner) => {
              return (
                <Option value={owner}>{owner}</Option>
              );
            })}</Select>
          </div>
          </FilterGroupItem>
          <FilterGroupItem >
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >well_name</Label>
            <Select
              name="well_name"
              label="Well"
              value={populateFormData.owner}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
              ><Option value="">
              <em>None</em>
            </Option>
            {payoutFormMasterData.owner.map((owner) => {
              return (
                <Option value={owner}>{owner}</Option>
              );
            })}</Select>
          </div>
          </FilterGroupItem>
          <FilterGroupItem >
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >DOI Code</Label>
            <Select
              name="universal_doi_tier"
              label="DOI Code"
              value={populateFormData.well}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
              ><Option value="">
              <em>None</em>
            </Option>
            {payoutFormMasterData.well.map((well) => {
              return (
                <Option value={well}>{well}</Option>
              );
            })}</Select>
          </div>
          </FilterGroupItem>
          <FilterGroupItem >
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >Payout Type</Label>
            <Select
              name="universal_doi_type"
              label="Payout Type"
              value={populateFormData.payout_type}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
              ><Option value="">
              <em>None</em>
            </Option>
            {payoutFormMasterData.payout_type.map((payout_type) => {
              return (
                <Option value={payout_type}>{payout_type}</Option>
              );
            })}</Select>
          </div>
          </FilterGroupItem>
          <FilterGroupItem >
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >BPO DOI</Label>
            <Select
              name="BPO DOI"
              label="BPO DOI"
              value={populateFormData.bpo_doi}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
              ><Option value="">
              <em>None</em>
            </Option>
            {payoutFormMasterData.bpo_doi.map((bpo_doi) => {
              return (
                <Option value={bpo_doi}>{bpo_doi}</Option>
              );
            })}</Select>
          </div>
          </FilterGroupItem>
          <FilterGroupItem >
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >APO DOI</Label>
            <Select
              name="APO DOI"
              label="APO DOI"
              value={populateFormData.apo_doi}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
              ><Option value="">
              <em>None</em>
            </Option>
            {payoutFormMasterData.apo_doi.map((apo_doi) => {
              return (
                <Option value={apo_doi}>{apo_doi}</Option>
              );
            })}</Select>
          </div>
          </FilterGroupItem>
          <FilterGroupItem >
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >Reporting Frequency</Label>
            <Select
              name="Reporting Frequency"
              label="Reporting Frequency"
              value={populateFormData.apo_doi}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
              ><Option value="">
              <em>None</em>
            </Option>
            {payoutFormMasterData.reporting_frequency.map((reporting_frequency) => {
              return (
                <Option value={reporting_frequency}>{reporting_frequency}</Option>
              );
            })}</Select>
          </div>
          </FilterGroupItem>
          <FilterGroupItem >
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >start_date</Label>
            <DatePicker
              name="start_date"
              label={"Start Date"}
              onChangeHandler={onChangeFormHandler}
            />
          </div>
          </FilterGroupItem>
          <FilterGroupItem >
            
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label ></Label>
            <DatePicker
              name="end_date"
              label={"End_Date"}
              onChangeHandler={onChangeFormHandler}
            />
          </div>
          </FilterGroupItem>
        </FilterBar>

  )
}

export default PayoutHeader