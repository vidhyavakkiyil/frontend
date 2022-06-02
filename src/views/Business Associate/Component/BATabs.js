import { Label, Tab, TabContainer, Table, TableCell, TabSeparator } from '@ui5/webcomponents-react';
import React from 'react'
import BADetailsHeader from './BAHeader/BADetailsHeader';
import BADetailsPage from './BATabs/BADetailsPage/BADetailsPage';
import BankingInformationPage from './BATabs/BankingInformationPage/BankingInformationPage';
import BAPage from './BATabs/BAPage/BAPage';
import MinimumPayPage from './BATabs/MinimumPayPage/MinimumPayPage';

function BATabs(args) {
  console.log(args)
  const {
    isLoading,
    businessAssociateTableData,
    businessAssociateDetailsTableData,
    headerData,
    ...rest
  } = args;
  return (
    <TabContainer {...args}>
      <Tab {...args} />
      <Tab selected text="Business Partner" design="Critical" icon='activities' >
        <BAPage
          isLoading={isLoading}
          businessAssociateTableData={businessAssociateTableData}
        />
      </Tab>
      <TabSeparator />
      <Tab text="Business Partner Details" design="Positive" icon="add">
        <BADetailsPage
          isLoading={isLoading}
          headerData={headerData}
          businessAssociateDetailsTableData={businessAssociateDetailsTableData}
        />
      </Tab>
      <TabSeparator />
      <Tab text="Banking Information" design="Critical" icon="employee">
        <BankingInformationPage headerData={headerData} />
      </Tab>
      <TabSeparator />
      <Tab text="Minimum Pay" design="Positive"  icon="settings">
        <MinimumPayPage headerData={headerData} />
      </Tab>
      <TabSeparator />

    </TabContainer>
  );
}

export default BATabs