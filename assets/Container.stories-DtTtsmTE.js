import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";const n=({size:r="lg",centered:M=!0,padding:L="md",maxWidth:i,className:P="",as:R="div",children:k,style:V,id:q,...H})=>{const X=R,A=["container",`container--${r}`,M&&"container--centered",`container--padding-${L}`,P].filter(Boolean).join(" "),l={...V};return i&&(l.maxWidth=typeof i=="number"?`${i}px`:i),e.jsx(X,{className:A,style:Object.keys(l).length>0?l:void 0,id:q,...H,children:k})};n.__docgenInfo={description:"",methods:[],displayName:"Container",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'full'"}]},description:"Container size variant",defaultValue:{value:"'lg'",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Whether to center the container",defaultValue:{value:"true",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Padding variant",defaultValue:{value:"'md'",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Custom max-width"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},as:{required:!1,tsType:{name:"union",raw:"'div' | 'main' | 'section' | 'article' | 'aside' | 'header' | 'footer'",elements:[{name:"literal",value:"'div'"},{name:"literal",value:"'main'"},{name:"literal",value:"'section'"},{name:"literal",value:"'article'"},{name:"literal",value:"'aside'"},{name:"literal",value:"'header'"},{name:"literal",value:"'footer'"}]},description:"HTML element to render",defaultValue:{value:"'div'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children content"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"},id:{required:!1,tsType:{name:"string"},description:"HTML id attribute"}}};const E={title:"Atoms/Container",component:n,parameters:{layout:"fullscreen",docs:{description:{component:`
Container provides consistent max-width content wrappers with responsive behavior.
It supports different size variants and can render as different HTML elements.

**Key Features:**
- Multiple size variants (xs to 3xl)
- Responsive behavior with breakpoints
- Semantic HTML element support
- Optional padding control
- Centered content alignment
        `}}},argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl","2xl","full"],description:"Container size variant"},as:{control:{type:"select"},options:["div","main","section","article","aside","header","footer"],description:"HTML element to render"},padding:{control:{type:"select"},options:["none","xs","sm","md","lg","xl"],description:"Padding variant"},centered:{control:{type:"boolean"},description:"Whether to center the container"},className:{control:{type:"text"},description:"Additional CSS classes"}},args:{size:"lg",as:"div",padding:"md",centered:!0}},s={render:r=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx(n,{...r,children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"Container Content"}),e.jsx("p",{children:"This content is wrapped in a Container component. The container provides consistent max-width and centering for your content."}),e.jsx("p",{children:"Resize the viewport to see how the container responds to different screen sizes."})]})})})},t={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx("div",{className:"container-sizes-demo",children:["sm","md","lg","xl","2xl","full"].map(r=>e.jsxs("div",{className:"container-size-example",children:[e.jsxs("h3",{children:["Size: ",r]}),e.jsx(n,{size:r,children:e.jsxs("div",{className:"container-story-content container-story-content--compact",children:[e.jsx("strong",{children:r.toUpperCase()}),' - This container has size "',r,'"']})})]},r))})}),parameters:{docs:{description:{story:"Different container sizes from sm (640px) to full (100%)."}}}},a={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsxs("div",{className:"semantic-elements-demo",children:[e.jsx(n,{as:"header",size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"<header> Container"}),e.jsx("p",{children:"This container renders as a semantic header element."})]})}),e.jsx(n,{as:"main",size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"<main> Container"}),e.jsx("p",{children:"This container renders as a semantic main element."})]})}),e.jsx(n,{as:"section",size:"md",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h3",{children:"<section> Container"}),e.jsx("p",{children:"This container renders as a semantic section element."})]})}),e.jsx(n,{as:"footer",size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h3",{children:"<footer> Container"}),e.jsx("p",{children:"This container renders as a semantic footer element."})]})})]})}),parameters:{docs:{description:{story:"Containers can render as different semantic HTML elements while maintaining the same styling behavior."}}}},o={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsxs("div",{className:"padding-comparison",children:[e.jsxs("div",{className:"padding-example",children:[e.jsx("h3",{children:"Default Padding (md)"}),e.jsx(n,{size:"md",padding:"md",children:e.jsx("div",{className:"container-story-content container-story-content--highlighted",children:"This container has medium padding applied."})})]}),e.jsxs("div",{className:"padding-example",children:[e.jsx("h3",{children:"No Padding"}),e.jsx(n,{size:"md",padding:"none",children:e.jsx("div",{className:"container-story-content container-story-content--highlighted",children:"This container has no padding - content touches the edges."})})]}),e.jsxs("div",{className:"padding-example",children:[e.jsx("h3",{children:"Large Padding"}),e.jsx(n,{size:"md",padding:"xl",children:e.jsx("div",{className:"container-story-content container-story-content--highlighted",children:"This container has extra large padding applied."})})]})]})}),parameters:{docs:{description:{story:"Compare containers with different padding variants."}}}},d={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx(n,{size:"xl",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"Outer Container (XL)"}),e.jsx("p",{children:"This is the outer container with size XL."}),e.jsx(n,{size:"md",children:e.jsxs("div",{className:"container-story-content container-story-content--nested",children:[e.jsx("h3",{children:"Nested Container (MD)"}),e.jsx("p",{children:"This is a nested container with size MD inside the XL container."}),e.jsx(n,{size:"sm",padding:"none",children:e.jsxs("div",{className:"container-story-content container-story-content--nested",children:[e.jsx("h4",{children:"Deeply Nested Container (SM, No Padding)"}),e.jsx("p",{children:"This is a deeply nested container with size SM and no padding."})]})})]})})]})})}),parameters:{docs:{description:{story:"Containers can be nested to create complex layouts with different max-widths."}}}},c={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx(n,{size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"Responsive Container Demo"}),e.jsx("p",{children:"This container will adjust its behavior at different breakpoints:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Mobile (< 640px):"})," Full width with minimal padding"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tablet (640px - 1024px):"})," Constrained width with more padding"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Desktop (> 1024px):"})," Full max-width with standard padding"]})]}),e.jsx("p",{children:"Try resizing your browser window or use the viewport controls in Storybook to see the responsive behavior."}),e.jsxs("div",{className:"responsive-indicator",children:[e.jsx("span",{className:"mobile-indicator",children:"📱 Mobile View"}),e.jsx("span",{className:"tablet-indicator",children:"📟 Tablet View"}),e.jsx("span",{className:"desktop-indicator",children:"💻 Desktop View"})]})]})})}),parameters:{docs:{description:{story:"Demonstration of responsive behavior across different viewport sizes."}}}};var p,m,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div className="container-story-wrapper">\r
      <Container {...args}>\r
        <div className="container-story-content">\r
          <h2>Container Content</h2>\r
          <p>This content is wrapped in a Container component. The container provides consistent max-width and centering for your content.</p>\r
          <p>Resize the viewport to see how the container responds to different screen sizes.</p>\r
        </div>\r
      </Container>\r
    </div>
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var v,x,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var u,y,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var j,N,C;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(C=(N=o.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var w,z,T;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(T=(z=d.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var b,S,D;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(D=(S=c.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const _=["Default","AllSizes","SemanticElements","PaddingVariants","NestedContainers","ResponsiveDemo"];export{t as AllSizes,s as Default,d as NestedContainers,o as PaddingVariants,c as ResponsiveDemo,a as SemanticElements,_ as __namedExportsOrder,E as default};
