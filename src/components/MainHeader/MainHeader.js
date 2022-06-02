import { VariantItem, VariantManagement } from '@ui5/webcomponents-react'
import React from 'react'

function MainHeader(props) {
    const {title} = props;
  return (
    <VariantManagement {...props}>
          <VariantItem></VariantItem>
          <VariantItem selected>{title}</VariantItem>
        </VariantManagement>
  )
}

export default MainHeader