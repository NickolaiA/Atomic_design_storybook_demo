import{r as D,j as e}from"./iframe-CdBaqdCg.js";import"./preload-helper-PPVm8Dsz.js";const B=({isActive:m})=>e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`collapse-icon ${m?"collapse-icon--active":""}`,children:e.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),F=({items:m,activeKey:a,defaultActiveKey:d,accordion:V=!1,onChange:f,className:g="",size:l="medium",bordered:t=!0,showIcon:y=!0,iconPosition:b="left",collapsible:u="header",expandIcon:s,ghost:v=!1})=>{const h=()=>a!==void 0?Array.isArray(a)?a:[a]:d!==void 0?Array.isArray(d)?d:[d]:[],[$,L]=D.useState(h),c=a!==void 0?Array.isArray(a)?a:[a]:$,x=r=>{if(u==="disabled")return;let i;if(V?i=c.includes(r)?[]:[r]:c.includes(r)?i=c.filter(p=>p!==r):i=[...c,r],a===void 0&&L(i),f){const p=V&&i.length>0?i[0]:i;f(p)}},o=s||B;return e.jsx("div",{className:`
        collapse
        collapse--${l}
        ${t?"collapse--bordered":""}
        ${v?"collapse--ghost":""}
        ${g}
      `,children:m.map(r=>{const i=c.includes(r.key),p=r.disabled||u==="disabled";return e.jsx(M,{itemKey:r.key,header:r.header,children:r.children,disabled:r.disabled,className:r.className,extra:r.extra,isActive:i,isDisabled:p,onToggle:()=>x(r.key),showIcon:y,iconPosition:b,collapsible:u,ExpandIconComponent:o},r.key)})})},M=({_key:m,header:a,children:d,_disabled:V,className:f="",extra:g,isActive:l,isDisabled:t,onToggle:y,showIcon:b,iconPosition:u,collapsible:s,ExpandIconComponent:v})=>{const h=D.useRef(null),[$,L]=D.useState(0);D.useEffect(()=>{if(h.current){const o=l?h.current.scrollHeight:0;L(o)}},[l,d]);const c=()=>{!t&&(s==="header"||s==="icon")&&y()},x=o=>{o.stopPropagation(),!t&&s==="icon"&&y()};return e.jsxs("div",{className:`
        collapse-item
        ${l?"collapse-item--active":""}
        ${t?"collapse-item--disabled":""}
        ${f}
      `,children:[e.jsxs("div",{className:`
          collapse-header
          ${s==="header"||s==="icon"?"collapse-header--clickable":""}
          ${u==="right"?"collapse-header--icon-right":""}
        `,onClick:s==="header"?c:void 0,role:!t&&(s==="header"||s==="icon")?"button":void 0,tabIndex:!t&&(s==="header"||s==="icon")?0:-1,"aria-expanded":!t&&(s==="header"||s==="icon")?l:void 0,"aria-disabled":t?!0:void 0,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&!t&&(o.preventDefault(),c())},children:[b&&u==="left"&&e.jsx("div",{className:"collapse-icon-wrapper",onClick:s==="icon"?x:void 0,children:e.jsx(v,{isActive:l})}),e.jsx("div",{className:"collapse-header-content",children:a}),g&&e.jsx("div",{className:"collapse-header-extra",children:g}),b&&u==="right"&&e.jsx("div",{className:"collapse-icon-wrapper",onClick:s==="icon"?x:void 0,children:e.jsx(v,{isActive:l})})]}),e.jsx("div",{className:"collapse-content",style:{height:$+"px"},children:e.jsx("div",{ref:h,className:"collapse-content-inner",children:d})})]})};F.displayName="Collapse";F.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"CollapseItemProps"}],raw:"CollapseItemProps[]"},description:"Array of collapse items"},activeKey:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Currently active (expanded) keys"},defaultActiveKey:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Default active keys (uncontrolled)"},accordion:{required:!1,tsType:{name:"boolean"},description:"Whether to allow multiple panels to be expanded at once",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"key"}],return:{name:"void"}}},description:"Callback when panel expansion changes"},className:{required:!1,tsType:{name:"string"},description:"Custom className for the collapse container",defaultValue:{value:"''",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'medium'",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Whether to show borders",defaultValue:{value:"true",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show expand/collapse icons",defaultValue:{value:"true",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Position of the expand/collapse icon",defaultValue:{value:"'left'",computed:!1}},collapsible:{required:!1,tsType:{name:"union",raw:"'header' | 'icon' | 'disabled'",elements:[{name:"literal",value:"'header'"},{name:"literal",value:"'icon'"},{name:"literal",value:"'disabled'"}]},description:"Whether panels should be collapsible (can all be closed)",defaultValue:{value:"'header'",computed:!1}},expandIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"(panelProps: { isActive: boolean }) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ isActive: boolean }",signature:{properties:[{key:"isActive",value:{name:"boolean",required:!0}}]}},name:"panelProps"}],return:{name:"ReactNode"}}},description:"Custom expand icon"},ghost:{required:!1,tsType:{name:"boolean"},description:"Whether to use ghost style (no background/border)",defaultValue:{value:"false",computed:!1}}}};const G={title:"Atoms/Collapse",component:F,parameters:{layout:"padded",docs:{description:{component:"A versatile collapse component that creates accordion-style collapsible panels with smooth animations, keyboard navigation, and customizable styling options."}}},argTypes:{items:{description:"Array of collapse items to display",control:!1},activeKey:{description:"Currently active (expanded) keys (controlled)",control:"text"},defaultActiveKey:{description:"Default active keys (uncontrolled)",control:"text"},accordion:{description:"Whether to allow only one panel to be expanded at once",control:"boolean"},onChange:{description:"Callback when panel expansion changes",action:"changed"},className:{description:"Custom CSS class",control:"text"},size:{description:"Size variant",control:"select",options:["small","medium","large"]},bordered:{description:"Whether to show borders",control:"boolean"},showIcon:{description:"Whether to show expand/collapse icons",control:"boolean"},iconPosition:{description:"Position of the expand/collapse icon",control:"select",options:["left","right"]},collapsible:{description:"How panels can be collapsed",control:"select",options:["header","icon","disabled"]},ghost:{description:"Whether to use ghost style (no background/border)",control:"boolean"}}},n=[{key:"1",header:"Getting Started",children:e.jsxs("div",{children:[e.jsx("p",{children:"Welcome to our comprehensive guide! Here you'll learn the basics of getting started with our platform."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Create your account"}),e.jsx("li",{children:"Set up your profile"}),e.jsx("li",{children:"Explore the dashboard"}),e.jsx("li",{children:"Complete your first task"})]})]})},{key:"2",header:"Advanced Features",children:e.jsxs("div",{children:[e.jsx("p",{children:"Discover powerful features that will enhance your productivity:"}),e.jsxs("div",{className:"feature-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Automation"}),e.jsx("p",{children:"Set up automated workflows to save time."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Integrations"}),e.jsx("p",{children:"Connect with your favorite tools and services."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Analytics"}),e.jsx("p",{children:"Track your progress with detailed insights."})]})]})]})},{key:"3",header:"Troubleshooting",children:e.jsxs("div",{children:[e.jsx("p",{children:"Common issues and their solutions:"}),e.jsxs("div",{className:"troubleshooting-section",children:[e.jsx("h4",{children:"Login Problems"}),e.jsx("p",{children:"If you're having trouble logging in, try these steps:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Clear your browser cache"}),e.jsx("li",{children:"Check your internet connection"}),e.jsx("li",{children:"Reset your password if needed"})]}),e.jsx("h4",{children:"Performance Issues"}),e.jsx("p",{children:"To improve performance:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Close unnecessary browser tabs"}),e.jsx("li",{children:"Update your browser to the latest version"}),e.jsx("li",{children:"Disable browser extensions temporarily"})]})]})]})}],H=[{key:"1",header:"Premium Features",extra:e.jsx("span",{className:"badge",children:"Pro"}),children:e.jsx("p",{children:"Access to premium features including advanced analytics, priority support, and custom integrations."})},{key:"2",header:"Free Features",extra:e.jsx("span",{className:"badge badge--free",children:"Free"}),children:e.jsx("p",{children:"All the essential features you need to get started, completely free of charge."})},{key:"3",header:"Beta Features",extra:e.jsx("span",{className:"badge badge--beta",children:"Beta"}),children:e.jsx("p",{children:"Try out our latest experimental features. Please note these may change or be removed in future updates."})}],O=[{key:"1",header:"Terms of Service",children:e.jsxs("div",{className:"legal-content",children:[e.jsx("h4",{children:"1. Acceptance of Terms"}),e.jsx("p",{children:"By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement."}),e.jsx("h4",{children:"2. Privacy Policy"}),e.jsx("p",{children:"Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service."}),e.jsx("h4",{children:"3. User Responsibilities"}),e.jsx("p",{children:"You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Keep your login credentials secure"}),e.jsx("li",{children:"Report any unauthorized access immediately"}),e.jsx("li",{children:"Use the service in compliance with applicable laws"}),e.jsx("li",{children:"Respect other users and their content"})]}),e.jsx("h4",{children:"4. Service Availability"}),e.jsx("p",{children:"We strive to keep our service available 24/7, but we cannot guarantee uninterrupted access. We may perform maintenance that temporarily limits access."}),e.jsx("h4",{children:"5. Modifications to Terms"}),e.jsx("p",{children:"We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through the service interface."})]})},{key:"2",header:"Privacy Policy",children:e.jsxs("div",{className:"legal-content",children:[e.jsx("h4",{children:"Information We Collect"}),e.jsx("p",{children:"We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support."}),e.jsx("h4",{children:"How We Use Your Information"}),e.jsxs("ul",{children:[e.jsx("li",{children:"To provide and maintain our service"}),e.jsx("li",{children:"To notify you about changes to our service"}),e.jsx("li",{children:"To provide customer support"}),e.jsx("li",{children:"To detect, prevent and address technical issues"})]}),e.jsx("h4",{children:"Data Security"}),e.jsx("p",{children:"We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."})]})}],j={args:{items:n,size:"medium",bordered:!0,showIcon:!0,iconPosition:"left",accordion:!1,collapsible:"header",ghost:!1}},w={args:{items:n,accordion:!0,defaultActiveKey:"1",size:"medium",bordered:!0,showIcon:!0,iconPosition:"left",collapsible:"header",ghost:!1}},k={args:{items:n,defaultActiveKey:["1","3"],size:"medium",bordered:!0,showIcon:!0,iconPosition:"left",accordion:!1,collapsible:"header",ghost:!1}},I={args:{items:n.slice(0,2),size:"small",defaultActiveKey:"1",bordered:!0,showIcon:!0,iconPosition:"left",accordion:!1,collapsible:"header",ghost:!1}},P={args:{items:n.slice(0,2),size:"large",defaultActiveKey:"1",bordered:!0,showIcon:!0,iconPosition:"left",accordion:!1,collapsible:"header",ghost:!1}},C={args:{items:n,iconPosition:"right",defaultActiveKey:"2",size:"medium",bordered:!0,showIcon:!0,accordion:!1,collapsible:"header",ghost:!1}},N={args:{items:n,showIcon:!1,defaultActiveKey:"1",size:"medium",bordered:!0,iconPosition:"left",accordion:!1,collapsible:"header",ghost:!1}},A={args:{items:n,collapsible:"icon",defaultActiveKey:"2",size:"medium",bordered:!0,showIcon:!0,iconPosition:"left",accordion:!1,ghost:!1},parameters:{docs:{description:{story:"Only the icon is clickable, not the entire header."}}}},S={args:{items:n,collapsible:"disabled",defaultActiveKey:["1","2"],size:"medium",bordered:!0,showIcon:!0,iconPosition:"left",accordion:!1,ghost:!1},parameters:{docs:{description:{story:"Panels cannot be collapsed or expanded."}}}},z={args:{items:n,bordered:!1,defaultActiveKey:"1",size:"medium",showIcon:!0,iconPosition:"left",accordion:!1,collapsible:"header",ghost:!1}},T={args:{items:n,ghost:!0,defaultActiveKey:"2",size:"medium",bordered:!1,showIcon:!0,iconPosition:"left",accordion:!1,collapsible:"header"},parameters:{docs:{description:{story:"Transparent background with minimal styling."}}}},K={args:{items:H,defaultActiveKey:"1",size:"medium",bordered:!0,showIcon:!0,iconPosition:"left",accordion:!1,collapsible:"header",ghost:!1},parameters:{docs:{description:{story:"Panels with extra content like badges in the header."}}}},W={args:{items:O,defaultActiveKey:"1",size:"medium",bordered:!0,showIcon:!0,iconPosition:"left",accordion:!0,collapsible:"header",ghost:!1},parameters:{docs:{description:{story:"Panels with longer content to demonstrate scrolling and height animations."}}}},E={args:{items:[{key:"1",header:"Normal Panel",children:e.jsx("p",{children:"This is a normal panel with standard content."})},{key:"2",header:"Disabled Panel",disabled:!0,children:e.jsx("p",{children:"This panel is disabled and cannot be toggled."})},{key:"3",header:"Panel with Badge",extra:e.jsx("span",{className:"badge badge--new",children:"New"}),children:e.jsx("p",{children:"This panel has a badge in the header."})}],defaultActiveKey:"1",size:"medium",bordered:!0,showIcon:!0,iconPosition:"left",accordion:!1,collapsible:"header",ghost:!1},parameters:{docs:{description:{story:"Combination of normal, disabled, and enhanced panels."}}}},q={args:{items:[{key:"1",header:"Account Settings",children:e.jsxs("div",{className:"interactive-content",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email-input",children:"Email:"}),e.jsx("input",{id:"email-input",type:"email",defaultValue:"user@example.com"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"name-input",children:"Name:"}),e.jsx("input",{id:"name-input",type:"text",defaultValue:"John Doe"})]}),e.jsx("button",{className:"btn",children:"Save Changes"})]})},{key:"2",header:"Notifications",children:e.jsx("div",{className:"interactive-content",children:e.jsxs("div",{className:"checkbox-group",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",defaultChecked:!0}),"Email notifications"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"SMS notifications"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",defaultChecked:!0}),"Push notifications"]})]})})},{key:"3",header:"Privacy Settings",children:e.jsx("div",{className:"interactive-content",children:e.jsxs("div",{className:"radio-group",children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"privacy",value:"public"}),"Public profile"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"privacy",value:"friends",defaultChecked:!0}),"Friends only"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"privacy",value:"private"}),"Private"]})]})})}],defaultActiveKey:"1",size:"medium",bordered:!0,showIcon:!0,iconPosition:"left",accordion:!1,collapsible:"header",ghost:!1},parameters:{docs:{description:{story:"Interactive form elements within collapse panels."}}}},R={args:{items:[{key:"1",header:"Main Category",children:e.jsx(F,{items:[{key:"sub1",header:"Subcategory 1",children:e.jsx("p",{children:"Content for subcategory 1"})},{key:"sub2",header:"Subcategory 2",children:e.jsx("p",{children:"Content for subcategory 2"})}],size:"small",ghost:!0})},{key:"2",header:"Another Category",children:e.jsx("p",{children:"Regular content without nesting."})}],defaultActiveKey:"1",size:"medium",bordered:!0,showIcon:!0,iconPosition:"left",accordion:!1,collapsible:"header",ghost:!1},parameters:{docs:{description:{story:"Nested collapse components for hierarchical content."}}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    size: 'medium',
    bordered: true,
    showIcon: true,
    iconPosition: 'left',
    accordion: false,
    collapsible: 'header',
    ghost: false
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    accordion: true,
    defaultActiveKey: '1',
    size: 'medium',
    bordered: true,
    showIcon: true,
    iconPosition: 'left',
    collapsible: 'header',
    ghost: false
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    defaultActiveKey: ['1', '3'],
    size: 'medium',
    bordered: true,
    showIcon: true,
    iconPosition: 'left',
    accordion: false,
    collapsible: 'header',
    ghost: false
  }
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 2),
    size: 'small',
    defaultActiveKey: '1',
    bordered: true,
    showIcon: true,
    iconPosition: 'left',
    accordion: false,
    collapsible: 'header',
    ghost: false
  }
}`,...I.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 2),
    size: 'large',
    defaultActiveKey: '1',
    bordered: true,
    showIcon: true,
    iconPosition: 'left',
    accordion: false,
    collapsible: 'header',
    ghost: false
  }
}`,...P.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    iconPosition: 'right',
    defaultActiveKey: '2',
    size: 'medium',
    bordered: true,
    showIcon: true,
    accordion: false,
    collapsible: 'header',
    ghost: false
  }
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    showIcon: false,
    defaultActiveKey: '1',
    size: 'medium',
    bordered: true,
    iconPosition: 'left',
    accordion: false,
    collapsible: 'header',
    ghost: false
  }
}`,...N.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    collapsible: 'icon',
    defaultActiveKey: '2',
    size: 'medium',
    bordered: true,
    showIcon: true,
    iconPosition: 'left',
    accordion: false,
    ghost: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Only the icon is clickable, not the entire header.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    collapsible: 'disabled',
    defaultActiveKey: ['1', '2'],
    size: 'medium',
    bordered: true,
    showIcon: true,
    iconPosition: 'left',
    accordion: false,
    ghost: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Panels cannot be collapsed or expanded.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    bordered: false,
    defaultActiveKey: '1',
    size: 'medium',
    showIcon: true,
    iconPosition: 'left',
    accordion: false,
    collapsible: 'header',
    ghost: false
  }
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    ghost: true,
    defaultActiveKey: '2',
    size: 'medium',
    bordered: false,
    showIcon: true,
    iconPosition: 'left',
    accordion: false,
    collapsible: 'header'
  },
  parameters: {
    docs: {
      description: {
        story: 'Transparent background with minimal styling.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    items: itemsWithExtra,
    defaultActiveKey: '1',
    size: 'medium',
    bordered: true,
    showIcon: true,
    iconPosition: 'left',
    accordion: false,
    collapsible: 'header',
    ghost: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Panels with extra content like badges in the header.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    items: longContentItems,
    defaultActiveKey: '1',
    size: 'medium',
    bordered: true,
    showIcon: true,
    iconPosition: 'left',
    accordion: true,
    collapsible: 'header',
    ghost: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Panels with longer content to demonstrate scrolling and height animations.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      header: 'Normal Panel',
      children: <p>This is a normal panel with standard content.</p>
    }, {
      key: '2',
      header: 'Disabled Panel',
      disabled: true,
      children: <p>This panel is disabled and cannot be toggled.</p>
    }, {
      key: '3',
      header: 'Panel with Badge',
      extra: <span className="badge badge--new">New</span>,
      children: <p>This panel has a badge in the header.</p>
    }],
    defaultActiveKey: '1',
    size: 'medium',
    bordered: true,
    showIcon: true,
    iconPosition: 'left',
    accordion: false,
    collapsible: 'header',
    ghost: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Combination of normal, disabled, and enhanced panels.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      header: 'Account Settings',
      children: <div className="interactive-content">\r
            <div className="form-group">\r
              <label htmlFor="email-input">Email:</label>\r
              <input id="email-input" type="email" defaultValue="user@example.com" />\r
            </div>\r
            <div className="form-group">\r
              <label htmlFor="name-input">Name:</label>\r
              <input id="name-input" type="text" defaultValue="John Doe" />\r
            </div>\r
            <button className="btn">Save Changes</button>\r
          </div>
    }, {
      key: '2',
      header: 'Notifications',
      children: <div className="interactive-content">\r
            <div className="checkbox-group">\r
              <label>\r
                <input type="checkbox" defaultChecked />\r
                Email notifications\r
              </label>\r
              <label>\r
                <input type="checkbox" />\r
                SMS notifications\r
              </label>\r
              <label>\r
                <input type="checkbox" defaultChecked />\r
                Push notifications\r
              </label>\r
            </div>\r
          </div>
    }, {
      key: '3',
      header: 'Privacy Settings',
      children: <div className="interactive-content">\r
            <div className="radio-group">\r
              <label>\r
                <input type="radio" name="privacy" value="public" />\r
                Public profile\r
              </label>\r
              <label>\r
                <input type="radio" name="privacy" value="friends" defaultChecked />\r
                Friends only\r
              </label>\r
              <label>\r
                <input type="radio" name="privacy" value="private" />\r
                Private\r
              </label>\r
            </div>\r
          </div>
    }],
    defaultActiveKey: '1',
    size: 'medium',
    bordered: true,
    showIcon: true,
    iconPosition: 'left',
    accordion: false,
    collapsible: 'header',
    ghost: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive form elements within collapse panels.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      header: 'Main Category',
      children: <Collapse items={[{
        key: 'sub1',
        header: 'Subcategory 1',
        children: <p>Content for subcategory 1</p>
      }, {
        key: 'sub2',
        header: 'Subcategory 2',
        children: <p>Content for subcategory 2</p>
      }]} size="small" ghost={true} />
    }, {
      key: '2',
      header: 'Another Category',
      children: <p>Regular content without nesting.</p>
    }],
    defaultActiveKey: '1',
    size: 'medium',
    bordered: true,
    showIcon: true,
    iconPosition: 'left',
    accordion: false,
    collapsible: 'header',
    ghost: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Nested collapse components for hierarchical content.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};const Y=["Default","Accordion","DefaultExpanded","SmallSize","LargeSize","IconRight","NoIcon","IconOnlyCollapsible","DisabledCollapse","Borderless","Ghost","WithExtraContent","LongContent","MixedConfiguration","InteractiveExample","NestedContent"];export{w as Accordion,z as Borderless,j as Default,k as DefaultExpanded,S as DisabledCollapse,T as Ghost,A as IconOnlyCollapsible,C as IconRight,q as InteractiveExample,P as LargeSize,W as LongContent,E as MixedConfiguration,R as NestedContent,N as NoIcon,I as SmallSize,K as WithExtraContent,Y as __namedExportsOrder,G as default};
