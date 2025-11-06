import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";const s=({size:a="md",direction:i="vertical",spacing:c,flexible:H=!1,className:I="",style:L,"aria-hidden":q=!0,...U})=>{const k=["spacer",`spacer--${a}`,`spacer--${i}`,H&&"spacer--flexible",I].filter(Boolean).join(" "),r={...L};if(c){const t=typeof c=="number"?`${c}px`:c;i==="vertical"?r.height=t:i==="horizontal"?r.width=t:i==="both"&&(r.width=t,r.height=t)}return e.jsx("div",{className:k,style:Object.keys(r).length>0?r:void 0,"aria-hidden":q?"true":"false",...U})};s.__docgenInfo={description:"",methods:[],displayName:"Spacer",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"}]},description:"Spacing size variant",defaultValue:{value:"'md'",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal' | 'both'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'both'"}]},description:"Direction of spacing",defaultValue:{value:"'vertical'",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Custom spacing value"},flexible:{required:!1,tsType:{name:"boolean"},description:"Whether the spacer should be flexible (grow to fill space)",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"},"aria-hidden":{required:!1,tsType:{name:"boolean"},description:"ARIA hidden for accessibility",defaultValue:{value:"true",computed:!1}}}};const M={title:"Atoms/Spacer",component:s,parameters:{layout:"padded",docs:{description:{component:`
Spacer provides consistent spacing between elements in layouts.
It supports different directions (vertical, horizontal, both) and flexible sizing.

**Key Features:**
- Seven size variants (xs to 3xl)
- Directional spacing (vertical, horizontal, both)
- Flexible growth option
- Responsive behavior
- Semantic HTML element support
        `}}},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl","3xl"],description:"Spacer size variant"},direction:{control:{type:"select"},options:["vertical","horizontal","both"],description:"Spacing direction"},flexible:{control:{type:"boolean"},description:"Allow flexible growth"},className:{control:{type:"text"},description:"Additional CSS classes"},spacing:{control:{type:"text"},description:"Custom spacing value"}},args:{size:"md",direction:"vertical",flexible:!1}},o={render:a=>e.jsxs("div",{className:"spacer-story-wrapper",children:[e.jsx("div",{className:"spacer-demo-content",children:"Content Above"}),e.jsx(s,{...a}),e.jsx("div",{className:"spacer-demo-content",children:"Content Below"})]})},l={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsx("div",{className:"spacer-sizes-demo",children:["xs","sm","md","lg","xl","2xl","3xl"].map(a=>e.jsxs("div",{className:"spacer-size-example",children:[e.jsxs("div",{className:"spacer-demo-content",children:["Before ",a.toUpperCase()]}),e.jsx(s,{size:a,direction:"vertical"}),e.jsxs("div",{className:"spacer-demo-content",children:["After ",a.toUpperCase()]})]},a))})}),parameters:{docs:{description:{story:"Different vertical spacer sizes from xs (0.25rem) to 3xl (4rem)."}}}},n={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsx("div",{className:"spacer-horizontal-demo",children:["xs","sm","md","lg","xl","2xl","3xl"].map(a=>e.jsxs("div",{className:"spacer-horizontal-example",children:[e.jsx("div",{className:"spacer-demo-label",children:a.toUpperCase()}),e.jsxs("div",{className:"spacer-horizontal-container",children:[e.jsx("span",{className:"spacer-demo-content",children:"Before"}),e.jsx(s,{size:a,direction:"horizontal"}),e.jsx("span",{className:"spacer-demo-content",children:"After"})]})]},a))})}),parameters:{docs:{description:{story:"Different horizontal spacer sizes for inline content."}}}},d={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsxs("div",{className:"direction-variants-demo",children:[e.jsxs("div",{className:"direction-example",children:[e.jsx("h3",{children:"Vertical Spacing"}),e.jsx("div",{className:"spacer-demo-content",children:"First Element"}),e.jsx(s,{size:"lg",direction:"vertical"}),e.jsx("div",{className:"spacer-demo-content",children:"Second Element"}),e.jsx(s,{size:"lg",direction:"vertical"}),e.jsx("div",{className:"spacer-demo-content",children:"Third Element"})]}),e.jsxs("div",{className:"direction-example",children:[e.jsx("h3",{children:"Horizontal Spacing"}),e.jsxs("div",{className:"horizontal-layout",children:[e.jsx("span",{className:"spacer-demo-content",children:"First"}),e.jsx(s,{size:"lg",direction:"horizontal"}),e.jsx("span",{className:"spacer-demo-content",children:"Second"}),e.jsx(s,{size:"lg",direction:"horizontal"}),e.jsx("span",{className:"spacer-demo-content",children:"Third"})]})]}),e.jsxs("div",{className:"direction-example",children:[e.jsx("h3",{children:"Both Directions"}),e.jsxs("div",{className:"both-directions-layout",children:[e.jsx("div",{className:"spacer-demo-content",children:"Corner 1"}),e.jsx(s,{size:"lg",direction:"both"}),e.jsx("div",{className:"spacer-demo-content",children:"Corner 2"})]})]})]})}),parameters:{docs:{description:{story:"Spacer can create spacing in vertical, horizontal, or both directions."}}}},m={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsxs("div",{className:"flexible-demo",children:[e.jsxs("div",{className:"flexible-example",children:[e.jsx("h3",{children:"Fixed vs Flexible Vertical"}),e.jsxs("div",{className:"flexible-container vertical",children:[e.jsx("div",{className:"spacer-demo-content",children:"Top Content"}),e.jsx(s,{size:"md",direction:"vertical",flexible:!0}),e.jsx("div",{className:"spacer-demo-content",children:"Pushed to Bottom"})]})]}),e.jsxs("div",{className:"flexible-example",children:[e.jsx("h3",{children:"Fixed vs Flexible Horizontal"}),e.jsxs("div",{className:"flexible-container horizontal",children:[e.jsx("span",{className:"spacer-demo-content",children:"Left"}),e.jsx(s,{size:"md",direction:"horizontal",flexible:!0}),e.jsx("span",{className:"spacer-demo-content",children:"Right"})]})]})]})}),parameters:{docs:{description:{story:"Flexible spacers grow to fill available space, useful for layouts."}}}},p={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsxs("div",{className:"layout-examples",children:[e.jsxs("div",{className:"layout-example",children:[e.jsx("h3",{children:"Card Layout with Consistent Spacing"}),e.jsx("div",{className:"card-layout",children:e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"Card Title"}),e.jsx(s,{size:"sm",direction:"vertical"}),e.jsx("p",{children:"Card content goes here with consistent spacing."}),e.jsx(s,{size:"md",direction:"vertical"}),e.jsxs("div",{className:"card-actions",children:[e.jsx("button",{className:"demo-button",children:"Action 1"}),e.jsx(s,{size:"sm",direction:"horizontal"}),e.jsx("button",{className:"demo-button",children:"Action 2"})]})]})})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx("h3",{children:"Navigation Bar"}),e.jsx("div",{className:"nav-layout",children:e.jsxs("div",{className:"demo-nav",children:[e.jsx("span",{className:"nav-brand",children:"Brand"}),e.jsx(s,{size:"md",direction:"horizontal",flexible:!0}),e.jsx("span",{className:"nav-item",children:"Home"}),e.jsx(s,{size:"sm",direction:"horizontal"}),e.jsx("span",{className:"nav-item",children:"About"}),e.jsx(s,{size:"sm",direction:"horizontal"}),e.jsx("span",{className:"nav-item",children:"Contact"})]})})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx("h3",{children:"Sidebar Layout"}),e.jsx("div",{className:"sidebar-layout",children:e.jsxs("div",{className:"demo-sidebar",children:[e.jsx("div",{className:"sidebar-header",children:"Menu"}),e.jsx(s,{size:"md",direction:"vertical"}),e.jsx("div",{className:"sidebar-item",children:"Item 1"}),e.jsx(s,{size:"xs",direction:"vertical"}),e.jsx("div",{className:"sidebar-item",children:"Item 2"}),e.jsx(s,{size:"xs",direction:"vertical"}),e.jsx("div",{className:"sidebar-item",children:"Item 3"}),e.jsx(s,{size:"lg",direction:"vertical",flexible:!0}),e.jsx("div",{className:"sidebar-footer",children:"Footer"})]})})]})]})}),parameters:{docs:{description:{story:"Real-world examples of using Spacer in common layouts."}}}},v={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsxs("div",{className:"responsive-spacing-demo",children:[e.jsx("h3",{children:"Responsive Spacing Demo"}),e.jsx("p",{children:"These spacers adjust their size based on screen size (smaller on mobile):"}),e.jsx("div",{className:"spacer-demo-content",children:"Section 1"}),e.jsx(s,{size:"2xl",direction:"vertical"}),e.jsx("div",{className:"spacer-demo-content",children:"Section 2"}),e.jsx(s,{size:"3xl",direction:"vertical"}),e.jsx("div",{className:"spacer-demo-content",children:"Section 3"}),e.jsx(s,{size:"lg",direction:"vertical"}),e.jsxs("div",{className:"responsive-note",children:[e.jsx("strong",{children:"Note:"})," Resize your browser or use Storybook's viewport controls to see how spacing adapts on smaller screens."]})]})}),parameters:{docs:{description:{story:"Spacers automatically adapt to smaller screens with responsive sizing."}}}};var x,h,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div className="spacer-story-wrapper">\r
      <div className="spacer-demo-content">Content Above</div>\r
      <Spacer {...args} />\r
      <div className="spacer-demo-content">Content Below</div>\r
    </div>
}`,...(N=(h=o.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var u,z,j;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(j=(z=l.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var b,f,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,S,w;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(S=d.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,F,T;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(F=m.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var A,B,R;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(B=p.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var D,V,E;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(V=v.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const $=["Default","VerticalSizes","HorizontalSizes","DirectionVariants","FlexibleSpacing","LayoutExamples","ResponsiveSpacing"];export{o as Default,d as DirectionVariants,m as FlexibleSpacing,n as HorizontalSizes,p as LayoutExamples,v as ResponsiveSpacing,l as VerticalSizes,$ as __namedExportsOrder,M as default};
