import{j as e}from"./react-1-DYTeAnAh.js";import{B as s,A as we,d as Se,P as o,S as a,e as r,f as i,g as t}from"./atoms-components-B6eh4y83.js";const Be={title:"Atoms/Badge",component:s,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},argTypes:{children:{control:"text",description:"Badge content - text, number, or React element"},size:{control:"select",options:["xs","sm","md","lg"],description:"Size of the badge"},variant:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"],description:"Color variant"},style:{control:"select",options:["filled","outlined","soft","ghost"],description:"Style variant"},shape:{control:"select",options:["rounded","pill","square"],description:"Shape of the badge"},max:{control:"number",description:'Maximum number before showing "+" suffix'},dot:{control:"boolean",description:"Show as dot without content"},pulse:{control:"boolean",description:"Pulsing animation"},position:{control:"select",options:["top-right","top-left","bottom-right","bottom-left"],description:"Position when used as overlay"},overlay:{control:"boolean",description:"Position as overlay element"},backgroundColor:{control:"color",description:"Custom background color (overrides variant)"},textColor:{control:"color",description:"Custom text color (overrides variant)"},borderColor:{control:"color",description:"Custom border color (overrides variant)"},onClick:{action:"clicked",description:"Click handler for interactive badges"}},tags:["autodocs"]},d={args:{children:"New"}},l={render:()=>e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{size:"xs",children:"XS"}),e.jsx("span",{children:"Extra Small"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{size:"sm",children:"SM"}),e.jsx("span",{children:"Small"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{size:"md",children:"MD"}),e.jsx("span",{children:"Medium"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{size:"lg",children:"LG"}),e.jsx("span",{children:"Large"})]})]})},c={render:()=>e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:"primary",style:"filled",children:"Primary"}),e.jsx("span",{children:"Primary"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:"secondary",style:"filled",children:"Secondary"}),e.jsx("span",{children:"Secondary"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:"success",style:"filled",children:"Success"}),e.jsx("span",{children:"Success"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:"warning",style:"filled",children:"Warning"}),e.jsx("span",{children:"Warning"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:"error",style:"filled",children:"Error"}),e.jsx("span",{children:"Error"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:"info",style:"filled",children:"Info"}),e.jsx("span",{children:"Info"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:"neutral",style:"filled",children:"Neutral"}),e.jsx("span",{children:"Neutral"})]})]})},m={render:()=>e.jsx("div",{className:"badge-story-sections",children:["primary","success","warning","error"].map(n=>e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:n.charAt(0).toUpperCase()+n.slice(1)}),e.jsxs("div",{className:"badge-story-row",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:n,style:"filled",children:"Filled"}),e.jsx("span",{children:"Filled"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:n,style:"outlined",children:"Outlined"}),e.jsx("span",{children:"Outlined"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:n,style:"soft",children:"Soft"}),e.jsx("span",{children:"Soft"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:n,style:"ghost",children:"Ghost"}),e.jsx("span",{children:"Ghost"})]})]})]},n))})},p={render:()=>e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{shape:"rounded",size:"lg",children:"Rounded"}),e.jsx("span",{children:"Rounded"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{shape:"pill",size:"lg",children:"Pill"}),e.jsx("span",{children:"Pill"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{shape:"square",size:"lg",children:"Square"}),e.jsx("span",{children:"Square"})]})]})},h={render:()=>e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:"error",children:"1"}),e.jsx("span",{children:"Single digit"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:"error",children:"42"}),e.jsx("span",{children:"Double digit"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:"error",max:99,children:"150"}),e.jsx("span",{children:"Over max (99+)"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:"error",max:9,children:"25"}),e.jsx("span",{children:"Over max (9+)"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:"success",children:"0"}),e.jsx("span",{children:"Zero value"})]})]})},u={render:()=>e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{dot:!0,size:"xs",variant:"primary"}),e.jsx("span",{children:"XS Dot"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{dot:!0,size:"sm",variant:"success"}),e.jsx("span",{children:"SM Dot"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{dot:!0,size:"md",variant:"warning"}),e.jsx("span",{children:"MD Dot"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{dot:!0,size:"lg",variant:"error"}),e.jsx("span",{children:"LG Dot"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{dot:!0,pulse:!0,variant:"error"}),e.jsx("span",{children:"Pulsing Dot"})]})]})},v={render:()=>e.jsxs("div",{className:"badge-story-overlay-demo",children:[e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Avatar with Badge Overlay"}),e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-overlay-container",children:[e.jsx(we,{name:"John Doe",size:"lg",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"}),e.jsx(s,{overlay:!0,position:"top-right",variant:"error",size:"sm",children:"3"})]}),e.jsxs("div",{className:"badge-story-overlay-container",children:[e.jsx(we,{name:"Jane Smith",size:"lg"}),e.jsx(s,{overlay:!0,position:"top-left",dot:!0,variant:"success"})]}),e.jsxs("div",{className:"badge-story-overlay-container",children:[e.jsx(we,{name:"Bob Wilson",size:"lg"}),e.jsx(s,{overlay:!0,position:"bottom-right",variant:"warning",size:"xs",children:"!"})]})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Button with Badge Overlay"}),e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-overlay-container",children:[e.jsx(Se,{children:"Messages"}),e.jsx(s,{overlay:!0,position:"top-right",variant:"error",size:"sm",children:"12"})]}),e.jsxs("div",{className:"badge-story-overlay-container",children:[e.jsx(Se,{variant:"secondary",children:"Notifications"}),e.jsx(s,{overlay:!0,position:"top-right",dot:!0,variant:"error",pulse:!0})]})]})]})]}),parameters:{docs:{description:{story:"Badges positioned as overlays on other components like avatars and buttons."}}}},g={render:()=>e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{pulse:!0,variant:"error",children:"New"}),e.jsx("span",{children:"Pulsing Text"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{pulse:!0,variant:"success",children:"5"}),e.jsx("span",{children:"Pulsing Number"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{pulse:!0,dot:!0,variant:"warning"}),e.jsx("span",{children:"Pulsing Dot"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{pulse:!0,variant:"info",size:"lg",children:"Live"}),e.jsx("span",{children:"Large Pulsing"})]})]}),parameters:{docs:{description:{story:"Badges with pulsing animation to draw attention to notifications or live status."}}}},x={render:()=>e.jsxs("div",{className:"badge-story-grid",children:[e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:"primary",onClick:()=>alert("Primary badge clicked!"),children:"Clickable"}),e.jsx("span",{children:"Primary"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:"error",onClick:()=>alert("Delete action!"),size:"sm",children:"×"}),e.jsx("span",{children:"Delete"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{variant:"success",style:"soft",onClick:()=>alert("Status updated!"),children:"Active"}),e.jsx("span",{children:"Status"})]}),e.jsxs("div",{className:"badge-story-item",children:[e.jsx(s,{dot:!0,variant:"warning",onClick:()=>alert("Notification clicked!")}),e.jsx("span",{children:"Notification"})]})]}),parameters:{docs:{description:{story:"Interactive badges that respond to clicks and keyboard navigation. Try clicking or using Tab + Enter."}}}},y={render:()=>e.jsxs("div",{className:"badge-story-sections",children:[e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"System Status"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(s,{variant:"success",style:"soft",children:"Online"}),e.jsx(s,{variant:"error",style:"soft",children:"Offline"}),e.jsx(s,{variant:"warning",style:"soft",children:"Maintenance"}),e.jsx(s,{variant:"info",style:"soft",children:"Updating"})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"User Status"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(s,{dot:!0,variant:"success"}),e.jsx("span",{className:"badge-story-status-text",children:"Available"}),e.jsx(s,{dot:!0,variant:"warning"}),e.jsx("span",{className:"badge-story-status-text",children:"Away"}),e.jsx(s,{dot:!0,variant:"error"}),e.jsx("span",{className:"badge-story-status-text",children:"Busy"}),e.jsx(s,{dot:!0,variant:"neutral"}),e.jsx("span",{className:"badge-story-status-text",children:"Offline"})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Priority Levels"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(s,{variant:"error",children:"High"}),e.jsx(s,{variant:"warning",children:"Medium"}),e.jsx(s,{variant:"info",children:"Low"}),e.jsx(s,{variant:"neutral",children:"None"})]})]})]})},b={render:()=>e.jsxs("div",{className:"badge-story-accessibility",children:[e.jsx("h3",{children:"Screen Reader Labels"}),e.jsx("p",{children:"These badges have descriptive ARIA labels for screen readers:"}),e.jsxs("div",{className:"badge-story-grid",children:[e.jsx(s,{"aria-label":"5 unread messages",children:"5"}),e.jsx(s,{dot:!0,variant:"error","aria-label":"You have new notifications"}),e.jsx(s,{variant:"success","aria-label":"Account status: verified",children:"Verified"}),e.jsx(s,{variant:"warning","aria-label":"Action required",children:"!"})]}),e.jsx("h3",{children:"Keyboard Navigation"}),e.jsx("p",{children:"Try using Tab, Enter, and Space keys on these interactive badges:"}),e.jsxs("div",{className:"badge-story-grid",children:[e.jsx(s,{onClick:()=>alert("Badge 1 activated"),"aria-label":"First interactive badge",children:"Tab Me"}),e.jsx(s,{onClick:()=>alert("Badge 2 activated"),variant:"success","aria-label":"Second interactive badge",children:"Focus Me"}),e.jsx(s,{onClick:()=>alert("Badge 3 activated"),variant:"error",dot:!0,"aria-label":"Third interactive badge - notification indicator"})]}),e.jsx("h3",{children:"Smart Number Announcements"}),e.jsx("p",{children:"Number badges automatically generate appropriate screen reader text:"}),e.jsxs("div",{className:"badge-story-grid",children:[e.jsx(s,{children:"1"}),e.jsx(s,{children:"5"}),e.jsx(s,{max:99,children:"150"}),e.jsx(s,{max:9,children:"25"})]})]}),parameters:{docs:{description:{story:"Demonstration of accessibility features including ARIA labels, keyboard navigation, and screen reader support."}}}},j={render:()=>e.jsxs("div",{className:"badge-story-themes",children:[e.jsxs("div",{className:"badge-story-theme","data-theme":"light",children:[e.jsx("h4",{children:"Light Theme"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(s,{variant:"primary",children:"Primary"}),e.jsx(s,{variant:"success",style:"soft",children:"Success"}),e.jsx(s,{variant:"warning",style:"outlined",children:"Warning"}),e.jsx(s,{variant:"error",dot:!0})]})]}),e.jsxs("div",{className:"badge-story-theme","data-theme":"dark",children:[e.jsx("h4",{children:"Dark Theme"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(s,{variant:"primary",children:"Primary"}),e.jsx(s,{variant:"success",style:"soft",children:"Success"}),e.jsx(s,{variant:"warning",style:"outlined",children:"Warning"}),e.jsx(s,{variant:"error",dot:!0})]})]}),e.jsxs("div",{className:"badge-story-theme","data-theme":"custom",children:[e.jsx("h4",{children:"Custom Theme (High Contrast)"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(s,{variant:"primary",children:"Primary"}),e.jsx(s,{variant:"success",style:"soft",children:"Success"}),e.jsx(s,{variant:"warning",style:"outlined",children:"Warning"}),e.jsx(s,{variant:"error",dot:!0})]})]})]}),parameters:{docs:{description:{story:"Badge appearance across different themes with automatic color adaptation."}}}},N={render:()=>e.jsxs("div",{className:"badge-story-sections",children:[e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Custom Background Colors"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(s,{backgroundColor:"#FF6B6B",textColor:"white",children:"Coral"}),e.jsx(s,{backgroundColor:"#4ECDC4",textColor:"white",children:"Turquoise"}),e.jsx(s,{backgroundColor:"#45B7D1",textColor:"white",children:"Sky Blue"}),e.jsx(s,{backgroundColor:"#96CEB4",textColor:"white",children:"Mint"}),e.jsx(s,{backgroundColor:"#FFEAA7",textColor:"#2D3436",children:"Sunny"})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Custom Borders"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(s,{backgroundColor:"transparent",textColor:"#E74C3C",borderColor:"#E74C3C",children:"Red Border"}),e.jsx(s,{backgroundColor:"transparent",textColor:"#8E44AD",borderColor:"#8E44AD",children:"Purple Border"}),e.jsx(s,{backgroundColor:"transparent",textColor:"#27AE60",borderColor:"#27AE60",children:"Green Border"})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Gradient-like Effects"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(s,{backgroundColor:"linear-gradient(45deg, #667eea 0%, #764ba2 100%)",textColor:"white",children:"Gradient 1"}),e.jsx(s,{backgroundColor:"linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",textColor:"white",children:"Gradient 2"}),e.jsx(s,{backgroundColor:"linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)",textColor:"white",children:"Gradient 3"})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Brand Colors"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(s,{backgroundColor:"#1DA1F2",textColor:"white",children:"Twitter"}),e.jsx(s,{backgroundColor:"#4267B2",textColor:"white",children:"Facebook"}),e.jsx(s,{backgroundColor:"#FF0000",textColor:"white",children:"YouTube"}),e.jsx(s,{backgroundColor:"#25D366",textColor:"white",children:"WhatsApp"}),e.jsx(s,{backgroundColor:"#E4405F",textColor:"white",children:"Instagram"})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Interactive Custom Colors"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(s,{backgroundColor:"#FF6B6B",textColor:"white",onClick:()=>alert("Custom red badge clicked!"),children:"Click Me"}),e.jsx(s,{backgroundColor:"transparent",textColor:"#8E44AD",borderColor:"#8E44AD",onClick:()=>alert("Custom purple badge clicked!"),children:"Purple Click"}),e.jsx(s,{dot:!0,backgroundColor:"#27AE60",onClick:()=>alert("Custom green dot clicked!")})]})]})]}),parameters:{docs:{description:{story:"Custom colors override the variant system, allowing for complete design freedom. You can specify backgroundColor, textColor, and borderColor independently."}}}},f={render:()=>e.jsxs("div",{className:"badge-story-comprehensive",children:[e.jsx("h3",{children:"Comprehensive Badge Showcase"}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Sizes and Shapes"}),e.jsx("div",{className:"badge-story-row",children:["xs","sm","md","lg"].map(n=>e.jsx(s,{size:n,variant:"primary",shape:"pill",children:n.toUpperCase()},n))})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Interactive Elements"}),e.jsxs("div",{className:"badge-story-row",children:[e.jsx(s,{variant:"primary",onClick:()=>alert("Action badge clicked"),children:"Action"}),e.jsx(s,{variant:"error",pulse:!0,onClick:()=>alert("Urgent notification!"),children:"Urgent"}),e.jsx(s,{dot:!0,variant:"success",pulse:!0,onClick:()=>alert("Status indicator clicked")})]})]}),e.jsxs("div",{className:"badge-story-section",children:[e.jsx("h4",{children:"Real-world Examples"}),e.jsxs("div",{className:"badge-story-examples",children:[e.jsxs("div",{className:"badge-story-example",children:[e.jsx("span",{children:"Shopping Cart"}),e.jsx(s,{variant:"error",shape:"pill",children:"3"})]}),e.jsxs("div",{className:"badge-story-example",children:[e.jsx("span",{children:"Inbox"}),e.jsx(s,{variant:"primary",max:99,children:"127"})]}),e.jsxs("div",{className:"badge-story-example",children:[e.jsx("span",{children:"Live Stream"}),e.jsx(s,{variant:"error",pulse:!0,children:"LIVE"})]}),e.jsxs("div",{className:"badge-story-example",children:[e.jsx("span",{children:"Beta Feature"}),e.jsx(s,{variant:"warning",style:"soft",size:"sm",children:"BETA"})]})]})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'New'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-grid">\r
      <div className="badge-story-item">\r
        <Badge variant="primary" style="filled">Primary</Badge>\r
        <span>Primary</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="secondary" style="filled">Secondary</Badge>\r
        <span>Secondary</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="success" style="filled">Success</Badge>\r
        <span>Success</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="warning" style="filled">Warning</Badge>\r
        <span>Warning</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="error" style="filled">Error</Badge>\r
        <span>Error</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="info" style="filled">Info</Badge>\r
        <span>Info</span>\r
      </div>\r
      <div className="badge-story-item">\r
        <Badge variant="neutral" style="filled">Neutral</Badge>\r
        <span>Neutral</span>\r
      </div>\r
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-sections">\r
      {(['primary', 'success', 'warning', 'error'] as const).map(variant => <div key={variant} className="badge-story-section">\r
          <h4>{variant.charAt(0).toUpperCase() + variant.slice(1)}</h4>\r
          <div className="badge-story-row">\r
            <div className="badge-story-item">\r
              <Badge variant={variant} style="filled">Filled</Badge>\r
              <span>Filled</span>\r
            </div>\r
            <div className="badge-story-item">\r
              <Badge variant={variant} style="outlined">Outlined</Badge>\r
              <span>Outlined</span>\r
            </div>\r
            <div className="badge-story-item">\r
              <Badge variant={variant} style="soft">Soft</Badge>\r
              <span>Soft</span>\r
            </div>\r
            <div className="badge-story-item">\r
              <Badge variant={variant} style="ghost">Ghost</Badge>\r
              <span>Ghost</span>\r
            </div>\r
          </div>\r
        </div>)}\r
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
        <Badge variant="success" style="soft" onClick={() => alert('Status updated!')}>\r
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-sections">\r
      <div className="badge-story-section">\r
        <h4>System Status</h4>\r
        <div className="badge-story-row">\r
          <Badge variant="success" style="soft">Online</Badge>\r
          <Badge variant="error" style="soft">Offline</Badge>\r
          <Badge variant="warning" style="soft">Maintenance</Badge>\r
          <Badge variant="info" style="soft">Updating</Badge>\r
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="badge-story-themes">\r
      <div className="badge-story-theme" data-theme="light">\r
        <h4>Light Theme</h4>\r
        <div className="badge-story-row">\r
          <Badge variant="primary">Primary</Badge>\r
          <Badge variant="success" style="soft">Success</Badge>\r
          <Badge variant="warning" style="outlined">Warning</Badge>\r
          <Badge variant="error" dot />\r
        </div>\r
      </div>\r
      \r
      <div className="badge-story-theme" data-theme="dark">\r
        <h4>Dark Theme</h4>\r
        <div className="badge-story-row">\r
          <Badge variant="primary">Primary</Badge>\r
          <Badge variant="success" style="soft">Success</Badge>\r
          <Badge variant="warning" style="outlined">Warning</Badge>\r
          <Badge variant="error" dot />\r
        </div>\r
      </div>\r
      \r
      <div className="badge-story-theme" data-theme="custom">\r
        <h4>Custom Theme (High Contrast)</h4>\r
        <div className="badge-story-row">\r
          <Badge variant="primary">Primary</Badge>\r
          <Badge variant="success" style="soft">Success</Badge>\r
          <Badge variant="warning" style="outlined">Warning</Badge>\r
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
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
            <Badge variant="warning" style="soft" size="sm">BETA</Badge>\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...f.parameters?.docs?.source}}};const ke=["Default","SizeVariants","ColorVariants","StyleVariants","ShapeVariants","NumberBadges","DotBadges","OverlayBadges","PulseAnimation","InteractiveBadges","StatusIndicators","AccessibilityDemo","ThemeShowcase","CustomColors","AllFeaturesCombined"],Fe=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDemo:b,AllFeaturesCombined:f,ColorVariants:c,CustomColors:N,Default:d,DotBadges:u,InteractiveBadges:x,NumberBadges:h,OverlayBadges:v,PulseAnimation:g,ShapeVariants:p,SizeVariants:l,StatusIndicators:y,StyleVariants:m,ThemeShowcase:j,__namedExportsOrder:ke,default:Be},Symbol.toStringTag,{value:"Module"})),Pe={title:"Atoms/ProgressBar",component:o,parameters:{layout:"centered",docs:{description:{component:"A comprehensive progress indicator component with 5 distinct variants (linear, circular, stepped, gradient, striped), multiple sizes, colors, and advanced features like animations and accessibility support."}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value (0-100)"},max:{control:"number",description:"Maximum value (defaults to 100)"},variant:{control:"select",options:["linear","circular","stepped","gradient","striped"],description:"Progress bar variant"},size:{control:"select",options:["xs","sm","md","lg","xl","xxl","xxxl"],description:"Size of the progress bar"},color:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"],description:"Color variant of the progress bar"},customColor:{control:"color",description:"Custom color (overrides color variant)"},showProgress:{control:"boolean",description:"Show progress text/percentage"},progressText:{control:"text",description:"Custom progress text"},textPosition:{control:"select",options:["inside","outside","overlay"],description:"Progress text position"},animated:{control:"boolean",description:"Animated progress"},animationSpeed:{control:"select",options:["slow","normal","fast"],description:"Animation speed"},label:{control:"text",description:"Progress label"},hideLabel:{control:"boolean",description:"Hide label visually but keep for screen readers"},indeterminate:{control:"boolean",description:"Indeterminate progress (loading state)"},steps:{control:{type:"range",min:2,max:10,step:1},description:"Number of steps for stepped variant",if:{arg:"variant",eq:"stepped"}},showStepNumbers:{control:"boolean",description:"Show step numbers",if:{arg:"variant",eq:"stepped"}},width:{control:"text",description:'Width of the progress bar (e.g., "100%", "300px", 400)'}}},w={args:{value:65,variant:"linear",size:"md",color:"primary"}},S={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Linear"}),e.jsx(o,{value:75,variant:"linear",label:"Linear Progress"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Circular"}),e.jsx(o,{value:60,variant:"circular",showProgress:!0})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Stepped"}),e.jsx(o,{value:50,variant:"stepped",steps:5,showStepNumbers:!0})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Gradient"}),e.jsx(o,{value:80,variant:"gradient",color:"success"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Striped"}),e.jsx(o,{value:45,variant:"striped",color:"warning",animated:!0})]})]}),parameters:{docs:{description:{story:"All 5 progress bar variants: linear, circular, stepped, gradient, and striped."}}}},C={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:25,size:"xs",label:"XS Size",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:40,size:"sm",label:"SM Size",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:60,size:"md",label:"MD Size",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:75,size:"lg",label:"LG Size",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:90,size:"xl",label:"XL Size",showProgress:!0})})]}),parameters:{docs:{description:{story:"Available size variants from extra small to extra large."}}}},B={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:70,color:"primary",label:"Primary",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:65,color:"secondary",label:"Secondary",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:85,color:"success",label:"Success",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:45,color:"warning",label:"Warning",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:30,color:"error",label:"Error",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:55,color:"info",label:"Info",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:40,color:"neutral",label:"Neutral",showProgress:!0})})]}),parameters:{docs:{description:{story:"Available color variants for different semantic contexts."}}}},k={render:()=>e.jsxs("div",{className:"story-demo-row",children:[e.jsxs("div",{className:"story-demo-item",children:[e.jsx(o,{value:25,variant:"circular",size:"sm",showProgress:!0}),e.jsx("p",{className:"story-demo-label",children:"25%"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(o,{value:50,variant:"circular",size:"md",showProgress:!0,color:"success"}),e.jsx("p",{className:"story-demo-label",children:"50%"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(o,{value:75,variant:"circular",size:"lg",showProgress:!0,color:"warning"}),e.jsx("p",{className:"story-demo-label",children:"75%"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(o,{value:100,variant:"circular",size:"xl",showProgress:!0,color:"success"}),e.jsx("p",{className:"story-demo-label",children:"Complete"})]})]}),parameters:{docs:{description:{story:"Circular progress indicators in different sizes and completion states."}}}},P={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"With Numbers"}),e.jsx(o,{value:60,variant:"stepped",steps:5,showStepNumbers:!0,label:"Account Setup"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Without Numbers"}),e.jsx(o,{value:75,variant:"stepped",steps:4,color:"success",label:"Order Processing"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"More Steps"}),e.jsx(o,{value:30,variant:"stepped",steps:8,size:"sm",color:"info",label:"Project Progress"})]})]}),parameters:{docs:{description:{story:"Stepped progress bars for multi-step processes with different configurations."}}}},z={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Outside Text"}),e.jsx(o,{value:65,label:"File Upload",showProgress:!0,textPosition:"outside"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Inside Text"}),e.jsx(o,{value:75,size:"lg",label:"Processing",showProgress:!0,textPosition:"inside",color:"success"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Overlay Text"}),e.jsx(o,{value:45,size:"lg",label:"Loading Data",showProgress:!0,textPosition:"overlay",color:"info"})]})]}),parameters:{docs:{description:{story:"Different text positioning options: outside, inside, and overlay."}}}},T={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Linear Animated"}),e.jsx(o,{value:70,animated:!0,label:"Downloading...",showProgress:!0})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Striped Animated"}),e.jsx(o,{value:55,variant:"striped",animated:!0,color:"warning",label:"Processing Files...",showProgress:!0})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Gradient Animated"}),e.jsx(o,{value:80,variant:"gradient",animated:!0,color:"success",label:"Upload Complete",showProgress:!0})]})]}),parameters:{docs:{description:{story:"Animated progress bars with shine effects and moving stripes."}}}},A={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Linear Indeterminate"}),e.jsx(o,{value:0,indeterminate:!0,label:"Loading..."})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Circular Indeterminate"}),e.jsxs("div",{className:"story-demo-row",children:[e.jsx(o,{value:0,variant:"circular",size:"md",indeterminate:!0,color:"primary"}),e.jsx(o,{value:0,variant:"circular",size:"lg",indeterminate:!0,color:"success"})]})]})]}),parameters:{docs:{description:{story:"Indeterminate progress indicators for unknown duration tasks."}}}},D={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:70,customColor:"#ff6b6b",label:"Custom Red",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:65,customColor:"#4ecdc4",label:"Custom Teal",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:85,customColor:"#45b7d1",label:"Custom Blue",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:50,customColor:"#f9ca24",label:"Custom Yellow",showProgress:!0})}),e.jsx("div",{className:"story-demo-item--spaced",children:e.jsx(o,{value:75,customColor:"#6c5ce7",label:"Custom Purple",showProgress:!0})})]}),parameters:{docs:{description:{story:"Custom colors override the color variant prop for brand-specific styling."}}}},L={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"File Upload"}),e.jsx(o,{value:73,label:"Uploading document.pdf (2.4 MB)",progressText:"73% - 1.2 MB remaining",showProgress:!0,animated:!0,color:"info"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Installation Progress"}),e.jsx(o,{value:40,variant:"stepped",steps:5,showStepNumbers:!0,label:"Software Installation",color:"primary"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Battery Level"}),e.jsx(o,{value:25,size:"sm",label:"Battery",showProgress:!0,color:"warning",customColor:"#ff9500"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Skill Level"}),e.jsxs("div",{className:"story-demo-row",children:[e.jsx(o,{value:90,variant:"circular",size:"md",showProgress:!0,color:"success",label:"JavaScript"}),e.jsx(o,{value:75,variant:"circular",size:"md",showProgress:!0,color:"info",label:"React"}),e.jsx(o,{value:60,variant:"circular",size:"md",showProgress:!0,color:"warning",label:"TypeScript"})]})]})]}),parameters:{docs:{description:{story:"Real-world usage examples: file uploads, installations, battery levels, and skill indicators."}}}},R={render:()=>e.jsxs("div",{className:"story-demo-column--lg",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Screen Reader Friendly"}),e.jsx(o,{value:65,label:"Loading user data","aria-label":"Data loading progress",showProgress:!0}),e.jsx("p",{className:"story-demo-description",children:"Includes ARIA attributes and screen reader announcements"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Custom Max Value"}),e.jsx(o,{value:150,max:200,label:"Download progress",showProgress:!0,progressText:"150 MB / 200 MB",color:"info"}),e.jsx("p",{className:"story-demo-description",children:"Properly handles custom maximum values with correct ARIA attributes"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Reduced Motion"}),e.jsx(o,{value:80,variant:"striped",animated:!0,label:"Respects motion preferences",showProgress:!0,color:"success"}),e.jsx("p",{className:"story-demo-description",children:"Animations are disabled for users with motion sensitivity preferences"})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA attributes, screen reader support, and reduced motion preferences."}}}},E={args:{value:65,max:100,variant:"linear",size:"md",color:"primary",showProgress:!0,textPosition:"outside",animated:!1,animationSpeed:"normal",label:"Progress Demo",hideLabel:!1,indeterminate:!1,steps:5,showStepNumbers:!1},parameters:{docs:{description:{story:"Interactive story with all available controls. Use the controls panel to experiment with different props."}}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: 65,
    variant: 'linear',
    size: 'md',
    color: 'primary'
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Linear</h4>\r
        <ProgressBar value={75} variant="linear" label="Linear Progress" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Circular</h4>\r
        <ProgressBar value={60} variant="circular" showProgress />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Stepped</h4>\r
        <ProgressBar value={50} variant="stepped" steps={5} showStepNumbers />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Gradient</h4>\r
        <ProgressBar value={80} variant="gradient" color="success" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Striped</h4>\r
        <ProgressBar value={45} variant="striped" color="warning" animated />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All 5 progress bar variants: linear, circular, stepped, gradient, and striped.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={25} size="xs" label="XS Size" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={40} size="sm" label="SM Size" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={60} size="md" label="MD Size" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={75} size="lg" label="LG Size" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={90} size="xl" label="XL Size" showProgress />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Available size variants from extra small to extra large.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={70} color="primary" label="Primary" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={65} color="secondary" label="Secondary" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={85} color="success" label="Success" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={45} color="warning" label="Warning" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={30} color="error" label="Error" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={55} color="info" label="Info" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={40} color="neutral" label="Neutral" showProgress />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Available color variants for different semantic contexts.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-row">\r
      <div className="story-demo-item">\r
        <ProgressBar value={25} variant="circular" size="sm" showProgress />\r
        <p className="story-demo-label">25%</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <ProgressBar value={50} variant="circular" size="md" showProgress color="success" />\r
        <p className="story-demo-label">50%</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <ProgressBar value={75} variant="circular" size="lg" showProgress color="warning" />\r
        <p className="story-demo-label">75%</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <ProgressBar value={100} variant="circular" size="xl" showProgress color="success" />\r
        <p className="story-demo-label">Complete</p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Circular progress indicators in different sizes and completion states.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">With Numbers</h4>\r
        <ProgressBar value={60} variant="stepped" steps={5} showStepNumbers label="Account Setup" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Without Numbers</h4>\r
        <ProgressBar value={75} variant="stepped" steps={4} color="success" label="Order Processing" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">More Steps</h4>\r
        <ProgressBar value={30} variant="stepped" steps={8} size="sm" color="info" label="Project Progress" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Stepped progress bars for multi-step processes with different configurations.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Outside Text</h4>\r
        <ProgressBar value={65} label="File Upload" showProgress textPosition="outside" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Inside Text</h4>\r
        <ProgressBar value={75} size="lg" label="Processing" showProgress textPosition="inside" color="success" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Overlay Text</h4>\r
        <ProgressBar value={45} size="lg" label="Loading Data" showProgress textPosition="overlay" color="info" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different text positioning options: outside, inside, and overlay.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Linear Animated</h4>\r
        <ProgressBar value={70} animated label="Downloading..." showProgress />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Striped Animated</h4>\r
        <ProgressBar value={55} variant="striped" animated color="warning" label="Processing Files..." showProgress />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Gradient Animated</h4>\r
        <ProgressBar value={80} variant="gradient" animated color="success" label="Upload Complete" showProgress />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Animated progress bars with shine effects and moving stripes.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Linear Indeterminate</h4>\r
        <ProgressBar value={0} indeterminate label="Loading..." />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Circular Indeterminate</h4>\r
        <div className="story-demo-row">\r
          <ProgressBar value={0} variant="circular" size="md" indeterminate color="primary" />\r
          <ProgressBar value={0} variant="circular" size="lg" indeterminate color="success" />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Indeterminate progress indicators for unknown duration tasks.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={70} customColor="#ff6b6b" label="Custom Red" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={65} customColor="#4ecdc4" label="Custom Teal" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={85} customColor="#45b7d1" label="Custom Blue" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={50} customColor="#f9ca24" label="Custom Yellow" showProgress />\r
      </div>\r
      <div className="story-demo-item--spaced">\r
        <ProgressBar value={75} customColor="#6c5ce7" label="Custom Purple" showProgress />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Custom colors override the color variant prop for brand-specific styling.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">File Upload</h4>\r
        <ProgressBar value={73} label="Uploading document.pdf (2.4 MB)" progressText="73% - 1.2 MB remaining" showProgress animated color="info" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Installation Progress</h4>\r
        <ProgressBar value={40} variant="stepped" steps={5} showStepNumbers label="Software Installation" color="primary" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Battery Level</h4>\r
        <ProgressBar value={25} size="sm" label="Battery" showProgress color="warning" customColor="#ff9500" />\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Skill Level</h4>\r
        <div className="story-demo-row">\r
          <ProgressBar value={90} variant="circular" size="md" showProgress color="success" label="JavaScript" />\r
          <ProgressBar value={75} variant="circular" size="md" showProgress color="info" label="React" />\r
          <ProgressBar value={60} variant="circular" size="md" showProgress color="warning" label="TypeScript" />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage examples: file uploads, installations, battery levels, and skill indicators.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column--lg">\r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Screen Reader Friendly</h4>\r
        <ProgressBar value={65} label="Loading user data" aria-label="Data loading progress" showProgress />\r
        <p className="story-demo-description">\r
          Includes ARIA attributes and screen reader announcements\r
        </p>\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Custom Max Value</h4>\r
        <ProgressBar value={150} max={200} label="Download progress" showProgress progressText="150 MB / 200 MB" color="info" />\r
        <p className="story-demo-description">\r
          Properly handles custom maximum values with correct ARIA attributes\r
        </p>\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Reduced Motion</h4>\r
        <ProgressBar value={80} variant="striped" animated label="Respects motion preferences" showProgress color="success" />\r
        <p className="story-demo-description">\r
          Animations are disabled for users with motion sensitivity preferences\r
        </p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including ARIA attributes, screen reader support, and reduced motion preferences.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    value: 65,
    max: 100,
    variant: 'linear',
    size: 'md',
    color: 'primary',
    showProgress: true,
    textPosition: 'outside',
    animated: false,
    animationSpeed: 'normal',
    label: 'Progress Demo',
    hideLabel: false,
    indeterminate: false,
    steps: 5,
    showStepNumbers: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive story with all available controls. Use the controls panel to experiment with different props.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}};const ze=["Default","Variants","SizeVariants","ColorVariants","CircularProgress","SteppedProgress","TextPositioning","AnimatedProgress","IndeterminateProgress","CustomColors","RealWorldExamples","AccessibilityDemo","Interactive"],_e=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDemo:R,AnimatedProgress:T,CircularProgress:k,ColorVariants:B,CustomColors:D,Default:w,IndeterminateProgress:A,Interactive:E,RealWorldExamples:L,SizeVariants:C,SteppedProgress:P,TextPositioning:z,Variants:S,__namedExportsOrder:ze,default:Pe},Symbol.toStringTag,{value:"Module"})),Te={title:"Atoms/Skeleton",component:a,parameters:{layout:"padded",docs:{description:{component:"Loading placeholder skeletons with various shapes, animations, and configurations to improve perceived performance."}}},argTypes:{variant:{control:"select",options:["text","circular","rectangular","rounded"],description:"Shape variant"},animation:{control:"select",options:["pulse","wave","none"],description:"Animation type"},width:{control:"text",description:"Width of the skeleton"},height:{control:"text",description:"Height of the skeleton"},lines:{control:{type:"number",min:1,max:10,step:1},description:"Number of lines for text skeleton"},lineSpacing:{control:"select",options:["xs","sm","md","lg"],description:"Space between lines"},borderRadius:{control:"text",description:"Custom border radius"},baseColor:{control:"color",description:"Base color"},highlightColor:{control:"color",description:"Highlight color for animation"},duration:{control:{type:"number",min:.5,max:5,step:.1},description:"Animation duration in seconds"},shimmer:{control:"boolean",description:"Whether to show shimmer effect"},aspectRatio:{control:"select",options:["1:1","16:9","4:3","3:2","21:9"],description:"Aspect ratio for rectangular skeletons"},loading:{control:"boolean",description:"Whether skeleton is loading"}}},I={args:{variant:"text",animation:"pulse",width:200,height:20}},M={render:()=>e.jsxs("div",{className:"skeleton-story-grid",children:[e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{variant:"text",width:200}),e.jsx("span",{children:"Text"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{variant:"circular",width:60,height:60}),e.jsx("span",{children:"Circular"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{variant:"rectangular",width:200,height:120}),e.jsx("span",{children:"Rectangular"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{variant:"rounded",width:200,height:120}),e.jsx("span",{children:"Rounded"})]})]})},W={render:()=>e.jsxs("div",{className:"skeleton-story-grid",children:[e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{animation:"pulse",width:200,height:20}),e.jsx("span",{children:"Pulse"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{animation:"wave",width:200,height:20}),e.jsx("span",{children:"Wave"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{animation:"none",width:200,height:20}),e.jsx("span",{children:"None"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{animation:"pulse",shimmer:!0,width:200,height:20}),e.jsx("span",{children:"Pulse + Shimmer"})]})]})},O={render:()=>e.jsxs("div",{className:"skeleton-story-grid",children:[e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{variant:"text",lines:3,width:300}),e.jsx("span",{children:"3 Lines (Default Spacing)"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{variant:"text",lines:4,lineSpacing:"lg",width:300}),e.jsx("span",{children:"4 Lines (Large Spacing)"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{variant:"text",lines:2,lineSpacing:"xs",width:300}),e.jsx("span",{children:"2 Lines (XS Spacing)"})]})]})},F={render:()=>e.jsxs("div",{className:"skeleton-story-grid",children:[e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{variant:"rounded",aspectRatio:"1:1",width:150}),e.jsx("span",{children:"Square (1:1)"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{variant:"rounded",aspectRatio:"16:9",width:200}),e.jsx("span",{children:"Widescreen (16:9)"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{variant:"rounded",aspectRatio:"4:3",width:200}),e.jsx("span",{children:"Standard (4:3)"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{variant:"rounded",aspectRatio:"21:9",width:250}),e.jsx("span",{children:"Cinema (21:9)"})]})]})},_={render:()=>e.jsxs("div",{className:"skeleton-story-grid",children:[e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{width:200,height:20,baseColor:"#e1e7ef",highlightColor:"#f7fafc"}),e.jsx("span",{children:"Light Blue"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{width:200,height:20,baseColor:"#fed7d7",highlightColor:"#fef5e7"}),e.jsx("span",{children:"Pink/Yellow"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{width:200,height:20,baseColor:"#c6f6d5",highlightColor:"#f0fff4"}),e.jsx("span",{children:"Green"})]}),e.jsxs("div",{className:"skeleton-story-item",children:[e.jsx(a,{width:200,height:20,baseColor:"#2d3748",highlightColor:"#4a5568"}),e.jsx("span",{children:"Dark Theme"})]})]})},V={render:()=>e.jsxs("div",{className:"skeleton-story-loading-demo",children:[e.jsxs("div",{className:"skeleton-story-loading-item",children:[e.jsx("h4",{children:"Loading (Skeleton Visible)"}),e.jsx(a,{loading:!0,width:300,height:20,children:e.jsx("div",{children:"This content is hidden while loading"})})]}),e.jsxs("div",{className:"skeleton-story-loading-item",children:[e.jsx("h4",{children:"Loaded (Content Visible)"}),e.jsx(a,{loading:!1,width:300,height:20,children:e.jsx("div",{className:"skeleton-story-loaded-content",children:"This content is now visible after loading completes"})})]})]})},G={render:()=>e.jsxs("div",{className:"skeleton-story-examples",children:[e.jsxs("div",{className:"skeleton-story-example",children:[e.jsx("h4",{children:"User Profile Card"}),e.jsxs("div",{className:"skeleton-story-profile-card",children:[e.jsx(a,{variant:"circular",width:60,height:60}),e.jsxs("div",{className:"skeleton-story-profile-info",children:[e.jsx(a,{variant:"text",width:120,height:16}),e.jsx(a,{variant:"text",width:80,height:14}),e.jsx(a,{variant:"text",width:150,height:12})]})]})]}),e.jsxs("div",{className:"skeleton-story-example",children:[e.jsx("h4",{children:"Article Card"}),e.jsxs("div",{className:"skeleton-story-article-card",children:[e.jsx(a,{variant:"rounded",aspectRatio:"16:9",width:"100%"}),e.jsxs("div",{className:"skeleton-story-article-content",children:[e.jsx(a,{variant:"text",lines:1,width:"100%",height:20}),e.jsx(a,{variant:"text",lines:3,width:"100%"}),e.jsxs("div",{className:"skeleton-story-article-meta",children:[e.jsx(a,{variant:"circular",width:24,height:24}),e.jsx(a,{variant:"text",width:100,height:12})]})]})]})]}),e.jsxs("div",{className:"skeleton-story-example",children:[e.jsx("h4",{children:"Comment Thread"}),e.jsxs("div",{className:"skeleton-story-comments",children:[e.jsxs("div",{className:"skeleton-story-comment",children:[e.jsx(a,{variant:"circular",width:32,height:32}),e.jsxs("div",{className:"skeleton-story-comment-content",children:[e.jsx(a,{variant:"text",width:80,height:12}),e.jsx(a,{variant:"text",lines:2,width:"100%"})]})]}),e.jsxs("div",{className:"skeleton-story-comment",children:[e.jsx(a,{variant:"circular",width:32,height:32}),e.jsxs("div",{className:"skeleton-story-comment-content",children:[e.jsx(a,{variant:"text",width:120,height:12}),e.jsx(a,{variant:"text",lines:1,width:"90%"})]})]}),e.jsxs("div",{className:"skeleton-story-comment",children:[e.jsx(a,{variant:"circular",width:32,height:32}),e.jsxs("div",{className:"skeleton-story-comment-content",children:[e.jsx(a,{variant:"text",width:100,height:12}),e.jsx(a,{variant:"text",lines:3,width:"100%"})]})]})]})]}),e.jsxs("div",{className:"skeleton-story-example",children:[e.jsx("h4",{children:"Data Table"}),e.jsxs("div",{className:"skeleton-story-table",children:[e.jsxs("div",{className:"skeleton-story-table-header",children:[e.jsx(a,{variant:"text",width:80,height:14}),e.jsx(a,{variant:"text",width:100,height:14}),e.jsx(a,{variant:"text",width:60,height:14}),e.jsx(a,{variant:"text",width:90,height:14})]}),Array.from({length:5},(n,Ce)=>e.jsxs("div",{className:"skeleton-story-table-row",children:[e.jsx(a,{variant:"text",width:70,height:12}),e.jsx(a,{variant:"text",width:90,height:12}),e.jsx(a,{variant:"text",width:50,height:12}),e.jsx(a,{variant:"text",width:80,height:12})]},Ce))]})]})]})},$={render:()=>e.jsxs("div",{className:"skeleton-story-performance",children:[e.jsxs("div",{className:"skeleton-story-performance-section",children:[e.jsx("h4",{children:"Fast Animation (0.8s)"}),e.jsx(a,{width:300,height:20,duration:.8})]}),e.jsxs("div",{className:"skeleton-story-performance-section",children:[e.jsx("h4",{children:"Normal Animation (1.5s)"}),e.jsx(a,{width:300,height:20,duration:1.5})]}),e.jsxs("div",{className:"skeleton-story-performance-section",children:[e.jsx("h4",{children:"Slow Animation (3s)"}),e.jsx(a,{width:300,height:20,duration:3})]}),e.jsxs("div",{className:"skeleton-story-performance-section",children:[e.jsx("h4",{children:"No Animation (Better Performance)"}),e.jsx(a,{width:300,height:20,animation:"none"})]})]})};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    animation: 'pulse',
    width: 200,
    height: 20
  }
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-grid">\r
      <div className="skeleton-story-item">\r
        <Skeleton variant="text" width={200} />\r
        <span>Text</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="circular" width={60} height={60} />\r
        <span>Circular</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="rectangular" width={200} height={120} />\r
        <span>Rectangular</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="rounded" width={200} height={120} />\r
        <span>Rounded</span>\r
      </div>\r
    </div>
}`,...M.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-grid">\r
      <div className="skeleton-story-item">\r
        <Skeleton animation="pulse" width={200} height={20} />\r
        <span>Pulse</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton animation="wave" width={200} height={20} />\r
        <span>Wave</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton animation="none" width={200} height={20} />\r
        <span>None</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton animation="pulse" shimmer width={200} height={20} />\r
        <span>Pulse + Shimmer</span>\r
      </div>\r
    </div>
}`,...W.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-grid">\r
      <div className="skeleton-story-item">\r
        <Skeleton variant="text" lines={3} width={300} />\r
        <span>3 Lines (Default Spacing)</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="text" lines={4} lineSpacing="lg" width={300} />\r
        <span>4 Lines (Large Spacing)</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="text" lines={2} lineSpacing="xs" width={300} />\r
        <span>2 Lines (XS Spacing)</span>\r
      </div>\r
    </div>
}`,...O.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-grid">\r
      <div className="skeleton-story-item">\r
        <Skeleton variant="rounded" aspectRatio="1:1" width={150} />\r
        <span>Square (1:1)</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="rounded" aspectRatio="16:9" width={200} />\r
        <span>Widescreen (16:9)</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="rounded" aspectRatio="4:3" width={200} />\r
        <span>Standard (4:3)</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton variant="rounded" aspectRatio="21:9" width={250} />\r
        <span>Cinema (21:9)</span>\r
      </div>\r
    </div>
}`,...F.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-grid">\r
      <div className="skeleton-story-item">\r
        <Skeleton width={200} height={20} baseColor="#e1e7ef" highlightColor="#f7fafc" />\r
        <span>Light Blue</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton width={200} height={20} baseColor="#fed7d7" highlightColor="#fef5e7" />\r
        <span>Pink/Yellow</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton width={200} height={20} baseColor="#c6f6d5" highlightColor="#f0fff4" />\r
        <span>Green</span>\r
      </div>\r
      \r
      <div className="skeleton-story-item">\r
        <Skeleton width={200} height={20} baseColor="#2d3748" highlightColor="#4a5568" />\r
        <span>Dark Theme</span>\r
      </div>\r
    </div>
}`,..._.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-loading-demo">\r
      <div className="skeleton-story-loading-item">\r
        <h4>Loading (Skeleton Visible)</h4>\r
        <Skeleton loading={true} width={300} height={20}>\r
          <div>This content is hidden while loading</div>\r
        </Skeleton>\r
      </div>\r
      \r
      <div className="skeleton-story-loading-item">\r
        <h4>Loaded (Content Visible)</h4>\r
        <Skeleton loading={false} width={300} height={20}>\r
          <div className="skeleton-story-loaded-content">\r
            This content is now visible after loading completes\r
          </div>\r
        </Skeleton>\r
      </div>\r
    </div>
}`,...V.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-examples">\r
      <div className="skeleton-story-example">\r
        <h4>User Profile Card</h4>\r
        <div className="skeleton-story-profile-card">\r
          <Skeleton variant="circular" width={60} height={60} />\r
          <div className="skeleton-story-profile-info">\r
            <Skeleton variant="text" width={120} height={16} />\r
            <Skeleton variant="text" width={80} height={14} />\r
            <Skeleton variant="text" width={150} height={12} />\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="skeleton-story-example">\r
        <h4>Article Card</h4>\r
        <div className="skeleton-story-article-card">\r
          <Skeleton variant="rounded" aspectRatio="16:9" width="100%" />\r
          <div className="skeleton-story-article-content">\r
            <Skeleton variant="text" lines={1} width="100%" height={20} />\r
            <Skeleton variant="text" lines={3} width="100%" />\r
            <div className="skeleton-story-article-meta">\r
              <Skeleton variant="circular" width={24} height={24} />\r
              <Skeleton variant="text" width={100} height={12} />\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="skeleton-story-example">\r
        <h4>Comment Thread</h4>\r
        <div className="skeleton-story-comments">\r
          <div className="skeleton-story-comment">\r
            <Skeleton variant="circular" width={32} height={32} />\r
            <div className="skeleton-story-comment-content">\r
              <Skeleton variant="text" width={80} height={12} />\r
              <Skeleton variant="text" lines={2} width="100%" />\r
            </div>\r
          </div>\r
          \r
          <div className="skeleton-story-comment">\r
            <Skeleton variant="circular" width={32} height={32} />\r
            <div className="skeleton-story-comment-content">\r
              <Skeleton variant="text" width={120} height={12} />\r
              <Skeleton variant="text" lines={1} width="90%" />\r
            </div>\r
          </div>\r
          \r
          <div className="skeleton-story-comment">\r
            <Skeleton variant="circular" width={32} height={32} />\r
            <div className="skeleton-story-comment-content">\r
              <Skeleton variant="text" width={100} height={12} />\r
              <Skeleton variant="text" lines={3} width="100%" />\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="skeleton-story-example">\r
        <h4>Data Table</h4>\r
        <div className="skeleton-story-table">\r
          <div className="skeleton-story-table-header">\r
            <Skeleton variant="text" width={80} height={14} />\r
            <Skeleton variant="text" width={100} height={14} />\r
            <Skeleton variant="text" width={60} height={14} />\r
            <Skeleton variant="text" width={90} height={14} />\r
          </div>\r
          \r
          {Array.from({
          length: 5
        }, (_, index) => <div key={index} className="skeleton-story-table-row">\r
              <Skeleton variant="text" width={70} height={12} />\r
              <Skeleton variant="text" width={90} height={12} />\r
              <Skeleton variant="text" width={50} height={12} />\r
              <Skeleton variant="text" width={80} height={12} />\r
            </div>)}\r
        </div>\r
      </div>\r
    </div>
}`,...G.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <div className="skeleton-story-performance">\r
      <div className="skeleton-story-performance-section">\r
        <h4>Fast Animation (0.8s)</h4>\r
        <Skeleton width={300} height={20} duration={0.8} />\r
      </div>\r
      \r
      <div className="skeleton-story-performance-section">\r
        <h4>Normal Animation (1.5s)</h4>\r
        <Skeleton width={300} height={20} duration={1.5} />\r
      </div>\r
      \r
      <div className="skeleton-story-performance-section">\r
        <h4>Slow Animation (3s)</h4>\r
        <Skeleton width={300} height={20} duration={3} />\r
      </div>\r
      \r
      <div className="skeleton-story-performance-section">\r
        <h4>No Animation (Better Performance)</h4>\r
        <Skeleton width={300} height={20} animation="none" />\r
      </div>\r
    </div>
}`,...$.parameters?.docs?.source}}};const Ae=["Default","ShapeVariants","AnimationTypes","MultipleLines","AspectRatios","CustomColors","LoadingStates","RealWorldExamples","PerformanceComparison"],Ve=Object.freeze(Object.defineProperty({__proto__:null,AnimationTypes:W,AspectRatios:F,CustomColors:_,Default:I,LoadingStates:V,MultipleLines:O,PerformanceComparison:$,RealWorldExamples:G,ShapeVariants:M,__namedExportsOrder:Ae,default:Te},Symbol.toStringTag,{value:"Module"})),De={title:"Atoms/Spinner",component:r,parameters:{layout:"centered",docs:{description:{component:"A versatile loading spinner component with 14 unique animation types including creative animations like radar sweep, moving car, rotating gear, heartbeat, and more. Supports accessibility features, custom colors, and multiple sizes."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size of the spinner"},variant:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"],description:"Color variant of the spinner"},type:{control:"select",options:["spin","pulse","bounce","dots","bars","ring","radar","car","gear","wave","heartbeat","orbit","flip","spiral"],description:"Animation type of the spinner"},speed:{control:"select",options:["slow","normal","fast"],description:"Animation speed"},label:{control:"text",description:"Accessible label for the spinner"},hideLabel:{control:"boolean",description:"Whether to hide the label text (keeps it for screen readers)"},center:{control:"boolean",description:"Whether to center the spinner horizontally"},color:{control:"color",description:"Custom color for the spinner (overrides variant)"}}},X={args:{size:"md",variant:"primary",type:"spin"}},U={render:()=>e.jsxs("div",{className:"story-demo-row",children:[e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{size:"xs"}),e.jsx("p",{className:"story-demo-label",children:"XS"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{size:"sm"}),e.jsx("p",{className:"story-demo-label",children:"SM"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{size:"md"}),e.jsx("p",{className:"story-demo-label",children:"MD"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{size:"lg"}),e.jsx("p",{className:"story-demo-label",children:"LG"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{size:"xl"}),e.jsx("p",{className:"story-demo-label",children:"XL"})]})]}),parameters:{docs:{description:{story:"Available size variants from extra small to extra large."}}}},H={render:()=>e.jsxs("div",{className:"story-demo-flex-wrap",children:[e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{variant:"primary"}),e.jsx("p",{className:"story-demo-label",children:"Primary"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{variant:"secondary"}),e.jsx("p",{className:"story-demo-label",children:"Secondary"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{variant:"success"}),e.jsx("p",{className:"story-demo-label",children:"Success"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{variant:"warning"}),e.jsx("p",{className:"story-demo-label",children:"Warning"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{variant:"error"}),e.jsx("p",{className:"story-demo-label",children:"Error"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{variant:"info"}),e.jsx("p",{className:"story-demo-label",children:"Info"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{variant:"neutral"}),e.jsx("p",{className:"story-demo-label",children:"Neutral"})]})]}),parameters:{docs:{description:{story:"Available color variants for different semantic contexts."}}}},q={render:()=>e.jsxs("div",{className:"story-demo-grid--4col",children:[e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"spin",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Spin"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"pulse",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Pulse"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"bounce",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Bounce"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"dots",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Dots"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"bars",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Bars"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"ring",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Ring"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"radar",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Radar"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"car",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Car"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"gear",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Gear"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"wave",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Wave"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"heartbeat",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Heartbeat"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"orbit",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Orbit"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"flip",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Flip"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"spiral",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Spiral"})]})]}),parameters:{docs:{description:{story:"All 14 animation types available for the spinner, including creative and fun animations."}}}},J={render:()=>e.jsxs("div",{className:"story-demo-grid--4col",children:[e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"radar",size:"xl",variant:"success"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Radar Sweep"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"car",size:"xl",variant:"warning"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Moving Car"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"gear",size:"xl",variant:"info"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Rotating Gear"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"heartbeat",size:"xl",variant:"error"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Heartbeat"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"orbit",size:"xl",variant:"primary"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Orbital Motion"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"flip",size:"xl",variant:"secondary"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"3D Flip"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"spiral",size:"xl",variant:"neutral"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Spiral Draw"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{type:"wave",size:"xl",color:"#6c5ce7"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Sound Wave"})]})]}),parameters:{docs:{description:{story:"Creative and fun spinner animations perfect for engaging user experiences. These animations add personality and visual interest to loading states."}}}},Y={render:()=>e.jsxs("div",{className:"story-demo-column",children:[e.jsx(r,{label:"Loading...",hideLabel:!1}),e.jsx(r,{label:"Processing your request...",hideLabel:!1,variant:"success"}),e.jsx(r,{label:"Uploading file...",hideLabel:!1,variant:"info",type:"bars"}),e.jsx(r,{label:"Connecting to server...",hideLabel:!1,variant:"warning",type:"dots"})]}),parameters:{docs:{description:{story:"Spinners with visible labels for better user communication."}}}},Z={render:()=>e.jsxs("div",{className:"story-demo-row",children:[e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{speed:"slow",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Slow"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{speed:"normal",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Normal"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{speed:"fast",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Fast"})]})]}),parameters:{docs:{description:{story:"Different animation speeds: slow, normal, and fast."}}}},K={render:()=>e.jsxs("div",{className:"story-demo-flex-wrap",children:[e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{color:"#ff6b6b",size:"lg"}),e.jsx("p",{className:"story-demo-label",children:"Red"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{color:"#4ecdc4",size:"lg"}),e.jsx("p",{className:"story-demo-label",children:"Teal"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{color:"#45b7d1",size:"lg"}),e.jsx("p",{className:"story-demo-label",children:"Blue"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{color:"#f9ca24",size:"lg"}),e.jsx("p",{className:"story-demo-label",children:"Yellow"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{color:"#6c5ce7",size:"lg"}),e.jsx("p",{className:"story-demo-label",children:"Purple"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(r,{color:"linear-gradient(45deg, #667eea 0%, #764ba2 100%)",size:"lg"}),e.jsx("p",{className:"story-demo-label",children:"Gradient"})]})]}),parameters:{docs:{description:{story:"Custom colors override the variant prop and allow for brand-specific styling."}}}},Q={render:()=>e.jsx("div",{className:"story-demo-container",children:e.jsx(r,{center:!0,label:"Centered loading...",hideLabel:!1})}),parameters:{docs:{description:{story:"Centered spinner useful for container loading states."}}}},ee={render:()=>e.jsxs("div",{className:"story-demo-column",children:[e.jsxs("div",{className:"story-demo-button-group",children:[e.jsxs("button",{className:"story-demo-button",disabled:!0,children:[e.jsx(r,{size:"sm"}),"Saving..."]}),e.jsx("span",{className:"story-demo-description",children:"Button with loading state"})]}),e.jsx("div",{className:"story-demo-card",children:e.jsx(r,{size:"lg",label:"Loading content...",hideLabel:!1})}),e.jsxs("div",{className:"story-demo-inline",children:[e.jsx("span",{children:"Fetching data"}),e.jsx(r,{size:"sm"})]})]}),parameters:{docs:{description:{story:"Common loading state patterns using the spinner component."}}}},se={render:()=>e.jsxs("div",{className:"story-demo-column",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Screen Reader Friendly"}),e.jsx(r,{label:"Loading user profile data"}),e.jsx("p",{className:"story-demo-description",children:'Hidden label for screen readers: "Loading user profile data"'})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Visible Label"}),e.jsx(r,{label:"Processing payment...",hideLabel:!1}),e.jsx("p",{className:"story-demo-description",children:"Visible label for all users"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Respects Motion Preferences"}),e.jsx(r,{type:"pulse",size:"lg"}),e.jsx("p",{className:"story-demo-description",children:"Animation reduces for users with motion sensitivity preferences"})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA attributes, screen reader support, and reduced motion preferences."}}}},re={args:{size:"lg",variant:"primary",type:"spin",speed:"normal",label:"Loading...",hideLabel:!1,center:!1},parameters:{docs:{description:{story:"Interactive story with all available controls. Use the controls panel to experiment with different props."}}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'primary',
    type: 'spin'
  }
}`,...X.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-row">\r
      <div className="story-demo-item">\r
        <Spinner size="xs" />\r
        <p className="story-demo-label">XS</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner size="sm" />\r
        <p className="story-demo-label">SM</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner size="md" />\r
        <p className="story-demo-label">MD</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner size="lg" />\r
        <p className="story-demo-label">LG</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner size="xl" />\r
        <p className="story-demo-label">XL</p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Available size variants from extra small to extra large.'
      }
    }
  }
}`,...U.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-flex-wrap">\r
      <div className="story-demo-item">\r
        <Spinner variant="primary" />\r
        <p className="story-demo-label">Primary</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner variant="secondary" />\r
        <p className="story-demo-label">Secondary</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner variant="success" />\r
        <p className="story-demo-label">Success</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner variant="warning" />\r
        <p className="story-demo-label">Warning</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner variant="error" />\r
        <p className="story-demo-label">Error</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner variant="info" />\r
        <p className="story-demo-label">Info</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner variant="neutral" />\r
        <p className="story-demo-label">Neutral</p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Available color variants for different semantic contexts.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-grid--4col">\r
      <div className="story-demo-item">\r
        <Spinner type="spin" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Spin</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="pulse" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Pulse</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="bounce" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Bounce</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="dots" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Dots</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="bars" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Bars</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="ring" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Ring</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="radar" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Radar</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="car" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Car</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="gear" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Gear</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="wave" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Wave</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="heartbeat" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Heartbeat</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="orbit" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Orbit</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="flip" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Flip</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="spiral" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Spiral</p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All 14 animation types available for the spinner, including creative and fun animations.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-grid--4col">\r
      <div className="story-demo-item">\r
        <Spinner type="radar" size="xl" variant="success" />\r
        <p className="story-demo-label story-demo-label--md">Radar Sweep</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="car" size="xl" variant="warning" />\r
        <p className="story-demo-label story-demo-label--md">Moving Car</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="gear" size="xl" variant="info" />\r
        <p className="story-demo-label story-demo-label--md">Rotating Gear</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="heartbeat" size="xl" variant="error" />\r
        <p className="story-demo-label story-demo-label--md">Heartbeat</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="orbit" size="xl" variant="primary" />\r
        <p className="story-demo-label story-demo-label--md">Orbital Motion</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="flip" size="xl" variant="secondary" />\r
        <p className="story-demo-label story-demo-label--md">3D Flip</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="spiral" size="xl" variant="neutral" />\r
        <p className="story-demo-label story-demo-label--md">Spiral Draw</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner type="wave" size="xl" color="#6c5ce7" />\r
        <p className="story-demo-label story-demo-label--md">Sound Wave</p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Creative and fun spinner animations perfect for engaging user experiences. These animations add personality and visual interest to loading states.'
      }
    }
  }
}`,...J.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column">\r
      <Spinner label="Loading..." hideLabel={false} />\r
      <Spinner label="Processing your request..." hideLabel={false} variant="success" />\r
      <Spinner label="Uploading file..." hideLabel={false} variant="info" type="bars" />\r
      <Spinner label="Connecting to server..." hideLabel={false} variant="warning" type="dots" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Spinners with visible labels for better user communication.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-row">\r
      <div className="story-demo-item">\r
        <Spinner speed="slow" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Slow</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner speed="normal" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Normal</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner speed="fast" size="lg" />\r
        <p className="story-demo-label story-demo-label--md">Fast</p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different animation speeds: slow, normal, and fast.'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-flex-wrap">\r
      <div className="story-demo-item">\r
        <Spinner color="#ff6b6b" size="lg" />\r
        <p className="story-demo-label">Red</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner color="#4ecdc4" size="lg" />\r
        <p className="story-demo-label">Teal</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner color="#45b7d1" size="lg" />\r
        <p className="story-demo-label">Blue</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner color="#f9ca24" size="lg" />\r
        <p className="story-demo-label">Yellow</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner color="#6c5ce7" size="lg" />\r
        <p className="story-demo-label">Purple</p>\r
      </div>\r
      <div className="story-demo-item">\r
        <Spinner color="linear-gradient(45deg, #667eea 0%, #764ba2 100%)" size="lg" />\r
        <p className="story-demo-label">Gradient</p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Custom colors override the variant prop and allow for brand-specific styling.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-container">\r
      <Spinner center label="Centered loading..." hideLabel={false} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Centered spinner useful for container loading states.'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column">\r
      {/* Button Loading */}\r
      <div className="story-demo-button-group">\r
        <button className="story-demo-button" disabled>\r
          <Spinner size="sm" />\r
          Saving...\r
        </button>\r
        <span className="story-demo-description">Button with loading state</span>\r
      </div>\r
\r
      {/* Card Loading */}\r
      <div className="story-demo-card">\r
        <Spinner size="lg" label="Loading content..." hideLabel={false} />\r
      </div>\r
\r
      {/* Inline Loading */}\r
      <div className="story-demo-inline">\r
        <span>Fetching data</span>\r
        <Spinner size="sm" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Common loading state patterns using the spinner component.'
      }
    }
  }
}`,...ee.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-demo-column">\r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Screen Reader Friendly</h4>\r
        <Spinner label="Loading user profile data" />\r
        <p className="story-demo-description">\r
          Hidden label for screen readers: "Loading user profile data"\r
        </p>\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Visible Label</h4>\r
        <Spinner label="Processing payment..." hideLabel={false} />\r
        <p className="story-demo-description">\r
          Visible label for all users\r
        </p>\r
      </div>\r
      \r
      <div className="story-demo-section">\r
        <h4 className="story-demo-heading">Respects Motion Preferences</h4>\r
        <Spinner type="pulse" size="lg" />\r
        <p className="story-demo-description">\r
          Animation reduces for users with motion sensitivity preferences\r
        </p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Accessibility features including ARIA attributes, screen reader support, and reduced motion preferences.'
      }
    }
  }
}`,...se.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    variant: 'primary',
    type: 'spin',
    speed: 'normal',
    label: 'Loading...',
    hideLabel: false,
    center: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive story with all available controls. Use the controls panel to experiment with different props.'
      }
    }
  }
}`,...re.parameters?.docs?.source}}};const Le=["Default","SizeVariants","ColorVariants","AnimationTypes","CreativeAnimations","WithLabels","SpeedVariants","CustomColors","Centered","LoadingStatesDemo","AccessibilityDemo","Interactive"],Ge=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDemo:se,AnimationTypes:q,Centered:Q,ColorVariants:H,CreativeAnimations:J,CustomColors:K,Default:X,Interactive:re,LoadingStatesDemo:ee,SizeVariants:U,SpeedVariants:Z,WithLabels:Y,__namedExportsOrder:Le,default:De},Symbol.toStringTag,{value:"Module"})),Re={title:"Atoms/StatusDot",component:i,parameters:{layout:"padded",docs:{description:{component:"A small status indicator dot with various states, colors, and animations for showing user presence or system status."}}},argTypes:{status:{control:"select",options:["online","offline","away","busy","idle","success","warning","error","info","neutral"],description:"Status variant"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size variant"},color:{control:"color",description:"Custom color (overrides status)"},pulse:{control:"boolean",description:"Whether to show pulsing animation"},ring:{control:"boolean",description:"Whether to show a ring animation"},position:{control:"select",options:["top-right","top-left","bottom-right","bottom-left"],description:"Position when used as overlay"},overlay:{control:"boolean",description:"Whether to position as overlay"},border:{control:"boolean",description:"Whether to show a border"},borderColor:{control:"color",description:"Border color"},label:{control:"text",description:"Custom label for accessibility"}}},ae={args:{status:"online",size:"md"}},te={render:()=>e.jsxs("div",{className:"status-story-grid",children:[e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"online"}),e.jsx("span",{children:"Online"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"offline"}),e.jsx("span",{children:"Offline"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"away"}),e.jsx("span",{children:"Away"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"busy"}),e.jsx("span",{children:"Busy"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"idle"}),e.jsx("span",{children:"Idle"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"success"}),e.jsx("span",{children:"Success"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"warning"}),e.jsx("span",{children:"Warning"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"error"}),e.jsx("span",{children:"Error"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"info"}),e.jsx("span",{children:"Info"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"neutral"}),e.jsx("span",{children:"Neutral"})]})]})},oe={render:()=>e.jsxs("div",{className:"status-story-row",children:[e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"online",size:"xs"}),e.jsx("span",{children:"XS"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"online",size:"sm"}),e.jsx("span",{children:"SM"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"online",size:"md"}),e.jsx("span",{children:"MD"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"online",size:"lg"}),e.jsx("span",{children:"LG"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"online",size:"xl"}),e.jsx("span",{children:"XL"})]})]})},ie={render:()=>e.jsxs("div",{className:"status-story-row",children:[e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"online",pulse:!0}),e.jsx("span",{children:"Pulse"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"busy",ring:!0}),e.jsx("span",{children:"Ring"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"away",pulse:!0,ring:!0}),e.jsx("span",{children:"Both"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"online"}),e.jsx("span",{children:"Static"})]})]})},ne={render:()=>e.jsxs("div",{className:"status-story-row",children:[e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"online",border:!0}),e.jsx("span",{children:"Default Border"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"busy",border:!0,borderColor:"#ffffff"}),e.jsx("span",{children:"White Border"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"away",border:!0,borderColor:"#000000"}),e.jsx("span",{children:"Black Border"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"success",border:!0,pulse:!0}),e.jsx("span",{children:"Border + Pulse"})]})]})},de={render:()=>e.jsxs("div",{className:"status-story-row",children:[e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{color:"#8b5cf6"}),e.jsx("span",{children:"Purple"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{color:"#ec4899"}),e.jsx("span",{children:"Pink"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{color:"#06b6d4"}),e.jsx("span",{children:"Cyan"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{color:"#84cc16"}),e.jsx("span",{children:"Lime"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{color:"#f97316",pulse:!0}),e.jsx("span",{children:"Orange + Pulse"})]})]})},le={render:()=>e.jsxs("div",{className:"status-story-overlay-demo",children:[e.jsxs("div",{className:"status-story-avatar-container",children:[e.jsx("div",{className:"status-story-avatar",children:e.jsx(i,{status:"online",overlay:!0,position:"top-right"})}),e.jsx("span",{children:"Top Right"})]}),e.jsxs("div",{className:"status-story-avatar-container",children:[e.jsx("div",{className:"status-story-avatar",children:e.jsx(i,{status:"away",overlay:!0,position:"top-left"})}),e.jsx("span",{children:"Top Left"})]}),e.jsxs("div",{className:"status-story-avatar-container",children:[e.jsx("div",{className:"status-story-avatar",children:e.jsx(i,{status:"busy",overlay:!0,position:"bottom-right"})}),e.jsx("span",{children:"Bottom Right"})]}),e.jsxs("div",{className:"status-story-avatar-container",children:[e.jsx("div",{className:"status-story-avatar",children:e.jsx(i,{status:"offline",overlay:!0,position:"bottom-left"})}),e.jsx("span",{children:"Bottom Left"})]})]})},ce={render:()=>e.jsxs("div",{className:"status-story-row",children:[e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"online",onClick:()=>alert("Status clicked!"),label:"Click to change status"}),e.jsx("span",{children:"Clickable"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{status:"busy",pulse:!0,onClick:()=>alert("Busy status clicked!"),label:"Click to toggle busy"}),e.jsx("span",{children:"Clickable + Pulse"})]}),e.jsxs("div",{className:"status-story-item",children:[e.jsx(i,{color:"#8b5cf6",ring:!0,onClick:()=>alert("Custom status clicked!"),label:"Click for custom action"}),e.jsx("span",{children:"Custom + Ring"})]})]})},me={render:()=>e.jsxs("div",{className:"status-story-examples",children:[e.jsxs("div",{className:"status-story-example",children:[e.jsx("h4",{children:"User List"}),e.jsxs("div",{className:"status-story-user-list",children:[e.jsxs("div",{className:"status-story-user",children:[e.jsx("div",{className:"status-story-user-avatar",children:e.jsx(i,{status:"online",overlay:!0,position:"bottom-right",border:!0})}),e.jsx("span",{children:"John Doe"})]}),e.jsxs("div",{className:"status-story-user",children:[e.jsx("div",{className:"status-story-user-avatar",children:e.jsx(i,{status:"away",overlay:!0,position:"bottom-right",border:!0})}),e.jsx("span",{children:"Jane Smith"})]}),e.jsxs("div",{className:"status-story-user",children:[e.jsx("div",{className:"status-story-user-avatar",children:e.jsx(i,{status:"busy",overlay:!0,position:"bottom-right",border:!0,pulse:!0})}),e.jsx("span",{children:"Mike Johnson"})]}),e.jsxs("div",{className:"status-story-user",children:[e.jsx("div",{className:"status-story-user-avatar",children:e.jsx(i,{status:"offline",overlay:!0,position:"bottom-right",border:!0})}),e.jsx("span",{children:"Sarah Wilson"})]})]})]}),e.jsxs("div",{className:"status-story-example",children:[e.jsx("h4",{children:"System Status"}),e.jsxs("div",{className:"status-story-system-list",children:[e.jsxs("div",{className:"status-story-system-item",children:[e.jsx(i,{status:"success",size:"sm"}),e.jsx("span",{children:"Database Connection"})]}),e.jsxs("div",{className:"status-story-system-item",children:[e.jsx(i,{status:"success",size:"sm"}),e.jsx("span",{children:"API Server"})]}),e.jsxs("div",{className:"status-story-system-item",children:[e.jsx(i,{status:"warning",size:"sm",pulse:!0}),e.jsx("span",{children:"File Storage"})]}),e.jsxs("div",{className:"status-story-system-item",children:[e.jsx(i,{status:"error",size:"sm",ring:!0}),e.jsx("span",{children:"Email Service"})]})]})]})]})};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'online',
    size: 'md'
  }
}`,...ae.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-grid">\r
      <div className="status-story-item">\r
        <StatusDot status="online" />\r
        <span>Online</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="offline" />\r
        <span>Offline</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="away" />\r
        <span>Away</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="busy" />\r
        <span>Busy</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="idle" />\r
        <span>Idle</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="success" />\r
        <span>Success</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="warning" />\r
        <span>Warning</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="error" />\r
        <span>Error</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="info" />\r
        <span>Info</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="neutral" />\r
        <span>Neutral</span>\r
      </div>\r
    </div>
}`,...te.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-row">\r
      <div className="status-story-item">\r
        <StatusDot status="online" size="xs" />\r
        <span>XS</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="online" size="sm" />\r
        <span>SM</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="online" size="md" />\r
        <span>MD</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="online" size="lg" />\r
        <span>LG</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="online" size="xl" />\r
        <span>XL</span>\r
      </div>\r
    </div>
}`,...oe.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-row">\r
      <div className="status-story-item">\r
        <StatusDot status="online" pulse />\r
        <span>Pulse</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="busy" ring />\r
        <span>Ring</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="away" pulse ring />\r
        <span>Both</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="online" />\r
        <span>Static</span>\r
      </div>\r
    </div>
}`,...ie.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-row">\r
      <div className="status-story-item">\r
        <StatusDot status="online" border />\r
        <span>Default Border</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="busy" border borderColor="#ffffff" />\r
        <span>White Border</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="away" border borderColor="#000000" />\r
        <span>Black Border</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="success" border pulse />\r
        <span>Border + Pulse</span>\r
      </div>\r
    </div>
}`,...ne.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-row">\r
      <div className="status-story-item">\r
        <StatusDot color="#8b5cf6" />\r
        <span>Purple</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot color="#ec4899" />\r
        <span>Pink</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot color="#06b6d4" />\r
        <span>Cyan</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot color="#84cc16" />\r
        <span>Lime</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot color="#f97316" pulse />\r
        <span>Orange + Pulse</span>\r
      </div>\r
    </div>
}`,...de.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-overlay-demo">\r
      <div className="status-story-avatar-container">\r
        <div className="status-story-avatar">\r
          <StatusDot status="online" overlay position="top-right" />\r
        </div>\r
        <span>Top Right</span>\r
      </div>\r
      \r
      <div className="status-story-avatar-container">\r
        <div className="status-story-avatar">\r
          <StatusDot status="away" overlay position="top-left" />\r
        </div>\r
        <span>Top Left</span>\r
      </div>\r
      \r
      <div className="status-story-avatar-container">\r
        <div className="status-story-avatar">\r
          <StatusDot status="busy" overlay position="bottom-right" />\r
        </div>\r
        <span>Bottom Right</span>\r
      </div>\r
      \r
      <div className="status-story-avatar-container">\r
        <div className="status-story-avatar">\r
          <StatusDot status="offline" overlay position="bottom-left" />\r
        </div>\r
        <span>Bottom Left</span>\r
      </div>\r
    </div>
}`,...le.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-row">\r
      <div className="status-story-item">\r
        <StatusDot status="online" onClick={() => alert('Status clicked!')} label="Click to change status" />\r
        <span>Clickable</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot status="busy" pulse onClick={() => alert('Busy status clicked!')} label="Click to toggle busy" />\r
        <span>Clickable + Pulse</span>\r
      </div>\r
      \r
      <div className="status-story-item">\r
        <StatusDot color="#8b5cf6" ring onClick={() => alert('Custom status clicked!')} label="Click for custom action" />\r
        <span>Custom + Ring</span>\r
      </div>\r
    </div>
}`,...ce.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  render: () => <div className="status-story-examples">\r
      <div className="status-story-example">\r
        <h4>User List</h4>\r
        <div className="status-story-user-list">\r
          <div className="status-story-user">\r
            <div className="status-story-user-avatar">\r
              <StatusDot status="online" overlay position="bottom-right" border />\r
            </div>\r
            <span>John Doe</span>\r
          </div>\r
          \r
          <div className="status-story-user">\r
            <div className="status-story-user-avatar">\r
              <StatusDot status="away" overlay position="bottom-right" border />\r
            </div>\r
            <span>Jane Smith</span>\r
          </div>\r
          \r
          <div className="status-story-user">\r
            <div className="status-story-user-avatar">\r
              <StatusDot status="busy" overlay position="bottom-right" border pulse />\r
            </div>\r
            <span>Mike Johnson</span>\r
          </div>\r
          \r
          <div className="status-story-user">\r
            <div className="status-story-user-avatar">\r
              <StatusDot status="offline" overlay position="bottom-right" border />\r
            </div>\r
            <span>Sarah Wilson</span>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="status-story-example">\r
        <h4>System Status</h4>\r
        <div className="status-story-system-list">\r
          <div className="status-story-system-item">\r
            <StatusDot status="success" size="sm" />\r
            <span>Database Connection</span>\r
          </div>\r
          \r
          <div className="status-story-system-item">\r
            <StatusDot status="success" size="sm" />\r
            <span>API Server</span>\r
          </div>\r
          \r
          <div className="status-story-system-item">\r
            <StatusDot status="warning" size="sm" pulse />\r
            <span>File Storage</span>\r
          </div>\r
          \r
          <div className="status-story-system-item">\r
            <StatusDot status="error" size="sm" ring />\r
            <span>Email Service</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...me.parameters?.docs?.source}}};const Ee=["Default","StatusVariants","SizeVariants","Animations","WithBorders","CustomColors","OverlayPositioning","Interactive","RealWorldExamples"],$e=Object.freeze(Object.defineProperty({__proto__:null,Animations:ie,CustomColors:de,Default:ae,Interactive:ce,OverlayPositioning:le,RealWorldExamples:me,SizeVariants:oe,StatusVariants:te,WithBorders:ne,__namedExportsOrder:Ee,default:Re},Symbol.toStringTag,{value:"Module"})),Ie={title:"Atoms/Tooltip",component:t,parameters:{layout:"centered",docs:{description:{component:"A versatile tooltip component for displaying contextual information. Features multiple positioning options, trigger modes, color variants, animations, and full accessibility support."}}},tags:["autodocs"],argTypes:{content:{control:"text",description:"Content to display in the tooltip"},position:{control:"select",options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end"],description:"Position of the tooltip relative to trigger"},trigger:{control:"select",options:["hover","click","focus","manual"],description:"Trigger mode for showing tooltip"},size:{control:"select",options:["xs","sm","md","lg","xl","xxl","xxxl"],description:"Size variant of the tooltip"},variant:{control:"select",options:["dark","light","primary","success","warning","error","info"],description:"Color variant of the tooltip"},showDelay:{control:{type:"number",min:0,max:2e3,step:50},description:"Delay before showing tooltip (ms)"},hideDelay:{control:{type:"number",min:0,max:2e3,step:50},description:"Delay before hiding tooltip (ms)"},maxWidth:{control:"text",description:'Maximum width of tooltip (e.g., "200px", "50vw")'},width:{control:"text",description:'Fixed width of tooltip (e.g., "150px", "300px", 250)'},showArrow:{control:"boolean",description:"Show arrow pointer"},noAnimation:{control:"boolean",description:"Disable animations"},disabled:{control:"boolean",description:"Disable tooltip"},customColor:{control:"color",description:"Custom background color"},textColor:{control:"color",description:"Custom text color"},offset:{control:{type:"number",min:0,max:50,step:2},description:"Offset from trigger element (px)"},zIndex:{control:{type:"number",min:1,max:9999,step:1},description:"Z-index for tooltip positioning"}},args:{content:"This is a tooltip",position:"top",trigger:"hover",size:"md",variant:"dark",showArrow:!0,showDelay:200,hideDelay:200,disabled:!1,noAnimation:!1}},pe={render:n=>e.jsx(t,{...n,children:e.jsx("button",{style:{padding:"8px 16px",cursor:"pointer"},children:"Hover me"})})},he={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"2rem",padding:"3rem"},children:[e.jsx(t,{content:"Top tooltip",position:"top",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Top"})}),e.jsx(t,{content:"Bottom tooltip",position:"bottom",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Bottom"})}),e.jsx(t,{content:"Left tooltip",position:"left",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Left"})}),e.jsx(t,{content:"Right tooltip",position:"right",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Right"})}),e.jsx(t,{content:"Top start tooltip",position:"top-start",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Top Start"})}),e.jsx(t,{content:"Top end tooltip",position:"top-end",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Top End"})}),e.jsx(t,{content:"Bottom start tooltip",position:"bottom-start",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Bottom Start"})}),e.jsx(t,{content:"Bottom end tooltip",position:"bottom-end",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Bottom End"})})]})},ue={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[e.jsx(t,{content:"Appears on hover",trigger:"hover",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Hover"})}),e.jsx(t,{content:"Appears on click (click again to hide)",trigger:"click",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Click"})}),e.jsx(t,{content:"Appears on focus",trigger:"focus",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Focus"})})]})},ve={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem",padding:"3rem"},children:[e.jsx(t,{content:"Extra small tooltip",size:"xs",children:e.jsx("button",{style:{padding:"8px 16px"},children:"XS"})}),e.jsx(t,{content:"Small tooltip",size:"sm",children:e.jsx("button",{style:{padding:"8px 16px"},children:"SM"})}),e.jsx(t,{content:"Medium tooltip",size:"md",children:e.jsx("button",{style:{padding:"8px 16px"},children:"MD"})}),e.jsx(t,{content:"Large tooltip",size:"lg",children:e.jsx("button",{style:{padding:"8px 16px"},children:"LG"})}),e.jsx(t,{content:"Extra large tooltip",size:"xl",children:e.jsx("button",{style:{padding:"8px 16px"},children:"XL"})}),e.jsx(t,{content:"Extra extra large tooltip",size:"xxl",children:e.jsx("button",{style:{padding:"8px 16px"},children:"XXL"})}),e.jsx(t,{content:"Extra extra extra large tooltip",size:"xxxl",children:e.jsx("button",{style:{padding:"8px 16px"},children:"XXXL"})})]})},ge={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem",padding:"2rem"},children:[e.jsx(t,{content:"Dark tooltip",variant:"dark",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Dark"})}),e.jsx(t,{content:"Light tooltip",variant:"light",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Light"})}),e.jsx(t,{content:"Primary tooltip",variant:"primary",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Primary"})}),e.jsx(t,{content:"Success tooltip",variant:"success",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Success"})}),e.jsx(t,{content:"Warning tooltip",variant:"warning",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Warning"})}),e.jsx(t,{content:"Error tooltip",variant:"error",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Error"})}),e.jsx(t,{content:"Info tooltip",variant:"info",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Info"})}),e.jsx(t,{content:"Custom background color",customColor:"#9333ea",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Custom Background"})}),e.jsx(t,{content:"Custom text color",textColor:"#e11d48",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Custom Text"})}),e.jsx(t,{content:"Both custom colors",customColor:"#1f2937",textColor:"#fbbf24",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Both Custom"})})]})},xe={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[e.jsx(t,{content:"Short tip",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Short"})}),e.jsx(t,{content:"This is a much longer tooltip with more detailed information that spans multiple lines",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Long Text"})}),e.jsx(t,{content:e.jsxs("div",{children:[e.jsx("strong",{children:"Rich Content"}),e.jsx("br",{}),"With ",e.jsx("em",{children:"formatting"})," and multiple lines!"]}),children:e.jsx("button",{style:{padding:"8px 16px"},children:"Rich Content"})})]})},ye={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[e.jsx(t,{content:"No delay",showDelay:0,hideDelay:0,children:e.jsx("button",{style:{padding:"8px 16px"},children:"No Delay"})}),e.jsx(t,{content:"Slow to show",showDelay:500,children:e.jsx("button",{style:{padding:"8px 16px"},children:"Slow Show"})}),e.jsx(t,{content:"Slow to hide",hideDelay:1e3,children:e.jsx("button",{style:{padding:"8px 16px"},children:"Slow Hide"})}),e.jsx(t,{content:"No animation",noAnimation:!0,children:e.jsx("button",{style:{padding:"8px 16px"},children:"No Animation"})})]})},be={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[e.jsx(t,{content:"No arrow tooltip",showArrow:!1,children:e.jsx("button",{style:{padding:"8px 16px"},children:"No Arrow"})}),e.jsx(t,{content:"With arrow tooltip",showArrow:!0,children:e.jsx("button",{style:{padding:"8px 16px"},children:"With Arrow"})})]})},je={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",padding:"2rem"},children:[e.jsx(t,{content:"Button tooltip",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Button"})}),e.jsx(t,{content:"Link tooltip",children:e.jsx("a",{href:"#",style:{color:"blue",textDecoration:"underline"},children:"Link"})}),e.jsx(t,{content:"Icon tooltip",children:e.jsx("span",{style:{display:"inline-block",padding:"8px",backgroundColor:"#f3f4f6",borderRadius:"4px",cursor:"help"},children:"ℹ️"})}),e.jsx(t,{content:"Text tooltip",children:e.jsx("span",{style:{borderBottom:"1px dotted #666",cursor:"help"},children:"Hover this text"})})]})},Ne={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[e.jsx(t,{content:"This is a narrow tooltip with fixed width",width:"120px",children:e.jsx("button",{style:{padding:"8px 16px"},children:"120px width"})}),e.jsx(t,{content:"This is a medium width tooltip with more space for content",width:200,children:e.jsx("button",{style:{padding:"8px 16px"},children:"200px width"})}),e.jsx(t,{content:"This is a wide tooltip that can contain much more detailed information and longer text content",width:"300px",children:e.jsx("button",{style:{padding:"8px 16px"},children:"300px width"})}),e.jsx(t,{content:"This tooltip uses max-width instead of fixed width, so it will wrap based on content length and the max-width constraint",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Max-width (default)"})})]})},fe={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"2rem"},children:[e.jsx(t,{content:"This tooltip is enabled",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Enabled"})}),e.jsx(t,{content:"This tooltip is disabled",disabled:!0,children:e.jsx("button",{style:{padding:"8px 16px",opacity:"0.6"},children:"Disabled"})})]})};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>\r
      <button style={{
      padding: '8px 16px',
      cursor: 'pointer'
    }}>\r
        Hover me\r
      </button>\r
    </Tooltip>
}`,...pe.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
    padding: '3rem'
  }}>\r
      <Tooltip content="Top tooltip" position="top">\r
        <button style={{
        padding: '8px 16px'
      }}>Top</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Bottom tooltip" position="bottom">\r
        <button style={{
        padding: '8px 16px'
      }}>Bottom</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Left tooltip" position="left">\r
        <button style={{
        padding: '8px 16px'
      }}>Left</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Right tooltip" position="right">\r
        <button style={{
        padding: '8px 16px'
      }}>Right</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Top start tooltip" position="top-start">\r
        <button style={{
        padding: '8px 16px'
      }}>Top Start</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Top end tooltip" position="top-end">\r
        <button style={{
        padding: '8px 16px'
      }}>Top End</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Bottom start tooltip" position="bottom-start">\r
        <button style={{
        padding: '8px 16px'
      }}>Bottom Start</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Bottom end tooltip" position="bottom-end">\r
        <button style={{
        padding: '8px 16px'
      }}>Bottom End</button>\r
      </Tooltip>\r
    </div>
}`,...he.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    padding: '2rem'
  }}>\r
      <Tooltip content="Appears on hover" trigger="hover">\r
        <button style={{
        padding: '8px 16px'
      }}>Hover</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Appears on click (click again to hide)" trigger="click">\r
        <button style={{
        padding: '8px 16px'
      }}>Click</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Appears on focus" trigger="focus">\r
        <button style={{
        padding: '8px 16px'
      }}>Focus</button>\r
      </Tooltip>\r
    </div>
}`,...ue.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
    padding: '3rem'
  }}>\r
      <Tooltip content="Extra small tooltip" size="xs">\r
        <button style={{
        padding: '8px 16px'
      }}>XS</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Small tooltip" size="sm">\r
        <button style={{
        padding: '8px 16px'
      }}>SM</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Medium tooltip" size="md">\r
        <button style={{
        padding: '8px 16px'
      }}>MD</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Large tooltip" size="lg">\r
        <button style={{
        padding: '8px 16px'
      }}>LG</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Extra large tooltip" size="xl">\r
        <button style={{
        padding: '8px 16px'
      }}>XL</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Extra extra large tooltip" size="xxl">\r
        <button style={{
        padding: '8px 16px'
      }}>XXL</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Extra extra extra large tooltip" size="xxxl">\r
        <button style={{
        padding: '8px 16px'
      }}>XXXL</button>\r
      </Tooltip>\r
    </div>
}`,...ve.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
    padding: '2rem'
  }}>\r
      <Tooltip content="Dark tooltip" variant="dark">\r
        <button style={{
        padding: '8px 16px'
      }}>Dark</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Light tooltip" variant="light">\r
        <button style={{
        padding: '8px 16px'
      }}>Light</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Primary tooltip" variant="primary">\r
        <button style={{
        padding: '8px 16px'
      }}>Primary</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Success tooltip" variant="success">\r
        <button style={{
        padding: '8px 16px'
      }}>Success</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Warning tooltip" variant="warning">\r
        <button style={{
        padding: '8px 16px'
      }}>Warning</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Error tooltip" variant="error">\r
        <button style={{
        padding: '8px 16px'
      }}>Error</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Info tooltip" variant="info">\r
        <button style={{
        padding: '8px 16px'
      }}>Info</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Custom background color" customColor="#9333ea">\r
        <button style={{
        padding: '8px 16px'
      }}>Custom Background</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Custom text color" textColor="#e11d48">\r
        <button style={{
        padding: '8px 16px'
      }}>Custom Text</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Both custom colors" customColor="#1f2937" textColor="#fbbf24">\r
        <button style={{
        padding: '8px 16px'
      }}>Both Custom</button>\r
      </Tooltip>\r
    </div>
}`,...ge.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    padding: '2rem'
  }}>\r
      <Tooltip content="Short tip">\r
        <button style={{
        padding: '8px 16px'
      }}>Short</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="This is a much longer tooltip with more detailed information that spans multiple lines">\r
        <button style={{
        padding: '8px 16px'
      }}>Long Text</button>\r
      </Tooltip>\r
      \r
      <Tooltip content={<div>\r
            <strong>Rich Content</strong>\r
            <br />\r
            With <em>formatting</em> and multiple lines!\r
          </div>}>\r
        <button style={{
        padding: '8px 16px'
      }}>Rich Content</button>\r
      </Tooltip>\r
    </div>
}`,...xe.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    padding: '2rem'
  }}>\r
      <Tooltip content="No delay" showDelay={0} hideDelay={0}>\r
        <button style={{
        padding: '8px 16px'
      }}>No Delay</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Slow to show" showDelay={500}>\r
        <button style={{
        padding: '8px 16px'
      }}>Slow Show</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Slow to hide" hideDelay={1000}>\r
        <button style={{
        padding: '8px 16px'
      }}>Slow Hide</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="No animation" noAnimation>\r
        <button style={{
        padding: '8px 16px'
      }}>No Animation</button>\r
      </Tooltip>\r
    </div>
}`,...ye.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    padding: '2rem'
  }}>\r
      <Tooltip content="No arrow tooltip" showArrow={false}>\r
        <button style={{
        padding: '8px 16px'
      }}>No Arrow</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="With arrow tooltip" showArrow={true}>\r
        <button style={{
        padding: '8px 16px'
      }}>With Arrow</button>\r
      </Tooltip>\r
    </div>
}`,...be.parameters?.docs?.source}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    padding: '2rem'
  }}>\r
      <Tooltip content="Button tooltip">\r
        <button style={{
        padding: '8px 16px'
      }}>Button</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Link tooltip">\r
        <a href="#" style={{
        color: 'blue',
        textDecoration: 'underline'
      }}>Link</a>\r
      </Tooltip>\r
      \r
      <Tooltip content="Icon tooltip">\r
        <span style={{
        display: 'inline-block',
        padding: '8px',
        backgroundColor: '#f3f4f6',
        borderRadius: '4px',
        cursor: 'help'
      }}>\r
          ℹ️\r
        </span>\r
      </Tooltip>\r
      \r
      <Tooltip content="Text tooltip">\r
        <span style={{
        borderBottom: '1px dotted #666',
        cursor: 'help'
      }}>\r
          Hover this text\r
        </span>\r
      </Tooltip>\r
    </div>
}`,...je.parameters?.docs?.source}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    padding: '2rem'
  }}>\r
      <Tooltip content="This is a narrow tooltip with fixed width" width="120px">\r
        <button style={{
        padding: '8px 16px'
      }}>120px width</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="This is a medium width tooltip with more space for content" width={200}>\r
        <button style={{
        padding: '8px 16px'
      }}>200px width</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="This is a wide tooltip that can contain much more detailed information and longer text content" width="300px">\r
        <button style={{
        padding: '8px 16px'
      }}>300px width</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="This tooltip uses max-width instead of fixed width, so it will wrap based on content length and the max-width constraint">\r
        <button style={{
        padding: '8px 16px'
      }}>Max-width (default)</button>\r
      </Tooltip>\r
    </div>
}`,...Ne.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    padding: '2rem'
  }}>\r
      <Tooltip content="This tooltip is enabled">\r
        <button style={{
        padding: '8px 16px'
      }}>Enabled</button>\r
      </Tooltip>\r
      \r
      <Tooltip content="This tooltip is disabled" disabled>\r
        <button style={{
        padding: '8px 16px',
        opacity: '0.6'
      }}>Disabled</button>\r
      </Tooltip>\r
    </div>
}`,...fe.parameters?.docs?.source}}};const Me=["Default","Positions","TriggerModes","Sizes","ColorVariants","ContentVariants","TimingAndAnimation","WithoutArrow","TriggerElements","FixedWidths","DisabledState"],Xe=Object.freeze(Object.defineProperty({__proto__:null,ColorVariants:ge,ContentVariants:xe,Default:pe,DisabledState:fe,FixedWidths:Ne,Positions:he,Sizes:ve,TimingAndAnimation:ye,TriggerElements:je,TriggerModes:ue,WithoutArrow:be,__namedExportsOrder:Me,default:Ie},Symbol.toStringTag,{value:"Module"}));export{Fe as B,_e as P,Ve as S,Xe as T,Ge as a,$e as b};
