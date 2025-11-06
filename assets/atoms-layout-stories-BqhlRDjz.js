import{j as e}from"./react-1-DYTeAnAh.js";import{A as r,k as n,D as a,l as t,m as l,n as i}from"./atoms-components-B6eh4y83.js";const je={title:"Atoms/Avatar",component:r,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"],description:"Size of the avatar"},shape:{control:"select",options:["circle","square","rounded"],description:"Shape of the avatar"},status:{control:"select",options:["online","offline","away","busy"],description:"Status indicator color"},showStatus:{control:"boolean",description:"Show status indicator"},loading:{control:"boolean",description:"Show loading state"},disabled:{control:"boolean",description:"Disabled state"},onClick:{action:"clicked",description:"Click handler for interactive avatars"}},tags:["autodocs"]},d={args:{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",alt:"John Doe",name:"John Doe"}},p={render:()=>e.jsxs("div",{className:"avatar-story-grid",children:[e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{size:"xs",name:"Alice Johnson",src:"https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face"}),e.jsx("span",{children:"Extra Small (xs)"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{size:"sm",name:"Bob Smith",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"}),e.jsx("span",{children:"Small (sm)"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{size:"md",name:"Carol Davis",src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"}),e.jsx("span",{children:"Medium (md)"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{size:"lg",name:"David Wilson",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"}),e.jsx("span",{children:"Large (lg)"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{size:"xl",name:"Emma Brown",src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"}),e.jsx("span",{children:"Extra Large (xl)"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{size:"2xl",name:"Frank Miller",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"}),e.jsx("span",{children:"2X Large (2xl)"})]})]})},m={render:()=>e.jsxs("div",{className:"avatar-story-grid",children:[e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{shape:"circle",size:"lg",name:"Alice Johnson",src:"https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face"}),e.jsx("span",{children:"Circle"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{shape:"square",size:"lg",name:"Bob Smith",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"}),e.jsx("span",{children:"Square"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{shape:"rounded",size:"lg",name:"Carol Davis",src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"}),e.jsx("span",{children:"Rounded"})]})]})},h={render:()=>e.jsxs("div",{className:"avatar-story-grid",children:[e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Alice Johnson",size:"lg"}),e.jsx("span",{children:"Alice Johnson"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Bob Smith",size:"lg"}),e.jsx("span",{children:"Bob Smith"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Carol Davis",size:"lg"}),e.jsx("span",{children:"Carol Davis"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"David Wilson",size:"lg"}),e.jsx("span",{children:"David Wilson"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Emma Brown",size:"lg"}),e.jsx("span",{children:"Emma Brown"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Frank Miller",size:"lg"}),e.jsx("span",{children:"Frank Miller"})]})]})},v={render:()=>e.jsxs("div",{className:"avatar-story-grid",children:[e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"John Doe",initials:"JD",size:"lg"}),e.jsx("span",{children:"Custom: JD"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Jane Smith",initials:"JS",size:"lg"}),e.jsx("span",{children:"Custom: JS"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Admin User",initials:"A",size:"lg"}),e.jsx("span",{children:"Single Letter"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"System",initials:"SYS",size:"lg"}),e.jsx("span",{children:"Three Letters"})]})]})},u={render:()=>e.jsxs("div",{className:"avatar-story-grid",children:[e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Alice Johnson",size:"lg",showStatus:!0,status:"online",src:"https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face"}),e.jsx("span",{children:"Online"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Bob Smith",size:"lg",showStatus:!0,status:"offline",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"}),e.jsx("span",{children:"Offline"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Carol Davis",size:"lg",showStatus:!0,status:"away",src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"}),e.jsx("span",{children:"Away"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"David Wilson",size:"lg",showStatus:!0,status:"busy",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"}),e.jsx("span",{children:"Busy"})]})]})},x={render:()=>e.jsxs("div",{className:"avatar-story-grid",children:[e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Loading User",size:"lg",loading:!0}),e.jsx("span",{children:"Loading Skeleton"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Image Loading",size:"lg",src:"https://via.placeholder.com/200x200?text=Loading..."}),e.jsx("span",{children:"Image Loading"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Slow Network",size:"lg",loading:!0,showStatus:!0,status:"online"}),e.jsx("span",{children:"Loading with Status"})]})]})},g={render:()=>e.jsxs("div",{className:"avatar-story-grid",children:[e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Broken Image",size:"lg",src:"https://invalid-url.example.com/broken.jpg"}),e.jsx("span",{children:"Broken Image → Initials"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{size:"lg"}),e.jsx("span",{children:"No Name/Image → Placeholder"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"",size:"lg",src:"https://invalid-url.example.com/broken.jpg"}),e.jsx("span",{children:"Empty Name → Placeholder"})]})]})},f={args:{name:"John Doe",size:"lg",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",onClick:()=>alert("Avatar clicked!"),showStatus:!0,status:"online"},parameters:{docs:{description:{story:"Clickable avatar with hover effects and focus states. Try clicking, hovering, and keyboard navigation."}}}},j={render:()=>e.jsxs("div",{className:"avatar-story-grid",children:[e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Disabled User",size:"lg",src:"https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face",disabled:!0,onClick:()=>alert("Should not fire")}),e.jsx("span",{children:"Disabled Image"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Disabled Initials",size:"lg",disabled:!0,onClick:()=>alert("Should not fire")}),e.jsx("span",{children:"Disabled Initials"})]}),e.jsxs("div",{className:"avatar-story-item",children:[e.jsx(r,{name:"Disabled Status",size:"lg",disabled:!0,showStatus:!0,status:"online",onClick:()=>alert("Should not fire")}),e.jsx("span",{children:"Disabled with Status"})]})]})},y={render:()=>e.jsxs("div",{className:"avatar-story-accessibility",children:[e.jsx("h3",{children:"Keyboard Navigation"}),e.jsx("p",{children:"Try using Tab, Enter, and Space keys to navigate and activate:"}),e.jsxs("div",{className:"avatar-story-grid",children:[e.jsx(r,{name:"Keyboard User 1",size:"lg",onClick:()=>alert("Avatar 1 activated"),"aria-label":"User profile for Keyboard User 1"}),e.jsx(r,{name:"Keyboard User 2",size:"lg",onClick:()=>alert("Avatar 2 activated"),"aria-label":"User profile for Keyboard User 2"}),e.jsx(r,{name:"Keyboard User 3",size:"lg",onClick:()=>alert("Avatar 3 activated"),"aria-label":"User profile for Keyboard User 3"})]}),e.jsx("h3",{children:"Screen Reader Support"}),e.jsx("p",{children:"Proper ARIA labels and roles for assistive technology:"}),e.jsxs("div",{className:"avatar-story-grid",children:[e.jsx(r,{name:"Screen Reader User",size:"lg",showStatus:!0,status:"online","aria-label":"Profile picture of Screen Reader User, currently online"}),e.jsx(r,{name:"Another User",size:"lg",showStatus:!0,status:"busy","aria-label":"Profile picture of Another User, currently busy"})]})]})},b={render:()=>e.jsxs("div",{className:"avatar-story-themes",children:[e.jsxs("div",{className:"avatar-story-theme","data-theme":"light",children:[e.jsx("h4",{children:"Light Theme"}),e.jsxs("div",{className:"avatar-story-grid",children:[e.jsx(r,{name:"Light User",size:"lg"}),e.jsx(r,{name:"Light Image",size:"lg",src:"https://images.unsplash.com/photo-1494790108755-2616b612b098?w=100&h=100&fit=crop&crop=face"}),e.jsx(r,{name:"Light Status",size:"lg",showStatus:!0,status:"online"})]})]}),e.jsxs("div",{className:"avatar-story-theme","data-theme":"dark",children:[e.jsx("h4",{children:"Dark Theme"}),e.jsxs("div",{className:"avatar-story-grid",children:[e.jsx(r,{name:"Dark User",size:"lg"}),e.jsx(r,{name:"Dark Image",size:"lg",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"}),e.jsx(r,{name:"Dark Status",size:"lg",showStatus:!0,status:"away"})]})]}),e.jsxs("div",{className:"avatar-story-theme","data-theme":"custom",children:[e.jsx("h4",{children:"Custom Theme"}),e.jsxs("div",{className:"avatar-story-grid",children:[e.jsx(r,{name:"Custom User",size:"lg"}),e.jsx(r,{name:"Custom Image",size:"lg",src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"}),e.jsx(r,{name:"Custom Status",size:"lg",showStatus:!0,status:"busy"})]})]})]}),parameters:{docs:{description:{story:"Avatar appearance across different themes. The component adapts colors and contrast automatically."}}}},N={render:()=>e.jsxs("div",{className:"avatar-story-comprehensive",children:[e.jsx("h3",{children:"Comprehensive Avatar Showcase"}),e.jsxs("div",{className:"avatar-story-section",children:[e.jsx("h4",{children:"Sizes with Images"}),e.jsx("div",{className:"avatar-story-grid",children:["xs","sm","md","lg","xl","2xl"].map(s=>e.jsx(r,{size:s,name:"User Name",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",showStatus:!0,status:"online"},s))})]}),e.jsxs("div",{className:"avatar-story-section",children:[e.jsx("h4",{children:"Shapes with Initials"}),e.jsx("div",{className:"avatar-story-grid",children:["circle","square","rounded"].map(s=>e.jsx(r,{shape:s,size:"lg",name:"Shape Demo",showStatus:!0,status:"busy"},s))})]}),e.jsxs("div",{className:"avatar-story-section",children:[e.jsx("h4",{children:"Interactive States"}),e.jsxs("div",{className:"avatar-story-grid",children:[e.jsx(r,{name:"Clickable",size:"lg",onClick:()=>alert("Clicked!"),showStatus:!0,status:"online"}),e.jsx(r,{name:"Disabled",size:"lg",disabled:!0,onClick:()=>alert("Should not fire"),showStatus:!0,status:"offline"}),e.jsx(r,{name:"Loading",size:"lg",loading:!0,showStatus:!0,status:"away"})]})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    alt: 'John Doe',
    name: 'John Doe'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="avatar-story-comprehensive">\r
      <h3>Comprehensive Avatar Showcase</h3>\r
      \r
      <div className="avatar-story-section">\r
        <h4>Sizes with Images</h4>\r
        <div className="avatar-story-grid">\r
          {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map(size => <Avatar key={size} size={size as any} name="User Name" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" showStatus status="online" />)}\r
        </div>\r
      </div>\r
      \r
      <div className="avatar-story-section">\r
        <h4>Shapes with Initials</h4>\r
        <div className="avatar-story-grid">\r
          {['circle', 'square', 'rounded'].map(shape => <Avatar key={shape} shape={shape as any} size="lg" name="Shape Demo" showStatus status="busy" />)}\r
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
}`,...N.parameters?.docs?.source}}};const ye=["Default","SizeVariants","ShapeVariants","InitialsFallback","CustomInitials","StatusIndicators","LoadingStates","ErrorHandling","Interactive","DisabledState","AccessibilityDemo","ThemeShowcase","AllFeaturesCombined"],Be=Object.freeze(Object.defineProperty({__proto__:null,AccessibilityDemo:y,AllFeaturesCombined:N,CustomInitials:v,Default:d,DisabledState:j,ErrorHandling:g,InitialsFallback:h,Interactive:f,LoadingStates:x,ShapeVariants:m,SizeVariants:p,StatusIndicators:u,ThemeShowcase:b,__namedExportsOrder:ye,default:je},Symbol.toStringTag,{value:"Module"})),be={title:"Atoms/Container",component:n,parameters:{layout:"fullscreen",docs:{description:{component:`
Container provides consistent max-width content wrappers with responsive behavior.
It supports different size variants and can render as different HTML elements.

**Key Features:**
- Multiple size variants (xs to 3xl)
- Responsive behavior with breakpoints
- Semantic HTML element support
- Optional padding control
- Centered content alignment
        `}}},argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl","2xl","full"],description:"Container size variant"},as:{control:{type:"select"},options:["div","main","section","article","aside","header","footer"],description:"HTML element to render"},padding:{control:{type:"select"},options:["none","xs","sm","md","lg","xl"],description:"Padding variant"},centered:{control:{type:"boolean"},description:"Whether to center the container"},className:{control:{type:"text"},description:"Additional CSS classes"}},args:{size:"lg",as:"div",padding:"md",centered:!0}},w={render:s=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx(n,{...s,children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"Container Content"}),e.jsx("p",{children:"This content is wrapped in a Container component. The container provides consistent max-width and centering for your content."}),e.jsx("p",{children:"Resize the viewport to see how the container responds to different screen sizes."})]})})})},S={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx("div",{className:"container-sizes-demo",children:["sm","md","lg","xl","2xl","full"].map(s=>e.jsxs("div",{className:"container-size-example",children:[e.jsxs("h3",{children:["Size: ",s]}),e.jsx(n,{size:s,children:e.jsxs("div",{className:"container-story-content container-story-content--compact",children:[e.jsx("strong",{children:s.toUpperCase()}),' - This container has size "',s,'"']})})]},s))})}),parameters:{docs:{description:{story:"Different container sizes from sm (640px) to full (100%)."}}}},z={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsxs("div",{className:"semantic-elements-demo",children:[e.jsx(n,{as:"header",size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"<header> Container"}),e.jsx("p",{children:"This container renders as a semantic header element."})]})}),e.jsx(n,{as:"main",size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"<main> Container"}),e.jsx("p",{children:"This container renders as a semantic main element."})]})}),e.jsx(n,{as:"section",size:"md",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h3",{children:"<section> Container"}),e.jsx("p",{children:"This container renders as a semantic section element."})]})}),e.jsx(n,{as:"footer",size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h3",{children:"<footer> Container"}),e.jsx("p",{children:"This container renders as a semantic footer element."})]})})]})}),parameters:{docs:{description:{story:"Containers can render as different semantic HTML elements while maintaining the same styling behavior."}}}},C={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsxs("div",{className:"padding-comparison",children:[e.jsxs("div",{className:"padding-example",children:[e.jsx("h3",{children:"Default Padding (md)"}),e.jsx(n,{size:"md",padding:"md",children:e.jsx("div",{className:"container-story-content container-story-content--highlighted",children:"This container has medium padding applied."})})]}),e.jsxs("div",{className:"padding-example",children:[e.jsx("h3",{children:"No Padding"}),e.jsx(n,{size:"md",padding:"none",children:e.jsx("div",{className:"container-story-content container-story-content--highlighted",children:"This container has no padding - content touches the edges."})})]}),e.jsxs("div",{className:"padding-example",children:[e.jsx("h3",{children:"Large Padding"}),e.jsx(n,{size:"md",padding:"xl",children:e.jsx("div",{className:"container-story-content container-story-content--highlighted",children:"This container has extra large padding applied."})})]})]})}),parameters:{docs:{description:{story:"Compare containers with different padding variants."}}}},D={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx(n,{size:"xl",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"Outer Container (XL)"}),e.jsx("p",{children:"This is the outer container with size XL."}),e.jsx(n,{size:"md",children:e.jsxs("div",{className:"container-story-content container-story-content--nested",children:[e.jsx("h3",{children:"Nested Container (MD)"}),e.jsx("p",{children:"This is a nested container with size MD inside the XL container."}),e.jsx(n,{size:"sm",padding:"none",children:e.jsxs("div",{className:"container-story-content container-story-content--nested",children:[e.jsx("h4",{children:"Deeply Nested Container (SM, No Padding)"}),e.jsx("p",{children:"This is a deeply nested container with size SM and no padding."})]})})]})})]})})}),parameters:{docs:{description:{story:"Containers can be nested to create complex layouts with different max-widths."}}}},A={render:()=>e.jsx("div",{className:"container-story-wrapper",children:e.jsx(n,{size:"lg",children:e.jsxs("div",{className:"container-story-content",children:[e.jsx("h2",{children:"Responsive Container Demo"}),e.jsx("p",{children:"This container will adjust its behavior at different breakpoints:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Mobile (< 640px):"})," Full width with minimal padding"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tablet (640px - 1024px):"})," Constrained width with more padding"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Desktop (> 1024px):"})," Full max-width with standard padding"]})]}),e.jsx("p",{children:"Try resizing your browser window or use the viewport controls in Storybook to see the responsive behavior."}),e.jsxs("div",{className:"responsive-indicator",children:[e.jsx("span",{className:"mobile-indicator",children:"📱 Mobile View"}),e.jsx("span",{className:"tablet-indicator",children:"📟 Tablet View"}),e.jsx("span",{className:"desktop-indicator",children:"💻 Desktop View"})]})]})})}),parameters:{docs:{description:{story:"Demonstration of responsive behavior across different viewport sizes."}}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div className="container-story-wrapper">\r
      <Container {...args}>\r
        <div className="container-story-content">\r
          <h2>Container Content</h2>\r
          <p>This content is wrapped in a Container component. The container provides consistent max-width and centering for your content.</p>\r
          <p>Resize the viewport to see how the container responds to different screen sizes.</p>\r
        </div>\r
      </Container>\r
    </div>
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};const Ne=["Default","AllSizes","SemanticElements","PaddingVariants","NestedContainers","ResponsiveDemo"],Fe=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:S,Default:w,NestedContainers:D,PaddingVariants:C,ResponsiveDemo:A,SemanticElements:z,__namedExportsOrder:Ne,default:be},Symbol.toStringTag,{value:"Module"})),we={title:"Atoms/Divider",component:a,parameters:{layout:"padded",docs:{description:{component:"A versatile divider component for creating visual separation between sections with various styles, colors, and orientations."}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of the divider"},variant:{control:"select",options:["solid","dashed","dotted","double","gradient"],description:"Visual style of the divider"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size/thickness of the divider"},color:{control:"select",options:["neutral","primary","secondary","success","warning","error","info"],description:"Color variant"},customColor:{control:"color",description:"Custom color (overrides color variant)"},spacing:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"Spacing around the divider"},label:{control:"text",description:"Text content to display in the center of horizontal dividers"},labelPosition:{control:"select",options:["left","center","right"],description:"Label position for horizontal dividers"},length:{control:"text",description:"Custom width for horizontal dividers or height for vertical"},fullWidth:{control:"boolean",description:"Whether the divider should span the full available space"},fade:{control:"boolean",description:"Fade effect at the ends"}}},k={args:{orientation:"horizontal",variant:"solid",size:"md",color:"neutral",spacing:"md",fullWidth:!0}},L={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",height:"300px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 1rem 0"},children:"Horizontal Divider"}),e.jsx("p",{children:"Content above the divider"}),e.jsx(a,{orientation:"horizontal"}),e.jsx("p",{children:"Content below the divider"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",height:"100px"},children:[e.jsx("div",{children:"Content on the left"}),e.jsx(a,{orientation:"vertical"}),e.jsx("div",{children:"Content on the right"})]})]})},I={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Solid"}),e.jsx(a,{variant:"solid"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Dashed"}),e.jsx(a,{variant:"dashed"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Dotted"}),e.jsx(a,{variant:"dotted"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Double"}),e.jsx(a,{variant:"double"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Gradient"}),e.jsx(a,{variant:"gradient"})]})]})},R={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Extra Small (xs)"}),e.jsx(a,{size:"xs"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Small (sm)"}),e.jsx(a,{size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Medium (md)"}),e.jsx(a,{size:"md"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large (lg)"}),e.jsx(a,{size:"lg"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Extra Large (xl)"}),e.jsx(a,{size:"xl"})]})]})},T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Neutral"}),e.jsx(a,{color:"neutral"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Primary"}),e.jsx(a,{color:"primary"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Secondary"}),e.jsx(a,{color:"secondary"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Success"}),e.jsx(a,{color:"success"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Warning"}),e.jsx(a,{color:"warning"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Error"}),e.jsx(a,{color:"error"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Info"}),e.jsx(a,{color:"info"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Custom Color"}),e.jsx(a,{customColor:"#9333ea"})]})]})},B={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Center Label (Default)"}),e.jsx("p",{children:"Content above"}),e.jsx(a,{label:"Section Break"}),e.jsx("p",{children:"Content below"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Left Label"}),e.jsx("p",{children:"Content above"}),e.jsx(a,{label:"New Section",labelPosition:"left"}),e.jsx("p",{children:"Content below"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Right Label"}),e.jsx("p",{children:"Content above"}),e.jsx(a,{label:"End Section",labelPosition:"right"}),e.jsx("p",{children:"Content below"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Styled Label"}),e.jsx("p",{children:"Content above"}),e.jsx(a,{label:"Important Section",variant:"dashed",color:"primary"}),e.jsx("p",{children:"Content below"})]})]})},F={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"No Spacing"}),e.jsx("p",{children:"Content above"}),e.jsx(a,{spacing:"none"}),e.jsx("p",{children:"Content below"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Small Spacing"}),e.jsx("p",{children:"Content above"}),e.jsx(a,{spacing:"sm"}),e.jsx("p",{children:"Content below"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large Spacing"}),e.jsx("p",{children:"Content above"}),e.jsx(a,{spacing:"lg"}),e.jsx("p",{children:"Content below"})]})]})},E={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center"},children:[e.jsxs("div",{style:{width:"100%",textAlign:"center"},children:[e.jsx("h4",{children:"Custom Width - 200px"}),e.jsx(a,{length:"200px",fullWidth:!1})]}),e.jsxs("div",{style:{width:"100%",textAlign:"center"},children:[e.jsx("h4",{children:"Custom Width - 50%"}),e.jsx(a,{length:"50%",fullWidth:!1})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",height:"150px"},children:[e.jsx("div",{children:"Left content"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"0.875rem",marginBottom:"0.5rem"},children:"Custom Height - 100px"}),e.jsx(a,{orientation:"vertical",length:"100px"})]}),e.jsx("div",{children:"Right content"})]})]})},P={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Normal Divider"}),e.jsx(a,{})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Fade Effect"}),e.jsx(a,{fade:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Gradient with Fade"}),e.jsx(a,{variant:"gradient",fade:!0,color:"primary"})]})]})},M={render:()=>e.jsxs("div",{style:{maxWidth:"600px",margin:"0 auto"},children:[e.jsxs("header",{style:{textAlign:"center",padding:"1rem 0"},children:[e.jsx("h1",{children:"Article Title"}),e.jsx("p",{children:"By Author Name"})]}),e.jsx(a,{variant:"double",color:"primary",spacing:"lg"}),e.jsxs("section",{style:{padding:"1rem 0"},children:[e.jsx("h2",{children:"Introduction"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."})]}),e.jsx(a,{label:"Main Content",variant:"dashed",spacing:"md"}),e.jsxs("section",{style:{padding:"1rem 0"},children:[e.jsx("h2",{children:"Main Section"}),e.jsx("p",{children:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."}),e.jsx(a,{variant:"dotted",spacing:"sm",length:"50%",fullWidth:!1}),e.jsx("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation..."})]}),e.jsx(a,{label:"Conclusion",labelPosition:"right",color:"success"}),e.jsxs("section",{style:{padding:"1rem 0"},children:[e.jsx("h2",{children:"Conclusion"}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse..."})]}),e.jsx(a,{variant:"gradient",fade:!0,spacing:"xl"}),e.jsx("footer",{style:{textAlign:"center",padding:"1rem 0",color:"#666"},children:e.jsx("p",{children:"© 2025 Example Publication"})})]})};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'neutral',
    spacing: 'md',
    fullWidth: true
  }
}`,...k.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};const Se=["Default","Orientations","StyleVariants","SizeVariants","ColorVariants","WithLabels","SpacingVariants","CustomLengths","FadeEffect","ComplexLayout"],Ee=Object.freeze(Object.defineProperty({__proto__:null,ColorVariants:T,ComplexLayout:M,CustomLengths:E,Default:k,FadeEffect:P,Orientations:L,SizeVariants:R,SpacingVariants:F,StyleVariants:I,WithLabels:B,__namedExportsOrder:Se,default:we},Symbol.toStringTag,{value:"Module"})),ze={title:"Atoms/Image",component:t,parameters:{layout:"padded",docs:{description:{component:"A responsive image component with loading states, error handling, and various display options."}}},argTypes:{src:{control:"text",description:"Image source URL"},alt:{control:"text",description:"Alternative text for accessibility"},aspectRatio:{control:"select",options:["1:1","16:9","4:3","3:2","21:9","auto"],description:"Aspect ratio of the image"},objectFit:{control:"select",options:["cover","contain","fill","scale-down","none"],description:"Object fit behavior"},objectPosition:{control:"select",options:["center","top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"],description:"Object position"},fallbackSrc:{control:"text",description:"Fallback image URL"},loading:{control:"select",options:["lazy","eager"],description:"Loading behavior"},blurPlaceholder:{control:"boolean",description:"Blur placeholder while loading"},showSpinner:{control:"boolean",description:"Show loading spinner"},zoomOnHover:{control:"boolean",description:"Zoom on hover"},rounded:{control:"select",options:[!1,!0,"sm","md","lg","xl","full"],description:"Rounded corners"},border:{control:"select",options:[!1,!0,"sm","md","lg"],description:"Border variant"},shadow:{control:"select",options:[!1,!0,"sm","md","lg","xl"],description:"Shadow variant"},fadeIn:{control:"boolean",description:"Fade in animation on load"}}},q={args:{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",alt:"Beautiful landscape",aspectRatio:"16:9",width:400}},U={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Square (1:1)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Square image",aspectRatio:"1:1",width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Widescreen (16:9)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",alt:"Widescreen image",aspectRatio:"16:9",width:300})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Standard (4:3)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Standard image",aspectRatio:"4:3",width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Cinema (21:9)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",alt:"Cinema image",aspectRatio:"21:9",width:350})]})]})},O={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Cover (Default)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Cover fit",aspectRatio:"1:1",objectFit:"cover",width:150})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Contain"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Contain fit",aspectRatio:"1:1",objectFit:"contain",width:150})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Fill"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Fill fit",aspectRatio:"1:1",objectFit:"fill",width:150})]})]})},_={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"No Rounding"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Small"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",rounded:"sm",width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Medium"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",rounded:"md",width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Large"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",rounded:"lg",width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Full (Circle)"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",rounded:"full",width:120})]})]})},W={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Border"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",border:!0,width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Shadow"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",shadow:!0,width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Large Shadow"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",shadow:"lg",width:120})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Combined"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Profile",aspectRatio:"1:1",rounded:"lg",border:"md",shadow:"md",width:120})]})]})},H={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Zoom on Hover"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Hover to zoom",aspectRatio:"16:9",zoomOnHover:!0,rounded:"md",width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"With Fade Animation"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Fade in animation",aspectRatio:"16:9",fadeIn:!0,rounded:"md",width:200})]})]})},V={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Broken Image (Default Error)"}),e.jsx(t,{src:"https://broken-url-that-will-fail.jpg",alt:"Broken image",aspectRatio:"16:9",width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"With Fallback"}),e.jsx(t,{src:"https://broken-url-that-will-fail.jpg",fallbackSrc:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",alt:"Image with fallback",aspectRatio:"16:9",width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Custom Error Content"}),e.jsx(t,{src:"https://broken-url-that-will-fail.jpg",alt:"Custom error",aspectRatio:"16:9",width:200,errorContent:e.jsxs("div",{className:"image-error-custom",children:[e.jsx("div",{className:"image-error-custom-icon",children:"⚠️"}),e.jsx("div",{children:"Custom error message"})]})})]})]})},J={render:()=>e.jsxs("div",{className:"story-grid",children:[e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"With Spinner"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",alt:"Loading with spinner",aspectRatio:"16:9",showSpinner:!0,width:200})]}),e.jsxs("div",{className:"story-item",children:[e.jsx("h4",{children:"Custom Placeholder"}),e.jsx(t,{src:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",alt:"Custom placeholder",aspectRatio:"16:9",width:200,placeholder:e.jsxs("div",{className:"image-placeholder-custom",children:[e.jsx("div",{className:"image-placeholder-custom-icon",children:"🖼️"}),e.jsx("div",{children:"Loading image..."})]})})]})]})};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Beautiful landscape',
    aspectRatio: '16:9',
    width: 400
  }
}`,...q.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">\r
      <div className="story-item">\r
        <h4>Square (1:1)</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Square image" aspectRatio="1:1" width={200} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Widescreen (16:9)</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Widescreen image" aspectRatio="16:9" width={300} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Standard (4:3)</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Standard image" aspectRatio="4:3" width={200} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Cinema (21:9)</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Cinema image" aspectRatio="21:9" width={350} />\r
      </div>\r
    </div>
}`,...U.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">\r
      <div className="story-item">\r
        <h4>Cover (Default)</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Cover fit" aspectRatio="1:1" objectFit="cover" width={150} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Contain</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Contain fit" aspectRatio="1:1" objectFit="contain" width={150} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Fill</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Fill fit" aspectRatio="1:1" objectFit="fill" width={150} />\r
      </div>\r
    </div>
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">\r
      <div className="story-item">\r
        <h4>No Rounding</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" width={120} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Small</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" rounded="sm" width={120} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Medium</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" rounded="md" width={120} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Large</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" rounded="lg" width={120} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Full (Circle)</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" rounded="full" width={120} />\r
      </div>\r
    </div>
}`,..._.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">\r
      <div className="story-item">\r
        <h4>Border</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" border width={120} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Shadow</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" shadow width={120} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Large Shadow</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" shadow="lg" width={120} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Combined</h4>\r
        <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Profile" aspectRatio="1:1" rounded="lg" border="md" shadow="md" width={120} />\r
      </div>\r
    </div>
}`,...W.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">\r
      <div className="story-item">\r
        <h4>Zoom on Hover</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Hover to zoom" aspectRatio="16:9" zoomOnHover rounded="md" width={200} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>With Fade Animation</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Fade in animation" aspectRatio="16:9" fadeIn rounded="md" width={200} />\r
      </div>\r
    </div>
}`,...H.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">\r
      <div className="story-item">\r
        <h4>Broken Image (Default Error)</h4>\r
        <Image src="https://broken-url-that-will-fail.jpg" alt="Broken image" aspectRatio="16:9" width={200} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>With Fallback</h4>\r
        <Image src="https://broken-url-that-will-fail.jpg" fallbackSrc="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Image with fallback" aspectRatio="16:9" width={200} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Custom Error Content</h4>\r
        <Image src="https://broken-url-that-will-fail.jpg" alt="Custom error" aspectRatio="16:9" width={200} errorContent={<div className="image-error-custom">\r
              <div className="image-error-custom-icon">⚠️</div>\r
              <div>Custom error message</div>\r
            </div>} />\r
      </div>\r
    </div>
}`,...V.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">\r
      <div className="story-item">\r
        <h4>With Spinner</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Loading with spinner" aspectRatio="16:9" showSpinner width={200} />\r
      </div>\r
      \r
      <div className="story-item">\r
        <h4>Custom Placeholder</h4>\r
        <Image src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Custom placeholder" aspectRatio="16:9" width={200} placeholder={<div className="image-placeholder-custom">\r
              <div className="image-placeholder-custom-icon">🖼️</div>\r
              <div>Loading image...</div>\r
            </div>} />\r
      </div>\r
    </div>
}`,...J.parameters?.docs?.source}}};const Ce=["Default","AspectRatios","ObjectFitOptions","RoundedVariants","BordersAndShadows","InteractiveFeatures","ErrorHandling","LoadingStates"],Pe=Object.freeze(Object.defineProperty({__proto__:null,AspectRatios:U,BordersAndShadows:W,Default:q,ErrorHandling:V,InteractiveFeatures:H,LoadingStates:J,ObjectFitOptions:O,RoundedVariants:_,__namedExportsOrder:Ce,default:ze},Symbol.toStringTag,{value:"Module"})),c=[{value:"apple",label:"Apple",description:"A crisp, sweet fruit"},{value:"banana",label:"Banana",description:"A curved yellow fruit"},{value:"orange",label:"Orange",description:"A citrus fruit"},{value:"grape",label:"Grape",description:"Small round fruits in clusters"},{value:"strawberry",label:"Strawberry",description:"Sweet red berries",disabled:!0},{value:"mango",label:"Mango",description:"Tropical sweet fruit"},{value:"pineapple",label:"Pineapple",description:"Tropical spiky fruit"},{value:"watermelon",label:"Watermelon",description:"Large juicy fruit"}],ge=[{value:"us",label:"United States",description:"North America"},{value:"ca",label:"Canada",description:"North America"},{value:"uk",label:"United Kingdom",description:"Europe"},{value:"de",label:"Germany",description:"Europe"},{value:"fr",label:"France",description:"Europe"},{value:"jp",label:"Japan",description:"Asia"},{value:"au",label:"Australia",description:"Oceania"},{value:"br",label:"Brazil",description:"South America"}],De=[{value:"active",label:"Active",description:"Currently active and available",icon:e.jsx("div",{className:"status-icon status-icon--active"})},{value:"inactive",label:"Inactive",description:"Currently inactive",icon:e.jsx("div",{className:"status-icon status-icon--inactive"})},{value:"pending",label:"Pending",description:"Awaiting approval",icon:e.jsx("div",{className:"status-icon status-icon--pending"})},{value:"suspended",label:"Suspended",description:"Temporarily suspended",icon:e.jsx("div",{className:"status-icon status-icon--suspended"}),disabled:!0}],Ae={title:"Atoms/ListBox",component:l,parameters:{layout:"padded",docs:{description:{component:`
ListBox is a versatile selection component that displays a list of options with full keyboard navigation and accessibility support.

