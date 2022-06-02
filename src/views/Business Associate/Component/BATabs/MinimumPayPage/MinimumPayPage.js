import { Table } from '@ui5/webcomponents-react';
import React from 'react'
import BADetailsHeader from '../../BAHeader/BADetailsHeader';
import MinimumPayTable from './MinimumPayTable';


const tableData = [
  {
    pay_code: "Pay",
    minimum_pay: "$25.00",
    effective_date_from: "10/10/2021",
    effective_date_to: "01/04/2022",
    account_type:"NULL"
  },
];
function MinimumPayPage(props) {
  const { headerData } = props;
  return (

    <>
    <BADetailsHeader headerData={headerData} />
    <MinimumPayTable title={"Business Associate Details"}
       actions={[]}
       tableData={tableData}
      // isLoading={isLoading}
       pageSize={5}/>
    </>
   


  )
} 

export default MinimumPayPage