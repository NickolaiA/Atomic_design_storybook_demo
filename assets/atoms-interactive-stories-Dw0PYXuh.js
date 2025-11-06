import{j as e,R as x,r as $e}from"./react-1-DYTeAnAh.js";import{d,I as Ue,C as t,L as r,R as i,h as c,i as a,j as o}from"./atoms-components-B6eh4y83.js";import{T as We}from"./molecules-oQuZk1qF.js";import{fn as b}from"./storybook-instrumenter-15-DkasNAnx.js";const Ge={title:"Atoms/Button",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","ghost"],description:"Button variant style"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size"},disabled:{control:"boolean",description:"Whether the button is disabled"},children:{control:"text",description:"Button content"}},args:{children:"Click me"}},g={args:{variant:"primary"}},f={args:{variant:"secondary"}},j={args:{variant:"ghost"}},w={args:{size:"sm",children:"Small Button"}},N={args:{size:"md",children:"Medium Button"}},S={args:{size:"lg",children:"Large Button"}},k={args:{disabled:!0,children:"Disabled Button"}},L={args:{variant:"primary",disabled:!0,children:"Disabled Primary"}},C={args:{variant:"secondary",disabled:!0,children:"Disabled Secondary"}},z={args:{children:e.jsxs("span",{className:"button-with-icon",children:[e.jsx(Ue,{name:"search",size:16}),"Search",e.jsx("style",{children:`
          .button-with-icon {
            display: flex;
            align-items: center;
            gap: 8px;
          }
        `})]})}},T={args:{children:e.jsx(Ue,{name:"user",size:16}),"aria-label":"User profile"}},D={args:{children:"This is a button with very long text content"}},B={render:()=>e.jsxs("div",{className:"button-showcase",children:[e.jsxs("div",{className:"button-group",children:[e.jsx("h3",{children:"Primary"}),e.jsx(d,{variant:"primary",size:"sm",children:"Small"}),e.jsx(d,{variant:"primary",size:"md",children:"Medium"}),e.jsx(d,{variant:"primary",size:"lg",children:"Large"})]}),e.jsxs("div",{className:"button-group",children:[e.jsx("h3",{children:"Secondary"}),e.jsx(d,{variant:"secondary",size:"sm",children:"Small"}),e.jsx(d,{variant:"secondary",size:"md",children:"Medium"}),e.jsx(d,{variant:"secondary",size:"lg",children:"Large"})]}),e.jsxs("div",{className:"button-group",children:[e.jsx("h3",{children:"Ghost"}),e.jsx(d,{variant:"ghost",size:"sm",children:"Small"}),e.jsx(d,{variant:"ghost",size:"md",children:"Medium"}),e.jsx(d,{variant:"ghost",size:"lg",children:"Large"})]}),e.jsxs("div",{className:"button-group",children:[e.jsx("h3",{children:"Disabled"}),e.jsx(d,{variant:"primary",disabled:!0,children:"Primary"}),e.jsx(d,{variant:"secondary",disabled:!0,children:"Secondary"}),e.jsx(d,{variant:"ghost",disabled:!0,children:"Ghost"})]}),e.jsx("style",{children:`
        .button-showcase {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 16px;
        }
        .button-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .button-group h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text);
        }
        .button-group > button {
          align-self: flex-start;
        }
      `})]})},F={render:s=>{const n=()=>{alert("Button clicked!")};return e.jsxs("div",{className:"interactive-demo",children:[e.jsx(d,{...s,onClick:n}),e.jsx("p",{children:"Click the button to see an alert"}),e.jsx("style",{children:`
          .interactive-demo {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
          .interactive-demo p {
            margin: 0;
            font-size: 14px;
            color: var(--color-text);
            opacity: 0.7;
          }
        `})]})},args:{variant:"primary",children:"Click me!"}},R={render:()=>e.jsxs("div",{className:"button-group-demo",children:[e.jsxs("div",{className:"button-row",children:[e.jsx(d,{variant:"primary",children:"Save"}),e.jsx(d,{variant:"secondary",children:"Cancel"})]}),e.jsxs("div",{className:"button-row",children:[e.jsx(d,{variant:"ghost",size:"sm",children:e.jsx(Ue,{name:"home",size:14})}),e.jsx(d,{variant:"ghost",size:"sm",children:e.jsx(Ue,{name:"search",size:14})}),e.jsx(d,{variant:"ghost",size:"sm",children:e.jsx(Ue,{name:"user",size:14})})]}),e.jsx("style",{children:`
        .button-group-demo {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .button-row {
          display: flex;
          gap: 8px;
        }
      `})]})},A={render:()=>e.jsxs("div",{className:"theme-showcase-demo",children:[e.jsxs("div",{className:"theme-header",children:[e.jsx("h3",{children:"Button Theme Showcase"}),e.jsx(We,{variant:"select"})]}),e.jsxs("div",{className:"showcase-grid",children:[e.jsxs("div",{className:"showcase-section",children:[e.jsx("h4",{children:"Primary Buttons"}),e.jsxs("div",{className:"button-row",children:[e.jsx(d,{variant:"primary",size:"sm",children:"Small"}),e.jsx(d,{variant:"primary",size:"md",children:"Medium"}),e.jsx(d,{variant:"primary",size:"lg",children:"Large"})]})]}),e.jsxs("div",{className:"showcase-section",children:[e.jsx("h4",{children:"Secondary Buttons"}),e.jsxs("div",{className:"button-row",children:[e.jsx(d,{variant:"secondary",size:"sm",children:"Small"}),e.jsx(d,{variant:"secondary",size:"md",children:"Medium"}),e.jsx(d,{variant:"secondary",size:"lg",children:"Large"})]})]}),e.jsxs("div",{className:"showcase-section",children:[e.jsx("h4",{children:"Ghost Buttons"}),e.jsxs("div",{className:"button-row",children:[e.jsx(d,{variant:"ghost",size:"sm",children:"Small"}),e.jsx(d,{variant:"ghost",size:"md",children:"Medium"}),e.jsx(d,{variant:"ghost",size:"lg",children:"Large"})]})]}),e.jsxs("div",{className:"showcase-section",children:[e.jsx("h4",{children:"Disabled States"}),e.jsxs("div",{className:"button-row",children:[e.jsx(d,{variant:"primary",disabled:!0,children:"Primary"}),e.jsx(d,{variant:"secondary",disabled:!0,children:"Secondary"}),e.jsx(d,{variant:"ghost",disabled:!0,children:"Ghost"})]})]})]}),e.jsx("style",{children:`
        .theme-showcase-demo {
          padding: 20px;
          background: var(--color-bg);
          color: var(--color-text);
          border-radius: var(--radius);
          border: 1px solid var(--color-border);
          max-width: 600px;
        }
        .theme-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--color-border);
        }
        .theme-header h3 {
          margin: 0;
          color: var(--color-text);
          font-size: 18px;
        }
        .showcase-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .showcase-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .showcase-section h4 {
          margin: 0;
          color: var(--color-text-secondary);
          font-size: 14px;
          font-weight: 600;
        }
        .button-row {
          display: flex;
          gap: 8px;
        }
      `})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: "Small Button"
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    children: "Medium Button"
  }
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: "Large Button"
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled Button"
  }
}`,...k.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    disabled: true,
    children: "Disabled Primary"
  }
}`,...L.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    disabled: true,
    children: "Disabled Secondary"
  }
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    children: <span className="button-with-icon">\r
        <Icon name="search" size={16} />\r
        Search\r
        <style>{\`
          .button-with-icon {
            display: flex;
            align-items: center;
            gap: 8px;
          }
        \`}</style>\r
      </span>
  }
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Icon name="user" size={16} />,
    'aria-label': 'User profile'
  }
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: "This is a button with very long text content"
  }
}`,...D.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div className="button-showcase">\r
      <div className="button-group">\r
        <h3>Primary</h3>\r
        <Button variant="primary" size="sm">Small</Button>\r
        <Button variant="primary" size="md">Medium</Button>\r
        <Button variant="primary" size="lg">Large</Button>\r
      </div>\r
      \r
      <div className="button-group">\r
        <h3>Secondary</h3>\r
        <Button variant="secondary" size="sm">Small</Button>\r
        <Button variant="secondary" size="md">Medium</Button>\r
        <Button variant="secondary" size="lg">Large</Button>\r
      </div>\r
      \r
      <div className="button-group">\r
        <h3>Ghost</h3>\r
        <Button variant="ghost" size="sm">Small</Button>\r
        <Button variant="ghost" size="md">Medium</Button>\r
        <Button variant="ghost" size="lg">Large</Button>\r
      </div>\r
      \r
      <div className="button-group">\r
        <h3>Disabled</h3>\r
        <Button variant="primary" disabled>Primary</Button>\r
        <Button variant="secondary" disabled>Secondary</Button>\r
        <Button variant="ghost" disabled>Ghost</Button>\r
      </div>\r
      \r
      <style>{\`
        .button-showcase {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 16px;
        }
        .button-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .button-group h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text);
        }
        .button-group > button {
          align-self: flex-start;
        }
      \`}</style>\r
    </div>
}`,...B.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const handleClick = () => {
      alert('Button clicked!');
    };
    return <div className="interactive-demo">\r
        <Button {...args} onClick={handleClick} />\r
        <p>Click the button to see an alert</p>\r
        <style>{\`
          .interactive-demo {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
          .interactive-demo p {
            margin: 0;
            font-size: 14px;
            color: var(--color-text);
            opacity: 0.7;
          }
        \`}</style>\r
      </div>;
  },
  args: {
    variant: "primary",
    children: "Click me!"
  }
}`,...F.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div className="button-group-demo">\r
      <div className="button-row">\r
        <Button variant="primary">Save</Button>\r
        <Button variant="secondary">Cancel</Button>\r
      </div>\r
      \r
      <div className="button-row">\r
        <Button variant="ghost" size="sm">\r
          <Icon name="home" size={14} />\r
        </Button>\r
        <Button variant="ghost" size="sm">\r
          <Icon name="search" size={14} />\r
        </Button>\r
        <Button variant="ghost" size="sm">\r
          <Icon name="user" size={14} />\r
        </Button>\r
      </div>\r
      \r
      <style>{\`
        .button-group-demo {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .button-row {
          display: flex;
          gap: 8px;
        }
      \`}</style>\r
    </div>
}`,...R.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="theme-showcase-demo">\r
      <div className="theme-header">\r
        <h3>Button Theme Showcase</h3>\r
        <ThemeSwitcher variant="select" />\r
      </div>\r
      \r
      <div className="showcase-grid">\r
        <div className="showcase-section">\r
          <h4>Primary Buttons</h4>\r
          <div className="button-row">\r
            <Button variant="primary" size="sm">Small</Button>\r
            <Button variant="primary" size="md">Medium</Button>\r
            <Button variant="primary" size="lg">Large</Button>\r
          </div>\r
        </div>\r
        \r
        <div className="showcase-section">\r
          <h4>Secondary Buttons</h4>\r
          <div className="button-row">\r
            <Button variant="secondary" size="sm">Small</Button>\r
            <Button variant="secondary" size="md">Medium</Button>\r
            <Button variant="secondary" size="lg">Large</Button>\r
          </div>\r
        </div>\r
        \r
        <div className="showcase-section">\r
          <h4>Ghost Buttons</h4>\r
          <div className="button-row">\r
            <Button variant="ghost" size="sm">Small</Button>\r
            <Button variant="ghost" size="md">Medium</Button>\r
            <Button variant="ghost" size="lg">Large</Button>\r
          </div>\r
        </div>\r
        \r
        <div className="showcase-section">\r
          <h4>Disabled States</h4>\r
          <div className="button-row">\r
            <Button variant="primary" disabled>Primary</Button>\r
            <Button variant="secondary" disabled>Secondary</Button>\r
            <Button variant="ghost" disabled>Ghost</Button>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <style>{\`
        .theme-showcase-demo {
          padding: 20px;
          background: var(--color-bg);
          color: var(--color-text);
          border-radius: var(--radius);
          border: 1px solid var(--color-border);
          max-width: 600px;
        }
        .theme-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--color-border);
        }
        .theme-header h3 {
          margin: 0;
          color: var(--color-text);
          font-size: 18px;
        }
        .showcase-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .showcase-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .showcase-section h4 {
          margin: 0;
          color: var(--color-text-secondary);
          font-size: 14px;
          font-weight: 600;
        }
        .button-row {
          display: flex;
          gap: 8px;
        }
      \`}</style>\r
    </div>
}`,...A.parameters?.docs?.source}}};const He=["Primary","Secondary","Ghost","Small","Medium","Large","Disabled","DisabledPrimary","DisabledSecondary","WithIcon","IconOnly","LongText","AllVariants","Interactive","ButtonGroup","ThemeShowcase"],yr=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:B,ButtonGroup:R,Disabled:k,DisabledPrimary:L,DisabledSecondary:C,Ghost:j,IconOnly:T,Interactive:F,Large:S,LongText:D,Medium:N,Primary:g,Secondary:f,Small:w,ThemeShowcase:A,WithIcon:z,__namedExportsOrder:He,default:Ge},Symbol.toStringTag,{value:"Module"})),Ke={title:"Atoms/Checkbox",component:t,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","base","lg"],description:"Size variant"},checked:{control:"boolean",description:"Checked state"},indeterminate:{control:"boolean",description:"Indeterminate state (overrides checked)"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field validation"},name:{control:"text",description:"Name attribute for form submission"},value:{control:"text",description:"Value attribute"},onChange:{action:"changed"},onClick:{action:"clicked"}},args:{onChange:b(),onClick:b()}},I={parameters:{docs:{description:{story:"Default checkbox in unchecked state with base size."}}}},O={render:()=>e.jsxs("div",{className:"checkbox-story-section",children:[e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(t,{size:"sm"}),e.jsx(r,{children:"Small Checkbox"})]}),e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(t,{size:"base"}),e.jsx(r,{children:"Base Checkbox (Default)"})]}),e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(t,{size:"lg"}),e.jsx(r,{children:"Large Checkbox"})]})]}),parameters:{docs:{description:{story:"Different size variants for various UI contexts."}}}},M={render:()=>e.jsxs("div",{className:"checkbox-story-section",children:[e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(t,{checked:!1}),e.jsx(r,{children:"Unchecked"})]}),e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(t,{checked:!0}),e.jsx(r,{children:"Checked"})]}),e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(t,{indeterminate:!0}),e.jsx(r,{children:"Indeterminate"})]}),e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(t,{disabled:!0}),e.jsx(r,{disabled:!0,children:"Disabled Unchecked"})]}),e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(t,{checked:!0,disabled:!0}),e.jsx(r,{disabled:!0,children:"Disabled Checked"})]}),e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(t,{indeterminate:!0,disabled:!0}),e.jsx(r,{disabled:!0,children:"Disabled Indeterminate"})]})]}),parameters:{docs:{description:{story:"All possible checkbox states including checked, unchecked, indeterminate, and disabled variations."}}}},Ye=()=>{const[s,n]=x.useState(!1),[l,h]=x.useState(!0),[m,v]=x.useState(!0);return e.jsxs("div",{className:"checkbox-story-form",children:[e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"terms",checked:s,onChange:u=>n(u.target.checked)}),e.jsx(r,{htmlFor:"terms",children:"I agree to the terms and conditions"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"newsletter",checked:l,onChange:u=>h(u.target.checked)}),e.jsx(r,{htmlFor:"newsletter",children:"Subscribe to newsletter"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"notifications",indeterminate:m,onChange:u=>{v(!1)}}),e.jsx(r,{htmlFor:"notifications",children:"Enable notifications (some selected)"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"disabled-option",disabled:!0}),e.jsx(r,{htmlFor:"disabled-option",disabled:!0,children:"Disabled option"})]})]})},q={render:()=>e.jsx(Ye,{}),parameters:{docs:{description:{story:"Checkboxes properly associated with labels using htmlFor. Click labels to toggle checkboxes."}}}},Je=()=>{const[s,n]=x.useState({email:!1,sms:!0,push:!1}),[l,h]=x.useState({privacy:!1,age:!1}),m=u=>Pe=>{n(_e=>({..._e,[u]:Pe.target.checked}))},v=u=>Pe=>{h(_e=>({..._e,[u]:Pe.target.checked}))};return e.jsxs("form",{className:"checkbox-story-form-demo",children:[e.jsxs("fieldset",{className:"checkbox-story-fieldset",children:[e.jsx("legend",{children:"User Preferences"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"email-pref",name:"preferences",value:"email",checked:s.email,onChange:m("email")}),e.jsx(r,{htmlFor:"email-pref",children:"Email notifications"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"sms-pref",name:"preferences",value:"sms",checked:s.sms,onChange:m("sms")}),e.jsx(r,{htmlFor:"sms-pref",children:"SMS notifications"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"push-pref",name:"preferences",value:"push",checked:s.push,onChange:m("push")}),e.jsx(r,{htmlFor:"push-pref",children:"Push notifications"})]})]}),e.jsxs("fieldset",{className:"checkbox-story-fieldset",children:[e.jsx("legend",{children:"Required Settings"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"privacy-policy",name:"required",value:"privacy",required:!0,checked:l.privacy,onChange:v("privacy")}),e.jsx(r,{htmlFor:"privacy-policy",required:!0,children:"Accept Privacy Policy"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"age-verification",name:"required",value:"age",required:!0,checked:l.age,onChange:v("age")}),e.jsx(r,{htmlFor:"age-verification",required:!0,children:"I am 18 years or older"})]})]})]})},E={render:()=>e.jsx(Je,{}),parameters:{docs:{description:{story:"Checkboxes in a complete form context with fieldsets, legends, and proper form submission attributes."}}}},U={render:()=>e.jsxs("div",{className:"checkbox-story-interactive",children:[e.jsxs("div",{className:"checkbox-story-section",children:[e.jsx("h4",{children:"Click Handlers"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"interactive-1",onChange:s=>console.log("Checkbox changed:",s.target.checked),onClick:s=>console.log("Checkbox clicked")}),e.jsx(r,{htmlFor:"interactive-1",children:"Check console for events"})]})]}),e.jsxs("div",{className:"checkbox-story-section",children:[e.jsx("h4",{children:"Controlled Component"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"controlled",checked:!0,onChange:s=>alert(`Would change to: ${s.target.checked}`)}),e.jsx(r,{htmlFor:"controlled",children:"Controlled checkbox (always checked)"})]})]})]}),parameters:{docs:{description:{story:"Interactive examples with event handlers. Check browser console for change events."}}}},V={render:()=>e.jsxs("div",{className:"checkbox-story-accessibility",children:[e.jsxs("div",{className:"checkbox-story-section",children:[e.jsx("h4",{children:"ARIA Labels"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"aria-example","aria-label":"Accept terms and conditions","aria-describedby":"terms-help"}),e.jsx("div",{id:"terms-help",className:"checkbox-story-help-text",children:"By checking this box, you agree to our terms of service."})]})]}),e.jsxs("div",{className:"checkbox-story-section",children:[e.jsx("h4",{children:"Keyboard Navigation"}),e.jsx("p",{className:"checkbox-story-instructions",children:"Use Tab to navigate between checkboxes, Space to toggle."}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"keyboard-1"}),e.jsx(r,{htmlFor:"keyboard-1",children:"First checkbox"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"keyboard-2"}),e.jsx(r,{htmlFor:"keyboard-2",children:"Second checkbox"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"keyboard-3",disabled:!0}),e.jsx(r,{htmlFor:"keyboard-3",disabled:!0,children:"Disabled (skipped)"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{id:"keyboard-4"}),e.jsx(r,{htmlFor:"keyboard-4",children:"Third checkbox"})]})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA labels, descriptions, and keyboard navigation."}}}},Qe=()=>{const[s,n]=x.useState({smallUnchecked:!1,smallChecked:!0,smallIndeterminate:!0,baseUnchecked:!1,baseChecked:!0,baseIndeterminate:!0,largeUnchecked:!1,largeChecked:!0,largeIndeterminate:!0}),l=m=>v=>{n(u=>({...u,[m]:v.target.checked}))},h=m=>v=>{n(u=>({...u,[m]:!1}))};return e.jsxs("div",{className:"checkbox-story-theme-demo",children:[e.jsxs("div",{className:"checkbox-story-theme-section",children:[e.jsx("h3",{children:"Theme Adaptive Checkboxes"}),e.jsxs("div",{className:"checkbox-story-theme-row",children:[e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{size:"sm",checked:s.smallUnchecked,onChange:l("smallUnchecked")}),e.jsx(r,{children:"Small interactive"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{size:"sm",checked:s.smallChecked,onChange:l("smallChecked")}),e.jsx(r,{children:"Small checked"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{size:"sm",indeterminate:s.smallIndeterminate,onChange:h("smallIndeterminate")}),e.jsx(r,{children:"Small indeterminate"})]})]}),e.jsxs("div",{className:"checkbox-story-theme-row",children:[e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{checked:s.baseUnchecked,onChange:l("baseUnchecked")}),e.jsx(r,{children:"Base interactive"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{checked:s.baseChecked,onChange:l("baseChecked")}),e.jsx(r,{children:"Base checked"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{indeterminate:s.baseIndeterminate,onChange:h("baseIndeterminate")}),e.jsx(r,{children:"Base indeterminate"})]})]}),e.jsxs("div",{className:"checkbox-story-theme-row",children:[e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{size:"lg",checked:s.largeUnchecked,onChange:l("largeUnchecked")}),e.jsx(r,{children:"Large interactive"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{size:"lg",checked:s.largeChecked,onChange:l("largeChecked")}),e.jsx(r,{children:"Large checked"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{size:"lg",indeterminate:s.largeIndeterminate,onChange:h("largeIndeterminate")}),e.jsx(r,{children:"Large indeterminate"})]})]})]}),e.jsxs("div",{className:"checkbox-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("div",{className:"checkbox-story-theme-vars",children:[e.jsx("code",{children:"--color-accent"}),": Checked/indeterminate background",e.jsx("br",{}),e.jsx("code",{children:"--color-accent-hover"}),": Hover state background",e.jsx("br",{}),e.jsx("code",{children:"--color-border"}),": Border color",e.jsx("br",{}),e.jsx("code",{children:"--color-bg"}),": Background color",e.jsx("br",{}),e.jsx("code",{children:"--color-panel"}),": Hover background",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Disabled state color"]})]})]})},P={render:()=>e.jsx(Qe,{}),parameters:{docs:{description:{story:"Checkboxes that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},Xe=()=>{const[s,n]=x.useState({smallUnchecked:!1,smallChecked:!0,smallIndeterminate:!0,baseUnchecked:!1,baseChecked:!0,baseIndeterminate:!0,largeUnchecked:!1,largeChecked:!0,largeIndeterminate:!0}),l=m=>v=>{n(u=>({...u,[m]:v.target.checked}))},h=m=>v=>{n(u=>({...u,[m]:!1}))};return e.jsx("div",{className:"checkbox-story-comprehensive",children:e.jsxs("div",{className:"checkbox-story-grid",children:[e.jsxs("div",{className:"checkbox-story-grid-section",children:[e.jsx("h4",{children:"Small Size"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{size:"sm",checked:s.smallUnchecked,onChange:l("smallUnchecked")}),e.jsx(r,{children:"Interactive"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{size:"sm",checked:s.smallChecked,onChange:l("smallChecked")}),e.jsx(r,{children:"Checked"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{size:"sm",indeterminate:s.smallIndeterminate,onChange:h("smallIndeterminate")}),e.jsx(r,{children:"Indeterminate"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{size:"sm",disabled:!0}),e.jsx(r,{disabled:!0,children:"Disabled"})]})]}),e.jsxs("div",{className:"checkbox-story-grid-section",children:[e.jsx("h4",{children:"Base Size"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{checked:s.baseUnchecked,onChange:l("baseUnchecked")}),e.jsx(r,{children:"Interactive"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{checked:s.baseChecked,onChange:l("baseChecked")}),e.jsx(r,{children:"Checked"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{indeterminate:s.baseIndeterminate,onChange:h("baseIndeterminate")}),e.jsx(r,{children:"Indeterminate"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{disabled:!0}),e.jsx(r,{disabled:!0,children:"Disabled"})]})]}),e.jsxs("div",{className:"checkbox-story-grid-section",children:[e.jsx("h4",{children:"Large Size"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{size:"lg",checked:s.largeUnchecked,onChange:l("largeUnchecked")}),e.jsx(r,{children:"Interactive"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{size:"lg",checked:s.largeChecked,onChange:l("largeChecked")}),e.jsx(r,{children:"Checked"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{size:"lg",indeterminate:s.largeIndeterminate,onChange:h("largeIndeterminate")}),e.jsx(r,{children:"Indeterminate"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{size:"lg",disabled:!0}),e.jsx(r,{disabled:!0,children:"Disabled"})]})]})]})})},_={render:()=>e.jsx(Xe,{}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of all checkbox size and state combinations."}}}},$={args:{size:"base",checked:!1,indeterminate:!1,disabled:!1,required:!1},render:s=>e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(t,{...s,id:"interactive-checkbox"}),e.jsx(r,{htmlFor:"interactive-checkbox",children:"Interactive Checkbox"})]}),parameters:{docs:{description:{story:"Interactive story where you can modify all checkbox properties using the controls panel."}}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default checkbox in unchecked state with base size.'
      }
    }
  }
}`,...I.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="checkbox-story-section">\r
      <div className="checkbox-story-row">\r
        <Checkbox size="sm" />\r
        <Label>Small Checkbox</Label>\r
      </div>\r
      <div className="checkbox-story-row">\r
        <Checkbox size="base" />\r
        <Label>Base Checkbox (Default)</Label>\r
      </div>\r
      <div className="checkbox-story-row">\r
        <Checkbox size="lg" />\r
        <Label>Large Checkbox</Label>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different size variants for various UI contexts.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="checkbox-story-section">\r
      <div className="checkbox-story-row">\r
        <Checkbox checked={false} />\r
        <Label>Unchecked</Label>\r
      </div>\r
      <div className="checkbox-story-row">\r
        <Checkbox checked={true} />\r
        <Label>Checked</Label>\r
      </div>\r
      <div className="checkbox-story-row">\r
        <Checkbox indeterminate={true} />\r
        <Label>Indeterminate</Label>\r
      </div>\r
      <div className="checkbox-story-row">\r
        <Checkbox disabled />\r
        <Label disabled>Disabled Unchecked</Label>\r
      </div>\r
      <div className="checkbox-story-row">\r
        <Checkbox checked disabled />\r
        <Label disabled>Disabled Checked</Label>\r
      </div>\r
      <div className="checkbox-story-row">\r
        <Checkbox indeterminate disabled />\r
        <Label disabled>Disabled Indeterminate</Label>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All possible checkbox states including checked, unchecked, indeterminate, and disabled variations.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCheckboxForm />,
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes properly associated with labels using htmlFor. Click labels to toggle checkboxes.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveFormDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes in a complete form context with fieldsets, legends, and proper form submission attributes.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div className="checkbox-story-interactive">\r
      <div className="checkbox-story-section">\r
        <h4>Click Handlers</h4>\r
        <div className="checkbox-story-field">\r
          <Checkbox id="interactive-1" onChange={e => console.log('Checkbox changed:', e.target.checked)} onClick={e => console.log('Checkbox clicked')} />\r
          <Label htmlFor="interactive-1">Check console for events</Label>\r
        </div>\r
      </div>\r
      \r
      <div className="checkbox-story-section">\r
        <h4>Controlled Component</h4>\r
        <div className="checkbox-story-field">\r
          <Checkbox id="controlled" checked={true} onChange={e => alert(\`Would change to: \${e.target.checked}\`)} />\r
          <Label htmlFor="controlled">Controlled checkbox (always checked)</Label>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive examples with event handlers. Check browser console for change events.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div className="checkbox-story-accessibility">\r
      <div className="checkbox-story-section">\r
        <h4>ARIA Labels</h4>\r
        <div className="checkbox-story-field">\r
          <Checkbox id="aria-example" aria-label="Accept terms and conditions" aria-describedby="terms-help" />\r
          <div id="terms-help" className="checkbox-story-help-text">\r
            By checking this box, you agree to our terms of service.\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="checkbox-story-section">\r
        <h4>Keyboard Navigation</h4>\r
        <p className="checkbox-story-instructions">\r
          Use Tab to navigate between checkboxes, Space to toggle.\r
        </p>\r
        <div className="checkbox-story-field">\r
          <Checkbox id="keyboard-1" />\r
          <Label htmlFor="keyboard-1">First checkbox</Label>\r
        </div>\r
        <div className="checkbox-story-field">\r
          <Checkbox id="keyboard-2" />\r
          <Label htmlFor="keyboard-2">Second checkbox</Label>\r
        </div>\r
        <div className="checkbox-story-field">\r
          <Checkbox id="keyboard-3" disabled />\r
          <Label htmlFor="keyboard-3" disabled>Disabled (skipped)</Label>\r
        </div>\r
        <div className="checkbox-story-field">\r
          <Checkbox id="keyboard-4" />\r
          <Label htmlFor="keyboard-4">Third checkbox</Label>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including ARIA labels, descriptions, and keyboard navigation.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeShowcaseDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes that adapt to different themes. Use the theme switcher in the toolbar to see color changes.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <AllCombinationsDemo />,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of all checkbox size and state combinations.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    checked: false,
    indeterminate: false,
    disabled: false,
    required: false
  },
  render: args => <div className="checkbox-story-field">\r
      <Checkbox {...args} id="interactive-checkbox" />\r
      <Label htmlFor="interactive-checkbox">Interactive Checkbox</Label>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive story where you can modify all checkbox properties using the controls panel.'
      }
    }
  }
}`,...$.parameters?.docs?.source}}};const Ze=["Default","SizeVariants","States","WithLabels","FormIntegration","InteractiveExamples","AccessibilityDemo","ThemeShowcase","AllCombinations","Interactive"],gr=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDemo:V,AllCombinations:_,Default:I,FormIntegration:E,Interactive:$,InteractiveExamples:U,SizeVariants:O,States:M,ThemeShowcase:P,WithLabels:q,__namedExportsOrder:Ze,default:Ke},Symbol.toStringTag,{value:"Module"})),er={title:"Atoms/RadioButton",component:i,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","base","lg"],description:"Size variant"},checked:{control:"boolean",description:"Checked state"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field validation"},name:{control:"text",description:"Name attribute for radio group (required)"},value:{control:"text",description:"Value attribute"},onChange:{action:"changed"},onClick:{action:"clicked"}},args:{onChange:b(),onClick:b(),name:"example",value:"option"}},W={parameters:{docs:{description:{story:"Default radio button in unchecked state with base size."}}}},G={render:()=>e.jsxs("div",{className:"radio-story-section",children:[e.jsxs("div",{className:"radio-story-row",children:[e.jsx(i,{name:"size-demo",value:"sm",size:"sm"}),e.jsx(r,{children:"Small Radio Button"})]}),e.jsxs("div",{className:"radio-story-row",children:[e.jsx(i,{name:"size-demo",value:"base",size:"base"}),e.jsx(r,{children:"Base Radio Button (Default)"})]}),e.jsxs("div",{className:"radio-story-row",children:[e.jsx(i,{name:"size-demo",value:"lg",size:"lg"}),e.jsx(r,{children:"Large Radio Button"})]})]}),parameters:{docs:{description:{story:"Different size variants for various UI contexts."}}}},H={render:()=>e.jsxs("div",{className:"radio-story-section",children:[e.jsxs("div",{className:"radio-story-row",children:[e.jsx(i,{name:"states-unchecked",value:"unchecked",checked:!1}),e.jsx(r,{children:"Unchecked"})]}),e.jsxs("div",{className:"radio-story-row",children:[e.jsx(i,{name:"states-checked",value:"checked",checked:!0}),e.jsx(r,{children:"Checked"})]}),e.jsxs("div",{className:"radio-story-row",children:[e.jsx(i,{name:"states-disabled-unchecked",value:"disabled-unchecked",disabled:!0}),e.jsx(r,{disabled:!0,children:"Disabled Unchecked"})]}),e.jsxs("div",{className:"radio-story-row",children:[e.jsx(i,{name:"states-disabled-checked",value:"disabled-checked",checked:!0,disabled:!0}),e.jsx(r,{disabled:!0,children:"Disabled Checked"})]})]}),parameters:{docs:{description:{story:"All possible radio button states including checked, unchecked, and disabled variations."}}}},K={render:()=>e.jsxs("div",{className:"radio-story-groups",children:[e.jsxs("div",{className:"radio-story-group",children:[e.jsx("h4",{children:"Color Preference"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"color-red",name:"color",value:"red"}),e.jsx(r,{htmlFor:"color-red",children:"Red"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"color-blue",name:"color",value:"blue",checked:!0}),e.jsx(r,{htmlFor:"color-blue",children:"Blue (Selected)"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"color-green",name:"color",value:"green"}),e.jsx(r,{htmlFor:"color-green",children:"Green"})]})]}),e.jsxs("div",{className:"radio-story-group",children:[e.jsx("h4",{children:"Size Preference"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"size-small",name:"size",value:"small"}),e.jsx(r,{htmlFor:"size-small",children:"Small"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"size-medium",name:"size",value:"medium"}),e.jsx(r,{htmlFor:"size-medium",children:"Medium"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"size-large",name:"size",value:"large",checked:!0}),e.jsx(r,{htmlFor:"size-large",children:"Large (Selected)"})]})]})]}),parameters:{docs:{description:{story:"Radio buttons in separate groups. Each group allows only one selection."}}}},Y={render:()=>e.jsxs("form",{className:"radio-story-form-demo",children:[e.jsxs("fieldset",{className:"radio-story-fieldset",children:[e.jsx("legend",{children:"Subscription Plan"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"plan-free",name:"plan",value:"free"}),e.jsx(r,{htmlFor:"plan-free",children:"Free Plan"}),e.jsx("span",{className:"radio-story-description",children:"Basic features, limited usage"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"plan-pro",name:"plan",value:"pro",checked:!0}),e.jsx(r,{htmlFor:"plan-pro",children:"Pro Plan"}),e.jsx("span",{className:"radio-story-description",children:"All features, unlimited usage"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"plan-enterprise",name:"plan",value:"enterprise"}),e.jsx(r,{htmlFor:"plan-enterprise",children:"Enterprise Plan"}),e.jsx("span",{className:"radio-story-description",children:"Custom solutions, priority support"})]})]}),e.jsxs("fieldset",{className:"radio-story-fieldset",children:[e.jsx("legend",{children:"Billing Frequency"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"billing-monthly",name:"billing",value:"monthly",required:!0}),e.jsx(r,{htmlFor:"billing-monthly",required:!0,children:"Monthly"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"billing-yearly",name:"billing",value:"yearly",required:!0}),e.jsx(r,{htmlFor:"billing-yearly",required:!0,children:"Yearly (Save 20%)"})]})]})]}),parameters:{docs:{description:{story:"Radio buttons in a complete form context with fieldsets, legends, and proper form submission attributes."}}}},rr=()=>{const[s,n]=$e.useState("option2");return e.jsxs("div",{className:"radio-story-controlled",children:[e.jsx("h4",{children:"Controlled Radio Group"}),e.jsxs("p",{children:["Current selection: ",e.jsx("strong",{children:s})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"controlled-1",name:"controlled",value:"option1",checked:s==="option1",onChange:l=>n(l.target.value)}),e.jsx(r,{htmlFor:"controlled-1",children:"Option 1"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"controlled-2",name:"controlled",value:"option2",checked:s==="option2",onChange:l=>n(l.target.value)}),e.jsx(r,{htmlFor:"controlled-2",children:"Option 2"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"controlled-3",name:"controlled",value:"option3",checked:s==="option3",onChange:l=>n(l.target.value)}),e.jsx(r,{htmlFor:"controlled-3",children:"Option 3"})]}),e.jsx("button",{type:"button",onClick:()=>n("option1"),children:"Reset to Option 1"})]})},J={render:()=>e.jsx(rr,{}),parameters:{docs:{description:{story:"Controlled radio group with state management. Shows current selection and programmatic control."}}}},Q={render:()=>e.jsxs("div",{className:"radio-story-accessibility",children:[e.jsxs("div",{className:"radio-story-section",children:[e.jsx("h4",{children:"ARIA Labels and Descriptions"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"aria-example-1",name:"aria-demo",value:"option1","aria-label":"First accessibility option","aria-describedby":"option1-help"}),e.jsx(r,{htmlFor:"aria-example-1",children:"Option with ARIA support"}),e.jsx("div",{id:"option1-help",className:"radio-story-help-text",children:"This option includes comprehensive ARIA labeling."})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"aria-example-2",name:"aria-demo",value:"option2","aria-labelledby":"option2-label option2-description"}),e.jsx(r,{id:"option2-label",htmlFor:"aria-example-2",children:"Complex option"}),e.jsx("div",{id:"option2-description",className:"radio-story-help-text",children:"Uses aria-labelledby to reference multiple elements."})]})]}),e.jsxs("div",{className:"radio-story-section",children:[e.jsx("h4",{children:"Keyboard Navigation"}),e.jsx("p",{className:"radio-story-instructions",children:"Use Tab to enter/exit radio groups, Arrow Keys to select within group, Space to select."}),e.jsxs("fieldset",{className:"radio-story-keyboard-demo",children:[e.jsx("legend",{children:"Navigation Demo Group"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"keyboard-1",name:"keyboard",value:"first"}),e.jsx(r,{htmlFor:"keyboard-1",children:"First Option"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"keyboard-2",name:"keyboard",value:"second"}),e.jsx(r,{htmlFor:"keyboard-2",children:"Second Option"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"keyboard-3",name:"keyboard",value:"third"}),e.jsx(r,{htmlFor:"keyboard-3",children:"Third Option"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{id:"keyboard-4",name:"keyboard",value:"fourth",disabled:!0}),e.jsx(r,{htmlFor:"keyboard-4",disabled:!0,children:"Disabled (Skipped)"})]})]})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA labels, descriptions, and keyboard navigation demonstration."}}}},X={render:()=>e.jsxs("div",{className:"radio-story-theme-demo",children:[e.jsxs("div",{className:"radio-story-theme-section",children:[e.jsx("h3",{children:"Theme Adaptive Radio Buttons"}),e.jsxs("div",{className:"radio-story-theme-row",children:[e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{name:"theme-sm",value:"unchecked",size:"sm"}),e.jsx(r,{children:"Small unchecked"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{name:"theme-sm",value:"checked",size:"sm",checked:!0}),e.jsx(r,{children:"Small checked"})]})]}),e.jsxs("div",{className:"radio-story-theme-row",children:[e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{name:"theme-base",value:"unchecked"}),e.jsx(r,{children:"Base unchecked"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{name:"theme-base",value:"checked",checked:!0}),e.jsx(r,{children:"Base checked"})]})]}),e.jsxs("div",{className:"radio-story-theme-row",children:[e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{name:"theme-lg",value:"unchecked",size:"lg"}),e.jsx(r,{children:"Large unchecked"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{name:"theme-lg",value:"checked",size:"lg",checked:!0}),e.jsx(r,{children:"Large checked"})]})]})]}),e.jsxs("div",{className:"radio-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("div",{className:"radio-story-theme-vars",children:[e.jsx("code",{children:"--color-accent"}),": Checked background and border",e.jsx("br",{}),e.jsx("code",{children:"--color-accent-hover"}),": Hover state colors",e.jsx("br",{}),e.jsx("code",{children:"--color-border"}),": Default border color",e.jsx("br",{}),e.jsx("code",{children:"--color-bg"}),": Background and inner dot color",e.jsx("br",{}),e.jsx("code",{children:"--color-panel"}),": Hover background",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Disabled state color"]})]})]}),parameters:{docs:{description:{story:"Radio buttons that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},Z={render:()=>e.jsxs("div",{className:"radio-story-comparison",children:[e.jsxs("div",{className:"radio-story-comparison-group",children:[e.jsx("h4",{children:"Small Size Group"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{name:"size-sm",value:"option1",size:"sm"}),e.jsx(r,{children:"Option 1"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{name:"size-sm",value:"option2",size:"sm",checked:!0}),e.jsx(r,{children:"Option 2 (Selected)"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{name:"size-sm",value:"option3",size:"sm"}),e.jsx(r,{children:"Option 3"})]})]}),e.jsxs("div",{className:"radio-story-comparison-group",children:[e.jsx("h4",{children:"Base Size Group"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{name:"size-base",value:"option1"}),e.jsx(r,{children:"Option 1"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{name:"size-base",value:"option2",checked:!0}),e.jsx(r,{children:"Option 2 (Selected)"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{name:"size-base",value:"option3"}),e.jsx(r,{children:"Option 3"})]})]}),e.jsxs("div",{className:"radio-story-comparison-group",children:[e.jsx("h4",{children:"Large Size Group"}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{name:"size-lg",value:"option1",size:"lg"}),e.jsx(r,{children:"Option 1"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{name:"size-lg",value:"option2",size:"lg",checked:!0}),e.jsx(r,{children:"Option 2 (Selected)"})]}),e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{name:"size-lg",value:"option3",size:"lg"}),e.jsx(r,{children:"Option 3"})]})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:"Side-by-side comparison of all radio button sizes in group context."}}}},ee={args:{size:"base",checked:!1,disabled:!1,required:!1,name:"interactive-demo",value:"demo-value"},render:s=>e.jsxs("div",{className:"radio-story-field",children:[e.jsx(i,{...s,id:"interactive-radio"}),e.jsx(r,{htmlFor:"interactive-radio",children:"Interactive Radio Button"})]}),parameters:{docs:{description:{story:"Interactive story where you can modify all radio button properties using the controls panel."}}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default radio button in unchecked state with base size.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledRadioGroup />,
  parameters: {
    docs: {
      description: {
        story: 'Controlled radio group with state management. Shows current selection and programmatic control.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
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
}`,...ee.parameters?.docs?.source}}};const sr=["Default","SizeVariants","States","RadioGroups","FormIntegration","ControlledExample","AccessibilityDemo","ThemeShowcase","SizeComparison","Interactive"],fr=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDemo:Q,ControlledExample:J,Default:W,FormIntegration:Y,Interactive:ee,RadioGroups:K,SizeComparison:Z,SizeVariants:G,States:H,ThemeShowcase:X,__namedExportsOrder:sr,default:er},Symbol.toStringTag,{value:"Module"})),p=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],y=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"},{value:"fr",label:"France"},{value:"de",label:"Germany"},{value:"jp",label:"Japan"},{value:"au",label:"Australia"},{value:"br",label:"Brazil"},{value:"in",label:"India"},{value:"cn",label:"China"}],Ve=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"},{value:"pending",label:"Pending"},{value:"suspended",label:"Suspended",disabled:!0},{value:"archived",label:"Archived"}],ar={title:"Atoms/Select",component:c,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","base","lg"],description:"Size variant"},options:{control:"object",description:"Array of options"},value:{control:"text",description:"Selected value"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field validation"},placeholder:{control:"text",description:"Placeholder text"},searchable:{control:"boolean",description:"Enable search functionality"},multiple:{control:"boolean",description:"Allow multiple selections"},maxSelections:{control:"number",description:"Maximum selections (for multiple)"},onChange:{action:"changed"},onFocus:{action:"focused"},onBlur:{action:"blurred"}},args:{onChange:b(),onFocus:b(),onBlur:b(),options:p}},re={args:{placeholder:"Select a fruit..."},parameters:{docs:{description:{story:"Default select dropdown with basic options."}}}},se={render:()=>e.jsxs("div",{className:"select-story-section",children:[e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Small Select"}),e.jsx(c,{size:"sm",options:p,placeholder:"Small select..."})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Base Select (Default)"}),e.jsx(c,{size:"base",options:p,placeholder:"Base select..."})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Large Select"}),e.jsx(c,{size:"lg",options:p,placeholder:"Large select..."})]})})]}),parameters:{docs:{description:{story:"Different size variants for various UI contexts."}}}},ae={render:()=>e.jsxs("div",{className:"select-story-form",children:[e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{htmlFor:"fruit-select",children:"Choose your favorite fruit"}),e.jsx(c,{id:"fruit-select",options:p,placeholder:"Select a fruit..."})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{htmlFor:"country-select",children:"Select your country"}),e.jsx(c,{id:"country-select",options:y,placeholder:"Choose country...",value:"us"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{htmlFor:"status-select",required:!0,children:"Account Status"}),e.jsx(c,{id:"status-select",options:Ve,placeholder:"Select status...",required:!0})]})]}),parameters:{docs:{description:{story:"Select components properly associated with labels using htmlFor."}}}},te={render:()=>e.jsx("div",{className:"select-story-section",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{htmlFor:"searchable-select",children:"Searchable Country Select"}),e.jsx(c,{id:"searchable-select",options:y,placeholder:"Search and select country...",searchable:!0,searchPlaceholder:"Type to search countries..."})]})}),parameters:{docs:{description:{story:"Select with search functionality to filter through options."}}}},tr=()=>{const[s,n]=x.useState(["apple","cherry"]),l=h=>{const m=h.target.value.split(",").filter(Boolean);n(m)};return e.jsx("div",{className:"select-story-section",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{htmlFor:"multiple-select",children:"Select Multiple Fruits"}),e.jsx(c,{id:"multiple-select",options:p,placeholder:"Select fruits...",multiple:!0,value:s.join(","),onChange:l}),e.jsxs("div",{className:"select-story-selected-values",children:[e.jsx("strong",{children:"Selected:"})," ",s.length>0?s.join(", "):"None"]})]})})},ie={render:()=>e.jsx(tr,{}),parameters:{docs:{description:{story:"Select component with multiple selection support. Shows checkboxes and selected count."}}}},ir=()=>{const[s,n]=x.useState(["us","ca","uk"]),l=h=>{const m=h.target.value.split(",").filter(Boolean);n(m)};return e.jsx("div",{className:"select-story-section",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{htmlFor:"searchable-multiple",children:"Select Countries (Max 5)"}),e.jsx(c,{id:"searchable-multiple",options:y,placeholder:"Search and select countries...",multiple:!0,searchable:!0,maxSelections:5,value:s.join(","),onChange:l,searchPlaceholder:"Type to search countries..."}),e.jsxs("div",{className:"select-story-selected-values",children:[e.jsxs("strong",{children:["Selected (",s.length,"/5):"]})," ",s.length>0?s.map(h=>y.find(m=>m.value===h)?.label).join(", "):"None"]})]})})},oe={render:()=>e.jsx(ir,{}),parameters:{docs:{description:{story:"Advanced select with both search and multiple selection features, including selection limit."}}}},le={render:()=>e.jsxs("div",{className:"select-story-section",children:[e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Disabled Select"}),e.jsx(c,{options:p,placeholder:"Disabled select...",disabled:!0})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Select with Disabled Options"}),e.jsx(c,{options:Ve,placeholder:"Some options disabled..."})]})}),e.jsx("div",{className:"select-story-row",children:e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Disabled with Value"}),e.jsx(c,{options:p,value:"banana",disabled:!0})]})})]}),parameters:{docs:{description:{story:"Select components in disabled states, both component-level and option-level."}}}},ce={render:()=>e.jsx("form",{className:"select-story-form-demo",children:e.jsxs("fieldset",{className:"select-story-fieldset",children:[e.jsx("legend",{children:"User Preferences"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{htmlFor:"language-select",required:!0,children:"Preferred Language"}),e.jsx(c,{id:"language-select",name:"language",options:[{value:"en",label:"English"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"de",label:"German"},{value:"zh",label:"Chinese"}],placeholder:"Select language...",required:!0,value:"en"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{htmlFor:"timezone-select",children:"Timezone"}),e.jsx(c,{id:"timezone-select",name:"timezone",options:[{value:"utc",label:"UTC"},{value:"est",label:"Eastern Time"},{value:"cst",label:"Central Time"},{value:"mst",label:"Mountain Time"},{value:"pst",label:"Pacific Time"}],placeholder:"Select timezone...",searchable:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{htmlFor:"interests-select",children:"Interests (Multiple)"}),e.jsx(c,{id:"interests-select",name:"interests",options:[{value:"tech",label:"Technology"},{value:"design",label:"Design"},{value:"business",label:"Business"},{value:"science",label:"Science"},{value:"sports",label:"Sports"},{value:"music",label:"Music"},{value:"art",label:"Art"}],placeholder:"Select interests...",multiple:!0,searchable:!0,maxSelections:3})]})]})}),parameters:{docs:{description:{story:"Select components in a complete form context with fieldsets, legends, and proper form submission attributes."}}}},de={render:()=>e.jsxs("div",{className:"select-story-accessibility",children:[e.jsxs("div",{className:"select-story-section",children:[e.jsx("h4",{children:"ARIA Labels and Descriptions"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(c,{id:"aria-select",options:p,placeholder:"Select with ARIA support...","aria-label":"Fruit selection with ARIA support","aria-describedby":"fruit-help"}),e.jsx("div",{id:"fruit-help",className:"select-story-help-text",children:"This select includes comprehensive ARIA labeling for screen readers."})]})]}),e.jsxs("div",{className:"select-story-section",children:[e.jsx("h4",{children:"Keyboard Navigation"}),e.jsx("p",{className:"select-story-instructions",children:"Use Tab to focus, Arrow Keys to navigate, Enter to select, Escape to close."}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{htmlFor:"keyboard-demo",children:"Keyboard Navigation Demo"}),e.jsx(c,{id:"keyboard-demo",options:y,placeholder:"Use keyboard to navigate...",searchable:!0})]})]}),e.jsxs("div",{className:"select-story-section",children:[e.jsx("h4",{children:"Screen Reader Announcements"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{htmlFor:"screen-reader-demo",children:"Screen Reader Optimized"}),e.jsx(c,{id:"screen-reader-demo",options:Ve,placeholder:"Optimized for screen readers...","aria-describedby":"screen-reader-help"}),e.jsx("div",{id:"screen-reader-help",className:"select-story-help-text",children:"This select announces selection changes and state updates to screen readers."})]})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA labels, descriptions, and keyboard navigation."}}}},ne={render:()=>e.jsxs("div",{className:"select-story-theme-demo",children:[e.jsxs("div",{className:"select-story-theme-section",children:[e.jsx("h3",{children:"Theme Adaptive Select Components"}),e.jsxs("div",{className:"select-story-theme-row",children:[e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Small Size"}),e.jsx(c,{size:"sm",options:p,placeholder:"Small select...",value:"apple"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Base Size"}),e.jsx(c,{options:p,placeholder:"Base select...",value:"banana"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Large Size"}),e.jsx(c,{size:"lg",options:p,placeholder:"Large select...",value:"cherry"})]})]}),e.jsxs("div",{className:"select-story-theme-row",children:[e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Searchable"}),e.jsx(c,{options:y,placeholder:"Search countries...",searchable:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Multiple Selection"}),e.jsx(c,{options:p,placeholder:"Multiple fruits...",multiple:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Disabled State"}),e.jsx(c,{options:p,value:"date",disabled:!0})]})]})]}),e.jsxs("div",{className:"select-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("div",{className:"select-story-theme-vars",children:[e.jsx("code",{children:"--color-accent"}),": Border focus and selection background",e.jsx("br",{}),e.jsx("code",{children:"--color-accent-hover"}),": Hover state colors",e.jsx("br",{}),e.jsx("code",{children:"--color-border"}),": Default border color",e.jsx("br",{}),e.jsx("code",{children:"--color-bg"}),": Background color",e.jsx("br",{}),e.jsx("code",{children:"--color-panel"}),": Hover background",e.jsx("br",{}),e.jsx("code",{children:"--color-text-primary"}),": Main text color",e.jsx("br",{}),e.jsx("code",{children:"--color-text-secondary"}),": Arrow and secondary text",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Placeholder and disabled text"]})]})]}),parameters:{docs:{description:{story:"Select components that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},he={render:()=>e.jsx("div",{className:"select-story-comprehensive",children:e.jsxs("div",{className:"select-story-grid",children:[e.jsxs("div",{className:"select-story-grid-section",children:[e.jsx("h4",{children:"Basic Selects"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Simple Select"}),e.jsx(c,{options:p,placeholder:"Choose..."})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"With Value"}),e.jsx(c,{options:p,value:"banana"})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Required"}),e.jsx(c,{options:p,placeholder:"Required...",required:!0})]})]}),e.jsxs("div",{className:"select-story-grid-section",children:[e.jsx("h4",{children:"Advanced Features"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Searchable"}),e.jsx(c,{options:y,placeholder:"Search...",searchable:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Multiple"}),e.jsx(c,{options:p,placeholder:"Multiple...",multiple:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Search + Multiple"}),e.jsx(c,{options:y,placeholder:"Both...",searchable:!0,multiple:!0})]})]}),e.jsxs("div",{className:"select-story-grid-section",children:[e.jsx("h4",{children:"States"}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Disabled"}),e.jsx(c,{options:p,placeholder:"Disabled...",disabled:!0})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"With Disabled Options"}),e.jsx(c,{options:Ve,placeholder:"Some disabled..."})]}),e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{children:"Max Selections"}),e.jsx(c,{options:p,placeholder:"Max 2...",multiple:!0,maxSelections:2})]})]})]})}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of all select features and variations."}}}},or=()=>{const[s,n]=x.useState(""),l=h=>{n(h.target.value)};return e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{htmlFor:"controlled-select",children:"Controlled Select"}),e.jsx(c,{id:"controlled-select",options:p,value:s,onChange:l,placeholder:"Select a fruit..."}),e.jsxs("div",{className:"select-story-selected-values",children:[e.jsx("strong",{children:"Current Value:"})," ",s||"None"]})]})},me={render:()=>e.jsx(or,{}),parameters:{docs:{description:{story:"Controlled select component with external state management."}}}},ue={args:{size:"base",options:p,placeholder:"Interactive select...",disabled:!1,required:!1,searchable:!1,multiple:!1},render:s=>e.jsxs("div",{className:"select-story-field",children:[e.jsx(r,{htmlFor:"interactive-select",children:"Interactive Select"}),e.jsx(c,{...s,id:"interactive-select"})]}),parameters:{docs:{description:{story:"Interactive story where you can modify all select properties using the controls panel. Note: This is uncontrolled, so selections will work properly."}}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a fruit...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default select dropdown with basic options.'
      }
    }
  }
}`,...re.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  render: () => <div className="select-story-section">\r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Small Select</Label>\r
          <Select size="sm" options={basicOptions} placeholder="Small select..." />\r
        </div>\r
      </div>\r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Base Select (Default)</Label>\r
          <Select size="base" options={basicOptions} placeholder="Base select..." />\r
        </div>\r
      </div>\r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Large Select</Label>\r
          <Select size="lg" options={basicOptions} placeholder="Large select..." />\r
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
}`,...se.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  render: () => <div className="select-story-form">\r
      <div className="select-story-field">\r
        <Label htmlFor="fruit-select">Choose your favorite fruit</Label>\r
        <Select id="fruit-select" options={basicOptions} placeholder="Select a fruit..." />\r
      </div>\r
      \r
      <div className="select-story-field">\r
        <Label htmlFor="country-select">Select your country</Label>\r
        <Select id="country-select" options={countryOptions} placeholder="Choose country..." value="us" />\r
      </div>\r
      \r
      <div className="select-story-field">\r
        <Label htmlFor="status-select" required>Account Status</Label>\r
        <Select id="status-select" options={statusOptions} placeholder="Select status..." required />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Select components properly associated with labels using htmlFor.'
      }
    }
  }
}`,...ae.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: () => <div className="select-story-section">\r
      <div className="select-story-field">\r
        <Label htmlFor="searchable-select">Searchable Country Select</Label>\r
        <Select id="searchable-select" options={countryOptions} placeholder="Search and select country..." searchable searchPlaceholder="Type to search countries..." />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Select with search functionality to filter through options.'
      }
    }
  }
}`,...te.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  render: () => <MultipleSelectDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Select component with multiple selection support. Shows checkboxes and selected count.'
      }
    }
  }
}`,...ie.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  render: () => <SearchableMultipleDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Advanced select with both search and multiple selection features, including selection limit.'
      }
    }
  }
}`,...oe.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  render: () => <div className="select-story-section">\r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Disabled Select</Label>\r
          <Select options={basicOptions} placeholder="Disabled select..." disabled />\r
        </div>\r
      </div>\r
      \r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Select with Disabled Options</Label>\r
          <Select options={statusOptions} placeholder="Some options disabled..." />\r
        </div>\r
      </div>\r
      \r
      <div className="select-story-row">\r
        <div className="select-story-field">\r
          <Label>Disabled with Value</Label>\r
          <Select options={basicOptions} value="banana" disabled />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Select components in disabled states, both component-level and option-level.'
      }
    }
  }
}`,...le.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  render: () => <form className="select-story-form-demo">\r
      <fieldset className="select-story-fieldset">\r
        <legend>User Preferences</legend>\r
        \r
        <div className="select-story-field">\r
          <Label htmlFor="language-select" required>Preferred Language</Label>\r
          <Select id="language-select" name="language" options={[{
          value: 'en',
          label: 'English'
        }, {
          value: 'es',
          label: 'Spanish'
        }, {
          value: 'fr',
          label: 'French'
        }, {
          value: 'de',
          label: 'German'
        }, {
          value: 'zh',
          label: 'Chinese'
        }]} placeholder="Select language..." required value="en" />\r
        </div>\r
        \r
        <div className="select-story-field">\r
          <Label htmlFor="timezone-select">Timezone</Label>\r
          <Select id="timezone-select" name="timezone" options={[{
          value: 'utc',
          label: 'UTC'
        }, {
          value: 'est',
          label: 'Eastern Time'
        }, {
          value: 'cst',
          label: 'Central Time'
        }, {
          value: 'mst',
          label: 'Mountain Time'
        }, {
          value: 'pst',
          label: 'Pacific Time'
        }]} placeholder="Select timezone..." searchable />\r
        </div>\r
        \r
        <div className="select-story-field">\r
          <Label htmlFor="interests-select">Interests (Multiple)</Label>\r
          <Select id="interests-select" name="interests" options={[{
          value: 'tech',
          label: 'Technology'
        }, {
          value: 'design',
          label: 'Design'
        }, {
          value: 'business',
          label: 'Business'
        }, {
          value: 'science',
          label: 'Science'
        }, {
          value: 'sports',
          label: 'Sports'
        }, {
          value: 'music',
          label: 'Music'
        }, {
          value: 'art',
          label: 'Art'
        }]} placeholder="Select interests..." multiple searchable maxSelections={3} />\r
        </div>\r
      </fieldset>\r
    </form>,
  parameters: {
    docs: {
      description: {
        story: 'Select components in a complete form context with fieldsets, legends, and proper form submission attributes.'
      }
    }
  }
}`,...ce.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  render: () => <div className="select-story-accessibility">\r
      <div className="select-story-section">\r
        <h4>ARIA Labels and Descriptions</h4>\r
        <div className="select-story-field">\r
          <Select id="aria-select" options={basicOptions} placeholder="Select with ARIA support..." aria-label="Fruit selection with ARIA support" aria-describedby="fruit-help" />\r
          <div id="fruit-help" className="select-story-help-text">\r
            This select includes comprehensive ARIA labeling for screen readers.\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="select-story-section">\r
        <h4>Keyboard Navigation</h4>\r
        <p className="select-story-instructions">\r
          Use Tab to focus, Arrow Keys to navigate, Enter to select, Escape to close.\r
        </p>\r
        <div className="select-story-field">\r
          <Label htmlFor="keyboard-demo">Keyboard Navigation Demo</Label>\r
          <Select id="keyboard-demo" options={countryOptions} placeholder="Use keyboard to navigate..." searchable />\r
        </div>\r
      </div>\r
      \r
      <div className="select-story-section">\r
        <h4>Screen Reader Announcements</h4>\r
        <div className="select-story-field">\r
          <Label htmlFor="screen-reader-demo">Screen Reader Optimized</Label>\r
          <Select id="screen-reader-demo" options={statusOptions} placeholder="Optimized for screen readers..." aria-describedby="screen-reader-help" />\r
          <div id="screen-reader-help" className="select-story-help-text">\r
            This select announces selection changes and state updates to screen readers.\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including ARIA labels, descriptions, and keyboard navigation.'
      }
    }
  }
}`,...de.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  render: () => <div className="select-story-theme-demo">\r
      <div className="select-story-theme-section">\r
        <h3>Theme Adaptive Select Components</h3>\r
        \r
        <div className="select-story-theme-row">\r
          <div className="select-story-field">\r
            <Label>Small Size</Label>\r
            <Select size="sm" options={basicOptions} placeholder="Small select..." value="apple" />\r
          </div>\r
          \r
          <div className="select-story-field">\r
            <Label>Base Size</Label>\r
            <Select options={basicOptions} placeholder="Base select..." value="banana" />\r
          </div>\r
          \r
          <div className="select-story-field">\r
            <Label>Large Size</Label>\r
            <Select size="lg" options={basicOptions} placeholder="Large select..." value="cherry" />\r
          </div>\r
        </div>\r
        \r
        <div className="select-story-theme-row">\r
          <div className="select-story-field">\r
            <Label>Searchable</Label>\r
            <Select options={countryOptions} placeholder="Search countries..." searchable />\r
          </div>\r
          \r
          <div className="select-story-field">\r
            <Label>Multiple Selection</Label>\r
            <Select options={basicOptions} placeholder="Multiple fruits..." multiple />\r
          </div>\r
          \r
          <div className="select-story-field">\r
            <Label>Disabled State</Label>\r
            <Select options={basicOptions} value="date" disabled />\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="select-story-theme-info">\r
        <h4>Theme Variables Used:</h4>\r
        <div className="select-story-theme-vars">\r
          <code>--color-accent</code>: Border focus and selection background<br />\r
          <code>--color-accent-hover</code>: Hover state colors<br />\r
          <code>--color-border</code>: Default border color<br />\r
          <code>--color-bg</code>: Background color<br />\r
          <code>--color-panel</code>: Hover background<br />\r
          <code>--color-text-primary</code>: Main text color<br />\r
          <code>--color-text-secondary</code>: Arrow and secondary text<br />\r
          <code>--color-text-muted</code>: Placeholder and disabled text\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Select components that adapt to different themes. Use the theme switcher in the toolbar to see color changes.'
      }
    }
  }
}`,...ne.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  render: () => <div className="select-story-comprehensive">\r
      <div className="select-story-grid">\r
        <div className="select-story-grid-section">\r
          <h4>Basic Selects</h4>\r
          <div className="select-story-field">\r
            <Label>Simple Select</Label>\r
            <Select options={basicOptions} placeholder="Choose..." />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>With Value</Label>\r
            <Select options={basicOptions} value="banana" />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>Required</Label>\r
            <Select options={basicOptions} placeholder="Required..." required />\r
          </div>\r
        </div>\r
        \r
        <div className="select-story-grid-section">\r
          <h4>Advanced Features</h4>\r
          <div className="select-story-field">\r
            <Label>Searchable</Label>\r
            <Select options={countryOptions} placeholder="Search..." searchable />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>Multiple</Label>\r
            <Select options={basicOptions} placeholder="Multiple..." multiple />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>Search + Multiple</Label>\r
            <Select options={countryOptions} placeholder="Both..." searchable multiple />\r
          </div>\r
        </div>\r
        \r
        <div className="select-story-grid-section">\r
          <h4>States</h4>\r
          <div className="select-story-field">\r
            <Label>Disabled</Label>\r
            <Select options={basicOptions} placeholder="Disabled..." disabled />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>With Disabled Options</Label>\r
            <Select options={statusOptions} placeholder="Some disabled..." />\r
          </div>\r
          <div className="select-story-field">\r
            <Label>Max Selections</Label>\r
            <Select options={basicOptions} placeholder="Max 2..." multiple maxSelections={2} />\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of all select features and variations.'
      }
    }
  }
}`,...he.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledSelectDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Controlled select component with external state management.'
      }
    }
  }
}`,...me.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
    options: basicOptions,
    placeholder: 'Interactive select...',
    disabled: false,
    required: false,
    searchable: false,
    multiple: false
  },
  render: args => <div className="select-story-field">\r
      <Label htmlFor="interactive-select">Interactive Select</Label>\r
      <Select {...args} id="interactive-select" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive story where you can modify all select properties using the controls panel. Note: This is uncontrolled, so selections will work properly.'
      }
    }
  }
}`,...ue.parameters?.docs?.source}}};const lr=["Default","SizeVariants","WithLabels","SearchableSelect","MultipleSelection","SearchableMultiple","DisabledStates","FormIntegration","AccessibilityDemo","ThemeShowcase","AllFeatures","Controlled","Interactive"],jr=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDemo:de,AllFeatures:he,Controlled:me,Default:re,DisabledStates:le,FormIntegration:ce,Interactive:ue,MultipleSelection:ie,SearchableMultiple:oe,SearchableSelect:te,SizeVariants:se,ThemeShowcase:ne,WithLabels:ae,__namedExportsOrder:lr,default:ar},Symbol.toStringTag,{value:"Module"})),cr={title:"Atoms/Switch",component:a,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","base","lg"],description:"Size variant"},checked:{control:"boolean",description:"Whether the switch is checked"},defaultChecked:{control:"boolean",description:"Default checked state"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field validation"},label:{control:"text",description:"Label text for the switch"},description:{control:"text",description:"Description text"},onLabel:{control:"text",description:"Custom label for on state"},offLabel:{control:"text",description:"Custom label for off state"},showLabels:{control:"boolean",description:"Show state labels on the switch"},variant:{control:"select",options:["primary","success","warning","danger"],description:"Color variant"},onChange:{action:"changed"},onFocus:{action:"focused"},onBlur:{action:"blurred"}},args:{onChange:b(),onFocus:b(),onBlur:b()}},pe={args:{label:"Enable feature"},parameters:{docs:{description:{story:"Default switch with basic functionality."}}}},xe={render:()=>e.jsxs("div",{className:"switch-story-section",children:[e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{size:"sm",label:"Small Switch",defaultChecked:!0})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{size:"base",label:"Base Switch (Default)",defaultChecked:!0})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{size:"lg",label:"Large Switch",defaultChecked:!0})})]}),parameters:{docs:{description:{story:"Different size variants for various UI contexts."}}}},be={render:()=>e.jsxs("div",{className:"switch-story-section",children:[e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{variant:"primary",label:"Primary (Default)",description:"Uses the theme accent color",defaultChecked:!0})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{variant:"success",label:"Success",description:"Green color for positive actions",defaultChecked:!0})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{variant:"warning",label:"Warning",description:"Orange color for caution",defaultChecked:!0})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{variant:"danger",label:"Danger",description:"Red color for destructive actions",defaultChecked:!0})})]}),parameters:{docs:{description:{story:"Different color variants for semantic meaning."}}}},ve={render:()=>e.jsxs("div",{className:"switch-story-section",children:[e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{label:"Enable notifications",description:"Receive push notifications for important updates",defaultChecked:!0})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{label:"Dark mode",description:"Switch to dark theme for better night viewing",variant:"primary"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{label:"Auto-save",description:"Automatically save your work every few minutes",required:!0,variant:"success",defaultChecked:!0})})]}),parameters:{docs:{description:{story:"Switches with labels and descriptive text."}}}},ye={render:()=>e.jsxs("div",{className:"switch-story-section",children:[e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{showLabels:!0,label:"Basic On/Off Labels",description:"Default On/Off labels shown on the switch"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{showLabels:!0,onLabel:"YES",offLabel:"NO",label:"Custom Yes/No Labels",description:"Custom labels for different contexts",variant:"success"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{showLabels:!0,onLabel:"ON",offLabel:"OFF",label:"Power Switch",description:"Traditional power switch styling",variant:"danger",size:"lg"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{showLabels:!0,onLabel:"✓",offLabel:"✗",label:"Icon Labels",description:"Using icons as state labels",variant:"warning",size:"sm"})})]}),parameters:{docs:{description:{story:"Switches with state labels displayed on the thumb."}}}},dr=()=>{const[s,n]=x.useState(!1),[l,h]=x.useState(!0),[m,v]=x.useState(!1);return e.jsxs("div",{className:"switch-story-section",children:[e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{checked:s,onChange:u=>n(u.target.checked),label:"Feature Toggle",description:`Feature is currently ${s?"enabled":"disabled"}`,variant:"primary"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{checked:l,onChange:u=>h(u.target.checked),label:"Push Notifications",description:`You will ${l?"receive":"not receive"} notifications`,variant:"success"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{checked:m,onChange:u=>v(u.target.checked),label:"Dark Mode",description:`Currently using ${m?"dark":"light"} theme`,showLabels:!0,onLabel:"DARK",offLabel:"LIGHT",variant:"warning"})}),e.jsxs("div",{className:"switch-story-status",children:[e.jsx("h4",{children:"Current State:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Feature Toggle: ",e.jsx("strong",{children:s?"ON":"OFF"})]}),e.jsxs("li",{children:["Notifications: ",e.jsx("strong",{children:l?"ON":"OFF"})]}),e.jsxs("li",{children:["Dark Mode: ",e.jsx("strong",{children:m?"ON":"OFF"})]})]})]})]})},ge={render:()=>e.jsx(dr,{}),parameters:{docs:{description:{story:"Controlled switches with external state management and real-time status display."}}}},fe={render:()=>e.jsxs("div",{className:"switch-story-section",children:[e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{disabled:!0,label:"Disabled Off",description:"This switch is disabled in the off state"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{disabled:!0,defaultChecked:!0,label:"Disabled On",description:"This switch is disabled in the on state",variant:"success"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{disabled:!0,showLabels:!0,defaultChecked:!0,label:"Disabled with Labels",description:"Disabled switch with state labels",variant:"primary"})}),e.jsx("div",{className:"switch-story-row",children:e.jsx(a,{disabled:!0,label:"Disabled Required",description:"Even required fields can be disabled",required:!0,variant:"danger"})})]}),parameters:{docs:{description:{story:"Switches in disabled states with various configurations."}}}},je={render:()=>e.jsxs("form",{className:"switch-story-form-demo",children:[e.jsxs("fieldset",{className:"switch-story-fieldset",children:[e.jsx("legend",{children:"User Preferences"}),e.jsx(a,{name:"notifications",label:"Email Notifications",description:"Receive important updates via email",required:!0,variant:"primary",defaultChecked:!0}),e.jsx(a,{name:"marketing",label:"Marketing Communications",description:"Receive promotional offers and news",variant:"success"}),e.jsx(a,{name:"analytics",label:"Analytics & Performance",description:"Help us improve by sharing usage data",variant:"warning",defaultChecked:!0}),e.jsx(a,{name:"beta",label:"Beta Features",description:"Enable experimental features (may be unstable)",variant:"danger",showLabels:!0,onLabel:"BETA",offLabel:"STABLE"})]}),e.jsxs("fieldset",{className:"switch-story-fieldset",children:[e.jsx("legend",{children:"Accessibility Settings"}),e.jsx(a,{name:"highContrast",label:"High Contrast Mode",description:"Increase contrast for better visibility",variant:"primary"}),e.jsx(a,{name:"reducedMotion",label:"Reduce Motion",description:"Minimize animations and transitions",variant:"success"}),e.jsx(a,{name:"screenReader",label:"Screen Reader Optimizations",description:"Enhanced accessibility for screen readers",variant:"warning",showLabels:!0,onLabel:"ON",offLabel:"OFF"})]})]}),parameters:{docs:{description:{story:"Switches in a complete form context with proper form submission attributes."}}}},we={render:()=>e.jsxs("div",{className:"switch-story-accessibility",children:[e.jsxs("div",{className:"switch-story-section",children:[e.jsx("h4",{children:"ARIA Labels and Descriptions"}),e.jsx(a,{label:"Accessibility Enhanced Switch",description:"This switch includes comprehensive ARIA labeling for screen readers","aria-describedby":"switch-help",variant:"primary"}),e.jsx("div",{id:"switch-help",className:"switch-story-help-text",children:"This switch demonstrates proper ARIA labeling and keyboard navigation."})]}),e.jsxs("div",{className:"switch-story-section",children:[e.jsx("h4",{children:"Keyboard Navigation"}),e.jsx("p",{className:"switch-story-instructions",children:"Use Tab to focus, Space or Enter to toggle."}),e.jsxs("div",{className:"switch-story-keyboard-demo",children:[e.jsx(a,{label:"Keyboard Navigation Demo",description:"Focus me with Tab, toggle with Space or Enter",variant:"success",showLabels:!0}),e.jsx(a,{label:"Another Switch",description:"Tab through multiple switches",variant:"warning"}),e.jsx(a,{label:"Final Switch",description:"Complete keyboard navigation test",variant:"danger",disabled:!0})]})]}),e.jsxs("div",{className:"switch-story-section",children:[e.jsx("h4",{children:"Screen Reader Announcements"}),e.jsx(a,{label:"Screen Reader Optimized",description:"This switch announces state changes to screen readers",variant:"primary",required:!0,"aria-describedby":"screen-reader-help"}),e.jsx("div",{id:"screen-reader-help",className:"switch-story-help-text",children:'State changes are announced as "checked" or "not checked" to screen readers.'})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA labels, keyboard navigation, and screen reader support."}}}},Ne={render:()=>e.jsxs("div",{className:"switch-story-theme-demo",children:[e.jsxs("div",{className:"switch-story-theme-section",children:[e.jsx("h3",{children:"Theme Adaptive Switch Components"}),e.jsxs("div",{className:"switch-story-theme-grid",children:[e.jsxs("div",{className:"switch-story-theme-column",children:[e.jsx("h4",{children:"Size Variants"}),e.jsx(a,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(a,{size:"base",label:"Base",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large",defaultChecked:!0})]}),e.jsxs("div",{className:"switch-story-theme-column",children:[e.jsx("h4",{children:"Color Variants"}),e.jsx(a,{variant:"primary",label:"Primary",defaultChecked:!0}),e.jsx(a,{variant:"success",label:"Success",defaultChecked:!0}),e.jsx(a,{variant:"warning",label:"Warning",defaultChecked:!0}),e.jsx(a,{variant:"danger",label:"Danger",defaultChecked:!0})]}),e.jsxs("div",{className:"switch-story-theme-column",children:[e.jsx("h4",{children:"With Labels"}),e.jsx(a,{showLabels:!0,label:"Basic Labels",defaultChecked:!0}),e.jsx(a,{showLabels:!0,onLabel:"YES",offLabel:"NO",label:"Custom Labels"}),e.jsx(a,{showLabels:!0,onLabel:"✓",offLabel:"✗",label:"Icon Labels",defaultChecked:!0})]}),e.jsxs("div",{className:"switch-story-theme-column",children:[e.jsx("h4",{children:"States"}),e.jsx(a,{label:"Normal",defaultChecked:!0}),e.jsx(a,{label:"Disabled Off",disabled:!0}),e.jsx(a,{label:"Disabled On",disabled:!0,defaultChecked:!0}),e.jsx(a,{label:"Required",required:!0})]})]})]}),e.jsxs("div",{className:"switch-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("div",{className:"switch-story-theme-vars",children:[e.jsx("code",{children:"--color-accent"}),": Primary variant active color",e.jsx("br",{}),e.jsx("code",{children:"--color-accent-hover"}),": Hover state colors",e.jsx("br",{}),e.jsx("code",{children:"--color-border"}),": Default track color",e.jsx("br",{}),e.jsx("code",{children:"--color-panel"}),": Disabled background",e.jsx("br",{}),e.jsx("code",{children:"--color-text-primary"}),": Label text color",e.jsx("br",{}),e.jsx("code",{children:"--color-text-secondary"}),": Description text",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Disabled text",e.jsx("br",{}),e.jsx("code",{children:"--color-success"}),", ",e.jsx("code",{children:"--color-warning"}),", ",e.jsx("code",{children:"--color-error"}),": Variant colors"]})]})]}),parameters:{docs:{description:{story:"Switch components that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},Se={render:()=>e.jsx("div",{className:"switch-story-comprehensive",children:e.jsxs("div",{className:"switch-story-grid",children:[e.jsxs("div",{className:"switch-story-grid-section",children:[e.jsx("h4",{children:"Basic Switches"}),e.jsx(a,{label:"Simple Switch"}),e.jsx(a,{label:"With Description",description:"Additional context"}),e.jsx(a,{label:"Required Field",required:!0}),e.jsx(a,{label:"Default Checked",defaultChecked:!0})]}),e.jsxs("div",{className:"switch-story-grid-section",children:[e.jsx("h4",{children:"Size & Color Variants"}),e.jsx(a,{size:"sm",variant:"success",label:"Small Success",defaultChecked:!0}),e.jsx(a,{size:"base",variant:"warning",label:"Base Warning",defaultChecked:!0}),e.jsx(a,{size:"lg",variant:"danger",label:"Large Danger",defaultChecked:!0})]}),e.jsxs("div",{className:"switch-story-grid-section",children:[e.jsx("h4",{children:"With State Labels"}),e.jsx(a,{showLabels:!0,label:"Default Labels"}),e.jsx(a,{showLabels:!0,onLabel:"YES",offLabel:"NO",label:"Custom Labels"}),e.jsx(a,{showLabels:!0,onLabel:"ON",offLabel:"OFF",variant:"success",label:"Power",defaultChecked:!0})]}),e.jsxs("div",{className:"switch-story-grid-section",children:[e.jsx("h4",{children:"Special States"}),e.jsx(a,{disabled:!0,label:"Disabled Off"}),e.jsx(a,{disabled:!0,defaultChecked:!0,label:"Disabled On"}),e.jsx(a,{label:"Hover me!",variant:"primary"}),e.jsx(a,{showLabels:!0,disabled:!0,onLabel:"LOCK",offLabel:"OPEN",label:"Disabled Labels"})]})]})}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of all switch features and variations."}}}},ke={args:{size:"base",variant:"primary",label:"Interactive Switch",description:"Use controls to modify properties",disabled:!1,required:!1,showLabels:!1,onLabel:"On",offLabel:"Off",checked:!1},render:s=>e.jsx("div",{className:"switch-story-field",children:e.jsx(a,{...s})}),parameters:{docs:{description:{story:"Interactive story where you can modify all switch properties using the controls panel."}}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
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
}`,...pe.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`{
  render: () => <div className="switch-story-section">\r
      <div className="switch-story-row">\r
        <Switch size="sm" label="Small Switch" defaultChecked />\r
      </div>\r
      <div className="switch-story-row">\r
        <Switch size="base" label="Base Switch (Default)" defaultChecked />\r
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
}`,...xe.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
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
}`,...be.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`{
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
}`,...ve.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
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
}`,...ye.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledSwitchDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Controlled switches with external state management and real-time status display.'
      }
    }
  }
}`,...ge.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
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
}`,...fe.parameters?.docs?.source}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`{
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
}`,...je.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
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
}`,...we.parameters?.docs?.source}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`{
  render: () => <div className="switch-story-theme-demo">\r
      <div className="switch-story-theme-section">\r
        <h3>Theme Adaptive Switch Components</h3>\r
        \r
        <div className="switch-story-theme-grid">\r
          <div className="switch-story-theme-column">\r
            <h4>Size Variants</h4>\r
            <Switch size="sm" label="Small" defaultChecked />\r
            <Switch size="base" label="Base" defaultChecked />\r
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
          <code>--color-text-primary</code>: Label text color<br />\r
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
}`,...Ne.parameters?.docs?.source}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`{
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
          <Switch size="base" variant="warning" label="Base Warning" defaultChecked />\r
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
}`,...Se.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'base',
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
}`,...ke.parameters?.docs?.source}}};const nr=["Default","SizeVariants","ColorVariants","WithLabelsAndDescriptions","StateLabels","Controlled","DisabledStates","FormIntegration","AccessibilityDemo","ThemeShowcase","AllFeatures","Interactive"],wr=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDemo:we,AllFeatures:Se,ColorVariants:be,Controlled:ge,Default:pe,DisabledStates:fe,FormIntegration:je,Interactive:ke,SizeVariants:xe,StateLabels:ye,ThemeShowcase:Ne,WithLabelsAndDescriptions:ve,__namedExportsOrder:nr,default:cr},Symbol.toStringTag,{value:"Module"})),hr={title:"Atoms/Textarea",component:o,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","base","lg"],description:"Size variant"},value:{control:"text",description:"Current value"},defaultValue:{control:"text",description:"Default value"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field validation"},placeholder:{control:"text",description:"Placeholder text"},maxLength:{control:"number",description:"Maximum character count"},showCharacterCount:{control:"boolean",description:"Show character counter"},autoResize:{control:"boolean",description:"Auto-resize to content"},minRows:{control:"number",description:"Minimum number of rows"},maxRows:{control:"number",description:"Maximum number of rows"},error:{control:"boolean",description:"Error state"},errorMessage:{control:"text",description:"Error message to display"},helperText:{control:"text",description:"Helper text to display"},resizable:{control:"select",options:["none","both","horizontal","vertical"],description:"Resize behavior"},rows:{control:"number",description:"Number of rows (non-auto-resize)"},onChange:{action:"changed"},onFocus:{action:"focused"},onBlur:{action:"blurred"}},args:{onChange:b(),onFocus:b(),onBlur:b()}},Le={args:{placeholder:"Enter your message..."},parameters:{docs:{description:{story:"Default textarea with basic functionality."}}}},Ce={render:()=>e.jsxs("div",{className:"textarea-story-section",children:[e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Small Textarea"}),e.jsx(o,{size:"sm",placeholder:"Small textarea...",rows:3})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Base Textarea (Default)"}),e.jsx(o,{size:"base",placeholder:"Base textarea...",rows:3})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Large Textarea"}),e.jsx(o,{size:"lg",placeholder:"Large textarea...",rows:3})]})})]}),parameters:{docs:{description:{story:"Different size variants for various UI contexts."}}}},ze={render:()=>e.jsxs("div",{className:"textarea-story-form",children:[e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"message-textarea",children:"Message"}),e.jsx(o,{id:"message-textarea",placeholder:"Type your message here...",rows:4})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"description-textarea",children:"Description"}),e.jsx(o,{id:"description-textarea",placeholder:"Provide a detailed description...",defaultValue:"This is a pre-filled description that shows how the textarea handles existing content.",rows:3})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"feedback-textarea",required:!0,children:"Feedback"}),e.jsx(o,{id:"feedback-textarea",placeholder:"Share your feedback...",required:!0,rows:5})]})]}),parameters:{docs:{description:{story:"Textarea components properly associated with labels using htmlFor."}}}},Te={render:()=>e.jsx("div",{className:"textarea-story-section",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"auto-resize-textarea",children:"Auto-resize Textarea"}),e.jsx(o,{id:"auto-resize-textarea",placeholder:"Start typing and watch me grow! This textarea automatically adjusts its height based on content...",autoResize:!0,minRows:3,maxRows:8}),e.jsx("div",{className:"textarea-story-help-text",children:"This textarea will automatically resize between 3 and 8 rows as you type."})]})}),parameters:{docs:{description:{story:"Textarea with auto-resize functionality that grows with content."}}}},De={render:()=>e.jsx("div",{className:"textarea-story-section",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"counted-textarea",children:"Message with Character Count"}),e.jsx(o,{id:"counted-textarea",placeholder:"Type your message (max 200 characters)...",showCharacterCount:!0,maxLength:200,rows:4})]})}),parameters:{docs:{description:{story:"Textarea with character counting and limit enforcement."}}}},Be={render:()=>e.jsxs("div",{className:"textarea-story-section",children:[e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"resize-vertical",children:"Vertical Only (Default)"}),e.jsx(o,{id:"resize-vertical",placeholder:"You can only resize me vertically...",resizable:"vertical",rows:3}),e.jsx("div",{className:"textarea-story-help-text",children:"Drag the bottom-right corner - only height changes."})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"resize-both",children:"Both Directions"}),e.jsx(o,{id:"resize-both",placeholder:"You can resize me in both directions...",resizable:"both",rows:3}),e.jsx("div",{className:"textarea-story-help-text",children:"Drag the bottom-right corner - both width and height change."})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"resize-horizontal",children:"Horizontal Only"}),e.jsx(o,{id:"resize-horizontal",placeholder:"You can only resize me horizontally...",resizable:"horizontal",rows:3}),e.jsx("div",{className:"textarea-story-help-text",children:"Drag the bottom-right corner - only width changes."})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"resize-none",children:"No Resize"}),e.jsx(o,{id:"resize-none",placeholder:"You cannot resize me at all...",resizable:"none",rows:3}),e.jsx("div",{className:"textarea-story-help-text",children:"No resize handle appears - fixed size only."})]})})]}),parameters:{docs:{description:{story:"Different resize behaviors: vertical (default), both, horizontal, and none."}}}},mr=()=>{const[s,n]=x.useState("This is a controlled textarea with a character counter."),l=h=>{n(h.target.value)};return e.jsx("div",{className:"textarea-story-section",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"controlled-textarea",children:"Controlled Textarea"}),e.jsx(o,{id:"controlled-textarea",value:s,onChange:l,placeholder:"This textarea is controlled by React state...",showCharacterCount:!0,maxLength:500,autoResize:!0,minRows:3,maxRows:6}),e.jsxs("div",{className:"textarea-story-value-display",children:[e.jsx("strong",{children:"Current Value:"}),' "',s,'"']})]})})},Fe={render:()=>e.jsx(mr,{}),parameters:{docs:{description:{story:"Controlled textarea with external state management, auto-resize, and character counting."}}}},Re={render:()=>e.jsxs("div",{className:"textarea-story-section",children:[e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"valid-textarea",children:"Valid Input"}),e.jsx(o,{id:"valid-textarea",placeholder:"This looks good...",defaultValue:"This is a valid input with helper text.",helperText:"This message follows the required format.",rows:3})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"error-textarea",children:"Invalid Input"}),e.jsx(o,{id:"error-textarea",placeholder:"This has an error...",defaultValue:"This input contains an error.",error:!0,errorMessage:"This field contains invalid information. Please review and correct.",rows:3})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"warning-textarea",children:"Character Limit Warning"}),e.jsx(o,{id:"warning-textarea",placeholder:"Type to see character limit warning...",defaultValue:"This textarea is getting close to its character limit and will show a warning.",showCharacterCount:!0,maxLength:100,helperText:"Character count will turn orange when you're near the limit.",rows:3})]})})]}),parameters:{docs:{description:{story:"Different validation states including success, error, and warning states."}}}},Ae={render:()=>e.jsxs("div",{className:"textarea-story-section",children:[e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Disabled Empty"}),e.jsx(o,{placeholder:"This textarea is disabled...",disabled:!0,rows:3})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Disabled with Content"}),e.jsx(o,{defaultValue:"This textarea has content but is disabled, so you cannot edit it.",disabled:!0,rows:3})]})}),e.jsx("div",{className:"textarea-story-row",children:e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Disabled with Character Count"}),e.jsx(o,{defaultValue:"This disabled textarea still shows character count.",disabled:!0,showCharacterCount:!0,maxLength:100,rows:3})]})})]}),parameters:{docs:{description:{story:"Textarea components in disabled states with various content scenarios."}}}},Ie={render:()=>e.jsx("form",{className:"textarea-story-form-demo",children:e.jsxs("fieldset",{className:"textarea-story-fieldset",children:[e.jsx("legend",{children:"Contact Form"}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"subject-textarea",required:!0,children:"Subject"}),e.jsx(o,{id:"subject-textarea",name:"subject",placeholder:"Brief subject line...",required:!0,maxLength:100,showCharacterCount:!0,rows:2,helperText:"Keep it concise and descriptive."})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"message-textarea",required:!0,children:"Message"}),e.jsx(o,{id:"message-textarea",name:"message",placeholder:"Type your detailed message here...",required:!0,autoResize:!0,minRows:4,maxRows:10,maxLength:1e3,showCharacterCount:!0,helperText:"Please provide as much detail as possible."})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"notes-textarea",children:"Additional Notes"}),e.jsx(o,{id:"notes-textarea",name:"notes",placeholder:"Any additional information (optional)...",rows:3,maxLength:500,showCharacterCount:!0,helperText:"Optional field for extra context."})]})]})}),parameters:{docs:{description:{story:"Textarea components in a complete form context with proper form submission attributes."}}}},Oe={render:()=>e.jsxs("div",{className:"textarea-story-accessibility",children:[e.jsxs("div",{className:"textarea-story-section",children:[e.jsx("h4",{children:"ARIA Labels and Descriptions"}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(o,{id:"aria-textarea",placeholder:"Textarea with comprehensive ARIA support...","aria-label":"Message input with accessibility features","aria-describedby":"message-help error-message",showCharacterCount:!0,maxLength:300,rows:4}),e.jsx("div",{id:"message-help",className:"textarea-story-help-text",children:"This textarea includes comprehensive ARIA labeling for screen readers and shows character count."})]})]}),e.jsxs("div",{className:"textarea-story-section",children:[e.jsx("h4",{children:"Error State Announcements"}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"error-demo-textarea",children:"Message with Error"}),e.jsx(o,{id:"error-demo-textarea",placeholder:"This will show an error state...",error:!0,errorMessage:"This field is required and cannot be empty.",required:!0,"aria-describedby":"error-demo-help",rows:3}),e.jsx("div",{id:"error-demo-help",className:"textarea-story-help-text",children:'Error messages are announced to screen readers via role="alert" and aria-live="polite".'})]})]}),e.jsxs("div",{className:"textarea-story-section",children:[e.jsx("h4",{children:"Character Count Accessibility"}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"count-demo-textarea",children:"Message with Count"}),e.jsx(o,{id:"count-demo-textarea",placeholder:"Type to see accessible character counting...",showCharacterCount:!0,maxLength:150,autoResize:!0,minRows:3,maxRows:5,helperText:"Character count includes proper aria-label for screen readers."})]})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA labels, error announcements, and screen reader support."}}}},Me={render:()=>e.jsxs("div",{className:"textarea-story-theme-demo",children:[e.jsxs("div",{className:"textarea-story-theme-section",children:[e.jsx("h3",{children:"Theme Adaptive Textarea Components"}),e.jsxs("div",{className:"textarea-story-theme-row",children:[e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Small Size"}),e.jsx(o,{size:"sm",defaultValue:"Small textarea with theme colors",rows:2})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Base Size"}),e.jsx(o,{defaultValue:"Base textarea adapts to current theme",rows:3})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Large Size"}),e.jsx(o,{size:"lg",defaultValue:"Large textarea with theme integration",rows:3})]})]}),e.jsxs("div",{className:"textarea-story-theme-row",children:[e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Auto-resize with Count"}),e.jsx(o,{placeholder:"Auto-resizing textarea...",autoResize:!0,showCharacterCount:!0,maxLength:200,minRows:2,maxRows:5})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Error State"}),e.jsx(o,{defaultValue:"This has an error state",error:!0,errorMessage:"Error styling adapts to theme",rows:2})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Disabled State"}),e.jsx(o,{defaultValue:"Disabled textarea",disabled:!0,showCharacterCount:!0,maxLength:100,rows:2})]})]})]}),e.jsxs("div",{className:"textarea-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("div",{className:"textarea-story-theme-vars",children:[e.jsx("code",{children:"--color-accent"}),": Focus border and character count warning",e.jsx("br",{}),e.jsx("code",{children:"--color-border"}),": Default border color",e.jsx("br",{}),e.jsx("code",{children:"--color-bg"}),": Background color",e.jsx("br",{}),e.jsx("code",{children:"--color-panel"}),": Disabled background",e.jsx("br",{}),e.jsx("code",{children:"--color-text-primary"}),": Main text color",e.jsx("br",{}),e.jsx("code",{children:"--color-text-secondary"}),": Helper text and character count",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Placeholder and disabled text",e.jsx("br",{}),e.jsx("code",{children:"--color-error"}),": Error border and message color"]})]})]}),parameters:{docs:{description:{story:"Textarea components that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},qe={render:()=>e.jsx("div",{className:"textarea-story-comprehensive",children:e.jsxs("div",{className:"textarea-story-grid",children:[e.jsxs("div",{className:"textarea-story-grid-section",children:[e.jsx("h4",{children:"Basic Features"}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Simple Textarea"}),e.jsx(o,{placeholder:"Basic textarea...",rows:3})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"With Helper Text"}),e.jsx(o,{placeholder:"Textarea with help...",helperText:"This is helpful information.",rows:3})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Required Field"}),e.jsx(o,{placeholder:"Required...",required:!0,rows:3})]})]}),e.jsxs("div",{className:"textarea-story-grid-section",children:[e.jsx("h4",{children:"Advanced Features"}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Auto-resize"}),e.jsx(o,{placeholder:"Auto-growing...",autoResize:!0,minRows:2,maxRows:4})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Character Count"}),e.jsx(o,{placeholder:"With counter...",showCharacterCount:!0,maxLength:100,rows:3})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Auto + Count"}),e.jsx(o,{placeholder:"Both features...",autoResize:!0,showCharacterCount:!0,maxLength:150,minRows:2,maxRows:4})]})]}),e.jsxs("div",{className:"textarea-story-grid-section",children:[e.jsx("h4",{children:"States"}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Error State"}),e.jsx(o,{placeholder:"Has error...",error:!0,errorMessage:"Something is wrong",rows:2})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"Disabled"}),e.jsx(o,{defaultValue:"Cannot edit this",disabled:!0,rows:2})]}),e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{children:"All Features"}),e.jsx(o,{placeholder:"Everything combined...",autoResize:!0,showCharacterCount:!0,maxLength:200,minRows:2,maxRows:5,helperText:"This has all features"})]})]})]})}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of all textarea features and variations."}}}},Ee={args:{size:"base",placeholder:"Interactive textarea...",disabled:!1,required:!1,autoResize:!1,showCharacterCount:!1,maxLength:void 0,minRows:3,maxRows:10,rows:4,error:!1,errorMessage:"",helperText:"",resizable:"vertical"},render:s=>e.jsxs("div",{className:"textarea-story-field",children:[e.jsx(r,{htmlFor:"interactive-textarea",children:"Interactive Textarea"}),e.jsx(o,{...s,id:"interactive-textarea"})]}),parameters:{docs:{description:{story:"Interactive story where you can modify all textarea properties using the controls panel."}}}};Le.parameters={...Le.parameters,docs:{...Le.parameters?.docs,source:{originalSource:`{
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
}`,...Le.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`{
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
}`,...Ce.parameters?.docs?.source}}};ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`{
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
}`,...ze.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
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
}`,...Te.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
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
}`,...De.parameters?.docs?.source}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`{
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
}`,...Be.parameters?.docs?.source}}};Fe.parameters={...Fe.parameters,docs:{...Fe.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledTextareaDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Controlled textarea with external state management, auto-resize, and character counting.'
      }
    }
  }
}`,...Fe.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`{
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
}`,...Re.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`{
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
}`,...Ae.parameters?.docs?.source}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`{
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
}`,...Ie.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`{
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
}`,...Oe.parameters?.docs?.source}}};Me.parameters={...Me.parameters,docs:{...Me.parameters?.docs,source:{originalSource:`{
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
}`,...Me.parameters?.docs?.source}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`{
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
}`,...qe.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
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
}`,...Ee.parameters?.docs?.source}}};const ur=["Default","SizeVariants","WithLabels","AutoResize","CharacterCount","ResizeBehavior","Controlled","ValidationStates","DisabledStates","FormIntegration","AccessibilityDemo","ThemeShowcase","AllFeatures","Interactive"],Nr=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDemo:Oe,AllFeatures:qe,AutoResize:Te,CharacterCount:De,Controlled:Fe,Default:Le,DisabledStates:Ae,FormIntegration:Ie,Interactive:Ee,ResizeBehavior:Be,SizeVariants:Ce,ThemeShowcase:Me,ValidationStates:Re,WithLabels:ze,__namedExportsOrder:ur,default:hr},Symbol.toStringTag,{value:"Module"}));export{yr as B,gr as C,fr as R,jr as S,Nr as T,wr as a};
