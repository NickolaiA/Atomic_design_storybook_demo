import{j as s}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";const ls={online:"Online",offline:"Offline",away:"Away",busy:"Busy",idle:"Idle",success:"Success",warning:"Warning",error:"Error",info:"Info",neutral:"Neutral"},t=({status:y="neutral",size:H="md",color:h,pulse:x=!1,ring:j=!1,position:Q="bottom-right",overlay:N=!1,label:Y,border:Z=!1,borderColor:f,className:ss="",style:ts,onClick:a,"aria-label":as,"aria-describedby":es,...rs})=>{const m=!!h,b=!!f,ns=["status-dot",`status-dot--${H}`,!m&&`status-dot--${y}`,m&&"status-dot--custom-color",x&&"status-dot--pulse",j&&"status-dot--ring",N&&"status-dot--overlay",N&&`status-dot--${Q}`,Z&&"status-dot--border",b&&"status-dot--custom-border",a&&"status-dot--clickable",ss].filter(Boolean).join(" "),p={...ts};m&&(p["--status-dot-color"]=h),b&&(p["--status-dot-border-color"]=f);const g=as||Y||ls[y],is=()=>{a&&a()},os=v=>{a&&(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),a())};return s.jsxs("div",{className:ns,style:p,role:a?"button":void 0,"aria-label":g,"aria-describedby":es,tabIndex:a?0:void 0,onClick:a?is:void 0,onKeyDown:a?os:void 0,...rs,children:[s.jsx("span",{className:"status-dot__indicator"}),x&&s.jsx("span",{className:"status-dot__pulse-ring"}),j&&s.jsx("span",{className:"status-dot__ring-animation"}),s.jsx("span",{className:"status-dot__sr-only",children:g})]})};t.__docgenInfo={description:"",methods:[],displayName:"StatusDot",props:{status:{required:!1,tsType:{name:"union",raw:"'online' | 'offline' | 'away' | 'busy' | 'idle' | 'success' | 'warning' | 'error' | 'info' | 'neutral'",elements:[{name:"literal",value:"'online'"},{name:"literal",value:"'offline'"},{name:"literal",value:"'away'"},{name:"literal",value:"'busy'"},{name:"literal",value:"'idle'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'neutral'"}]},description:"Status variant",defaultValue:{value:"'neutral'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Custom color (overrides status)"},pulse:{required:!1,tsType:{name:"boolean"},description:"Whether to show pulsing animation",defaultValue:{value:"false",computed:!1}},ring:{required:!1,tsType:{name:"boolean"},description:"Whether to show a ring animation",defaultValue:{value:"false",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'",elements:[{name:"literal",value:"'top-right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"}]},description:"Position when used as overlay",defaultValue:{value:"'bottom-right'",computed:!1}},overlay:{required:!1,tsType:{name:"boolean"},description:"Whether to position as overlay",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Custom label for accessibility"},border:{required:!1,tsType:{name:"boolean"},description:"Whether to show a border",defaultValue:{value:"false",computed:!1}},borderColor:{required:!1,tsType:{name:"string"},description:"Border color"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for screen readers"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA description"}}};const cs={title:"Atoms/StatusDot",component:t,parameters:{layout:"padded",docs:{description:{component:"A small status indicator dot with various states, colors, and animations for showing user presence or system status."}}},argTypes:{status:{control:"select",options:["online","offline","away","busy","idle","success","warning","error","info","neutral"],description:"Status variant"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size variant"},color:{control:"color",description:"Custom color (overrides status)"},pulse:{control:"boolean",description:"Whether to show pulsing animation"},ring:{control:"boolean",description:"Whether to show a ring animation"},position:{control:"select",options:["top-right","top-left","bottom-right","bottom-left"],description:"Position when used as overlay"},overlay:{control:"boolean",description:"Whether to position as overlay"},border:{control:"boolean",description:"Whether to show a border"},borderColor:{control:"color",description:"Border color"},label:{control:"text",description:"Custom label for accessibility"}}},e={args:{status:"online",size:"md"}},r={render:()=>s.jsxs("div",{className:"status-story-grid",children:[s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online"}),s.jsx("span",{children:"Online"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"offline"}),s.jsx("span",{children:"Offline"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"away"}),s.jsx("span",{children:"Away"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"busy"}),s.jsx("span",{children:"Busy"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"idle"}),s.jsx("span",{children:"Idle"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"success"}),s.jsx("span",{children:"Success"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"warning"}),s.jsx("span",{children:"Warning"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"error"}),s.jsx("span",{children:"Error"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"info"}),s.jsx("span",{children:"Info"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"neutral"}),s.jsx("span",{children:"Neutral"})]})]})},n={render:()=>s.jsxs("div",{className:"status-story-row",children:[s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",size:"xs"}),s.jsx("span",{children:"XS"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",size:"sm"}),s.jsx("span",{children:"SM"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",size:"md"}),s.jsx("span",{children:"MD"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",size:"lg"}),s.jsx("span",{children:"LG"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",size:"xl"}),s.jsx("span",{children:"XL"})]})]})},i={render:()=>s.jsxs("div",{className:"status-story-row",children:[s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",pulse:!0}),s.jsx("span",{children:"Pulse"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"busy",ring:!0}),s.jsx("span",{children:"Ring"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"away",pulse:!0,ring:!0}),s.jsx("span",{children:"Both"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online"}),s.jsx("span",{children:"Static"})]})]})},o={render:()=>s.jsxs("div",{className:"status-story-row",children:[s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",border:!0}),s.jsx("span",{children:"Default Border"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"busy",border:!0,borderColor:"#ffffff"}),s.jsx("span",{children:"White Border"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"away",border:!0,borderColor:"#000000"}),s.jsx("span",{children:"Black Border"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"success",border:!0,pulse:!0}),s.jsx("span",{children:"Border + Pulse"})]})]})},l={render:()=>s.jsxs("div",{className:"status-story-row",children:[s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{color:"#8b5cf6"}),s.jsx("span",{children:"Purple"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{color:"#ec4899"}),s.jsx("span",{children:"Pink"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{color:"#06b6d4"}),s.jsx("span",{children:"Cyan"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{color:"#84cc16"}),s.jsx("span",{children:"Lime"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{color:"#f97316",pulse:!0}),s.jsx("span",{children:"Orange + Pulse"})]})]})},u={render:()=>s.jsxs("div",{className:"status-story-overlay-demo",children:[s.jsxs("div",{className:"status-story-avatar-container",children:[s.jsx("div",{className:"status-story-avatar",children:s.jsx(t,{status:"online",overlay:!0,position:"top-right"})}),s.jsx("span",{children:"Top Right"})]}),s.jsxs("div",{className:"status-story-avatar-container",children:[s.jsx("div",{className:"status-story-avatar",children:s.jsx(t,{status:"away",overlay:!0,position:"top-left"})}),s.jsx("span",{children:"Top Left"})]}),s.jsxs("div",{className:"status-story-avatar-container",children:[s.jsx("div",{className:"status-story-avatar",children:s.jsx(t,{status:"busy",overlay:!0,position:"bottom-right"})}),s.jsx("span",{children:"Bottom Right"})]}),s.jsxs("div",{className:"status-story-avatar-container",children:[s.jsx("div",{className:"status-story-avatar",children:s.jsx(t,{status:"offline",overlay:!0,position:"bottom-left"})}),s.jsx("span",{children:"Bottom Left"})]})]})},d={render:()=>s.jsxs("div",{className:"status-story-row",children:[s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"online",onClick:()=>alert("Status clicked!"),label:"Click to change status"}),s.jsx("span",{children:"Clickable"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{status:"busy",pulse:!0,onClick:()=>alert("Busy status clicked!"),label:"Click to toggle busy"}),s.jsx("span",{children:"Clickable + Pulse"})]}),s.jsxs("div",{className:"status-story-item",children:[s.jsx(t,{color:"#8b5cf6",ring:!0,onClick:()=>alert("Custom status clicked!"),label:"Click for custom action"}),s.jsx("span",{children:"Custom + Ring"})]})]})},c={render:()=>s.jsxs("div",{className:"status-story-examples",children:[s.jsxs("div",{className:"status-story-example",children:[s.jsx("h4",{children:"User List"}),s.jsxs("div",{className:"status-story-user-list",children:[s.jsxs("div",{className:"status-story-user",children:[s.jsx("div",{className:"status-story-user-avatar",children:s.jsx(t,{status:"online",overlay:!0,position:"bottom-right",border:!0})}),s.jsx("span",{children:"John Doe"})]}),s.jsxs("div",{className:"status-story-user",children:[s.jsx("div",{className:"status-story-user-avatar",children:s.jsx(t,{status:"away",overlay:!0,position:"bottom-right",border:!0})}),s.jsx("span",{children:"Jane Smith"})]}),s.jsxs("div",{className:"status-story-user",children:[s.jsx("div",{className:"status-story-user-avatar",children:s.jsx(t,{status:"busy",overlay:!0,position:"bottom-right",border:!0,pulse:!0})}),s.jsx("span",{children:"Mike Johnson"})]}),s.jsxs("div",{className:"status-story-user",children:[s.jsx("div",{className:"status-story-user-avatar",children:s.jsx(t,{status:"offline",overlay:!0,position:"bottom-right",border:!0})}),s.jsx("span",{children:"Sarah Wilson"})]})]})]}),s.jsxs("div",{className:"status-story-example",children:[s.jsx("h4",{children:"System Status"}),s.jsxs("div",{className:"status-story-system-list",children:[s.jsxs("div",{className:"status-story-system-item",children:[s.jsx(t,{status:"success",size:"sm"}),s.jsx("span",{children:"Database Connection"})]}),s.jsxs("div",{className:"status-story-system-item",children:[s.jsx(t,{status:"success",size:"sm"}),s.jsx("span",{children:"API Server"})]}),s.jsxs("div",{className:"status-story-system-item",children:[s.jsx(t,{status:"warning",size:"sm",pulse:!0}),s.jsx("span",{children:"File Storage"})]}),s.jsxs("div",{className:"status-story-system-item",children:[s.jsx(t,{status:"error",size:"sm",ring:!0}),s.jsx("span",{children:"Email Service"})]})]})]})]})};var S,D,w;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: 'online',
    size: 'md'
  }
}`,...(w=(D=e.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var C,k,B;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(B=(k=r.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var z,P,T;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(T=(P=n.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var W,q,R;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(R=(q=i.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var A,I,L;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(I=o.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var V,_,O;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(O=(_=l.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var E,J,M;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(J=u.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var X,$,F;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(F=($=d.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var G,K,U;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(U=(K=c.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const ms=["Default","StatusVariants","SizeVariants","Animations","WithBorders","CustomColors","OverlayPositioning","Interactive","RealWorldExamples"];export{i as Animations,l as CustomColors,e as Default,d as Interactive,u as OverlayPositioning,c as RealWorldExamples,n as SizeVariants,r as StatusVariants,o as WithBorders,ms as __namedExportsOrder,cs as default};
