import{j as s}from"./iframe-C-Dpaqp0.js";import{S as t}from"./StatusDot-BmctoXVZ.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Atoms/StatusDot",component:t,parameters:{layout:"padded",docs:{description:{component:"A small status indicator dot with various states, colors, and animations for showing user presence or system status."}}},argTypes:{status:{control:"select",options:["online","offline","away","busy","idle","success","warning","error","info","neutral"],description:"Status variant"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size variant"},color:{control:"color",description:"Custom color (overrides status)"},pulse:{control:"boolean",description:"Whether to show pulsing animation"},ring:{control:"boolean",description:"Whether to show a ring animation"},position:{control:"select",options:["top-right","top-left","bottom-right","bottom-left"],description:"Position when used as overlay"},overlay:{control:"boolean",description:"Whether to position as overlay"},border:{control:"boolean",description:"Whether to show a border"},borderColor:{control:"color",description:"Border color"},label:{control:"text",description:"Custom label for accessibility"}}},a={args:{status:"online",size:"md"}},r={render:()=>s.jsxs("div",{className:"status-story-grid",children:[s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online"}),s.jsx("span",{children:"Online"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"offline"}),s.jsx("span",{children:"Offline"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"away"}),s.jsx("span",{children:"Away"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"busy"}),s.jsx("span",{children:"Busy"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"idle"}),s.jsx("span",{children:"Idle"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"success"}),s.jsx("span",{children:"Success"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"warning"}),s.jsx("span",{children:"Warning"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"error"}),s.jsx("span",{children:"Error"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"info"}),s.jsx("span",{children:"Info"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"neutral"}),s.jsx("span",{children:"Neutral"})]})]})},e={render:()=>s.jsxs("div",{className:"status-story-row",children:[s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",size:"xs"}),s.jsx("span",{children:"XS"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",size:"sm"}),s.jsx("span",{children:"SM"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",size:"md"}),s.jsx("span",{children:"MD"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",size:"lg"}),s.jsx("span",{children:"LG"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",size:"xl"}),s.jsx("span",{children:"XL"})]})]})},n={render:()=>s.jsxs("div",{className:"status-story-row",children:[s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",pulse:!0}),s.jsx("span",{children:"Pulse"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"busy",ring:!0}),s.jsx("span",{children:"Ring"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"away",pulse:!0,ring:!0}),s.jsx("span",{children:"Both"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online"}),s.jsx("span",{children:"Static"})]})]})},i={render:()=>s.jsxs("div",{className:"status-story-row",children:[s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",border:!0}),s.jsx("span",{children:"Default Border"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"busy",border:!0,borderColor:"#ffffff"}),s.jsx("span",{children:"White Border"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"away",border:!0,borderColor:"#000000"}),s.jsx("span",{children:"Black Border"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"success",border:!0,pulse:!0}),s.jsx("span",{children:"Border + Pulse"})]})]})},o={render:()=>s.jsxs("div",{className:"status-story-row",children:[s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{color:"#8b5cf6"}),s.jsx("span",{children:"Purple"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{color:"#ec4899"}),s.jsx("span",{children:"Pink"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{color:"#06b6d4"}),s.jsx("span",{children:"Cyan"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{color:"#84cc16"}),s.jsx("span",{children:"Lime"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{color:"#f97316",pulse:!0}),s.jsx("span",{children:"Orange + Pulse"})]})]})},l={render:()=>s.jsxs("div",{className:"status-story-overlay-demo",children:[s.jsxs("div",{className:"status-story-avatar-container",children:[s.jsx("div",{className:"status-story-avatar",children:s.jsx(t,{status:"online",overlay:!0,position:"top-right"})}),s.jsx("span",{children:"Top Right"})]}),s.jsxs("div",{className:"status-story-avatar-container",children:[s.jsx("div",{className:"status-story-avatar",children:s.jsx(t,{status:"away",overlay:!0,position:"top-left"})}),s.jsx("span",{children:"Top Left"})]}),s.jsxs("div",{className:"status-story-avatar-container",children:[s.jsx("div",{className:"status-story-avatar",children:s.jsx(t,{status:"busy",overlay:!0,position:"bottom-right"})}),s.jsx("span",{children:"Bottom Right"})]}),s.jsxs("div",{className:"status-story-avatar-container",children:[s.jsx("div",{className:"status-story-avatar",children:s.jsx(t,{status:"offline",overlay:!0,position:"bottom-left"})}),s.jsx("span",{children:"Bottom Left"})]})]})},c={render:()=>s.jsxs("div",{className:"status-story-row",children:[s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",onClick:()=>alert("Status clicked!"),label:"Click to change status"}),s.jsx("span",{children:"Clickable"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"busy",pulse:!0,onClick:()=>alert("Busy status clicked!"),label:"Click to toggle busy"}),s.jsx("span",{children:"Clickable + Pulse"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{color:"#8b5cf6",ring:!0,onClick:()=>alert("Custom status clicked!"),label:"Click for custom action"}),s.jsx("span",{children:"Custom + Ring"})]})]})},d={render:()=>s.jsxs("div",{className:"status-story-examples",children:[s.jsxs("div",{className:"status-story-example",children:[s.jsx("h4",{children:"User List"}),s.jsxs("div",{className:"status-story-user-list",children:[s.jsxs("div",{className:"status-story-user",children:[s.jsx("div",{className:"status-story-user-avatar",children:s.jsx(t,{status:"online",overlay:!0,position:"bottom-right",border:!0})}),s.jsx("span",{children:"John Doe"})]}),s.jsxs("div",{className:"status-story-user",children:[s.jsx("div",{className:"status-story-user-avatar",children:s.jsx(t,{status:"away",overlay:!0,position:"bottom-right",border:!0})}),s.jsx("span",{children:"Jane Smith"})]}),s.jsxs("div",{className:"status-story-user",children:[s.jsx("div",{className:"status-story-user-avatar",children:s.jsx(t,{status:"busy",overlay:!0,position:"bottom-right",border:!0,pulse:!0})}),s.jsx("span",{children:"Mike Johnson"})]}),s.jsxs("div",{className:"status-story-user",children:[s.jsx("div",{className:"status-story-user-avatar",children:s.jsx(t,{status:"offline",overlay:!0,position:"bottom-right",border:!0})}),s.jsx("span",{children:"Sarah Wilson"})]})]})]}),s.jsxs("div",{className:"status-story-example",children:[s.jsx("h4",{children:"System Status"}),s.jsxs("div",{className:"status-story-system-list",children:[s.jsxs("div",{className:"status-story-system-item",children:[s.jsx(t,{status:"success",size:"sm"}),s.jsx("span",{children:"Database Connection"})]}),s.jsxs("div",{className:"status-story-system-item",children:[s.jsx(t,{status:"success",size:"sm"}),s.jsx("span",{children:"API Server"})]}),s.jsxs("div",{className:"status-story-system-item",children:[s.jsx(t,{status:"warning",size:"sm",pulse:!0}),s.jsx("span",{children:"File Storage"})]}),s.jsxs("div",{className:"status-story-system-item",children:[s.jsx(t,{status:"error",size:"sm",ring:!0}),s.jsx("span",{children:"Email Service"})]})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'online',
    size: 'md'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-grid">\r
      <div className="status-story-item">\r
        <StatusDot status="online" />\r
        <span>Online</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="offline" />\r
        <span>Offline</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="away" />\r
        <span>Away</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="busy" />\r
        <span>Busy</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="idle" />\r
        <span>Idle</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="success" />\r
        <span>Success</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="warning" />\r
        <span>Warning</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="error" />\r
        <span>Error</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="info" />\r
        <span>Info</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="neutral" />\r
        <span>Neutral</span>\r
      </div>\r
    </div>
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-row">\r
      <div className="status-story-item">\r
        <StatusDot status="online" size="xs" />\r
        <span>XS</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="online" size="sm" />\r
        <span>SM</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="online" size="md" />\r
        <span>MD</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="online" size="lg" />\r
        <span>LG</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="online" size="xl" />\r
        <span>XL</span>\r
      </div>\r
    </div>
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-row">\r
      <div className="status-story-item">\r
        <StatusDot status="online" pulse />\r
        <span>Pulse</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="busy" ring />\r
        <span>Ring</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="away" pulse ring />\r
        <span>Both</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="online" />\r
        <span>Static</span>\r
      </div>\r
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-row">\r
      <div className="status-story-item">\r
        <StatusDot status="online" border />\r
        <span>Default Border</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="busy" border borderColor="#ffffff" />\r
        <span>White Border</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="away" border borderColor="#000000" />\r
        <span>Black Border</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="success" border pulse />\r
        <span>Border + Pulse</span>\r
      </div>\r
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-row">\r
      <div className="status-story-item">\r
        <StatusDot color="#8b5cf6" />\r
        <span>Purple</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot color="#ec4899" />\r
        <span>Pink</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot color="#06b6d4" />\r
        <span>Cyan</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot color="#84cc16" />\r
        <span>Lime</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot color="#f97316" pulse />\r
        <span>Orange + Pulse</span>\r
      </div>\r
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-overlay-demo">\r
      <div className="status-story-avatar-container">\r
        <div className="status-story-avatar">\r
          <StatusDot status="online" overlay position="top-right" />\r
        </div>\r
        <span>Top Right</span>\r
      </div>\r
      \r
      <div className="status-story-avatar-container">\r
        <div className="status-story-avatar">\r
          <StatusDot status="away" overlay position="top-left" />\r
        </div>\r
        <span>Top Left</span>\r
      </div>\r
      \r
      <div className="status-story-avatar-container">\r
        <div className="status-story-avatar">\r
          <StatusDot status="busy" overlay position="bottom-right" />\r
        </div>\r
        <span>Bottom Right</span>\r
      </div>\r
      \r
      <div className="status-story-avatar-container">\r
        <div className="status-story-avatar">\r
          <StatusDot status="offline" overlay position="bottom-left" />\r
        </div>\r
        <span>Bottom Left</span>\r
      </div>\r
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-row">\r
      <div className="status-story-item">\r
        <StatusDot status="online" onClick={() => alert('Status clicked!')} label="Click to change status" />\r
        <span>Clickable</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="busy" pulse onClick={() => alert('Busy status clicked!')} label="Click to toggle busy" />\r
        <span>Clickable + Pulse</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot color="#8b5cf6" ring onClick={() => alert('Custom status clicked!')} label="Click for custom action" />\r
        <span>Custom + Ring</span>\r
      </div>\r
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-examples">\r
      <div className="status-story-example">\r
        <h4>User List</h4>\r
        <div className="status-story-user-list">\r
          <div className="status-story-user">\r
            <div className="status-story-user-avatar">\r
              <StatusDot status="online" overlay position="bottom-right" border />\r
            </div>\r
            <span>John Doe</span>\r
          </div>\r
          \r
          <div className="status-story-user">\r
            <div className="status-story-user-avatar">\r
              <StatusDot status="away" overlay position="bottom-right" border />\r
            </div>\r
            <span>Jane Smith</span>\r
          </div>\r
          \r
          <div className="status-story-user">\r
            <div className="status-story-user-avatar">\r
              <StatusDot status="busy" overlay position="bottom-right" border pulse />\r
            </div>\r
            <span>Mike Johnson</span>\r
          </div>\r
          \r
          <div className="status-story-user">\r
            <div className="status-story-user-avatar">\r
              <StatusDot status="offline" overlay position="bottom-right" border />\r
            </div>\r
            <span>Sarah Wilson</span>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="status-story-example">\r
        <h4>System Status</h4>\r
        <div className="status-story-system-list">\r
          <div className="status-story-system-item">\r
            <StatusDot status="success" size="sm" />\r
            <span>Database Connection</span>\r
          </div>\r
          \r
          <div className="status-story-system-item">\r
            <StatusDot status="success" size="sm" />\r
            <span>API Server</span>\r
          </div>\r
          \r
          <div className="status-story-system-item">\r
            <StatusDot status="warning" size="sm" pulse />\r
            <span>File Storage</span>\r
          </div>\r
          \r
          <div className="status-story-system-item">\r
            <StatusDot status="error" size="sm" ring />\r
            <span>Email Service</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...d.parameters?.docs?.source}}};const y=["Default","StatusVariants","SizeVariants","Animations","WithBorders","CustomColors","OverlayPositioning","Interactive","RealWorldExamples"];export{n as Animations,o as CustomColors,a as Default,c as Interactive,l as OverlayPositioning,d as RealWorldExamples,e as SizeVariants,r as StatusVariants,i as WithBorders,y as __namedExportsOrder,p as default};
