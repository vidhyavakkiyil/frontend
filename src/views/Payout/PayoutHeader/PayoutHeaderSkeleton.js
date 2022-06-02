import { BusyIndicator, DatePicker, FilterBar, FilterGroupItem, Input, Label, ResponsiveGridLayout, Select } from '@ui5/webcomponents-react';
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
function PayoutHeaderSkeleton(args) {
  const {filterData} =args
return(
  <FilterBar style={{marginTop:"-50px"}} showFilterConfiguration considerGroupName showSearchOnFiltersDialog showGoOnFB filterContainerWidth={"200px"}>
  <FilterGroupItem label={args.label} groupName={args.groupName} labelTooltip={args.labelTooltip} loading={args.loading} required={args.required} visible={args.visible} visibleInFilterBar={args.visibleInFilterBar} considerGroupName={args.considerGroupName} >
  <Input placeholder="Placeholder" />
  </FilterGroupItem>
        <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          > <Label >Company:</Label>
            <Select
              name="company_code"
              label="Company"
              required={true}
              value="Company"
              placeholder="Select"
              renderInput={(params) => (
                <Label
                  {...params}
                  label="Company"
                  variant="standard"
                />
              )}
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          > <Label >Venture Name:</Label>
            <Select
              name="venture"
              label="Venture"
                    value="Venture"
              placeholder="Select"
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >well_name:</Label>
            <Select
              name="well_name"
              label="Well"
                    value="well_name"
              placeholder="Select"
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label > Owner Name:</Label>
            <Select
              name="Owner"
              label="Owner"
                    value="Owner"
              placeholder="Select"
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >Payout Type:</Label>
            <Select
              name="PayoutType"
              label="Payout Type"
                    value="PayoutType"
              placeholder="Select"
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >BPO DOI</Label>
            <Select
              name="universal_doi_tier"
              label="BPO DOI"
                    value="BPO DOI"
              placeholder="Select"
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >APO DOI </Label>
            <Select
              name="universal_apo_type"
              label="APO DOI "
                    value="APO DOI "
              placeholder="Select"
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >Reporting Frequency</Label>
            <Select
              name="reporting_frequency"
              label="reporting_frequency"
              value="reporting_frequency"
              placeholder="Select"
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >Effective Date</Label>
            <Select
              name="effective_date"
              label="Effective Date"
                    value="Effective Date"
              placeholder="Select"
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >Reporting Frequency</Label>
            <Select
              name="reporting_frequency"
              label="reporting frequency "
                    value="Reporting Frequency"
              placeholder="Select"
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >start_date</Label>
            <DatePicker
              name="start_date"
              label={"Start Date"}
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >Bal Adj Total</Label>
            <Select
              name="bal_adj_total"
              label="Bal Adj Total "
                    value="bal_adj_total "
              placeholder="Select"
            />
          </div></FilterBar>
  )
}

export default PayoutHeaderSkeleton