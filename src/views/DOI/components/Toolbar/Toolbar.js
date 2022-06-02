import React, { useEffect, useRef, useState } from "react";

import {
  Toolbar,
  ToolbarSpacer,
  ToolbarSeparator,
  Icon,
  Button,
  ButtonDesign,
  Dialog,
  Bar,
  Title,
  List,
  StandardListItem,
  Popover,
  ViewSettingsDialog,
  VerticalAlign,
  Form,
  FormItem,
  Select,
  Option,
  DynamicPage,
  BarDesign,
  Toast,
  Modals,
} from "@ui5/webcomponents-react";
import Add from "./Add";
import Edit from "./Edit";
import { Navigate, useNavigate } from "react-router-dom";

const CustomToolbar = (args) => {
  const navigate = useNavigate();
  const { filterData, deckHeaderFormData, Name } = args;
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [actionItems, setActionItems] = useState([]);

  const oneditclick = () => {
    setActionItems()
  }
  const onButtonClick = () => {
    setDialogIsOpen(true);
  };

  const handleClose = () => {
    setDialogIsOpen(false);
  };

  const toast = useRef();

  
  const showToast = () => {
    Modals.showToast({
      style:{MozColumnWidth:"1000px"},
      children:  <div> <Bar design={BarDesign.FloatingFooter} endContent={<>
        <Button design={ButtonDesign.Positive}>Accept</Button>
        <Button design={ButtonDesign.Negative}>Reject</Button>
      </>} /></div>
    });
    toast.current.show();
  };


  return (
    <><div style={{ marginLeft: "750px" }} >
      <Button
        icon="filter"
        design="Transparent"
        tooltip="Filter"
        onClick={filterData}
      >Filter</Button>
      <Button icon="add" tooltip="Add" design="Transparent" onClick={onButtonClick}>Add</Button>
      <Button icon="edit" tooltip="Edit" design="Transparent" onClick={showToast}>Edit</Button>

      <Button icon="delete" tooltip="Delete" design="Transparent"  >Delete</Button>

      <Button icon="cancel" tooltip="Cancel" design="Transparent" >Cancel</Button>

    </div>

      <Dialog open={dialogIsOpen} header={<Bar endContent={<Icon name="settings" />}>
        <Title>{Name}</Title>
      </Bar>} footer={<Bar endContent={<Button onClick={handleClose}>Close</Button>} />}>
        {Name == "DOI" ?
          (<Form >
            <FormItem label={"Company Code"}><Select options={deckHeaderFormData.company_code.map((i) => ({
              key: i,
              text: i,
            }))}></Select></FormItem >
            <FormItem label={"Venture"}><Select options={deckHeaderFormData.venture.map((i) => ({
              key: i,
              text: i,
            }))}></Select></FormItem >
            <FormItem label={"DOI Code"}><Select options={deckHeaderFormData.well_name.map((i) => ({
              key: i,
              text: i,
            }))}></Select></FormItem >
            <FormItem label={"Well ID"}><Select options={deckHeaderFormData.product.map((i) => ({
              key: i,
              text: i,
            }))}></Select></FormItem >

            <FormItem label={"Well Name"}><Select options={deckHeaderFormData.universal_doi_tier.map((i) => ({
              key: i,
              text: i,
            }))}></Select></FormItem >

            <FormItem label={"DOI Type"}><Select options={deckHeaderFormData.universal_doi_type.map((i) => ({
              key: i,
              text: i,
            }))}></Select></FormItem >



          </Form >) : (<Form >
            <FormItem label={'Add'}><Select><Option>ADD</Option></Select></FormItem >
            <FormItem label={'Add'}><Select><Option>ADD</Option></Select></FormItem >
            <FormItem label={'Add'}><Select><Option>ADD</Option></Select></FormItem >
          </Form >)}
      </Dialog>
      <div >{actionItems}</div>



    </>

  );
};

export default CustomToolbar;
