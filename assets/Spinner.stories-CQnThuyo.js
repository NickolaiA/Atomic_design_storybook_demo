import{j as e}from"./iframe-C-Dpaqp0.js";import"./preload-helper-PPVm8Dsz.js";const s=({size:g="md",variant:f="primary",type:u="spin",speed:_="normal",color:N,label:r,hideLabel:S=!1,center:z=!1,overlay:x=!1,className:w="","aria-label":L,"aria-live":V="polite",...C})=>{const b=!!N,A=["spinner",`spinner--${g}`,!b&&`spinner--${f}`,`spinner--${u}`,`spinner--${_}`,b&&"spinner--custom-color",z&&"spinner--center",x&&"spinner--overlay",w].filter(Boolean).join(" "),h=L||(r?`Loading: ${r}`:"Loading"),T=()=>{switch(u){case"dots":return e.jsxs("div",{className:"spinner__dots",children:[e.jsx("div",{className:"spinner__dot"}),e.jsx("div",{className:"spinner__dot"}),e.jsx("div",{className:"spinner__dot"})]});case"bars":return e.jsxs("div",{className:"spinner__bars",children:[e.jsx("div",{className:"spinner__bar"}),e.jsx("div",{className:"spinner__bar"}),e.jsx("div",{className:"spinner__bar"}),e.jsx("div",{className:"spinner__bar"}),e.jsx("div",{className:"spinner__bar"})]});case"ring":return e.jsx("div",{className:"spinner__ring",children:e.jsx("div",{className:"spinner__ring-inner"})});case"pulse":return e.jsx("div",{className:"spinner__pulse"});case"bounce":return e.jsxs("div",{className:"spinner__bounce",children:[e.jsx("div",{className:"spinner__bounce-dot"}),e.jsx("div",{className:"spinner__bounce-dot"})]});case"radar":return e.jsxs("div",{className:"spinner__radar",children:[e.jsx("div",{className:"spinner__radar-line"}),e.jsx("div",{className:"spinner__radar-sweep"})]});case"car":return e.jsxs("div",{className:"spinner__car",children:[e.jsx("div",{className:"spinner__car-body"}),e.jsx("div",{className:"spinner__car-wheel spinner__car-wheel--front"}),e.jsx("div",{className:"spinner__car-wheel spinner__car-wheel--back"})]});case"gear":return e.jsx("div",{className:"spinner__gear",children:e.jsx("svg",{className:"spinner__gear-svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97L2.46 14.6c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.22l2.49-1c.52.39 1.06.73 1.69.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.25 1.17-.59 1.69-.98l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.63Z"})})});case"wave":return e.jsxs("div",{className:"spinner__wave",children:[e.jsx("div",{className:"spinner__wave-bar"}),e.jsx("div",{className:"spinner__wave-bar"}),e.jsx("div",{className:"spinner__wave-bar"}),e.jsx("div",{className:"spinner__wave-bar"}),e.jsx("div",{className:"spinner__wave-bar"})]});case"heartbeat":return e.jsx("div",{className:"spinner__heartbeat",children:e.jsx("svg",{className:"spinner__heart-svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})})});case"orbit":return e.jsxs("div",{className:"spinner__orbit",children:[e.jsx("div",{className:"spinner__orbit-center"}),e.jsx("div",{className:"spinner__orbit-ring",children:e.jsx("div",{className:"spinner__orbit-dot"})})]});case"flip":return e.jsx("div",{className:"spinner__flip",children:e.jsx("div",{className:"spinner__flip-cube"})});case"spiral":return e.jsx("div",{className:"spinner__spiral",children:e.jsx("svg",{className:"spinner__spiral-svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("path",{className:"spinner__spiral-path",d:"M12 2 A10 10 0 0 1 22 12 A8 8 0 0 1 12 20 A6 6 0 0 1 6 12 A4 4 0 0 1 12 8 A2 2 0 0 1 14 12",strokeWidth:"2",strokeLinecap:"round"})})});case"spin":default:return e.jsx("div",{className:"spinner__circle",children:e.jsx("svg",{className:"spinner__svg",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{className:"spinner__path",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"31.416",strokeDashoffset:"31.416"})})})}},j=e.jsxs("div",{className:A,style:b?{color:N}:void 0,role:"status","aria-label":h,"aria-live":"polite",...C,children:[T(),r&&e.jsx("span",{className:`spinner__label ${S?"spinner__label--hidden":""}`,children:r}),e.jsx("span",{className:"spinner__sr-only",children:h})]});return x?e.jsxs("div",{className:"spinner-overlay",children:[e.jsx("div",{className:"spinner-overlay__backdrop"}),e.jsx("div",{className:"spinner-overlay__content",children:j})]}):j};s.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Spinner size variant",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'neutral'"}]},description:"Spinner color variant",defaultValue:{value:"'primary'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'spin' | 'pulse' | 'bounce' | 'dots' | 'bars' | 'ring' | 'radar' | 'car' | 'gear' | 'wave' | 'heartbeat' | 'orbit' | 'flip' | 'spiral'",elements:[{name:"literal",value:"'spin'"},{name:"literal",value:"'pulse'"},{name:"literal",value:"'bounce'"},{name:"literal",value:"'dots'"},{name:"literal",value:"'bars'"},{name:"literal",value:"'ring'"},{name:"literal",value:"'radar'"},{name:"literal",value:"'car'"},{name:"literal",value:"'gear'"},{name:"literal",value:"'wave'"},{name:"literal",value:"'heartbeat'"},{name:"literal",value:"'orbit'"},{name:"literal",value:"'flip'"},{name:"literal",value:"'spiral'"}]},description:"Spinner animation type",defaultValue:{value:"'spin'",computed:!1}},speed:{required:!1,tsType:{name:"union",raw:"'slow' | 'normal' | 'fast'",elements:[{name:"literal",value:"'slow'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'fast'"}]},description:"Animation speed",defaultValue:{value:"'normal'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Custom color (overrides variant)"},label:{required:!1,tsType:{name:"string"},description:"Loading text to display alongside spinner"},hideLabel:{required:!1,tsType:{name:"boolean"},description:"Hide label visually but keep for screen readers",defaultValue:{value:"false",computed:!1}},center:{required:!1,tsType:{name:"boolean"},description:"Center the spinner in its container",defaultValue:{value:"false",computed:!1}},overlay:{required:!1,tsType:{name:"boolean"},description:"Show spinner overlay with backdrop",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className",defaultValue:{value:"''",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for screen readers"},"aria-live":{required:!1,tsType:{name:"union",raw:"'polite' | 'assertive'",elements:[{name:"literal",value:"'polite'"},{name:"literal",value:"'assertive'"}]},description:"ARIA live region for dynamic updates",defaultValue:{value:"'polite'",computed:!1}}}};const q={title:"Atoms/Spinner",component:s,parameters:{layout:"centered",docs:{description:{component:"A versatile loading spinner component with 14 unique animation types including creative animations like radar sweep, moving car, rotating gear, heartbeat, and more. Supports accessibility features, custom colors, and multiple sizes."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size of the spinner"},variant:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"],description:"Color variant of the spinner"},type:{control:"select",options:["spin","pulse","bounce","dots","bars","ring","radar","car","gear","wave","heartbeat","orbit","flip","spiral"],description:"Animation type of the spinner"},speed:{control:"select",options:["slow","normal","fast"],description:"Animation speed"},label:{control:"text",description:"Accessible label for the spinner"},hideLabel:{control:"boolean",description:"Whether to hide the label text (keeps it for screen readers)"},center:{control:"boolean",description:"Whether to center the spinner horizontally"},color:{control:"color",description:"Custom color for the spinner (overrides variant)"}}},a={args:{size:"md",variant:"primary",type:"spin"}},i={render:()=>e.jsxs("div",{className:"story-demo-row",children:[e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{size:"xs"}),e.jsx("p",{className:"story-demo-label",children:"XS"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{size:"sm"}),e.jsx("p",{className:"story-demo-label",children:"SM"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{size:"md"}),e.jsx("p",{className:"story-demo-label",children:"MD"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{size:"lg"}),e.jsx("p",{className:"story-demo-label",children:"LG"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{size:"xl"}),e.jsx("p",{className:"story-demo-label",children:"XL"})]})]}),parameters:{docs:{description:{story:"Available size variants from extra small to extra large."}}}},l={render:()=>e.jsxs("div",{className:"story-demo-flex-wrap",children:[e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{variant:"primary"}),e.jsx("p",{className:"story-demo-label",children:"Primary"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{variant:"secondary"}),e.jsx("p",{className:"story-demo-label",children:"Secondary"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{variant:"success"}),e.jsx("p",{className:"story-demo-label",children:"Success"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{variant:"warning"}),e.jsx("p",{className:"story-demo-label",children:"Warning"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{variant:"error"}),e.jsx("p",{className:"story-demo-label",children:"Error"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{variant:"info"}),e.jsx("p",{className:"story-demo-label",children:"Info"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{variant:"neutral"}),e.jsx("p",{className:"story-demo-label",children:"Neutral"})]})]}),parameters:{docs:{description:{story:"Available color variants for different semantic contexts."}}}},o={render:()=>e.jsxs("div",{className:"story-demo-grid--4col",children:[e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"spin",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Spin"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"pulse",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Pulse"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"bounce",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Bounce"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"dots",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Dots"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"bars",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Bars"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"ring",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Ring"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"radar",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Radar"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"car",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Car"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"gear",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Gear"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"wave",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Wave"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"heartbeat",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Heartbeat"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"orbit",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Orbit"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"flip",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Flip"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"spiral",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Spiral"})]})]}),parameters:{docs:{description:{story:"All 14 animation types available for the spinner, including creative and fun animations."}}}},t={render:()=>e.jsxs("div",{className:"story-demo-grid--4col",children:[e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"radar",size:"xl",variant:"success"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Radar Sweep"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"car",size:"xl",variant:"warning"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Moving Car"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"gear",size:"xl",variant:"info"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Rotating Gear"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"heartbeat",size:"xl",variant:"error"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Heartbeat"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"orbit",size:"xl",variant:"primary"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Orbital Motion"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"flip",size:"xl",variant:"secondary"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"3D Flip"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"spiral",size:"xl",variant:"neutral"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Spiral Draw"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{type:"wave",size:"xl",color:"#6c5ce7"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Sound Wave"})]})]}),parameters:{docs:{description:{story:"Creative and fun spinner animations perfect for engaging user experiences. These animations add personality and visual interest to loading states."}}}},n={render:()=>e.jsxs("div",{className:"story-demo-column",children:[e.jsx(s,{label:"Loading...",hideLabel:!1}),e.jsx(s,{label:"Processing your request...",hideLabel:!1,variant:"success"}),e.jsx(s,{label:"Uploading file...",hideLabel:!1,variant:"info",type:"bars"}),e.jsx(s,{label:"Connecting to server...",hideLabel:!1,variant:"warning",type:"dots"})]}),parameters:{docs:{description:{story:"Spinners with visible labels for better user communication."}}}},d={render:()=>e.jsxs("div",{className:"story-demo-row",children:[e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{speed:"slow",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Slow"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{speed:"normal",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Normal"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{speed:"fast",size:"lg"}),e.jsx("p",{className:"story-demo-label story-demo-label--md",children:"Fast"})]})]}),parameters:{docs:{description:{story:"Different animation speeds: slow, normal, and fast."}}}},m={render:()=>e.jsxs("div",{className:"story-demo-flex-wrap",children:[e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{color:"#ff6b6b",size:"lg"}),e.jsx("p",{className:"story-demo-label",children:"Red"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{color:"#4ecdc4",size:"lg"}),e.jsx("p",{className:"story-demo-label",children:"Teal"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{color:"#45b7d1",size:"lg"}),e.jsx("p",{className:"story-demo-label",children:"Blue"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{color:"#f9ca24",size:"lg"}),e.jsx("p",{className:"story-demo-label",children:"Yellow"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{color:"#6c5ce7",size:"lg"}),e.jsx("p",{className:"story-demo-label",children:"Purple"})]}),e.jsxs("div",{className:"story-demo-item",children:[e.jsx(s,{color:"linear-gradient(45deg, #667eea 0%, #764ba2 100%)",size:"lg"}),e.jsx("p",{className:"story-demo-label",children:"Gradient"})]})]}),parameters:{docs:{description:{story:"Custom colors override the variant prop and allow for brand-specific styling."}}}},c={render:()=>e.jsx("div",{className:"story-demo-container",children:e.jsx(s,{center:!0,label:"Centered loading...",hideLabel:!1})}),parameters:{docs:{description:{story:"Centered spinner useful for container loading states."}}}},p={render:()=>e.jsxs("div",{className:"story-demo-column",children:[e.jsxs("div",{className:"story-demo-button-group",children:[e.jsxs("button",{className:"story-demo-button",disabled:!0,children:[e.jsx(s,{size:"sm"}),"Saving..."]}),e.jsx("span",{className:"story-demo-description",children:"Button with loading state"})]}),e.jsx("div",{className:"story-demo-card",children:e.jsx(s,{size:"lg",label:"Loading content...",hideLabel:!1})}),e.jsxs("div",{className:"story-demo-inline",children:[e.jsx("span",{children:"Fetching data"}),e.jsx(s,{size:"sm"})]})]}),parameters:{docs:{description:{story:"Common loading state patterns using the spinner component."}}}},y={render:()=>e.jsxs("div",{className:"story-demo-column",children:[e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Screen Reader Friendly"}),e.jsx(s,{label:"Loading user profile data"}),e.jsx("p",{className:"story-demo-description",children:'Hidden label for screen readers: "Loading user profile data"'})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Visible Label"}),e.jsx(s,{label:"Processing payment...",hideLabel:!1}),e.jsx("p",{className:"story-demo-description",children:"Visible label for all users"})]}),e.jsxs("div",{className:"story-demo-section",children:[e.jsx("h4",{className:"story-demo-heading",children:"Respects Motion Preferences"}),e.jsx(s,{type:"pulse",size:"lg"}),e.jsx("p",{className:"story-demo-description",children:"Animation reduces for users with motion sensitivity preferences"})]})]}),parameters:{docs:{description:{story:"Accessibility features including ARIA attributes, screen reader support, and reduced motion preferences."}}}},v={args:{size:"lg",variant:"primary",type:"spin",speed:"normal",label:"Loading...",hideLabel:!1,center:!1},parameters:{docs:{description:{story:"Interactive story with all available controls. Use the controls panel to experiment with different props."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'primary',
    type: 'spin'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const k=["Default","SizeVariants","ColorVariants","AnimationTypes","CreativeAnimations","WithLabels","SpeedVariants","CustomColors","Centered","LoadingStatesDemo","AccessibilityDemo","Interactive"];export{y as AccessibilityDemo,o as AnimationTypes,c as Centered,l as ColorVariants,t as CreativeAnimations,m as CustomColors,a as Default,v as Interactive,p as LoadingStatesDemo,i as SizeVariants,d as SpeedVariants,n as WithLabels,k as __namedExportsOrder,q as default};
