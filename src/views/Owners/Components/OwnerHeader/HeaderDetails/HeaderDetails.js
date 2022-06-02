import { Avatar, AvatarSize, Badge, FlexBox , Icon, Label, Text } from '@ui5/webcomponents-react';
import React from 'react'

function HeaderDetails(props) {
    const { revenueDeckHeaderData } = props;
    return (
        <FlexBox >
            <div style={{ marginRight:"20px" }}>
                <img style={{ width: "100px", height: "100px" }} src="https://sap.github.io/ui5-webcomponents/master/assets/images/HT-1000.jpg" />
            </div>

            <div style={{ marginRight:"20px" }}>
                <div {...props}>
                    Venture: {revenueDeckHeaderData.venture}</div>
                <div >
                    Deck Code: {revenueDeckHeaderData.universal_doi_tier}</div>
                <div >
                    Company: {revenueDeckHeaderData.company_code}</div>
                <div>
                    Deck Type: {revenueDeckHeaderData.universal_doi_type}</div>
            </div>

            <div style={{ marginRight:"20px" }}>
            <div style={{ marginBottom:"10px" }}>Product</div>
            <Icon name="factory" style={{width:"25px",height:"25px"}}></Icon>
            <Label style={{fontSize:"20px"}} >  {revenueDeckHeaderData.product}</Label >
            </div>

            <div style={{ marginRight:"20px" }}>
            <div style={{ marginBottom:"10px" }}>Effective From</div>
            <Icon name="calendar" style={{width:"25px",height:"25px"}}></Icon>
            <Label style={{fontSize:"20px"}} >  {revenueDeckHeaderData.start_date}</Label >
             </div>

            <div style={{ marginRight:"20px" }}>
            <div style={{ marginBottom:"10px" }}>Effective To </div>
            <Icon name="calendar" style={{width:"25px",height:"25px" }}></Icon>
            <Label style={{fontSize:"20px"}} > {revenueDeckHeaderData.end_date}</Label> 
            </div>
            
            
            
        </FlexBox  >
    )
}

export default HeaderDetails