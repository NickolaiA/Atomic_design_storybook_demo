import{r as a,j as e}from"./iframe-CdBaqdCg.js";import{B as l}from"./Button-B5OiHgR-.js";import"./preload-helper-PPVm8Dsz.js";const te={success:"✓",warning:"⚠",error:"✕",info:"ℹ"},r=({variant:s="info",size:t="medium",appearance:n="filled",title:c,message:O,icon:K,showIcon:F=!0,closable:o=!1,closeText:X,autoClose:d,actions:P,banner:W=!1,showBorder:Y=!1,padding:u,className:$="",onClose:D,onShow:L,children:J})=>{const[G,Q]=a.useState(!0),[U,Z]=a.useState(!1),i=a.useCallback(()=>{Z(!0),setTimeout(()=>{Q(!1),D?.()},300)},[D]);a.useEffect(()=>{if(d&&d>0){const E=setTimeout(()=>{i()},d);return()=>clearTimeout(E)}},[d,i]),a.useEffect(()=>{L?.()},[L]);const ee=a.useCallback(E=>{E.key==="Escape"&&o&&i()},[o,i]);if(!G)return null;const se=["alert",`alert--${s}`,`alert--${t}`,`alert--${n}`,W?"alert--banner":"",Y?"alert--bordered":"",U?"alert--closing":"",$].filter(Boolean).join(" "),ae=K||te[s],H=J||O,re=u?{"--alert-custom-padding":typeof u=="number"?`${u}px`:u}:void 0;return e.jsxs("div",{className:se,style:re,role:"alert","aria-live":"polite","data-variant":s,"data-size":t,"data-appearance":n,"data-banner":W,"data-bordered":Y,"data-closable":o,onKeyDown:ee,tabIndex:o?0:-1,children:[F&&e.jsx("div",{className:"alert__icon","aria-hidden":"true",children:ae}),e.jsxs("div",{className:"alert__content",children:[c&&e.jsx("div",{className:"alert__title",children:c}),H&&e.jsx("div",{className:"alert__message",children:H}),P&&e.jsx("div",{className:"alert__actions",children:P})]}),o&&e.jsx("button",{className:"alert__close",onClick:i,"aria-label":"Close alert",type:"button",children:X||"✕"})]})};r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:"'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"Alert variant - determines color scheme and default icon",defaultValue:{value:"'info'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'medium'",computed:!1}},appearance:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'subtle'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'subtle'"}]},description:"Visual appearance style",defaultValue:{value:"'filled'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Alert title/heading"},message:{required:!1,tsType:{name:"string"},description:"Alert message content"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon content"},showIcon:{required:!1,tsType:{name:"boolean"},description:"Hide the icon completely",defaultValue:{value:"true",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"Make alert dismissible with close button",defaultValue:{value:"false",computed:!1}},closeText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom close button text/content"},autoClose:{required:!1,tsType:{name:"number"},description:"Auto-dismiss after specified milliseconds"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Show action buttons"},banner:{required:!1,tsType:{name:"boolean"},description:"Banner mode - full width, no border radius",defaultValue:{value:"false",computed:!1}},showBorder:{required:!1,tsType:{name:"boolean"},description:"Show border on left/top edge",defaultValue:{value:"false",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Custom padding (overrides size-based padding)"},className:{required:!1,tsType:{name:"string"},description:"Custom CSS class",defaultValue:{value:"''",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when alert is closed"},onShow:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when alert is shown"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children content (alternative to message prop)"}}};const le={title:"Atoms/Alert",component:r,parameters:{layout:"padded",docs:{description:{component:"Alert component for displaying important messages, notifications, and feedback to users. Supports different types, variants, sizes, and interactive features like dismissal and actions."}}},argTypes:{variant:{control:"select",options:["success","warning","error","info"],description:"Alert variant - determines color scheme and default icon"},size:{control:"select",options:["small","medium","large"],description:"Size variant"},appearance:{control:"select",options:["filled","outlined","subtle"],description:"Visual appearance style"},title:{control:"text",description:"Alert title/heading"},message:{control:"text",description:"Alert message content"},showIcon:{control:"boolean",description:"Show/hide the icon"},closable:{control:"boolean",description:"Make alert dismissible with close button"},banner:{control:"boolean",description:"Banner mode - full width, no border radius"},showBorder:{control:"boolean",description:"Show border on left edge"},padding:{control:"text",description:'Custom padding (overrides size-based padding) - accepts CSS values like "16px", "1rem", "8px 16px"'},autoClose:{control:"number",description:"Auto-dismiss after specified milliseconds (0 to disable)"},onClose:{action:"closed",description:"Callback when alert is closed"},onShow:{action:"shown",description:"Callback when alert is shown"}},tags:["autodocs"]},m={args:{message:"This is a default info alert message."}},p={args:{variant:"success",title:"Success!",message:"Your operation was completed successfully."}},g={args:{variant:"success",title:"Success",message:"Your changes have been saved successfully."}},h={args:{variant:"warning",title:"Warning",message:"Please review your input before proceeding."}},f={args:{variant:"error",title:"Error",message:"Something went wrong. Please try again."}},v={args:{variant:"info",title:"Information",message:"Here is some important information for you."}},b={args:{size:"small",variant:"info",message:"This is a small alert message."}},y={args:{size:"medium",variant:"info",message:"This is a medium alert message."}},w={args:{size:"large",variant:"info",title:"Large Alert",message:"This is a large alert message with more prominent styling."}},S={args:{variant:"success",appearance:"filled",title:"Filled Variant",message:"This alert uses the filled variant with solid background."}},A={args:{variant:"warning",appearance:"outlined",title:"Outlined Variant",message:"This alert uses the outlined variant with border only."}},x={args:{variant:"info",appearance:"subtle",title:"Subtle Variant",message:"This alert uses the subtle variant with light background."}},C={args:{variant:"warning",title:"Dismissible Alert",message:"You can close this alert by clicking the X button.",closable:!0}},T={args:{variant:"info",title:"Custom Close Button",message:"This alert has a custom close button text.",closable:!0,closeText:"Dismiss"}},j={args:{variant:"error",title:"Action Required",message:"There was an error processing your request.",actions:e.jsxs("div",{className:"alert-story-actions",children:[e.jsx(l,{size:"small",variant:"outlined",children:"Retry"}),e.jsx(l,{size:"small",variant:"ghost",children:"Cancel"})]})}},k={args:{variant:"warning",title:"System Maintenance",message:"The system will be under maintenance from 2:00 AM to 4:00 AM EST.",banner:!0,closable:!0},parameters:{layout:"fullscreen"}},N={args:{variant:"success",title:"Bordered Alert",message:"This alert has a colored left border for emphasis.",showBorder:!0,appearance:"subtle"}},B={args:{variant:"info",title:"No Icon",message:"This alert has the icon hidden.",showIcon:!1}},z={args:{variant:"success",title:"Custom Icon",message:"This alert uses a custom icon.",icon:"🎉"}},I={args:{variant:"info",title:"Custom Padding",message:"This alert has custom padding that overrides the default size-based padding.",padding:"24px 32px"},parameters:{docs:{description:{story:'Alert with custom padding. You can use any valid CSS padding value like "16px", "1rem", or "8px 16px 12px 20px".'}}}},q={render:s=>{const[t,n]=a.useState(0);return e.jsxs("div",{className:"alert-story-container",children:[a.createElement(r,{...s,key:t,variant:"success",title:"Auto-closing Alert",message:"This alert will automatically close in 3 seconds.",autoClose:3e3,onClose:()=>{console.log("Alert closed automatically")}}),e.jsx(l,{onClick:()=>n(c=>c+1),size:"small",variant:"outlined",children:"Show Again"})]})}},R={render:s=>{const[t,n]=a.useState(!0);return e.jsxs("div",{className:"alert-story-container",children:[t&&e.jsx(r,{...s,variant:"info",title:"Controlled Alert",message:"This alert visibility is controlled by external state.",closable:!0,onClose:()=>n(!1)}),e.jsxs("div",{className:"alert-story-controls",children:[e.jsx(l,{onClick:()=>n(!0),disabled:t,size:"small",children:"Show Alert"}),e.jsx(l,{onClick:()=>n(!1),disabled:!t,size:"small",variant:"outlined",children:"Hide Alert"})]})]})}},V={render:()=>e.jsxs("div",{className:"alert-story-multiple",children:[e.jsx(r,{variant:"success",title:"Success",message:"Operation completed successfully.",closable:!0}),e.jsx(r,{variant:"warning",title:"Warning",message:"Please check your input data.",closable:!0}),e.jsx(r,{variant:"error",title:"Error",message:"An error occurred while processing.",closable:!0}),e.jsx(r,{variant:"info",title:"Information",message:"Additional information is available.",closable:!0})]}),parameters:{docs:{description:{story:"Multiple alerts of different types displayed together."}}}},M={render:s=>e.jsx(r,{...s,variant:"warning",title:"Complex Alert Content",closable:!0,children:e.jsxs("div",{children:[e.jsx("p",{children:"This alert contains complex content including:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Nested HTML elements"}),e.jsx("li",{children:"Multiple paragraphs"}),e.jsx("li",{children:"Lists and other formatting"})]}),e.jsx("p",{children:"You can use the children prop to include any JSX content."})]})}),parameters:{docs:{description:{story:"Alert with complex content using the children prop."}}}},_={args:{variant:"info",size:"medium",appearance:"filled",title:"Alert Title",message:"This is the alert message content.",showIcon:!0,closable:!1,banner:!1,showBorder:!1,padding:void 0,autoClose:0},parameters:{docs:{description:{story:"Interactive playground for testing all Alert properties and configurations."}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'This is a default info alert message.'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success!',
    message: 'Your operation was completed successfully.'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your changes have been saved successfully.'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please review your input before proceeding.'
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again.'
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information',
    message: 'Here is some important information for you.'
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    variant: 'info',
    message: 'This is a small alert message.'
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    variant: 'info',
    message: 'This is a medium alert message.'
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    variant: 'info',
    title: 'Large Alert',
    message: 'This is a large alert message with more prominent styling.'
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    appearance: 'filled',
    title: 'Filled Variant',
    message: 'This alert uses the filled variant with solid background.'
  }
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    appearance: 'outlined',
    title: 'Outlined Variant',
    message: 'This alert uses the outlined variant with border only.'
  }
}`,...A.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    appearance: 'subtle',
    title: 'Subtle Variant',
    message: 'This alert uses the subtle variant with light background.'
  }
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Dismissible Alert',
    message: 'You can close this alert by clicking the X button.',
    closable: true
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Custom Close Button',
    message: 'This alert has a custom close button text.',
    closable: true,
    closeText: 'Dismiss'
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Action Required',
    message: 'There was an error processing your request.',
    actions: <div className="alert-story-actions">\r
        <Button size="small" variant="outlined">\r
          Retry\r
        </Button>\r
        <Button size="small" variant="ghost">\r
          Cancel\r
        </Button>\r
      </div>
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'System Maintenance',
    message: 'The system will be under maintenance from 2:00 AM to 4:00 AM EST.',
    banner: true,
    closable: true
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Bordered Alert',
    message: 'This alert has a colored left border for emphasis.',
    showBorder: true,
    appearance: 'subtle'
  }
}`,...N.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'No Icon',
    message: 'This alert has the icon hidden.',
    showIcon: false
  }
}`,...B.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Custom Icon',
    message: 'This alert uses a custom icon.',
    icon: '🎉'
  }
}`,...z.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Custom Padding',
    message: 'This alert has custom padding that overrides the default size-based padding.',
    padding: '24px 32px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Alert with custom padding. You can use any valid CSS padding value like "16px", "1rem", or "8px 16px 12px 20px".'
      }
    }
  }
}`,...I.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [key, setKey] = useState(0);
    return <div className="alert-story-container">\r
        <Alert {...args} key={key} variant="success" title="Auto-closing Alert" message="This alert will automatically close in 3 seconds." autoClose={3000} onClose={() => {
        console.log('Alert closed automatically');
      }} />\r
        <Button onClick={() => setKey(prev => prev + 1)} size="small" variant="outlined">\r
          Show Again\r
        </Button>\r
      </div>;
  }
}`,...q.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [showAlert, setShowAlert] = useState(true);
    return <div className="alert-story-container">\r
        {showAlert && <Alert {...args} variant="info" title="Controlled Alert" message="This alert visibility is controlled by external state." closable onClose={() => setShowAlert(false)} />}\r
        \r
        <div className="alert-story-controls">\r
          <Button onClick={() => setShowAlert(true)} disabled={showAlert} size="small">\r
            Show Alert\r
          </Button>\r
          <Button onClick={() => setShowAlert(false)} disabled={!showAlert} size="small" variant="outlined">\r
            Hide Alert\r
          </Button>\r
        </div>\r
      </div>;
  }
}`,...R.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="alert-story-multiple">\r
        <Alert variant="success" title="Success" message="Operation completed successfully." closable />\r
        <Alert variant="warning" title="Warning" message="Please check your input data." closable />\r
        <Alert variant="error" title="Error" message="An error occurred while processing." closable />\r
        <Alert variant="info" title="Information" message="Additional information is available." closable />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple alerts of different types displayed together.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Alert {...args} variant="warning" title="Complex Alert Content" closable>\r
        <div>\r
          <p>This alert contains complex content including:</p>\r
          <ul>\r
            <li>Nested HTML elements</li>\r
            <li>Multiple paragraphs</li>\r
            <li>Lists and other formatting</li>\r
          </ul>\r
          <p>You can use the children prop to include any JSX content.</p>\r
        </div>\r
      </Alert>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Alert with complex content using the children prop.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    size: 'medium',
    appearance: 'filled',
    title: 'Alert Title',
    message: 'This is the alert message content.',
    showIcon: true,
    closable: false,
    banner: false,
    showBorder: false,
    padding: undefined,
    autoClose: 0
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for testing all Alert properties and configurations.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}};const ce=["Default","WithTitle","Success","Warning","Error","Info","Small","Medium","Large","Filled","Outlined","Subtle","Closable","CustomCloseText","WithActions","Banner","WithBorder","NoIcon","CustomIcon","CustomPadding","AutoClose","ControlledVisibility","MultipleAlerts","ComplexContent","Playground"];export{q as AutoClose,k as Banner,C as Closable,M as ComplexContent,R as ControlledVisibility,T as CustomCloseText,z as CustomIcon,I as CustomPadding,m as Default,f as Error,S as Filled,v as Info,w as Large,y as Medium,V as MultipleAlerts,B as NoIcon,A as Outlined,_ as Playground,b as Small,x as Subtle,g as Success,h as Warning,j as WithActions,N as WithBorder,p as WithTitle,ce as __namedExportsOrder,le as default};
