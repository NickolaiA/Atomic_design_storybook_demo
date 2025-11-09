import{r as x,j as e}from"./iframe-CdBaqdCg.js";import{L as a}from"./Label-BSlV8n6N.js";import"./preload-helper-PPVm8Dsz.js";const r=x.forwardRef(({size:s="md",checked:o,disabled:i=!1,name:f,value:j,onChange:g,onClick:N,required:k=!1,className:L="",id:z,"aria-label":R,"aria-describedby":B,"aria-labelledby":S,...F},w)=>{const d="radio-button",C=`${d}--${s}`,T=o?`${d}--checked`:"",O=i?`${d}--disabled`:"",A=[d,C,T,O,L].filter(Boolean).join(" ");return e.jsx("input",{ref:w,type:"radio",className:A,id:z,name:f,value:j,checked:o,disabled:i,required:k,onChange:g,onClick:N,"aria-label":R,"aria-describedby":B,"aria-labelledby":S,...F})});r.displayName="RadioButton";r.__docgenInfo={description:`RadioButton component for single selection from a group of options.\r
\r
Features:\r
- Three size variants (sm, md, lg)\r
- Proper radio group behavior with name attribute\r
- Full keyboard navigation support (arrow keys, tab)\r
- Disabled state support\r
- Comprehensive accessibility features\r
- Theme integration\r
- Form validation support\r
\r
Usage:\r
\`\`\`tsx\r
<RadioButton name="option" value="a" checked />\r
<RadioButton name="option" value="b" />\r
\`\`\``,methods:[],displayName:"RadioButton",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant\r
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the radio button is checked"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the radio button is disabled",defaultValue:{value:"false",computed:!1}},name:{required:!0,tsType:{name:"string"},description:"Name for radio button group (required for proper grouping)"},value:{required:!0,tsType:{name:"string"},description:"Value for the radio button"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Click handler"},required:{required:!1,tsType:{name:"boolean"},description:"Required field validation",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSS class name",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Unique identifier"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by for additional context"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by for association with other elements"}},composes:["Omit"]};const{fn:y}=__STORYBOOK_MODULE_TEST__,U={title:"Atoms/RadioButton",component:r,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size variant"},checked:{control:"boolean",description:"Checked state"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field validation"},name:{control:"text",description:"Name attribute for radio group (required)"},value:{control:"text",description:"Value attribute"},onChange:{action:"changed"},onClick:{action:"clicked"}},args:{onChange:y(),onClick:y(),name:"example",value:"option"}},l={parameters:{docs:{description:{story:"Default radio button in unchecked state with base size."}}}},t={render:()=>e.jsxs("div",{className:"radio-story-section",children:[e.jsxs("div",{className:"radio-story-row",children:[e.jsx(r,{name:"size-demo",value:"sm",size:"sm"}),e.jsx(a,{children:"Small Radio Button"})]}),e.jsxs("div",{className:"radio-story-row",children:[e.jsx(r,{name:"size-demo",value:"base",size:"base"}),e.jsx(a,{children:"Base Radio Button (Default)"})]}),e.jsxs("div",{className:"radio-story-row",children:[e.jsx(r,{name:"size-demo",value:"lg",size:"lg"}),e.jsx(a,{children:"Large Radio Button"})]})]}),parameters:{docs:{description:{story:"Different size variants for various UI contexts."}}}},n={render:()=>e.jsxs("div",{className:"radio-story-section",children:[e.jsxs("div",{className:"radio-story-row",children:[e.jsx(r,{name:"states-unchecked",value:"unchecked",checked:!1}),e.jsx(a,{children:"Unchecked"})]}),e.jsxs("div",{className:"radio-story-row",children:[e.jsx(r,{name:"states-checked",value:"checked",checked:!0}),e.jsx(a,{children:"Checked"})]}),e.jsxs("div",{className:"radio-story-row",children:[e.jsx(r,{name:"states-disabled-unchecked",value:"disabled-unchecked",disabled:!0}),e.jsx(a,{disabled:!0,children:"Disabled Unchecked"})]}),e.jsxs("div",{className:"radio-story-row",children:[e.jsx(r,{name:"states-disabled-checked",value:"disabled-checked",checked:!0,disabled:!0}),e.jsx(a,{disabled:!0,children:"Disabled Checked"})]})]}),parameters:{docs:{description:{story:"All possible radio button states including checked, unchecked, and disabled variations."}}}},c={render:()=>e.jsxs("div",{className:"radio-story-groups",children:[e.jsxs("div",{className:"radio-story-group",children:[e.jsx("h4",{children:"Color Preference"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"color-red",name:"color",value:"red"}),e.jsx(a,{htmlFor:"color-red",children:"Red"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"color-blue",name:"color",value:"blue",checked:!0}),e.jsx(a,{htmlFor:"color-blue",children:"Blue (Selected)"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"color-green",name:"color",value:"green"}),e.jsx(a,{htmlFor:"color-green",children:"Green"})]})]}),e.jsxs("div",{className:"radio-story-group",children:[e.jsx("h4",{children:"Size Preference"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"size-small",name:"size",value:"small"}),e.jsx(a,{htmlFor:"size-small",children:"Small"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"size-medium",name:"size",value:"medium"}),e.jsx(a,{htmlFor:"size-medium",children:"Medium"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"size-large",name:"size",value:"large",checked:!0}),e.jsx(a,{htmlFor:"size-large",children:"Large (Selected)"})]})]})]}),parameters:{docs:{description:{story:"Radio buttons in separate groups. Each group allows only one selection."}}}},m={render:()=>e.jsxs("form",{className:"radio-story-form-demo",children:[e.jsxs("fieldset",{className:"radio-story-fieldset",children:[e.jsx("legend",{children:"Subscription Plan"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"plan-free",name:"plan",value:"free"}),e.jsx(a,{htmlFor:"plan-free",children:"Free Plan"}),e.jsx("span",{className:"radio-story-description",children:"Basic features, limited usage"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"plan-pro",name:"plan",value:"pro",checked:!0}),e.jsx(a,{htmlFor:"plan-pro",children:"Pro Plan"}),e.jsx("span",{className:"radio-story-description",children:"All features, unlimited usage"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"plan-enterprise",name:"plan",value:"enterprise"}),e.jsx(a,{htmlFor:"plan-enterprise",children:"Enterprise Plan"}),e.jsx("span",{className:"radio-story-description",children:"Custom solutions, priority support"})]})]}),e.jsxs("fieldset",{className:"radio-story-fieldset",children:[e.jsx("legend",{children:"Billing Frequency"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"billing-monthly",name:"billing",value:"monthly",required:!0}),e.jsx(a,{htmlFor:"billing-monthly",required:!0,children:"Monthly"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"billing-yearly",name:"billing",value:"yearly",required:!0}),e.jsx(a,{htmlFor:"billing-yearly",required:!0,children:"Yearly (Save 20%)"})]})]})]}),parameters:{docs:{description:{story:"Radio buttons in a complete form context with fieldsets, legends, and proper form submission attributes."}}}},q=()=>{const[s,o]=x.useState("option2");return e.jsxs("div",{className:"radio-story-controlled",children:[e.jsx("h4",{children:"Controlled Radio Group"}),e.jsxs("p",{children:["Current selection: ",e.jsx("strong",{children:s})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"controlled-1",name:"controlled",value:"option1",checked:s==="option1",onChange:i=>o(i.target.value)}),e.jsx(a,{htmlFor:"controlled-1",children:"Option 1"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"controlled-2",name:"controlled",value:"option2",checked:s==="option2",onChange:i=>o(i.target.value)}),e.jsx(a,{htmlFor:"controlled-2",children:"Option 2"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"controlled-3",name:"controlled",value:"option3",checked:s==="option3",onChange:i=>o(i.target.value)}),e.jsx(a,{htmlFor:"controlled-3",children:"Option 3"})]}),e.jsx("button",{type:"button",onClick:()=>o("option1"),children:"Reset to Option 1"})]})},u={render:()=>e.jsx(q,{}),parameters:{docs:{description:{story:"Controlled radio group with state management. Shows current selection and programmatic control."}}}},p={render:()=>e.jsxs("div",{className:"radio-story-accessibility",children:[e.jsxs("div",{className:"radio-story-section",children:[e.jsx("h4",{children:"ARIA Labels and Descriptions"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"aria-example-1",name:"aria-demo",value:"option1","aria-label":"First accessibility option","aria-describedby":"option1-help"}),e.jsx(a,{htmlFor:"aria-example-1",children:"Option with ARIA support"}),e.jsx("div",{id:"option1-help",className:"radio-story-help-text",children:"This option includes comprehensive ARIA labeling."})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"aria-example-2",name:"aria-demo",value:"option2","aria-labelledby":"option2-label option2-description"}),e.jsx(a,{id:"option2-label",htmlFor:"aria-example-2",children:"Complex option"}),e.jsx("div",{id:"option2-description",className:"radio-story-help-text",children:"Uses aria-labelledby to reference multiple elements."})]})]}),e.jsxs("div",{className:"radio-story-section",children:[e.jsx("h4",{children:"Keyboard Navigation"}),e.jsx("p",{className:"radio-story-instructions",children:"Use Tab to enter/exit radio groups, Arrow Keys to select within group, Space to select."}),e.jsxs("fieldset",{className:"radio-story-keyboard-demo",children:[e.jsx("legend",{children:"Navigation Demo Group"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"keyboard-1",name:"keyboard",value:"first"}),e.jsx(a,{htmlFor:"keyboard-1",children:"First Option"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"keyboard-2",name:"keyboard",value:"second"}),e.jsx(a,{htmlFor:"keyboard-2",children:"Second Option"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"keyboard-3",name:"keyboard",value:"third"}),e.jsx(a,{htmlFor:"keyboard-3",children:"Third Option"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{id:"keyboard-4",name:"keyboard",value:"fourth",disabled:!0}),e.jsx(a,{htmlFor:"keyboard-4",disabled:!0,children:"Disabled (Skipped)"})]})]})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA labels, descriptions, and keyboard navigation demonstration."}}}},h={render:()=>e.jsxs("div",{className:"radio-story-theme-demo",children:[e.jsxs("div",{className:"radio-story-theme-section",children:[e.jsx("h3",{children:"Theme Adaptive Radio Buttons"}),e.jsxs("div",{className:"radio-story-theme-row",children:[e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{name:"theme-sm",value:"unchecked",size:"sm"}),e.jsx(a,{children:"Small unchecked"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{name:"theme-sm",value:"checked",size:"sm",checked:!0}),e.jsx(a,{children:"Small checked"})]})]}),e.jsxs("div",{className:"radio-story-theme-row",children:[e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{name:"theme-base",value:"unchecked"}),e.jsx(a,{children:"Base unchecked"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{name:"theme-base",value:"checked",checked:!0}),e.jsx(a,{children:"Base checked"})]})]}),e.jsxs("div",{className:"radio-story-theme-row",children:[e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{name:"theme-lg",value:"unchecked",size:"lg"}),e.jsx(a,{children:"Large unchecked"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{name:"theme-lg",value:"checked",size:"lg",checked:!0}),e.jsx(a,{children:"Large checked"})]})]})]}),e.jsxs("div",{className:"radio-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("div",{className:"radio-story-theme-vars",children:[e.jsx("code",{children:"--color-accent"}),": Checked background and border",e.jsx("br",{}),e.jsx("code",{children:"--color-accent-hover"}),": Hover state colors",e.jsx("br",{}),e.jsx("code",{children:"--color-border"}),": Default border color",e.jsx("br",{}),e.jsx("code",{children:"--color-bg"}),": Background and inner dot color",e.jsx("br",{}),e.jsx("code",{children:"--color-panel"}),": Hover background",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Disabled state color"]})]})]}),parameters:{docs:{description:{story:"Radio buttons that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},v={render:()=>e.jsxs("div",{className:"radio-story-comparison",children:[e.jsxs("div",{className:"radio-story-comparison-group",children:[e.jsx("h4",{children:"Small Size Group"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{name:"size-sm",value:"option1",size:"sm"}),e.jsx(a,{children:"Option 1"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{name:"size-sm",value:"option2",size:"sm",checked:!0}),e.jsx(a,{children:"Option 2 (Selected)"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{name:"size-sm",value:"option3",size:"sm"}),e.jsx(a,{children:"Option 3"})]})]}),e.jsxs("div",{className:"radio-story-comparison-group",children:[e.jsx("h4",{children:"Base Size Group"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{name:"size-base",value:"option1"}),e.jsx(a,{children:"Option 1"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{name:"size-base",value:"option2",checked:!0}),e.jsx(a,{children:"Option 2 (Selected)"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{name:"size-base",value:"option3"}),e.jsx(a,{children:"Option 3"})]})]}),e.jsxs("div",{className:"radio-story-comparison-group",children:[e.jsx("h4",{children:"Large Size Group"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{name:"size-lg",value:"option1",size:"lg"}),e.jsx(a,{children:"Option 1"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{name:"size-lg",value:"option2",size:"lg",checked:!0}),e.jsx(a,{children:"Option 2 (Selected)"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{name:"size-lg",value:"option3",size:"lg"}),e.jsx(a,{children:"Option 3"})]})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:"Side-by-side comparison of all radio button sizes in group context."}}}},b={args:{size:"md",checked:!1,disabled:!1,required:!1,name:"interactive-demo",value:"demo-value"},render:s=>e.jsxs("div",{className:"radio-story-field",children:[e.jsx(r,{...s,id:"interactive-radio"}),e.jsx(a,{htmlFor:"interactive-radio",children:"Interactive Radio Button"})]}),parameters:{docs:{description:{story:"Interactive story where you can modify all radio button properties using the controls panel."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default radio button in unchecked state with base size.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="radio-story-section">\r
      <div className="radio-story-row">\r
        <RadioButton name="size-demo" value="sm" size="sm" />\r
        <Label>Small Radio Button</Label>\r
      </div>\r
      <div className="radio-story-row">\r
        <RadioButton name="size-demo" value="base" size="base" />\r
        <Label>Base Radio Button (Default)</Label>\r
      </div>\r
      <div className="radio-story-row">\r
        <RadioButton name="size-demo" value="lg" size="lg" />\r
        <Label>Large Radio Button</Label>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different size variants for various UI contexts.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="radio-story-section">\r
      <div className="radio-story-row">\r
        <RadioButton name="states-unchecked" value="unchecked" checked={false} />\r
        <Label>Unchecked</Label>\r
      </div>\r
      <div className="radio-story-row">\r
        <RadioButton name="states-checked" value="checked" checked={true} />\r
        <Label>Checked</Label>\r
      </div>\r
      <div className="radio-story-row">\r
        <RadioButton name="states-disabled-unchecked" value="disabled-unchecked" disabled />\r
        <Label disabled>Disabled Unchecked</Label>\r
      </div>\r
      <div className="radio-story-row">\r
        <RadioButton name="states-disabled-checked" value="disabled-checked" checked disabled />\r
        <Label disabled>Disabled Checked</Label>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All possible radio button states including checked, unchecked, and disabled variations.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="radio-story-groups">\r
      <div className="radio-story-group">\r
        <h4>Color Preference</h4>\r
        <div className="radio-story-field">\r
          <RadioButton id="color-red" name="color" value="red" />\r
          <Label htmlFor="color-red">Red</Label>\r
        </div>\r
        <div className="radio-story-field">\r
          <RadioButton id="color-blue" name="color" value="blue" checked />\r
          <Label htmlFor="color-blue">Blue (Selected)</Label>\r
        </div>\r
        <div className="radio-story-field">\r
          <RadioButton id="color-green" name="color" value="green" />\r
          <Label htmlFor="color-green">Green</Label>\r
        </div>\r
      </div>\r
      \r
      <div className="radio-story-group">\r
        <h4>Size Preference</h4>\r
        <div className="radio-story-field">\r
          <RadioButton id="size-small" name="size" value="small" />\r
          <Label htmlFor="size-small">Small</Label>\r
        </div>\r
        <div className="radio-story-field">\r
          <RadioButton id="size-medium" name="size" value="medium" />\r
          <Label htmlFor="size-medium">Medium</Label>\r
        </div>\r
        <div className="radio-story-field">\r
          <RadioButton id="size-large" name="size" value="large" checked />\r
          <Label htmlFor="size-large">Large (Selected)</Label>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons in separate groups. Each group allows only one selection.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <form className="radio-story-form-demo">\r
      <fieldset className="radio-story-fieldset">\r
        <legend>Subscription Plan</legend>\r
        \r
        <div className="radio-story-field">\r
          <RadioButton id="plan-free" name="plan" value="free" />\r
          <Label htmlFor="plan-free">Free Plan</Label>\r
          <span className="radio-story-description">Basic features, limited usage</span>\r
        </div>\r
        \r
        <div className="radio-story-field">\r
          <RadioButton id="plan-pro" name="plan" value="pro" checked />\r
          <Label htmlFor="plan-pro">Pro Plan</Label>\r
          <span className="radio-story-description">All features, unlimited usage</span>\r
        </div>\r
        \r
        <div className="radio-story-field">\r
          <RadioButton id="plan-enterprise" name="plan" value="enterprise" />\r
          <Label htmlFor="plan-enterprise">Enterprise Plan</Label>\r
          <span className="radio-story-description">Custom solutions, priority support</span>\r
        </div>\r
      </fieldset>\r
      \r
      <fieldset className="radio-story-fieldset">\r
        <legend>Billing Frequency</legend>\r
        \r
        <div className="radio-story-field">\r
          <RadioButton id="billing-monthly" name="billing" value="monthly" required />\r
          <Label htmlFor="billing-monthly" required>Monthly</Label>\r
        </div>\r
        \r
        <div className="radio-story-field">\r
          <RadioButton id="billing-yearly" name="billing" value="yearly" required />\r
          <Label htmlFor="billing-yearly" required>Yearly (Save 20%)</Label>\r
        </div>\r
      </fieldset>\r
    </form>,
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons in a complete form context with fieldsets, legends, and proper form submission attributes.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledRadioGroup />,
  parameters: {
    docs: {
      description: {
        story: 'Controlled radio group with state management. Shows current selection and programmatic control.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="radio-story-accessibility">\r
      <div className="radio-story-section">\r
        <h4>ARIA Labels and Descriptions</h4>\r
        <div className="radio-story-field">\r
          <RadioButton id="aria-example-1" name="aria-demo" value="option1" aria-label="First accessibility option" aria-describedby="option1-help" />\r
          <Label htmlFor="aria-example-1">Option with ARIA support</Label>\r
          <div id="option1-help" className="radio-story-help-text">\r
            This option includes comprehensive ARIA labeling.\r
          </div>\r
        </div>\r
        \r
        <div className="radio-story-field">\r
          <RadioButton id="aria-example-2" name="aria-demo" value="option2" aria-labelledby="option2-label option2-description" />\r
          <Label id="option2-label" htmlFor="aria-example-2">Complex option</Label>\r
          <div id="option2-description" className="radio-story-help-text">\r
            Uses aria-labelledby to reference multiple elements.\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="radio-story-section">\r
        <h4>Keyboard Navigation</h4>\r
        <p className="radio-story-instructions">\r
          Use Tab to enter/exit radio groups, Arrow Keys to select within group, Space to select.\r
        </p>\r
        \r
        <fieldset className="radio-story-keyboard-demo">\r
          <legend>Navigation Demo Group</legend>\r
          <div className="radio-story-field">\r
            <RadioButton id="keyboard-1" name="keyboard" value="first" />\r
            <Label htmlFor="keyboard-1">First Option</Label>\r
          </div>\r
          <div className="radio-story-field">\r
            <RadioButton id="keyboard-2" name="keyboard" value="second" />\r
            <Label htmlFor="keyboard-2">Second Option</Label>\r
          </div>\r
          <div className="radio-story-field">\r
            <RadioButton id="keyboard-3" name="keyboard" value="third" />\r
            <Label htmlFor="keyboard-3">Third Option</Label>\r
          </div>\r
          <div className="radio-story-field">\r
            <RadioButton id="keyboard-4" name="keyboard" value="fourth" disabled />\r
            <Label htmlFor="keyboard-4" disabled>Disabled (Skipped)</Label>\r
          </div>\r
        </fieldset>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including ARIA labels, descriptions, and keyboard navigation demonstration.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="radio-story-theme-demo">\r
      <div className="radio-story-theme-section">\r
        <h3>Theme Adaptive Radio Buttons</h3>\r
        \r
        <div className="radio-story-theme-row">\r
          <div className="radio-story-field">\r
            <RadioButton name="theme-sm" value="unchecked" size="sm" />\r
            <Label>Small unchecked</Label>\r
          </div>\r
          <div className="radio-story-field">\r
            <RadioButton name="theme-sm" value="checked" size="sm" checked />\r
            <Label>Small checked</Label>\r
          </div>\r
        </div>\r
        \r
        <div className="radio-story-theme-row">\r
          <div className="radio-story-field">\r
            <RadioButton name="theme-base" value="unchecked" />\r
            <Label>Base unchecked</Label>\r
          </div>\r
          <div className="radio-story-field">\r
            <RadioButton name="theme-base" value="checked" checked />\r
            <Label>Base checked</Label>\r
          </div>\r
        </div>\r
        \r
        <div className="radio-story-theme-row">\r
          <div className="radio-story-field">\r
            <RadioButton name="theme-lg" value="unchecked" size="lg" />\r
            <Label>Large unchecked</Label>\r
          </div>\r
          <div className="radio-story-field">\r
            <RadioButton name="theme-lg" value="checked" size="lg" checked />\r
            <Label>Large checked</Label>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="radio-story-theme-info">\r
        <h4>Theme Variables Used:</h4>\r
        <div className="radio-story-theme-vars">\r
          <code>--color-accent</code>: Checked background and border<br />\r
          <code>--color-accent-hover</code>: Hover state colors<br />\r
          <code>--color-border</code>: Default border color<br />\r
          <code>--color-bg</code>: Background and inner dot color<br />\r
          <code>--color-panel</code>: Hover background<br />\r
          <code>--color-text-muted</code>: Disabled state color\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons that adapt to different themes. Use the theme switcher in the toolbar to see color changes.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="radio-story-comparison">\r
      <div className="radio-story-comparison-group">\r
        <h4>Small Size Group</h4>\r
        <div className="radio-story-field">\r
          <RadioButton name="size-sm" value="option1" size="sm" />\r
          <Label>Option 1</Label>\r
        </div>\r
        <div className="radio-story-field">\r
          <RadioButton name="size-sm" value="option2" size="sm" checked />\r
          <Label>Option 2 (Selected)</Label>\r
        </div>\r
        <div className="radio-story-field">\r
          <RadioButton name="size-sm" value="option3" size="sm" />\r
          <Label>Option 3</Label>\r
        </div>\r
      </div>\r
      \r
      <div className="radio-story-comparison-group">\r
        <h4>Base Size Group</h4>\r
        <div className="radio-story-field">\r
          <RadioButton name="size-base" value="option1" />\r
          <Label>Option 1</Label>\r
        </div>\r
        <div className="radio-story-field">\r
          <RadioButton name="size-base" value="option2" checked />\r
          <Label>Option 2 (Selected)</Label>\r
        </div>\r
        <div className="radio-story-field">\r
          <RadioButton name="size-base" value="option3" />\r
          <Label>Option 3</Label>\r
        </div>\r
      </div>\r
      \r
      <div className="radio-story-comparison-group">\r
        <h4>Large Size Group</h4>\r
        <div className="radio-story-field">\r
          <RadioButton name="size-lg" value="option1" size="lg" />\r
          <Label>Option 1</Label>\r
        </div>\r
        <div className="radio-story-field">\r
          <RadioButton name="size-lg" value="option2" size="lg" checked />\r
          <Label>Option 2 (Selected)</Label>\r
        </div>\r
        <div className="radio-story-field">\r
          <RadioButton name="size-lg" value="option3" size="lg" />\r
          <Label>Option 3</Label>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Side-by-side comparison of all radio button sizes in group context.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    checked: false,
    disabled: false,
    required: false,
    name: 'interactive-demo',
    value: 'demo-value'
  },
  render: args => <div className="radio-story-field">\r
      <RadioButton {...args} id="interactive-radio" />\r
      <Label htmlFor="interactive-radio">Interactive Radio Button</Label>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive story where you can modify all radio button properties using the controls panel.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};const G=["Default","SizeVariants","States","RadioGroups","FormIntegration","ControlledExample","AccessibilityDemo","ThemeShowcase","SizeComparison","Interactive"];export{p as AccessibilityDemo,u as ControlledExample,l as Default,m as FormIntegration,b as Interactive,c as RadioGroups,v as SizeComparison,t as SizeVariants,n as States,h as ThemeShowcase,G as __namedExportsOrder,U as default};
