import{r,j as e}from"./iframe-CdBaqdCg.js";import{P as R}from"./Popup-Bc4PnGYO.js";import{B as n}from"./Button-B5OiHgR-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BH2Zh2Q5.js";import"./index-Z8ZsTslQ.js";const o=({type:t="info",title:l,description:a,okText:i="OK",cancelText:s="Cancel",okType:j="primary",showCancel:S=!0,icon:p,confirmLoading:u=!1,onConfirm:k,onCancel:_,children:N,className:A,...I})=>{const[E,c]=r.useState(!1),[d,D]=r.useState(!1),L=r.useCallback(async()=>{if(k){D(!0);try{await k(),c(!1)}catch(B){console.error("Confirmation failed:",B)}finally{D(!1)}}else c(!1)},[k]),O=r.useCallback(async()=>{if(_)try{await _(),c(!1)}catch(B){console.error("Cancellation failed:",B)}else c(!1)},[_]),q=()=>{switch(t){case"info":return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"popup-confirm__icon popup-confirm__icon--info",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 16v-4"}),e.jsx("path",{d:"M12 8h.01"})]});case"success":return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"popup-confirm__icon popup-confirm__icon--success",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22,4 12,14.01 9,11.01"})]});case"warning":return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"popup-confirm__icon popup-confirm__icon--warning",children:[e.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),e.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),e.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]});case"error":return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"popup-confirm__icon popup-confirm__icon--error",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),e.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]});default:return null}},W=e.jsx("div",{className:`popup-confirm popup-confirm--${t} ${A||""}`,children:e.jsxs("div",{className:"popup-confirm__content",children:[e.jsxs("div",{className:"popup-confirm__header",children:[(p||t)&&e.jsx("div",{className:"popup-confirm__icon-container",children:p||q()}),e.jsxs("div",{className:"popup-confirm__text",children:[l&&e.jsx("div",{className:"popup-confirm__title",children:l}),a&&e.jsx("div",{className:"popup-confirm__description",children:a})]})]}),e.jsxs("div",{className:"popup-confirm__actions",children:[S&&e.jsx("button",{type:"button",className:"popup-confirm__button popup-confirm__button--cancel",onClick:O,disabled:d||u,children:s}),e.jsxs("button",{type:"button",className:`popup-confirm__button popup-confirm__button--confirm popup-confirm__button--${j}`,onClick:L,disabled:d||u,"data-loading":d||u,children:[(d||u)&&e.jsx("span",{className:"popup-confirm__loading-spinner"}),i]})]})]})});return e.jsx(R,{...I,content:W,mode:"modal",trigger:"click",open:E,onOpenChange:c,showBackdrop:!0,backdropClosable:!1,children:N})};o.__docgenInfo={description:"",methods:[],displayName:"PopupConfirm",props:{type:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Type/severity of the confirmation dialog",defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"Title of the confirmation dialog"},description:{required:!1,tsType:{name:"ReactNode"},description:"Description/message content"},okText:{required:!1,tsType:{name:"string"},description:"Text for the confirm button",defaultValue:{value:"'OK'",computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:"Text for the cancel button",defaultValue:{value:"'Cancel'",computed:!1}},okType:{required:!1,tsType:{name:"union",raw:"'primary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"}]},description:"Type of the confirm button",defaultValue:{value:"'primary'",computed:!1}},showCancel:{required:!1,tsType:{name:"boolean"},description:"Whether to show the cancel button",defaultValue:{value:"true",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon to display in the dialog"},confirmLoading:{required:!1,tsType:{name:"boolean"},description:"Whether the confirm button is loading",defaultValue:{value:"false",computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void | Promise<void>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"Callback when confirm button is clicked"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void | Promise<void>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"Callback when cancel button is clicked"},children:{required:!0,tsType:{name:"ReactNode"},description:"Trigger element that opens the confirmation dialog"}},composes:["Omit"]};const z={title:"Atoms/PopupConfirm",component:o,parameters:{layout:"centered",docs:{description:{component:`
A confirmation dialog component that extends the Popup component with built-in confirmation functionality.

## Features
- Four confirmation types: info, success, warning, error
- Customizable confirm/cancel buttons
- Loading states
- Icon integration
- Accessibility support
- Responsive design
- Dark theme support

## Usage
\`\`\`tsx
import { PopupConfirm } from './PopupConfirm';

// Basic usage
<PopupConfirm
  type="warning"
  title="Delete Item"
  description="Are you sure you want to delete this item? This action cannot be undone."
  onConfirm={() => console.log('Confirmed')}
  onCancel={() => console.log('Cancelled')}
>
  <button>Delete</button>
</PopupConfirm>
\`\`\`
        `}}},argTypes:{type:{control:"select",options:["info","success","warning","error"],description:"Type of confirmation dialog"},title:{control:"text",description:"Title text for the confirmation dialog"},description:{control:"text",description:"Description text explaining the action"},okText:{control:"text",description:"Custom text for the confirm button"},cancelText:{control:"text",description:"Custom text for the cancel button"},confirmLoading:{control:"boolean",description:"Show loading state on confirm button"},showCancel:{control:"boolean",description:"Show or hide the cancel button"},disabled:{control:"boolean",description:"Disable the confirmation dialog"},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","right"],description:"Placement of the popup relative to trigger"}},args:{type:"info",title:"Confirmation",description:"Are you sure you want to proceed?",okText:"Confirm",cancelText:"Cancel",confirmLoading:!1,showCancel:!0,disabled:!1,placement:"bottom"}},m={render:t=>e.jsx(o,{...t,children:e.jsx(n,{variant:"primary",children:"Show Confirmation"})})},f={render:t=>e.jsx(o,{...t,type:"info",title:"Information",description:"This is an informational confirmation dialog.",children:e.jsx(n,{variant:"secondary",children:"Show Info"})})},h={render:t=>e.jsx(o,{...t,type:"success",title:"Success",description:"Operation completed successfully. Do you want to continue?",children:e.jsx(n,{variant:"primary",children:"Show Success"})})},g={render:t=>e.jsx(o,{...t,type:"warning",title:"Warning",description:"This action may have consequences. Are you sure you want to proceed?",children:e.jsx(n,{variant:"secondary",children:"Show Warning"})})},x={render:t=>e.jsx(o,{...t,type:"error",title:"Delete Item",description:"This will permanently delete the item. This action cannot be undone.",okText:"Delete",children:e.jsx(n,{variant:"primary",children:"Delete Item"})})},y={render:t=>e.jsx(o,{...t,type:"warning",title:"Save Changes",description:"You have unsaved changes. Do you want to save them before leaving?",okText:"Save & Exit",cancelText:"Discard Changes",children:e.jsx(n,{variant:"ghost",children:"Exit Editor"})})},v={render:t=>e.jsx(o,{...t,type:"info",title:"Notification",description:"This is a notification that requires acknowledgment.",okText:"Got it",showCancel:!1,children:e.jsx(n,{variant:"secondary",children:"Show Notification"})})},C={render:t=>e.jsx(o,{...t,type:"info",title:"Processing",description:"Click confirm to start processing...",confirmLoading:!0,children:e.jsx(n,{variant:"primary",children:"Start Process"})})},w={render:t=>{const[l,a]=r.useState(!1),[i,s]=r.useState(""),j=async()=>{a(!0),s(""),await new Promise(p=>setTimeout(p,2e3)),a(!1),s("Operation completed successfully!")},S=()=>{s("Operation cancelled")};return e.jsxs("div",{className:"interactive-example",children:[e.jsx(o,{...t,type:"warning",title:"Execute Operation",description:"This will start a long-running operation. Are you sure you want to continue?",okText:"Execute",confirmLoading:l,onConfirm:j,onCancel:S,children:e.jsx(n,{variant:"primary",children:"Execute Operation"})}),i&&e.jsx("div",{className:`result ${i.includes("cancelled")?"cancelled":"success"}`,children:i}),e.jsx("style",{children:`
          .interactive-example {
            text-align: center;
          }
          .result {
            margin-top: 20px;
            padding: 10px;
            border-radius: 4px;
          }
          .result.success {
            background-color: #f6ffed;
            color: #389e0d;
          }
          .result.cancelled {
            background-color: #fff2f0;
            color: #cf1322;
          }
        `})]})},parameters:{docs:{description:{story:"Interactive example showing loading states and result handling."}}}},b={render:t=>e.jsx(o,{...t,type:"error",title:"Delete Account",description:"This will permanently delete your account and all associated data. This action cannot be undone.",okText:"Delete Account",cancelText:"Keep Account",children:e.jsx(n,{variant:"primary",children:"Delete Account"})})},T={render:t=>e.jsx(o,{...t,type:"warning",title:"Unsaved Changes",description:"You have unsaved changes that will be lost. Do you want to save before leaving?",okText:"Save & Leave",cancelText:"Stay Here",children:e.jsx(n,{variant:"ghost",children:"Leave Page"})})},P={render:t=>e.jsx(o,{...t,type:"success",title:"Publish Article",description:"Your article is ready to be published. Once published, it will be visible to all users.",okText:"Publish Now",cancelText:"Save as Draft",children:e.jsx(n,{variant:"primary",children:"Publish Article"})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <PopupConfirm {...args}>\r
      <Button variant="primary">Show Confirmation</Button>\r
    </PopupConfirm>
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <PopupConfirm {...args} type="info" title="Information" description="This is an informational confirmation dialog.">\r
      <Button variant="secondary">Show Info</Button>\r
    </PopupConfirm>
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <PopupConfirm {...args} type="success" title="Success" description="Operation completed successfully. Do you want to continue?">\r
      <Button variant="primary">Show Success</Button>\r
    </PopupConfirm>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <PopupConfirm {...args} type="warning" title="Warning" description="This action may have consequences. Are you sure you want to proceed?">\r
      <Button variant="secondary">Show Warning</Button>\r
    </PopupConfirm>
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <PopupConfirm {...args} type="error" title="Delete Item" description="This will permanently delete the item. This action cannot be undone." okText="Delete">\r
      <Button variant="primary">Delete Item</Button>\r
    </PopupConfirm>
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <PopupConfirm {...args} type="warning" title="Save Changes" description="You have unsaved changes. Do you want to save them before leaving?" okText="Save & Exit" cancelText="Discard Changes">\r
      <Button variant="ghost">Exit Editor</Button>\r
    </PopupConfirm>
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <PopupConfirm {...args} type="info" title="Notification" description="This is a notification that requires acknowledgment." okText="Got it" showCancel={false}>\r
      <Button variant="secondary">Show Notification</Button>\r
    </PopupConfirm>
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <PopupConfirm {...args} type="info" title="Processing" description="Click confirm to start processing..." confirmLoading={true}>\r
      <Button variant="primary">Start Process</Button>\r
    </PopupConfirm>
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string>('');
    const handleConfirm = async () => {
      setLoading(true);
      setResult('');

      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
      setResult('Operation completed successfully!');
    };
    const handleCancel = () => {
      setResult('Operation cancelled');
    };
    return <div className="interactive-example">\r
        <PopupConfirm {...args} type="warning" title="Execute Operation" description="This will start a long-running operation. Are you sure you want to continue?" okText="Execute" confirmLoading={loading} onConfirm={handleConfirm} onCancel={handleCancel}>\r
          <Button variant="primary">Execute Operation</Button>\r
        </PopupConfirm>\r
        {result && <div className={\`result \${result.includes('cancelled') ? 'cancelled' : 'success'}\`}>\r
            {result}\r
          </div>}\r
        <style>{\`
          .interactive-example {
            text-align: center;
          }
          .result {
            margin-top: 20px;
            padding: 10px;
            border-radius: 4px;
          }
          .result.success {
            background-color: #f6ffed;
            color: #389e0d;
          }
          .result.cancelled {
            background-color: #fff2f0;
            color: #cf1322;
          }
        \`}</style>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing loading states and result handling.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <PopupConfirm {...args} type="error" title="Delete Account" description="This will permanently delete your account and all associated data. This action cannot be undone." okText="Delete Account" cancelText="Keep Account">\r
      <Button variant="primary">Delete Account</Button>\r
    </PopupConfirm>
}`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <PopupConfirm {...args} type="warning" title="Unsaved Changes" description="You have unsaved changes that will be lost. Do you want to save before leaving?" okText="Save & Leave" cancelText="Stay Here">\r
      <Button variant="ghost">Leave Page</Button>\r
    </PopupConfirm>
}`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <PopupConfirm {...args} type="success" title="Publish Article" description="Your article is ready to be published. Once published, it will be visible to all users." okText="Publish Now" cancelText="Save as Draft">\r
      <Button variant="primary">Publish Article</Button>\r
    </PopupConfirm>
}`,...P.parameters?.docs?.source}}};const F=["Default","Info","Success","Warning","Error","CustomButtons","WithoutCancel","ConfirmLoading","InteractiveExample","DeleteConfirmation","SaveChanges","PublishContent"];export{C as ConfirmLoading,y as CustomButtons,m as Default,b as DeleteConfirmation,x as Error,f as Info,w as InteractiveExample,P as PublishContent,T as SaveChanges,h as Success,g as Warning,v as WithoutCancel,F as __namedExportsOrder,z as default};
