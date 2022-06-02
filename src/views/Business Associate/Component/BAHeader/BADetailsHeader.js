import { Badge, Card, FlexBox, Label, List } from '@ui5/webcomponents-react';
import React from 'react'

function BADetailsHeader(props) {
    const { headerData } = props;
    return (
        <div >
                <div style={{marginLeft:"30%"}}>
                    Business Associate Header</div>

                    <FlexBox   style={{marginTop:"30px",marginBottom:"30px"}}>
                        <List><div>BA Number  : {headerData.ba_number}</div>
                        <div>Name 1  : {headerData.name_1}</div>
                        <div>Address 1  : {headerData.address_1}</div></List>

                        <List><div>Address 2  : {headerData.address_2}</div>
                        <div>Address 3  : {headerData.address_3}</div></List>
                    </FlexBox >

        </div>
    )
}

export default BADetailsHeader