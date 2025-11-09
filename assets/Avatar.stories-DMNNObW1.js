import{j as a}from"./iframe-CdBaqdCg.js";import{A as s}from"./Avatar-D0deb_m8.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"Atoms/Avatar",component:s,parameters:{layout:"centered",docs:{description:{component:`
The Avatar component displays user profile pictures with intelligent fallbacks to initials or placeholder icons. 
It supports multiple sizes, shapes, status indicators, loading states, and full accessibility features.

## Features
- **Image Support** - Displays user photos with error handling
- **Initials Fallback** - Auto-generates colored initials from names
- **Status Indicators** - Shows online/offline/away/busy status
- **Multiple Sizes** - From xs (24px) to 2xl (80px)
- **Shape Variants** - Circle, square, or rounded corners
- **Loading States** - Skeleton and spinner animations
- **Accessibility** - Full ARIA support and keyboard navigation
- **Theme Support** - Works with all theme variants
        `}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"],description:"Size of the avatar"},shape:{control:"select",options:["circle","square","rounded"],description:"Shape of the avatar"},status:{control:"select",options:["online","offline","away","busy"],description:"Status indicator color"},showStatus:{control:"boolean",description:"Show status indicator"},loading:{control:"boolean",description:"Show loading state"},disabled:{control:"boolean",description:"Disabled state"},onClick:{action:"clicked",description:"Click handler for interactive avatars"}},tags:["autodocs"]},r={args:{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",alt:"John Doe",name:"John Doe"}},t={render:()=>a.jsxs("div",{className:"avatar-story-grid",children:[a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{size:"xs",name:"Alice Johnson",src:"https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face"}),a.jsx("span",{children:"Extra Small (xs)"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{size:"sm",name:"Bob Smith",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"}),a.jsx("span",{children:"Small (sm)"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{size:"md",name:"Carol Davis",src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"}),a.jsx("span",{children:"Medium (md)"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{size:"lg",name:"David Wilson",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"}),a.jsx("span",{children:"Large (lg)"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{size:"xl",name:"Emma Brown",src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"}),a.jsx("span",{children:"Extra Large (xl)"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{size:"2xl",name:"Frank Miller",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"}),a.jsx("span",{children:"2X Large (2xl)"})]})]})},i={render:()=>a.jsxs("div",{className:"avatar-story-grid",children:[a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{shape:"circle",size:"lg",name:"Alice Johnson",src:"https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face"}),a.jsx("span",{children:"Circle"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{shape:"square",size:"lg",name:"Bob Smith",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"}),a.jsx("span",{children:"Square"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{shape:"rounded",size:"lg",name:"Carol Davis",src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"}),a.jsx("span",{children:"Rounded"})]})]})},n={render:()=>a.jsxs("div",{className:"avatar-story-grid",children:[a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Alice Johnson",size:"lg"}),a.jsx("span",{children:"Alice Johnson"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Bob Smith",size:"lg"}),a.jsx("span",{children:"Bob Smith"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Carol Davis",size:"lg"}),a.jsx("span",{children:"Carol Davis"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"David Wilson",size:"lg"}),a.jsx("span",{children:"David Wilson"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Emma Brown",size:"lg"}),a.jsx("span",{children:"Emma Brown"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Frank Miller",size:"lg"}),a.jsx("span",{children:"Frank Miller"})]})]})},o={render:()=>a.jsxs("div",{className:"avatar-story-grid",children:[a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"John Doe",initials:"JD",size:"lg"}),a.jsx("span",{children:"Custom: JD"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Jane Smith",initials:"JS",size:"lg"}),a.jsx("span",{children:"Custom: JS"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Admin User",initials:"A",size:"lg"}),a.jsx("span",{children:"Single Letter"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"System",initials:"SYS",size:"lg"}),a.jsx("span",{children:"Three Letters"})]})]})},l={render:()=>a.jsxs("div",{className:"avatar-story-grid",children:[a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Alice Johnson",size:"lg",showStatus:!0,status:"online",src:"https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face"}),a.jsx("span",{children:"Online"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Bob Smith",size:"lg",showStatus:!0,status:"offline",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"}),a.jsx("span",{children:"Offline"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Carol Davis",size:"lg",showStatus:!0,status:"away",src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"}),a.jsx("span",{children:"Away"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"David Wilson",size:"lg",showStatus:!0,status:"busy",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"}),a.jsx("span",{children:"Busy"})]})]})},c={render:()=>a.jsxs("div",{className:"avatar-story-grid",children:[a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Loading User",size:"lg",loading:!0}),a.jsx("span",{children:"Loading Skeleton"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Image Loading",size:"lg",src:"https://via.placeholder.com/200x200?text=Loading..."}),a.jsx("span",{children:"Image Loading"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Slow Network",size:"lg",loading:!0,showStatus:!0,status:"online"}),a.jsx("span",{children:"Loading with Status"})]})]})},d={render:()=>a.jsxs("div",{className:"avatar-story-grid",children:[a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Broken Image",size:"lg",src:"https://invalid-url.example.com/broken.jpg"}),a.jsx("span",{children:"Broken Image → Initials"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{size:"lg"}),a.jsx("span",{children:"No Name/Image → Placeholder"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"",size:"lg",src:"https://invalid-url.example.com/broken.jpg"}),a.jsx("span",{children:"Empty Name → Placeholder"})]})]})},m={args:{name:"John Doe",size:"lg",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",onClick:()=>alert("Avatar clicked!"),showStatus:!0,status:"online"},parameters:{docs:{description:{story:"Clickable avatar with hover effects and focus states. Try clicking, hovering, and keyboard navigation."}}}},p={render:()=>a.jsxs("div",{className:"avatar-story-grid",children:[a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Disabled User",size:"lg",src:"https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face",disabled:!0,onClick:()=>alert("Should not fire")}),a.jsx("span",{children:"Disabled Image"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Disabled Initials",size:"lg",disabled:!0,onClick:()=>alert("Should not fire")}),a.jsx("span",{children:"Disabled Initials"})]}),a.jsxs("div",{className:"avatar-story-item",children:[a.jsx(s,{name:"Disabled Status",size:"lg",disabled:!0,showStatus:!0,status:"online",onClick:()=>alert("Should not fire")}),a.jsx("span",{children:"Disabled with Status"})]})]})},h={render:()=>a.jsxs("div",{className:"avatar-story-accessibility",children:[a.jsx("h3",{children:"Keyboard Navigation"}),a.jsx("p",{children:"Try using Tab, Enter, and Space keys to navigate and activate:"}),a.jsxs("div",{className:"avatar-story-grid",children:[a.jsx(s,{name:"Keyboard User 1",size:"lg",onClick:()=>alert("Avatar 1 activated"),"aria-label":"User profile for Keyboard User 1"}),a.jsx(s,{name:"Keyboard User 2",size:"lg",onClick:()=>alert("Avatar 2 activated"),"aria-label":"User profile for Keyboard User 2"}),a.jsx(s,{name:"Keyboard User 3",size:"lg",onClick:()=>alert("Avatar 3 activated"),"aria-label":"User profile for Keyboard User 3"})]}),a.jsx("h3",{children:"Screen Reader Support"}),a.jsx("p",{children:"Proper ARIA labels and roles for assistive technology:"}),a.jsxs("div",{className:"avatar-story-grid",children:[a.jsx(s,{name:"Screen Reader User",size:"lg",showStatus:!0,status:"online","aria-label":"Profile picture of Screen Reader User, currently online"}),a.jsx(s,{name:"Another User",size:"lg",showStatus:!0,status:"busy","aria-label":"Profile picture of Another User, currently busy"})]})]})},v={render:()=>a.jsxs("div",{className:"avatar-story-themes",children:[a.jsxs("div",{className:"avatar-story-theme","data-theme":"light",children:[a.jsx("h4",{children:"Light Theme"}),a.jsxs("div",{className:"avatar-story-grid",children:[a.jsx(s,{name:"Light User",size:"lg"}),a.jsx(s,{name:"Light Image",size:"lg",src:"https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face"}),a.jsx(s,{name:"Light Status",size:"lg",showStatus:!0,status:"online"})]})]}),a.jsxs("div",{className:"avatar-story-theme","data-theme":"dark",children:[a.jsx("h4",{children:"Dark Theme"}),a.jsxs("div",{className:"avatar-story-grid",children:[a.jsx(s,{name:"Dark User",size:"lg"}),a.jsx(s,{name:"Dark Image",size:"lg",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"}),a.jsx(s,{name:"Dark Status",size:"lg",showStatus:!0,status:"away"})]})]}),a.jsxs("div",{className:"avatar-story-theme","data-theme":"custom",children:[a.jsx("h4",{children:"Custom Theme"}),a.jsxs("div",{className:"avatar-story-grid",children:[a.jsx(s,{name:"Custom User",size:"lg"}),a.jsx(s,{name:"Custom Image",size:"lg",src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"}),a.jsx(s,{name:"Custom Status",size:"lg",showStatus:!0,status:"busy"})]})]})]}),parameters:{docs:{description:{story:"Avatar appearance across different themes. The component adapts colors and contrast automatically."}}}},u={render:()=>a.jsxs("div",{className:"avatar-story-comprehensive",children:[a.jsx("h3",{children:"Comprehensive Avatar Showcase"}),a.jsxs("div",{className:"avatar-story-section",children:[a.jsx("h4",{children:"Sizes with Images"}),a.jsx("div",{className:"avatar-story-grid",children:["xs","sm","md","lg","xl","2xl"].map(e=>a.jsx(s,{size:e,name:"User Name",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",showStatus:!0,status:"online"},e))})]}),a.jsxs("div",{className:"avatar-story-section",children:[a.jsx("h4",{children:"Shapes with Initials"}),a.jsx("div",{className:"avatar-story-grid",children:["circle","square","rounded"].map(e=>a.jsx(s,{shape:e,size:"lg",name:"Shape Demo",showStatus:!0,status:"busy"},e))})]}),a.jsxs("div",{className:"avatar-story-section",children:[a.jsx("h4",{children:"Interactive States"}),a.jsxs("div",{className:"avatar-story-grid",children:[a.jsx(s,{name:"Clickable",size:"lg",onClick:()=>alert("Clicked!"),showStatus:!0,status:"online"}),a.jsx(s,{name:"Disabled",size:"lg",disabled:!0,onClick:()=>alert("Should not fire"),showStatus:!0,status:"offline"}),a.jsx(s,{name:"Loading",size:"lg",loading:!0,showStatus:!0,status:"away"})]})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    alt: 'John Doe',
    name: 'John Doe'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="avatar-story-grid">\r
      <div className="avatar-story-item">\r
        <Avatar size="xs" name="Alice Johnson" src="https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face" />\r
        <span>Extra Small (xs)</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar size="sm" name="Bob Smith" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" />\r
        <span>Small (sm)</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar size="md" name="Carol Davis" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" />\r
        <span>Medium (md)</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar size="lg" name="David Wilson" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" />\r
        <span>Large (lg)</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar size="xl" name="Emma Brown" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" />\r
        <span>Extra Large (xl)</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar size="2xl" name="Frank Miller" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />\r
        <span>2X Large (2xl)</span>\r
      </div>\r
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="avatar-story-grid">\r
      <div className="avatar-story-item">\r
        <Avatar shape="circle" size="lg" name="Alice Johnson" src="https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face" />\r
        <span>Circle</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar shape="square" size="lg" name="Bob Smith" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" />\r
        <span>Square</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar shape="rounded" size="lg" name="Carol Davis" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" />\r
        <span>Rounded</span>\r
      </div>\r
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="avatar-story-grid">\r
      <div className="avatar-story-item">\r
        <Avatar name="Alice Johnson" size="lg" />\r
        <span>Alice Johnson</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="Bob Smith" size="lg" />\r
        <span>Bob Smith</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="Carol Davis" size="lg" />\r
        <span>Carol Davis</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="David Wilson" size="lg" />\r
        <span>David Wilson</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="Emma Brown" size="lg" />\r
        <span>Emma Brown</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="Frank Miller" size="lg" />\r
        <span>Frank Miller</span>\r
      </div>\r
    </div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="avatar-story-grid">\r
      <div className="avatar-story-item">\r
        <Avatar name="John Doe" initials="JD" size="lg" />\r
        <span>Custom: JD</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="Jane Smith" initials="JS" size="lg" />\r
        <span>Custom: JS</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="Admin User" initials="A" size="lg" />\r
        <span>Single Letter</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="System" initials="SYS" size="lg" />\r
        <span>Three Letters</span>\r
      </div>\r
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="avatar-story-grid">\r
      <div className="avatar-story-item">\r
        <Avatar name="Alice Johnson" size="lg" showStatus status="online" src="https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face" />\r
        <span>Online</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="Bob Smith" size="lg" showStatus status="offline" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" />\r
        <span>Offline</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="Carol Davis" size="lg" showStatus status="away" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" />\r
        <span>Away</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="David Wilson" size="lg" showStatus status="busy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" />\r
        <span>Busy</span>\r
      </div>\r
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="avatar-story-grid">\r
      <div className="avatar-story-item">\r
        <Avatar name="Loading User" size="lg" loading />\r
        <span>Loading Skeleton</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="Image Loading" size="lg" src="https://via.placeholder.com/200x200?text=Loading..." />\r
        <span>Image Loading</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="Slow Network" size="lg" loading showStatus status="online" />\r
        <span>Loading with Status</span>\r
      </div>\r
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="avatar-story-grid">\r
      <div className="avatar-story-item">\r
        <Avatar name="Broken Image" size="lg" src="https://invalid-url.example.com/broken.jpg" />\r
        <span>Broken Image → Initials</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar size="lg" />\r
        <span>No Name/Image → Placeholder</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="" size="lg" src="https://invalid-url.example.com/broken.jpg" />\r
        <span>Empty Name → Placeholder</span>\r
      </div>\r
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 'lg',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    onClick: () => alert('Avatar clicked!'),
    showStatus: true,
    status: 'online'
  },
  parameters: {
    docs: {
      description: {
        story: 'Clickable avatar with hover effects and focus states. Try clicking, hovering, and keyboard navigation.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="avatar-story-grid">\r
      <div className="avatar-story-item">\r
        <Avatar name="Disabled User" size="lg" src="https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face" disabled onClick={() => alert('Should not fire')} />\r
        <span>Disabled Image</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="Disabled Initials" size="lg" disabled onClick={() => alert('Should not fire')} />\r
        <span>Disabled Initials</span>\r
      </div>\r
      <div className="avatar-story-item">\r
        <Avatar name="Disabled Status" size="lg" disabled showStatus status="online" onClick={() => alert('Should not fire')} />\r
        <span>Disabled with Status</span>\r
      </div>\r
    </div>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="avatar-story-accessibility">\r
      <h3>Keyboard Navigation</h3>\r
      <p>Try using Tab, Enter, and Space keys to navigate and activate:</p>\r
      <div className="avatar-story-grid">\r
        <Avatar name="Keyboard User 1" size="lg" onClick={() => alert('Avatar 1 activated')} aria-label="User profile for Keyboard User 1" />\r
        <Avatar name="Keyboard User 2" size="lg" onClick={() => alert('Avatar 2 activated')} aria-label="User profile for Keyboard User 2" />\r
        <Avatar name="Keyboard User 3" size="lg" onClick={() => alert('Avatar 3 activated')} aria-label="User profile for Keyboard User 3" />\r
      </div>\r
      \r
      <h3>Screen Reader Support</h3>\r
      <p>Proper ARIA labels and roles for assistive technology:</p>\r
      <div className="avatar-story-grid">\r
        <Avatar name="Screen Reader User" size="lg" showStatus status="online" aria-label="Profile picture of Screen Reader User, currently online" />\r
        <Avatar name="Another User" size="lg" showStatus status="busy" aria-label="Profile picture of Another User, currently busy" />\r
      </div>\r
    </div>
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="avatar-story-themes">\r
      <div className="avatar-story-theme" data-theme="light">\r
        <h4>Light Theme</h4>\r
        <div className="avatar-story-grid">\r
          <Avatar name="Light User" size="lg" />\r
          <Avatar name="Light Image" size="lg" src="https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face" />\r
          <Avatar name="Light Status" size="lg" showStatus status="online" />\r
        </div>\r
      </div>\r
      \r
      <div className="avatar-story-theme" data-theme="dark">\r
        <h4>Dark Theme</h4>\r
        <div className="avatar-story-grid">\r
          <Avatar name="Dark User" size="lg" />\r
          <Avatar name="Dark Image" size="lg" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" />\r
          <Avatar name="Dark Status" size="lg" showStatus status="away" />\r
        </div>\r
      </div>\r
      \r
      <div className="avatar-story-theme" data-theme="custom">\r
        <h4>Custom Theme</h4>\r
        <div className="avatar-story-grid">\r
          <Avatar name="Custom User" size="lg" />\r
          <Avatar name="Custom Image" size="lg" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" />\r
          <Avatar name="Custom Status" size="lg" showStatus status="busy" />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Avatar appearance across different themes. The component adapts colors and contrast automatically.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="avatar-story-comprehensive">\r
      <h3>Comprehensive Avatar Showcase</h3>\r
      \r
      <div className="avatar-story-section">\r
        <h4>Sizes with Images</h4>\r
        <div className="avatar-story-grid">\r
          {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map(size => <Avatar key={size} size={size as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'} name="User Name" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" showStatus status="online" />)}\r
        </div>\r
      </div>\r
      \r
      <div className="avatar-story-section">\r
        <h4>Shapes with Initials</h4>\r
        <div className="avatar-story-grid">\r
          {['circle', 'square', 'rounded'].map(shape => <Avatar key={shape} shape={shape as 'circle' | 'square' | 'rounded'} size="lg" name="Shape Demo" showStatus status="busy" />)}\r
        </div>\r
      </div>\r
      \r
      <div className="avatar-story-section">\r
        <h4>Interactive States</h4>\r
        <div className="avatar-story-grid">\r
          <Avatar name="Clickable" size="lg" onClick={() => alert('Clicked!')} showStatus status="online" />\r
          <Avatar name="Disabled" size="lg" disabled onClick={() => alert('Should not fire')} showStatus status="offline" />\r
          <Avatar name="Loading" size="lg" loading showStatus status="away" />\r
        </div>\r
      </div>\r
    </div>
}`,...u.parameters?.docs?.source}}};const j=["Default","SizeVariants","ShapeVariants","InitialsFallback","CustomInitials","StatusIndicators","LoadingStates","ErrorHandling","Interactive","DisabledState","AccessibilityDemo","ThemeShowcase","AllFeaturesCombined"];export{h as AccessibilityDemo,u as AllFeaturesCombined,o as CustomInitials,r as Default,p as DisabledState,d as ErrorHandling,n as InitialsFallback,m as Interactive,c as LoadingStates,i as ShapeVariants,t as SizeVariants,l as StatusIndicators,v as ThemeShowcase,j as __namedExportsOrder,y as default};
