import React from "react";
import Select from "../../../../components/FormComponents/Select/Select";
import DatePicker from "../../../../components/FormComponents/DatePicker/DatePicker";
import { ResponsiveGridLayout, BusyIndicator, FilterBar, FilterGroupItem, Input } from "@ui5/webcomponents-react";

const DOIHeader = (args) => {
  const { deckHeaderFormData, onChangeFormHandler, formData, isLoading } =
    args;
  return (
    <FilterBar style={{marginTop:"-50px"}} showFilterConfiguration considerGroupName showGoOnFB showSearchOnFiltersDialog useToolbar={false} filterContainerWidth={"200px"}>
    <FilterGroupItem  label={args.label} groupName={args.groupName} labelTooltip={args.labelTooltip} loading={args.loading} required={args.required} visible={args.visible} visibleInFilterBar={args.visibleInFilterBar} considerGroupName={args.considerGroupName} >
    
    </FilterGroupItem>
          <FilterGroupItem style={{ gridColumn: "span 3" }}>
            <Select
              name="company_code"
              label="Company"
              required={true}
              value={formData.company_code}
              options={deckHeaderFormData.company_code.map((i) => ({
                key: i,
                text: i,
              }))}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
            />
          </FilterGroupItem>
          <FilterGroupItem style={{ gridColumn: "span 3" }}>
            <Select
              name="venture"
              label="Venture"
              value={formData.venture}
              options={deckHeaderFormData.venture.map((i) => ({
                key: i,
                text: i,
              }))}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
            /></FilterGroupItem>
          <FilterGroupItem style={{ gridColumn: "span 3" }}>
            <Select
              name="well_name"
              label="Well"
              value={formData.well_name}
              options={deckHeaderFormData.well_name.map((i) => ({
                key: i,
                text: i,
              }))}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
            /></FilterGroupItem>
          <FilterGroupItem style={{ gridColumn: "span 3" }}>
            <Select
              name="universal_doi_tier"
              label="DOI Code"
              value={formData.universal_doi_tier}
              options={deckHeaderFormData.universal_doi_tier.map((i) => ({
                key: i,
                text: i,
              }))}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
            /></FilterGroupItem>
          <FilterGroupItem style={{ gridColumn: "span 3" }}>
            <Select
              name="universal_doi_type"
              label="DOI Type"
              value={formData.universal_doi_type}
              options={deckHeaderFormData.universal_doi_type.map((i) => ({
                key: i,
                text: i,
              }))}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
            /></FilterGroupItem>
          <FilterGroupItem style={{ gridColumn: "span 3" }}>
            <Select
              name="product"
              label="Product"
              value={formData.product}
              options={deckHeaderFormData.product.map((i) => ({
                key: i,
                text: i,
              }))}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
            /></FilterGroupItem>
          <FilterGroupItem style={{ gridColumn: "span 3" }}>
            <Select
              name="effective_date"
              label="Effective Date"
              value={formData.effective_date}
              options={[
                {
                  key: "equals",
                  text: "Equals",
                },
                {
                  key: "between",
                  text: "Between",
                },
              ]}
              onChangeHandler={onChangeFormHandler}
              placeholder="Select"
            /></FilterGroupItem>
          <FilterGroupItem style={{ gridColumn: "span 3" }}>
            <DatePicker
              name="start_date"
              label={"Start Date"}
              onChangeHandler={onChangeFormHandler}
            /></FilterGroupItem>
          <FilterGroupItem style={{ gridColumn: "span 3" }}>
            <DatePicker
              name="start_date"
              label={"End Date"}
              onChangeHandler={onChangeFormHandler}
            /></FilterGroupItem>
    </FilterBar>
  );
};

export default DOIHeader;
