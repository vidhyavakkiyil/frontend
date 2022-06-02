import { BusyIndicator, DatePicker, ResponsiveGridLayout, Select,label,Option, Label, FilterBar, FilterGroupItem, Input } from '@ui5/webcomponents-react';
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
function BusinessAssociateHeader(args) {
  const {
    businessAssociateFormData,
    formData,
    onChangeFormHandler,
    filterData,
    isLoading,
    cancelButtonHandler,
    //handleAddDeckHeaderDialogOpen,
  } = args;
  return (

      <FilterBar style={{width:"1000px",marginTop:"-50px"}} showFilterConfiguration considerGroupName showGoOnFB showSearchOnFiltersDialog useToolbar={false} filterContainerWidth={"200px"}>
        <FilterGroupItem  label={args.label} groupName={args.groupName} labelTooltip={args.labelTooltip} loading={args.loading} required={args.required} visible={args.visible} visibleInFilterBar={args.visibleInFilterBar} considerGroupName={args.considerGroupName}>
          </FilterGroupItem>
          
          <FilterGroupItem>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 4" }}
          >
           <Label id="ba-number-label">BA Number</Label>
                    <Select
                      labelId="ba-number-label"
                      id="ba-number"
                      name="ba_number"
                      value={formData.ba_number}
                      label="BA Number"
                      size="small"
                      MenuProps={MenuProps}
                      onChange={onChangeFormHandler}
                    >
                      <Option value="">
                        <em>None</em>
                      </Option>
                      {businessAssociateFormData.ba_number.map((ba_number) => {
                        return (
                          <Option value={ba_number}>{ba_number}</Option>
                        );
                      })}
                    </Select></div>
          </FilterGroupItem>
          <FilterGroupItem>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 4" }}
          >
            <Label id="owner-name-label">Owner Name</Label>
              <Select
                labelId="owner-name-label"
                id="owner-name"
                name="owner_name"
                value={formData.owner_name}
                label="Owner Name"
                size="small"
                MenuProps={MenuProps}
                onChange={onChangeFormHandler}
              >
                <Option value="">
                  <em>None</em>
                </Option>
                {businessAssociateFormData.owner_name.map(
                  (owner_name) => {
                    return (
                      <Option value={owner_name}>{owner_name}</Option>
                    );
                  }
                )}
              </Select>
          </div>
          </FilterGroupItem>
          
        </FilterBar>
  )
}

export default BusinessAssociateHeader