**Key Features:**
- Single and multiple selection modes
- Keyboard navigation (Arrow keys, Home, End, Enter, Space)
- Search functionality with custom filtering
- Loading and error states
- Option icons and descriptions
- Size variants (sm, md, lg)
- Full accessibility with ARIA attributes
- Custom styling and theming support
        `}}},argTypes:{options:{control:{type:"object"},description:"Array of options to display"},value:{control:{type:"text"},description:"Currently selected value(s)"},multiple:{control:{type:"boolean"},description:"Allow multiple selection"},disabled:{control:{type:"boolean"},description:"Disable the entire listbox"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size variant"},maxHeight:{control:{type:"text"},description:"Maximum height before scrolling"},searchable:{control:{type:"boolean"},description:"Enable search functionality"},searchPlaceholder:{control:{type:"text"},description:"Search input placeholder"},showDescriptions:{control:{type:"boolean"},description:"Show option descriptions"},showIcons:{control:{type:"boolean"},description:"Show option icons"},loading:{control:{type:"boolean"},description:"Show loading state"},error:{control:{type:"text"},description:"Error message to display"},emptyMessage:{control:{type:"text"},description:"Message when no options available"},autoFocus:{control:{type:"boolean"},description:"Auto-focus first option"}},args:{options:c,multiple:!1,disabled:!1,size:"md",maxHeight:"200px",searchable:!1,showDescriptions:!0,showIcons:!0,loading:!1,emptyMessage:"No options available",autoFocus:!1}},o={args:{onChange:s=>{console.log("Selection changed:",s)}}},K={args:{...o.args,value:"apple"},parameters:{docs:{description:{story:"Single selection mode with pre-selected value."}}}},$={args:{...o.args,multiple:!0,value:["apple","orange"]},parameters:{docs:{description:{story:"Multiple selection mode with checkboxes."}}}},G={args:{...o.args,searchable:!0,searchPlaceholder:"Search fruits..."},parameters:{docs:{description:{story:"ListBox with search functionality to filter options."}}}},X={args:{...o.args,options:De,showIcons:!0,value:"active"},parameters:{docs:{description:{story:"ListBox with custom icons for each option."}}}},Y={render:()=>e.jsx("div",{className:"listbox-story-wrapper",children:e.jsxs("div",{className:"size-variants-demo",children:[e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Small Size"}),e.jsx(l,{options:c.slice(0,4),size:"sm",onChange:s=>console.log("Small:",s)})]}),e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Medium Size (Default)"}),e.jsx(l,{options:c.slice(0,4),size:"md",onChange:s=>console.log("Medium:",s)})]}),e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Large Size"}),e.jsx(l,{options:c.slice(0,4),size:"lg",onChange:s=>console.log("Large:",s)})]})]})}),parameters:{docs:{description:{story:"Different size variants of the ListBox component."}}}},Z={args:{...o.args,loading:!0,options:[]},parameters:{docs:{description:{story:"ListBox in loading state with animated spinner."}}}},Q={args:{...o.args,error:"Failed to load options. Please try again.",options:[]},parameters:{docs:{description:{story:"ListBox displaying an error message."}}}},ee={args:{...o.args,options:[],emptyMessage:"No fruits available"},parameters:{docs:{description:{story:"ListBox with no options and custom empty message."}}}},re={args:{...o.args,disabled:!0,value:"apple"},parameters:{docs:{description:{story:"ListBox in disabled state."}}}},se={args:{...o.args,showDescriptions:!1},parameters:{docs:{description:{story:"ListBox without option descriptions for a cleaner look."}}}},ae={args:{...o.args,maxHeight:"150px",options:[...c,...ge]},parameters:{docs:{description:{story:"ListBox with custom maximum height and scrolling."}}}},ie={args:{...o.args,multiple:!0,searchable:!0,searchPlaceholder:"Search countries...",options:ge,value:["us","ca"]},parameters:{docs:{description:{story:"Combination of multiple selection and search functionality."}}}},te={args:{...o.args,autoFocus:!0,options:c.slice(0,5)},parameters:{docs:{description:{story:"ListBox with auto-focus on the first option for keyboard users."}}}},oe={render:()=>e.jsx("div",{className:"listbox-story-wrapper",children:e.jsxs("div",{className:"keyboard-demo",children:[e.jsx("h3",{children:"Keyboard Navigation Demo"}),e.jsx("p",{children:"Use these keyboard shortcuts to navigate:"}),e.jsxs("ul",{className:"keyboard-shortcuts",children:[e.jsxs("li",{children:[e.jsx("kbd",{children:"↑"})," ",e.jsx("kbd",{children:"↓"})," - Navigate up/down"]}),e.jsxs("li",{children:[e.jsx("kbd",{children:"Home"})," - Go to first option"]}),e.jsxs("li",{children:[e.jsx("kbd",{children:"End"})," - Go to last option"]}),e.jsxs("li",{children:[e.jsx("kbd",{children:"Enter"})," ",e.jsx("kbd",{children:"Space"})," - Select option"]}),e.jsxs("li",{children:[e.jsx("kbd",{children:"Escape"})," - Clear search (if searchable)"]})]}),e.jsx(l,{options:c,searchable:!0,autoFocus:!0,onChange:s=>console.log("Keyboard selection:",s)})]})}),parameters:{docs:{description:{story:"Demonstration of keyboard navigation capabilities."}}}},ne={args:{...o.args,searchable:!0,searchPlaceholder:"Search by name or description...",filterFunction:(s,fe)=>{const xe=fe.toLowerCase();return s.label.toLowerCase().includes(xe)||s.description&&s.description.toLowerCase().includes(xe)||s.value.toString().toLowerCase().includes(xe)}},parameters:{docs:{description:{story:"ListBox with custom filter function that searches multiple fields."}}}},ce={render:()=>e.jsx("div",{className:"listbox-story-wrapper",children:e.jsxs("div",{className:"real-world-demo",children:[e.jsx("h3",{children:"User Role Selection"}),e.jsx("p",{children:"Select one or more roles for the user:"}),e.jsx(l,{options:[{value:"admin",label:"Administrator",description:"Full system access and user management",icon:e.jsx("div",{className:"role-icon role-icon--admin",children:"👑"})},{value:"editor",label:"Editor",description:"Can create, edit, and publish content",icon:e.jsx("div",{className:"role-icon role-icon--editor",children:"✏️"})},{value:"author",label:"Author",description:"Can create and edit own content",icon:e.jsx("div",{className:"role-icon role-icon--author",children:"📝"})},{value:"viewer",label:"Viewer",description:"Read-only access to content",icon:e.jsx("div",{className:"role-icon role-icon--viewer",children:"👁️"})},{value:"guest",label:"Guest",description:"Limited temporary access",icon:e.jsx("div",{className:"role-icon role-icon--guest",children:"👤"}),disabled:!0}],multiple:!0,searchable:!0,searchPlaceholder:"Search roles...",value:["editor"],size:"lg",maxHeight:"250px",onChange:s=>{console.log("Selected roles:",s)}})]})}),parameters:{docs:{description:{story:"Real-world example of a role selection interface."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: value => {
      console.log('Selection changed:', value);
    }
  }
}`,...o.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'apple'
  },
  parameters: {
    docs: {
      description: {
        story: 'Single selection mode with pre-selected value.'
      }
    }
  }
}`,...K.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    multiple: true,
    value: ['apple', 'orange']
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple selection mode with checkboxes.'
      }
    }
  }
}`,...$.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    searchable: true,
    searchPlaceholder: 'Search fruits...'
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox with search functionality to filter options.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: statusOptions,
    showIcons: true,
    value: 'active'
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox with custom icons for each option.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="listbox-story-wrapper">\r
      <div className="size-variants-demo">\r
        <div className="size-example">\r
          <h3>Small Size</h3>\r
          <ListBox options={fruitOptions.slice(0, 4)} size="sm" onChange={value => console.log('Small:', value)} />\r
        </div>\r
        \r
        <div className="size-example">\r
          <h3>Medium Size (Default)</h3>\r
          <ListBox options={fruitOptions.slice(0, 4)} size="md" onChange={value => console.log('Medium:', value)} />\r
        </div>\r
        \r
        <div className="size-example">\r
          <h3>Large Size</h3>\r
          <ListBox options={fruitOptions.slice(0, 4)} size="lg" onChange={value => console.log('Large:', value)} />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the ListBox component.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    options: []
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox in loading state with animated spinner.'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: 'Failed to load options. Please try again.',
    options: []
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox displaying an error message.'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: [],
    emptyMessage: 'No fruits available'
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox with no options and custom empty message.'
      }
    }
  }
}`,...ee.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    value: 'apple'
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox in disabled state.'
      }
    }
  }
}`,...re.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showDescriptions: false
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox without option descriptions for a cleaner look.'
      }
    }
  }
}`,...se.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxHeight: '150px',
    options: [...fruitOptions, ...countryOptions]
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox with custom maximum height and scrolling.'
      }
    }
  }
}`,...ae.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    multiple: true,
    searchable: true,
    searchPlaceholder: 'Search countries...',
    options: countryOptions,
    value: ['us', 'ca']
  },
  parameters: {
    docs: {
      description: {
        story: 'Combination of multiple selection and search functionality.'
      }
    }
  }
}`,...ie.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    autoFocus: true,
    options: fruitOptions.slice(0, 5)
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox with auto-focus on the first option for keyboard users.'
      }
    }
  }
}`,...te.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  render: () => <div className="listbox-story-wrapper">\r
      <div className="keyboard-demo">\r
        <h3>Keyboard Navigation Demo</h3>\r
        <p>Use these keyboard shortcuts to navigate:</p>\r
        <ul className="keyboard-shortcuts">\r
          <li><kbd>↑</kbd> <kbd>↓</kbd> - Navigate up/down</li>\r
          <li><kbd>Home</kbd> - Go to first option</li>\r
          <li><kbd>End</kbd> - Go to last option</li>\r
          <li><kbd>Enter</kbd> <kbd>Space</kbd> - Select option</li>\r
          <li><kbd>Escape</kbd> - Clear search (if searchable)</li>\r
        </ul>\r
        \r
        <ListBox options={fruitOptions} searchable autoFocus onChange={value => console.log('Keyboard selection:', value)} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of keyboard navigation capabilities.'
      }
    }
  }
}`,...oe.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    searchable: true,
    searchPlaceholder: 'Search by name or description...',
    filterFunction: (option, searchTerm) => {
      const term = searchTerm.toLowerCase();
      return option.label.toLowerCase().includes(term) || option.description && option.description.toLowerCase().includes(term) || option.value.toString().toLowerCase().includes(term);
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox with custom filter function that searches multiple fields.'
      }
    }
  }
}`,...ne.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  render: () => <div className="listbox-story-wrapper">\r
      <div className="real-world-demo">\r
        <h3>User Role Selection</h3>\r
        <p>Select one or more roles for the user:</p>\r
        \r
        <ListBox options={[{
        value: 'admin',
        label: 'Administrator',
        description: 'Full system access and user management',
        icon: <div className="role-icon role-icon--admin">👑</div>
      }, {
        value: 'editor',
        label: 'Editor',
        description: 'Can create, edit, and publish content',
        icon: <div className="role-icon role-icon--editor">✏️</div>
      }, {
        value: 'author',
        label: 'Author',
        description: 'Can create and edit own content',
        icon: <div className="role-icon role-icon--author">📝</div>
      }, {
        value: 'viewer',
        label: 'Viewer',
        description: 'Read-only access to content',
        icon: <div className="role-icon role-icon--viewer">👁️</div>
      }, {
        value: 'guest',
        label: 'Guest',
        description: 'Limited temporary access',
        icon: <div className="role-icon role-icon--guest">👤</div>,
        disabled: true
      }]} multiple searchable searchPlaceholder="Search roles..." value={['editor']} size="lg" maxHeight="250px" onChange={value => {
        console.log('Selected roles:', value);
      }} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Real-world example of a role selection interface.'
      }
    }
  }
}`,...ce.parameters?.docs?.source}}};const ke=["Default","SingleSelection","MultipleSelection","WithSearch","WithIcons","SizeVariants","LoadingState","ErrorState","EmptyState","DisabledState","WithoutDescriptions","CustomMaxHeight","SearchableMultiple","AutoFocused","KeyboardNavigation","CustomFiltering","RealWorldExample"],Me=Object.freeze(Object.defineProperty({__proto__:null,AutoFocused:te,CustomFiltering:ne,CustomMaxHeight:ae,Default:o,DisabledState:re,EmptyState:ee,ErrorState:Q,KeyboardNavigation:oe,LoadingState:Z,MultipleSelection:$,RealWorldExample:ce,SearchableMultiple:ie,SingleSelection:K,SizeVariants:Y,WithIcons:X,WithSearch:G,WithoutDescriptions:se,__namedExportsOrder:ke,default:Ae},Symbol.toStringTag,{value:"Module"})),Le={title:"Atoms/Spacer",component:i,parameters:{layout:"padded",docs:{description:{component:`
Spacer provides consistent spacing between elements in layouts.
It supports different directions (vertical, horizontal, both) and flexible sizing.

