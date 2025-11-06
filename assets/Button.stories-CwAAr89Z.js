import{j as r}from"./jsx-runtime-CDt2p4po.js";import{B as e}from"./Button-CJLaJPku.js";import{I as n}from"./Icon-CDzKQC-X.js";import{T as gr}from"./ThemeSwitcher-_olVrPjD.js";import"./index-GiUgBvb1.js";import"./ThemeProvider-DuwYwW3q.js";const zr={title:"Atoms/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","ghost"],description:"Button variant style"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size"},disabled:{control:"boolean",description:"Whether the button is disabled"},children:{control:"text",description:"Button content"}},args:{children:"Click me"}},a={args:{variant:"primary"}},s={args:{variant:"secondary"}},t={args:{variant:"ghost"}},o={args:{size:"sm",children:"Small Button"}},i={args:{size:"md",children:"Medium Button"}},c={args:{size:"lg",children:"Large Button"}},d={args:{disabled:!0,children:"Disabled Button"}},l={args:{variant:"primary",disabled:!0,children:"Disabled Primary"}},m={args:{variant:"secondary",disabled:!0,children:"Disabled Secondary"}},u={args:{children:r.jsxs("span",{className:"button-with-icon",children:[r.jsx(n,{name:"search",size:16}),"Search",r.jsx("style",{children:`
          .button-with-icon {
            display: flex;
            align-items: center;
            gap: 8px;
          }
        `})]})}},h={args:{children:r.jsx(n,{name:"user",size:16}),"aria-label":"User profile"}},p={args:{children:"This is a button with very long text content"}},g={render:()=>r.jsxs("div",{className:"button-showcase",children:[r.jsxs("div",{className:"button-group",children:[r.jsx("h3",{children:"Primary"}),r.jsx(e,{variant:"primary",size:"sm",children:"Small"}),r.jsx(e,{variant:"primary",size:"md",children:"Medium"}),r.jsx(e,{variant:"primary",size:"lg",children:"Large"})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("h3",{children:"Secondary"}),r.jsx(e,{variant:"secondary",size:"sm",children:"Small"}),r.jsx(e,{variant:"secondary",size:"md",children:"Medium"}),r.jsx(e,{variant:"secondary",size:"lg",children:"Large"})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("h3",{children:"Ghost"}),r.jsx(e,{variant:"ghost",size:"sm",children:"Small"}),r.jsx(e,{variant:"ghost",size:"md",children:"Medium"}),r.jsx(e,{variant:"ghost",size:"lg",children:"Large"})]}),r.jsxs("div",{className:"button-group",children:[r.jsx("h3",{children:"Disabled"}),r.jsx(e,{variant:"primary",disabled:!0,children:"Primary"}),r.jsx(e,{variant:"secondary",disabled:!0,children:"Secondary"}),r.jsx(e,{variant:"ghost",disabled:!0,children:"Ghost"})]}),r.jsx("style",{children:`
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
      `})]})},x={render:hr=>{const pr=()=>{alert("Button clicked!")};return r.jsxs("div",{className:"interactive-demo",children:[r.jsx(e,{...hr,onClick:pr}),r.jsx("p",{children:"Click the button to see an alert"}),r.jsx("style",{children:`
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
        `})]})},args:{variant:"primary",children:"Click me!"}},v={render:()=>r.jsxs("div",{className:"button-group-demo",children:[r.jsxs("div",{className:"button-row",children:[r.jsx(e,{variant:"primary",children:"Save"}),r.jsx(e,{variant:"secondary",children:"Cancel"})]}),r.jsxs("div",{className:"button-row",children:[r.jsx(e,{variant:"ghost",size:"sm",children:r.jsx(n,{name:"home",size:14})}),r.jsx(e,{variant:"ghost",size:"sm",children:r.jsx(n,{name:"search",size:14})}),r.jsx(e,{variant:"ghost",size:"sm",children:r.jsx(n,{name:"user",size:14})})]}),r.jsx("style",{children:`
        .button-group-demo {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .button-row {
          display: flex;
          gap: 8px;
        }
      `})]})},y={render:()=>r.jsxs("div",{className:"theme-showcase-demo",children:[r.jsxs("div",{className:"theme-header",children:[r.jsx("h3",{children:"Button Theme Showcase"}),r.jsx(gr,{variant:"select"})]}),r.jsxs("div",{className:"showcase-grid",children:[r.jsxs("div",{className:"showcase-section",children:[r.jsx("h4",{children:"Primary Buttons"}),r.jsxs("div",{className:"button-row",children:[r.jsx(e,{variant:"primary",size:"sm",children:"Small"}),r.jsx(e,{variant:"primary",size:"md",children:"Medium"}),r.jsx(e,{variant:"primary",size:"lg",children:"Large"})]})]}),r.jsxs("div",{className:"showcase-section",children:[r.jsx("h4",{children:"Secondary Buttons"}),r.jsxs("div",{className:"button-row",children:[r.jsx(e,{variant:"secondary",size:"sm",children:"Small"}),r.jsx(e,{variant:"secondary",size:"md",children:"Medium"}),r.jsx(e,{variant:"secondary",size:"lg",children:"Large"})]})]}),r.jsxs("div",{className:"showcase-section",children:[r.jsx("h4",{children:"Ghost Buttons"}),r.jsxs("div",{className:"button-row",children:[r.jsx(e,{variant:"ghost",size:"sm",children:"Small"}),r.jsx(e,{variant:"ghost",size:"md",children:"Medium"}),r.jsx(e,{variant:"ghost",size:"lg",children:"Large"})]})]}),r.jsxs("div",{className:"showcase-section",children:[r.jsx("h4",{children:"Disabled States"}),r.jsxs("div",{className:"button-row",children:[r.jsx(e,{variant:"primary",disabled:!0,children:"Primary"}),r.jsx(e,{variant:"secondary",disabled:!0,children:"Secondary"}),r.jsx(e,{variant:"ghost",disabled:!0,children:"Ghost"})]})]})]}),r.jsx("style",{children:`
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
      `})]})};var b,B,j;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...(j=(B=a.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var z,w,S;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var f,N,L;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...(L=(N=t.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var D,M,k;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: "Small Button"
  }
}`,...(k=(M=o.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var P,I,C;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: "md",
    children: "Medium Button"
  }
}`,...(C=(I=i.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var G,T,A;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: "Large Button"
  }
}`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var O,W,E;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled Button"
  }
}`,...(E=(W=d.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var U,V,_;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    disabled: true,
    children: "Disabled Primary"
  }
}`,...(_=(V=l.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var R,q,F;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    disabled: true,
    children: "Disabled Secondary"
  }
}`,...(F=(q=m.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: <Icon name="user" size={16} />,
    'aria-label': 'User profile'
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: "This is a button with very long text content"
  }
}`,...(rr=($=p.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,nr,ar;g.parameters={...g.parameters,docs:{...(er=g.parameters)==null?void 0:er.docs,source:{originalSource:`{
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
}`,...(ar=(nr=g.parameters)==null?void 0:nr.docs)==null?void 0:ar.source}}};var sr,tr,or;x.parameters={...x.parameters,docs:{...(sr=x.parameters)==null?void 0:sr.docs,source:{originalSource:`{
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
}`,...(or=(tr=x.parameters)==null?void 0:tr.docs)==null?void 0:or.source}}};var ir,cr,dr;v.parameters={...v.parameters,docs:{...(ir=v.parameters)==null?void 0:ir.docs,source:{originalSource:`{
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
}`,...(dr=(cr=v.parameters)==null?void 0:cr.docs)==null?void 0:dr.source}}};var lr,mr,ur;y.parameters={...y.parameters,docs:{...(lr=y.parameters)==null?void 0:lr.docs,source:{originalSource:`{
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
}`,...(ur=(mr=y.parameters)==null?void 0:mr.docs)==null?void 0:ur.source}}};const wr=["Primary","Secondary","Ghost","Small","Medium","Large","Disabled","DisabledPrimary","DisabledSecondary","WithIcon","IconOnly","LongText","AllVariants","Interactive","ButtonGroup","ThemeShowcase"];export{g as AllVariants,v as ButtonGroup,d as Disabled,l as DisabledPrimary,m as DisabledSecondary,t as Ghost,h as IconOnly,x as Interactive,c as Large,p as LongText,i as Medium,a as Primary,s as Secondary,o as Small,y as ThemeShowcase,u as WithIcon,wr as __namedExportsOrder,zr as default};
