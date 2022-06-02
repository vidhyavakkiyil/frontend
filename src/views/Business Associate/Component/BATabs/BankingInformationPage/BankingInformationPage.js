import { Table } from '@ui5/webcomponents-react';
import React from 'react'
import BADetailsHeader from '../../BAHeader/BADetailsHeader';
import BankingInformationTable from './BankingInformationTable';


const tableData = [
  {
    bank_id: "01",
    bank_name: "Bank of Sierra",
    routing_number: "985-111-432",
    account_number: "123-456-789",
    account_type: "Checking",
  },
];

function BankingInformationPage(props) {

  const { headerData } = props;
  return (
    <>
     <BADetailsHeader headerData={headerData} />
     <BankingInformationTable title={"Business Associate Details"}
        actions={[]}
        tableData={tableData}
       // isLoading={isLoading}
        pageSize={5}/>
     </>
    
  )
}

export default BankingInformationPage