import React from "react";
import { Breadcrumbs, BreadcrumbsItem } from "@ui5/webcomponents-react";

const CustomBreadCrumbs = (props) => {
  return (
    <Breadcrumbs {...props}>
      <BreadcrumbsItem>Products</BreadcrumbsItem>
      <BreadcrumbsItem>Hardware</BreadcrumbsItem>
      <BreadcrumbsItem>Notebooks</BreadcrumbsItem>
    </Breadcrumbs>
  );
};

export default CustomBreadCrumbs;
