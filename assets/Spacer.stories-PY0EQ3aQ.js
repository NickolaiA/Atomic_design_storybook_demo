import{j as e}from"./iframe-C-Dpaqp0.js";import{S as s}from"./Spacer-_42iplUp.js";import"./preload-helper-PPVm8Dsz.js";const v={title:"Atoms/Spacer",component:s,parameters:{layout:"padded",docs:{description:{component:`
Spacer provides consistent spacing between elements in layouts.
It supports different directions (vertical, horizontal, both) and flexible sizing.

**Key Features:**
- Seven size variants (xs to 3xl)
- Directional spacing (vertical, horizontal, both)
- Flexible growth option
- Responsive behavior
- Semantic HTML element support
        `}}},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl","3xl"],description:"Spacer size variant"},direction:{control:{type:"select"},options:["vertical","horizontal","both"],description:"Spacing direction"},flexible:{control:{type:"boolean"},description:"Allow flexible growth"},className:{control:{type:"text"},description:"Additional CSS classes"},spacing:{control:{type:"text"},description:"Custom spacing value"}},args:{size:"md",direction:"vertical",flexible:!1}},a={render:r=>e.jsxs("div",{className:"spacer-story-wrapper",children:[e.jsx("div",{className:"spacer-demo-content",children:"Content Above"}),e.jsx(s,{...r}),e.jsx("div",{className:"spacer-demo-content",children:"Content Below"})]})},i={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsx("div",{className:"spacer-sizes-demo",children:["xs","sm","md","lg","xl","2xl","3xl"].map(r=>e.jsxs("div",{className:"spacer-size-example",children:[e.jsxs("div",{className:"spacer-demo-content",children:["Before ",r.toUpperCase()]}),e.jsx(s,{size:r,direction:"vertical"}),e.jsxs("div",{className:"spacer-demo-content",children:["After ",r.toUpperCase()]})]},r))})}),parameters:{docs:{description:{story:"Different vertical spacer sizes from xs (0.25rem) to 3xl (4rem)."}}}},c={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsx("div",{className:"spacer-horizontal-demo",children:["xs","sm","md","lg","xl","2xl","3xl"].map(r=>e.jsxs("div",{className:"spacer-horizontal-example",children:[e.jsx("div",{className:"spacer-demo-label",children:r.toUpperCase()}),e.jsxs("div",{className:"spacer-horizontal-container",children:[e.jsx("span",{className:"spacer-demo-content",children:"Before"}),e.jsx(s,{size:r,direction:"horizontal"}),e.jsx("span",{className:"spacer-demo-content",children:"After"})]})]},r))})}),parameters:{docs:{description:{story:"Different horizontal spacer sizes for inline content."}}}},o={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsxs("div",{className:"direction-variants-demo",children:[e.jsxs("div",{className:"direction-example",children:[e.jsx("h3",{children:"Vertical Spacing"}),e.jsx("div",{className:"spacer-demo-content",children:"First Element"}),e.jsx(s,{size:"lg",direction:"vertical"}),e.jsx("div",{className:"spacer-demo-content",children:"Second Element"}),e.jsx(s,{size:"lg",direction:"vertical"}),e.jsx("div",{className:"spacer-demo-content",children:"Third Element"})]}),e.jsxs("div",{className:"direction-example",children:[e.jsx("h3",{children:"Horizontal Spacing"}),e.jsxs("div",{className:"horizontal-layout",children:[e.jsx("span",{className:"spacer-demo-content",children:"First"}),e.jsx(s,{size:"lg",direction:"horizontal"}),e.jsx("span",{className:"spacer-demo-content",children:"Second"}),e.jsx(s,{size:"lg",direction:"horizontal"}),e.jsx("span",{className:"spacer-demo-content",children:"Third"})]})]}),e.jsxs("div",{className:"direction-example",children:[e.jsx("h3",{children:"Both Directions"}),e.jsxs("div",{className:"both-directions-layout",children:[e.jsx("div",{className:"spacer-demo-content",children:"Corner 1"}),e.jsx(s,{size:"lg",direction:"both"}),e.jsx("div",{className:"spacer-demo-content",children:"Corner 2"})]})]})]})}),parameters:{docs:{description:{story:"Spacer can create spacing in vertical, horizontal, or both directions."}}}},t={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsxs("div",{className:"flexible-demo",children:[e.jsxs("div",{className:"flexible-example",children:[e.jsx("h3",{children:"Fixed vs Flexible Vertical"}),e.jsxs("div",{className:"flexible-container vertical",children:[e.jsx("div",{className:"spacer-demo-content",children:"Top Content"}),e.jsx(s,{size:"md",direction:"vertical",flexible:!0}),e.jsx("div",{className:"spacer-demo-content",children:"Pushed to Bottom"})]})]}),e.jsxs("div",{className:"flexible-example",children:[e.jsx("h3",{children:"Fixed vs Flexible Horizontal"}),e.jsxs("div",{className:"flexible-container horizontal",children:[e.jsx("span",{className:"spacer-demo-content",children:"Left"}),e.jsx(s,{size:"md",direction:"horizontal",flexible:!0}),e.jsx("span",{className:"spacer-demo-content",children:"Right"})]})]})]})}),parameters:{docs:{description:{story:"Flexible spacers grow to fill available space, useful for layouts."}}}},n={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsxs("div",{className:"layout-examples",children:[e.jsxs("div",{className:"layout-example",children:[e.jsx("h3",{children:"Card Layout with Consistent Spacing"}),e.jsx("div",{className:"card-layout",children:e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"Card Title"}),e.jsx(s,{size:"sm",direction:"vertical"}),e.jsx("p",{children:"Card content goes here with consistent spacing."}),e.jsx(s,{size:"md",direction:"vertical"}),e.jsxs("div",{className:"card-actions",children:[e.jsx("button",{className:"demo-button",children:"Action 1"}),e.jsx(s,{size:"sm",direction:"horizontal"}),e.jsx("button",{className:"demo-button",children:"Action 2"})]})]})})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx("h3",{children:"Navigation Bar"}),e.jsx("div",{className:"nav-layout",children:e.jsxs("div",{className:"demo-nav",children:[e.jsx("span",{className:"nav-brand",children:"Brand"}),e.jsx(s,{size:"md",direction:"horizontal",flexible:!0}),e.jsx("span",{className:"nav-item",children:"Home"}),e.jsx(s,{size:"sm",direction:"horizontal"}),e.jsx("span",{className:"nav-item",children:"About"}),e.jsx(s,{size:"sm",direction:"horizontal"}),e.jsx("span",{className:"nav-item",children:"Contact"})]})})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx("h3",{children:"Sidebar Layout"}),e.jsx("div",{className:"sidebar-layout",children:e.jsxs("div",{className:"demo-sidebar",children:[e.jsx("div",{className:"sidebar-header",children:"Menu"}),e.jsx(s,{size:"md",direction:"vertical"}),e.jsx("div",{className:"sidebar-item",children:"Item 1"}),e.jsx(s,{size:"xs",direction:"vertical"}),e.jsx("div",{className:"sidebar-item",children:"Item 2"}),e.jsx(s,{size:"xs",direction:"vertical"}),e.jsx("div",{className:"sidebar-item",children:"Item 3"}),e.jsx(s,{size:"lg",direction:"vertical",flexible:!0}),e.jsx("div",{className:"sidebar-footer",children:"Footer"})]})})]})]})}),parameters:{docs:{description:{story:"Real-world examples of using Spacer in common layouts."}}}},l={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsxs("div",{className:"responsive-spacing-demo",children:[e.jsx("h3",{children:"Responsive Spacing Demo"}),e.jsx("p",{children:"These spacers adjust their size based on screen size (smaller on mobile):"}),e.jsx("div",{className:"spacer-demo-content",children:"Section 1"}),e.jsx(s,{size:"2xl",direction:"vertical"}),e.jsx("div",{className:"spacer-demo-content",children:"Section 2"}),e.jsx(s,{size:"3xl",direction:"vertical"}),e.jsx("div",{className:"spacer-demo-content",children:"Section 3"}),e.jsx(s,{size:"lg",direction:"vertical"}),e.jsxs("div",{className:"responsive-note",children:[e.jsx("strong",{children:"Note:"})," Resize your browser or use Storybook's viewport controls to see how spacing adapts on smaller screens."]})]})}),parameters:{docs:{description:{story:"Spacers automatically adapt to smaller screens with responsive sizing."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div className="spacer-story-wrapper">\r
      <div className="spacer-demo-content">Content Above</div>\r
      <Spacer {...args} />\r
      <div className="spacer-demo-content">Content Below</div>\r
    </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="spacer-story-wrapper">\r
      <div className="spacer-sizes-demo">\r
        {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const).map(size => <div key={size} className="spacer-size-example">\r
            <div className="spacer-demo-content">Before {size.toUpperCase()}</div>\r
            <Spacer size={size} direction="vertical" />\r
            <div className="spacer-demo-content">After {size.toUpperCase()}</div>\r
          </div>)}\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different vertical spacer sizes from xs (0.25rem) to 3xl (4rem).'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="spacer-story-wrapper">\r
      <div className="spacer-horizontal-demo">\r
        {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const).map(size => <div key={size} className="spacer-horizontal-example">\r
            <div className="spacer-demo-label">{size.toUpperCase()}</div>\r
            <div className="spacer-horizontal-container">\r
              <span className="spacer-demo-content">Before</span>\r
              <Spacer size={size} direction="horizontal" />\r
              <span className="spacer-demo-content">After</span>\r
            </div>\r
          </div>)}\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different horizontal spacer sizes for inline content.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="spacer-story-wrapper">\r
      <div className="direction-variants-demo">\r
        <div className="direction-example">\r
          <h3>Vertical Spacing</h3>\r
          <div className="spacer-demo-content">First Element</div>\r
          <Spacer size="lg" direction="vertical" />\r
          <div className="spacer-demo-content">Second Element</div>\r
          <Spacer size="lg" direction="vertical" />\r
          <div className="spacer-demo-content">Third Element</div>\r
        </div>\r
        \r
        <div className="direction-example">\r
          <h3>Horizontal Spacing</h3>\r
          <div className="horizontal-layout">\r
            <span className="spacer-demo-content">First</span>\r
            <Spacer size="lg" direction="horizontal" />\r
            <span className="spacer-demo-content">Second</span>\r
            <Spacer size="lg" direction="horizontal" />\r
            <span className="spacer-demo-content">Third</span>\r
          </div>\r
        </div>\r
        \r
        <div className="direction-example">\r
          <h3>Both Directions</h3>\r
          <div className="both-directions-layout">\r
            <div className="spacer-demo-content">Corner 1</div>\r
            <Spacer size="lg" direction="both" />\r
            <div className="spacer-demo-content">Corner 2</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Spacer can create spacing in vertical, horizontal, or both directions.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="spacer-story-wrapper">\r
      <div className="flexible-demo">\r
        <div className="flexible-example">\r
          <h3>Fixed vs Flexible Vertical</h3>\r
          <div className="flexible-container vertical">\r
            <div className="spacer-demo-content">Top Content</div>\r
            <Spacer size="md" direction="vertical" flexible />\r
            <div className="spacer-demo-content">Pushed to Bottom</div>\r
          </div>\r
        </div>\r
        \r
        <div className="flexible-example">\r
          <h3>Fixed vs Flexible Horizontal</h3>\r
          <div className="flexible-container horizontal">\r
            <span className="spacer-demo-content">Left</span>\r
            <Spacer size="md" direction="horizontal" flexible />\r
            <span className="spacer-demo-content">Right</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Flexible spacers grow to fill available space, useful for layouts.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="spacer-story-wrapper">\r
      <div className="layout-examples">\r
        <div className="layout-example">\r
          <h3>Card Layout with Consistent Spacing</h3>\r
          <div className="card-layout">\r
            <div className="demo-card">\r
              <h4>Card Title</h4>\r
              <Spacer size="sm" direction="vertical" />\r
              <p>Card content goes here with consistent spacing.</p>\r
              <Spacer size="md" direction="vertical" />\r
              <div className="card-actions">\r
                <button className="demo-button">Action 1</button>\r
                <Spacer size="sm" direction="horizontal" />\r
                <button className="demo-button">Action 2</button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div className="layout-example">\r
          <h3>Navigation Bar</h3>\r
          <div className="nav-layout">\r
            <div className="demo-nav">\r
              <span className="nav-brand">Brand</span>\r
              <Spacer size="md" direction="horizontal" flexible />\r
              <span className="nav-item">Home</span>\r
              <Spacer size="sm" direction="horizontal" />\r
              <span className="nav-item">About</span>\r
              <Spacer size="sm" direction="horizontal" />\r
              <span className="nav-item">Contact</span>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div className="layout-example">\r
          <h3>Sidebar Layout</h3>\r
          <div className="sidebar-layout">\r
            <div className="demo-sidebar">\r
              <div className="sidebar-header">Menu</div>\r
              <Spacer size="md" direction="vertical" />\r
              <div className="sidebar-item">Item 1</div>\r
              <Spacer size="xs" direction="vertical" />\r
              <div className="sidebar-item">Item 2</div>\r
              <Spacer size="xs" direction="vertical" />\r
              <div className="sidebar-item">Item 3</div>\r
              <Spacer size="lg" direction="vertical" flexible />\r
              <div className="sidebar-footer">Footer</div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of using Spacer in common layouts.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="spacer-story-wrapper">\r
      <div className="responsive-spacing-demo">\r
        <h3>Responsive Spacing Demo</h3>\r
        <p>These spacers adjust their size based on screen size (smaller on mobile):</p>\r
        \r
        <div className="spacer-demo-content">Section 1</div>\r
        <Spacer size="2xl" direction="vertical" />\r
        <div className="spacer-demo-content">Section 2</div>\r
        <Spacer size="3xl" direction="vertical" />\r
        <div className="spacer-demo-content">Section 3</div>\r
        \r
        <Spacer size="lg" direction="vertical" />\r
        \r
        <div className="responsive-note">\r
          <strong>Note:</strong> Resize your browser or use Storybook's viewport controls to see how spacing adapts on smaller screens.\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Spacers automatically adapt to smaller screens with responsive sizing.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const x=["Default","VerticalSizes","HorizontalSizes","DirectionVariants","FlexibleSpacing","LayoutExamples","ResponsiveSpacing"];export{a as Default,o as DirectionVariants,t as FlexibleSpacing,c as HorizontalSizes,n as LayoutExamples,l as ResponsiveSpacing,i as VerticalSizes,x as __namedExportsOrder,v as default};
