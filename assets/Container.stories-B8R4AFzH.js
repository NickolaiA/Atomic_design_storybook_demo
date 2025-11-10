import{j as e}from"./iframe-C-Dpaqp0.js";import{C as n}from"./Container-OcbYfyDk.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Atoms/Container",component:n,parameters:{layout:"fullscreen",docs:{description:{component:`
Container provides consistent max-width content wrappers with responsive behavior.
It supports different size variants and can render as different HTML elements.

**Key Features:**
- Multiple size variants (xs to 3xl)
- Responsive behavior with breakpoints
- Semantic HTML element support
- Optional padding control
- Centered content alignment
        `}}},argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl","2xl","full"],description:"Container size variant"},as:{control:{type:"select"},options:["div","main","section","article","aside","header","footer"],description:"HTML element to render"},padding:{control:{type:"select"},options:["none","xs","sm","md","lg","xl"],description:"Padding variant"},background:{control:{type:"select"},options:["default","panel","transparent"],description:"Background variant for theming"},centered:{control:{type:"boolean"},description:"Whether to center the container"},className:{control:{type:"text"},description:"Additional CSS classes"}},args:{size:"lg",as:"div",padding:"md",background:"default",centered:!0}},s={render:r=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx(n,{...r,children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"Container Content"}),e.jsx("p",{children:"This content is wrapped in a Container component. The container provides consistent max-width and centering for your content."}),e.jsx("p",{children:"Resize the viewport to see how the container responds to different screen sizes."})]})})})},i={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx("div",{className:"container-sizes-demo",children:["sm","md","lg","xl","2xl","full"].map(r=>e.jsxs("div",{className:"container-size-example",children:[e.jsxs("h3",{children:["Size: ",r]}),e.jsx(n,{size:r,children:e.jsxs("div",{className:"container-story-content container-story-content--compact",children:[e.jsx("strong",{children:r.toUpperCase()}),' - This container has size "',r,'"']})})]},r))})}),parameters:{docs:{description:{story:"Different container sizes from sm (640px) to full (100%)."}}}},t={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsxs("div",{className:"semantic-elements-demo",children:[e.jsx(n,{as:"header",size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"<header> Container"}),e.jsx("p",{children:"This container renders as a semantic header element."})]})}),e.jsx(n,{as:"main",size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"<main> Container"}),e.jsx("p",{children:"This container renders as a semantic main element."})]})}),e.jsx(n,{as:"section",size:"md",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h3",{children:"<section> Container"}),e.jsx("p",{children:"This container renders as a semantic section element."})]})}),e.jsx(n,{as:"footer",size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h3",{children:"<footer> Container"}),e.jsx("p",{children:"This container renders as a semantic footer element."})]})})]})}),parameters:{docs:{description:{story:"Containers can render as different semantic HTML elements while maintaining the same styling behavior."}}}},a={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsxs("div",{className:"padding-comparison",children:[e.jsxs("div",{className:"padding-example",children:[e.jsx("h3",{children:"Default Padding (md)"}),e.jsx(n,{size:"md",padding:"md",children:e.jsx("div",{className:"container-story-content container-story-content--highlighted",children:"This container has medium padding applied."})})]}),e.jsxs("div",{className:"padding-example",children:[e.jsx("h3",{children:"No Padding"}),e.jsx(n,{size:"md",padding:"none",children:e.jsx("div",{className:"container-story-content container-story-content--highlighted",children:"This container has no padding - content touches the edges."})})]}),e.jsxs("div",{className:"padding-example",children:[e.jsx("h3",{children:"Large Padding"}),e.jsx(n,{size:"md",padding:"xl",children:e.jsx("div",{className:"container-story-content container-story-content--highlighted",children:"This container has extra large padding applied."})})]})]})}),parameters:{docs:{description:{story:"Compare containers with different padding variants."}}}},o={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx(n,{size:"xl",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"Outer Container (XL)"}),e.jsx("p",{children:"This is the outer container with size XL."}),e.jsx(n,{size:"md",children:e.jsxs("div",{className:"container-story-content container-story-content--nested",children:[e.jsx("h3",{children:"Nested Container (MD)"}),e.jsx("p",{children:"This is a nested container with size MD inside the XL container."}),e.jsx(n,{size:"sm",padding:"none",children:e.jsxs("div",{className:"container-story-content container-story-content--nested",children:[e.jsx("h4",{children:"Deeply Nested Container (SM, No Padding)"}),e.jsx("p",{children:"This is a deeply nested container with size SM and no padding."})]})})]})})]})})}),parameters:{docs:{description:{story:"Containers can be nested to create complex layouts with different max-widths."}}}},d={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx(n,{size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"Responsive Container Demo"}),e.jsx("p",{children:"This container will adjust its behavior at different breakpoints:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Mobile (< 640px):"})," Full width with minimal padding"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tablet (640px - 1024px):"})," Constrained width with more padding"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Desktop (> 1024px):"})," Full max-width with standard padding"]})]}),e.jsx("p",{children:"Try resizing your browser window or use the viewport controls in Storybook to see the responsive behavior."}),e.jsxs("div",{className:"responsive-indicator",children:[e.jsx("span",{className:"mobile-indicator",children:"📱 Mobile View"}),e.jsx("span",{className:"tablet-indicator",children:"📟 Tablet View"}),e.jsx("span",{className:"desktop-indicator",children:"💻 Desktop View"})]})]})})}),parameters:{docs:{description:{story:"Demonstration of responsive behavior across different viewport sizes."}}}},c={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsxs("div",{className:"theme-showcase-grid",children:[e.jsx(n,{size:"md",background:"default",padding:"lg",children:e.jsxs("div",{className:"theme-showcase-content",children:[e.jsx("h3",{children:"Default Background"}),e.jsxs("p",{children:["Uses ",e.jsx("code",{children:"var(--color-bg)"})," - adapts to current theme"]})]})}),e.jsx(n,{size:"md",background:"panel",padding:"lg",children:e.jsxs("div",{className:"theme-showcase-content",children:[e.jsx("h3",{children:"Panel Background"}),e.jsxs("p",{children:["Uses ",e.jsx("code",{children:"var(--color-panel)"})," with border - perfect for cards"]})]})}),e.jsx(n,{size:"md",background:"transparent",padding:"lg",className:"transparent-demo",children:e.jsxs("div",{className:"theme-showcase-content",children:[e.jsx("h3",{children:"Transparent Background"}),e.jsx("p",{children:"No background - inherits from parent"})]})})]})}),parameters:{docs:{description:{story:"Demonstration of theme-aware background variants. Switch themes in the toolbar to see the containers adapt to different color schemes."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="container-story-wrapper">\r
      <Container {...args}>\r
        <div className="container-story-content">\r
          <h2>Container Content</h2>\r
          <p>This content is wrapped in a Container component. The container provides consistent max-width and centering for your content.</p>\r
          <p>Resize the viewport to see how the container responds to different screen sizes.</p>\r
        </div>\r
      </Container>\r
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const g=["Default","AllSizes","SemanticElements","PaddingVariants","NestedContainers","ResponsiveDemo","ThemeShowcase"];export{i as AllSizes,s as Default,o as NestedContainers,a as PaddingVariants,d as ResponsiveDemo,t as SemanticElements,c as ThemeShowcase,g as __namedExportsOrder,m as default};
