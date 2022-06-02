import { Tab, TabContainer, TabSeparator } from '@ui5/webcomponents-react';
import React from 'react'
import Attributes from './Attributes';
import UnitTract from './UnitTract';

function VentureTabs(args) {
    console.log(args)
  const {
    isLoading,
    tableData,
    filterData,
    ...rest
  } = args;
  return (
    <TabContainer {...args}>
      <Tab {...args} />
      <Tab selected text="Attributes" design="Positive" icon='add' >
        <Attributes
          isLoading={isLoading}
          tableData={tableData}
        />
      </Tab>
      <TabSeparator />
      <Tab text="Unit/tract" design="Critical" icon="activities">
      <label>Bussiness Associative Header</label>
        <UnitTract
          isLoading={isLoading}
          filterData={filterData}
          tableData={tableData}
        />
      </Tab>
      <TabSeparator />
      

    </TabContainer>
  )
}

export default VentureTabs