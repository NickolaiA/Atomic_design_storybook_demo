import{j as e}from"./jsx-runtime-CDt2p4po.js";import{f as M}from"./index-BxLnRenJ.js";import{r as l,R as lr}from"./index-GiUgBvb1.js";import{L as a}from"./Label-ozbwUjrV.js";const r=l.forwardRef(({size:d="base",value:n,defaultValue:q,disabled:x=!1,required:Me=!1,placeholder:Ie="",maxLength:o,showCharacterCount:V=!1,autoResize:i=!1,minRows:D=3,maxRows:I=10,error:B=!1,errorMessage:c,helperText:u,resizable:H="vertical",onChange:$,onFocus:Be,onBlur:He,className:$e="",id:p,name:ke,"aria-label":Pe,"aria-describedby":We,"aria-labelledby":Oe,"aria-invalid":Ue,rows:Ye=D,..._e},h)=>{const[k,Ke]=l.useState(n||q||""),P=l.useRef(null),Ge=l.useCallback(t=>{P.current=t,typeof h=="function"?h(t):h&&(h.current=t)},[h]),v=n!==void 0,W=v?n:k,E=W.length,y=l.useCallback(()=>{const t=P.current;if(!t||!i)return;t.style.height="auto";const m=parseInt(getComputedStyle(t).lineHeight,10),_=parseInt(getComputedStyle(t).paddingTop,10)+parseInt(getComputedStyle(t).paddingBottom,10),sr=t.scrollHeight-_,or=Math.ceil(sr/m),ir=Math.max(D,Math.min(I,or));t.style.height=`${ir*m+_}px`},[i,D,I]);l.useEffect(()=>{i&&y()},[W,y,i]),l.useEffect(()=>{i&&y()},[y,i]);const Je=t=>{const m=t.target.value;o&&m.length>o||(v||Ke(m),$&&$(t))},s="textarea",Qe=`${s}--${d}`,Xe=x?`${s}--disabled`:"",Ze=B?`${s}--error`:"",er=i?`${s}--auto-resize`:"",rr=H!=="vertical"?`${s}--resize-${H}`:"",ar=[s,Qe,Xe,Ze,er,rr,$e].filter(Boolean).join(" "),O=u?`${p}-helper`:void 0,U=c?`${p}-error`:void 0,Y=V?`${p}-counter`:void 0,tr=[We,O,U,Y].filter(Boolean).join(" ");return e.jsxs("div",{className:`${s}-container`,children:[e.jsx("textarea",{ref:Ge,className:ar,id:p,name:ke,value:v?n:void 0,defaultValue:v?void 0:k,placeholder:Ie,disabled:x,required:Me,maxLength:o,rows:i?void 0:Ye,onChange:Je,onFocus:Be,onBlur:He,"aria-label":Pe,"aria-describedby":tr||void 0,"aria-labelledby":Oe,"aria-invalid":Ue||B?!0:void 0,..._e}),(u||c||V)&&e.jsxs("div",{className:`${s}-footer`,children:[e.jsxs("div",{className:`${s}-messages`,children:[c&&e.jsx("div",{id:U,className:`${s}-error-message`,role:"alert","aria-live":"polite",children:c}),u&&!c&&e.jsx("div",{id:O,className:`${s}-helper-text`,children:u})]}),V&&e.jsxs("div",{id:Y,className:`${s}-character-count ${o&&E>o*.9?`${s}-character-count--warning`:""}`,"aria-label":`${E}${o?` of ${o}`:""} characters`,children:[E,o&&`/${o}`]})]})]})});r.displayName="Textarea";r.__docgenInfo={description:`Textarea component for multi-line text input.\r
\r
Features:\r
- Three size variants (sm, base, lg)\r
- Auto-resize functionality\r
- Character counting with limits\r
- Validation states with error messages\r
- Helper text support\r
- Configurable resize behavior (none, both, horizontal, vertical)\r
- Comprehensive accessibility features\r
- Theme integration\r
- Form validation support\r
\r
Usage:\r
\`\`\`tsx\r
<Textarea \r
  placeholder="Enter your message..." \r
  autoResize \r
  showCharacterCount \r
  maxLength={500}\r
  resizable="both"\r
/>\r
\`\`\``,methods:[],displayName:"Textarea",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'base' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'base'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Current value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea is disabled",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea is required",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"''",computed:!1}},maxLength:{required:!1,tsType:{name:"number"},description:"Maximum character count"},showCharacterCount:{required:!1,tsType:{name:"boolean"},description:"Show character counter",defaultValue:{value:"false",computed:!1}},autoResize:{required:!1,tsType:{name:"boolean"},description:"Auto-resize to content",defaultValue:{value:"false",computed:!1}},minRows:{required:!1,tsType:{name:"number"},description:"Minimum number of rows",defaultValue:{value:"3",computed:!1}},maxRows:{required:!1,tsType:{name:"number"},description:"Maximum number of rows (for auto-resize)",defaultValue:{value:"10",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Validation error state",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text to display"},resizable:{required:!1,tsType:{name:"union",raw:"'none' | 'both' | 'horizontal' | 'vertical'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'both'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Resize behavior",defaultValue:{value:"'vertical'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"Blur handler"},className:{required:!1,tsType:{name:"string"},description:"CSS class name",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Unique identifier"},name:{required:!1,tsType:{name:"string"},description:"Name attribute for form submission"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by for additional context"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by for association with other elements"},"aria-invalid":{required:!1,tsType:{name:"boolean"},description:"ARIA invalid for error states"},rows:{defaultValue:{value:"minRows = 3",computed:!1},required:!1}},composes:["Omit"]};const xr={title:"Atoms/Textarea",component:r,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","base","lg"],description:"Size variant"},value:{control:"text",description:"Current value"},defaultValue:{control:"text",description:"Default value"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field validation"},placeholder:{control:"text",description:"Placeholder text"},maxLength:{control:"number",description:"Maximum character count"},showCharacterCount:{control:"boolean",description:"Show character counter"},autoResize:{control:"boolean",description:"Auto-resize to content"},minRows:{control:"number",description:"Minimum number of rows"},maxRows:{control:"number",description:"Maximum number of rows"},error:{control:"boolean",description:"Error state"},errorMessage:{control:"text",description:"Error message to display"},helperText:{control:"text",description:"Helper text to display"},resizable:{control:"select",options:["none","both","horizontal","vertical"],description:"Resize behavior"},rows:{control:"number",description:"Number of rows (non-auto-resize)"},onChange:{action:"changed"},onFocus:{action:"focused"},onBlur:{action:"blurred"}},args:{onChange:M(),onFocus:M(),onBlur:M()}},f={args:{placeholder:"Enter your message..."},parameters:{docs:{description:{story:"Default textarea with basic functionality."}}}},b={render:()=>e.jsxs("div",{className:"textarea-story-section",children:[e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Small Textarea"}),e.jsx(r,{size:"sm",placeholder:"Small textarea...",rows:3})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Base Textarea (Default)"}),e.jsx(r,{size:"base",placeholder:"Base textarea...",rows:3})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Large Textarea"}),e.jsx(r,{size:"lg",placeholder:"Large textarea...",rows:3})]})})]}),parameters:{docs:{description:{story:"Different size variants for various UI contexts."}}}},w={render:()=>e.jsxs("div",{className:"textarea-story-form",children:[e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"message-textarea",children:"Message"}),e.jsx(r,{id:"message-textarea",placeholder:"Type your message here...",rows:4})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"description-textarea",children:"Description"}),e.jsx(r,{id:"description-textarea",placeholder:"Provide a detailed description...",defaultValue:"This is a pre-filled description that shows how the textarea handles existing content.",rows:3})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"feedback-textarea",required:!0,children:"Feedback"}),e.jsx(r,{id:"feedback-textarea",placeholder:"Share your feedback...",required:!0,rows:5})]})]}),parameters:{docs:{description:{story:"Textarea components properly associated with labels using htmlFor."}}}},g={render:()=>e.jsx("div",{className:"textarea-story-section",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"auto-resize-textarea",children:"Auto-resize Textarea"}),e.jsx(r,{id:"auto-resize-textarea",placeholder:"Start typing and watch me grow! This textarea automatically adjusts its height based on content...",autoResize:!0,minRows:3,maxRows:8}),e.jsx("div",{className:"textarea-story-help-text",children:"This textarea will automatically resize between 3 and 8 rows as you type."})]})}),parameters:{docs:{description:{story:"Textarea with auto-resize functionality that grows with content."}}}},j={render:()=>e.jsx("div",{className:"textarea-story-section",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"counted-textarea",children:"Message with Character Count"}),e.jsx(r,{id:"counted-textarea",placeholder:"Type your message (max 200 characters)...",showCharacterCount:!0,maxLength:200,rows:4})]})}),parameters:{docs:{description:{story:"Textarea with character counting and limit enforcement."}}}},T={render:()=>e.jsxs("div",{className:"textarea-story-section",children:[e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"resize-vertical",children:"Vertical Only (Default)"}),e.jsx(r,{id:"resize-vertical",placeholder:"You can only resize me vertically...",resizable:"vertical",rows:3}),e.jsx("div",{className:"textarea-story-help-text",children:"Drag the bottom-right corner - only height changes."})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"resize-both",children:"Both Directions"}),e.jsx(r,{id:"resize-both",placeholder:"You can resize me in both directions...",resizable:"both",rows:3}),e.jsx("div",{className:"textarea-story-help-text",children:"Drag the bottom-right corner - both width and height change."})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"resize-horizontal",children:"Horizontal Only"}),e.jsx(r,{id:"resize-horizontal",placeholder:"You can only resize me horizontally...",resizable:"horizontal",rows:3}),e.jsx("div",{className:"textarea-story-help-text",children:"Drag the bottom-right corner - only width changes."})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"resize-none",children:"No Resize"}),e.jsx(r,{id:"resize-none",placeholder:"You cannot resize me at all...",resizable:"none",rows:3}),e.jsx("div",{className:"textarea-story-help-text",children:"No resize handle appears - fixed size only."})]})})]}),parameters:{docs:{description:{story:"Different resize behaviors: vertical (default), both, horizontal, and none."}}}},dr=()=>{const[d,n]=lr.useState("This is a controlled textarea with a character counter."),q=x=>{n(x.target.value)};return e.jsx("div",{className:"textarea-story-section",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"controlled-textarea",children:"Controlled Textarea"}),e.jsx(r,{id:"controlled-textarea",value:d,onChange:q,placeholder:"This textarea is controlled by React state...",showCharacterCount:!0,maxLength:500,autoResize:!0,minRows:3,maxRows:6}),e.jsxs("div",{className:"textarea-story-value-display",children:[e.jsx("strong",{children:"Current Value:"}),' "',d,'"']})]})})},N={render:()=>e.jsx(dr,{}),parameters:{docs:{description:{story:"Controlled textarea with external state management, auto-resize, and character counting."}}}},C={render:()=>e.jsxs("div",{className:"textarea-story-section",children:[e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"valid-textarea",children:"Valid Input"}),e.jsx(r,{id:"valid-textarea",placeholder:"This looks good...",defaultValue:"This is a valid input with helper text.",helperText:"This message follows the required format.",rows:3})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"error-textarea",children:"Invalid Input"}),e.jsx(r,{id:"error-textarea",placeholder:"This has an error...",defaultValue:"This input contains an error.",error:!0,errorMessage:"This field contains invalid information. Please review and correct.",rows:3})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"warning-textarea",children:"Character Limit Warning"}),e.jsx(r,{id:"warning-textarea",placeholder:"Type to see character limit warning...",defaultValue:"This textarea is getting close to its character limit and will show a warning.",showCharacterCount:!0,maxLength:100,helperText:"Character count will turn orange when you're near the limit.",rows:3})]})})]}),parameters:{docs:{description:{story:"Different validation states including success, error, and warning states."}}}},z={render:()=>e.jsxs("div",{className:"textarea-story-section",children:[e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Disabled Empty"}),e.jsx(r,{placeholder:"This textarea is disabled...",disabled:!0,rows:3})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Disabled with Content"}),e.jsx(r,{defaultValue:"This textarea has content but is disabled, so you cannot edit it.",disabled:!0,rows:3})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Disabled with Character Count"}),e.jsx(r,{defaultValue:"This disabled textarea still shows character count.",disabled:!0,showCharacterCount:!0,maxLength:100,rows:3})]})})]}),parameters:{docs:{description:{story:"Textarea components in disabled states with various content scenarios."}}}},L={render:()=>e.jsx("form",{className:"textarea-story-form-demo",children:e.jsxs("fieldset",{className:"textarea-story-fieldset",children:[e.jsx("legend",{children:"Contact Form"}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"subject-textarea",required:!0,children:"Subject"}),e.jsx(r,{id:"subject-textarea",name:"subject",placeholder:"Brief subject line...",required:!0,maxLength:100,showCharacterCount:!0,rows:2,helperText:"Keep it concise and descriptive."})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"message-textarea",required:!0,children:"Message"}),e.jsx(r,{id:"message-textarea",name:"message",placeholder:"Type your detailed message here...",required:!0,autoResize:!0,minRows:4,maxRows:10,maxLength:1e3,showCharacterCount:!0,helperText:"Please provide as much detail as possible."})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"notes-textarea",children:"Additional Notes"}),e.jsx(r,{id:"notes-textarea",name:"notes",placeholder:"Any additional information (optional)...",rows:3,maxLength:500,showCharacterCount:!0,helperText:"Optional field for extra context."})]})]})}),parameters:{docs:{description:{story:"Textarea components in a complete form context with proper form submission attributes."}}}},R={render:()=>e.jsxs("div",{className:"textarea-story-accessibility",children:[e.jsxs("div",{className:"textarea-story-section",children:[e.jsx("h4",{children:"ARIA Labels and Descriptions"}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{id:"aria-textarea",placeholder:"Textarea with comprehensive ARIA support...","aria-label":"Message input with accessibility features","aria-describedby":"message-help error-message",showCharacterCount:!0,maxLength:300,rows:4}),e.jsx("div",{id:"message-help",className:"textarea-story-help-text",children:"This textarea includes comprehensive ARIA labeling for screen readers and shows character count."})]})]}),e.jsxs("div",{className:"textarea-story-section",children:[e.jsx("h4",{children:"Error State Announcements"}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"error-demo-textarea",children:"Message with Error"}),e.jsx(r,{id:"error-demo-textarea",placeholder:"This will show an error state...",error:!0,errorMessage:"This field is required and cannot be empty.",required:!0,"aria-describedby":"error-demo-help",rows:3}),e.jsx("div",{id:"error-demo-help",className:"textarea-story-help-text",children:'Error messages are announced to screen readers via role="alert" and aria-live="polite".'})]})]}),e.jsxs("div",{className:"textarea-story-section",children:[e.jsx("h4",{children:"Character Count Accessibility"}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"count-demo-textarea",children:"Message with Count"}),e.jsx(r,{id:"count-demo-textarea",placeholder:"Type to see accessible character counting...",showCharacterCount:!0,maxLength:150,autoResize:!0,minRows:3,maxRows:5,helperText:"Character count includes proper aria-label for screen readers."})]})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA labels, error announcements, and screen reader support."}}}},A={render:()=>e.jsxs("div",{className:"textarea-story-theme-demo",children:[e.jsxs("div",{className:"textarea-story-theme-section",children:[e.jsx("h3",{children:"Theme Adaptive Textarea Components"}),e.jsxs("div",{className:"textarea-story-theme-row",children:[e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Small Size"}),e.jsx(r,{size:"sm",defaultValue:"Small textarea with theme colors",rows:2})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Base Size"}),e.jsx(r,{defaultValue:"Base textarea adapts to current theme",rows:3})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Large Size"}),e.jsx(r,{size:"lg",defaultValue:"Large textarea with theme integration",rows:3})]})]}),e.jsxs("div",{className:"textarea-story-theme-row",children:[e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Auto-resize with Count"}),e.jsx(r,{placeholder:"Auto-resizing textarea...",autoResize:!0,showCharacterCount:!0,maxLength:200,minRows:2,maxRows:5})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Error State"}),e.jsx(r,{defaultValue:"This has an error state",error:!0,errorMessage:"Error styling adapts to theme",rows:2})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Disabled State"}),e.jsx(r,{defaultValue:"Disabled textarea",disabled:!0,showCharacterCount:!0,maxLength:100,rows:2})]})]})]}),e.jsxs("div",{className:"textarea-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("div",{className:"textarea-story-theme-vars",children:[e.jsx("code",{children:"--color-accent"}),": Focus border and character count warning",e.jsx("br",{}),e.jsx("code",{children:"--color-border"}),": Default border color",e.jsx("br",{}),e.jsx("code",{children:"--color-bg"}),": Background color",e.jsx("br",{}),e.jsx("code",{children:"--color-panel"}),": Disabled background",e.jsx("br",{}),e.jsx("code",{children:"--color-text-primary"}),": Main text color",e.jsx("br",{}),e.jsx("code",{children:"--color-text-secondary"}),": Helper text and character count",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Placeholder and disabled text",e.jsx("br",{}),e.jsx("code",{children:"--color-error"}),": Error border and message color"]})]})]}),parameters:{docs:{description:{story:"Textarea components that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},F={render:()=>e.jsx("div",{className:"textarea-story-comprehensive",children:e.jsxs("div",{className:"textarea-story-grid",children:[e.jsxs("div",{className:"textarea-story-grid-section",children:[e.jsx("h4",{children:"Basic Features"}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Simple Textarea"}),e.jsx(r,{placeholder:"Basic textarea...",rows:3})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"With Helper Text"}),e.jsx(r,{placeholder:"Textarea with help...",helperText:"This is helpful information.",rows:3})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Required Field"}),e.jsx(r,{placeholder:"Required...",required:!0,rows:3})]})]}),e.jsxs("div",{className:"textarea-story-grid-section",children:[e.jsx("h4",{children:"Advanced Features"}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Auto-resize"}),e.jsx(r,{placeholder:"Auto-growing...",autoResize:!0,minRows:2,maxRows:4})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Character Count"}),e.jsx(r,{placeholder:"With counter...",showCharacterCount:!0,maxLength:100,rows:3})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Auto + Count"}),e.jsx(r,{placeholder:"Both features...",autoResize:!0,showCharacterCount:!0,maxLength:150,minRows:2,maxRows:4})]})]}),e.jsxs("div",{className:"textarea-story-grid-section",children:[e.jsx("h4",{children:"States"}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Error State"}),e.jsx(r,{placeholder:"Has error...",error:!0,errorMessage:"Something is wrong",rows:2})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"Disabled"}),e.jsx(r,{defaultValue:"Cannot edit this",disabled:!0,rows:2})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{children:"All Features"}),e.jsx(r,{placeholder:"Everything combined...",autoResize:!0,showCharacterCount:!0,maxLength:200,minRows:2,maxRows:5,helperText:"This has all features"})]})]})]})}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of all textarea features and variations."}}}},S={args:{size:"base",placeholder:"Interactive textarea...",disabled:!1,required:!1,autoResize:!1,showCharacterCount:!1,maxLength:void 0,minRows:3,maxRows:10,rows:4,error:!1,errorMessage:"",helperText:"",resizable:"vertical"},render:d=>e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(a,{htmlFor:"interactive-textarea",children:"Interactive Textarea"}),e.jsx(r,{...d,id:"interactive-textarea"})]}),parameters:{docs:{description:{story:"Interactive story where you can modify all textarea properties using the controls panel."}}}};var K,G,J;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your message...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default textarea with basic functionality.'
      }
    }
  }
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="textarea-story-section">\r
      <div className="textarea-story-row">\r
        <div className="textarea-story-field">\r
          <Label>Small Textarea</Label>\r
          <Textarea size="sm" placeholder="Small textarea..." rows={3} />\r
        </div>\r
      </div>\r
      <div className="textarea-story-row">\r
        <div className="textarea-story-field">\r
          <Label>Base Textarea (Default)</Label>\r
          <Textarea size="base" placeholder="Base textarea..." rows={3} />\r
        </div>\r
      </div>\r
      <div className="textarea-story-row">\r
        <div className="textarea-story-field">\r
          <Label>Large Textarea</Label>\r
          <Textarea size="lg" placeholder="Large textarea..." rows={3} />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different size variants for various UI contexts.'
      }
    }
  }
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,ae;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="textarea-story-form">\r
      <div className="textarea-story-field">\r
        <Label htmlFor="message-textarea">Message</Label>\r
        <Textarea id="message-textarea" placeholder="Type your message here..." rows={4} />\r
      </div>\r
      \r
      <div className="textarea-story-field">\r
        <Label htmlFor="description-textarea">Description</Label>\r
        <Textarea id="description-textarea" placeholder="Provide a detailed description..." defaultValue="This is a pre-filled description that shows how the textarea handles existing content." rows={3} />\r
      </div>\r
      \r
      <div className="textarea-story-field">\r
        <Label htmlFor="feedback-textarea" required>Feedback</Label>\r
        <Textarea id="feedback-textarea" placeholder="Share your feedback..." required rows={5} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Textarea components properly associated with labels using htmlFor.'
      }
    }
  }
}`,...(ae=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,se,oe;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div className="textarea-story-section">\r
      <div className="textarea-story-field">\r
        <Label htmlFor="auto-resize-textarea">Auto-resize Textarea</Label>\r
        <Textarea id="auto-resize-textarea" placeholder="Start typing and watch me grow! This textarea automatically adjusts its height based on content..." autoResize minRows={3} maxRows={8} />\r
        <div className="textarea-story-help-text">\r
          This textarea will automatically resize between 3 and 8 rows as you type.\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Textarea with auto-resize functionality that grows with content.'
      }
    }
  }
}`,...(oe=(se=g.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,le,de;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="textarea-story-section">\r
      <div className="textarea-story-field">\r
        <Label htmlFor="counted-textarea">Message with Character Count</Label>\r
        <Textarea id="counted-textarea" placeholder="Type your message (max 200 characters)..." showCharacterCount maxLength={200} rows={4} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Textarea with character counting and limit enforcement.'
      }
    }
  }
}`,...(de=(le=j.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ne,ce,he;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div className="textarea-story-section">\r
      <div className="textarea-story-row">\r
        <div className="textarea-story-field">\r
          <Label htmlFor="resize-vertical">Vertical Only (Default)</Label>\r
          <Textarea id="resize-vertical" placeholder="You can only resize me vertically..." resizable="vertical" rows={3} />\r
          <div className="textarea-story-help-text">\r
            Drag the bottom-right corner - only height changes.\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="textarea-story-row">\r
        <div className="textarea-story-field">\r
          <Label htmlFor="resize-both">Both Directions</Label>\r
          <Textarea id="resize-both" placeholder="You can resize me in both directions..." resizable="both" rows={3} />\r
          <div className="textarea-story-help-text">\r
            Drag the bottom-right corner - both width and height change.\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="textarea-story-row">\r
        <div className="textarea-story-field">\r
          <Label htmlFor="resize-horizontal">Horizontal Only</Label>\r
          <Textarea id="resize-horizontal" placeholder="You can only resize me horizontally..." resizable="horizontal" rows={3} />\r
          <div className="textarea-story-help-text">\r
            Drag the bottom-right corner - only width changes.\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="textarea-story-row">\r
        <div className="textarea-story-field">\r
          <Label htmlFor="resize-none">No Resize</Label>\r
          <Textarea id="resize-none" placeholder="You cannot resize me at all..." resizable="none" rows={3} />\r
          <div className="textarea-story-help-text">\r
            No resize handle appears - fixed size only.\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different resize behaviors: vertical (default), both, horizontal, and none.'
      }
    }
  }
}`,...(he=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:he.source}}};var me,xe,ue;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <ControlledTextareaDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Controlled textarea with external state management, auto-resize, and character counting.'
      }
    }
  }
}`,...(ue=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:ue.source}}};var pe,ve,ye;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className="textarea-story-section">\r
      <div className="textarea-story-row">\r
        <div className="textarea-story-field">\r
          <Label htmlFor="valid-textarea">Valid Input</Label>\r
          <Textarea id="valid-textarea" placeholder="This looks good..." defaultValue="This is a valid input with helper text." helperText="This message follows the required format." rows={3} />\r
        </div>\r
      </div>\r
      \r
      <div className="textarea-story-row">\r
        <div className="textarea-story-field">\r
          <Label htmlFor="error-textarea">Invalid Input</Label>\r
          <Textarea id="error-textarea" placeholder="This has an error..." defaultValue="This input contains an error." error errorMessage="This field contains invalid information. Please review and correct." rows={3} />\r
        </div>\r
      </div>\r
      \r
      <div className="textarea-story-row">\r
        <div className="textarea-story-field">\r
          <Label htmlFor="warning-textarea">Character Limit Warning</Label>\r
          <Textarea id="warning-textarea" placeholder="Type to see character limit warning..." defaultValue="This textarea is getting close to its character limit and will show a warning." showCharacterCount maxLength={100} helperText="Character count will turn orange when you're near the limit." rows={3} />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different validation states including success, error, and warning states.'
      }
    }
  }
}`,...(ye=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var fe,be,we;z.parameters={...z.parameters,docs:{...(fe=z.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div className="textarea-story-section">\r
      <div className="textarea-story-row">\r
        <div className="textarea-story-field">\r
          <Label>Disabled Empty</Label>\r
          <Textarea placeholder="This textarea is disabled..." disabled rows={3} />\r
        </div>\r
      </div>\r
      \r
      <div className="textarea-story-row">\r
        <div className="textarea-story-field">\r
          <Label>Disabled with Content</Label>\r
          <Textarea defaultValue="This textarea has content but is disabled, so you cannot edit it." disabled rows={3} />\r
        </div>\r
      </div>\r
      \r
      <div className="textarea-story-row">\r
        <div className="textarea-story-field">\r
          <Label>Disabled with Character Count</Label>\r
          <Textarea defaultValue="This disabled textarea still shows character count." disabled showCharacterCount maxLength={100} rows={3} />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Textarea components in disabled states with various content scenarios.'
      }
    }
  }
}`,...(we=(be=z.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var ge,je,Te;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <form className="textarea-story-form-demo">\r
      <fieldset className="textarea-story-fieldset">\r
        <legend>Contact Form</legend>\r
        \r
        <div className="textarea-story-field">\r
          <Label htmlFor="subject-textarea" required>Subject</Label>\r
          <Textarea id="subject-textarea" name="subject" placeholder="Brief subject line..." required maxLength={100} showCharacterCount rows={2} helperText="Keep it concise and descriptive." />\r
        </div>\r
        \r
        <div className="textarea-story-field">\r
          <Label htmlFor="message-textarea" required>Message</Label>\r
          <Textarea id="message-textarea" name="message" placeholder="Type your detailed message here..." required autoResize minRows={4} maxRows={10} maxLength={1000} showCharacterCount helperText="Please provide as much detail as possible." />\r
        </div>\r
        \r
        <div className="textarea-story-field">\r
          <Label htmlFor="notes-textarea">Additional Notes</Label>\r
          <Textarea id="notes-textarea" name="notes" placeholder="Any additional information (optional)..." rows={3} maxLength={500} showCharacterCount helperText="Optional field for extra context." />\r
        </div>\r
      </fieldset>\r
    </form>,
  parameters: {
    docs: {
      description: {
        story: 'Textarea components in a complete form context with proper form submission attributes.'
      }
    }
  }
}`,...(Te=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Te.source}}};var Ne,Ce,ze;R.parameters={...R.parameters,docs:{...(Ne=R.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div className="textarea-story-accessibility">\r
      <div className="textarea-story-section">\r
        <h4>ARIA Labels and Descriptions</h4>\r
        <div className="textarea-story-field">\r
          <Textarea id="aria-textarea" placeholder="Textarea with comprehensive ARIA support..." aria-label="Message input with accessibility features" aria-describedby="message-help error-message" showCharacterCount maxLength={300} rows={4} />\r
          <div id="message-help" className="textarea-story-help-text">\r
            This textarea includes comprehensive ARIA labeling for screen readers and shows character count.\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="textarea-story-section">\r
        <h4>Error State Announcements</h4>\r
        <div className="textarea-story-field">\r
          <Label htmlFor="error-demo-textarea">Message with Error</Label>\r
          <Textarea id="error-demo-textarea" placeholder="This will show an error state..." error errorMessage="This field is required and cannot be empty." required aria-describedby="error-demo-help" rows={3} />\r
          <div id="error-demo-help" className="textarea-story-help-text">\r
            Error messages are announced to screen readers via role="alert" and aria-live="polite".\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="textarea-story-section">\r
        <h4>Character Count Accessibility</h4>\r
        <div className="textarea-story-field">\r
          <Label htmlFor="count-demo-textarea">Message with Count</Label>\r
          <Textarea id="count-demo-textarea" placeholder="Type to see accessible character counting..." showCharacterCount maxLength={150} autoResize minRows={3} maxRows={5} helperText="Character count includes proper aria-label for screen readers." />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including ARIA labels, error announcements, and screen reader support.'
      }
    }
  }
}`,...(ze=(Ce=R.parameters)==null?void 0:Ce.docs)==null?void 0:ze.source}}};var Le,Re,Ae;A.parameters={...A.parameters,docs:{...(Le=A.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <div className="textarea-story-theme-demo">\r
      <div className="textarea-story-theme-section">\r
        <h3>Theme Adaptive Textarea Components</h3>\r
        \r
        <div className="textarea-story-theme-row">\r
          <div className="textarea-story-field">\r
            <Label>Small Size</Label>\r
            <Textarea size="sm" defaultValue="Small textarea with theme colors" rows={2} />\r
          </div>\r
          \r
          <div className="textarea-story-field">\r
            <Label>Base Size</Label>\r
            <Textarea defaultValue="Base textarea adapts to current theme" rows={3} />\r
          </div>\r
          \r
          <div className="textarea-story-field">\r
            <Label>Large Size</Label>\r
            <Textarea size="lg" defaultValue="Large textarea with theme integration" rows={3} />\r
          </div>\r
        </div>\r
        \r
        <div className="textarea-story-theme-row">\r
          <div className="textarea-story-field">\r
            <Label>Auto-resize with Count</Label>\r
            <Textarea placeholder="Auto-resizing textarea..." autoResize showCharacterCount maxLength={200} minRows={2} maxRows={5} />\r
          </div>\r
          \r
          <div className="textarea-story-field">\r
            <Label>Error State</Label>\r
            <Textarea defaultValue="This has an error state" error errorMessage="Error styling adapts to theme" rows={2} />\r
          </div>\r
          \r
          <div className="textarea-story-field">\r
            <Label>Disabled State</Label>\r
            <Textarea defaultValue="Disabled textarea" disabled showCharacterCount maxLength={100} rows={2} />\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="textarea-story-theme-info">\r
        <h4>Theme Variables Used:</h4>\r
        <div className="textarea-story-theme-vars">\r
          <code>--color-accent</code>: Focus border and character count warning<br />\r
          <code>--color-border</code>: Default border color<br />\r
          <code>--color-bg</code>: Background color<br />\r
          <code>--color-panel</code>: Disabled background<br />\r
          <code>--color-text-primary</code>: Main text color<br />\r
          <code>--color-text-secondary</code>: Helper text and character count<br />\r
          <code>--color-text-muted</code>: Placeholder and disabled text<br />\r
          <code>--color-error</code>: Error border and message color\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Textarea components that adapt to different themes. Use the theme switcher in the toolbar to see color changes.'
      }
    }
  }
}`,...(Ae=(Re=A.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source}}};var Fe,Se,qe;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <div className="textarea-story-comprehensive">\r
      <div className="textarea-story-grid">\r
        <div className="textarea-story-grid-section">\r
          <h4>Basic Features</h4>\r
          <div className="textarea-story-field">\r
            <Label>Simple Textarea</Label>\r
            <Textarea placeholder="Basic textarea..." rows={3} />\r
          </div>\r
          <div className="textarea-story-field">\r
            <Label>With Helper Text</Label>\r
            <Textarea placeholder="Textarea with help..." helperText="This is helpful information." rows={3} />\r
          </div>\r
          <div className="textarea-story-field">\r
            <Label>Required Field</Label>\r
            <Textarea placeholder="Required..." required rows={3} />\r
          </div>\r
        </div>\r
        \r
        <div className="textarea-story-grid-section">\r
          <h4>Advanced Features</h4>\r
          <div className="textarea-story-field">\r
            <Label>Auto-resize</Label>\r
            <Textarea placeholder="Auto-growing..." autoResize minRows={2} maxRows={4} />\r
          </div>\r
          <div className="textarea-story-field">\r
            <Label>Character Count</Label>\r
            <Textarea placeholder="With counter..." showCharacterCount maxLength={100} rows={3} />\r
          </div>\r
          <div className="textarea-story-field">\r
            <Label>Auto + Count</Label>\r
            <Textarea placeholder="Both features..." autoResize showCharacterCount maxLength={150} minRows={2} maxRows={4} />\r
          </div>\r
        </div>\r
        \r
        <div className="textarea-story-grid-section">\r
          <h4>States</h4>\r
          <div className="textarea-story-field">\r
            <Label>Error State</Label>\r
            <Textarea placeholder="Has error..." error errorMessage="Something is wrong" rows={2} />\r
          </div>\r
          <div className="textarea-story-field">\r
            <Label>Disabled</Label>\r
            <Textarea defaultValue="Cannot edit this" disabled rows={2} />\r
          </div>\r
          <div className="textarea-story-field">\r
            <Label>All Features</Label>\r
            <Textarea placeholder="Everything combined..." autoResize showCharacterCount maxLength={200} minRows={2} maxRows={5} helperText="This has all features" />\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of all textarea features and variations.'
      }
    }
  }
}`,...(qe=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:qe.source}}};var Ve,De,Ee;S.parameters={...S.parameters,docs:{...(Ve=S.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    size: 'base',
    placeholder: 'Interactive textarea...',
    disabled: false,
    required: false,
    autoResize: false,
    showCharacterCount: false,
    maxLength: undefined,
    minRows: 3,
    maxRows: 10,
    rows: 4,
    error: false,
    errorMessage: '',
    helperText: '',
    resizable: 'vertical'
  },
  render: args => <div className="textarea-story-field">\r
      <Label htmlFor="interactive-textarea">Interactive Textarea</Label>\r
      <Textarea {...args} id="interactive-textarea" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive story where you can modify all textarea properties using the controls panel.'
      }
    }
  }
}`,...(Ee=(De=S.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};const ur=["Default","SizeVariants","WithLabels","AutoResize","CharacterCount","ResizeBehavior","Controlled","ValidationStates","DisabledStates","FormIntegration","AccessibilityDemo","ThemeShowcase","AllFeatures","Interactive"];export{R as AccessibilityDemo,F as AllFeatures,g as AutoResize,j as CharacterCount,N as Controlled,f as Default,z as DisabledStates,L as FormIntegration,S as Interactive,T as ResizeBehavior,b as SizeVariants,A as ThemeShowcase,C as ValidationStates,w as WithLabels,ur as __namedExportsOrder,xr as default};
