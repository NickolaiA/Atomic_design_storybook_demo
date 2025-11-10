import{j as e}from"./iframe-BMIDd8Dz.js";import{D as r}from"./Divider-CDPs5rIR.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Atoms/Divider",component:r,parameters:{layout:"padded",docs:{description:{component:"A versatile divider component for creating visual separation between sections with various styles, colors, and orientations."}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of the divider"},variant:{control:"select",options:["solid","dashed","dotted","double","gradient"],description:"Visual style of the divider"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size/thickness of the divider"},color:{control:"select",options:["neutral","primary","secondary","success","warning","error","info"],description:"Color variant"},customColor:{control:"color",description:"Custom color (overrides color variant)"},spacing:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"Spacing around the divider"},label:{control:"text",description:"Text content to display in the center of horizontal dividers"},labelPosition:{control:"select",options:["left","center","right"],description:"Label position for horizontal dividers"},length:{control:"text",description:"Custom width for horizontal dividers or height for vertical"},fullWidth:{control:"boolean",description:"Whether the divider should span the full available space"},fade:{control:"boolean",description:"Fade effect at the ends"}}},i={args:{orientation:"horizontal",variant:"solid",size:"md",color:"neutral",spacing:"md",fullWidth:!0}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",height:"300px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 1rem 0"},children:"Horizontal Divider"}),e.jsx("p",{children:"Content above the divider"}),e.jsx(r,{orientation:"horizontal"}),e.jsx("p",{children:"Content below the divider"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",height:"100px"},children:[e.jsx("div",{children:"Content on the left"}),e.jsx(r,{orientation:"vertical"}),e.jsx("div",{children:"Content on the right"})]})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Solid"}),e.jsx(r,{variant:"solid"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Dashed"}),e.jsx(r,{variant:"dashed"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Dotted"}),e.jsx(r,{variant:"dotted"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Double"}),e.jsx(r,{variant:"double"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Gradient"}),e.jsx(r,{variant:"gradient"})]})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Extra Small (xs)"}),e.jsx(r,{size:"xs"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Small (sm)"}),e.jsx(r,{size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Medium (md)"}),e.jsx(r,{size:"md"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large (lg)"}),e.jsx(r,{size:"lg"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Extra Large (xl)"}),e.jsx(r,{size:"xl"})]})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Neutral"}),e.jsx(r,{color:"neutral"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Primary"}),e.jsx(r,{color:"primary"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Secondary"}),e.jsx(r,{color:"secondary"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Success"}),e.jsx(r,{color:"success"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Warning"}),e.jsx(r,{color:"warning"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Error"}),e.jsx(r,{color:"error"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Info"}),e.jsx(r,{color:"info"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Custom Color"}),e.jsx(r,{customColor:"#9333ea"})]})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Center Label (Default)"}),e.jsx("p",{children:"Content above"}),e.jsx(r,{label:"Section Break"}),e.jsx("p",{children:"Content below"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Left Label"}),e.jsx("p",{children:"Content above"}),e.jsx(r,{label:"New Section",labelPosition:"left"}),e.jsx("p",{children:"Content below"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Right Label"}),e.jsx("p",{children:"Content above"}),e.jsx(r,{label:"End Section",labelPosition:"right"}),e.jsx("p",{children:"Content below"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Styled Label"}),e.jsx("p",{children:"Content above"}),e.jsx(r,{label:"Important Section",variant:"dashed",color:"primary"}),e.jsx("p",{children:"Content below"})]})]})},l={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"No Spacing"}),e.jsx("p",{children:"Content above"}),e.jsx(r,{spacing:"none"}),e.jsx("p",{children:"Content below"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Small Spacing"}),e.jsx("p",{children:"Content above"}),e.jsx(r,{spacing:"sm"}),e.jsx("p",{children:"Content below"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large Spacing"}),e.jsx("p",{children:"Content above"}),e.jsx(r,{spacing:"lg"}),e.jsx("p",{children:"Content below"})]})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center"},children:[e.jsxs("div",{style:{width:"100%",textAlign:"center"},children:[e.jsx("h4",{children:"Custom Width - 200px"}),e.jsx(r,{length:"200px",fullWidth:!1})]}),e.jsxs("div",{style:{width:"100%",textAlign:"center"},children:[e.jsx("h4",{children:"Custom Width - 50%"}),e.jsx(r,{length:"50%",fullWidth:!1})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",height:"150px"},children:[e.jsx("div",{children:"Left content"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"0.875rem",marginBottom:"0.5rem"},children:"Custom Height - 100px"}),e.jsx(r,{orientation:"vertical",length:"100px"})]}),e.jsx("div",{children:"Right content"})]})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Normal Divider"}),e.jsx(r,{})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Fade Effect"}),e.jsx(r,{fade:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Gradient with Fade"}),e.jsx(r,{variant:"gradient",fade:!0,color:"primary"})]})]})},h={render:()=>e.jsxs("div",{style:{maxWidth:"600px",margin:"0 auto"},children:[e.jsxs("header",{style:{textAlign:"center",padding:"1rem 0"},children:[e.jsx("h1",{children:"Article Title"}),e.jsx("p",{children:"By Author Name"})]}),e.jsx(r,{variant:"double",color:"primary",spacing:"lg"}),e.jsxs("section",{style:{padding:"1rem 0"},children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."})]}),e.jsx(r,{label:"Main Content",variant:"dashed",spacing:"md"}),e.jsxs("section",{style:{padding:"1rem 0"},children:[e.jsx("h2",{children:"Main Section"}),e.jsx("p",{children:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."}),e.jsx(r,{variant:"dotted",spacing:"sm",length:"50%",fullWidth:!1}),e.jsx("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation..."})]}),e.jsx(r,{label:"Conclusion",labelPosition:"right",color:"success"}),e.jsxs("section",{style:{padding:"1rem 0"},children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse..."})]}),e.jsx(r,{variant:"gradient",fade:!0,spacing:"xl"}),e.jsx("footer",{style:{textAlign:"center",padding:"1rem 0",color:"#666"},children:e.jsx("p",{children:"© 2025 Example Publication"})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'neutral',
    spacing: 'md',
    fullWidth: true
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const g=["Default","Orientations","StyleVariants","SizeVariants","ColorVariants","WithLabels","SpacingVariants","CustomLengths","FadeEffect","ComplexLayout"];export{d as ColorVariants,h as ComplexLayout,a as CustomLengths,i as Default,c as FadeEffect,t as Orientations,s as SizeVariants,l as SpacingVariants,n as StyleVariants,o as WithLabels,g as __namedExportsOrder,m as default};
