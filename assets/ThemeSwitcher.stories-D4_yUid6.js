import{j as e}from"./jsx-runtime-CDt2p4po.js";import{T as n}from"./ThemeSwitcher-_olVrPjD.js";import"./index-GiUgBvb1.js";import"./ThemeProvider-DuwYwW3q.js";import"./Button-CJLaJPku.js";const E={title:"Molecules/ThemeSwitcher",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["button","select"],description:"Display variant of the theme switcher"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the button variant"}}},r={args:{variant:"button",size:"md"}},a={args:{variant:"button",size:"sm"}},s={args:{variant:"button",size:"md"}},t={args:{variant:"button",size:"lg"}},o={args:{variant:"select"}},i={render:()=>e.jsxs("div",{className:"theme-demo",children:[e.jsx("h3",{children:"Theme Switcher Demo"}),e.jsx("p",{children:"Try switching between themes to see how components adapt:"}),e.jsxs("div",{className:"theme-controls",children:[e.jsxs("div",{className:"control-group",children:[e.jsx("h4",{children:"Button Variant"}),e.jsx(n,{variant:"button",size:"md"})]}),e.jsxs("div",{className:"control-group",children:[e.jsx("h4",{children:"Select Variant"}),e.jsx(n,{variant:"select"})]})]}),e.jsx("div",{className:"theme-preview",children:e.jsxs("div",{className:"preview-card",children:[e.jsx("h4",{children:"Sample Content"}),e.jsx("p",{children:"This content will change appearance based on the selected theme."}),e.jsxs("div",{className:"color-swatches",children:[e.jsx("div",{className:"swatch swatch--bg",children:"Background"}),e.jsx("div",{className:"swatch swatch--panel",children:"Panel"}),e.jsx("div",{className:"swatch swatch--accent",children:"Accent"})]})]})}),e.jsx("style",{children:`
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
      `})]})};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'md'
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,h,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'sm'
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,g,u;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'md'
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var w,b,z;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'lg'
  }
}`,...(z=(b=t.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var f,j,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'select'
  }
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var y,N,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var B,k,V;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(V=(k=c.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};const I=["Default","ButtonSmall","ButtonMedium","ButtonLarge","SelectVariant","InteractiveDemo","AllSizes"];export{c as AllSizes,t as ButtonLarge,s as ButtonMedium,a as ButtonSmall,r as Default,i as InteractiveDemo,o as SelectVariant,I as __namedExportsOrder,E as default};
