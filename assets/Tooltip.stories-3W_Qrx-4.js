import{r,j as t}from"./iframe-NKDFF6YA.js";import"./preload-helper-PPVm8Dsz.js";const e=({content:S,position:p="top",trigger:n="hover",visible:W,showDelay:N=100,hideDelay:q=100,size:I="md",variant:X="light",customColor:o,textColor:k,maxWidth:D="200px",width:i,noAnimation:A=!1,showArrow:z=!0,offset:at=8,disabled:V=!1,tooltipClassName:F="",className:_="",zIndex:H=1e3,onVisibilityChange:d,children:P,"aria-label":$,id:O})=>{const[B,c]=r.useState(!1),[u,E]=r.useState(!1),G=r.useRef(null),K=r.useRef(null),l=r.useRef(void 0),s=r.useRef(void 0),a=n==="manual"?W:B,M=O||`tooltip-${Math.random().toString(36).substr(2,9)}`;r.useEffect(()=>()=>{l.current&&clearTimeout(l.current),s.current&&clearTimeout(s.current)},[]),r.useEffect(()=>{a&&!u?(E(!0),d?.(!0)):!a&&u&&(A?(E(!1),d?.(!1)):setTimeout(()=>{E(!1),d?.(!1)},150))},[a,u,A,d]);const R=()=>{V||(s.current&&(clearTimeout(s.current),s.current=void 0),N>0?l.current=setTimeout(()=>{c(!0)},N):c(!0))},x=()=>{V||(l.current&&(clearTimeout(l.current),l.current=void 0),q>0?s.current=setTimeout(()=>{c(!1)},q):c(!1))},Z=()=>{n==="hover"&&R()},J=()=>{n==="hover"&&x()},Q=()=>{n==="click"&&(B?x():R())},U=()=>{n==="focus"&&R()},Y=()=>{n==="focus"&&x()},tt=st=>{st.key==="Escape"&&B&&x()},L=o&&o.trim()!=="",et=k&&k.trim()!=="",ot=["tooltip",`tooltip--${p}`,`tooltip--${I}`,L?"tooltip--custom":`tooltip--${X}`,z&&"tooltip--with-arrow",A&&"tooltip--no-animation",a&&"tooltip--visible",F].filter(Boolean).join(" "),rt=["tooltip-wrapper",_].filter(Boolean).join(" "),it={...i?{width:typeof i=="number"?`${i}px`:i,minWidth:typeof i=="number"?`${i}px`:i}:{maxWidth:typeof D=="number"?`${D}px`:D},zIndex:H,...L&&{backgroundColor:o,borderColor:o},...et&&{color:k}},nt=L?{borderTopColor:p.includes("bottom")?o:void 0,borderBottomColor:p.includes("top")?o:void 0,borderLeftColor:p.includes("right")?o:void 0,borderRightColor:p.includes("left")?o:void 0}:{},lt={"aria-describedby":a?M:void 0,"aria-label":$};return t.jsxs("div",{ref:G,className:rt,onMouseEnter:Z,onMouseLeave:J,onClick:Q,onFocus:U,onBlur:Y,onKeyDown:tt,...lt,children:[P,u&&t.jsxs("div",{ref:K,className:ot,style:it,role:"tooltip",id:M,"aria-hidden":a?"false":"true",children:[t.jsx("div",{className:"tooltip__content",children:S}),z&&t.jsx("div",{className:"tooltip__arrow",style:nt})]})]})};e.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display in the tooltip"},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"}]},description:"Position of the tooltip relative to trigger",defaultValue:{value:"'top'",computed:!1}},trigger:{required:!1,tsType:{name:"union",raw:"'hover' | 'click' | 'focus' | 'manual'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'click'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'manual'"}]},description:"Trigger mode for showing tooltip",defaultValue:{value:"'hover'",computed:!1}},visible:{required:!1,tsType:{name:"boolean"},description:"Show/hide tooltip (for manual trigger)"},showDelay:{required:!1,tsType:{name:"number"},description:"Delay before showing tooltip (ms)",defaultValue:{value:"100",computed:!1}},hideDelay:{required:!1,tsType:{name:"number"},description:"Delay before hiding tooltip (ms)",defaultValue:{value:"100",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"},{name:"literal",value:"'xxxl'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'dark' | 'light' | 'primary' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"Color variant",defaultValue:{value:"'light'",computed:!1}},customColor:{required:!1,tsType:{name:"string"},description:"Custom background color"},textColor:{required:!1,tsType:{name:"string"},description:"Custom text color"},maxWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum width of tooltip",defaultValue:{value:"'200px'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Fixed width of tooltip (overrides maxWidth when set)"},noAnimation:{required:!1,tsType:{name:"boolean"},description:"Disable animations",defaultValue:{value:"false",computed:!1}},showArrow:{required:!1,tsType:{name:"boolean"},description:"Show arrow pointer",defaultValue:{value:"true",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"Offset from trigger element (px)",defaultValue:{value:"8",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable tooltip",defaultValue:{value:"false",computed:!1}},tooltipClassName:{required:!1,tsType:{name:"string"},description:"Custom className for tooltip",defaultValue:{value:"''",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className for wrapper",defaultValue:{value:"''",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"Z-index for tooltip positioning",defaultValue:{value:"1000",computed:!1}},onVisibilityChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(visible: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"visible"}],return:{name:"void"}}},description:"Callback when tooltip visibility changes"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children element that triggers the tooltip"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for screen readers"},id:{required:!1,tsType:{name:"string"},description:"ID for tooltip content"}}};const ct={title:"Atoms/Tooltip",component:e,parameters:{layout:"centered",docs:{description:{component:"A versatile tooltip component for displaying contextual information. Features multiple positioning options, trigger modes, color variants, animations, and full accessibility support."}}},tags:["autodocs"],argTypes:{content:{control:"text",description:"Content to display in the tooltip"},position:{control:"select",options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end"],description:"Position of the tooltip relative to trigger"},trigger:{control:"select",options:["hover","click","focus","manual"],description:"Trigger mode for showing tooltip"},size:{control:"select",options:["xs","sm","md","lg","xl","xxl","xxxl"],description:"Size variant of the tooltip"},variant:{control:"select",options:["dark","light","primary","success","warning","error","info"],description:"Color variant of the tooltip"},showDelay:{control:{type:"number",min:0,max:2e3,step:50},description:"Delay before showing tooltip (ms)"},hideDelay:{control:{type:"number",min:0,max:2e3,step:50},description:"Delay before hiding tooltip (ms)"},maxWidth:{control:"text",description:'Maximum width of tooltip (e.g., "200px", "50vw")'},width:{control:"text",description:'Fixed width of tooltip (e.g., "150px", "300px", 250)'},showArrow:{control:"boolean",description:"Show arrow pointer"},noAnimation:{control:"boolean",description:"Disable animations"},disabled:{control:"boolean",description:"Disable tooltip"},customColor:{control:"color",description:"Custom background color"},textColor:{control:"color",description:"Custom text color"},offset:{control:{type:"number",min:0,max:50,step:2},description:"Offset from trigger element (px)"},zIndex:{control:{type:"number",min:1,max:9999,step:1},description:"Z-index for tooltip positioning"}},args:{content:"This is a tooltip",position:"top",trigger:"hover",size:"md",variant:"dark",showArrow:!0,showDelay:200,hideDelay:200,disabled:!1,noAnimation:!1}},m={render:S=>t.jsx(e,{...S,children:t.jsx("button",{style:{padding:"8px 16px",cursor:"pointer"},children:"Hover me"})})},h={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"2rem",padding:"3rem"},children:[t.jsx(e,{content:"Top tooltip",position:"top",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Top"})}),t.jsx(e,{content:"Bottom tooltip",position:"bottom",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Bottom"})}),t.jsx(e,{content:"Left tooltip",position:"left",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Left"})}),t.jsx(e,{content:"Right tooltip",position:"right",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Right"})}),t.jsx(e,{content:"Top start tooltip",position:"top-start",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Top Start"})}),t.jsx(e,{content:"Top end tooltip",position:"top-end",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Top End"})}),t.jsx(e,{content:"Bottom start tooltip",position:"bottom-start",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Bottom Start"})}),t.jsx(e,{content:"Bottom end tooltip",position:"bottom-end",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Bottom End"})})]})},g={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[t.jsx(e,{content:"Appears on hover",trigger:"hover",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Hover"})}),t.jsx(e,{content:"Appears on click (click again to hide)",trigger:"click",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Click"})}),t.jsx(e,{content:"Appears on focus",trigger:"focus",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Focus"})})]})},b={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem",padding:"3rem"},children:[t.jsx(e,{content:"Extra small tooltip",size:"xs",children:t.jsx("button",{style:{padding:"8px 16px"},children:"XS"})}),t.jsx(e,{content:"Small tooltip",size:"sm",children:t.jsx("button",{style:{padding:"8px 16px"},children:"SM"})}),t.jsx(e,{content:"Medium tooltip",size:"md",children:t.jsx("button",{style:{padding:"8px 16px"},children:"MD"})}),t.jsx(e,{content:"Large tooltip",size:"lg",children:t.jsx("button",{style:{padding:"8px 16px"},children:"LG"})}),t.jsx(e,{content:"Extra large tooltip",size:"xl",children:t.jsx("button",{style:{padding:"8px 16px"},children:"XL"})}),t.jsx(e,{content:"Extra extra large tooltip",size:"xxl",children:t.jsx("button",{style:{padding:"8px 16px"},children:"XXL"})}),t.jsx(e,{content:"Extra extra extra large tooltip",size:"xxxl",children:t.jsx("button",{style:{padding:"8px 16px"},children:"XXXL"})})]})},f={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem",padding:"2rem"},children:[t.jsx(e,{content:"Dark tooltip",variant:"dark",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Dark"})}),t.jsx(e,{content:"Light tooltip",variant:"light",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Light"})}),t.jsx(e,{content:"Primary tooltip",variant:"primary",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Primary"})}),t.jsx(e,{content:"Success tooltip",variant:"success",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Success"})}),t.jsx(e,{content:"Warning tooltip",variant:"warning",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Warning"})}),t.jsx(e,{content:"Error tooltip",variant:"error",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Error"})}),t.jsx(e,{content:"Info tooltip",variant:"info",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Info"})}),t.jsx(e,{content:"Custom background color",customColor:"#9333ea",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Custom Background"})}),t.jsx(e,{content:"Custom text color",textColor:"#e11d48",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Custom Text"})}),t.jsx(e,{content:"Both custom colors",customColor:"#1f2937",textColor:"#fbbf24",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Both Custom"})})]})},y={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[t.jsx(e,{content:"Short tip",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Short"})}),t.jsx(e,{content:"This is a much longer tooltip with more detailed information that spans multiple lines",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Long Text"})}),t.jsx(e,{content:t.jsxs("div",{children:[t.jsx("strong",{children:"Rich Content"}),t.jsx("br",{}),"With ",t.jsx("em",{children:"formatting"})," and multiple lines!"]}),children:t.jsx("button",{style:{padding:"8px 16px"},children:"Rich Content"})})]})},T={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[t.jsx(e,{content:"No delay",showDelay:0,hideDelay:0,children:t.jsx("button",{style:{padding:"8px 16px"},children:"No Delay"})}),t.jsx(e,{content:"Slow to show",showDelay:500,children:t.jsx("button",{style:{padding:"8px 16px"},children:"Slow Show"})}),t.jsx(e,{content:"Slow to hide",hideDelay:1e3,children:t.jsx("button",{style:{padding:"8px 16px"},children:"Slow Hide"})}),t.jsx(e,{content:"No animation",noAnimation:!0,children:t.jsx("button",{style:{padding:"8px 16px"},children:"No Animation"})})]})},v={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[t.jsx(e,{content:"No arrow tooltip",showArrow:!1,children:t.jsx("button",{style:{padding:"8px 16px"},children:"No Arrow"})}),t.jsx(e,{content:"With arrow tooltip",showArrow:!0,children:t.jsx("button",{style:{padding:"8px 16px"},children:"With Arrow"})})]})},j={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",padding:"2rem"},children:[t.jsx(e,{content:"Button tooltip",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Button"})}),t.jsx(e,{content:"Link tooltip",children:t.jsx("a",{href:"#",style:{color:"blue",textDecoration:"underline"},children:"Link"})}),t.jsx(e,{content:"Icon tooltip",children:t.jsx("span",{style:{display:"inline-block",padding:"8px",backgroundColor:"#f3f4f6",borderRadius:"4px",cursor:"help"},children:"ℹ️"})}),t.jsx(e,{content:"Text tooltip",children:t.jsx("span",{style:{borderBottom:"1px dotted #666",cursor:"help"},children:"Hover this text"})})]})},w={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[t.jsx(e,{content:"This is a narrow tooltip with fixed width",width:"120px",children:t.jsx("button",{style:{padding:"8px 16px"},children:"120px width"})}),t.jsx(e,{content:"This is a medium width tooltip with more space for content",width:200,children:t.jsx("button",{style:{padding:"8px 16px"},children:"200px width"})}),t.jsx(e,{content:"This is a wide tooltip that can contain much more detailed information and longer text content",width:"300px",children:t.jsx("button",{style:{padding:"8px 16px"},children:"300px width"})}),t.jsx(e,{content:"This tooltip uses max-width instead of fixed width, so it will wrap based on content length and the max-width constraint",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Max-width (default)"})})]})},C={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[t.jsx(e,{content:"This tooltip is enabled",children:t.jsx("button",{style:{padding:"8px 16px"},children:"Enabled"})}),t.jsx(e,{content:"This tooltip is disabled",disabled:!0,children:t.jsx("button",{style:{padding:"8px 16px",opacity:"0.6"},children:"Disabled"})})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>\r
      <button style={{
      padding: '8px 16px',
      cursor: 'pointer'
    }}>\r
        Hover me\r
      </button>\r
    </Tooltip>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const ut=["Default","Positions","TriggerModes","Sizes","ColorVariants","ContentVariants","TimingAndAnimation","WithoutArrow","TriggerElements","FixedWidths","DisabledState"];export{f as ColorVariants,y as ContentVariants,m as Default,C as DisabledState,w as FixedWidths,h as Positions,b as Sizes,T as TimingAndAnimation,j as TriggerElements,g as TriggerModes,v as WithoutArrow,ut as __namedExportsOrder,ct as default};
