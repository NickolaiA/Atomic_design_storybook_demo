import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";const n=({size:r="lg",centered:R=!0,padding:V="md",background:q="default",maxWidth:a,className:B="",as:H="div",children:U,style:X,id:A,...F})=>{const O=H,E=["container",`container--${r}`,R&&"container--centered",`container--padding-${V}`,`container--bg-${q}`,B].filter(Boolean).join(" "),p={...X};return a&&(p.maxWidth=typeof a=="number"?`${a}px`:a),e.jsx(O,{className:E,style:Object.keys(p).length>0?p:void 0,id:A,...F,children:U})};n.__docgenInfo={description:"",methods:[],displayName:"Container",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'full'"}]},description:"Container size variant",defaultValue:{value:"'lg'",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Whether to center the container",defaultValue:{value:"true",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Padding variant",defaultValue:{value:"'md'",computed:!1}},background:{required:!1,tsType:{name:"union",raw:"'default' | 'panel' | 'transparent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'panel'"},{name:"literal",value:"'transparent'"}]},description:"Background variant for theming",defaultValue:{value:"'default'",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Custom max-width"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},as:{required:!1,tsType:{name:"union",raw:"'div' | 'main' | 'section' | 'article' | 'aside' | 'header' | 'footer'",elements:[{name:"literal",value:"'div'"},{name:"literal",value:"'main'"},{name:"literal",value:"'section'"},{name:"literal",value:"'article'"},{name:"literal",value:"'aside'"},{name:"literal",value:"'header'"},{name:"literal",value:"'footer'"}]},description:"HTML element to render",defaultValue:{value:"'div'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children content"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"},id:{required:!1,tsType:{name:"string"},description:"HTML id attribute"}}};const I={title:"Atoms/Container",component:n,parameters:{layout:"fullscreen",docs:{description:{component:`
Container provides consistent max-width content wrappers with responsive behavior.
It supports different size variants and can render as different HTML elements.

**Key Features:**
- Multiple size variants (xs to 3xl)
- Responsive behavior with breakpoints
- Semantic HTML element support
- Optional padding control
- Centered content alignment
        `}}},argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl","2xl","full"],description:"Container size variant"},as:{control:{type:"select"},options:["div","main","section","article","aside","header","footer"],description:"HTML element to render"},padding:{control:{type:"select"},options:["none","xs","sm","md","lg","xl"],description:"Padding variant"},background:{control:{type:"select"},options:["default","panel","transparent"],description:"Background variant for theming"},centered:{control:{type:"boolean"},description:"Whether to center the container"},className:{control:{type:"text"},description:"Additional CSS classes"}},args:{size:"lg",as:"div",padding:"md",background:"default",centered:!0}},s={render:r=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx(n,{...r,children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"Container Content"}),e.jsx("p",{children:"This content is wrapped in a Container component. The container provides consistent max-width and centering for your content."}),e.jsx("p",{children:"Resize the viewport to see how the container responds to different screen sizes."})]})})})},t={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx("div",{className:"container-sizes-demo",children:["sm","md","lg","xl","2xl","full"].map(r=>e.jsxs("div",{className:"container-size-example",children:[e.jsxs("h3",{children:["Size: ",r]}),e.jsx(n,{size:r,children:e.jsxs("div",{className:"container-story-content container-story-content--compact",children:[e.jsx("strong",{children:r.toUpperCase()}),' - This container has size "',r,'"']})})]},r))})}),parameters:{docs:{description:{story:"Different container sizes from sm (640px) to full (100%)."}}}},i={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsxs("div",{className:"semantic-elements-demo",children:[e.jsx(n,{as:"header",size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"<header> Container"}),e.jsx("p",{children:"This container renders as a semantic header element."})]})}),e.jsx(n,{as:"main",size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"<main> Container"}),e.jsx("p",{children:"This container renders as a semantic main element."})]})}),e.jsx(n,{as:"section",size:"md",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h3",{children:"<section> Container"}),e.jsx("p",{children:"This container renders as a semantic section element."})]})}),e.jsx(n,{as:"footer",size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h3",{children:"<footer> Container"}),e.jsx("p",{children:"This container renders as a semantic footer element."})]})})]})}),parameters:{docs:{description:{story:"Containers can render as different semantic HTML elements while maintaining the same styling behavior."}}}},o={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsxs("div",{className:"padding-comparison",children:[e.jsxs("div",{className:"padding-example",children:[e.jsx("h3",{children:"Default Padding (md)"}),e.jsx(n,{size:"md",padding:"md",children:e.jsx("div",{className:"container-story-content container-story-content--highlighted",children:"This container has medium padding applied."})})]}),e.jsxs("div",{className:"padding-example",children:[e.jsx("h3",{children:"No Padding"}),e.jsx(n,{size:"md",padding:"none",children:e.jsx("div",{className:"container-story-content container-story-content--highlighted",children:"This container has no padding - content touches the edges."})})]}),e.jsxs("div",{className:"padding-example",children:[e.jsx("h3",{children:"Large Padding"}),e.jsx(n,{size:"md",padding:"xl",children:e.jsx("div",{className:"container-story-content container-story-content--highlighted",children:"This container has extra large padding applied."})})]})]})}),parameters:{docs:{description:{story:"Compare containers with different padding variants."}}}},d={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx(n,{size:"xl",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"Outer Container (XL)"}),e.jsx("p",{children:"This is the outer container with size XL."}),e.jsx(n,{size:"md",children:e.jsxs("div",{className:"container-story-content container-story-content--nested",children:[e.jsx("h3",{children:"Nested Container (MD)"}),e.jsx("p",{children:"This is a nested container with size MD inside the XL container."}),e.jsx(n,{size:"sm",padding:"none",children:e.jsxs("div",{className:"container-story-content container-story-content--nested",children:[e.jsx("h4",{children:"Deeply Nested Container (SM, No Padding)"}),e.jsx("p",{children:"This is a deeply nested container with size SM and no padding."})]})})]})})]})})}),parameters:{docs:{description:{story:"Containers can be nested to create complex layouts with different max-widths."}}}},c={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx(n,{size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"Responsive Container Demo"}),e.jsx("p",{children:"This container will adjust its behavior at different breakpoints:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Mobile (< 640px):"})," Full width with minimal padding"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tablet (640px - 1024px):"})," Constrained width with more padding"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Desktop (> 1024px):"})," Full max-width with standard padding"]})]}),e.jsx("p",{children:"Try resizing your browser window or use the viewport controls in Storybook to see the responsive behavior."}),e.jsxs("div",{className:"responsive-indicator",children:[e.jsx("span",{className:"mobile-indicator",children:"📱 Mobile View"}),e.jsx("span",{className:"tablet-indicator",children:"📟 Tablet View"}),e.jsx("span",{className:"desktop-indicator",children:"💻 Desktop View"})]})]})})}),parameters:{docs:{description:{story:"Demonstration of responsive behavior across different viewport sizes."}}}},l={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsxs("div",{className:"theme-showcase-grid",children:[e.jsx(n,{size:"md",background:"default",padding:"lg",children:e.jsxs("div",{className:"theme-showcase-content",children:[e.jsx("h3",{children:"Default Background"}),e.jsxs("p",{children:["Uses ",e.jsx("code",{children:"var(--color-bg)"})," - adapts to current theme"]})]})}),e.jsx(n,{size:"md",background:"panel",padding:"lg",children:e.jsxs("div",{className:"theme-showcase-content",children:[e.jsx("h3",{children:"Panel Background"}),e.jsxs("p",{children:["Uses ",e.jsx("code",{children:"var(--color-panel)"})," with border - perfect for cards"]})]})}),e.jsx(n,{size:"md",background:"transparent",padding:"lg",className:"transparent-demo",children:e.jsxs("div",{className:"theme-showcase-content",children:[e.jsx("h3",{children:"Transparent Background"}),e.jsx("p",{children:"No background - inherits from parent"})]})})]})}),parameters:{docs:{description:{story:"Demonstration of theme-aware background variants. Switch themes in the toolbar to see the containers adapt to different color schemes."}}}};var m,h,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div className="container-story-wrapper">\r
      <Container {...args}>\r
        <div className="container-story-content">\r
          <h2>Container Content</h2>\r
          <p>This content is wrapped in a Container component. The container provides consistent max-width and centering for your content.</p>\r
          <p>Resize the viewport to see how the container responds to different screen sizes.</p>\r
        </div>\r
      </Container>\r
    </div>
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var u,g,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="container-story-wrapper">\r
      <div className="container-sizes-demo">\r
        {(['sm', 'md', 'lg', 'xl', '2xl', 'full'] as const).map(size => <div key={size} className="container-size-example">\r
            <h3>Size: {size}</h3>\r
            <Container size={size}>\r
              <div className="container-story-content container-story-content--compact">\r
                <strong>{size.toUpperCase()}</strong> - This container has size "{size}"\r
              </div>\r
            </Container>\r
          </div>)}\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different container sizes from sm (640px) to full (100%).'
      }
    }
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,y,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="container-story-wrapper">\r
      <div className="semantic-elements-demo">\r
        <Container as="header" size="lg">\r
          <div className="container-story-content">\r
            <h2>&lt;header&gt; Container</h2>\r
            <p>This container renders as a semantic header element.</p>\r
          </div>\r
        </Container>\r
        \r
        <Container as="main" size="lg">\r
          <div className="container-story-content">\r
            <h2>&lt;main&gt; Container</h2>\r
            <p>This container renders as a semantic main element.</p>\r
          </div>\r
        </Container>\r
        \r
        <Container as="section" size="md">\r
          <div className="container-story-content">\r
            <h3>&lt;section&gt; Container</h3>\r
            <p>This container renders as a semantic section element.</p>\r
          </div>\r
        </Container>\r
        \r
        <Container as="footer" size="lg">\r
          <div className="container-story-content">\r
            <h3>&lt;footer&gt; Container</h3>\r
            <p>This container renders as a semantic footer element.</p>\r
          </div>\r
        </Container>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Containers can render as different semantic HTML elements while maintaining the same styling behavior.'
      }
    }
  }
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,N,C;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="container-story-wrapper">\r
      <div className="padding-comparison">\r
        <div className="padding-example">\r
          <h3>Default Padding (md)</h3>\r
          <Container size="md" padding="md">\r
            <div className="container-story-content container-story-content--highlighted">\r
              This container has medium padding applied.\r
            </div>\r
          </Container>\r
        </div>\r
        \r
        <div className="padding-example">\r
          <h3>No Padding</h3>\r
          <Container size="md" padding="none">\r
            <div className="container-story-content container-story-content--highlighted">\r
              This container has no padding - content touches the edges.\r
            </div>\r
          </Container>\r
        </div>\r
        \r
        <div className="padding-example">\r
          <h3>Large Padding</h3>\r
          <Container size="md" padding="xl">\r
            <div className="container-story-content container-story-content--highlighted">\r
              This container has extra large padding applied.\r
            </div>\r
          </Container>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Compare containers with different padding variants.'
      }
    }
  }
}`,...(C=(N=o.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var z,b,T;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="container-story-wrapper">\r
      <Container size="xl">\r
        <div className="container-story-content">\r
          <h2>Outer Container (XL)</h2>\r
          <p>This is the outer container with size XL.</p>\r
          \r
          <Container size="md">\r
            <div className="container-story-content container-story-content--nested">\r
              <h3>Nested Container (MD)</h3>\r
              <p>This is a nested container with size MD inside the XL container.</p>\r
              \r
              <Container size="sm" padding="none">\r
                <div className="container-story-content container-story-content--nested">\r
                  <h4>Deeply Nested Container (SM, No Padding)</h4>\r
                  <p>This is a deeply nested container with size SM and no padding.</p>\r
                </div>\r
              </Container>\r
            </div>\r
          </Container>\r
        </div>\r
      </Container>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Containers can be nested to create complex layouts with different max-widths.'
      }
    }
  }
}`,...(T=(b=d.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var k,S,D;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="container-story-wrapper">\r
      <Container size="lg">\r
        <div className="container-story-content">\r
          <h2>Responsive Container Demo</h2>\r
          <p>This container will adjust its behavior at different breakpoints:</p>\r
          <ul>\r
            <li><strong>Mobile (&lt; 640px):</strong> Full width with minimal padding</li>\r
            <li><strong>Tablet (640px - 1024px):</strong> Constrained width with more padding</li>\r
            <li><strong>Desktop (&gt; 1024px):</strong> Full max-width with standard padding</li>\r
          </ul>\r
          <p>Try resizing your browser window or use the viewport controls in Storybook to see the responsive behavior.</p>\r
          \r
          <div className="responsive-indicator">\r
            <span className="mobile-indicator">📱 Mobile View</span>\r
            <span className="tablet-indicator">📟 Tablet View</span>\r
            <span className="desktop-indicator">💻 Desktop View</span>\r
          </div>\r
        </div>\r
      </Container>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of responsive behavior across different viewport sizes.'
      }
    }
  }
}`,...(D=(S=c.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var M,P,L;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="container-story-wrapper">\r
      <div className="theme-showcase-grid">\r
        <Container size="md" background="default" padding="lg">\r
          <div className="theme-showcase-content">\r
            <h3>Default Background</h3>\r
            <p>Uses <code>var(--color-bg)</code> - adapts to current theme</p>\r
          </div>\r
        </Container>\r
        \r
        <Container size="md" background="panel" padding="lg">\r
          <div className="theme-showcase-content">\r
            <h3>Panel Background</h3>\r
            <p>Uses <code>var(--color-panel)</code> with border - perfect for cards</p>\r
          </div>\r
        </Container>\r
        \r
        <Container size="md" background="transparent" padding="lg" className="transparent-demo">\r
          <div className="theme-showcase-content">\r
            <h3>Transparent Background</h3>\r
            <p>No background - inherits from parent</p>\r
          </div>\r
        </Container>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of theme-aware background variants. Switch themes in the toolbar to see the containers adapt to different color schemes.'
      }
    }
  }
}`,...(L=(P=l.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const K=["Default","AllSizes","SemanticElements","PaddingVariants","NestedContainers","ResponsiveDemo","ThemeShowcase"];export{t as AllSizes,s as Default,d as NestedContainers,o as PaddingVariants,c as ResponsiveDemo,i as SemanticElements,l as ThemeShowcase,K as __namedExportsOrder,I as default};
