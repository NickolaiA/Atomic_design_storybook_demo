import{j as e}from"./jsx-runtime-CDt2p4po.js";import{f as L}from"./index-BxLnRenJ.js";import{r as ue,R as l}from"./index-GiUgBvb1.js";import{L as r}from"./Label-ozbwUjrV.js";const s=ue.forwardRef(({size:c="base",checked:n,indeterminate:a=!1,disabled:o=!1,onChange:t,onClick:d,required:i=!1,className:h="",id:m,name:ae,value:ie,"aria-label":te,"aria-describedby":oe,"aria-labelledby":ne,...de},b)=>{const I=l.useRef(null),le=l.useCallback(w=>{I.current=w,typeof b=="function"?b(w):b&&(b.current=w)},[b]);l.useEffect(()=>{I.current&&(I.current.indeterminate=a)},[a]);const x="checkbox",he=`${x}--${c}`,me=n?`${x}--checked`:"",be=a?`${x}--indeterminate`:"",xe=o?`${x}--disabled`:"",ke=[x,he,me,be,xe,h].filter(Boolean).join(" ");return e.jsx("input",{ref:le,type:"checkbox",className:ke,id:m,name:ae,value:ie,checked:a?!1:n,disabled:o,required:i,onChange:t,onClick:d,"aria-label":te,"aria-describedby":oe,"aria-labelledby":ne,...de})});s.displayName="Checkbox";s.__docgenInfo={description:`Checkbox component for selecting multiple options.\r
\r
Features:\r
- Three size variants (sm, base, lg)\r
- Checked, unchecked, and indeterminate states\r
- Disabled state support\r
- Comprehensive accessibility features\r
- Theme integration\r
- Form validation support\r
\r
Usage:\r
\`\`\`tsx\r
<Checkbox checked onChange={handleChange} />\r
<Checkbox indeterminate />\r
\`\`\``,methods:[],displayName:"Checkbox",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'base' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'base'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is checked"},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is in indeterminate state (overrides checked)",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is disabled",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Click handler"},required:{required:!1,tsType:{name:"boolean"},description:"Required field validation",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSS class name",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Unique identifier"},name:{required:!1,tsType:{name:"string"},description:"Name attribute for form submission"},value:{required:!1,tsType:{name:"string"},description:"Value attribute"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by for additional context"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelled by for association with other elements"}},composes:["Omit"]};const Ie={title:"Atoms/Checkbox",component:s,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","base","lg"],description:"Size variant"},checked:{control:"boolean",description:"Checked state"},indeterminate:{control:"boolean",description:"Indeterminate state (overrides checked)"},disabled:{control:"boolean",description:"Disabled state"},required:{control:"boolean",description:"Required field validation"},name:{control:"text",description:"Name attribute for form submission"},value:{control:"text",description:"Value attribute"},onChange:{action:"changed"},onClick:{action:"clicked"}},args:{onChange:L(),onClick:L()}},k={parameters:{docs:{description:{story:"Default checkbox in unchecked state with base size."}}}},u={render:()=>e.jsxs("div",{className:"checkbox-story-section",children:[e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(s,{size:"sm"}),e.jsx(r,{children:"Small Checkbox"})]}),e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(s,{size:"base"}),e.jsx(r,{children:"Base Checkbox (Default)"})]}),e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(s,{size:"lg"}),e.jsx(r,{children:"Large Checkbox"})]})]}),parameters:{docs:{description:{story:"Different size variants for various UI contexts."}}}},p={render:()=>e.jsxs("div",{className:"checkbox-story-section",children:[e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(s,{checked:!1}),e.jsx(r,{children:"Unchecked"})]}),e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(s,{checked:!0}),e.jsx(r,{children:"Checked"})]}),e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(s,{indeterminate:!0}),e.jsx(r,{children:"Indeterminate"})]}),e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(s,{disabled:!0}),e.jsx(r,{disabled:!0,children:"Disabled Unchecked"})]}),e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(s,{checked:!0,disabled:!0}),e.jsx(r,{disabled:!0,children:"Disabled Checked"})]}),e.jsxs("div",{className:"checkbox-story-row",children:[e.jsx(s,{indeterminate:!0,disabled:!0}),e.jsx(r,{disabled:!0,children:"Disabled Indeterminate"})]})]}),parameters:{docs:{description:{story:"All possible checkbox states including checked, unchecked, indeterminate, and disabled variations."}}}},pe=()=>{const[c,n]=l.useState(!1),[a,o]=l.useState(!0),[t,d]=l.useState(!0);return e.jsxs("div",{className:"checkbox-story-form",children:[e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"terms",checked:c,onChange:i=>n(i.target.checked)}),e.jsx(r,{htmlFor:"terms",children:"I agree to the terms and conditions"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"newsletter",checked:a,onChange:i=>o(i.target.checked)}),e.jsx(r,{htmlFor:"newsletter",children:"Subscribe to newsletter"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"notifications",indeterminate:t,onChange:i=>{d(!1)}}),e.jsx(r,{htmlFor:"notifications",children:"Enable notifications (some selected)"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"disabled-option",disabled:!0}),e.jsx(r,{htmlFor:"disabled-option",disabled:!0,children:"Disabled option"})]})]})},v={render:()=>e.jsx(pe,{}),parameters:{docs:{description:{story:"Checkboxes properly associated with labels using htmlFor. Click labels to toggle checkboxes."}}}},ve=()=>{const[c,n]=l.useState({email:!1,sms:!0,push:!1}),[a,o]=l.useState({privacy:!1,age:!1}),t=i=>h=>{n(m=>({...m,[i]:h.target.checked}))},d=i=>h=>{o(m=>({...m,[i]:h.target.checked}))};return e.jsxs("form",{className:"checkbox-story-form-demo",children:[e.jsxs("fieldset",{className:"checkbox-story-fieldset",children:[e.jsx("legend",{children:"User Preferences"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"email-pref",name:"preferences",value:"email",checked:c.email,onChange:t("email")}),e.jsx(r,{htmlFor:"email-pref",children:"Email notifications"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"sms-pref",name:"preferences",value:"sms",checked:c.sms,onChange:t("sms")}),e.jsx(r,{htmlFor:"sms-pref",children:"SMS notifications"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"push-pref",name:"preferences",value:"push",checked:c.push,onChange:t("push")}),e.jsx(r,{htmlFor:"push-pref",children:"Push notifications"})]})]}),e.jsxs("fieldset",{className:"checkbox-story-fieldset",children:[e.jsx("legend",{children:"Required Settings"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"privacy-policy",name:"required",value:"privacy",required:!0,checked:a.privacy,onChange:d("privacy")}),e.jsx(r,{htmlFor:"privacy-policy",required:!0,children:"Accept Privacy Policy"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"age-verification",name:"required",value:"age",required:!0,checked:a.age,onChange:d("age")}),e.jsx(r,{htmlFor:"age-verification",required:!0,children:"I am 18 years or older"})]})]})]})},y={render:()=>e.jsx(ve,{}),parameters:{docs:{description:{story:"Checkboxes in a complete form context with fieldsets, legends, and proper form submission attributes."}}}},f={render:()=>e.jsxs("div",{className:"checkbox-story-interactive",children:[e.jsxs("div",{className:"checkbox-story-section",children:[e.jsx("h4",{children:"Click Handlers"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"interactive-1",onChange:c=>console.log("Checkbox changed:",c.target.checked),onClick:c=>console.log("Checkbox clicked")}),e.jsx(r,{htmlFor:"interactive-1",children:"Check console for events"})]})]}),e.jsxs("div",{className:"checkbox-story-section",children:[e.jsx("h4",{children:"Controlled Component"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"controlled",checked:!0,onChange:c=>alert(`Would change to: ${c.target.checked}`)}),e.jsx(r,{htmlFor:"controlled",children:"Controlled checkbox (always checked)"})]})]})]}),parameters:{docs:{description:{story:"Interactive examples with event handlers. Check browser console for change events."}}}},j={render:()=>e.jsxs("div",{className:"checkbox-story-accessibility",children:[e.jsxs("div",{className:"checkbox-story-section",children:[e.jsx("h4",{children:"ARIA Labels"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"aria-example","aria-label":"Accept terms and conditions","aria-describedby":"terms-help"}),e.jsx("div",{id:"terms-help",className:"checkbox-story-help-text",children:"By checking this box, you agree to our terms of service."})]})]}),e.jsxs("div",{className:"checkbox-story-section",children:[e.jsx("h4",{children:"Keyboard Navigation"}),e.jsx("p",{className:"checkbox-story-instructions",children:"Use Tab to navigate between checkboxes, Space to toggle."}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"keyboard-1"}),e.jsx(r,{htmlFor:"keyboard-1",children:"First checkbox"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"keyboard-2"}),e.jsx(r,{htmlFor:"keyboard-2",children:"Second checkbox"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"keyboard-3",disabled:!0}),e.jsx(r,{htmlFor:"keyboard-3",disabled:!0,children:"Disabled (skipped)"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{id:"keyboard-4"}),e.jsx(r,{htmlFor:"keyboard-4",children:"Third checkbox"})]})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA labels, descriptions, and keyboard navigation."}}}},ye=()=>{const[c,n]=l.useState({smallUnchecked:!1,smallChecked:!0,smallIndeterminate:!0,baseUnchecked:!1,baseChecked:!0,baseIndeterminate:!0,largeUnchecked:!1,largeChecked:!0,largeIndeterminate:!0}),a=t=>d=>{n(i=>({...i,[t]:d.target.checked}))},o=t=>d=>{n(i=>({...i,[t]:!1}))};return e.jsxs("div",{className:"checkbox-story-theme-demo",children:[e.jsxs("div",{className:"checkbox-story-theme-section",children:[e.jsx("h3",{children:"Theme Adaptive Checkboxes"}),e.jsxs("div",{className:"checkbox-story-theme-row",children:[e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{size:"sm",checked:c.smallUnchecked,onChange:a("smallUnchecked")}),e.jsx(r,{children:"Small interactive"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{size:"sm",checked:c.smallChecked,onChange:a("smallChecked")}),e.jsx(r,{children:"Small checked"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{size:"sm",indeterminate:c.smallIndeterminate,onChange:o("smallIndeterminate")}),e.jsx(r,{children:"Small indeterminate"})]})]}),e.jsxs("div",{className:"checkbox-story-theme-row",children:[e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{checked:c.baseUnchecked,onChange:a("baseUnchecked")}),e.jsx(r,{children:"Base interactive"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{checked:c.baseChecked,onChange:a("baseChecked")}),e.jsx(r,{children:"Base checked"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{indeterminate:c.baseIndeterminate,onChange:o("baseIndeterminate")}),e.jsx(r,{children:"Base indeterminate"})]})]}),e.jsxs("div",{className:"checkbox-story-theme-row",children:[e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{size:"lg",checked:c.largeUnchecked,onChange:a("largeUnchecked")}),e.jsx(r,{children:"Large interactive"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{size:"lg",checked:c.largeChecked,onChange:a("largeChecked")}),e.jsx(r,{children:"Large checked"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{size:"lg",indeterminate:c.largeIndeterminate,onChange:o("largeIndeterminate")}),e.jsx(r,{children:"Large indeterminate"})]})]})]}),e.jsxs("div",{className:"checkbox-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("div",{className:"checkbox-story-theme-vars",children:[e.jsx("code",{children:"--color-accent"}),": Checked/indeterminate background",e.jsx("br",{}),e.jsx("code",{children:"--color-accent-hover"}),": Hover state background",e.jsx("br",{}),e.jsx("code",{children:"--color-border"}),": Border color",e.jsx("br",{}),e.jsx("code",{children:"--color-bg"}),": Background color",e.jsx("br",{}),e.jsx("code",{children:"--color-panel"}),": Hover background",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Disabled state color"]})]})]})},g={render:()=>e.jsx(ye,{}),parameters:{docs:{description:{story:"Checkboxes that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},fe=()=>{const[c,n]=l.useState({smallUnchecked:!1,smallChecked:!0,smallIndeterminate:!0,baseUnchecked:!1,baseChecked:!0,baseIndeterminate:!0,largeUnchecked:!1,largeChecked:!0,largeIndeterminate:!0}),a=t=>d=>{n(i=>({...i,[t]:d.target.checked}))},o=t=>d=>{n(i=>({...i,[t]:!1}))};return e.jsx("div",{className:"checkbox-story-comprehensive",children:e.jsxs("div",{className:"checkbox-story-grid",children:[e.jsxs("div",{className:"checkbox-story-grid-section",children:[e.jsx("h4",{children:"Small Size"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{size:"sm",checked:c.smallUnchecked,onChange:a("smallUnchecked")}),e.jsx(r,{children:"Interactive"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{size:"sm",checked:c.smallChecked,onChange:a("smallChecked")}),e.jsx(r,{children:"Checked"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{size:"sm",indeterminate:c.smallIndeterminate,onChange:o("smallIndeterminate")}),e.jsx(r,{children:"Indeterminate"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{size:"sm",disabled:!0}),e.jsx(r,{disabled:!0,children:"Disabled"})]})]}),e.jsxs("div",{className:"checkbox-story-grid-section",children:[e.jsx("h4",{children:"Base Size"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{checked:c.baseUnchecked,onChange:a("baseUnchecked")}),e.jsx(r,{children:"Interactive"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{checked:c.baseChecked,onChange:a("baseChecked")}),e.jsx(r,{children:"Checked"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{indeterminate:c.baseIndeterminate,onChange:o("baseIndeterminate")}),e.jsx(r,{children:"Indeterminate"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{disabled:!0}),e.jsx(r,{disabled:!0,children:"Disabled"})]})]}),e.jsxs("div",{className:"checkbox-story-grid-section",children:[e.jsx("h4",{children:"Large Size"}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{size:"lg",checked:c.largeUnchecked,onChange:a("largeUnchecked")}),e.jsx(r,{children:"Interactive"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{size:"lg",checked:c.largeChecked,onChange:a("largeChecked")}),e.jsx(r,{children:"Checked"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{size:"lg",indeterminate:c.largeIndeterminate,onChange:o("largeIndeterminate")}),e.jsx(r,{children:"Indeterminate"})]}),e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{size:"lg",disabled:!0}),e.jsx(r,{disabled:!0,children:"Disabled"})]})]})]})})},C={render:()=>e.jsx(fe,{}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of all checkbox size and state combinations."}}}},N={args:{size:"base",checked:!1,indeterminate:!1,disabled:!1,required:!1},render:c=>e.jsxs("div",{className:"checkbox-story-field",children:[e.jsx(s,{...c,id:"interactive-checkbox"}),e.jsx(r,{htmlFor:"interactive-checkbox",children:"Interactive Checkbox"})]}),parameters:{docs:{description:{story:"Interactive story where you can modify all checkbox properties using the controls panel."}}}};var S,z,F;k.parameters={...k.parameters,docs:{...(S=k.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default checkbox in unchecked state with base size.'
      }
    }
  }
}`,...(F=(z=k.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var T,U,q;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(q=(U=u.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var D,A,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(A=p.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var E,B,H;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <InteractiveCheckboxForm />,
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes properly associated with labels using htmlFor. Click labels to toggle checkboxes.'
      }
    }
  }
}`,...(H=(B=v.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var M,V,W;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <InteractiveFormDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes in a complete form context with fieldsets, legends, and proper form submission attributes.'
      }
    }
  }
}`,...(W=(V=y.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var $,P,_;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(_=(P=f.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var K,O,G;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(G=(O=j.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var J,Q,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <ThemeShowcaseDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes that adapt to different themes. Use the theme switcher in the toolbar to see color changes.'
      }
    }
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <AllCombinationsDemo />,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of all checkbox size and state combinations.'
      }
    }
  }
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,re,ce;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(re=N.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};const we=["Default","SizeVariants","States","WithLabels","FormIntegration","InteractiveExamples","AccessibilityDemo","ThemeShowcase","AllCombinations","Interactive"];export{j as AccessibilityDemo,C as AllCombinations,k as Default,y as FormIntegration,N as Interactive,f as InteractiveExamples,u as SizeVariants,p as States,g as ThemeShowcase,v as WithLabels,we as __namedExportsOrder,Ie as default};
