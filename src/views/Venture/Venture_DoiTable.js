import { Button, ButtonDesign, DynamicPage, DynamicPageHeader, DynamicPageTitle, FilterBar, FilterGroupItem, Icon, Input, Label, Table, TableColumn, Title } from '@ui5/webcomponents-react';
import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Venture from './Venture';
import VentureHeader from './VentureHeader';


const headers = [
  "Client",
  "Company Code",
  "Joint Venture",
  "Division of interest (DOI)",
  "Division of Interest Name",
  "Description",
  "Combined product code",
  "Country Key",
  "Primary geographical location (PRI geo. loc.)",
  "Secondary geographic location",
  "Legal Description Flag",
  "Permanent/Temporary Code",
  "Start date",
  "End Date",
  "DOI Approval Code",
  "Checked out flag",
  "PPN process date",
  "PPN Process Flag",
  "Transfer Flag",
  "Owner Change Flag",
  "Check Out Date",
  "Check In Date",
  "Creator and date/time created",
  "Name of Person who Created the Object",
  "UTC Time Stamp in Short Form (YYYYMMDDhhmmss)",
  ];
    
    const tableData = [ 
      "500",
      "AG01",
      "CP0002",
      "1",
      "DOI SDI#2",
      "DOI SDI#2",
      "C03",
      "US",
      "42",
      "001",
      "X",
      "T",
      "01.01.2019",
      "31.12.9999",
      "X",
      "X",
      "",
      "",
      "",
     " 20.210.414.160.103",
     " 20.210.409.204.821",
      "",
      "OIL500021",
      "20.210.409.201.628",
      
  ];
function Venture_DoiTable(args) {
    const navigate = useNavigate();

  const [collapsed, setCollapsed] = useReducer(coll => !coll, true);
  return (
   <> <DynamicPage
      {...args}
      //alwaysShowContentHeader
      headerContentPinnable
      showHideHeaderButton
      backgroundDesign="Solid"
      description="Inquiry - Setup - Transfers"
      headerTitle={
        <DynamicPageTitle
          breadcrumbs={<Title level={"H3"} wrappingType="None" style={{ color: "#0854a0" }}>
            Venture DOI<Icon name="slim-arrow-down" tooltip="slim-arrow-down" design="Transparent" />
          </Title>}
          //showSubHeaderRight
        >
        </DynamicPageTitle>
      }
      headerContent={
        <DynamicPageHeader headerPinned>
          <VentureHeader />
        </DynamicPageHeader>
      }
    >
      {/* <DOITable
        tableData={tableData}
        filterData={filterData}
        isLoading={isLoading}
      /> */}
     <Table
      {...args}
      columns={headers.map((columm, index) => {
        return (
          <TableColumn
          //minWidth={800}
          // style={{
          //   width: "12rem",
          // }}
          >
            <label style={{marginRight:"20px"}}>{columm}</label>
          </TableColumn>
        );
      })}
      busyDelay={0}
      //growing="Button"
      hideNoData={true}
      mode={"SingleSelect"}
      stickyColumnHeader={true}
      style={{
        overflow: "scroll",
        height: "200px",
        //   overflowX: "hidden",
        //   overflowY: "hidden",
        marginRight: 0,
        marginLeft: 0,
        paddingLeft: 0,}}
    ><TableColumn> <Icon  onClick={() => navigate("/Owners/"+214754)} name="settings"/></TableColumn>
      {tableData.map((row,index) => {
        return (
          <>
          <TableColumn>
            
           <Label  style={{marginLeft:"10px"}}>{row}</Label>
          </TableColumn></>
        );
      })}
    </Table>
    </DynamicPage>
    <FilterBar showFilterConfiguration considerGroupName showSearchOnFiltersDialog>
          <FilterGroupItem label={args.label} groupName={args.groupName} labelTooltip={args.labelTooltip} loading={args.loading} required={args.required} visible={args.visible} visibleInFilterBar={args.visibleInFilterBar} considerGroupName={args.considerGroupName}>
            <Input placeholder="Placeholder" />
          </FilterGroupItem>
          <FilterGroupItem label="Filter 1" groupName="Not customizable">
            <Input placeholder="Placeholder" />
          </FilterGroupItem>
          <FilterGroupItem label="Filter 2" groupName="Not customizable">
            <Input placeholder="Placeholder" />
          </FilterGroupItem>
        </FilterBar>
    </>
  )
}

export default Venture_DoiTable