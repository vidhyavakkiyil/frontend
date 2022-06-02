import React from "react";
import { DynamicPage } from "@ui5/webcomponents-react";
import ProductsTable from "../ProductsTable/ProductsTable";

const CustomDynamicPage = (props) => {
  return (
    <DynamicPage
      {...props}
      alwaysShowContentHeader
      headerContentPinnable
      showHideHeaderButton
      backgroundDesign="Solid"
      description="Inquiry - Setup - Transfers"
      title={"Unified DOI Ownership"}
      //headerContent={headerContent}
    >
      <ProductsTable />
    </DynamicPage>
  );
};

export default CustomDynamicPage;
