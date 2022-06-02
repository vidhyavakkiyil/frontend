import { Grid, List, StandardListItem } from '@ui5/webcomponents-react'
import React from 'react'


const Details = [
  "BA Number", "Name1", "Name2", "Name3" 
 
];
const Address=[
  "Address",
  "Address1",
  "Address2",
  "CityState",
  "PostalCode",
  "Country"];
function Attributes(props) {
  const {
    isLoading,
    tableData
  } = props;
  return (
    <Grid {...props}>
      <div  data-layout-span="XL4 L4 M4 S12">
       {Details.map((row) => {
        return (<List style={{
        marginTop:"30px"
      }}>{row}:</List>)
      })}
      </div>
     
      <div  data-layout-span="XL4 L4 M4 S12">
       {Address.map((row) => {
        return (<List style={{
        marginTop:"30px"
      }} >{row}:</List>) 
      })}
      </div></Grid>
  )
}

export default Attributes

