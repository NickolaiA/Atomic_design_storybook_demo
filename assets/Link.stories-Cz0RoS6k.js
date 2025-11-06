import{j as e}from"./jsx-runtime-CDt2p4po.js";import{f as de}from"./index-BxLnRenJ.js";import"./index-GiUgBvb1.js";const r=({variant:n="default",size:Z="base",disabled:a=!1,underline:ee=!1,external:t=!1,href:re,target:v,rel:x,className:ne="",children:ae,id:te,onClick:f,...ie})=>{const se=["link",`link--variant-${n}`,`link--size-${Z}`,a&&"link--disabled",ee&&"link--underline",t&&"link--external",ne].filter(Boolean).join(" "),le=t&&!v?"_blank":v,oe=t&&!x?"noopener noreferrer":x,ce=b=>{if(a){b.preventDefault();return}f==null||f(b)};return e.jsxs("a",{className:se,href:a?void 0:re,target:le,rel:oe,id:te,onClick:ce,"aria-disabled":a?"true":"false",...ie,children:[ae,t&&!a&&e.jsx("span",{className:"link__external-icon","aria-label":"opens in new tab",children:"↗"})]})};r.__docgenInfo={description:"",methods:[],displayName:"Link",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'subtle' | 'accent' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'danger'"}]},description:"Link variant for different contexts",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'base' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"}]},description:"Size of the link",defaultValue:{value:"'base'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the link is disabled",defaultValue:{value:"false",computed:!1}},underline:{required:!1,tsType:{name:"boolean"},description:"Whether to underline the link",defaultValue:{value:"false",computed:!1}},external:{required:!1,tsType:{name:"boolean"},description:"Whether this is an external link",defaultValue:{value:"false",computed:!1}},href:{required:!1,tsType:{name:"string"},description:"URL to navigate to"},target:{required:!1,tsType:{name:"string"},description:"Target attribute for link"},rel:{required:!1,tsType:{name:"string"},description:"Rel attribute for link security"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Link content"},id:{required:!1,tsType:{name:"string"},description:"HTML id attribute"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]},name:"event"}],return:{name:"void"}}},description:"Click handler"}}};const ke={title:"Atoms/Link",component:r,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["default","subtle","accent","danger"],description:"Visual variant for different contexts"},size:{control:"select",options:["sm","base","lg"],description:"Size of the link text"},disabled:{control:"boolean",description:"Disabled state"},underline:{control:"boolean",description:"Always show underline"},external:{control:"boolean",description:"Mark as external link (adds icon and security attributes)"},href:{control:"text",description:"URL to navigate to"},target:{control:"text",description:"Target attribute (_blank, _self, etc.)"},rel:{control:"text",description:"Rel attribute for link security"},children:{control:"text",description:"Link content"},onClick:{action:"clicked"}},args:{children:"Sample Link",href:"#",onClick:de()}},i={parameters:{docs:{description:{story:"Default link with accent color and hover underline."}}}},s={render:()=>e.jsxs("div",{className:"link-story-section",children:[e.jsx(r,{variant:"default",href:"#",children:"Default - Accent color link"}),e.jsx(r,{variant:"subtle",href:"#",children:"Subtle - Inherits text color"}),e.jsx(r,{variant:"accent",href:"#",children:"Accent - Emphasized accent color"}),e.jsx(r,{variant:"danger",href:"#",children:"Danger - Warning/destructive actions"})]}),parameters:{docs:{description:{story:"Different visual variants for various contexts and actions."}}}},l={render:()=>e.jsxs("div",{className:"link-story-section",children:[e.jsx(r,{size:"sm",href:"#",children:"Small Link"}),e.jsx(r,{size:"base",href:"#",children:"Base Link (Default)"}),e.jsx(r,{size:"lg",href:"#",children:"Large Link"})]}),parameters:{docs:{description:{story:"Different sizes to match surrounding text or create hierarchy."}}}},o={render:()=>e.jsxs("div",{className:"link-story-section",children:[e.jsx(r,{href:"https://example.com",children:"Regular external link"}),e.jsx(r,{external:!0,href:"https://example.com",children:"External link with auto-config"}),e.jsx(r,{external:!0,href:"https://example.com",target:"_blank",rel:"noopener",children:"External with custom attributes"}),e.jsx(r,{external:!0,variant:"accent",href:"https://github.com",children:"External accent link"})]}),parameters:{docs:{description:{story:'External links with automatic security attributes and visual indicators. The external prop adds target="_blank" and rel="noopener noreferrer" automatically.'}}}},c={render:()=>e.jsxs("div",{className:"link-story-section",children:[e.jsx(r,{href:"#",children:"Normal Link"}),e.jsx(r,{href:"#",underline:!0,children:"Always Underlined"}),e.jsx(r,{disabled:!0,href:"#",children:"Disabled Link"}),e.jsx(r,{disabled:!0,underline:!0,href:"#",children:"Disabled Underlined"})]}),parameters:{docs:{description:{story:"Different link states including disabled and always-underlined variants."}}}},d={render:()=>e.jsxs("div",{className:"link-story-interactive",children:[e.jsxs("div",{className:"link-story-example",children:[e.jsx("h4",{children:"Navigation Links:"}),e.jsx(r,{href:"#home",onClick:n=>{n.preventDefault(),console.log("Navigate to home")},children:"Home Page"}),e.jsx(r,{href:"#about",variant:"subtle",onClick:n=>{n.preventDefault(),console.log("Navigate to about")},children:"About Us"})]}),e.jsxs("div",{className:"link-story-example",children:[e.jsx("h4",{children:"Action Links:"}),e.jsx(r,{href:"#",variant:"accent",onClick:n=>{n.preventDefault(),alert("Action triggered!")},children:"Trigger Action"}),e.jsx(r,{href:"#",variant:"danger",onClick:n=>{n.preventDefault(),confirm("Are you sure you want to delete?")},children:"Delete Item"})]}),e.jsxs("div",{className:"link-story-example",children:[e.jsx("h4",{children:"External Links:"}),e.jsx(r,{external:!0,href:"https://storybook.js.org",children:"Storybook Documentation"}),e.jsx(r,{external:!0,variant:"accent",href:"https://github.com",children:"GitHub Repository"})]})]}),parameters:{docs:{description:{story:"Interactive examples with click handlers. Check browser console for navigation events."}}}},h={render:()=>e.jsxs("div",{className:"link-story-accessibility",children:[e.jsxs("div",{className:"link-story-example",children:[e.jsx("h4",{children:"Accessible Link Patterns:"}),e.jsx(r,{href:"#main-content",children:"Skip to main content"}),e.jsx(r,{external:!0,href:"https://example.com",children:"External site (opens in new tab)"}),e.jsx(r,{href:"/download.pdf",target:"_blank","aria-label":"Download user manual (PDF, opens in new tab)",children:"Download Manual"})]}),e.jsxs("div",{className:"link-story-example",children:[e.jsx("h4",{children:"Focus and Keyboard Navigation:"}),e.jsx("p",{children:"Use Tab to navigate between these links:"}),e.jsx(r,{href:"#",variant:"default",children:"First Link"}),e.jsx(r,{href:"#",variant:"accent",children:"Second Link"}),e.jsx(r,{href:"#",disabled:!0,children:"Disabled Link (skipped)"}),e.jsx(r,{href:"#",variant:"subtle",children:"Third Link"})]})]}),parameters:{docs:{description:{story:"Accessibility features including proper ARIA labels, keyboard navigation, and skip links."}}}},u={render:()=>e.jsxs("div",{className:"link-story-text-example",children:[e.jsxs("p",{children:["This is a paragraph with ",e.jsx(r,{href:"#",variant:"default",children:"inline links"})," that flow naturally with the text. You can also have"," ",e.jsx(r,{external:!0,href:"https://example.com",children:"external links"})," and"," ",e.jsx(r,{href:"#",variant:"subtle",children:"subtle links"})," that blend in more. For actions that might be destructive, use"," ",e.jsx(r,{href:"#",variant:"danger",children:"danger variant links"}),"."]}),e.jsxs("p",{children:["Links can be"," ",e.jsx(r,{href:"#",size:"sm",children:"smaller"})," or"," ",e.jsx(r,{href:"#",size:"lg",children:"larger"})," to match the surrounding text size. You can also have"," ",e.jsx(r,{href:"#",underline:!0,children:"always underlined links"})," for emphasis."]})]}),parameters:{docs:{description:{story:"Links used inline within text content, showing how they integrate with typography."}}}},m={render:()=>e.jsxs("div",{className:"link-story-theme-demo",children:[e.jsxs("div",{className:"link-story-theme-section",children:[e.jsx("h3",{children:"Theme Adaptive Links"}),e.jsx(r,{variant:"default",href:"#",children:"Default Variant"}),e.jsx(r,{variant:"subtle",href:"#",children:"Subtle Variant"}),e.jsx(r,{variant:"accent",href:"#",children:"Accent Variant"}),e.jsx(r,{variant:"danger",href:"#",children:"Danger Variant"}),e.jsx(r,{external:!0,href:"#",children:"External Link"})]}),e.jsxs("div",{className:"link-story-theme-info",children:[e.jsx("h4",{children:"Theme Variables Used:"}),e.jsxs("div",{className:"link-story-theme-vars",children:[e.jsx("code",{children:"--color-accent"}),": Primary link color",e.jsx("br",{}),e.jsx("code",{children:"--color-accent-hover"}),": Hover state color",e.jsx("br",{}),e.jsx("code",{children:"--color-text"}),": Subtle variant color",e.jsx("br",{}),e.jsx("code",{children:"--color-text-muted"}),": Disabled state color",e.jsx("br",{}),e.jsx("code",{children:"--color-error"}),": Danger variant color"]})]})]}),parameters:{docs:{description:{story:"Links that adapt to different themes. Use the theme switcher in the toolbar to see color changes."}}}},k={render:()=>e.jsx("div",{className:"link-story-comprehensive",children:e.jsxs("div",{className:"link-story-grid",children:[e.jsxs("div",{className:"link-story-grid-section",children:[e.jsx("h4",{children:"Variant + Size Combinations"}),e.jsx(r,{variant:"default",size:"lg",href:"#",children:"Default Large"}),e.jsx(r,{variant:"accent",size:"base",href:"#",children:"Accent Base"}),e.jsx(r,{variant:"subtle",size:"sm",href:"#",children:"Subtle Small"}),e.jsx(r,{variant:"danger",size:"base",href:"#",children:"Danger Base"})]}),e.jsxs("div",{className:"link-story-grid-section",children:[e.jsx("h4",{children:"External Links"}),e.jsx(r,{external:!0,variant:"default",href:"#",children:"Default External"}),e.jsx(r,{external:!0,variant:"accent",href:"#",children:"Accent External"}),e.jsx(r,{external:!0,variant:"subtle",href:"#",children:"Subtle External"})]}),e.jsxs("div",{className:"link-story-grid-section",children:[e.jsx("h4",{children:"Special States"}),e.jsx(r,{underline:!0,href:"#",children:"Always Underlined"}),e.jsx(r,{disabled:!0,href:"#",children:"Disabled Link"}),e.jsx(r,{disabled:!0,external:!0,href:"#",children:"Disabled External"})]})]})}),parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of all link combinations and states."}}}},p={args:{variant:"default",size:"base",disabled:!1,underline:!1,external:!1,href:"#",children:"Interactive Link"},parameters:{docs:{description:{story:"Interactive story where you can modify all link properties using the controls panel."}}}};var L,g,y;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default link with accent color and hover underline.'
      }
    }
  }
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var j,w,D;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="link-story-section">\r
      <Link variant="default" href="#">Default - Accent color link</Link>\r
      <Link variant="subtle" href="#">Subtle - Inherits text color</Link>\r
      <Link variant="accent" href="#">Accent - Emphasized accent color</Link>\r
      <Link variant="danger" href="#">Danger - Warning/destructive actions</Link>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants for various contexts and actions.'
      }
    }
  }
}`,...(D=(w=s.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var N,S,A;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="link-story-section">\r
      <Link size="sm" href="#">Small Link</Link>\r
      <Link size="base" href="#">Base Link (Default)</Link>\r
      <Link size="lg" href="#">Large Link</Link>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different sizes to match surrounding text or create hierarchy.'
      }
    }
  }
}`,...(A=(S=l.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var E,T,z;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="link-story-section">\r
      <Link href="https://example.com">Regular external link</Link>\r
      <Link external href="https://example.com">\r
        External link with auto-config\r
      </Link>\r
      <Link external href="https://example.com" target="_blank" rel="noopener">\r
        External with custom attributes\r
      </Link>\r
      <Link external variant="accent" href="https://github.com">\r
        External accent link\r
      </Link>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'External links with automatic security attributes and visual indicators. The external prop adds target="_blank" and rel="noopener noreferrer" automatically.'
      }
    }
  }
}`,...(z=(T=o.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var V,C,I;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="link-story-section">\r
      <Link href="#">Normal Link</Link>\r
      <Link href="#" underline>Always Underlined</Link>\r
      <Link disabled href="#">Disabled Link</Link>\r
      <Link disabled underline href="#">Disabled Underlined</Link>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different link states including disabled and always-underlined variants.'
      }
    }
  }
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var R,U,_;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="link-story-interactive">\r
      <div className="link-story-example">\r
        <h4>Navigation Links:</h4>\r
        <Link href="#home" onClick={e => {
        e.preventDefault();
        console.log('Navigate to home');
      }}>\r
          Home Page\r
        </Link>\r
        <Link href="#about" variant="subtle" onClick={e => {
        e.preventDefault();
        console.log('Navigate to about');
      }}>\r
          About Us\r
        </Link>\r
      </div>\r
      \r
      <div className="link-story-example">\r
        <h4>Action Links:</h4>\r
        <Link href="#" variant="accent" onClick={e => {
        e.preventDefault();
        alert('Action triggered!');
      }}>\r
          Trigger Action\r
        </Link>\r
        <Link href="#" variant="danger" onClick={e => {
        e.preventDefault();
        confirm('Are you sure you want to delete?');
      }}>\r
          Delete Item\r
        </Link>\r
      </div>\r
      \r
      <div className="link-story-example">\r
        <h4>External Links:</h4>\r
        <Link external href="https://storybook.js.org">\r
          Storybook Documentation\r
        </Link>\r
        <Link external variant="accent" href="https://github.com">\r
          GitHub Repository\r
        </Link>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive examples with click handlers. Check browser console for navigation events.'
      }
    }
  }
}`,...(_=(U=d.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var q,H,M;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="link-story-accessibility">\r
      <div className="link-story-example">\r
        <h4>Accessible Link Patterns:</h4>\r
        <Link href="#main-content">Skip to main content</Link>\r
        <Link external href="https://example.com">\r
          External site (opens in new tab)\r
        </Link>\r
        <Link href="/download.pdf" target="_blank" aria-label="Download user manual (PDF, opens in new tab)">\r
          Download Manual\r
        </Link>\r
      </div>\r
      \r
      <div className="link-story-example">\r
        <h4>Focus and Keyboard Navigation:</h4>\r
        <p>Use Tab to navigate between these links:</p>\r
        <Link href="#" variant="default">First Link</Link>\r
        <Link href="#" variant="accent">Second Link</Link>\r
        <Link href="#" disabled>Disabled Link (skipped)</Link>\r
        <Link href="#" variant="subtle">Third Link</Link>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including proper ARIA labels, keyboard navigation, and skip links.'
      }
    }
  }
}`,...(M=(H=h.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var F,P,B;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="link-story-text-example">\r
      <p>\r
        This is a paragraph with <Link href="#" variant="default">inline links</Link> that \r
        flow naturally with the text. You can also have{' '}\r
        <Link external href="https://example.com">external links</Link> and{' '}\r
        <Link href="#" variant="subtle">subtle links</Link> that blend in more. \r
        For actions that might be destructive, use{' '}\r
        <Link href="#" variant="danger">danger variant links</Link>.\r
      </p>\r
      \r
      <p>\r
        Links can be{' '}\r
        <Link href="#" size="sm">smaller</Link> or{' '}\r
        <Link href="#" size="lg">larger</Link> to match the surrounding text size. \r
        You can also have{' '}\r
        <Link href="#" underline>always underlined links</Link> for emphasis.\r
      </p>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Links used inline within text content, showing how they integrate with typography.'
      }
    }
  }
}`,...(B=(P=u.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var W,Y,G;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="link-story-theme-demo">\r
      <div className="link-story-theme-section">\r
        <h3>Theme Adaptive Links</h3>\r
        <Link variant="default" href="#">Default Variant</Link>\r
        <Link variant="subtle" href="#">Subtle Variant</Link>\r
        <Link variant="accent" href="#">Accent Variant</Link>\r
        <Link variant="danger" href="#">Danger Variant</Link>\r
        <Link external href="#">External Link</Link>\r
      </div>\r
      \r
      <div className="link-story-theme-info">\r
        <h4>Theme Variables Used:</h4>\r
        <div className="link-story-theme-vars">\r
          <code>--color-accent</code>: Primary link color<br />\r
          <code>--color-accent-hover</code>: Hover state color<br />\r
          <code>--color-text</code>: Subtle variant color<br />\r
          <code>--color-text-muted</code>: Disabled state color<br />\r
          <code>--color-error</code>: Danger variant color\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Links that adapt to different themes. Use the theme switcher in the toolbar to see color changes.'
      }
    }
  }
}`,...(G=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var K,$,O;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="link-story-comprehensive">\r
      <div className="link-story-grid">\r
        <div className="link-story-grid-section">\r
          <h4>Variant + Size Combinations</h4>\r
          <Link variant="default" size="lg" href="#">Default Large</Link>\r
          <Link variant="accent" size="base" href="#">Accent Base</Link>\r
          <Link variant="subtle" size="sm" href="#">Subtle Small</Link>\r
          <Link variant="danger" size="base" href="#">Danger Base</Link>\r
        </div>\r
        \r
        <div className="link-story-grid-section">\r
          <h4>External Links</h4>\r
          <Link external variant="default" href="#">Default External</Link>\r
          <Link external variant="accent" href="#">Accent External</Link>\r
          <Link external variant="subtle" href="#">Subtle External</Link>\r
        </div>\r
        \r
        <div className="link-story-grid-section">\r
          <h4>Special States</h4>\r
          <Link underline href="#">Always Underlined</Link>\r
          <Link disabled href="#">Disabled Link</Link>\r
          <Link disabled external href="#">Disabled External</Link>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of all link combinations and states.'
      }
    }
  }
}`,...(O=($=k.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var J,Q,X;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'base',
    disabled: false,
    underline: false,
    external: false,
    href: '#',
    children: 'Interactive Link'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive story where you can modify all link properties using the controls panel.'
      }
    }
  }
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const pe=["Default","Variants","SizeVariants","ExternalLinks","States","InteractiveExamples","AccessibilityDemo","InlineTextExample","ThemeShowcase","AllCombinations","Interactive"];export{h as AccessibilityDemo,k as AllCombinations,i as Default,o as ExternalLinks,u as InlineTextExample,p as Interactive,d as InteractiveExamples,l as SizeVariants,c as States,m as ThemeShowcase,s as Variants,pe as __namedExportsOrder,ke as default};
