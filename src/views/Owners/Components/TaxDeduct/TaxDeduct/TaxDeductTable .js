import { Bar, Button, CheckBox, Dialog, FlexBox, Icon, Label, List, ListMode, Popover, SelectDialog, StandardListItem, Table, TableCell, TableColumn, TableRow, TabSeparator, Text, Title } from '@ui5/webcomponents-react';
import React, { useEffect, useRef, useState } from 'react'



function TaxDeductTable(args) {
  const{tableData}=args
  
    return (
        <>
                 
             <Table>
             <TableRow>
            <TableCell>Tax / Deduct Code</TableCell>
            <TableCell align="right">Exempt</TableCell>
            <TableCell align="right">Free</TableCell>
          </TableRow>
          {tableData.map((row) => (
            <TableRow>
              <TableCell>
                {row}
              </TableCell>
              <TableCell align="right">
              <CheckBox checked="true"></CheckBox>
              </TableCell>
              <TableCell align="right" >
              <CheckBox checked="false"></CheckBox>
              </TableCell>
            </TableRow>
          ))}
             </Table>
          
        </>
    )
}

export default TaxDeductTable 