import { Bar, BarDesign, BusyIndicator, Button, ButtonDesign, Dialog, DynamicPage, Icon, List, Panel, StandardListItem, Title } from "@ui5/webcomponents-react";
import { useReducer, useState } from "react";



function Add(args) {
    const [collapsed, setCollapsed] = useReducer(coll => !coll, true);
  return <Panel collapsed={collapsed} onToggle={setCollapsed} headerText="Display DynamicPage with floating footer">
          {collapsed ? <BusyIndicator active style={{
      width: '100%'
    }}>
              <span style={{
        height: '700px'
      }} />
            </BusyIndicator> : <DynamicPage {...args} footer={<Bar design={BarDesign.FloatingFooter} endContent={<>
                      <Button design={ButtonDesign.Positive}>Accept</Button>
                      <Button design={ButtonDesign.Negative}>Reject</Button>
                    </>} />}>
            </DynamicPage>}
        </Panel>;
}

export default Add

