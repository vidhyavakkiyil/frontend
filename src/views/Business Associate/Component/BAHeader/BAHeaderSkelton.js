import React from "react";
import { ResponsiveGridLayout, BusyIndicator, Select, Label, Option,label, FilterBar, FilterGroupItem, Input} from "@ui5/webcomponents-react";


function BusinessAssociateHeaderSkeleton(args) {
  const { filterData,isLoading} = args;
  return (
    <FilterBar style={{width:"1000px" ,marginTop:"-50px"}} showFilterConfiguration showGoOnFB considerGroupName showSearchOnFiltersDialog useToolbar={false} filterContainerWidth={"200px"}>
          <FilterGroupItem label={args.label} groupName={args.groupName} labelTooltip={args.labelTooltip} loading={args.loading} required={args.required} visible={args.visible} visibleInFilterBar={args.visibleInFilterBar} considerGroupName={args.considerGroupName}>
            
          </FilterGroupItem>
          <FilterGroupItem >
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label>BA Number</Label>
            <Select
              name="ba_number"
              label="BA Number"
              value=""
              options=""
              placeholder="Select"
            />
           </div>
          </FilterGroupItem>
          <FilterGroupItem >
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label>Owner Name</Label>
           <Select
              name="owner_name"
              label="owner Name"
              value=""
              options=""
              placeholder="Select"
            />
            
          </div>
          </FilterGroupItem>
        </FilterBar>
         
  )
}

export default BusinessAssociateHeaderSkeleton