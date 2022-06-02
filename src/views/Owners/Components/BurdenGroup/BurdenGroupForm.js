import { CheckBox, DatePicker, Label, ResponsiveGridLayout, Select, Table, TableCell, TableRow } from '@ui5/webcomponents-react'
import React from 'react'

function BurdenGroupForm() {
  return (
    <>
    <ResponsiveGridLayout>
      <div className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >Burden Owner</Label>
            <Select
              name="Burden Owner"
              label="Burden Owner"
                    value="Burden Owner"
              placeholder="Select"
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >Burdened By Owner</Label>
            <Select
              name="Burdened By Owner"
              label="Burdened By Owner"
              value="BurdenedOwner"
              placeholder="Select"
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >Burden% Value</Label>
            <Select
              name="Burden%"
              label="Burden%"
                    value="Burden%"
              placeholder="Select"
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >Burden Decimal</Label>
            <Select
              name="Burden Decimal"
              label="Burden Decimal"
                    value="Burden Decimal"
              placeholder="Select"
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >start_date</Label>
            <DatePicker
              name="start_date"
              label={"Start Date"}
            />
          </div>
          <div
            className="responsiveGridLayoutItem"
            style={{ gridColumn: "span 3" }}
          ><Label >End_Date</Label>
            <DatePicker
              name="start_date"
              label={"End Date"}
            />
          </div>
        </ResponsiveGridLayout>
        <Table>
             <TableRow>
            <TableCell>By Owner Id</TableCell>
            <TableCell >Owner Name</TableCell>
            <TableCell >Interest Type</TableCell>
            <TableCell >Start Date</TableCell>
            <TableCell >End Date</TableCell>
            <TableCell >Burden%</TableCell>
            <TableCell >Burden Decimal</TableCell>
            
          </TableRow>
            <TableRow>
            </TableRow>
             </Table>
    </>
  )
}

export default BurdenGroupForm