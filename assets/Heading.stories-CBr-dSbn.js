import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";const a=({level:F="h2",variant:W="default",color:$="primary",centered:B=!1,truncate:O=!1,className:G="",children:J,id:K,...Q})=>{const X=F,Y=["heading",`heading--${W}`,`heading--color-${$}`,B&&"heading--centered",O&&"heading--truncate",G].filter(Boolean).join(" ");return e.jsx(X,{className:Y,id:K,...Q,children:J})};a.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{level:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"The heading level (h1-h6)",defaultValue:{value:"'h2'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'display' | 'title' | 'subtitle' | 'default'",elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'title'"},{name:"literal",value:"'subtitle'"},{name:"literal",value:"'default'"}]},description:"Visual variant that can differ from semantic level",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'muted' | 'accent'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'accent'"}]},description:"Text color variant",defaultValue:{value:"'primary'",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Whether to center align the text",defaultValue:{value:"false",computed:!1}},truncate:{required:!1,tsType:{name:"boolean"},description:"Whether to truncate long text with ellipsis",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Heading content"},id:{required:!1,tsType:{name:"string"},description:"HTML id attribute"}}};const ae={title:"Atoms/Heading",component:a,parameters:{layout:"centered"},argTypes:{level:{control:"select",options:["h1","h2","h3","h4","h5","h6"],description:"Semantic heading level for accessibility"},variant:{control:"select",options:["display","title","subtitle","default"],description:"Visual appearance independent of semantic level"},color:{control:"select",options:["primary","secondary","muted","accent"],description:"Color variant using theme tokens"},centered:{control:"boolean",description:"Center align the heading text"},truncate:{control:"boolean",description:"Truncate long text with ellipsis"},children:{control:"text",description:"Heading content"}},args:{children:"Sample Heading Text"}},r={parameters:{docs:{description:{story:"Default heading with h2 semantic level and default visual styling."}}}},i={render:()=>e.jsxs("div",{className:"heading-story-section",children:[e.jsx(a,{level:"h1",children:"H1 - Main Page Title"}),e.jsx(a,{level:"h2",children:"H2 - Section Heading"}),e.jsx(a,{level:"h3",children:"H3 - Subsection Heading"}),e.jsx(a,{level:"h4",children:"H4 - Sub-subsection Heading"}),e.jsx(a,{level:"h5",children:"H5 - Minor Heading"}),e.jsx(a,{level:"h6",children:"H6 - Smallest Heading"})]}),parameters:{docs:{description:{story:"All semantic heading levels (h1-h6) with default visual styling."}}}},t={render:()=>e.jsxs("div",{className:"heading-story-section",children:[e.jsx(a,{variant:"display",children:"Display - Largest visual style"}),e.jsx(a,{variant:"title",children:"Title - Large visual style"}),e.jsx(a,{variant:"subtitle",children:"Subtitle - Medium visual style"}),e.jsx(a,{variant:"default",children:"Default - Standard visual style"})]}),parameters:{docs:{description:{story:"Visual variants that can be used independently of semantic level."}}}},n={render:()=>e.jsxs("div",{className:"heading-story-section",children:[e.jsx(a,{color:"primary",children:"Primary Color (Default)"}),e.jsx(a,{color:"secondary",children:"Secondary Color"}),e.jsx(a,{color:"muted",children:"Muted Color"}),e.jsx(a,{color:"accent",children:"Accent Color"})]}),parameters:{docs:{description:{story:"Different color variants using theme color tokens."}}}},s={render:()=>e.jsxs("div",{className:"heading-story-section",children:[e.jsx(a,{centered:!0,children:"Centered Heading"}),e.jsx("div",{className:"heading-story-truncate-demo",children:e.jsx(a,{truncate:!0,children:"This is a very long heading that will be truncated"})}),e.jsx(a,{centered:!0,color:"accent",variant:"title",children:"Centered Accent Title"})]}),parameters:{docs:{description:{story:"Examples of modifier props like centered and truncate."}}}},l={render:()=>e.jsxs("div",{className:"heading-story-section",children:[e.jsxs("div",{className:"heading-story-example",children:[e.jsx("h4",{children:"Semantic H1 with Display Variant:"}),e.jsx(a,{level:"h1",variant:"display",children:"Large Visual, H1 Semantic"})]}),e.jsxs("div",{className:"heading-story-example",children:[e.jsx("h4",{children:"Semantic H3 with Title Variant:"}),e.jsx(a,{level:"h3",variant:"title",children:"Medium Visual, H3 Semantic"})]}),e.jsxs("div",{className:"heading-story-example",children:[e.jsx("h4",{children:"Semantic H6 with Display Variant:"}),e.jsx(a,{level:"h6",variant:"display",children:"Large Visual, H6 Semantic"})]})]}),parameters:{docs:{description:{story:"Demonstrates how semantic level and visual appearance can be independent for better accessibility and design flexibility."}}}},o={args:{variant:"display",children:"Responsive Display Heading"},parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1200px",height:"800px"}}}},docs:{description:{story:"Display variant heading that scales responsively. Use viewport controls to see size changes."}}}},d={render:()=>e.jsxs("div",{className:"heading-story-theme-demo",children:[e.jsx(a,{variant:"display",color:"primary",children:"Theme Integration Demo"}),e.jsx(a,{variant:"title",color:"accent",children:"Accent Color Title"}),e.jsx(a,{variant:"subtitle",color:"secondary",children:"Secondary Color Subtitle"}),e.jsx(a,{color:"muted",children:"Muted Color Text"}),e.jsxs("div",{className:"heading-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"--color-text"}),": Primary text color"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--color-text-secondary"}),": Secondary text color"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--color-text-muted"}),": Muted text color"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--color-accent"}),": Accent color"]}),e.jsxs("li",{children:[e.jsx("code",{children:"--font-sans"}),": Font family"]})]})]})]}),parameters:{docs:{description:{story:"Demonstrates how headings adapt to different themes. Switch themes in the toolbar to see color changes."}}}},c={render:()=>e.jsxs("div",{className:"heading-story-grid",children:[e.jsxs("div",{className:"heading-story-grid-section",children:[e.jsx("h4",{children:"Display Variant"}),e.jsx(a,{level:"h1",variant:"display",color:"primary",children:"H1 Display Primary"}),e.jsx(a,{level:"h2",variant:"display",color:"accent",children:"H2 Display Accent"})]}),e.jsxs("div",{className:"heading-story-grid-section",children:[e.jsx("h4",{children:"Title Variant"}),e.jsx(a,{level:"h2",variant:"title",color:"primary",children:"H2 Title Primary"}),e.jsx(a,{level:"h3",variant:"title",color:"secondary",children:"H3 Title Secondary"})]}),e.jsxs("div",{className:"heading-story-grid-section",children:[e.jsx("h4",{children:"Subtitle Variant"}),e.jsx(a,{level:"h3",variant:"subtitle",color:"primary",children:"H3 Subtitle Primary"}),e.jsx(a,{level:"h4",variant:"subtitle",color:"muted",children:"H4 Subtitle Muted"})]}),e.jsxs("div",{className:"heading-story-grid-section",children:[e.jsx("h4",{children:"Default Variant"}),e.jsx(a,{level:"h4",color:"primary",children:"H4 Default Primary"}),e.jsx(a,{level:"h5",color:"secondary",children:"H5 Default Secondary"})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of heading combinations across levels, variants, and colors."}}}},h={args:{level:"h2",variant:"title",color:"primary",children:"Interactive Heading",centered:!1,truncate:!1},parameters:{docs:{description:{story:"Interactive story where you can modify all heading properties using the controls panel."}}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default heading with h2 semantic level and default visual styling.'
      }
    }
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,v,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="heading-story-section">\r
      <Heading level="h1">H1 - Main Page Title</Heading>\r
      <Heading level="h2">H2 - Section Heading</Heading>\r
      <Heading level="h3">H3 - Subsection Heading</Heading>\r
      <Heading level="h4">H4 - Sub-subsection Heading</Heading>\r
      <Heading level="h5">H5 - Minor Heading</Heading>\r
      <Heading level="h6">H6 - Smallest Heading</Heading>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All semantic heading levels (h1-h6) with default visual styling.'
      }
    }
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var H,x,f;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="heading-story-section">\r
      <Heading variant="display">Display - Largest visual style</Heading>\r
      <Heading variant="title">Title - Large visual style</Heading>\r
      <Heading variant="subtitle">Subtitle - Medium visual style</Heading>\r
      <Heading variant="default">Default - Standard visual style</Heading>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Visual variants that can be used independently of semantic level.'
      }
    }
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var j,S,b;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="heading-story-section">\r
      <Heading color="primary">Primary Color (Default)</Heading>\r
      <Heading color="secondary">Secondary Color</Heading>\r
      <Heading color="muted">Muted Color</Heading>\r
      <Heading color="accent">Accent Color</Heading>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different color variants using theme color tokens.'
      }
    }
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var w,D,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="heading-story-section">\r
      <Heading centered>Centered Heading</Heading>\r
      <div className="heading-story-truncate-demo">\r
        <Heading truncate>This is a very long heading that will be truncated</Heading>\r
      </div>\r
      <Heading centered color="accent" variant="title">\r
        Centered Accent Title\r
      </Heading>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of modifier props like centered and truncate.'
      }
    }
  }
}`,...(T=(D=s.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var V,N,C;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="heading-story-section">\r
      <div className="heading-story-example">\r
        <h4>Semantic H1 with Display Variant:</h4>\r
        <Heading level="h1" variant="display">Large Visual, H1 Semantic</Heading>\r
      </div>\r
      \r
      <div className="heading-story-example">\r
        <h4>Semantic H3 with Title Variant:</h4>\r
        <Heading level="h3" variant="title">Medium Visual, H3 Semantic</Heading>\r
      </div>\r
      \r
      <div className="heading-story-example">\r
        <h4>Semantic H6 with Display Variant:</h4>\r
        <Heading level="h6" variant="display">Large Visual, H6 Semantic</Heading>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how semantic level and visual appearance can be independent for better accessibility and design flexibility.'
      }
    }
  }
}`,...(C=(N=l.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var M,A,P;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'display',
    children: 'Responsive Display Heading'
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px'
          }
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px'
          }
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1200px',
            height: '800px'
          }
        }
      }
    },
    docs: {
      description: {
        story: 'Display variant heading that scales responsively. Use viewport controls to see size changes.'
      }
    }
  }
}`,...(P=(A=o.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var L,k,I;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="heading-story-theme-demo">\r
      <Heading variant="display" color="primary">\r
        Theme Integration Demo\r
      </Heading>\r
      <Heading variant="title" color="accent">\r
        Accent Color Title\r
      </Heading>\r
      <Heading variant="subtitle" color="secondary">\r
        Secondary Color Subtitle\r
      </Heading>\r
      <Heading color="muted">\r
        Muted Color Text\r
      </Heading>\r
      \r
      <div className="heading-story-theme-info">\r
        <h4>Theme Variables Used:</h4>\r
        <ul>\r
          <li><code>--color-text</code>: Primary text color</li>\r
          <li><code>--color-text-secondary</code>: Secondary text color</li>\r
          <li><code>--color-text-muted</code>: Muted text color</li>\r
          <li><code>--color-accent</code>: Accent color</li>\r
          <li><code>--font-sans</code>: Font family</li>\r
        </ul>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how headings adapt to different themes. Switch themes in the toolbar to see color changes.'
      }
    }
  }
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var R,q,E;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="heading-story-grid">\r
      <div className="heading-story-grid-section">\r
        <h4>Display Variant</h4>\r
        <Heading level="h1" variant="display" color="primary">H1 Display Primary</Heading>\r
        <Heading level="h2" variant="display" color="accent">H2 Display Accent</Heading>\r
      </div>\r
      \r
      <div className="heading-story-grid-section">\r
        <h4>Title Variant</h4>\r
        <Heading level="h2" variant="title" color="primary">H2 Title Primary</Heading>\r
        <Heading level="h3" variant="title" color="secondary">H3 Title Secondary</Heading>\r
      </div>\r
      \r
      <div className="heading-story-grid-section">\r
        <h4>Subtitle Variant</h4>\r
        <Heading level="h3" variant="subtitle" color="primary">H3 Subtitle Primary</Heading>\r
        <Heading level="h4" variant="subtitle" color="muted">H4 Subtitle Muted</Heading>\r
      </div>\r
      \r
      <div className="heading-story-grid-section">\r
        <h4>Default Variant</h4>\r
        <Heading level="h4" color="primary">H4 Default Primary</Heading>\r
        <Heading level="h5" color="secondary">H5 Default Secondary</Heading>\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of heading combinations across levels, variants, and colors.'
      }
    }
  }
}`,...(E=(q=c.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var U,_,z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    level: 'h2',
    variant: 'title',
    color: 'primary',
    children: 'Interactive Heading',
    centered: false,
    truncate: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive story where you can modify all heading properties using the controls panel.'
      }
    }
  }
}`,...(z=(_=h.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const re=["Default","SemanticLevels","VisualVariants","ColorVariants","ModifierExamples","SemanticVsVisual","ResponsiveDemo","ThemeShowcase","AllCombinations","Interactive"];export{c as AllCombinations,n as ColorVariants,r as Default,h as Interactive,s as ModifierExamples,o as ResponsiveDemo,i as SemanticLevels,l as SemanticVsVisual,d as ThemeShowcase,t as VisualVariants,re as __namedExportsOrder,ae as default};
