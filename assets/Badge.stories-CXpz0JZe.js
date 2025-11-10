import{j as e}from"./iframe-NKDFF6YA.js";import{B as r}from"./Badge-DgshcUPB.js";import{A as b}from"./Avatar-jnUlb-oJ.js";import{B as y}from"./Button-GKrNatKZ.js";import"./preload-helper-PPVm8Dsz.js";const w={title:"Atoms/Badge",component:r,parameters:{layout:"centered",docs:{description:{component:`
The Badge component displays status indicators, notification counts, and labels. It supports multiple sizes, 
colors, styles, and can be used as standalone elements or overlays on other components.

## Features
- **Multiple Sizes** - xs, sm, md, lg with automatic dot sizing
- **Color Variants** - 7 semantic colors (primary, secondary, success, warning, error, info, neutral)
- **Custom Colors** - Override with custom backgroundColor, textColor, and borderColor
- **Style Options** - filled, outlined, soft, ghost
- **Shape Variants** - rounded, pill, square
- **Dot Mode** - Minimal indicator without content
- **Overlay Positioning** - Position badges on other elements
- **Smart Numbering** - Automatic "+" suffix for large numbers
- **Pulse Animation** - Attention-grabbing notification pulse
- **Accessibility** - Full ARIA support with meaningful labels
- **Interactive** - Clickable badges with keyboard support
        `}}},argTypes:{children:{control:"text",description:"Badge content - text, number, or React element"},size:{control:"select",options:["xs","sm","md","lg"],description:"Size of the badge"},variant:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"],description:"Color variant"},appearance:{control:"select",options:["filled","outlined","soft","ghost"],description:"Appearance style variant"},shape:{control:"select",options:["rounded","pill","square"],description:"Shape of the badge"},max:{control:"number",description:'Maximum number before showing "+" suffix'},dot:{control:"boolean",description:"Show as dot without content"},pulse:{control:"boolean",description:"Pulsing animation"},position:{control:"select",options:["top-right","top-left","bottom-right","bottom-left"],description:"Position when used as overlay"},overlay:{control:"boolean",description:"Position as overlay element"},backgroundColor:{control:"color",description:"Custom background color (overrides variant)"},textColor:{control:"color",description:"Custom text color (overrides variant)"},borderColor:{control:"color",description:"Custom border color (overrides variant)"},onClick:{action:"clicked",description:"Click handler for interactive badges"}},tags:["autodocs"]},s={args:{children:"New"}},i={render:()=>e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{size:"xs",children:"XS"}),e.jsx("span",{children:"Extra Small"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{size:"sm",children:"SM"}),e.jsx("span",{children:"Small"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{size:"md",children:"MD"}),e.jsx("span",{children:"Medium"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{size:"lg",children:"LG"}),e.jsx("span",{children:"Large"})]})]})},t={render:()=>e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:"primary",appearance:"filled",children:"Primary"}),e.jsx("span",{children:"Primary"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:"secondary",appearance:"filled",children:"Secondary"}),e.jsx("span",{children:"Secondary"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:"success",appearance:"filled",children:"Success"}),e.jsx("span",{children:"Success"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:"warning",appearance:"filled",children:"Warning"}),e.jsx("span",{children:"Warning"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:"error",appearance:"filled",children:"Error"}),e.jsx("span",{children:"Error"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:"info",appearance:"filled",children:"Info"}),e.jsx("span",{children:"Info"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:"neutral",appearance:"filled",children:"Neutral"}),e.jsx("span",{children:"Neutral"})]})]})},n={render:()=>e.jsx("div",{className:"badge-story-sections",children:["primary","success","warning","error"].map(a=>e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:a.charAt(0).toUpperCase()+a.slice(1)}),e.jsxs("div",{className:"badge-story-row",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:a,appearance:"filled",children:"Filled"}),e.jsx("span",{children:"Filled"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:a,appearance:"outlined",children:"Outlined"}),e.jsx("span",{children:"Outlined"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:a,appearance:"soft",children:"Soft"}),e.jsx("span",{children:"Soft"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:a,appearance:"ghost",children:"Ghost"}),e.jsx("span",{children:"Ghost"})]})]})]},a))})},d={render:()=>e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{shape:"rounded",size:"lg",children:"Rounded"}),e.jsx("span",{children:"Rounded"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{shape:"pill",size:"lg",children:"Pill"}),e.jsx("span",{children:"Pill"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{shape:"square",size:"lg",children:"Square"}),e.jsx("span",{children:"Square"})]})]})},o={render:()=>e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:"error",children:"1"}),e.jsx("span",{children:"Single digit"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:"error",children:"42"}),e.jsx("span",{children:"Double digit"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:"error",max:99,children:"150"}),e.jsx("span",{children:"Over max (99+)"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:"error",max:9,children:"25"}),e.jsx("span",{children:"Over max (9+)"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:"success",children:"0"}),e.jsx("span",{children:"Zero value"})]})]})},c={render:()=>e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{dot:!0,size:"xs",variant:"primary"}),e.jsx("span",{children:"XS Dot"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{dot:!0,size:"sm",variant:"success"}),e.jsx("span",{children:"SM Dot"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{dot:!0,size:"md",variant:"warning"}),e.jsx("span",{children:"MD Dot"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{dot:!0,size:"lg",variant:"error"}),e.jsx("span",{children:"LG Dot"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{dot:!0,pulse:!0,variant:"error"}),e.jsx("span",{children:"Pulsing Dot"})]})]})},l={render:()=>e.jsxs("div",{className:"badge-story-overlay-demo",children:[e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Avatar with Badge Overlay"}),e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-overlay-container",children:[e.jsx(b,{name:"John Doe",size:"lg",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"}),e.jsx(r,{overlay:!0,position:"top-right",variant:"error",size:"sm",children:"3"})]}),e.jsxs("div",{className:"badge-story-overlay-container",children:[e.jsx(b,{name:"Jane Smith",size:"lg"}),e.jsx(r,{overlay:!0,position:"top-left",dot:!0,variant:"success"})]}),e.jsxs("div",{className:"badge-story-overlay-container",children:[e.jsx(b,{name:"Bob Wilson",size:"lg"}),e.jsx(r,{overlay:!0,position:"bottom-right",variant:"warning",size:"xs",children:"!"})]})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Button with Badge Overlay"}),e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-overlay-container",children:[e.jsx(y,{children:"Messages"}),e.jsx(r,{overlay:!0,position:"top-right",variant:"error",size:"sm",children:"12"})]}),e.jsxs("div",{className:"badge-story-overlay-container",children:[e.jsx(y,{variant:"secondary",children:"Notifications"}),e.jsx(r,{overlay:!0,position:"top-right",dot:!0,variant:"error",pulse:!0})]})]})]})]}),parameters:{docs:{description:{story:"Badges positioned as overlays on other components like avatars and buttons."}}}},g={render:()=>e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{pulse:!0,variant:"error",children:"New"}),e.jsx("span",{children:"Pulsing Text"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{pulse:!0,variant:"success",children:"5"}),e.jsx("span",{children:"Pulsing Number"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{pulse:!0,dot:!0,variant:"warning"}),e.jsx("span",{children:"Pulsing Dot"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{pulse:!0,variant:"info",size:"lg",children:"Live"}),e.jsx("span",{children:"Large Pulsing"})]})]}),parameters:{docs:{description:{story:"Badges with pulsing animation to draw attention to notifications or live status."}}}},m={render:()=>e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:"primary",onClick:()=>alert("Primary badge clicked!"),children:"Clickable"}),e.jsx("span",{children:"Primary"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:"error",onClick:()=>alert("Delete action!"),size:"sm",children:"×"}),e.jsx("span",{children:"Delete"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{variant:"success",appearance:"soft",onClick:()=>alert("Status updated!"),children:"Active"}),e.jsx("span",{children:"Status"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(r,{dot:!0,variant:"warning",onClick:()=>alert("Notification clicked!")}),e.jsx("span",{children:"Notification"})]})]}),parameters:{docs:{description:{story:"Interactive badges that respond to clicks and keyboard navigation. Try clicking or using Tab + Enter."}}}},p={render:()=>e.jsxs("div",{className:"badge-story-sections",children:[e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"System Status"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(r,{variant:"success",appearance:"soft",children:"Online"}),e.jsx(r,{variant:"error",appearance:"soft",children:"Offline"}),e.jsx(r,{variant:"warning",appearance:"soft",children:"Maintenance"}),e.jsx(r,{variant:"info",appearance:"soft",children:"Updating"})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"User Status"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(r,{dot:!0,variant:"success"}),e.jsx("span",{className:"badge-story-status-text",children:"Available"}),e.jsx(r,{dot:!0,variant:"warning"}),e.jsx("span",{className:"badge-story-status-text",children:"Away"}),e.jsx(r,{dot:!0,variant:"error"}),e.jsx("span",{className:"badge-story-status-text",children:"Busy"}),e.jsx(r,{dot:!0,variant:"neutral"}),e.jsx("span",{className:"badge-story-status-text",children:"Offline"})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Priority Levels"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(r,{variant:"error",children:"High"}),e.jsx(r,{variant:"warning",children:"Medium"}),e.jsx(r,{variant:"info",children:"Low"}),e.jsx(r,{variant:"neutral",children:"None"})]})]})]})},v={render:()=>e.jsxs("div",{className:"badge-story-accessibility",children:[e.jsx("h3",{children:"Screen Reader Labels"}),e.jsx("p",{children:"These badges have descriptive ARIA labels for screen readers:"}),e.jsxs("div",{className:"badge-story-grid",children:[e.jsx(r,{"aria-label":"5 unread messages",children:"5"}),e.jsx(r,{dot:!0,variant:"error","aria-label":"You have new notifications"}),e.jsx(r,{variant:"success","aria-label":"Account status: verified",children:"Verified"}),e.jsx(r,{variant:"warning","aria-label":"Action required",children:"!"})]}),e.jsx("h3",{children:"Keyboard Navigation"}),e.jsx("p",{children:"Try using Tab, Enter, and Space keys on these interactive badges:"}),e.jsxs("div",{className:"badge-story-grid",children:[e.jsx(r,{onClick:()=>alert("Badge 1 activated"),"aria-label":"First interactive badge",children:"Tab Me"}),e.jsx(r,{onClick:()=>alert("Badge 2 activated"),variant:"success","aria-label":"Second interactive badge",children:"Focus Me"}),e.jsx(r,{onClick:()=>alert("Badge 3 activated"),variant:"error",dot:!0,"aria-label":"Third interactive badge - notification indicator"})]}),e.jsx("h3",{children:"Smart Number Announcements"}),e.jsx("p",{children:"Number badges automatically generate appropriate screen reader text:"}),e.jsxs("div",{className:"badge-story-grid",children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"5"}),e.jsx(r,{max:99,children:"150"}),e.jsx(r,{max:9,children:"25"})]})]}),parameters:{docs:{description:{story:"Demonstration of accessibility features including ARIA labels, keyboard navigation, and screen reader support."}}}},h={render:()=>e.jsxs("div",{className:"badge-story-themes",children:[e.jsxs("div",{className:"badge-story-theme","data-theme":"light",children:[e.jsx("h4",{children:"Light Theme"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"success",appearance:"soft",children:"Success"}),e.jsx(r,{variant:"warning",appearance:"outlined",children:"Warning"}),e.jsx(r,{variant:"error",dot:!0})]})]}),e.jsxs("div",{className:"badge-story-theme","data-theme":"dark",children:[e.jsx("h4",{children:"Dark Theme"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"success",appearance:"soft",children:"Success"}),e.jsx(r,{variant:"warning",appearance:"outlined",children:"Warning"}),e.jsx(r,{variant:"error",dot:!0})]})]}),e.jsxs("div",{className:"badge-story-theme","data-theme":"custom",children:[e.jsx("h4",{children:"Custom Theme (High Contrast)"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"success",appearance:"soft",children:"Success"}),e.jsx(r,{variant:"warning",appearance:"outlined",children:"Warning"}),e.jsx(r,{variant:"error",dot:!0})]})]})]}),parameters:{docs:{description:{story:"Badge appearance across different themes with automatic color adaptation."}}}},u={render:()=>e.jsxs("div",{className:"badge-story-sections",children:[e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Custom Background Colors"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(r,{backgroundColor:"#FF6B6B",textColor:"white",children:"Coral"}),e.jsx(r,{backgroundColor:"#4ECDC4",textColor:"white",children:"Turquoise"}),e.jsx(r,{backgroundColor:"#45B7D1",textColor:"white",children:"Sky Blue"}),e.jsx(r,{backgroundColor:"#96CEB4",textColor:"white",children:"Mint"}),e.jsx(r,{backgroundColor:"#FFEAA7",textColor:"#2D3436",children:"Sunny"})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Custom Borders"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(r,{backgroundColor:"transparent",textColor:"#E74C3C",borderColor:"#E74C3C",children:"Red Border"}),e.jsx(r,{backgroundColor:"transparent",textColor:"#8E44AD",borderColor:"#8E44AD",children:"Purple Border"}),e.jsx(r,{backgroundColor:"transparent",textColor:"#27AE60",borderColor:"#27AE60",children:"Green Border"})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Gradient-like Effects"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(r,{backgroundColor:"linear-gradient(45deg, #667eea 0%, #764ba2 100%)",textColor:"white",children:"Gradient 1"}),e.jsx(r,{backgroundColor:"linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",textColor:"white",children:"Gradient 2"}),e.jsx(r,{backgroundColor:"linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)",textColor:"white",children:"Gradient 3"})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Brand Colors"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(r,{backgroundColor:"#1DA1F2",textColor:"white",children:"Twitter"}),e.jsx(r,{backgroundColor:"#4267B2",textColor:"white",children:"Facebook"}),e.jsx(r,{backgroundColor:"#FF0000",textColor:"white",children:"YouTube"}),e.jsx(r,{backgroundColor:"#25D366",textColor:"white",children:"WhatsApp"}),e.jsx(r,{backgroundColor:"#E4405F",textColor:"white",children:"Instagram"})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Interactive Custom Colors"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(r,{backgroundColor:"#FF6B6B",textColor:"white",onClick:()=>alert("Custom red badge clicked!"),children:"Click Me"}),e.jsx(r,{backgroundColor:"transparent",textColor:"#8E44AD",borderColor:"#8E44AD",onClick:()=>alert("Custom purple badge clicked!"),children:"Purple Click"}),e.jsx(r,{dot:!0,backgroundColor:"#27AE60",onClick:()=>alert("Custom green dot clicked!")})]})]})]}),parameters:{docs:{description:{story:"Custom colors override the variant system, allowing for complete design freedom. You can specify backgroundColor, textColor, and borderColor independently."}}}},x={render:()=>e.jsxs("div",{className:"badge-story-comprehensive",children:[e.jsx("h3",{children:"Comprehensive Badge Showcase"}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Sizes and Shapes"}),e.jsx("div",{className:"badge-story-row",children:["xs","sm","md","lg"].map(a=>e.jsx(r,{size:a,variant:"primary",shape:"pill",children:a.toUpperCase()},a))})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Interactive Elements"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(r,{variant:"primary",onClick:()=>alert("Action badge clicked"),children:"Action"}),e.jsx(r,{variant:"error",pulse:!0,onClick:()=>alert("Urgent notification!"),children:"Urgent"}),e.jsx(r,{dot:!0,variant:"success",pulse:!0,onClick:()=>alert("Status indicator clicked")})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Real-world Examples"}),e.jsxs("div",{className:"badge-story-examples",children:[e.jsxs("div",{className:"badge-story-example",children:[e.jsx("span",{children:"Shopping Cart"}),e.jsx(r,{variant:"error",shape:"pill",children:"3"})]}),e.jsxs("div",{className:"badge-story-example",children:[e.jsx("span",{children:"Inbox"}),e.jsx(r,{variant:"primary",max:99,children:"127"})]}),e.jsxs("div",{className:"badge-story-example",children:[e.jsx("span",{children:"Live Stream"}),e.jsx(r,{variant:"error",pulse:!0,children:"LIVE"})]}),e.jsxs("div",{className:"badge-story-example",children:[e.jsx("span",{children:"Beta Feature"}),e.jsx(r,{variant:"warning",appearance:"soft",size:"sm",children:"BETA"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'New'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-grid">\r
      <div className="badge-story-item">\r
        <Badge size="xs">XS</Badge>\r
        <span>Extra Small</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge size="sm">SM</Badge>\r
        <span>Small</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge size="md">MD</Badge>\r
        <span>Medium</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge size="lg">LG</Badge>\r
        <span>Large</span>\r
      </div>\r
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-grid">\r
      <div className="badge-story-item">\r
        <Badge variant="primary" appearance="filled">Primary</Badge>\r
        <span>Primary</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="secondary" appearance="filled">Secondary</Badge>\r
        <span>Secondary</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="success" appearance="filled">Success</Badge>\r
        <span>Success</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="warning" appearance="filled">Warning</Badge>\r
        <span>Warning</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="error" appearance="filled">Error</Badge>\r
        <span>Error</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="info" appearance="filled">Info</Badge>\r
        <span>Info</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="neutral" appearance="filled">Neutral</Badge>\r
        <span>Neutral</span>\r
      </div>\r
    </div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-sections">\r
      {(['primary', 'success', 'warning', 'error'] as const).map(variant => <div key={variant} className="badge-story-section">\r
          <h4>{variant.charAt(0).toUpperCase() + variant.slice(1)}</h4>\r
          <div className="badge-story-row">\r
            <div className="badge-story-item">\r
              <Badge variant={variant} appearance="filled">Filled</Badge>\r
              <span>Filled</span>\r
            </div>\r
            <div className="badge-story-item">\r
              <Badge variant={variant} appearance="outlined">Outlined</Badge>\r
              <span>Outlined</span>\r
            </div>\r
            <div className="badge-story-item">\r
              <Badge variant={variant} appearance="soft">Soft</Badge>\r
              <span>Soft</span>\r
            </div>\r
            <div className="badge-story-item">\r
              <Badge variant={variant} appearance="ghost">Ghost</Badge>\r
              <span>Ghost</span>\r
            </div>\r
          </div>\r
        </div>)}\r
    </div>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-grid">\r
      <div className="badge-story-item">\r
        <Badge shape="rounded" size="lg">Rounded</Badge>\r
        <span>Rounded</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge shape="pill" size="lg">Pill</Badge>\r
        <span>Pill</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge shape="square" size="lg">Square</Badge>\r
        <span>Square</span>\r
      </div>\r
    </div>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-grid">\r
      <div className="badge-story-item">\r
        <Badge variant="error">1</Badge>\r
        <span>Single digit</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="error">42</Badge>\r
        <span>Double digit</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="error" max={99}>150</Badge>\r
        <span>Over max (99+)</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="error" max={9}>25</Badge>\r
        <span>Over max (9+)</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="success">0</Badge>\r
        <span>Zero value</span>\r
      </div>\r
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-grid">\r
      <div className="badge-story-item">\r
        <Badge dot size="xs" variant="primary" />\r
        <span>XS Dot</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge dot size="sm" variant="success" />\r
        <span>SM Dot</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge dot size="md" variant="warning" />\r
        <span>MD Dot</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge dot size="lg" variant="error" />\r
        <span>LG Dot</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge dot pulse variant="error" />\r
        <span>Pulsing Dot</span>\r
      </div>\r
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-overlay-demo">\r
      <div className="badge-story-section">\r
        <h4>Avatar with Badge Overlay</h4>\r
        <div className="badge-story-grid">\r
          <div className="badge-story-overlay-container">\r
            <Avatar name="John Doe" size="lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />\r
            <Badge overlay position="top-right" variant="error" size="sm">3</Badge>\r
          </div>\r
          <div className="badge-story-overlay-container">\r
            <Avatar name="Jane Smith" size="lg" />\r
            <Badge overlay position="top-left" dot variant="success" />\r
          </div>\r
          <div className="badge-story-overlay-container">\r
            <Avatar name="Bob Wilson" size="lg" />\r
            <Badge overlay position="bottom-right" variant="warning" size="xs">!</Badge>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="badge-story-section">\r
        <h4>Button with Badge Overlay</h4>\r
        <div className="badge-story-grid">\r
          <div className="badge-story-overlay-container">\r
            <Button>Messages</Button>\r
            <Badge overlay position="top-right" variant="error" size="sm">12</Badge>\r
          </div>\r
          <div className="badge-story-overlay-container">\r
            <Button variant="secondary">Notifications</Button>\r
            <Badge overlay position="top-right" dot variant="error" pulse />\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Badges positioned as overlays on other components like avatars and buttons.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-grid">\r
      <div className="badge-story-item">\r
        <Badge pulse variant="error">New</Badge>\r
        <span>Pulsing Text</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge pulse variant="success">5</Badge>\r
        <span>Pulsing Number</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge pulse dot variant="warning" />\r
        <span>Pulsing Dot</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge pulse variant="info" size="lg">Live</Badge>\r
        <span>Large Pulsing</span>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Badges with pulsing animation to draw attention to notifications or live status.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-grid">\r
      <div className="badge-story-item">\r
        <Badge variant="primary" onClick={() => alert('Primary badge clicked!')}>\r
          Clickable\r
        </Badge>\r
        <span>Primary</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="error" onClick={() => alert('Delete action!')} size="sm">\r
          ×\r
        </Badge>\r
        <span>Delete</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="success" appearance="soft" onClick={() => alert('Status updated!')}>\r
          Active\r
        </Badge>\r
        <span>Status</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge dot variant="warning" onClick={() => alert('Notification clicked!')} />\r
        <span>Notification</span>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive badges that respond to clicks and keyboard navigation. Try clicking or using Tab + Enter.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-sections">\r
      <div className="badge-story-section">\r
        <h4>System Status</h4>\r
        <div className="badge-story-row">\r
          <Badge variant="success" appearance="soft">Online</Badge>\r
          <Badge variant="error" appearance="soft">Offline</Badge>\r
          <Badge variant="warning" appearance="soft">Maintenance</Badge>\r
          <Badge variant="info" appearance="soft">Updating</Badge>\r
        </div>\r
      </div>\r
      \r
      <div className="badge-story-section">\r
        <h4>User Status</h4>\r
        <div className="badge-story-row">\r
          <Badge dot variant="success" />\r
          <span className="badge-story-status-text">Available</span>\r
          <Badge dot variant="warning" />\r
          <span className="badge-story-status-text">Away</span>\r
          <Badge dot variant="error" />\r
          <span className="badge-story-status-text">Busy</span>\r
          <Badge dot variant="neutral" />\r
          <span className="badge-story-status-text">Offline</span>\r
        </div>\r
      </div>\r
      \r
      <div className="badge-story-section">\r
        <h4>Priority Levels</h4>\r
        <div className="badge-story-row">\r
          <Badge variant="error">High</Badge>\r
          <Badge variant="warning">Medium</Badge>\r
          <Badge variant="info">Low</Badge>\r
          <Badge variant="neutral">None</Badge>\r
        </div>\r
      </div>\r
    </div>
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-accessibility">\r
      <h3>Screen Reader Labels</h3>\r
      <p>These badges have descriptive ARIA labels for screen readers:</p>\r
      <div className="badge-story-grid">\r
        <Badge aria-label="5 unread messages">5</Badge>\r
        <Badge dot variant="error" aria-label="You have new notifications" />\r
        <Badge variant="success" aria-label="Account status: verified">Verified</Badge>\r
        <Badge variant="warning" aria-label="Action required">!</Badge>\r
      </div>\r
      \r
      <h3>Keyboard Navigation</h3>\r
      <p>Try using Tab, Enter, and Space keys on these interactive badges:</p>\r
      <div className="badge-story-grid">\r
        <Badge onClick={() => alert('Badge 1 activated')} aria-label="First interactive badge">\r
          Tab Me\r
        </Badge>\r
        <Badge onClick={() => alert('Badge 2 activated')} variant="success" aria-label="Second interactive badge">\r
          Focus Me\r
        </Badge>\r
        <Badge onClick={() => alert('Badge 3 activated')} variant="error" dot aria-label="Third interactive badge - notification indicator" />\r
      </div>\r
      \r
      <h3>Smart Number Announcements</h3>\r
      <p>Number badges automatically generate appropriate screen reader text:</p>\r
      <div className="badge-story-grid">\r
        <Badge>1</Badge>\r
        <Badge>5</Badge>\r
        <Badge max={99}>150</Badge>\r
        <Badge max={9}>25</Badge>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of accessibility features including ARIA labels, keyboard navigation, and screen reader support.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-themes">\r
      <div className="badge-story-theme" data-theme="light">\r
        <h4>Light Theme</h4>\r
        <div className="badge-story-row">\r
          <Badge variant="primary">Primary</Badge>\r
          <Badge variant="success" appearance="soft">Success</Badge>\r
          <Badge variant="warning" appearance="outlined">Warning</Badge>\r
          <Badge variant="error" dot />\r
        </div>\r
      </div>\r
      \r
      <div className="badge-story-theme" data-theme="dark">\r
        <h4>Dark Theme</h4>\r
        <div className="badge-story-row">\r
          <Badge variant="primary">Primary</Badge>\r
          <Badge variant="success" appearance="soft">Success</Badge>\r
          <Badge variant="warning" appearance="outlined">Warning</Badge>\r
          <Badge variant="error" dot />\r
        </div>\r
      </div>\r
      \r
      <div className="badge-story-theme" data-theme="custom">\r
        <h4>Custom Theme (High Contrast)</h4>\r
        <div className="badge-story-row">\r
          <Badge variant="primary">Primary</Badge>\r
          <Badge variant="success" appearance="soft">Success</Badge>\r
          <Badge variant="warning" appearance="outlined">Warning</Badge>\r
          <Badge variant="error" dot />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Badge appearance across different themes with automatic color adaptation.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-sections">\r
      <div className="badge-story-section">\r
        <h4>Custom Background Colors</h4>\r
        <div className="badge-story-row">\r
          <Badge backgroundColor="#FF6B6B" textColor="white">Coral</Badge>\r
          <Badge backgroundColor="#4ECDC4" textColor="white">Turquoise</Badge>\r
          <Badge backgroundColor="#45B7D1" textColor="white">Sky Blue</Badge>\r
          <Badge backgroundColor="#96CEB4" textColor="white">Mint</Badge>\r
          <Badge backgroundColor="#FFEAA7" textColor="#2D3436">Sunny</Badge>\r
        </div>\r
      </div>\r
      \r
      <div className="badge-story-section">\r
        <h4>Custom Borders</h4>\r
        <div className="badge-story-row">\r
          <Badge backgroundColor="transparent" textColor="#E74C3C" borderColor="#E74C3C">\r
            Red Border\r
          </Badge>\r
          <Badge backgroundColor="transparent" textColor="#8E44AD" borderColor="#8E44AD">\r
            Purple Border\r
          </Badge>\r
          <Badge backgroundColor="transparent" textColor="#27AE60" borderColor="#27AE60">\r
            Green Border\r
          </Badge>\r
        </div>\r
      </div>\r
      \r
      <div className="badge-story-section">\r
        <h4>Gradient-like Effects</h4>\r
        <div className="badge-story-row">\r
          <Badge backgroundColor="linear-gradient(45deg, #667eea 0%, #764ba2 100%)" textColor="white">\r
            Gradient 1\r
          </Badge>\r
          <Badge backgroundColor="linear-gradient(45deg, #f093fb 0%, #f5576c 100%)" textColor="white">\r
            Gradient 2\r
          </Badge>\r
          <Badge backgroundColor="linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)" textColor="white">\r
            Gradient 3\r
          </Badge>\r
        </div>\r
      </div>\r
      \r
      <div className="badge-story-section">\r
        <h4>Brand Colors</h4>\r
        <div className="badge-story-row">\r
          <Badge backgroundColor="#1DA1F2" textColor="white">Twitter</Badge>\r
          <Badge backgroundColor="#4267B2" textColor="white">Facebook</Badge>\r
          <Badge backgroundColor="#FF0000" textColor="white">YouTube</Badge>\r
          <Badge backgroundColor="#25D366" textColor="white">WhatsApp</Badge>\r
          <Badge backgroundColor="#E4405F" textColor="white">Instagram</Badge>\r
        </div>\r
      </div>\r
      \r
      <div className="badge-story-section">\r
        <h4>Interactive Custom Colors</h4>\r
        <div className="badge-story-row">\r
          <Badge backgroundColor="#FF6B6B" textColor="white" onClick={() => alert('Custom red badge clicked!')}>\r
            Click Me\r
          </Badge>\r
          <Badge backgroundColor="transparent" textColor="#8E44AD" borderColor="#8E44AD" onClick={() => alert('Custom purple badge clicked!')}>\r
            Purple Click\r
          </Badge>\r
          <Badge dot backgroundColor="#27AE60" onClick={() => alert('Custom green dot clicked!')} />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Custom colors override the variant system, allowing for complete design freedom. You can specify backgroundColor, textColor, and borderColor independently.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-comprehensive">\r
      <h3>Comprehensive Badge Showcase</h3>\r
      \r
      <div className="badge-story-section">\r
        <h4>Sizes and Shapes</h4>\r
        <div className="badge-story-row">\r
          {(['xs', 'sm', 'md', 'lg'] as const).map(size => <Badge key={size} size={size} variant="primary" shape="pill">\r
              {size.toUpperCase()}\r
            </Badge>)}\r
        </div>\r
      </div>\r
      \r
      <div className="badge-story-section">\r
        <h4>Interactive Elements</h4>\r
        <div className="badge-story-row">\r
          <Badge variant="primary" onClick={() => alert('Action badge clicked')}>\r
            Action\r
          </Badge>\r
          <Badge variant="error" pulse onClick={() => alert('Urgent notification!')}>\r
            Urgent\r
          </Badge>\r
          <Badge dot variant="success" pulse onClick={() => alert('Status indicator clicked')} />\r
        </div>\r
      </div>\r
      \r
      <div className="badge-story-section">\r
        <h4>Real-world Examples</h4>\r
        <div className="badge-story-examples">\r
          <div className="badge-story-example">\r
            <span>Shopping Cart</span>\r
            <Badge variant="error" shape="pill">3</Badge>\r
          </div>\r
          <div className="badge-story-example">\r
            <span>Inbox</span>\r
            <Badge variant="primary" max={99}>127</Badge>\r
          </div>\r
          <div className="badge-story-example">\r
            <span>Live Stream</span>\r
            <Badge variant="error" pulse>LIVE</Badge>\r
          </div>\r
          <div className="badge-story-example">\r
            <span>Beta Feature</span>\r
            <Badge variant="warning" appearance="soft" size="sm">BETA</Badge>\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...x.parameters?.docs?.source}}};const k=["Default","SizeVariants","ColorVariants","StyleVariants","ShapeVariants","NumberBadges","DotBadges","OverlayBadges","PulseAnimation","InteractiveBadges","StatusIndicators","AccessibilityDemo","ThemeShowcase","CustomColors","AllFeaturesCombined"];export{v as AccessibilityDemo,x as AllFeaturesCombined,t as ColorVariants,u as CustomColors,s as Default,c as DotBadges,m as InteractiveBadges,o as NumberBadges,l as OverlayBadges,g as PulseAnimation,d as ShapeVariants,i as SizeVariants,p as StatusIndicators,n as StyleVariants,h as ThemeShowcase,k as __namedExportsOrder,w as default};
