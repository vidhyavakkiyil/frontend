import { Label } from '@ui5/webcomponents-react'
import React from 'react'

function PayoutPosition() {
  return (
    <div style={{marginLeft:"200px"}}>
      <div><Label>Total Revenue: </Label></div>
      <div><Label>Total Expense:</Label></div>
      <div><Label>Bal Adj Total:</Label></div>
      <div><Label>Payout Position:</Label></div>
    </div>
  )
}

export default PayoutPosition 