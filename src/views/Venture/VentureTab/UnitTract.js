import { Button, Grid, Label, List, Table, TableCell, TableColumn, TableRow, TabSeparator } from '@ui5/webcomponents-react';
import React from 'react'
import CustomToolbar from '../../DOI/components/Toolbar/Toolbar';

const BussinessAssociativeHeader = [
  "BA Number", "Name1", "Name2", "Name3" ,"Address1","Address2",
 ];
 const headers=[
  "Usage Code",
  "TIN / SS#",
  "Entity Type",
  "Tax Type",
 ];
function UnitTract(props) {
  const {
    isLoading,
    tableData
  } = props;
  return (
    <Grid {...props}>
    <div  data-layout-span="XL4 L4 M4 S12">
     {BussinessAssociativeHeader.map((row) => {
      return (<List style={{
      marginTop:"30px"
    }}><Label >{row}:</Label></List>)
    })}
    </div>
    <div  data-layout-span="XL8 L8 M8 S12"><div style={{marginLeft:"300px"}}></div>
    <div style={{marginLeft:"300px"}}>
    <Button  icon="add" tooltip="Add" design="Transparent">Add</Button>
      <Button icon="edit" tooltip="Edit" design="Transparent">Edit</Button>
     
      <Button icon="delete" tooltip="Delete" design="Transparent"  >Delete</Button>

      <Button icon="cancel" tooltip="Cancel" design="Transparent" >Cancel</Button>
    </div>
    
    <label>BA Detail</label>
    <Table style={{
           overflow: "scroll",
           height: "auto",
         }}
        columns={headers.map((columm, index) => {
          return (
            <TableColumn >
              <Label>{columm}</Label><TabSeparator />
            </TableColumn>
          );
        })}
        busy={isLoading}
        busyDelay={0}
       //growing="Button"
        hideNoData={true}
        mode={"SingleSelect"}
        stickyColumnHeader={true}
      >

            <TableRow>
              <TableCell>
                <Label>  </Label>
              </TableCell>
              
            </TableRow>
      </Table>
    </div>
   </Grid>
  )
}

export default UnitTract