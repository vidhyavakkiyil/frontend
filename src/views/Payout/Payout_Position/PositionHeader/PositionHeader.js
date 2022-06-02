import { Avatar, AvatarSize, Badge, FlexBox , Icon, Label, Text } from '@ui5/webcomponents-react';
import React from 'react'

function PositionHeader(props) {
    const { positionHeaderData } = props;
    console.log(positionHeaderData)
    return (
        <FlexBox >
            <div style={{ marginRight:"20px" }}>
                <img style={{ width: "100px", height: "100px" }} src="https://sap.github.io/ui5-webcomponents/master/assets/images/HT-1000.jpg" />
            </div>
            <div style={{ marginRight:"20px" }}>
                <div {...props}>
                    Venture: {positionHeaderData.company}</div>
                <div >
                    Deck Code: {positionHeaderData.venture}</div>
                <div >
                    Company: {positionHeaderData.owner}</div>
                <div>
                    Deck ID: {positionHeaderData.well_id}</div>
                    <div>
                    Deck Type: {positionHeaderData.well_name}</div>
            </div>


            <div style={{ marginRight:"20px" }}>
            <div style={{ marginBottom:"10px" }}>Effective From</div>
            <Icon name="calendar" style={{width:"25px",height:"25px"}}></Icon>
            <Label style={{fontSize:"20px"}} >  {positionHeaderData.start_date}</Label >
             </div>

            <div style={{ marginRight:"20px" }}>
            <div style={{ marginBottom:"10px" }}>Effective To </div>
            <Icon name="calendar" style={{width:"25px",height:"25px" }}></Icon>
            <Label style={{fontSize:"20px"}} > {positionHeaderData.end_date}</Label> 
            </div>
            
            <div style={{ marginRight:"20px" }}>
            <div style={{ marginBottom:"10px" }}>Beginning Balance</div>
            <Icon name="factory" style={{width:"25px",height:"25px"}}></Icon>
            <Label style={{fontSize:"20px"}} >  {positionHeaderData.beginning_balance}</Label >
            </div>
            
            
        </FlexBox  >
    )
}

export default PositionHeader