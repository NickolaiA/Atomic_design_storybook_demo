import{j as e}from"./iframe-CY-Mz7KS.js";import{T as n}from"./ThemeSwitcher-BWoIlqBp.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-acQDbgEt.js";const h={title:"Molecules/ThemeSwitcher",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["button","select"],description:"Display variant of the theme switcher"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the button variant"}}},r={args:{variant:"button",size:"md"}},a={args:{variant:"button",size:"sm"}},s={args:{variant:"button",size:"md"}},t={args:{variant:"button",size:"lg"}},o={args:{variant:"select"}},i={render:()=>e.jsxs("div",{className:"theme-demo",children:[e.jsx("h3",{children:"Theme Switcher Demo"}),e.jsx("p",{children:"Try switching between themes to see how components adapt:"}),e.jsxs("div",{className:"theme-controls",children:[e.jsxs("div",{className:"control-group",children:[e.jsx("h4",{children:"Button Variant"}),e.jsx(n,{variant:"button",size:"md"})]}),e.jsxs("div",{className:"control-group",children:[e.jsx("h4",{children:"Select Variant"}),e.jsx(n,{variant:"select"})]})]}),e.jsx("div",{className:"theme-preview",children:e.jsxs("div",{className:"preview-card",children:[e.jsx("h4",{children:"Sample Content"}),e.jsx("p",{children:"This content will change appearance based on the selected theme."}),e.jsxs("div",{className:"color-swatches",children:[e.jsx("div",{className:"swatch swatch--bg",children:"Background"}),e.jsx("div",{className:"swatch swatch--panel",children:"Panel"}),e.jsx("div",{className:"swatch swatch--accent",children:"Accent"})]})]})}),e.jsx("style",{children:`
        .theme-demo {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 20px;
          max-width: 600px;
        }
        
        .theme-demo h3 {
          margin: 0;
          color: var(--color-text);
          font-size: 18px;
        }
        
        .theme-demo p {
          margin: 0;
          color: var(--color-text-secondary);
          font-size: 14px;
        }
        
        .theme-controls {
          display: flex;
          gap: 32px;
        }
        
        .control-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .control-group h4 {
          margin: 0;
          color: var(--color-text);
          font-size: 14px;
          font-weight: 600;
        }
        
        .theme-preview {
          margin-top: 16px;
        }
        
        .preview-card {
          background: var(--color-panel);
          border: 1px solid var(--color-border);
          border-radius: var(--radius);
          padding: 16px;
        }
        
        .preview-card h4 {
          margin: 0 0 8px 0;
          color: var(--color-text);
          font-size: 16px;
        }
        
        .preview-card p {
          margin: 0 0 16px 0;
          color: var(--color-text-secondary);
        }
        
        .color-swatches {
          display: flex;
          gap: 8px;
        }
        
        .swatch {
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 12px;
          color: white;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
          border: 1px solid var(--color-border);
        }
        
        .swatch--bg {
          background: var(--color-bg);
        }
        
        .swatch--panel {
          background: var(--color-panel);
        }
        
        .swatch--accent {
          background: var(--color-accent);
        }
      `})]})},c={render:()=>e.jsxs("div",{className:"sizes-showcase",children:[e.jsx("h3",{children:"Button Sizes"}),e.jsxs("div",{className:"size-row",children:[e.jsxs("div",{className:"size-item",children:[e.jsx("label",{children:"Small"}),e.jsx(n,{variant:"button",size:"sm"})]}),e.jsxs("div",{className:"size-item",children:[e.jsx("label",{children:"Medium"}),e.jsx(n,{variant:"button",size:"md"})]}),e.jsxs("div",{className:"size-item",children:[e.jsx("label",{children:"Large"}),e.jsx(n,{variant:"button",size:"lg"})]})]}),e.jsx("h3",{children:"Select Variant"}),e.jsx(n,{variant:"select"}),e.jsx("style",{children:`
        .sizes-showcase {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 16px;
        }
        
        .sizes-showcase h3 {
          margin: 0;
          color: var(--color-text);
          font-size: 16px;
          font-weight: 600;
        }
        
        .size-row {
          display: flex;
          gap: 16px;
          align-items: end;
        }
        
        .size-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }
        
        .size-item label {
          font-size: 12px;
          color: var(--color-text-secondary);
          font-weight: 500;
        }
      `})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'md'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'sm'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'md'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'lg'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'select'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="theme-demo">\r
      <h3>Theme Switcher Demo</h3>\r
      <p>Try switching between themes to see how components adapt:</p>\r
      \r
      <div className="theme-controls">\r
        <div className="control-group">\r
          <h4>Button Variant</h4>\r
          <ThemeSwitcher variant="button" size="md" />\r
        </div>\r
        \r
        <div className="control-group">\r
          <h4>Select Variant</h4>\r
          <ThemeSwitcher variant="select" />\r
        </div>\r
      </div>\r
      \r
      <div className="theme-preview">\r
        <div className="preview-card">\r
          <h4>Sample Content</h4>\r
          <p>This content will change appearance based on the selected theme.</p>\r
          <div className="color-swatches">\r
            <div className="swatch swatch--bg">Background</div>\r
            <div className="swatch swatch--panel">Panel</div>\r
            <div className="swatch swatch--accent">Accent</div>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <style>{\`
        .theme-demo {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 20px;
          max-width: 600px;
        }
        
        .theme-demo h3 {
          margin: 0;
          color: var(--color-text);
          font-size: 18px;
        }
        
        .theme-demo p {
          margin: 0;
          color: var(--color-text-secondary);
          font-size: 14px;
        }
        
        .theme-controls {
          display: flex;
          gap: 32px;
        }
        
        .control-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .control-group h4 {
          margin: 0;
          color: var(--color-text);
          font-size: 14px;
          font-weight: 600;
        }
        
        .theme-preview {
          margin-top: 16px;
        }
        
        .preview-card {
          background: var(--color-panel);
          border: 1px solid var(--color-border);
          border-radius: var(--radius);
          padding: 16px;
        }
        
        .preview-card h4 {
          margin: 0 0 8px 0;
          color: var(--color-text);
          font-size: 16px;
        }
        
        .preview-card p {
          margin: 0 0 16px 0;
          color: var(--color-text-secondary);
        }
        
        .color-swatches {
          display: flex;
          gap: 8px;
        }
        
        .swatch {
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 12px;
          color: white;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
          border: 1px solid var(--color-border);
        }
        
        .swatch--bg {
          background: var(--color-bg);
        }
        
        .swatch--panel {
          background: var(--color-panel);
        }
        
        .swatch--accent {
          background: var(--color-accent);
        }
      \`}</style>\r
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="sizes-showcase">\r
      <h3>Button Sizes</h3>\r
      <div className="size-row">\r
        <div className="size-item">\r
          <label>Small</label>\r
          <ThemeSwitcher variant="button" size="sm" />\r
        </div>\r
        <div className="size-item">\r
          <label>Medium</label>\r
          <ThemeSwitcher variant="button" size="md" />\r
        </div>\r
        <div className="size-item">\r
          <label>Large</label>\r
          <ThemeSwitcher variant="button" size="lg" />\r
        </div>\r
      </div>\r
      \r
      <h3>Select Variant</h3>\r
      <ThemeSwitcher variant="select" />\r
      \r
      <style>{\`
        .sizes-showcase {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 16px;
        }
        
        .sizes-showcase h3 {
          margin: 0;
          color: var(--color-text);
          font-size: 16px;
          font-weight: 600;
        }
        
        .size-row {
          display: flex;
          gap: 16px;
          align-items: end;
        }
        
        .size-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }
        
        .size-item label {
          font-size: 12px;
          color: var(--color-text-secondary);
          font-weight: 500;
        }
      \`}</style>\r
    </div>
}`,...c.parameters?.docs?.source}}};const x=["Default","ButtonSmall","ButtonMedium","ButtonLarge","SelectVariant","InteractiveDemo","AllSizes"];export{c as AllSizes,t as ButtonLarge,s as ButtonMedium,a as ButtonSmall,r as Default,i as InteractiveDemo,o as SelectVariant,x as __namedExportsOrder,h as default};
