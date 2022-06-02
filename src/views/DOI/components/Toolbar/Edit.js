import { List, Panel, StandardListItem } from '@ui5/webcomponents-react'
import React from 'react'

function Edit(args) {
  alert("edit button")
  return (
    <Panel {...args}> <List>
    <StandardListItem description="Language: Spanish">Argentina</StandardListItem>
    <StandardListItem description="Language: Portuguese">Portugal</StandardListItem></List></Panel>
  )
}

export default Edit