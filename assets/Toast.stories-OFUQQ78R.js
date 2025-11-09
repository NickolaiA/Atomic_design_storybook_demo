import{r as n,j as e}from"./iframe-CdBaqdCg.js";import"./preload-helper-PPVm8Dsz.js";const C={success:"✓",error:"✕",warning:"⚠",info:"ℹ"},k=({message:T,variant:o="info",duration:c=5e3,dismissible:l=!0,visible:t=!0,onDismiss:d,className:s="",title:r,action:a})=>{const[i,u]=n.useState(t),[N,j]=n.useState(!1);n.useEffect(()=>{u(t)},[t]);const S=n.useCallback(()=>{j(!0),setTimeout(()=>{u(!1),d?.()},300)},[d]);if(n.useEffect(()=>{if(i&&c>0){const _=setTimeout(()=>{S()},c);return()=>clearTimeout(_)}},[i,c,S]),!i)return null;const A=["toast",`toast--${o}`,l&&"toast--dismissible",N&&"toast--exiting",s].filter(Boolean).join(" ");return e.jsxs("div",{className:A,role:"alert","aria-live":"assertive",children:[e.jsx("div",{className:"toast__icon",children:e.jsx("span",{className:"toast__symbol",children:C[o]})}),e.jsxs("div",{className:"toast__content",children:[r&&e.jsx("div",{className:"toast__title",children:r}),e.jsx("div",{className:"toast__message",children:T}),a&&e.jsx("div",{className:"toast__action-wrapper",children:e.jsx("button",{className:"toast__action",onClick:a.onClick,type:"button",children:a.label})})]}),l&&e.jsx("button",{className:"toast__dismiss",onClick:S,type:"button","aria-label":"Dismiss notification",children:e.jsx("span",{className:"toast__close-symbol",children:"×"})})]})};k.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{message:{required:!0,tsType:{name:"string"},description:"Toast message"},variant:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'warning' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:"Toast variant",defaultValue:{value:"'info'",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"Auto-dismiss duration in milliseconds (0 to disable)",defaultValue:{value:"5000",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the toast can be dismissed",defaultValue:{value:"true",computed:!1}},visible:{required:!1,tsType:{name:"boolean"},description:"Whether the toast is visible",defaultValue:{value:"true",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when toast is dismissed"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name",defaultValue:{value:"''",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Toast title"},action:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  label: string;\r
  onClick: () => void;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:"Action button"}}};const E={title:"Atoms/Toast",component:k,parameters:{layout:"centered",docs:{description:{component:"A temporary notification component that displays messages with optional actions and auto-dismissal."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","error","warning","info"],description:"Visual style variant"},title:{control:"text",description:"Main heading text"},message:{control:"text",description:"Descriptive message text"},duration:{control:"number",description:"Auto-dismiss duration in milliseconds (0 = no auto-dismiss)"},dismissible:{control:"boolean",description:"Show close button"},action:{control:"object",description:"Optional action button configuration"},onDismiss:{action:"dismissed",description:"Callback when toast is dismissed"}}},m={args:{variant:"success",title:"Success!",message:"Your changes have been saved successfully.",duration:0,dismissible:!0}},p={args:{variant:"error",title:"Error",message:"Something went wrong. Please try again.",duration:0,dismissible:!0}},g={args:{variant:"warning",title:"Warning",message:"Your session will expire in 5 minutes.",duration:0,dismissible:!0}},b={args:{variant:"info",title:"Update Available",message:"A new version is available. Would you like to update?",duration:0,dismissible:!0}},v={args:{variant:"info",title:"Update Available",message:"A new version is available. Would you like to update?",duration:0,dismissible:!0,action:{label:"Update Now",onClick:()=>alert("Updating...")}}},f={args:{variant:"warning",title:"Connection Issues",message:"We are experiencing connection issues that may affect your ability to save changes. Please check your internet connection and try again. If the problem persists, contact support.",duration:0,dismissible:!0}},h={args:{variant:"success",title:"Processing",message:"Your request is being processed...",duration:0,dismissible:!1}},y={args:{variant:"info",message:"This is a simple notification without a title.",duration:0,dismissible:!0}},w={args:{variant:"success",title:"Saved!",message:"This toast will disappear automatically in 3 seconds.",duration:3e3,dismissible:!0},parameters:{docs:{description:{story:"This toast demonstrates auto-dismissal after a specified duration."}}}},I=()=>{const[T,o]=n.useState([]),[c,l]=n.useState(1),t=(s,r,a)=>{const i=c;l(i+1),o(u=>[...u,{id:i,variant:s,title:r,message:a||`${s} toast #${i}`}])},d=s=>{o(r=>r.filter(a=>a.id!==s))};return e.jsxs("div",{className:"toast-demo-container",children:[e.jsxs("div",{className:"toast-demo-buttons",children:[e.jsx("button",{className:"toast-demo-button",onClick:()=>t("success","Success!","Operation completed successfully."),children:"Add Success Toast"}),e.jsx("button",{className:"toast-demo-button",onClick:()=>t("error","Error","Something went wrong."),children:"Add Error Toast"}),e.jsx("button",{className:"toast-demo-button",onClick:()=>t("warning","Warning","Please be careful."),children:"Add Warning Toast"}),e.jsx("button",{className:"toast-demo-button",onClick:()=>t("info","Info","Here is some information."),children:"Add Info Toast"})]}),e.jsx("div",{className:"toast-demo-toasts",children:T.map(s=>e.jsx(k,{variant:s.variant,title:s.title,message:s.message,duration:5e3,dismissible:!0,onDismiss:()=>d(s.id)},s.id))})]})},x={render:I,args:{message:"Interactive demo"},parameters:{docs:{description:{story:"Interactive example showing how to manage multiple toasts with state. Click buttons to add toasts that auto-dismiss after 5 seconds."}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
    duration: 0,
    dismissible: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    duration: 0,
    dismissible: true
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Your session will expire in 5 minutes.',
    duration: 0,
    dismissible: true
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Update Available',
    message: 'A new version is available. Would you like to update?',
    duration: 0,
    dismissible: true
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Update Available',
    message: 'A new version is available. Would you like to update?',
    duration: 0,
    dismissible: true,
    action: {
      label: 'Update Now',
      onClick: () => alert('Updating...')
    }
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Connection Issues',
    message: 'We are experiencing connection issues that may affect your ability to save changes. Please check your internet connection and try again. If the problem persists, contact support.',
    duration: 0,
    dismissible: true
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Processing',
    message: 'Your request is being processed...',
    duration: 0,
    dismissible: false
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    message: 'This is a simple notification without a title.',
    duration: 0,
    dismissible: true
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Saved!',
    message: 'This toast will disappear automatically in 3 seconds.',
    duration: 3000,
    dismissible: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This toast demonstrates auto-dismissal after a specified duration.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: ToastWithStateTemplate,
  args: {
    message: 'Interactive demo'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing how to manage multiple toasts with state. Click buttons to add toasts that auto-dismiss after 5 seconds.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const D=["Success","Error","Warning","Info","WithAction","LongMessage","NoDismissButton","MessageOnly","AutoDismiss","Interactive"];export{w as AutoDismiss,p as Error,b as Info,x as Interactive,f as LongMessage,y as MessageOnly,h as NoDismissButton,m as Success,g as Warning,v as WithAction,D as __namedExportsOrder,E as default};
