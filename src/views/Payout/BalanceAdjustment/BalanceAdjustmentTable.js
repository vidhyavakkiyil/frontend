import { Bar, Button, DatePicker, Input, Label, Table, TableCell, TableColumn, TableRow } from '@ui5/webcomponents-react';
import React from 'react'

const headers = [
  "Adjustment Amount",
  "Description",
  "Adjustment Date",
];
function BalanceAdjustmentTable(prop) {
  const{tableData}=prop
  console.log(prop)
  return (
    <div><Bar  startContent={<>
          
          </>} endContent={<>
  <Button style={{ marginRight:"5px"}}  icon="add"  design="Positive" />
  <Button style={{ marginRight:"5px"}}  icon="delete" design="Positive"/>
          </>}>
       
      </Bar>
      <Table
    {...prop}
    columns={headers.map((columm, index) => {
      return (
        <TableColumn
        //minWidth={800}
        // style={{
        //   width: "12rem",
        // }}
        >
          <Label style={{marginLeft:"10px"}}>{columm}</Label>
        </TableColumn>
      );
    })}
    busyDelay={0}
    //growing="Button"
    hideNoData={true}
    mode={"SingleSelect"}
    stickyColumnHeader={true}
  >

      return (
        <TableRow>
          
          <TableCell>
            <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label ></Label>
            <DatePicker
              name="end_date"
              label={"End_Date"}
            />
          </div>
          </TableCell>
          <TableCell> <Input
                    style={{ marginRight:"10px"}} 
                    required={true}
                    value="Enter Description"
                    placeholder="Select"
                />
          </TableCell>
          <TableCell><Input
                    style={{ marginRight:"10px"}} 
                    required={true}
                    value="Enter Amount"
                    placeholder="Select"
                />
          </TableCell>
          
          
        </TableRow>
      );
  </Table></div> 
  )
}

export default BalanceAdjustmentTable