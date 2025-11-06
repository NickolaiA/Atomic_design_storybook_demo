import{j as e}from"./jsx-runtime-CDt2p4po.js";import{f as K}from"./index-BxLnRenJ.js";import{L as r}from"./Label-ozbwUjrV.js";import{T as s}from"./TextInput-SmvPHKDv.js";import"./index-GiUgBvb1.js";const ee={title:"Atoms/Label",component:r,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","base","lg"],description:"Size variant"},weight:{control:"select",options:["normal","medium","semibold"],description:"Font weight"},required:{control:"boolean",description:"Shows required indicator (*)"},disabled:{control:"boolean",description:"Disabled state styling"},showOptional:{control:"boolean",description:"Shows optional indicator when not required"},htmlFor:{control:"text",description:"Associates label with form control"},children:{control:"text",description:"Label content"},onClick:{action:"clicked"}},args:{children:"Form Label",onClick:K()}},i={parameters:{docs:{description:{story:"Default label with medium weight and base size."}}}},l={render:()=>e.jsxs("div",{className:"label-story-section",children:[e.jsx(r,{size:"sm",children:"Small Label"}),e.jsx(r,{size:"base",children:"Base Label (Default)"}),e.jsx(r,{size:"lg",children:"Large Label"})]}),parameters:{docs:{description:{story:"Different size variants for various form contexts."}}}},a={render:()=>e.jsxs("div",{className:"label-story-section",children:[e.jsx(r,{weight:"normal",children:"Normal Weight"}),e.jsx(r,{weight:"medium",children:"Medium Weight (Default)"}),e.jsx(r,{weight:"semibold",children:"Semibold Weight"})]}),parameters:{docs:{description:{story:"Font weight options for different emphasis levels."}}}},o={render:()=>e.jsxs("div",{className:"label-story-section",children:[e.jsx(r,{children:"Optional Field"}),e.jsx(r,{required:!0,children:"Required Field"}),e.jsx(r,{showOptional:!0,children:"Optional Field (Explicit)"}),e.jsx(r,{required:!0,showOptional:!0,children:"Required Field (showOptional ignored)"})]}),parameters:{docs:{description:{story:"Required and optional indicators for form validation clarity."}}}},t={render:()=>e.jsxs("div",{className:"label-story-section",children:[e.jsx(r,{children:"Normal Label"}),e.jsx(r,{disabled:!0,children:"Disabled Label"}),e.jsx(r,{disabled:!0,required:!0,children:"Disabled Required Label"})]}),parameters:{docs:{description:{story:"Disabled state for labels associated with disabled form controls."}}}},d={render:()=>e.jsxs("div",{className:"label-story-form",children:[e.jsxs("div",{className:"label-story-field",children:[e.jsx(r,{htmlFor:"username",required:!0,children:"Username"}),e.jsx(s,{id:"username",placeholder:"Enter your username"})]}),e.jsxs("div",{className:"label-story-field",children:[e.jsx(r,{htmlFor:"email",required:!0,children:"Email Address"}),e.jsx(s,{id:"email",type:"email",placeholder:"your@email.com"})]}),e.jsxs("div",{className:"label-story-field",children:[e.jsx(r,{htmlFor:"phone",showOptional:!0,children:"Phone Number"}),e.jsx(s,{id:"phone",type:"tel",placeholder:"(555) 123-4567"})]}),e.jsxs("div",{className:"label-story-field",children:[e.jsx(r,{htmlFor:"bio",size:"sm",children:"Bio"}),e.jsx(s,{id:"bio",placeholder:"Tell us about yourself..."})]})]}),parameters:{docs:{description:{story:"Labels properly associated with form controls using htmlFor. Click labels to focus inputs."}}}},c={render:()=>e.jsxs("div",{className:"label-story-accessibility",children:[e.jsxs("div",{className:"label-story-field",children:[e.jsx(r,{htmlFor:"accessible-input",required:!0,children:"Accessible Form Field"}),e.jsx(s,{id:"accessible-input",placeholder:"Click the label above to focus this input","aria-describedby":"help-text"}),e.jsx("div",{id:"help-text",className:"label-story-help-text",children:"This demonstrates proper label-input association for screen readers."})]}),e.jsxs("div",{className:"label-story-field",children:[e.jsx(r,{htmlFor:"disabled-input",disabled:!0,required:!0,children:"Disabled Field"}),e.jsx(s,{id:"disabled-input",disabled:!0,placeholder:"This field is disabled"})]})]}),parameters:{docs:{description:{story:"Accessibility features including proper associations, screen reader support, and focus management."}}}},n={render:()=>e.jsxs("div",{className:"label-story-form",children:[e.jsxs("div",{className:"label-story-field",children:[e.jsx(r,{htmlFor:"interactive-1",required:!0,onClick:()=>console.log("Label clicked: Required field"),children:"Click to Focus (Required)"}),e.jsx(s,{id:"interactive-1",placeholder:"Focus me by clicking the label"})]}),e.jsxs("div",{className:"label-story-field",children:[e.jsx(r,{htmlFor:"interactive-2",showOptional:!0,onClick:()=>console.log("Label clicked: Optional field"),children:"Click to Focus (Optional)"}),e.jsx(s,{id:"interactive-2",placeholder:"I'm optional"})]})]}),parameters:{docs:{description:{story:"Interactive labels with click handlers. Check browser console for click events."}}}},m={render:()=>e.jsxs("div",{className:"label-story-theme-demo",children:[e.jsxs("div",{className:"label-story-theme-section",children:[e.jsx(r,{size:"lg",weight:"semibold",children:"Theme Adaptive Labels"}),e.jsx(r,{required:!0,children:"Required Field"}),e.jsx(r,{showOptional:!0,children:"Optional Field"}),e.jsx(r,{disabled:!0,children:"Disabled Field"})]}),e.jsxs("div",{className:"label-story-theme-info",children:[e.jsx(r,{size:"sm",weight:"semibold",children:"Theme Variables Used:"}),e.jsxs("div",{className:"label-story-theme-vars",children:[e.jsx("code",{children:"--color-text"}),": Normal text color",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Disabled and optional text",e.jsx("br",{}),e.jsx("code",{children:"--color-error"}),": Required indicator color",e.jsx("br",{}),e.jsx("code",{children:"--color-accent"}),": Hover state color"]})]})]}),parameters:{docs:{description:{story:"Labels that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},b={render:()=>e.jsx("div",{className:"label-story-comprehensive",children:e.jsxs("div",{className:"label-story-grid",children:[e.jsxs("div",{className:"label-story-grid-section",children:[e.jsx("h4",{children:"Size + Weight Combinations"}),e.jsx(r,{size:"lg",weight:"semibold",required:!0,children:"Large Semibold Required"}),e.jsx(r,{size:"base",weight:"medium",showOptional:!0,children:"Base Medium Optional"}),e.jsx(r,{size:"sm",weight:"normal",children:"Small Normal"})]}),e.jsxs("div",{className:"label-story-grid-section",children:[e.jsx("h4",{children:"State Variations"}),e.jsx(r,{required:!0,children:"Required"}),e.jsx(r,{showOptional:!0,children:"Optional"}),e.jsx(r,{disabled:!0,children:"Disabled"}),e.jsx(r,{disabled:!0,required:!0,children:"Disabled Required"})]}),e.jsxs("div",{className:"label-story-grid-section",children:[e.jsx("h4",{children:"Form Context"}),e.jsxs("div",{className:"label-story-mini-form",children:[e.jsx(r,{htmlFor:"combo-1",size:"sm",required:!0,children:"Name"}),e.jsx(s,{id:"combo-1"}),e.jsx(r,{htmlFor:"combo-2",showOptional:!0,children:"Bio"}),e.jsx(s,{id:"combo-2"})]})]})]})}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of all label combinations and contexts."}}}},h={args:{size:"base",weight:"medium",required:!1,disabled:!1,showOptional:!1,children:"Interactive Label",htmlFor:"interactive-input"},render:J=>e.jsxs("div",{className:"label-story-field",children:[e.jsx(r,{...J}),e.jsx(s,{id:"interactive-input",placeholder:"Associated input field"})]}),parameters:{docs:{description:{story:"Interactive story where you can modify all label properties using the controls panel."}}}};var p,u,v;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default label with medium weight and base size.'
      }
    }
  }
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var x,y,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="label-story-section">\r
      <Label size="sm">Small Label</Label>\r
      <Label size="base">Base Label (Default)</Label>\r
      <Label size="lg">Large Label</Label>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different size variants for various form contexts.'
      }
    }
  }
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var L,g,j;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="label-story-section">\r
      <Label weight="normal">Normal Weight</Label>\r
      <Label weight="medium">Medium Weight (Default)</Label>\r
      <Label weight="semibold">Semibold Weight</Label>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Font weight options for different emphasis levels.'
      }
    }
  }
}`,...(j=(g=a.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var w,N,F;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="label-story-section">\r
      <Label>Optional Field</Label>\r
      <Label required>Required Field</Label>\r
      <Label showOptional>Optional Field (Explicit)</Label>\r
      <Label required showOptional>Required Field (showOptional ignored)</Label>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Required and optional indicators for form validation clarity.'
      }
    }
  }
}`,...(F=(N=o.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var q,O,S;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="label-story-section">\r
      <Label>Normal Label</Label>\r
      <Label disabled>Disabled Label</Label>\r
      <Label disabled required>Disabled Required Label</Label>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Disabled state for labels associated with disabled form controls.'
      }
    }
  }
}`,...(S=(O=t.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var z,D,k;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="label-story-form">\r
      <div className="label-story-field">\r
        <Label htmlFor="username" required>Username</Label>\r
        <TextInput id="username" placeholder="Enter your username" />\r
      </div>\r
      \r
      <div className="label-story-field">\r
        <Label htmlFor="email" required>Email Address</Label>\r
        <TextInput id="email" type="email" placeholder="your@email.com" />\r
      </div>\r
      \r
      <div className="label-story-field">\r
        <Label htmlFor="phone" showOptional>Phone Number</Label>\r
        <TextInput id="phone" type="tel" placeholder="(555) 123-4567" />\r
      </div>\r
      \r
      <div className="label-story-field">\r
        <Label htmlFor="bio" size="sm">Bio</Label>\r
        <TextInput id="bio" placeholder="Tell us about yourself..." />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Labels properly associated with form controls using htmlFor. Click labels to focus inputs.'
      }
    }
  }
}`,...(k=(D=d.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var C,T,R;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="label-story-accessibility">\r
      <div className="label-story-field">\r
        <Label htmlFor="accessible-input" required>\r
          Accessible Form Field\r
        </Label>\r
        <TextInput id="accessible-input" placeholder="Click the label above to focus this input" aria-describedby="help-text" />\r
        <div id="help-text" className="label-story-help-text">\r
          This demonstrates proper label-input association for screen readers.\r
        </div>\r
      </div>\r
      \r
      <div className="label-story-field">\r
        <Label htmlFor="disabled-input" disabled required>\r
          Disabled Field\r
        </Label>\r
        <TextInput id="disabled-input" disabled placeholder="This field is disabled" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including proper associations, screen reader support, and focus management.'
      }
    }
  }
}`,...(R=(T=c.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var I,A,W;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="label-story-form">\r
      <div className="label-story-field">\r
        <Label htmlFor="interactive-1" required onClick={() => console.log('Label clicked: Required field')}>\r
          Click to Focus (Required)\r
        </Label>\r
        <TextInput id="interactive-1" placeholder="Focus me by clicking the label" />\r
      </div>\r
      \r
      <div className="label-story-field">\r
        <Label htmlFor="interactive-2" showOptional onClick={() => console.log('Label clicked: Optional field')}>\r
          Click to Focus (Optional)\r
        </Label>\r
        <TextInput id="interactive-2" placeholder="I'm optional" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive labels with click handlers. Check browser console for click events.'
      }
    }
  }
}`,...(W=(A=n.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var E,B,V;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="label-story-theme-demo">\r
      <div className="label-story-theme-section">\r
        <Label size="lg" weight="semibold">Theme Adaptive Labels</Label>\r
        <Label required>Required Field</Label>\r
        <Label showOptional>Optional Field</Label>\r
        <Label disabled>Disabled Field</Label>\r
      </div>\r
      \r
      <div className="label-story-theme-info">\r
        <Label size="sm" weight="semibold">Theme Variables Used:</Label>\r
        <div className="label-story-theme-vars">\r
          <code>--color-text</code>: Normal text color<br />\r
          <code>--color-text-muted</code>: Disabled and optional text<br />\r
          <code>--color-error</code>: Required indicator color<br />\r
          <code>--color-accent</code>: Hover state color\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Labels that adapt to different themes. Use the theme switcher in the toolbar to see color changes.'
      }
    }
  }
}`,...(V=(B=m.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var U,M,H;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="label-story-comprehensive">\r
      <div className="label-story-grid">\r
        <div className="label-story-grid-section">\r
          <h4>Size + Weight Combinations</h4>\r
          <Label size="lg" weight="semibold" required>Large Semibold Required</Label>\r
          <Label size="base" weight="medium" showOptional>Base Medium Optional</Label>\r
          <Label size="sm" weight="normal">Small Normal</Label>\r
        </div>\r
        \r
        <div className="label-story-grid-section">\r
          <h4>State Variations</h4>\r
          <Label required>Required</Label>\r
          <Label showOptional>Optional</Label>\r
          <Label disabled>Disabled</Label>\r
          <Label disabled required>Disabled Required</Label>\r
        </div>\r
        \r
        <div className="label-story-grid-section">\r
          <h4>Form Context</h4>\r
          <div className="label-story-mini-form">\r
            <Label htmlFor="combo-1" size="sm" required>Name</Label>\r
            <TextInput id="combo-1" />\r
            \r
            <Label htmlFor="combo-2" showOptional>Bio</Label>\r
            <TextInput id="combo-2" />\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of all label combinations and contexts.'
      }
    }
  }
}`,...(H=(M=b.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var P,_,G;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 'base',
    weight: 'medium',
    required: false,
    disabled: false,
    showOptional: false,
    children: 'Interactive Label',
    htmlFor: 'interactive-input'
  },
  render: args => <div className="label-story-field">\r
      <Label {...args} />\r
      <TextInput id="interactive-input" placeholder="Associated input field" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive story where you can modify all label properties using the controls panel.'
      }
    }
  }
}`,...(G=(_=h.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};const re=["Default","SizeVariants","WeightVariants","RequiredStates","DisabledState","WithFormControls","AccessibilityDemo","InteractiveExamples","ThemeShowcase","AllCombinations","Interactive"];export{c as AccessibilityDemo,b as AllCombinations,i as Default,t as DisabledState,h as Interactive,n as InteractiveExamples,o as RequiredStates,l as SizeVariants,m as ThemeShowcase,a as WeightVariants,d as WithFormControls,re as __namedExportsOrder,ee as default};
