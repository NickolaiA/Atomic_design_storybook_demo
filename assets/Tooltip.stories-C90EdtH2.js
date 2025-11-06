import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as n}from"./index-GiUgBvb1.js";const e=({content:C,position:d="top",trigger:l="hover",visible:bt,showDelay:N=100,hideDelay:q=100,size:ft="md",variant:yt="light",customColor:r,textColor:k,maxWidth:D="200px",width:i,noAnimation:A=!1,showArrow:z=!0,offset:Vt=8,disabled:M=!1,tooltipClassName:Tt="",className:vt="",zIndex:jt=1e3,onVisibilityChange:o,children:wt,"aria-label":St,id:Ct})=>{const[B,c]=n.useState(!1),[u,E]=n.useState(!1),kt=n.useRef(null),Dt=n.useRef(null),s=n.useRef(),a=n.useRef(),p=l==="manual"?bt:B,W=Ct||`tooltip-${Math.random().toString(36).substr(2,9)}`;n.useEffect(()=>()=>{s.current&&clearTimeout(s.current),a.current&&clearTimeout(a.current)},[]),n.useEffect(()=>{p&&!u?(E(!0),o==null||o(!0)):!p&&u&&(A?(E(!1),o==null||o(!1)):setTimeout(()=>{E(!1),o==null||o(!1)},150))},[p,u,A,o]);const R=()=>{M||(a.current&&(clearTimeout(a.current),a.current=void 0),N>0?s.current=setTimeout(()=>{c(!0)},N):c(!0))},x=()=>{M||(s.current&&(clearTimeout(s.current),s.current=void 0),q>0?a.current=setTimeout(()=>{c(!1)},q):c(!1))},At=()=>{l==="hover"&&R()},Bt=()=>{l==="hover"&&x()},Et=()=>{l==="click"&&(B?x():R())},Rt=()=>{l==="focus"&&R()},Lt=()=>{l==="focus"&&x()},Nt=Ft=>{Ft.key==="Escape"&&B&&x()},L=r&&r.trim()!=="",qt=k&&k.trim()!=="",zt=["tooltip",`tooltip--${d}`,`tooltip--${ft}`,L?"tooltip--custom":`tooltip--${yt}`,z&&"tooltip--with-arrow",A&&"tooltip--no-animation",p&&"tooltip--visible",Tt].filter(Boolean).join(" "),Mt=["tooltip-wrapper",vt].filter(Boolean).join(" "),Wt={...i?{width:typeof i=="number"?`${i}px`:i,minWidth:typeof i=="number"?`${i}px`:i}:{maxWidth:typeof D=="number"?`${D}px`:D},zIndex:jt,...L&&{backgroundColor:r,borderColor:r},...qt&&{color:k}},It=L?{borderTopColor:d.includes("bottom")?r:void 0,borderBottomColor:d.includes("top")?r:void 0,borderLeftColor:d.includes("right")?r:void 0,borderRightColor:d.includes("left")?r:void 0}:{},Xt={"aria-describedby":p?W:void 0,"aria-label":St};return t.jsxs("div",{ref:kt,className:Mt,onMouseEnter:At,onMouseLeave:Bt,onClick:Et,onFocus:Rt,onBlur:Lt,onKeyDown:Nt,...Xt,children:[wt,u&&t.jsxs("div",{ref:Dt,className:zt,style:Wt,role:"tooltip",id:W,"aria-hidden":p?"false":"true",children:[t.jsx("div",{className:"tooltip__content",children:C}),z&&t.jsx("div",{className:"tooltip__arrow",style:It})]})]})};e.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display in the tooltip"},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"}]},description:"Position of the tooltip relative to trigger",defaultValue:{value:"'top'",computed:!1}},trigger:{required:!1,tsType:{name:"union",raw:"'hover' | 'click' | 'focus' | 'manual'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'click'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'manual'"}]},description:"Trigger mode for showing tooltip",defaultValue:{value:"'hover'",computed:!1}},visible:{required:!1,tsType:{name:"boolean"},description:"Show/hide tooltip (for manual trigger)"},showDelay:{required:!1,tsType:{name:"number"},description:"Delay before showing tooltip (ms)",defaultValue:{value:"100",computed:!1}},hideDelay:{required:!1,tsType:{name:"number"},description:"Delay before hiding tooltip (ms)",defaultValue:{value:"100",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"},{name:"literal",value:"'xxxl'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'dark' | 'light' | 'primary' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"Color variant",defaultValue:{value:"'light'",computed:!1}},customColor:{required:!1,tsType:{name:"string"},description:"Custom background color"},textColor:{required:!1,tsType:{name:"string"},description:"Custom text color"},maxWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum width of tooltip",defaultValue:{value:"'200px'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Fixed width of tooltip (overrides maxWidth when set)"},noAnimation:{required:!1,tsType:{name:"boolean"},description:"Disable animations",defaultValue:{value:"false",computed:!1}},showArrow:{required:!1,tsType:{name:"boolean"},description:"Show arrow pointer",defaultValue:{value:"true",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"Offset from trigger element (px)",defaultValue:{value:"8",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable tooltip",defaultValue:{value:"false",computed:!1}},tooltipClassName:{required:!1,tsType:{name:"string"},description:"Custom className for tooltip",defaultValue:{value:"''",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className for wrapper",defaultValue:{value:"''",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"Z-index for tooltip positioning",defaultValue:{value:"1000",computed:!1}},onVisibilityChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(visible: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"visible"}],return:{name:"void"}}},description:"Callback when tooltip visibility changes"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children element that triggers the tooltip"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for screen readers"},id:{required:!1,tsType:{name:"string"},description:"ID for tooltip content"}}};const _t={title:"Atoms/Tooltip",component:e,parameters:{layout:"centered",docs:{description:{component:"A versatile tooltip component for displaying contextual information. Features multiple positioning options, trigger modes, color variants, animations, and full accessibility support."}}},tags:["autodocs"],argTypes:{content:{control:"text",description:"Content to display in the tooltip"},position:{control:"select",options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end"],description:"Position of the tooltip relative to trigger"},trigger:{control:"select",options:["hover","click","focus","manual"],description:"Trigger mode for showing tooltip"},size:{control:"select",options:["xs","sm","md","lg","xl","xxl","xxxl"],description:"Size variant of the tooltip"},variant:{control:"select",options:["dark","light","primary","success","warning","error","info"],description:"Color variant of the tooltip"},showDelay:{control:{type:"number",min:0,max:2e3,step:50},description:"Delay before showing tooltip (ms)"},hideDelay:{control:{type:"number",min:0,max:2e3,step:50},description:"Delay before hiding tooltip (ms)"},maxWidth:{control:"text",description:'Maximum width of tooltip (e.g., "200px", "50vw")'},width:{control:"text",description:'Fixed width of tooltip (e.g., "150px", "300px", 250)'},showArrow:{control:"boolean",description:"Show arrow pointer"},noAnimation:{control:"boolean",description:"Disable animations"},disabled:{control:"boolean",description:"Disable tooltip"},customColor:{control:"color",description:"Custom background color"},textColor:{control:"color",description:"Custom text color"},offset:{control:{type:"number",min:0,max:50,step:2},description:"Offset from trigger element (px)"},zIndex:{control:{type:"number",min:1,max:9999,step:1},description:"Z-index for tooltip positioning"}},args:{content:"This is a tooltip",position:"top",trigger:"hover",size:"md",variant:"dark",showArrow:!0,showDelay:200,hideDelay:200,disabled:!1,noAnimation:!1}},m={render:C=>t.jsx(e,{...C,children:t.jsx("button",{style:{padding:"8px 16px",cursor:"pointer"},children:"Hover me"})})},h={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"2rem",padding:"3rem"},children:[t.jsx(e,{content:"Top tooltip",position:"top",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Top"})}),t.jsx(e,{content:"Bottom tooltip",position:"bottom",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Bottom"})}),t.jsx(e,{content:"Left tooltip",position:"left",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Left"})}),t.jsx(e,{content:"Right tooltip",position:"right",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Right"})}),t.jsx(e,{content:"Top start tooltip",position:"top-start",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Top Start"})}),t.jsx(e,{content:"Top end tooltip",position:"top-end",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Top End"})}),t.jsx(e,{content:"Bottom start tooltip",position:"bottom-start",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Bottom Start"})}),t.jsx(e,{content:"Bottom end tooltip",position:"bottom-end",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Bottom End"})})]})},g={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[t.jsx(e,{content:"Appears on hover",trigger:"hover",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Hover"})}),t.jsx(e,{content:"Appears on click (click again to hide)",trigger:"click",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Click"})}),t.jsx(e,{content:"Appears on focus",trigger:"focus",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Focus"})})]})},b={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem",padding:"3rem"},children:[t.jsx(e,{content:"Extra small tooltip",size:"xs",children:t.jsx("button",{style:{padding:"8px 16px"},children:"XS"})}),t.jsx(e,{content:"Small tooltip",size:"sm",children:t.jsx("button",{style:{padding:"8px 16px"},children:"SM"})}),t.jsx(e,{content:"Medium tooltip",size:"md",children:t.jsx("button",{style:{padding:"8px 16px"},children:"MD"})}),t.jsx(e,{content:"Large tooltip",size:"lg",children:t.jsx("button",{style:{padding:"8px 16px"},children:"LG"})}),t.jsx(e,{content:"Extra large tooltip",size:"xl",children:t.jsx("button",{style:{padding:"8px 16px"},children:"XL"})}),t.jsx(e,{content:"Extra extra large tooltip",size:"xxl",children:t.jsx("button",{style:{padding:"8px 16px"},children:"XXL"})}),t.jsx(e,{content:"Extra extra extra large tooltip",size:"xxxl",children:t.jsx("button",{style:{padding:"8px 16px"},children:"XXXL"})})]})},f={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem",padding:"2rem"},children:[t.jsx(e,{content:"Dark tooltip",variant:"dark",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Dark"})}),t.jsx(e,{content:"Light tooltip",variant:"light",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Light"})}),t.jsx(e,{content:"Primary tooltip",variant:"primary",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Primary"})}),t.jsx(e,{content:"Success tooltip",variant:"success",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Success"})}),t.jsx(e,{content:"Warning tooltip",variant:"warning",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Warning"})}),t.jsx(e,{content:"Error tooltip",variant:"error",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Error"})}),t.jsx(e,{content:"Info tooltip",variant:"info",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Info"})}),t.jsx(e,{content:"Custom background color",customColor:"#9333ea",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Custom Background"})}),t.jsx(e,{content:"Custom text color",textColor:"#e11d48",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Custom Text"})}),t.jsx(e,{content:"Both custom colors",customColor:"#1f2937",textColor:"#fbbf24",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Both Custom"})})]})},y={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[t.jsx(e,{content:"Short tip",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Short"})}),t.jsx(e,{content:"This is a much longer tooltip with more detailed information that spans multiple lines",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Long Text"})}),t.jsx(e,{content:t.jsxs("div",{children:[t.jsx("strong",{children:"Rich Content"}),t.jsx("br",{}),"With ",t.jsx("em",{children:"formatting"})," and multiple lines!"]}),children:t.jsx("button",{style:{padding:"8px 16px"},children:"Rich Content"})})]})},T={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[t.jsx(e,{content:"No delay",showDelay:0,hideDelay:0,children:t.jsx("button",{style:{padding:"8px 16px"},children:"No Delay"})}),t.jsx(e,{content:"Slow to show",showDelay:500,children:t.jsx("button",{style:{padding:"8px 16px"},children:"Slow Show"})}),t.jsx(e,{content:"Slow to hide",hideDelay:1e3,children:t.jsx("button",{style:{padding:"8px 16px"},children:"Slow Hide"})}),t.jsx(e,{content:"No animation",noAnimation:!0,children:t.jsx("button",{style:{padding:"8px 16px"},children:"No Animation"})})]})},v={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[t.jsx(e,{content:"No arrow tooltip",showArrow:!1,children:t.jsx("button",{style:{padding:"8px 16px"},children:"No Arrow"})}),t.jsx(e,{content:"With arrow tooltip",showArrow:!0,children:t.jsx("button",{style:{padding:"8px 16px"},children:"With Arrow"})})]})},j={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",padding:"2rem"},children:[t.jsx(e,{content:"Button tooltip",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Button"})}),t.jsx(e,{content:"Link tooltip",children:t.jsx("a",{href:"#",style:{color:"blue",textDecoration:"underline"},children:"Link"})}),t.jsx(e,{content:"Icon tooltip",children:t.jsx("span",{style:{display:"inline-block",padding:"8px",backgroundColor:"#f3f4f6",borderRadius:"4px",cursor:"help"},children:"ℹ️"})}),t.jsx(e,{content:"Text tooltip",children:t.jsx("span",{style:{borderBottom:"1px dotted #666",cursor:"help"},children:"Hover this text"})})]})},w={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[t.jsx(e,{content:"This is a narrow tooltip with fixed width",width:"120px",children:t.jsx("button",{style:{padding:"8px 16px"},children:"120px width"})}),t.jsx(e,{content:"This is a medium width tooltip with more space for content",width:200,children:t.jsx("button",{style:{padding:"8px 16px"},children:"200px width"})}),t.jsx(e,{content:"This is a wide tooltip that can contain much more detailed information and longer text content",width:"300px",children:t.jsx("button",{style:{padding:"8px 16px"},children:"300px width"})}),t.jsx(e,{content:"This tooltip uses max-width instead of fixed width, so it will wrap based on content length and the max-width constraint",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Max-width (default)"})})]})},S={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[t.jsx(e,{content:"This tooltip is enabled",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Enabled"})}),t.jsx(e,{content:"This tooltip is disabled",disabled:!0,children:t.jsx("button",{style:{padding:"8px 16px",opacity:"0.6"},children:"Disabled"})})]})};var I,X,F;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>\r
      <button style={{
      padding: '8px 16px',
      cursor: 'pointer'
    }}>\r
        Hover me\r
      </button>\r
    </Tooltip>
}`,...(F=(X=m.parameters)==null?void 0:X.docs)==null?void 0:F.source}}};var V,H,P;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
    padding: '3rem'
  }}>\r
      <Tooltip content="Top tooltip" position="top">\r
        <button style={{
        padding: '8px 16px'
      }}>Top</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Bottom tooltip" position="bottom">\r
        <button style={{
        padding: '8px 16px'
      }}>Bottom</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Left tooltip" position="left">\r
        <button style={{
        padding: '8px 16px'
      }}>Left</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Right tooltip" position="right">\r
        <button style={{
        padding: '8px 16px'
      }}>Right</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Top start tooltip" position="top-start">\r
        <button style={{
        padding: '8px 16px'
      }}>Top Start</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Top end tooltip" position="top-end">\r
        <button style={{
        padding: '8px 16px'
      }}>Top End</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Bottom start tooltip" position="bottom-start">\r
        <button style={{
        padding: '8px 16px'
      }}>Bottom Start</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Bottom end tooltip" position="bottom-end">\r
        <button style={{
        padding: '8px 16px'
      }}>Bottom End</button>\r
      </Tooltip>\r
    </div>
}`,...(P=(H=h.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var _,$,O;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    padding: '2rem'
  }}>\r
      <Tooltip content="Appears on hover" trigger="hover">\r
        <button style={{
        padding: '8px 16px'
      }}>Hover</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Appears on click (click again to hide)" trigger="click">\r
        <button style={{
        padding: '8px 16px'
      }}>Click</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Appears on focus" trigger="focus">\r
        <button style={{
        padding: '8px 16px'
      }}>Focus</button>\r
      </Tooltip>\r
    </div>
}`,...(O=($=g.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var G,K,Z;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
    padding: '3rem'
  }}>\r
      <Tooltip content="Extra small tooltip" size="xs">\r
        <button style={{
        padding: '8px 16px'
      }}>XS</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Small tooltip" size="sm">\r
        <button style={{
        padding: '8px 16px'
      }}>SM</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Medium tooltip" size="md">\r
        <button style={{
        padding: '8px 16px'
      }}>MD</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Large tooltip" size="lg">\r
        <button style={{
        padding: '8px 16px'
      }}>LG</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Extra large tooltip" size="xl">\r
        <button style={{
        padding: '8px 16px'
      }}>XL</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Extra extra large tooltip" size="xxl">\r
        <button style={{
        padding: '8px 16px'
      }}>XXL</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Extra extra extra large tooltip" size="xxxl">\r
        <button style={{
        padding: '8px 16px'
      }}>XXXL</button>\r
      </Tooltip>\r
    </div>
}`,...(Z=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var J,Q,U;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
    padding: '2rem'
  }}>\r
      <Tooltip content="Dark tooltip" variant="dark">\r
        <button style={{
        padding: '8px 16px'
      }}>Dark</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Light tooltip" variant="light">\r
        <button style={{
        padding: '8px 16px'
      }}>Light</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Primary tooltip" variant="primary">\r
        <button style={{
        padding: '8px 16px'
      }}>Primary</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Success tooltip" variant="success">\r
        <button style={{
        padding: '8px 16px'
      }}>Success</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Warning tooltip" variant="warning">\r
        <button style={{
        padding: '8px 16px'
      }}>Warning</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Error tooltip" variant="error">\r
        <button style={{
        padding: '8px 16px'
      }}>Error</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Info tooltip" variant="info">\r
        <button style={{
        padding: '8px 16px'
      }}>Info</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Custom background color" customColor="#9333ea">\r
        <button style={{
        padding: '8px 16px'
      }}>Custom Background</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Custom text color" textColor="#e11d48">\r
        <button style={{
        padding: '8px 16px'
      }}>Custom Text</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Both custom colors" customColor="#1f2937" textColor="#fbbf24">\r
        <button style={{
        padding: '8px 16px'
      }}>Both Custom</button>\r
      </Tooltip>\r
    </div>
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,tt,et;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    padding: '2rem'
  }}>\r
      <Tooltip content="Short tip">\r
        <button style={{
        padding: '8px 16px'
      }}>Short</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="This is a much longer tooltip with more detailed information that spans multiple lines">\r
        <button style={{
        padding: '8px 16px'
      }}>Long Text</button>\r
      </Tooltip>\r
      \r
      <Tooltip content={<div>\r
            <strong>Rich Content</strong>\r
            <br />\r
            With <em>formatting</em> and multiple lines!\r
          </div>}>\r
        <button style={{
        padding: '8px 16px'
      }}>Rich Content</button>\r
      </Tooltip>\r
    </div>
}`,...(et=(tt=y.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var ot,rt,nt;T.parameters={...T.parameters,docs:{...(ot=T.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    padding: '2rem'
  }}>\r
      <Tooltip content="No delay" showDelay={0} hideDelay={0}>\r
        <button style={{
        padding: '8px 16px'
      }}>No Delay</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Slow to show" showDelay={500}>\r
        <button style={{
        padding: '8px 16px'
      }}>Slow Show</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Slow to hide" hideDelay={1000}>\r
        <button style={{
        padding: '8px 16px'
      }}>Slow Hide</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="No animation" noAnimation>\r
        <button style={{
        padding: '8px 16px'
      }}>No Animation</button>\r
      </Tooltip>\r
    </div>
}`,...(nt=(rt=T.parameters)==null?void 0:rt.docs)==null?void 0:nt.source}}};var it,lt,st;v.parameters={...v.parameters,docs:{...(it=v.parameters)==null?void 0:it.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    padding: '2rem'
  }}>\r
      <Tooltip content="No arrow tooltip" showArrow={false}>\r
        <button style={{
        padding: '8px 16px'
      }}>No Arrow</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="With arrow tooltip" showArrow={true}>\r
        <button style={{
        padding: '8px 16px'
      }}>With Arrow</button>\r
      </Tooltip>\r
    </div>
}`,...(st=(lt=v.parameters)==null?void 0:lt.docs)==null?void 0:st.source}}};var at,pt,dt;j.parameters={...j.parameters,docs:{...(at=j.parameters)==null?void 0:at.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    padding: '2rem'
  }}>\r
      <Tooltip content="Button tooltip">\r
        <button style={{
        padding: '8px 16px'
      }}>Button</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Link tooltip">\r
        <a href="#" style={{
        color: 'blue',
        textDecoration: 'underline'
      }}>Link</a>\r
      </Tooltip>\r
      \r
      <Tooltip content="Icon tooltip">\r
        <span style={{
        display: 'inline-block',
        padding: '8px',
        backgroundColor: '#f3f4f6',
        borderRadius: '4px',
        cursor: 'help'
      }}>\r
          ℹ️\r
        </span>\r
      </Tooltip>\r
      \r
      <Tooltip content="Text tooltip">\r
        <span style={{
        borderBottom: '1px dotted #666',
        cursor: 'help'
      }}>\r
          Hover this text\r
        </span>\r
      </Tooltip>\r
    </div>
}`,...(dt=(pt=j.parameters)==null?void 0:pt.docs)==null?void 0:dt.source}}};var ct,ut,xt;w.parameters={...w.parameters,docs:{...(ct=w.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    padding: '2rem'
  }}>\r
      <Tooltip content="This is a narrow tooltip with fixed width" width="120px">\r
        <button style={{
        padding: '8px 16px'
      }}>120px width</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="This is a medium width tooltip with more space for content" width={200}>\r
        <button style={{
        padding: '8px 16px'
      }}>200px width</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="This is a wide tooltip that can contain much more detailed information and longer text content" width="300px">\r
        <button style={{
        padding: '8px 16px'
      }}>300px width</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="This tooltip uses max-width instead of fixed width, so it will wrap based on content length and the max-width constraint">\r
        <button style={{
        padding: '8px 16px'
      }}>Max-width (default)</button>\r
      </Tooltip>\r
    </div>
}`,...(xt=(ut=w.parameters)==null?void 0:ut.docs)==null?void 0:xt.source}}};var mt,ht,gt;S.parameters={...S.parameters,docs:{...(mt=S.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    padding: '2rem'
  }}>\r
      <Tooltip content="This tooltip is enabled">\r
        <button style={{
        padding: '8px 16px'
      }}>Enabled</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="This tooltip is disabled" disabled>\r
        <button style={{
        padding: '8px 16px',
        opacity: '0.6'
      }}>Disabled</button>\r
      </Tooltip>\r
    </div>
}`,...(gt=(ht=S.parameters)==null?void 0:ht.docs)==null?void 0:gt.source}}};const $t=["Default","Positions","TriggerModes","Sizes","ColorVariants","ContentVariants","TimingAndAnimation","WithoutArrow","TriggerElements","FixedWidths","DisabledState"];export{f as ColorVariants,y as ContentVariants,m as Default,S as DisabledState,w as FixedWidths,h as Positions,b as Sizes,T as TimingAndAnimation,j as TriggerElements,g as TriggerModes,v as WithoutArrow,$t as __namedExportsOrder,_t as default};
