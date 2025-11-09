import{r as A,j as e,R as L}from"./iframe-CdBaqdCg.js";import"./preload-helper-PPVm8Dsz.js";const s=A.forwardRef(({size:i="md",checked:o,defaultChecked:n,disabled:t=!1,required:c=!1,label:l,description:r,onChange:R,onFocus:q,onBlur:F,className:I="",id:z,name:M,value:$,"aria-label":V,"aria-describedby":B,"aria-labelledby":U,onLabel:k="On",offLabel:D="Off",showLabels:N=!1,variant:H="primary",...W},P)=>{const d=z||`switch-${Math.random().toString(36).substr(2,9)}`,O=l?`${d}-label`:void 0,T=r?`${d}-description`:void 0,K=[B,T].filter(Boolean).join(" "),a="switch",Y=`${a}--${i}`,_=`${a}--${H}`,G=t?`${a}--disabled`:"",J=N?`${a}--with-labels`:"",Q=[`${a}-container`,Y,_,G,J,I].filter(Boolean).join(" "),X=A.useCallback(h=>{if(!t&&(h.key===" "||h.key==="Enter")){h.preventDefault();const E=h.currentTarget.querySelector("input");E&&E.click()}},[t]);return e.jsxs("div",{className:Q,children:[e.jsxs("label",{className:`${a}-wrapper`,htmlFor:d,onKeyDown:X,tabIndex:t?-1:0,role:"switch","aria-checked":o?"true":"false","aria-labelledby":U||O,"aria-describedby":K||void 0,"aria-disabled":t?"true":"false",children:[e.jsx("input",{ref:P,type:"checkbox",id:d,name:M,value:$,checked:o,defaultChecked:n,disabled:t,required:c,onChange:R,onFocus:q,onBlur:F,className:`${a}-input`,"aria-label":V,tabIndex:-1,...W}),e.jsxs("span",{className:`${a}-track`,children:[e.jsx("span",{className:`${a}-thumb`,children:N&&e.jsx("span",{className:`${a}-state-label`,children:o?k:D})}),N&&e.jsxs("span",{className:`${a}-track-labels`,children:[e.jsx("span",{className:`${a}-track-label ${a}-track-label--on`,children:k}),e.jsx("span",{className:`${a}-track-label ${a}-track-label--off`,children:D})]})]})]}),(l||r)&&e.jsxs("div",{className:`${a}-content`,children:[l&&e.jsxs("span",{id:O,className:`${a}-label`,children:[l,c&&e.jsx("span",{className:`${a}-required`,"aria-label":"required",children:"*"})]}),r&&e.jsx("span",{id:T,className:`${a}-description`,children:r})]})]})});s.displayName="Switch";s.__docgenInfo={description:`Switch component for boolean toggle inputs.\r
\r
Features:\r
- Three size variants (sm, md, lg)\r
- Smooth animations and transitions\r
- Color variants (primary, success, warning, danger)\r
- Optional state labels (On/Off)\r
- Label and description support\r
- Disabled state with proper styling\r
- Comprehensive accessibility features\r
- Theme integration\r
- Form validation support\r
- Keyboard navigation (Space, Enter)\r
\r
Usage:\r
\`\`\`tsx\r
<Switch \r
  label="Enable notifications" \r
  checked={isEnabled}\r
  onChange={handleToggle}\r
/>\r
\`\`\``,methods:[],displayName:"Switch",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant\r
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the switch is checked"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checked state"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the switch is disabled",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Whether the switch is required",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text for the switch"},description:{required:!1,tsType:{name:"string"},description:"Description text"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Blur handler"},className:{required:!1,tsType:{name:"string"},description:"CSS class name",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Unique identifier"},name:{required:!1,tsType:{name:"string"},description:"Name attribute for form submission"},value:{required:!1,tsType:{name:"string"},description:"Value attribute"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by for additional context"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by for association with other elements"},onLabel:{required:!1,tsType:{name:"string"},description:"Custom labels for on/off states",defaultValue:{value:"'On'",computed:!1}},offLabel:{required:!1,tsType:{name:"string"},description:"Custom label for off state",defaultValue:{value:"'Off'",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"Show state labels on the switch",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"Color variant for the switch",defaultValue:{value:"'primary'",computed:!1}}},composes:["Omit"]};const{fn:C}=__STORYBOOK_MODULE_TEST__,ae={title:"Atoms/Switch",component:s,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size variant"},checked:{control:"boolean",description:"Whether the switch is checked"},defaultChecked:{control:"boolean",description:"Default checked state"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field validation"},label:{control:"text",description:"Label text for the switch"},description:{control:"text",description:"Description text"},onLabel:{control:"text",description:"Custom label for on state"},offLabel:{control:"text",description:"Custom label for off state"},showLabels:{control:"boolean",description:"Show state labels on the switch"},variant:{control:"select",options:["primary","success","warning","danger"],description:"Color variant"},onChange:{action:"changed"},onFocus:{action:"focused"},onBlur:{action:"blurred"}},args:{onChange:C(),onFocus:C(),onBlur:C()}},m={args:{label:"Enable feature"},parameters:{docs:{description:{story:"Default switch with basic functionality."}}}},u={render:()=>e.jsxs("div",{className:"switch-story-section",children:[e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{size:"sm",label:"Small Switch",defaultChecked:!0})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{size:"md",label:"Medium Switch (Default)",defaultChecked:!0})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{size:"lg",label:"Large Switch",defaultChecked:!0})})]}),parameters:{docs:{description:{story:"Different size variants for various UI contexts."}}}},b={render:()=>e.jsxs("div",{className:"switch-story-section",children:[e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{variant:"primary",label:"Primary (Default)",description:"Uses the theme accent color",defaultChecked:!0})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{variant:"success",label:"Success",description:"Green color for positive actions",defaultChecked:!0})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{variant:"warning",label:"Warning",description:"Orange color for caution",defaultChecked:!0})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{variant:"danger",label:"Danger",description:"Red color for destructive actions",defaultChecked:!0})})]}),parameters:{docs:{description:{story:"Different color variants for semantic meaning."}}}},p={render:()=>e.jsxs("div",{className:"switch-story-section",children:[e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{label:"Enable notifications",description:"Receive push notifications for important updates",defaultChecked:!0})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{label:"Dark mode",description:"Switch to dark theme for better night viewing",variant:"primary"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{label:"Auto-save",description:"Automatically save your work every few minutes",required:!0,variant:"success",defaultChecked:!0})})]}),parameters:{docs:{description:{story:"Switches with labels and descriptive text."}}}},w={render:()=>e.jsxs("div",{className:"switch-story-section",children:[e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{showLabels:!0,label:"Basic On/Off Labels",description:"Default On/Off labels shown on the switch"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{showLabels:!0,onLabel:"YES",offLabel:"NO",label:"Custom Yes/No Labels",description:"Custom labels for different contexts",variant:"success"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{showLabels:!0,onLabel:"ON",offLabel:"OFF",label:"Power Switch",description:"Traditional power switch styling",variant:"danger",size:"lg"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{showLabels:!0,onLabel:"✓",offLabel:"✗",label:"Icon Labels",description:"Using icons as state labels",variant:"warning",size:"sm"})})]}),parameters:{docs:{description:{story:"Switches with state labels displayed on the thumb."}}}},Z=()=>{const[i,o]=L.useState(!1),[n,t]=L.useState(!0),[c,l]=L.useState(!1);return e.jsxs("div",{className:"switch-story-section",children:[e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{checked:i,onChange:r=>o(r.target.checked),label:"Feature Toggle",description:`Feature is currently ${i?"enabled":"disabled"}`,variant:"primary"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{checked:n,onChange:r=>t(r.target.checked),label:"Push Notifications",description:`You will ${n?"receive":"not receive"} notifications`,variant:"success"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{checked:c,onChange:r=>l(r.target.checked),label:"Dark Mode",description:`Currently using ${c?"dark":"light"} theme`,showLabels:!0,onLabel:"DARK",offLabel:"LIGHT",variant:"warning"})}),e.jsxs("div",{className:"switch-story-status",children:[e.jsx("h4",{children:"Current State:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Feature Toggle: ",e.jsx("strong",{children:i?"ON":"OFF"})]}),e.jsxs("li",{children:["Notifications: ",e.jsx("strong",{children:n?"ON":"OFF"})]}),e.jsxs("li",{children:["Dark Mode: ",e.jsx("strong",{children:c?"ON":"OFF"})]})]})]})]})},f={render:()=>e.jsx(Z,{}),parameters:{docs:{description:{story:"Controlled switches with external state management and real-time status display."}}}},v={render:()=>e.jsxs("div",{className:"switch-story-section",children:[e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{disabled:!0,label:"Disabled Off",description:"This switch is disabled in the off state"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{disabled:!0,defaultChecked:!0,label:"Disabled On",description:"This switch is disabled in the on state",variant:"success"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{disabled:!0,showLabels:!0,defaultChecked:!0,label:"Disabled with Labels",description:"Disabled switch with state labels",variant:"primary"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(s,{disabled:!0,label:"Disabled Required",description:"Even required fields can be disabled",required:!0,variant:"danger"})})]}),parameters:{docs:{description:{story:"Switches in disabled states with various configurations."}}}},y={render:()=>e.jsxs("form",{className:"switch-story-form-demo",children:[e.jsxs("fieldset",{className:"switch-story-fieldset",children:[e.jsx("legend",{children:"User Preferences"}),e.jsx(s,{name:"notifications",label:"Email Notifications",description:"Receive important updates via email",required:!0,variant:"primary",defaultChecked:!0}),e.jsx(s,{name:"marketing",label:"Marketing Communications",description:"Receive promotional offers and news",variant:"success"}),e.jsx(s,{name:"analytics",label:"Analytics & Performance",description:"Help us improve by sharing usage data",variant:"warning",defaultChecked:!0}),e.jsx(s,{name:"beta",label:"Beta Features",description:"Enable experimental features (may be unstable)",variant:"danger",showLabels:!0,onLabel:"BETA",offLabel:"STABLE"})]}),e.jsxs("fieldset",{className:"switch-story-fieldset",children:[e.jsx("legend",{children:"Accessibility Settings"}),e.jsx(s,{name:"highContrast",label:"High Contrast Mode",description:"Increase contrast for better visibility",variant:"primary"}),e.jsx(s,{name:"reducedMotion",label:"Reduce Motion",description:"Minimize animations and transitions",variant:"success"}),e.jsx(s,{name:"screenReader",label:"Screen Reader Optimizations",description:"Enhanced accessibility for screen readers",variant:"warning",showLabels:!0,onLabel:"ON",offLabel:"OFF"})]})]}),parameters:{docs:{description:{story:"Switches in a complete form context with proper form submission attributes."}}}},g={render:()=>e.jsxs("div",{className:"switch-story-accessibility",children:[e.jsxs("div",{className:"switch-story-section",children:[e.jsx("h4",{children:"ARIA Labels and Descriptions"}),e.jsx(s,{label:"Accessibility Enhanced Switch",description:"This switch includes comprehensive ARIA labeling for screen readers","aria-describedby":"switch-help",variant:"primary"}),e.jsx("div",{id:"switch-help",className:"switch-story-help-text",children:"This switch demonstrates proper ARIA labeling and keyboard navigation."})]}),e.jsxs("div",{className:"switch-story-section",children:[e.jsx("h4",{children:"Keyboard Navigation"}),e.jsx("p",{className:"switch-story-instructions",children:"Use Tab to focus, Space or Enter to toggle."}),e.jsxs("div",{className:"switch-story-keyboard-demo",children:[e.jsx(s,{label:"Keyboard Navigation Demo",description:"Focus me with Tab, toggle with Space or Enter",variant:"success",showLabels:!0}),e.jsx(s,{label:"Another Switch",description:"Tab through multiple switches",variant:"warning"}),e.jsx(s,{label:"Final Switch",description:"Complete keyboard navigation test",variant:"danger",disabled:!0})]})]}),e.jsxs("div",{className:"switch-story-section",children:[e.jsx("h4",{children:"Screen Reader Announcements"}),e.jsx(s,{label:"Screen Reader Optimized",description:"This switch announces state changes to screen readers",variant:"primary",required:!0,"aria-describedby":"screen-reader-help"}),e.jsx("div",{id:"screen-reader-help",className:"switch-story-help-text",children:'State changes are announced as "checked" or "not checked" to screen readers.'})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA labels, keyboard navigation, and screen reader support."}}}},x={render:()=>e.jsxs("div",{className:"switch-story-theme-demo",children:[e.jsxs("div",{className:"switch-story-theme-section",children:[e.jsx("h3",{children:"Theme Adaptive Switch Components"}),e.jsxs("div",{className:"switch-story-theme-grid",children:[e.jsxs("div",{className:"switch-story-theme-column",children:[e.jsx("h4",{children:"Size Variants"}),e.jsx(s,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(s,{size:"md",label:"Medium",defaultChecked:!0}),e.jsx(s,{size:"lg",label:"Large",defaultChecked:!0})]}),e.jsxs("div",{className:"switch-story-theme-column",children:[e.jsx("h4",{children:"Color Variants"}),e.jsx(s,{variant:"primary",label:"Primary",defaultChecked:!0}),e.jsx(s,{variant:"success",label:"Success",defaultChecked:!0}),e.jsx(s,{variant:"warning",label:"Warning",defaultChecked:!0}),e.jsx(s,{variant:"danger",label:"Danger",defaultChecked:!0})]}),e.jsxs("div",{className:"switch-story-theme-column",children:[e.jsx("h4",{children:"With Labels"}),e.jsx(s,{showLabels:!0,label:"Basic Labels",defaultChecked:!0}),e.jsx(s,{showLabels:!0,onLabel:"YES",offLabel:"NO",label:"Custom Labels"}),e.jsx(s,{showLabels:!0,onLabel:"✓",offLabel:"✗",label:"Icon Labels",defaultChecked:!0})]}),e.jsxs("div",{className:"switch-story-theme-column",children:[e.jsx("h4",{children:"States"}),e.jsx(s,{label:"Normal",defaultChecked:!0}),e.jsx(s,{label:"Disabled Off",disabled:!0}),e.jsx(s,{label:"Disabled On",disabled:!0,defaultChecked:!0}),e.jsx(s,{label:"Required",required:!0})]})]})]}),e.jsxs("div",{className:"switch-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("div",{className:"switch-story-theme-vars",children:[e.jsx("code",{children:"--color-accent"}),": Primary variant active color",e.jsx("br",{}),e.jsx("code",{children:"--color-accent-hover"}),": Hover state colors",e.jsx("br",{}),e.jsx("code",{children:"--color-border"}),": Default track color",e.jsx("br",{}),e.jsx("code",{children:"--color-panel"}),": Disabled background",e.jsx("br",{}),e.jsx("code",{children:"--color-text"}),": Label text color",e.jsx("br",{}),e.jsx("code",{children:"--color-text-secondary"}),": Description text",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Disabled text",e.jsx("br",{}),e.jsx("code",{children:"--color-success"}),", ",e.jsx("code",{children:"--color-warning"}),", ",e.jsx("code",{children:"--color-error"}),": Variant colors"]})]})]}),parameters:{docs:{description:{story:"Switch components that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},S={render:()=>e.jsx("div",{className:"switch-story-comprehensive",children:e.jsxs("div",{className:"switch-story-grid",children:[e.jsxs("div",{className:"switch-story-grid-section",children:[e.jsx("h4",{children:"Basic Switches"}),e.jsx(s,{label:"Simple Switch"}),e.jsx(s,{label:"With Description",description:"Additional context"}),e.jsx(s,{label:"Required Field",required:!0}),e.jsx(s,{label:"Default Checked",defaultChecked:!0})]}),e.jsxs("div",{className:"switch-story-grid-section",children:[e.jsx("h4",{children:"Size & Color Variants"}),e.jsx(s,{size:"sm",variant:"success",label:"Small Success",defaultChecked:!0}),e.jsx(s,{size:"md",variant:"warning",label:"Medium Warning",defaultChecked:!0}),e.jsx(s,{size:"lg",variant:"danger",label:"Large Danger",defaultChecked:!0})]}),e.jsxs("div",{className:"switch-story-grid-section",children:[e.jsx("h4",{children:"With State Labels"}),e.jsx(s,{showLabels:!0,label:"Default Labels"}),e.jsx(s,{showLabels:!0,onLabel:"YES",offLabel:"NO",label:"Custom Labels"}),e.jsx(s,{showLabels:!0,onLabel:"ON",offLabel:"OFF",variant:"success",label:"Power",defaultChecked:!0})]}),e.jsxs("div",{className:"switch-story-grid-section",children:[e.jsx("h4",{children:"Special States"}),e.jsx(s,{disabled:!0,label:"Disabled Off"}),e.jsx(s,{disabled:!0,defaultChecked:!0,label:"Disabled On"}),e.jsx(s,{label:"Hover me!",variant:"primary"}),e.jsx(s,{showLabels:!0,disabled:!0,onLabel:"LOCK",offLabel:"OPEN",label:"Disabled Labels"})]})]})}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of all switch features and variations."}}}},j={args:{size:"md",variant:"primary",label:"Interactive Switch",description:"Use controls to modify properties",disabled:!1,required:!1,showLabels:!1,onLabel:"On",offLabel:"Off",checked:!1},render:i=>e.jsx("div",{className:"switch-story-field",children:e.jsx(s,{...i})}),parameters:{docs:{description:{story:"Interactive story where you can modify all switch properties using the controls panel."}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable feature'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default switch with basic functionality.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="switch-story-section">\r
      <div className="switch-story-row">\r
        <Switch size="sm" label="Small Switch" defaultChecked />\r
      </div>\r
      <div className="switch-story-row">\r
        <Switch size="md" label="Medium Switch (Default)" defaultChecked />\r
      </div>\r
      <div className="switch-story-row">\r
        <Switch size="lg" label="Large Switch" defaultChecked />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different size variants for various UI contexts.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="switch-story-section">\r
      <div className="switch-story-row">\r
        <Switch variant="primary" label="Primary (Default)" description="Uses the theme accent color" defaultChecked />\r
      </div>\r
      <div className="switch-story-row">\r
        <Switch variant="success" label="Success" description="Green color for positive actions" defaultChecked />\r
      </div>\r
      <div className="switch-story-row">\r
        <Switch variant="warning" label="Warning" description="Orange color for caution" defaultChecked />\r
      </div>\r
      <div className="switch-story-row">\r
        <Switch variant="danger" label="Danger" description="Red color for destructive actions" defaultChecked />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different color variants for semantic meaning.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="switch-story-section">\r
      <div className="switch-story-row">\r
        <Switch label="Enable notifications" description="Receive push notifications for important updates" defaultChecked />\r
      </div>\r
      <div className="switch-story-row">\r
        <Switch label="Dark mode" description="Switch to dark theme for better night viewing" variant="primary" />\r
      </div>\r
      <div className="switch-story-row">\r
        <Switch label="Auto-save" description="Automatically save your work every few minutes" required variant="success" defaultChecked />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Switches with labels and descriptive text.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="switch-story-section">\r
      <div className="switch-story-row">\r
        <Switch showLabels label="Basic On/Off Labels" description="Default On/Off labels shown on the switch" />\r
      </div>\r
      <div className="switch-story-row">\r
        <Switch showLabels onLabel="YES" offLabel="NO" label="Custom Yes/No Labels" description="Custom labels for different contexts" variant="success" />\r
      </div>\r
      <div className="switch-story-row">\r
        <Switch showLabels onLabel="ON" offLabel="OFF" label="Power Switch" description="Traditional power switch styling" variant="danger" size="lg" />\r
      </div>\r
      <div className="switch-story-row">\r
        <Switch showLabels onLabel="✓" offLabel="✗" label="Icon Labels" description="Using icons as state labels" variant="warning" size="sm" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Switches with state labels displayed on the thumb.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledSwitchDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Controlled switches with external state management and real-time status display.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="switch-story-section">\r
      <div className="switch-story-row">\r
        <Switch disabled label="Disabled Off" description="This switch is disabled in the off state" />\r
      </div>\r
      <div className="switch-story-row">\r
        <Switch disabled defaultChecked label="Disabled On" description="This switch is disabled in the on state" variant="success" />\r
      </div>\r
      <div className="switch-story-row">\r
        <Switch disabled showLabels defaultChecked label="Disabled with Labels" description="Disabled switch with state labels" variant="primary" />\r
      </div>\r
      <div className="switch-story-row">\r
        <Switch disabled label="Disabled Required" description="Even required fields can be disabled" required variant="danger" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Switches in disabled states with various configurations.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <form className="switch-story-form-demo">\r
      <fieldset className="switch-story-fieldset">\r
        <legend>User Preferences</legend>\r
        \r
        <Switch name="notifications" label="Email Notifications" description="Receive important updates via email" required variant="primary" defaultChecked />\r
\r
        <Switch name="marketing" label="Marketing Communications" description="Receive promotional offers and news" variant="success" />\r
\r
        <Switch name="analytics" label="Analytics & Performance" description="Help us improve by sharing usage data" variant="warning" defaultChecked />\r
\r
        <Switch name="beta" label="Beta Features" description="Enable experimental features (may be unstable)" variant="danger" showLabels onLabel="BETA" offLabel="STABLE" />\r
      </fieldset>\r
\r
      <fieldset className="switch-story-fieldset">\r
        <legend>Accessibility Settings</legend>\r
        \r
        <Switch name="highContrast" label="High Contrast Mode" description="Increase contrast for better visibility" variant="primary" />\r
\r
        <Switch name="reducedMotion" label="Reduce Motion" description="Minimize animations and transitions" variant="success" />\r
\r
        <Switch name="screenReader" label="Screen Reader Optimizations" description="Enhanced accessibility for screen readers" variant="warning" showLabels onLabel="ON" offLabel="OFF" />\r
      </fieldset>\r
    </form>,
  parameters: {
    docs: {
      description: {
        story: 'Switches in a complete form context with proper form submission attributes.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="switch-story-accessibility">\r
      <div className="switch-story-section">\r
        <h4>ARIA Labels and Descriptions</h4>\r
        <Switch label="Accessibility Enhanced Switch" description="This switch includes comprehensive ARIA labeling for screen readers" aria-describedby="switch-help" variant="primary" />\r
        <div id="switch-help" className="switch-story-help-text">\r
          This switch demonstrates proper ARIA labeling and keyboard navigation.\r
        </div>\r
      </div>\r
      \r
      <div className="switch-story-section">\r
        <h4>Keyboard Navigation</h4>\r
        <p className="switch-story-instructions">\r
          Use Tab to focus, Space or Enter to toggle.\r
        </p>\r
        <div className="switch-story-keyboard-demo">\r
          <Switch label="Keyboard Navigation Demo" description="Focus me with Tab, toggle with Space or Enter" variant="success" showLabels />\r
          <Switch label="Another Switch" description="Tab through multiple switches" variant="warning" />\r
          <Switch label="Final Switch" description="Complete keyboard navigation test" variant="danger" disabled />\r
        </div>\r
      </div>\r
      \r
      <div className="switch-story-section">\r
        <h4>Screen Reader Announcements</h4>\r
        <Switch label="Screen Reader Optimized" description="This switch announces state changes to screen readers" variant="primary" required aria-describedby="screen-reader-help" />\r
        <div id="screen-reader-help" className="switch-story-help-text">\r
          State changes are announced as "checked" or "not checked" to screen readers.\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including ARIA labels, keyboard navigation, and screen reader support.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="switch-story-theme-demo">\r
      <div className="switch-story-theme-section">\r
        <h3>Theme Adaptive Switch Components</h3>\r
        \r
        <div className="switch-story-theme-grid">\r
          <div className="switch-story-theme-column">\r
            <h4>Size Variants</h4>\r
            <Switch size="sm" label="Small" defaultChecked />\r
            <Switch size="md" label="Medium" defaultChecked />\r
            <Switch size="lg" label="Large" defaultChecked />\r
          </div>\r
          \r
          <div className="switch-story-theme-column">\r
            <h4>Color Variants</h4>\r
            <Switch variant="primary" label="Primary" defaultChecked />\r
            <Switch variant="success" label="Success" defaultChecked />\r
            <Switch variant="warning" label="Warning" defaultChecked />\r
            <Switch variant="danger" label="Danger" defaultChecked />\r
          </div>\r
          \r
          <div className="switch-story-theme-column">\r
            <h4>With Labels</h4>\r
            <Switch showLabels label="Basic Labels" defaultChecked />\r
            <Switch showLabels onLabel="YES" offLabel="NO" label="Custom Labels" />\r
            <Switch showLabels onLabel="✓" offLabel="✗" label="Icon Labels" defaultChecked />\r
          </div>\r
          \r
          <div className="switch-story-theme-column">\r
            <h4>States</h4>\r
            <Switch label="Normal" defaultChecked />\r
            <Switch label="Disabled Off" disabled />\r
            <Switch label="Disabled On" disabled defaultChecked />\r
            <Switch label="Required" required />\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="switch-story-theme-info">\r
        <h4>Theme Variables Used:</h4>\r
        <div className="switch-story-theme-vars">\r
          <code>--color-accent</code>: Primary variant active color<br />\r
          <code>--color-accent-hover</code>: Hover state colors<br />\r
          <code>--color-border</code>: Default track color<br />\r
          <code>--color-panel</code>: Disabled background<br />\r
          <code>--color-text</code>: Label text color<br />\r
          <code>--color-text-secondary</code>: Description text<br />\r
          <code>--color-text-muted</code>: Disabled text<br />\r
          <code>--color-success</code>, <code>--color-warning</code>, <code>--color-error</code>: Variant colors\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Switch components that adapt to different themes. Use the theme switcher in the toolbar to see color changes.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="switch-story-comprehensive">\r
      <div className="switch-story-grid">\r
        <div className="switch-story-grid-section">\r
          <h4>Basic Switches</h4>\r
          <Switch label="Simple Switch" />\r
          <Switch label="With Description" description="Additional context" />\r
          <Switch label="Required Field" required />\r
          <Switch label="Default Checked" defaultChecked />\r
        </div>\r
        \r
        <div className="switch-story-grid-section">\r
          <h4>Size & Color Variants</h4>\r
          <Switch size="sm" variant="success" label="Small Success" defaultChecked />\r
          <Switch size="md" variant="warning" label="Medium Warning" defaultChecked />\r
          <Switch size="lg" variant="danger" label="Large Danger" defaultChecked />\r
        </div>\r
        \r
        <div className="switch-story-grid-section">\r
          <h4>With State Labels</h4>\r
          <Switch showLabels label="Default Labels" />\r
          <Switch showLabels onLabel="YES" offLabel="NO" label="Custom Labels" />\r
          <Switch showLabels onLabel="ON" offLabel="OFF" variant="success" label="Power" defaultChecked />\r
        </div>\r
        \r
        <div className="switch-story-grid-section">\r
          <h4>Special States</h4>\r
          <Switch disabled label="Disabled Off" />\r
          <Switch disabled defaultChecked label="Disabled On" />\r
          <Switch label="Hover me!" variant="primary" />\r
          <Switch showLabels disabled onLabel="LOCK" offLabel="OPEN" label="Disabled Labels" />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of all switch features and variations.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'primary',
    label: 'Interactive Switch',
    description: 'Use controls to modify properties',
    disabled: false,
    required: false,
    showLabels: false,
    onLabel: 'On',
    offLabel: 'Off',
    checked: false
  },
  render: args => <div className="switch-story-field">\r
      <Switch {...args} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive story where you can modify all switch properties using the controls panel.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};const re=["Default","SizeVariants","ColorVariants","WithLabelsAndDescriptions","StateLabels","Controlled","DisabledStates","FormIntegration","AccessibilityDemo","ThemeShowcase","AllFeatures","Interactive"];export{g as AccessibilityDemo,S as AllFeatures,b as ColorVariants,f as Controlled,m as Default,v as DisabledStates,y as FormIntegration,j as Interactive,u as SizeVariants,w as StateLabels,x as ThemeShowcase,p as WithLabelsAndDescriptions,re as __namedExportsOrder,ae as default};
