import { Label, Table } from '@ui5/webcomponents-react'
import React from 'react'
import BATable from './BATable'


const tableData = [
  {
    ba_number: "01",
    name_1: "Bank of Sierra",
    address_1: "985-111-432",
    address_2: "123-456-789",
    address_3: "123-456-789d",
  },
];
function BAPage(props) {
  const { isLoading, businessAssociateTableData } = props;
  console.log(props)
  return (
      <><BATable
        title={"Business Partner Details"}
        actions={[]}
        tableData={businessAssociateTableData}
        isLoading={isLoading}
        pageSize={5}
      /></>
  )
}

export default BAPage