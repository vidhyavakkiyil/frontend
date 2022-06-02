import { Table } from '@ui5/webcomponents-react';
import React from 'react'
import BADetailsHeader from '../../BAHeader/BADetailsHeader';
import BADetailsTable from './BADetailsTable';


function BADetailsPage(props) {
  const { isLoading, businessAssociateDetailsTableData ,headerData} = props;
  return (
   <>
     <BADetailsHeader headerData={headerData} />
     <BADetailsTable title={"Business Partner Details"}
        actions={[]}
        tableData={businessAssociateDetailsTableData}
        isLoading={isLoading}
        pageSize={5}/>
     </>
  )
}

export default BADetailsPage