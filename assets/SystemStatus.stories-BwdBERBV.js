import{j as e}from"./iframe-C-Dpaqp0.js";import{S as h}from"./StatusDot-BmctoXVZ.js";import"./preload-helper-PPVm8Dsz.js";const t=({title:m="System Status",items:y,dotSize:g="sm",layout:S="list",className:v="",style:p})=>{const b=["system-status",`system-status--${S}`,v].filter(Boolean).join(" ");return e.jsxs("div",{className:b,...p&&{style:p},children:[m&&e.jsx("h4",{className:"system-status__title",children:m}),e.jsx("div",{className:"system-status__list",children:y.map(s=>e.jsxs("div",{className:`system-status__item ${s.onClick?"system-status__item--clickable":""}`,onClick:s.onClick,...s.onClick&&{role:"button",tabIndex:0},title:s.details,onKeyDown:s.onClick?u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),s.onClick?.())}:void 0,children:[e.jsx(h,{status:s.status,size:g,pulse:s.pulse,ring:s.ring,"aria-label":`${s.label} status: ${s.status}`}),e.jsx("span",{className:"system-status__label",children:s.label})]},s.id))})]})};t.__docgenInfo={description:"",methods:[],displayName:"SystemStatus",props:{title:{required:!1,tsType:{name:"string"},description:"Title for the status section",defaultValue:{value:"'System Status'",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"SystemStatusItem"}],raw:"SystemStatusItem[]"},description:"Array of system status items"},dotSize:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Size variant for status dots",defaultValue:{value:"'sm'",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'list' | 'grid'",elements:[{name:"literal",value:"'list'"},{name:"literal",value:"'grid'"}]},description:"Layout variant",defaultValue:{value:"'list'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"}}};const f={title:"Molecules/SystemStatus",component:t,parameters:{layout:"padded",docs:{description:{component:"A status indicator component showing system service health with visual StatusDot indicators."}}},argTypes:{title:{control:"text",description:"Title for the status section"},dotSize:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size variant for status dots"},layout:{control:"select",options:["list","grid"],description:"Layout variant"}}},a=[{id:"database",label:"Database Connection",status:"success",details:"PostgreSQL server is running normally"},{id:"api",label:"API Server",status:"success",details:"REST API responding within acceptable limits"},{id:"storage",label:"File Storage",status:"warning",pulse:!0,details:"Storage usage at 85% capacity"},{id:"email",label:"Email Service",status:"error",ring:!0,details:"SMTP server connection failed"}],i={args:{items:a}},r={args:{title:"Service Health Overview",items:[{id:"service1",label:"Authentication Service",status:"success",details:"All systems operational"},{id:"service2",label:"Payment Gateway",status:"warning",pulse:!0,details:"Experiencing delays"},{id:"service3",label:"Notification System",status:"error",ring:!0,details:"Service unavailable"},{id:"service4",label:"Analytics Engine",status:"info",details:"Currently processing data"},{id:"service5",label:"Cache Server",status:"neutral",details:"Status unknown"}]}},l={render:()=>e.jsxs("div",{className:"system-status-story-sizes",children:[e.jsxs("div",{className:"system-status-story-section",children:[e.jsx("h4",{children:"Extra Small (xs)"}),e.jsx(t,{title:"Microservices",dotSize:"xs",items:a})]}),e.jsxs("div",{className:"system-status-story-section",children:[e.jsx("h4",{children:"Small (sm) - Default"}),e.jsx(t,{title:"Core Services",dotSize:"sm",items:a})]}),e.jsxs("div",{className:"system-status-story-section",children:[e.jsx("h4",{children:"Medium (md)"}),e.jsx(t,{title:"Infrastructure",dotSize:"md",items:a})]}),e.jsxs("div",{className:"system-status-story-section",children:[e.jsx("h4",{children:"Large (lg)"}),e.jsx(t,{title:"Critical Systems",dotSize:"lg",items:a})]})]})},n={args:{title:"System Dashboard",layout:"grid",items:[{id:"web",label:"Web Server",status:"success",details:"Nginx running smoothly"},{id:"database",label:"Database",status:"success",details:"MongoDB cluster healthy"},{id:"redis",label:"Redis Cache",status:"warning",pulse:!0,details:"Memory usage high"},{id:"queue",label:"Message Queue",status:"success",details:"RabbitMQ processing jobs"},{id:"cdn",label:"CDN",status:"error",ring:!0,details:"Multiple edge servers down"},{id:"monitoring",label:"Monitoring",status:"info",details:"Collecting metrics"}]}},o={args:{title:"Click to View Details",items:[{id:"database",label:"Database Connection",status:"success",details:"Click to view connection details",onClick:()=>alert("Database Details: Connection pool healthy, 45ms avg response time")},{id:"api",label:"API Server",status:"success",details:"Click to view API metrics",onClick:()=>alert("API Metrics: 99.9% uptime, 1,234 requests/min")},{id:"storage",label:"File Storage",status:"warning",pulse:!0,details:"Click to view storage details",onClick:()=>alert("Storage Alert: 85% capacity used (8.5TB / 10TB)")},{id:"email",label:"Email Service",status:"error",ring:!0,details:"Click to troubleshoot",onClick:()=>alert("Email Service Error: SMTP connection timeout. Check network connectivity.")}]},parameters:{docs:{description:{story:"Interactive system status where users can click on items to get more details or take actions."}}}},c={args:{items:[{id:"status1",label:"Service A",status:"success"},{id:"status2",label:"Service B",status:"warning",pulse:!0},{id:"status3",label:"Service C",status:"error",ring:!0}]},parameters:{docs:{description:{story:"Minimal system status without title, showing just the essential service indicators."}}}},d={render:()=>e.jsxs("div",{className:"system-status-story-dashboard",children:[e.jsx("div",{className:"system-status-story-panel",children:e.jsx(t,{title:"Core Infrastructure",items:[{id:"load-balancer",label:"Load Balancer",status:"success",details:"HAProxy distributing traffic evenly"},{id:"web-servers",label:"Web Servers (3)",status:"success",details:"All Nginx instances responding"},{id:"database-primary",label:"Primary Database",status:"success",details:"PostgreSQL master healthy"},{id:"database-replica",label:"Database Replicas (2)",status:"warning",pulse:!0,details:"One replica experiencing lag"}]})}),e.jsx("div",{className:"system-status-story-panel",children:e.jsx(t,{title:"External Services",items:[{id:"payment-gateway",label:"Stripe Payment API",status:"success",details:"Processing payments normally"},{id:"email-service",label:"SendGrid Email",status:"error",ring:!0,details:"API rate limit exceeded"},{id:"cdn",label:"CloudFlare CDN",status:"success",details:"Global edge cache active"},{id:"monitoring",label:"DataDog Monitoring",status:"info",details:"Collecting system metrics"}]})}),e.jsx("div",{className:"system-status-story-panel",children:e.jsx(t,{title:"Background Services",layout:"grid",dotSize:"xs",items:[{id:"worker1",label:"Image Processing",status:"success"},{id:"worker2",label:"Email Queue",status:"error",ring:!0},{id:"worker3",label:"Analytics",status:"success"},{id:"worker4",label:"Backup Service",status:"warning",pulse:!0},{id:"worker5",label:"Log Aggregation",status:"success"},{id:"worker6",label:"Search Indexing",status:"info"}]})})]}),parameters:{docs:{description:{story:"A comprehensive dashboard showing different types of system status indicators organized in panels."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleSystemItems
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Service Health Overview',
    items: [{
      id: 'service1',
      label: 'Authentication Service',
      status: 'success',
      details: 'All systems operational'
    }, {
      id: 'service2',
      label: 'Payment Gateway',
      status: 'warning',
      pulse: true,
      details: 'Experiencing delays'
    }, {
      id: 'service3',
      label: 'Notification System',
      status: 'error',
      ring: true,
      details: 'Service unavailable'
    }, {
      id: 'service4',
      label: 'Analytics Engine',
      status: 'info',
      details: 'Currently processing data'
    }, {
      id: 'service5',
      label: 'Cache Server',
      status: 'neutral',
      details: 'Status unknown'
    }]
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="system-status-story-sizes">\r
      <div className="system-status-story-section">\r
        <h4>Extra Small (xs)</h4>\r
        <SystemStatus title="Microservices" dotSize="xs" items={sampleSystemItems} />\r
      </div>\r
      \r
      <div className="system-status-story-section">\r
        <h4>Small (sm) - Default</h4>\r
        <SystemStatus title="Core Services" dotSize="sm" items={sampleSystemItems} />\r
      </div>\r
      \r
      <div className="system-status-story-section">\r
        <h4>Medium (md)</h4>\r
        <SystemStatus title="Infrastructure" dotSize="md" items={sampleSystemItems} />\r
      </div>\r
      \r
      <div className="system-status-story-section">\r
        <h4>Large (lg)</h4>\r
        <SystemStatus title="Critical Systems" dotSize="lg" items={sampleSystemItems} />\r
      </div>\r
    </div>
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'System Dashboard',
    layout: 'grid',
    items: [{
      id: 'web',
      label: 'Web Server',
      status: 'success',
      details: 'Nginx running smoothly'
    }, {
      id: 'database',
      label: 'Database',
      status: 'success',
      details: 'MongoDB cluster healthy'
    }, {
      id: 'redis',
      label: 'Redis Cache',
      status: 'warning',
      pulse: true,
      details: 'Memory usage high'
    }, {
      id: 'queue',
      label: 'Message Queue',
      status: 'success',
      details: 'RabbitMQ processing jobs'
    }, {
      id: 'cdn',
      label: 'CDN',
      status: 'error',
      ring: true,
      details: 'Multiple edge servers down'
    }, {
      id: 'monitoring',
      label: 'Monitoring',
      status: 'info',
      details: 'Collecting metrics'
    }]
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Click to View Details',
    items: [{
      id: 'database',
      label: 'Database Connection',
      status: 'success',
      details: 'Click to view connection details',
      onClick: () => alert('Database Details: Connection pool healthy, 45ms avg response time')
    }, {
      id: 'api',
      label: 'API Server',
      status: 'success',
      details: 'Click to view API metrics',
      onClick: () => alert('API Metrics: 99.9% uptime, 1,234 requests/min')
    }, {
      id: 'storage',
      label: 'File Storage',
      status: 'warning',
      pulse: true,
      details: 'Click to view storage details',
      onClick: () => alert('Storage Alert: 85% capacity used (8.5TB / 10TB)')
    }, {
      id: 'email',
      label: 'Email Service',
      status: 'error',
      ring: true,
      details: 'Click to troubleshoot',
      onClick: () => alert('Email Service Error: SMTP connection timeout. Check network connectivity.')
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive system status where users can click on items to get more details or take actions.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'status1',
      label: 'Service A',
      status: 'success'
    }, {
      id: 'status2',
      label: 'Service B',
      status: 'warning',
      pulse: true
    }, {
      id: 'status3',
      label: 'Service C',
      status: 'error',
      ring: true
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal system status without title, showing just the essential service indicators.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="system-status-story-dashboard">\r
      <div className="system-status-story-panel">\r
        <SystemStatus title="Core Infrastructure" items={[{
        id: 'load-balancer',
        label: 'Load Balancer',
        status: 'success',
        details: 'HAProxy distributing traffic evenly'
      }, {
        id: 'web-servers',
        label: 'Web Servers (3)',
        status: 'success',
        details: 'All Nginx instances responding'
      }, {
        id: 'database-primary',
        label: 'Primary Database',
        status: 'success',
        details: 'PostgreSQL master healthy'
      }, {
        id: 'database-replica',
        label: 'Database Replicas (2)',
        status: 'warning',
        pulse: true,
        details: 'One replica experiencing lag'
      }]} />\r
      </div>\r
      \r
      <div className="system-status-story-panel">\r
        <SystemStatus title="External Services" items={[{
        id: 'payment-gateway',
        label: 'Stripe Payment API',
        status: 'success',
        details: 'Processing payments normally'
      }, {
        id: 'email-service',
        label: 'SendGrid Email',
        status: 'error',
        ring: true,
        details: 'API rate limit exceeded'
      }, {
        id: 'cdn',
        label: 'CloudFlare CDN',
        status: 'success',
        details: 'Global edge cache active'
      }, {
        id: 'monitoring',
        label: 'DataDog Monitoring',
        status: 'info',
        details: 'Collecting system metrics'
      }]} />\r
      </div>\r
      \r
      <div className="system-status-story-panel">\r
        <SystemStatus title="Background Services" layout="grid" dotSize="xs" items={[{
        id: 'worker1',
        label: 'Image Processing',
        status: 'success'
      }, {
        id: 'worker2',
        label: 'Email Queue',
        status: 'error',
        ring: true
      }, {
        id: 'worker3',
        label: 'Analytics',
        status: 'success'
      }, {
        id: 'worker4',
        label: 'Backup Service',
        status: 'warning',
        pulse: true
      }, {
        id: 'worker5',
        label: 'Log Aggregation',
        status: 'success'
      }, {
        id: 'worker6',
        label: 'Search Indexing',
        status: 'info'
      }]} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive dashboard showing different types of system status indicators organized in panels.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const k=["Default","StatusTypes","DifferentSizes","GridLayout","Interactive","Minimal","RealWorldExample"];export{i as Default,l as DifferentSizes,n as GridLayout,o as Interactive,c as Minimal,d as RealWorldExample,r as StatusTypes,k as __namedExportsOrder,f as default};
