import{j as e}from"./iframe-CY-Mz7KS.js";import"./preload-helper-PPVm8Dsz.js";const r=({orientation:u="horizontal",variant:S="solid",size:w="md",color:z="neutral",customColor:f,spacing:L="md",label:x,labelPosition:T="center",length:t,fullWidth:W=!0,fade:V=!1,className:q="",style:N,"aria-label":A,role:j="separator",...y})=>{const g=!!f,l=!!x&&u==="horizontal",b=["divider",`divider--${u}`,`divider--${S}`,`divider--${w}`,!g&&`divider--${z}`,`divider--spacing-${L}`,l&&"divider--with-label",l&&`divider--label-${T}`,!W&&"divider--custom-length",V&&"divider--fade",g&&"divider--custom-color",q].filter(Boolean).join(" "),i={...N};if(g&&(i["--divider-color"]=f),t){const D=typeof t=="number"?`${t}px`:t;u==="horizontal"?i.width=D:i.height=D}const C=A||(l?`Section divider: ${x}`:"Section divider");return l?e.jsxs("div",{className:b,style:i,role:j,"aria-label":C,...y,children:[e.jsx("span",{className:"divider__line divider__line--before"}),e.jsx("span",{className:"divider__label",children:x}),e.jsx("span",{className:"divider__line divider__line--after"})]}):e.jsx("hr",{className:b,style:i,role:j,"aria-label":C,...y})};r.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Orientation of the divider",defaultValue:{value:"'horizontal'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted' | 'double' | 'gradient'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"},{name:"literal",value:"'double'"},{name:"literal",value:"'gradient'"}]},description:"Visual style of the divider",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size/thickness of the divider",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"Color variant",defaultValue:{value:"'neutral'",computed:!1}},customColor:{required:!1,tsType:{name:"string"},description:"Custom color (overrides color variant)"},spacing:{required:!1,tsType:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Spacing around the divider",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Text content to display in the center of horizontal dividers"},labelPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Label position for horizontal dividers",defaultValue:{value:"'center'",computed:!1}},length:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Custom width for horizontal dividers or height for vertical"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the divider should span the full available space",defaultValue:{value:"true",computed:!1}},fade:{required:!1,tsType:{name:"boolean"},description:"Fade effect at the ends",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},role:{required:!1,tsType:{name:"string"},description:"Role for screen readers",defaultValue:{value:"'separator'",computed:!1}}}};const P={title:"Atoms/Divider",component:r,parameters:{layout:"padded",docs:{description:{component:"A versatile divider component for creating visual separation between sections with various styles, colors, and orientations."}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of the divider"},variant:{control:"select",options:["solid","dashed","dotted","double","gradient"],description:"Visual style of the divider"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size/thickness of the divider"},color:{control:"select",options:["neutral","primary","secondary","success","warning","error","info"],description:"Color variant"},customColor:{control:"color",description:"Custom color (overrides color variant)"},spacing:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"Spacing around the divider"},label:{control:"text",description:"Text content to display in the center of horizontal dividers"},labelPosition:{control:"select",options:["left","center","right"],description:"Label position for horizontal dividers"},length:{control:"text",description:"Custom width for horizontal dividers or height for vertical"},fullWidth:{control:"boolean",description:"Whether the divider should span the full available space"},fade:{control:"boolean",description:"Fade effect at the ends"}}},n={args:{orientation:"horizontal",variant:"solid",size:"md",color:"neutral",spacing:"md",fullWidth:!0}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",height:"300px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 1rem 0"},children:"Horizontal Divider"}),e.jsx("p",{children:"Content above the divider"}),e.jsx(r,{orientation:"horizontal"}),e.jsx("p",{children:"Content below the divider"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",height:"100px"},children:[e.jsx("div",{children:"Content on the left"}),e.jsx(r,{orientation:"vertical"}),e.jsx("div",{children:"Content on the right"})]})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Solid"}),e.jsx(r,{variant:"solid"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Dashed"}),e.jsx(r,{variant:"dashed"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Dotted"}),e.jsx(r,{variant:"dotted"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Double"}),e.jsx(r,{variant:"double"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Gradient"}),e.jsx(r,{variant:"gradient"})]})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Extra Small (xs)"}),e.jsx(r,{size:"xs"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Small (sm)"}),e.jsx(r,{size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Medium (md)"}),e.jsx(r,{size:"md"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large (lg)"}),e.jsx(r,{size:"lg"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Extra Large (xl)"}),e.jsx(r,{size:"xl"})]})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Neutral"}),e.jsx(r,{color:"neutral"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Primary"}),e.jsx(r,{color:"primary"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Secondary"}),e.jsx(r,{color:"secondary"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Success"}),e.jsx(r,{color:"success"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Warning"}),e.jsx(r,{color:"warning"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Error"}),e.jsx(r,{color:"error"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Info"}),e.jsx(r,{color:"info"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Custom Color"}),e.jsx(r,{customColor:"#9333ea"})]})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Center Label (Default)"}),e.jsx("p",{children:"Content above"}),e.jsx(r,{label:"Section Break"}),e.jsx("p",{children:"Content below"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Left Label"}),e.jsx("p",{children:"Content above"}),e.jsx(r,{label:"New Section",labelPosition:"left"}),e.jsx("p",{children:"Content below"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Right Label"}),e.jsx("p",{children:"Content above"}),e.jsx(r,{label:"End Section",labelPosition:"right"}),e.jsx("p",{children:"Content below"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Styled Label"}),e.jsx("p",{children:"Content above"}),e.jsx(r,{label:"Important Section",variant:"dashed",color:"primary"}),e.jsx("p",{children:"Content below"})]})]})},h={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"No Spacing"}),e.jsx("p",{children:"Content above"}),e.jsx(r,{spacing:"none"}),e.jsx("p",{children:"Content below"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Small Spacing"}),e.jsx("p",{children:"Content above"}),e.jsx(r,{spacing:"sm"}),e.jsx("p",{children:"Content below"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large Spacing"}),e.jsx("p",{children:"Content above"}),e.jsx(r,{spacing:"lg"}),e.jsx("p",{children:"Content below"})]})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center"},children:[e.jsxs("div",{style:{width:"100%",textAlign:"center"},children:[e.jsx("h4",{children:"Custom Width - 200px"}),e.jsx(r,{length:"200px",fullWidth:!1})]}),e.jsxs("div",{style:{width:"100%",textAlign:"center"},children:[e.jsx("h4",{children:"Custom Width - 50%"}),e.jsx(r,{length:"50%",fullWidth:!1})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",height:"150px"},children:[e.jsx("div",{children:"Left content"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"0.875rem",marginBottom:"0.5rem"},children:"Custom Height - 100px"}),e.jsx(r,{orientation:"vertical",length:"100px"})]}),e.jsx("div",{children:"Right content"})]})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Normal Divider"}),e.jsx(r,{})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Fade Effect"}),e.jsx(r,{fade:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Gradient with Fade"}),e.jsx(r,{variant:"gradient",fade:!0,color:"primary"})]})]})},m={render:()=>e.jsxs("div",{style:{maxWidth:"600px",margin:"0 auto"},children:[e.jsxs("header",{style:{textAlign:"center",padding:"1rem 0"},children:[e.jsx("h1",{children:"Article Title"}),e.jsx("p",{children:"By Author Name"})]}),e.jsx(r,{variant:"double",color:"primary",spacing:"lg"}),e.jsxs("section",{style:{padding:"1rem 0"},children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."})]}),e.jsx(r,{label:"Main Content",variant:"dashed",spacing:"md"}),e.jsxs("section",{style:{padding:"1rem 0"},children:[e.jsx("h2",{children:"Main Section"}),e.jsx("p",{children:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."}),e.jsx(r,{variant:"dotted",spacing:"sm",length:"50%",fullWidth:!1}),e.jsx("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation..."})]}),e.jsx(r,{label:"Conclusion",labelPosition:"right",color:"success"}),e.jsxs("section",{style:{padding:"1rem 0"},children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse..."})]}),e.jsx(r,{variant:"gradient",fade:!0,spacing:"xl"}),e.jsx("footer",{style:{textAlign:"center",padding:"1rem 0",color:"#666"},children:e.jsx("p",{children:"© 2025 Example Publication"})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'neutral',
    spacing: 'md',
    fullWidth: true
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    height: '300px'
  }}>\r
      <div>\r
        <h3 style={{
        margin: '0 0 1rem 0'
      }}>Horizontal Divider</h3>\r
        <p>Content above the divider</p>\r
        <Divider orientation="horizontal" />\r
        <p>Content below the divider</p>\r
      </div>\r
      \r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      height: '100px'
    }}>\r
        <div>Content on the left</div>\r
        <Divider orientation="vertical" />\r
        <div>Content on the right</div>\r
      </div>\r
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <h4>Solid</h4>\r
        <Divider variant="solid" />\r
      </div>\r
      \r
      <div>\r
        <h4>Dashed</h4>\r
        <Divider variant="dashed" />\r
      </div>\r
      \r
      <div>\r
        <h4>Dotted</h4>\r
        <Divider variant="dotted" />\r
      </div>\r
      \r
      <div>\r
        <h4>Double</h4>\r
        <Divider variant="double" />\r
      </div>\r
      \r
      <div>\r
        <h4>Gradient</h4>\r
        <Divider variant="gradient" />\r
      </div>\r
    </div>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <h4>Extra Small (xs)</h4>\r
        <Divider size="xs" />\r
      </div>\r
      \r
      <div>\r
        <h4>Small (sm)</h4>\r
        <Divider size="sm" />\r
      </div>\r
      \r
      <div>\r
        <h4>Medium (md)</h4>\r
        <Divider size="md" />\r
      </div>\r
      \r
      <div>\r
        <h4>Large (lg)</h4>\r
        <Divider size="lg" />\r
      </div>\r
      \r
      <div>\r
        <h4>Extra Large (xl)</h4>\r
        <Divider size="xl" />\r
      </div>\r
    </div>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <h4>Neutral</h4>\r
        <Divider color="neutral" />\r
      </div>\r
      \r
      <div>\r
        <h4>Primary</h4>\r
        <Divider color="primary" />\r
      </div>\r
      \r
      <div>\r
        <h4>Secondary</h4>\r
        <Divider color="secondary" />\r
      </div>\r
      \r
      <div>\r
        <h4>Success</h4>\r
        <Divider color="success" />\r
      </div>\r
      \r
      <div>\r
        <h4>Warning</h4>\r
        <Divider color="warning" />\r
      </div>\r
      \r
      <div>\r
        <h4>Error</h4>\r
        <Divider color="error" />\r
      </div>\r
      \r
      <div>\r
        <h4>Info</h4>\r
        <Divider color="info" />\r
      </div>\r
      \r
      <div>\r
        <h4>Custom Color</h4>\r
        <Divider customColor="#9333ea" />\r
      </div>\r
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <h4>Center Label (Default)</h4>\r
        <p>Content above</p>\r
        <Divider label="Section Break" />\r
        <p>Content below</p>\r
      </div>\r
      \r
      <div>\r
        <h4>Left Label</h4>\r
        <p>Content above</p>\r
        <Divider label="New Section" labelPosition="left" />\r
        <p>Content below</p>\r
      </div>\r
      \r
      <div>\r
        <h4>Right Label</h4>\r
        <p>Content above</p>\r
        <Divider label="End Section" labelPosition="right" />\r
        <p>Content below</p>\r
      </div>\r
      \r
      <div>\r
        <h4>Styled Label</h4>\r
        <p>Content above</p>\r
        <Divider label="Important Section" variant="dashed" color="primary" />\r
        <p>Content below</p>\r
      </div>\r
    </div>
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem'
  }}>\r
      <div>\r
        <h4>No Spacing</h4>\r
        <p>Content above</p>\r
        <Divider spacing="none" />\r
        <p>Content below</p>\r
      </div>\r
      \r
      <div>\r
        <h4>Small Spacing</h4>\r
        <p>Content above</p>\r
        <Divider spacing="sm" />\r
        <p>Content below</p>\r
      </div>\r
      \r
      <div>\r
        <h4>Large Spacing</h4>\r
        <p>Content above</p>\r
        <Divider spacing="lg" />\r
        <p>Content below</p>\r
      </div>\r
    </div>
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center'
  }}>\r
      <div style={{
      width: '100%',
      textAlign: 'center'
    }}>\r
        <h4>Custom Width - 200px</h4>\r
        <Divider length="200px" fullWidth={false} />\r
      </div>\r
      \r
      <div style={{
      width: '100%',
      textAlign: 'center'
    }}>\r
        <h4>Custom Width - 50%</h4>\r
        <Divider length="50%" fullWidth={false} />\r
      </div>\r
      \r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      height: '150px'
    }}>\r
        <div>Left content</div>\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>\r
          <span style={{
          fontSize: '0.875rem',
          marginBottom: '0.5rem'
        }}>Custom Height - 100px</span>\r
          <Divider orientation="vertical" length="100px" />\r
        </div>\r
        <div>Right content</div>\r
      </div>\r
    </div>
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <h4>Normal Divider</h4>\r
        <Divider />\r
      </div>\r
      \r
      <div>\r
        <h4>Fade Effect</h4>\r
        <Divider fade />\r
      </div>\r
      \r
      <div>\r
        <h4>Gradient with Fade</h4>\r
        <Divider variant="gradient" fade color="primary" />\r
      </div>\r
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '600px',
    margin: '0 auto'
  }}>\r
      <header style={{
      textAlign: 'center',
      padding: '1rem 0'
    }}>\r
        <h1>Article Title</h1>\r
        <p>By Author Name</p>\r
      </header>\r
      \r
      <Divider variant="double" color="primary" spacing="lg" />\r
      \r
      <section style={{
      padding: '1rem 0'
    }}>\r
        <h2>Introduction</h2>\r
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>\r
      </section>\r
      \r
      <Divider label="Main Content" variant="dashed" spacing="md" />\r
      \r
      <section style={{
      padding: '1rem 0'
    }}>\r
        <h2>Main Section</h2>\r
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>\r
        \r
        <Divider variant="dotted" spacing="sm" length="50%" fullWidth={false} />\r
        \r
        <p>Ut enim ad minim veniam, quis nostrud exercitation...</p>\r
      </section>\r
      \r
      <Divider label="Conclusion" labelPosition="right" color="success" />\r
      \r
      <section style={{
      padding: '1rem 0'
    }}>\r
        <h2>Conclusion</h2>\r
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse...</p>\r
      </section>\r
      \r
      <Divider variant="gradient" fade spacing="xl" />\r
      \r
      <footer style={{
      textAlign: 'center',
      padding: '1rem 0',
      color: '#666'
    }}>\r
        <p>© 2025 Example Publication</p>\r
      </footer>\r
    </div>
}`,...m.parameters?.docs?.source}}};const _=["Default","Orientations","StyleVariants","SizeVariants","ColorVariants","WithLabels","SpacingVariants","CustomLengths","FadeEffect","ComplexLayout"];export{o as ColorVariants,m as ComplexLayout,v as CustomLengths,n as Default,p as FadeEffect,a as Orientations,d as SizeVariants,h as SpacingVariants,s as StyleVariants,c as WithLabels,_ as __namedExportsOrder,P as default};
