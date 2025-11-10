import{j as e}from"./iframe-NKDFF6YA.js";import"./preload-helper-PPVm8Dsz.js";const P=({color:t="default",pending:r=!1})=>r?e.jsx("div",{className:"timeline-dot-pending",children:e.jsx("div",{className:"timeline-dot-pending-inner"})}):e.jsx("div",{className:`timeline-dot timeline-dot--${t}`}),D={success:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 3L4.5 8.5L2 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),error:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9 3L3 9M3 3L9 9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),warning:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 4V6M6 8H6.01M10.97 10L6.5 2C6.36 1.75 6.11 1.75 5.97 2L1.5 10C1.36 10.25 1.54 10.5 1.83 10.5H10.67C10.96 10.5 11.14 10.25 11 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),info:e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M6 4V4.01M6 6V8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})},N=({items:t,mode:r="left",size:V="medium",pending:o=!1,className:L="",reverse:A=!1,pendingDot:O,showConnectors:E=!0})=>{const T=A?[...t].reverse():t,W=(s,k)=>{const I=k===T.length-1,z=s.pending||!1;let i="right";if(r==="right")i="left";else if(r==="alternate")i=k%2===0?"right":"left";else if(r==="center"){const S=s.position;S==="left"||S==="right"?i=S:i=k%2===0?"right":"left"}const F=()=>s.icon?e.jsx("div",{className:`timeline-icon timeline-icon--${s.color||"default"}`,children:s.icon}):s.color&&s.color in D?e.jsx("div",{className:`timeline-icon timeline-icon--${s.color}`,children:D[s.color]}):e.jsx(P,{color:s.color,pending:z});return e.jsxs("div",{className:`
          timeline-item
          timeline-item--${i}
          ${z?"timeline-item--pending":""}
          ${I&&!o?"timeline-item--last":""}
          ${s.className||""}
        `,children:[e.jsxs("div",{className:"timeline-node",children:[F(),E&&!I&&e.jsx("div",{className:"timeline-connector"})]}),e.jsxs("div",{className:"timeline-content",children:[s.timestamp&&e.jsx("div",{className:"timeline-timestamp",children:s.timestamp}),s.label&&e.jsx("div",{className:"timeline-label",children:s.label}),e.jsx("div",{className:"timeline-body",children:s.children})]})]},s.key)},H=()=>o?e.jsxs("div",{className:"timeline-item timeline-item--pending timeline-item--last",children:[e.jsx("div",{className:"timeline-node",children:O||e.jsx(P,{pending:!0})}),e.jsx("div",{className:"timeline-content",children:e.jsx("div",{className:"timeline-body",children:typeof o=="boolean"?"Loading...":o})})]}):null;return e.jsxs("div",{className:`
        timeline
        timeline--${r}
        timeline--${V}
        ${L}
      `,children:[T.map(W),H()]})};N.displayName="Timeline";N.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TimelineItem"}],raw:"TimelineItem[]"},description:"Array of timeline items"},mode:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'alternate' | 'center'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'alternate'"},{name:"literal",value:"'center'"}]},description:"Layout mode for the timeline",defaultValue:{value:"'left'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'medium'",computed:!1}},pending:{required:!1,tsType:{name:"union",raw:"boolean | ReactNode",elements:[{name:"boolean"},{name:"ReactNode"}]},description:"Whether to show a pending dot at the end",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className for the timeline container",defaultValue:{value:"''",computed:!1}},reverse:{required:!1,tsType:{name:"boolean"},description:"Whether to reverse the order (latest first)",defaultValue:{value:"false",computed:!1}},pendingDot:{required:!1,tsType:{name:"ReactNode"},description:"Custom pending dot content"},showConnectors:{required:!1,tsType:{name:"boolean"},description:"Whether to show connecting lines between items",defaultValue:{value:"true",computed:!1}}}};const U={title:"Atoms/Timeline",component:N,parameters:{layout:"padded",docs:{description:{component:"A timeline component for displaying chronological events with customizable styling, icons, and content positioning. Supports multiple layout modes and responsive design."}}},argTypes:{items:{description:"Array of timeline items to display",control:!1},mode:{description:"Layout mode for the timeline",control:"select",options:["left","right","alternate","center"]},size:{description:"Size variant",control:"select",options:["small","medium","large"]},pending:{description:"Whether to show a pending item at the end",control:"boolean"},className:{description:"Custom CSS class",control:"text"},reverse:{description:"Whether to reverse the order (latest first)",control:"boolean"},showConnectors:{description:"Whether to show connecting lines between items",control:"boolean"}}},n=[{key:"1",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Project Started"}),e.jsx("p",{children:"The project was officially launched with initial planning and team assignment."})]}),timestamp:"2024-01-15",color:"success"},{key:"2",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Design Phase"}),e.jsx("p",{children:"UI/UX design mockups were completed and approved by stakeholders."})]}),timestamp:"2024-02-01",color:"info"},{key:"3",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Development Phase"}),e.jsx("p",{children:"Frontend and backend development began with the first sprint."})]}),timestamp:"2024-02-15",color:"primary"},{key:"4",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Testing & QA"}),e.jsx("p",{children:"Comprehensive testing phase including unit tests, integration tests, and user acceptance testing."})]}),timestamp:"2024-03-10",color:"warning"}],M=[{key:"1",children:e.jsxs("div",{children:[e.jsx("h4",{children:"System Alert: High CPU Usage"}),e.jsx("p",{children:"Server CPU usage exceeded 90% threshold. Automatic scaling initiated."}),e.jsxs("div",{className:"timeline-metadata",children:[e.jsx("span",{className:"timeline-tag timeline-tag--error",children:"Critical"}),e.jsx("span",{className:"timeline-user",children:"System Monitor"})]})]}),timestamp:"2024-11-08 14:30",label:"ALERT",color:"error"},{key:"2",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Deployment Completed"}),e.jsx("p",{children:"Version 2.1.0 successfully deployed to production environment."}),e.jsxs("div",{className:"timeline-metadata",children:[e.jsx("span",{className:"timeline-tag timeline-tag--success",children:"Success"}),e.jsx("span",{className:"timeline-user",children:"DevOps Pipeline"})]})]}),timestamp:"2024-11-08 12:15",label:"DEPLOY",color:"success"},{key:"3",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Code Review Completed"}),e.jsx("p",{children:"All pull requests for sprint 23 have been reviewed and merged."}),e.jsxs("div",{className:"timeline-metadata",children:[e.jsx("span",{className:"timeline-tag timeline-tag--info",children:"Review"}),e.jsx("span",{className:"timeline-user",children:"John Doe"})]})]}),timestamp:"2024-11-08 10:45",label:"REVIEW",color:"info"}],R=[{key:"1",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Order Placed"}),e.jsx("p",{children:"Your order #12345 has been successfully placed and payment confirmed."})]}),timestamp:"2024-11-08 09:00",icon:"🛒",color:"success"},{key:"2",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Order Processing"}),e.jsx("p",{children:"Your order is being prepared and will be shipped within 2 business days."})]}),timestamp:"2024-11-08 11:30",icon:"📦",color:"warning"},{key:"3",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Order Shipped"}),e.jsx("p",{children:"Your order has been shipped via Express Delivery. Tracking: ABC123456789"})]}),timestamp:"2024-11-09 08:15",icon:"🚚",color:"info"},{key:"4",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Order Delivered"}),e.jsx("p",{children:"Your order has been successfully delivered to your address."})]}),timestamp:"2024-11-10 14:20",icon:"✅",color:"success"}],B=[{key:"1",children:e.jsxs("div",{children:[e.jsx("h4",{children:"User Registration"}),e.jsx("p",{children:"New user account created successfully."})]}),timestamp:"2 hours ago",icon:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"currentColor",children:e.jsx("path",{d:"M7 7C8.66 7 10 5.66 10 4C10 2.34 8.66 1 7 1C5.34 1 4 2.34 4 4C4 5.66 5.34 7 7 7ZM7 8.5C4.67 8.5 0 9.67 0 12V13H14V12C14 9.67 9.33 8.5 7 8.5Z"})}),color:"success"},{key:"2",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Email Verification"}),e.jsx("p",{children:"Email address verified successfully."})]}),timestamp:"1 hour ago",icon:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"currentColor",children:e.jsx("path",{d:"M12 2H2C1.45 2 1 2.45 1 3V11C1 11.55 1.45 12 2 12H12C12.55 12 13 11.55 13 11V3C13 2.45 12.55 2 12 2ZM12 11H2V4L7 7.5L12 4V11ZM7 6.5L2 3H12L7 6.5Z"})}),color:"info"},{key:"3",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Profile Setup"}),e.jsx("p",{children:"User profile information completed."})]}),timestamp:"30 minutes ago",icon:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"currentColor",children:e.jsx("path",{d:"M1 12V11C1 9.34 2.34 8 4 8H10C11.66 8 13 9.34 13 11V12H1ZM7 7C5.34 7 4 5.66 4 4C4 2.34 5.34 1 7 1C8.66 1 10 2.34 10 4C10 5.66 8.66 7 7 7Z"})}),color:"primary"}],a={args:{items:n,mode:"left",size:"medium",pending:!1,reverse:!1,showConnectors:!0}},l={args:{items:n,mode:"right",size:"medium",pending:!1,reverse:!1,showConnectors:!0},parameters:{docs:{description:{story:"Timeline with content positioned on the right side of the line."}}}},c={args:{items:n,mode:"alternate",size:"medium",pending:!1,reverse:!1,showConnectors:!0},parameters:{docs:{description:{story:"Timeline with alternating content positions for better visual balance."}}}},d={args:{items:n,mode:"center",size:"medium",pending:!1,reverse:!1,showConnectors:!0},parameters:{docs:{description:{story:"Centered timeline with customizable individual item positions."}}}},m={args:{items:n.slice(0,3),mode:"left",size:"small",pending:!1,reverse:!1,showConnectors:!0}},p={args:{items:n.slice(0,3),mode:"left",size:"large",pending:!1,reverse:!1,showConnectors:!0}},h={args:{items:M,mode:"left",size:"medium",pending:!1,reverse:!1,showConnectors:!0},parameters:{docs:{description:{story:"Timeline with detailed content including labels, metadata, and tags."}}}},u={args:{items:R,mode:"left",size:"medium",pending:!1,reverse:!1,showConnectors:!0},parameters:{docs:{description:{story:"Timeline using emoji icons for visual representation of events."}}}},g={args:{items:B,mode:"left",size:"medium",pending:!1,reverse:!1,showConnectors:!0},parameters:{docs:{description:{story:"Timeline with custom SVG icons for professional appearance."}}}},f={args:{items:n.slice(0,3),mode:"left",size:"medium",pending:!0,reverse:!1,showConnectors:!0},parameters:{docs:{description:{story:"Timeline with a pending state indicating ongoing or future events."}}}},v={args:{items:R.slice(0,3),mode:"left",size:"medium",pending:e.jsxs("div",{children:[e.jsx("h4",{children:"Order in Transit"}),e.jsx("p",{children:"Your package is currently on the way to your delivery address..."})]}),reverse:!1,showConnectors:!0},parameters:{docs:{description:{story:"Timeline with custom pending content instead of default loading text."}}}},j={args:{items:n,mode:"left",size:"medium",pending:!1,reverse:!0,showConnectors:!0},parameters:{docs:{description:{story:"Timeline with reversed order showing most recent events first."}}}},y={args:{items:n,mode:"left",size:"medium",pending:!1,reverse:!1,showConnectors:!1},parameters:{docs:{description:{story:"Timeline without connecting lines between items for a cleaner look."}}}},x={args:{items:[{key:"1",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Sarah Johnson commented on your post"}),e.jsx("p",{children:'"Great work on the new design! The color scheme really works well."'})]}),timestamp:"5 minutes ago",icon:"💬",color:"info"},{key:"2",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Mike Chen liked your photo"}),e.jsx("p",{children:"Vacation sunset photo from Santorini"})]}),timestamp:"1 hour ago",icon:"❤️",color:"error"},{key:"3",children:e.jsxs("div",{children:[e.jsx("h4",{children:"You updated your profile picture"}),e.jsx("p",{children:"Changed profile picture to a new professional headshot"})]}),timestamp:"3 hours ago",icon:"📸",color:"success"},{key:"4",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Team meeting scheduled"}),e.jsx("p",{children:"Weekly standup meeting scheduled for tomorrow at 10:00 AM"})]}),timestamp:"1 day ago",icon:"📅",color:"warning"}],mode:"left",size:"medium",pending:!1,reverse:!1,showConnectors:!0},parameters:{docs:{description:{story:"Activity feed timeline showing recent user interactions and updates."}}}},w={args:{items:[{key:"1",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Project Kickoff"}),e.jsx("p",{children:"Initial project meeting with stakeholders and team members."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Define project scope and objectives"}),e.jsx("li",{children:"Assign team roles and responsibilities"}),e.jsx("li",{children:"Set up project communication channels"})]})]}),timestamp:"Jan 15, 2024",label:"START",color:"success"},{key:"2",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Design Phase Complete"}),e.jsx("p",{children:"All design mockups approved and development-ready."}),e.jsxs("ul",{children:[e.jsx("li",{children:"User interface wireframes"}),e.jsx("li",{children:"Visual design system"}),e.jsx("li",{children:"Component library documentation"})]})]}),timestamp:"Feb 28, 2024",label:"DESIGN",color:"info"},{key:"3",children:e.jsxs("div",{children:[e.jsx("h4",{children:"MVP Development"}),e.jsx("p",{children:"Minimum viable product development in progress."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Core feature implementation"}),e.jsx("li",{children:"Database setup and configuration"}),e.jsx("li",{children:"API development and testing"})]})]}),timestamp:"Mar 30, 2024",label:"DEV",color:"primary",pending:!0}],mode:"alternate",size:"medium",pending:"Quality assurance testing and final preparations...",reverse:!1,showConnectors:!0},parameters:{docs:{description:{story:"Project milestone timeline with detailed progress tracking."}}}},C={args:{items:[{key:"1",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Database Connection Lost"}),e.jsx("p",{children:"Connection to primary database failed. Failover to backup initiated."}),e.jsx("div",{className:"log-details",children:e.jsx("code",{children:"ERROR: Connection timeout after 30s - Host: db-primary-01"})})]}),timestamp:"2024-11-08 15:23:45",label:"ERROR",color:"error"},{key:"2",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Backup Database Connected"}),e.jsx("p",{children:"Successfully connected to backup database. Service restored."}),e.jsx("div",{className:"log-details",children:e.jsx("code",{children:"INFO: Connection established - Host: db-backup-01"})})]}),timestamp:"2024-11-08 15:24:12",label:"INFO",color:"success"},{key:"3",children:e.jsxs("div",{children:[e.jsx("h4",{children:"Primary Database Restored"}),e.jsx("p",{children:"Primary database connection restored. Switching back from backup."}),e.jsx("div",{className:"log-details",children:e.jsx("code",{children:"INFO: Primary connection restored - Host: db-primary-01"})})]}),timestamp:"2024-11-08 15:45:33",label:"INFO",color:"info"}],mode:"left",size:"small",pending:!1,reverse:!0,showConnectors:!0},parameters:{docs:{description:{story:"System log timeline showing recent events with timestamps and log levels."}}}},b={args:{items:M,mode:"alternate",size:"medium",pending:!1,reverse:!1,showConnectors:!0},parameters:{docs:{description:{story:"Responsive timeline that adapts to smaller screens. Try resizing the viewport."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    mode: 'left',
    size: 'medium',
    pending: false,
    reverse: false,
    showConnectors: true
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    mode: 'right',
    size: 'medium',
    pending: false,
    reverse: false,
    showConnectors: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Timeline with content positioned on the right side of the line.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    mode: 'alternate',
    size: 'medium',
    pending: false,
    reverse: false,
    showConnectors: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Timeline with alternating content positions for better visual balance.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    mode: 'center',
    size: 'medium',
    pending: false,
    reverse: false,
    showConnectors: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Centered timeline with customizable individual item positions.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems.slice(0, 3),
    mode: 'left',
    size: 'small',
    pending: false,
    reverse: false,
    showConnectors: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems.slice(0, 3),
    mode: 'left',
    size: 'large',
    pending: false,
    reverse: false,
    showConnectors: true
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: detailedItems,
    mode: 'left',
    size: 'medium',
    pending: false,
    reverse: false,
    showConnectors: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Timeline with detailed content including labels, metadata, and tags.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: iconItems,
    mode: 'left',
    size: 'medium',
    pending: false,
    reverse: false,
    showConnectors: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Timeline using emoji icons for visual representation of events.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: customIconItems,
    mode: 'left',
    size: 'medium',
    pending: false,
    reverse: false,
    showConnectors: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Timeline with custom SVG icons for professional appearance.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems.slice(0, 3),
    mode: 'left',
    size: 'medium',
    pending: true,
    reverse: false,
    showConnectors: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Timeline with a pending state indicating ongoing or future events.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: iconItems.slice(0, 3),
    mode: 'left',
    size: 'medium',
    pending: <div>\r
        <h4>Order in Transit</h4>\r
        <p>Your package is currently on the way to your delivery address...</p>\r
      </div>,
    reverse: false,
    showConnectors: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Timeline with custom pending content instead of default loading text.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    mode: 'left',
    size: 'medium',
    pending: false,
    reverse: true,
    showConnectors: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Timeline with reversed order showing most recent events first.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    mode: 'left',
    size: 'medium',
    pending: false,
    reverse: false,
    showConnectors: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Timeline without connecting lines between items for a cleaner look.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      children: <div>\r
            <h4>Sarah Johnson commented on your post</h4>\r
            <p>"Great work on the new design! The color scheme really works well."</p>\r
          </div>,
      timestamp: '5 minutes ago',
      icon: '💬',
      color: 'info' as const
    }, {
      key: '2',
      children: <div>\r
            <h4>Mike Chen liked your photo</h4>\r
            <p>Vacation sunset photo from Santorini</p>\r
          </div>,
      timestamp: '1 hour ago',
      icon: '❤️',
      color: 'error' as const
    }, {
      key: '3',
      children: <div>\r
            <h4>You updated your profile picture</h4>\r
            <p>Changed profile picture to a new professional headshot</p>\r
          </div>,
      timestamp: '3 hours ago',
      icon: '📸',
      color: 'success' as const
    }, {
      key: '4',
      children: <div>\r
            <h4>Team meeting scheduled</h4>\r
            <p>Weekly standup meeting scheduled for tomorrow at 10:00 AM</p>\r
          </div>,
      timestamp: '1 day ago',
      icon: '📅',
      color: 'warning' as const
    }],
    mode: 'left',
    size: 'medium',
    pending: false,
    reverse: false,
    showConnectors: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Activity feed timeline showing recent user interactions and updates.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      children: <div>\r
            <h4>Project Kickoff</h4>\r
            <p>Initial project meeting with stakeholders and team members.</p>\r
            <ul>\r
              <li>Define project scope and objectives</li>\r
              <li>Assign team roles and responsibilities</li>\r
              <li>Set up project communication channels</li>\r
            </ul>\r
          </div>,
      timestamp: 'Jan 15, 2024',
      label: 'START',
      color: 'success' as const
    }, {
      key: '2',
      children: <div>\r
            <h4>Design Phase Complete</h4>\r
            <p>All design mockups approved and development-ready.</p>\r
            <ul>\r
              <li>User interface wireframes</li>\r
              <li>Visual design system</li>\r
              <li>Component library documentation</li>\r
            </ul>\r
          </div>,
      timestamp: 'Feb 28, 2024',
      label: 'DESIGN',
      color: 'info' as const
    }, {
      key: '3',
      children: <div>\r
            <h4>MVP Development</h4>\r
            <p>Minimum viable product development in progress.</p>\r
            <ul>\r
              <li>Core feature implementation</li>\r
              <li>Database setup and configuration</li>\r
              <li>API development and testing</li>\r
            </ul>\r
          </div>,
      timestamp: 'Mar 30, 2024',
      label: 'DEV',
      color: 'primary' as const,
      pending: true
    }],
    mode: 'alternate',
    size: 'medium',
    pending: 'Quality assurance testing and final preparations...',
    reverse: false,
    showConnectors: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Project milestone timeline with detailed progress tracking.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      children: <div>\r
            <h4>Database Connection Lost</h4>\r
            <p>Connection to primary database failed. Failover to backup initiated.</p>\r
            <div className="log-details">\r
              <code>ERROR: Connection timeout after 30s - Host: db-primary-01</code>\r
            </div>\r
          </div>,
      timestamp: '2024-11-08 15:23:45',
      label: 'ERROR',
      color: 'error' as const
    }, {
      key: '2',
      children: <div>\r
            <h4>Backup Database Connected</h4>\r
            <p>Successfully connected to backup database. Service restored.</p>\r
            <div className="log-details">\r
              <code>INFO: Connection established - Host: db-backup-01</code>\r
            </div>\r
          </div>,
      timestamp: '2024-11-08 15:24:12',
      label: 'INFO',
      color: 'success' as const
    }, {
      key: '3',
      children: <div>\r
            <h4>Primary Database Restored</h4>\r
            <p>Primary database connection restored. Switching back from backup.</p>\r
            <div className="log-details">\r
              <code>INFO: Primary connection restored - Host: db-primary-01</code>\r
            </div>\r
          </div>,
      timestamp: '2024-11-08 15:45:33',
      label: 'INFO',
      color: 'info' as const
    }],
    mode: 'left',
    size: 'small',
    pending: false,
    reverse: true,
    showConnectors: true
  },
  parameters: {
    docs: {
      description: {
        story: 'System log timeline showing recent events with timestamps and log levels.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: detailedItems,
    mode: 'alternate',
    size: 'medium',
    pending: false,
    reverse: false,
    showConnectors: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive timeline that adapts to smaller screens. Try resizing the viewport.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};const Y=["Default","RightMode","AlternateMode","CenterMode","SmallSize","LargeSize","DetailedContent","WithEmojiIcons","WithCustomIcons","WithPending","CustomPending","ReversedOrder","NoConnectors","ActivityFeed","ProjectMilestones","SystemLogs","ResponsiveExample"];export{x as ActivityFeed,c as AlternateMode,d as CenterMode,v as CustomPending,a as Default,h as DetailedContent,p as LargeSize,y as NoConnectors,w as ProjectMilestones,b as ResponsiveExample,j as ReversedOrder,l as RightMode,m as SmallSize,C as SystemLogs,g as WithCustomIcons,u as WithEmojiIcons,f as WithPending,Y as __namedExportsOrder,U as default};
