import { FlexBox, FlexBoxDirection, Form, FormGroup, FormItem, Label, ObjectPage, ObjectPageSection, ObjectPageSubSection, Text } from '@ui5/webcomponents-react'
import React from 'react'
import PayoutPosition from './PayoutPosition'
import PositionExpense from './PositionExpense'
import PositionRevenue from './PositionRevenue'

function PayoutPositionTable(args) {
  return (
    <ObjectPage {...args}>
         
          <ObjectPageSection titleText="Expense" id="expense" aria-label="Expense">
           <PositionExpense/>
          </ObjectPageSection>


          <ObjectPageSection titleText="Revenue" id="revenue" aria-label="Revenue">
          <PositionRevenue/>
          </ObjectPageSection>


          <ObjectPageSection titleText="Payout Position" id="payout_position" aria-label="PayoutPosition">
          <PayoutPosition/>
          </ObjectPageSection>
          
        </ObjectPage>
  )
}

export default PayoutPositionTable