**Key Features:**
- Seven size variants (xs to 3xl)
- Directional spacing (vertical, horizontal, both)
- Flexible growth option
- Responsive behavior
- Semantic HTML element support
        `}}},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl","3xl"],description:"Spacer size variant"},direction:{control:{type:"select"},options:["vertical","horizontal","both"],description:"Spacing direction"},flexible:{control:{type:"boolean"},description:"Allow flexible growth"},className:{control:{type:"text"},description:"Additional CSS classes"},spacing:{control:{type:"text"},description:"Custom spacing value"}},args:{size:"md",direction:"vertical",flexible:!1}},le={render:s=>e.jsxs("div",{className:"spacer-story-wrapper",children:[e.jsx("div",{className:"spacer-demo-content",children:"Content Above"}),e.jsx(i,{...s}),e.jsx("div",{className:"spacer-demo-content",children:"Content Below"})]})},de={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsx("div",{className:"spacer-sizes-demo",children:["xs","sm","md","lg","xl","2xl","3xl"].map(s=>e.jsxs("div",{className:"spacer-size-example",children:[e.jsxs("div",{className:"spacer-demo-content",children:["Before ",s.toUpperCase()]}),e.jsx(i,{size:s,direction:"vertical"}),e.jsxs("div",{className:"spacer-demo-content",children:["After ",s.toUpperCase()]})]},s))})}),parameters:{docs:{description:{story:"Different vertical spacer sizes from xs (0.25rem) to 3xl (4rem)."}}}},pe={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsx("div",{className:"spacer-horizontal-demo",children:["xs","sm","md","lg","xl","2xl","3xl"].map(s=>e.jsxs("div",{className:"spacer-horizontal-example",children:[e.jsx("div",{className:"spacer-demo-label",children:s.toUpperCase()}),e.jsxs("div",{className:"spacer-horizontal-container",children:[e.jsx("span",{className:"spacer-demo-content",children:"Before"}),e.jsx(i,{size:s,direction:"horizontal"}),e.jsx("span",{className:"spacer-demo-content",children:"After"})]})]},s))})}),parameters:{docs:{description:{story:"Different horizontal spacer sizes for inline content."}}}},me={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsxs("div",{className:"direction-variants-demo",children:[e.jsxs("div",{className:"direction-example",children:[e.jsx("h3",{children:"Vertical Spacing"}),e.jsx("div",{className:"spacer-demo-content",children:"First Element"}),e.jsx(i,{size:"lg",direction:"vertical"}),e.jsx("div",{className:"spacer-demo-content",children:"Second Element"}),e.jsx(i,{size:"lg",direction:"vertical"}),e.jsx("div",{className:"spacer-demo-content",children:"Third Element"})]}),e.jsxs("div",{className:"direction-example",children:[e.jsx("h3",{children:"Horizontal Spacing"}),e.jsxs("div",{className:"horizontal-layout",children:[e.jsx("span",{className:"spacer-demo-content",children:"First"}),e.jsx(i,{size:"lg",direction:"horizontal"}),e.jsx("span",{className:"spacer-demo-content",children:"Second"}),e.jsx(i,{size:"lg",direction:"horizontal"}),e.jsx("span",{className:"spacer-demo-content",children:"Third"})]})]}),e.jsxs("div",{className:"direction-example",children:[e.jsx("h3",{children:"Both Directions"}),e.jsxs("div",{className:"both-directions-layout",children:[e.jsx("div",{className:"spacer-demo-content",children:"Corner 1"}),e.jsx(i,{size:"lg",direction:"both"}),e.jsx("div",{className:"spacer-demo-content",children:"Corner 2"})]})]})]})}),parameters:{docs:{description:{story:"Spacer can create spacing in vertical, horizontal, or both directions."}}}},he={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsxs("div",{className:"flexible-demo",children:[e.jsxs("div",{className:"flexible-example",children:[e.jsx("h3",{children:"Fixed vs Flexible Vertical"}),e.jsxs("div",{className:"flexible-container vertical",children:[e.jsx("div",{className:"spacer-demo-content",children:"Top Content"}),e.jsx(i,{size:"md",direction:"vertical",flexible:!0}),e.jsx("div",{className:"spacer-demo-content",children:"Pushed to Bottom"})]})]}),e.jsxs("div",{className:"flexible-example",children:[e.jsx("h3",{children:"Fixed vs Flexible Horizontal"}),e.jsxs("div",{className:"flexible-container horizontal",children:[e.jsx("span",{className:"spacer-demo-content",children:"Left"}),e.jsx(i,{size:"md",direction:"horizontal",flexible:!0}),e.jsx("span",{className:"spacer-demo-content",children:"Right"})]})]})]})}),parameters:{docs:{description:{story:"Flexible spacers grow to fill available space, useful for layouts."}}}},ve={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsxs("div",{className:"layout-examples",children:[e.jsxs("div",{className:"layout-example",children:[e.jsx("h3",{children:"Card Layout with Consistent Spacing"}),e.jsx("div",{className:"card-layout",children:e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"Card Title"}),e.jsx(i,{size:"sm",direction:"vertical"}),e.jsx("p",{children:"Card content goes here with consistent spacing."}),e.jsx(i,{size:"md",direction:"vertical"}),e.jsxs("div",{className:"card-actions",children:[e.jsx("button",{className:"demo-button",children:"Action 1"}),e.jsx(i,{size:"sm",direction:"horizontal"}),e.jsx("button",{className:"demo-button",children:"Action 2"})]})]})})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx("h3",{children:"Navigation Bar"}),e.jsx("div",{className:"nav-layout",children:e.jsxs("div",{className:"demo-nav",children:[e.jsx("span",{className:"nav-brand",children:"Brand"}),e.jsx(i,{size:"md",direction:"horizontal",flexible:!0}),e.jsx("span",{className:"nav-item",children:"Home"}),e.jsx(i,{size:"sm",direction:"horizontal"}),e.jsx("span",{className:"nav-item",children:"About"}),e.jsx(i,{size:"sm",direction:"horizontal"}),e.jsx("span",{className:"nav-item",children:"Contact"})]})})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx("h3",{children:"Sidebar Layout"}),e.jsx("div",{className:"sidebar-layout",children:e.jsxs("div",{className:"demo-sidebar",children:[e.jsx("div",{className:"sidebar-header",children:"Menu"}),e.jsx(i,{size:"md",direction:"vertical"}),e.jsx("div",{className:"sidebar-item",children:"Item 1"}),e.jsx(i,{size:"xs",direction:"vertical"}),e.jsx("div",{className:"sidebar-item",children:"Item 2"}),e.jsx(i,{size:"xs",direction:"vertical"}),e.jsx("div",{className:"sidebar-item",children:"Item 3"}),e.jsx(i,{size:"lg",direction:"vertical",flexible:!0}),e.jsx("div",{className:"sidebar-footer",children:"Footer"})]})})]})]})}),parameters:{docs:{description:{story:"Real-world examples of using Spacer in common layouts."}}}},ue={render:()=>e.jsx("div",{className:"spacer-story-wrapper",children:e.jsxs("div",{className:"responsive-spacing-demo",children:[e.jsx("h3",{children:"Responsive Spacing Demo"}),e.jsx("p",{children:"These spacers adjust their size based on screen size (smaller on mobile):"}),e.jsx("div",{className:"spacer-demo-content",children:"Section 1"}),e.jsx(i,{size:"2xl",direction:"vertical"}),e.jsx("div",{className:"spacer-demo-content",children:"Section 2"}),e.jsx(i,{size:"3xl",direction:"vertical"}),e.jsx("div",{className:"spacer-demo-content",children:"Section 3"}),e.jsx(i,{size:"lg",direction:"vertical"}),e.jsxs("div",{className:"responsive-note",children:[e.jsx("strong",{children:"Note:"})," Resize your browser or use Storybook's viewport controls to see how spacing adapts on smaller screens."]})]})}),parameters:{docs:{description:{story:"Spacers automatically adapt to smaller screens with responsive sizing."}}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  render: args => <div className="spacer-story-wrapper">\r
      <div className="spacer-demo-content">Content Above</div>\r
      <Spacer {...args} />\r
      <div className="spacer-demo-content">Content Below</div>\r
    </div>
}`,...le.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
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
}`,...de.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
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
}`,...pe.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
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
}`,...me.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
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
}`,...he.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`{
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
}`,...ve.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
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
}`,...ue.parameters?.docs?.source}}};const Ie=["Default","VerticalSizes","HorizontalSizes","DirectionVariants","FlexibleSpacing","LayoutExamples","ResponsiveSpacing"],qe=Object.freeze(Object.defineProperty({__proto__:null,Default:le,DirectionVariants:me,FlexibleSpacing:he,HorizontalSizes:pe,LayoutExamples:ve,ResponsiveSpacing:ue,VerticalSizes:de,__namedExportsOrder:Ie,default:Le},Symbol.toStringTag,{value:"Module"}));export{Be as A,Fe as C,Ee as D,Pe as I,Me as L,qe as S};
