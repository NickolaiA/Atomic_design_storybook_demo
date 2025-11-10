import{r as n,j as e}from"./iframe-BMIDd8Dz.js";import{r as le}from"./index-BKxuousz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDbkpOqE.js";const f=({steps:i,current:s=0,open:a=!1,onOpen:u,onClose:c,onChange:p,onFinish:N,type:ee="default",className:te="",showProgress:de=!0,showSkip:re=!0,skipButtonText:oe="Skip",finishButtonText:ne="Finish",maskClosable:W=!0,mask:y=!0,offset:g=[0,8],zIndex:Y=1001,renderActions:$})=>{const[b,I]=n.useState(s),[P,L]=n.useState({top:0,left:0}),[U,q]=n.useState("bottom"),[k,G]=n.useState(null),J=n.useRef(null),se=n.useRef(null),o=i[b],x=b===i.length-1,T=b===0;n.useEffect(()=>{I(s)},[s]);const X=n.useCallback(t=>t.target?typeof t.target=="string"?document.querySelector(t.target):typeof t.target=="function"?t.target():t.target instanceof Element?t.target:null:null,[]),V=n.useCallback((t,h="bottom")=>{const r=t.getBoundingClientRect(),Q=J.current;if(!Q)return{top:0,left:0};const l=Q.getBoundingClientRect(),j={width:window.innerWidth,height:window.innerHeight};let d=0,m=0,z=h;switch(h){case"top":d=r.top-l.height-g[1],m=r.left+(r.width-l.width)/2;break;case"top-start":d=r.top-l.height-g[1],m=r.left;break;case"top-end":d=r.top-l.height-g[1],m=r.right-l.width;break;case"bottom":d=r.bottom+g[1],m=r.left+(r.width-l.width)/2;break;case"bottom-start":d=r.bottom+g[1],m=r.left;break;case"bottom-end":d=r.bottom+g[1],m=r.right-l.width;break;case"left":d=r.top+(r.height-l.height)/2,m=r.left-l.width-g[0];break;case"left-start":d=r.top,m=r.left-l.width-g[0];break;case"left-end":d=r.bottom-l.height,m=r.left-l.width-g[0];break;case"right":d=r.top+(r.height-l.height)/2,m=r.right+g[0];break;case"right-start":d=r.top,m=r.right+g[0];break;case"right-end":d=r.bottom-l.height,m=r.right+g[0];break;case"center":d=(j.height-l.height)/2,m=(j.width-l.width)/2;break}return m<10?m=10:m+l.width>j.width-10&&(m=j.width-l.width-10),d<10?h.includes("top")?(z=h.replace("top","bottom"),d=r.bottom+g[1]):d=10:d+l.height>j.height-10&&(h.includes("bottom")?(z=h.replace("bottom","top"),d=r.top-l.height-g[1]):d=j.height-l.height-10),q(z),{top:d,left:m}},[g]);n.useEffect(()=>{if(!a||!o)return;const t=X(o);if(t){const h=t.getBoundingClientRect();G(h),requestAnimationFrame(()=>{setTimeout(()=>{const r=V(t,o.placement);L(r)},50)})}else L({top:(window.innerHeight-200)/2,left:(window.innerWidth-400)/2}),q("center"),G(null);o.onActive&&o.onActive()},[a,b,o]),n.useEffect(()=>{if(!a)return;const t=document.documentElement;t.style.setProperty("--tour-tooltip-top",`${P.top}px`),t.style.setProperty("--tour-tooltip-left",`${P.left}px`),t.style.setProperty("--tour-z-index",Y.toString()),k&&(t.style.setProperty("--tour-highlight-top",`${k.top}px`),t.style.setProperty("--tour-highlight-left",`${k.left}px`),t.style.setProperty("--tour-highlight-width",`${k.width}px`),t.style.setProperty("--tour-highlight-height",`${k.height}px`));const h=typeof o.mask=="object"?o.mask.color||"rgba(0, 0, 0, 0.5)":o.mask?typeof y=="object"&&y.color||"rgba(0, 0, 0, 0.5)":"transparent";t.style.setProperty("--tour-mask-color",h);const r=(b+1)/i.length*100;return t.style.setProperty("--tour-progress",`${r}%`),()=>{t.style.removeProperty("--tour-tooltip-top"),t.style.removeProperty("--tour-tooltip-left"),t.style.removeProperty("--tour-z-index"),t.style.removeProperty("--tour-highlight-top"),t.style.removeProperty("--tour-highlight-left"),t.style.removeProperty("--tour-highlight-width"),t.style.removeProperty("--tour-highlight-height"),t.style.removeProperty("--tour-mask-color"),t.style.removeProperty("--tour-progress")}},[a,P,k,Y,o.mask,y,b,i.length]),n.useEffect(()=>{if(!a)return;const t=()=>{const h=X(o);if(h){const r=V(h,o.placement);L(r)}};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[a,o]);const D=n.useCallback(()=>{if(o?.onComplete&&o.onComplete(),x)N&&N(),c&&c();else{const t=b+1;I(t),p&&p(t)}},[o,x,b,p,N,c]),E=n.useCallback(()=>{if(!T){const t=b-1;I(t),p&&p(t)}},[T,b,p]),Z=n.useCallback(()=>{c&&c()},[c]),C=n.useCallback(()=>{c&&c()},[c]),ae=n.useCallback(t=>{W&&t.target===t.currentTarget&&C()},[W,C]);if(n.useEffect(()=>{if(!a)return;const t=h=>{switch(h.key){case"Escape":C();break;case"ArrowRight":case" ":h.preventDefault(),x||D();break;case"ArrowLeft":h.preventDefault(),T||E();break}};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[a,C,D,E,x,T]),!a||!o)return null;typeof y=="object"&&y.style;const ie=typeof y=="object"?y.color:void 0,S=o.mask!==void 0?o.mask:y;typeof S=="object"&&S.style,typeof S=="object"&&S.color;const ce=e.jsxs(e.Fragment,{children:[S&&e.jsx("div",{ref:se,className:"tour-mask",onClick:ae,children:k&&e.jsx("div",{className:"tour-highlight","data-highlight-rect":JSON.stringify(k)})}),e.jsxs("div",{ref:J,className:`
          tour-tooltip
          tour-tooltip--${ee}
          tour-tooltip--${U}
          ${o.className||""}
          ${te}
        `,"data-position":JSON.stringify(P),"data-placement":U,role:"dialog","aria-modal":"false","aria-label":typeof o.title=="string"?o.title:"Tour step","aria-describedby":"tour-tooltip-description",children:[o.closable!==!1&&e.jsx("button",{className:"tour-close",onClick:C,"aria-label":"Close tour",children:"✕"}),e.jsxs("div",{className:"tour-tooltip__content",children:[o.title&&e.jsx("h3",{className:"tour-tooltip__title",id:"tour-tooltip-title",children:o.title}),e.jsx("div",{className:"tour-tooltip__description",id:"tour-tooltip-description",children:o.content})]}),e.jsxs("div",{className:"tour-tooltip__footer",children:[e.jsxs("div",{className:"tour-tooltip__counter",children:[b+1," of ",i.length]}),e.jsx("div",{className:"tour-tooltip__actions",children:o.actions||$?o.actions||$&&$({current:b,total:i.length,onPrev:E,onNext:D,onSkip:Z,onClose:C}):e.jsxs(e.Fragment,{children:[re&&!x&&e.jsx("button",{className:"tour-tooltip__button tour-tooltip__button--secondary",onClick:Z,children:oe}),!T&&e.jsx("button",{className:"tour-tooltip__button tour-tooltip__button--secondary",onClick:E,children:o.prevButtonText||"Previous"}),e.jsx("button",{className:"tour-tooltip__button tour-tooltip__button--primary",onClick:D,children:x?ne:o.nextButtonText||"Next"})]})})]})]})]});return le.createPortal(ce,document.body)};f.displayName="Tour";const ge={title:"Atoms/Tour",component:f,parameters:{docs:{description:{component:"A guided tour component that provides step-by-step onboarding experiences with interactive overlays and tooltips."}}},argTypes:{open:{control:"boolean",description:"Controls whether the tour is visible"},current:{control:{type:"number",min:0},description:"Current step index (0-based)"},steps:{control:"object",description:"Array of tour steps with targets and content"},mask:{control:"object",description:"Global mask configuration (can be overridden per step)"},scrollIntoViewOptions:{control:"object",description:"Options for scrolling target into view"},zIndex:{control:{type:"number",min:1},description:"Z-index for tour elements"},gap:{control:{type:"object"},description:"Gap between tooltip and target element"},closeIcon:{control:"text",description:"Custom close icon"},indicatorsRender:{description:"Custom render function for step indicators"},onClose:{action:"closed"},onChange:{action:"step-changed"},onFinish:{action:"finished"}},tags:["autodocs"]},w=({children:i,id:s})=>e.jsx("div",{id:s,className:"demo-card",children:i}),v=({children:i,id:s,variant:a="default",onClick:u})=>e.jsx("button",{id:s,className:`demo-button ${a!=="default"?`demo-button--${a}`:""}`,onClick:u,children:i}),H=i=>{const[s,a]=n.useState(!1),[u,c]=n.useState(0),p=[{key:"welcome",title:"Welcome to the Tour!",content:"This is the first step of our guided tour. We'll show you around the main features.",target:"#demo-header",placement:"bottom"},{key:"navigation",title:"Navigation Button",content:"Here you can find navigation options. This button is highlighted in the tour.",target:"#nav-button",placement:"bottom"},{key:"main-content",title:"Main Content Area",content:"This is where the primary content is displayed. The tour can highlight any element on the page.",target:"#main-content",placement:"top"},{key:"action",title:"Action Button",content:"Important actions are highlighted with prominent buttons like this one.",target:"#action-button",placement:"top"}];return e.jsxs("div",{children:[e.jsxs("div",{className:"demo-layout",children:[e.jsxs("header",{className:"demo-header",children:[e.jsx("h2",{id:"demo-header",children:"Demo Application Header"}),e.jsx("div",{className:"demo-nav",children:e.jsx(v,{id:"nav-button",children:"Navigation"})})]}),e.jsx("main",{className:"demo-main",children:e.jsx(w,{id:"main-content",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Main Content Area"}),e.jsx("p",{children:"This is where the main content would be displayed."})]})})}),e.jsxs("div",{className:"demo-center-with-margin",children:[e.jsx(v,{id:"action-button",children:"Call to Action"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(v,{id:"start-tour-button",onClick:()=>a(!0),children:"Start Tour"})]})]}),e.jsx(f,{...i,open:s,current:u,steps:p,onClose:()=>a(!1),onChange:N=>c(N),onFinish:()=>{a(!1),c(0)}})]})},O={render:H,args:{open:!1,current:0,mask:!0}},_={render:H,args:{open:!1,current:0,mask:!1}},B={render:H,args:{open:!1,current:0,mask:{style:{borderRadius:"16px"},color:"rgba(0, 100, 200, 0.3)"}}},R={render:()=>{const[i,s]=n.useState(!1),[a,u]=n.useState(0),c=[{key:"top",title:"Top Placement",content:"This tooltip appears above the target element.",target:"#placement-center",placement:"top"},{key:"bottom",title:"Bottom Placement",content:"This tooltip appears below the target element.",target:"#placement-center",placement:"bottom"},{key:"left",title:"Left Placement",content:"This tooltip appears to the left of the target element.",target:"#placement-center",placement:"left"},{key:"right",title:"Right Placement",content:"This tooltip appears to the right of the target element.",target:"#placement-center",placement:"right"},{key:"center",title:"Center Placement",content:"This tooltip appears in the center of the screen, not anchored to any element.",placement:"center"}];return e.jsxs("div",{className:"demo-center-large",children:[e.jsx(w,{id:"placement-center",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Target Element"}),e.jsx("p",{children:"The tour will show different placements around this element"})]})}),e.jsx("div",{className:"demo-center-with-margin-large",children:e.jsx(v,{id:"placement-demo-button",onClick:()=>s(!0),children:"Start Placement Demo"})}),e.jsx(f,{open:i,current:a,steps:c,mask:!0,onClose:()=>s(!1),onChange:p=>u(p),onFinish:()=>{s(!1),u(0)}})]})}},F={render:()=>{const[i,s]=n.useState(!1),[a,u]=n.useState(0),c=[{key:"custom-content",title:"Custom Content Example",content:e.jsxs("div",{className:"demo-custom-content",children:[e.jsxs("p",{children:["You can include ",e.jsx("strong",{children:"rich HTML content"})," in descriptions:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Bullet points"}),e.jsx("li",{children:e.jsx("em",{children:"Emphasized text"})}),e.jsx("li",{children:e.jsx("code",{children:"Code snippets"})})]}),e.jsx("p",{className:"demo-custom-highlight",children:"Even custom styled content!"})]}),target:"#custom-target",placement:"right"},{key:"interactive",title:"Interactive Elements",content:e.jsxs("div",{children:[e.jsx("p",{children:"Steps can include interactive elements:"}),e.jsx("button",{className:"demo-interactive-button",onClick:()=>alert("Button clicked!"),children:"Click me!"})]}),target:"#custom-target",placement:"bottom"}];return e.jsxs("div",{className:"demo-center-large",children:[e.jsx(w,{id:"custom-target",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Custom Content Target"}),e.jsx("p",{children:"This tour demonstrates rich content capabilities"})]})}),e.jsx("div",{className:"demo-center-with-margin-large",children:e.jsx(v,{id:"custom-demo-button",onClick:()=>s(!0),children:"Start Custom Content Tour"})}),e.jsx(f,{open:i,current:a,steps:c,mask:!0,onClose:()=>s(!1),onChange:p=>u(p),onFinish:()=>{s(!1),u(0)}})]})}},M={render:()=>{const[i,s]=n.useState(!1),[a,u]=n.useState(0),c=[{key:"non-clickable",title:"Non-clickable Mask",content:"The mask cannot be clicked to close the tour. Use the close button or navigation buttons.",target:"#mask-demo",placement:"top",mask:{style:{borderRadius:"12px"},color:"rgba(255, 0, 0, 0.2)"}}];return e.jsxs("div",{className:"demo-center-large",children:[e.jsx(w,{id:"mask-demo",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Target Element"}),e.jsx("p",{children:"Try clicking the mask - it won't close the tour"})]})}),e.jsx("div",{className:"demo-center-with-margin-large",children:e.jsx(v,{id:"mask-demo-button",variant:"red",onClick:()=>s(!0),children:"Start Non-clickable Demo"})}),e.jsx(f,{open:i,current:a,steps:c,mask:!0,maskClosable:!1,onClose:()=>s(!1),onChange:p=>u(p),onFinish:()=>{s(!1),u(0)}})]})}},A={render:()=>{const[i,s]=n.useState(!1),[a,u]=n.useState(0),c=[{key:"keyboard-intro",title:"Keyboard Navigation",content:"You can navigate this tour using keyboard shortcuts: ← → for previous/next, Esc to close.",target:"#keyboard-target",placement:"bottom"},{key:"arrow-keys",title:"Arrow Keys",content:"Press the left or right arrow keys to navigate between steps.",target:"#keyboard-target",placement:"top"},{key:"escape-key",title:"Escape Key",content:"Press the Escape key to close the tour at any time.",target:"#keyboard-target",placement:"left"}];return e.jsxs("div",{className:"demo-center-large",children:[e.jsx(w,{id:"keyboard-target",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Keyboard Navigation Demo"}),e.jsx("p",{children:"Focus will be managed automatically during the tour"})]})}),e.jsx("div",{className:"demo-center-with-margin-large",children:e.jsx(v,{id:"keyboard-demo-button",onClick:()=>s(!0),children:"Start Keyboard Demo (try arrow keys and Esc)"})}),e.jsx(f,{open:i,current:a,steps:c,mask:!0,onClose:()=>s(!1),onChange:p=>u(p),onFinish:()=>{s(!1),u(0)}})]})}},K={render:()=>{const[i,s]=n.useState(!0),[a,u]=n.useState(0),c=[{key:"interactive-intro",title:"Interactive Tour",content:"This tour is already open so you can interact with it immediately. Try the navigation buttons!",target:"#interactive-target",placement:"right"},{key:"step-navigation",title:"Step Navigation",content:"Use the Previous and Next buttons to navigate, or click the step counter to see progress.",target:"#interactive-target",placement:"bottom"},{key:"close-options",title:"Close Options",content:"You can close the tour using the X button in the top-right corner of this tooltip.",target:"#interactive-target",placement:"left"}];return e.jsxs("div",{className:"demo-center-large",children:[e.jsx(w,{id:"interactive-target",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Interactive Tour Target"}),e.jsx("p",{children:"This tour opens automatically for immediate interaction"})]})}),e.jsx(f,{open:i,current:a,steps:c,mask:{color:"rgba(100, 50, 200, 0.3)",style:{borderRadius:"20px"}},onClose:()=>s(!1),onChange:p=>u(p),onFinish:()=>{s(!1),u(0)}})]})}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: BasicDemo,
  args: {
    open: false,
    current: 0,
    mask: true
  }
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: BasicDemo,
  args: {
    open: false,
    current: 0,
    mask: false
  }
}`,..._.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: BasicDemo,
  args: {
    open: false,
    current: 0,
    mask: {
      style: {
        borderRadius: '16px'
      },
      color: 'rgba(0, 100, 200, 0.3)'
    }
  }
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const steps = [{
      key: 'top',
      title: 'Top Placement',
      content: 'This tooltip appears above the target element.',
      target: '#placement-center',
      placement: 'top' as const
    }, {
      key: 'bottom',
      title: 'Bottom Placement',
      content: 'This tooltip appears below the target element.',
      target: '#placement-center',
      placement: 'bottom' as const
    }, {
      key: 'left',
      title: 'Left Placement',
      content: 'This tooltip appears to the left of the target element.',
      target: '#placement-center',
      placement: 'left' as const
    }, {
      key: 'right',
      title: 'Right Placement',
      content: 'This tooltip appears to the right of the target element.',
      target: '#placement-center',
      placement: 'right' as const
    }, {
      key: 'center',
      title: 'Center Placement',
      content: 'This tooltip appears in the center of the screen, not anchored to any element.',
      placement: 'center' as const
    }];
    return <div className="demo-center-large">\r
        <DemoCard id="placement-center">\r
          <div>\r
            <h3>Target Element</h3>\r
            <p>The tour will show different placements around this element</p>\r
          </div>\r
        </DemoCard>\r
        <div className="demo-center-with-margin-large">\r
          <DemoButton id="placement-demo-button" onClick={() => setOpen(true)}>\r
            Start Placement Demo\r
          </DemoButton>\r
        </div>\r
\r
        <Tour open={open} current={current} steps={steps} mask={true} onClose={() => setOpen(false)} onChange={step => setCurrent(step)} onFinish={() => {
        setOpen(false);
        setCurrent(0);
      }} />\r
      </div>;
  }
}`,...R.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const steps = [{
      key: 'custom-content',
      title: 'Custom Content Example',
      content: <div className="demo-custom-content">\r
            <p>You can include <strong>rich HTML content</strong> in descriptions:</p>\r
            <ul>\r
              <li>Bullet points</li>\r
              <li><em>Emphasized text</em></li>\r
              <li><code>Code snippets</code></li>\r
            </ul>\r
            <p className="demo-custom-highlight">\r
              Even custom styled content!\r
            </p>\r
          </div>,
      target: '#custom-target',
      placement: 'right' as const
    }, {
      key: 'interactive',
      title: 'Interactive Elements',
      content: <div>\r
            <p>Steps can include interactive elements:</p>\r
            <button className="demo-interactive-button" onClick={() => alert('Button clicked!')}>\r
              Click me!\r
            </button>\r
          </div>,
      target: '#custom-target',
      placement: 'bottom' as const
    }];
    return <div className="demo-center-large">\r
        <DemoCard id="custom-target">\r
          <div>\r
            <h3>Custom Content Target</h3>\r
            <p>This tour demonstrates rich content capabilities</p>\r
          </div>\r
        </DemoCard>\r
        <div className="demo-center-with-margin-large">\r
          <DemoButton id="custom-demo-button" onClick={() => setOpen(true)}>\r
            Start Custom Content Tour\r
          </DemoButton>\r
        </div>\r
\r
        <Tour open={open} current={current} steps={steps} mask={true} onClose={() => setOpen(false)} onChange={step => setCurrent(step)} onFinish={() => {
        setOpen(false);
        setCurrent(0);
      }} />\r
      </div>;
  }
}`,...F.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const steps = [{
      key: 'non-clickable',
      title: 'Non-clickable Mask',
      content: 'The mask cannot be clicked to close the tour. Use the close button or navigation buttons.',
      target: '#mask-demo',
      placement: 'top' as const,
      mask: {
        style: {
          borderRadius: '12px'
        },
        color: 'rgba(255, 0, 0, 0.2)'
      }
    }];
    return <div className="demo-center-large">\r
        <DemoCard id="mask-demo">\r
          <div>\r
            <h3>Target Element</h3>\r
            <p>Try clicking the mask - it won't close the tour</p>\r
          </div>\r
        </DemoCard>\r
        <div className="demo-center-with-margin-large">\r
          <DemoButton id="mask-demo-button" variant="red" onClick={() => setOpen(true)}>\r
            Start Non-clickable Demo\r
          </DemoButton>\r
        </div>\r
\r
        <Tour open={open} current={current} steps={steps} mask={true} maskClosable={false} onClose={() => setOpen(false)} onChange={step => setCurrent(step)} onFinish={() => {
        setOpen(false);
        setCurrent(0);
      }} />\r
      </div>;
  }
}`,...M.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const steps = [{
      key: 'keyboard-intro',
      title: 'Keyboard Navigation',
      content: 'You can navigate this tour using keyboard shortcuts: ← → for previous/next, Esc to close.',
      target: '#keyboard-target',
      placement: 'bottom' as const
    }, {
      key: 'arrow-keys',
      title: 'Arrow Keys',
      content: 'Press the left or right arrow keys to navigate between steps.',
      target: '#keyboard-target',
      placement: 'top' as const
    }, {
      key: 'escape-key',
      title: 'Escape Key',
      content: 'Press the Escape key to close the tour at any time.',
      target: '#keyboard-target',
      placement: 'left' as const
    }];
    return <div className="demo-center-large">\r
        <DemoCard id="keyboard-target">\r
          <div>\r
            <h3>Keyboard Navigation Demo</h3>\r
            <p>Focus will be managed automatically during the tour</p>\r
          </div>\r
        </DemoCard>\r
        <div className="demo-center-with-margin-large">\r
          <DemoButton id="keyboard-demo-button" onClick={() => setOpen(true)}>\r
            Start Keyboard Demo (try arrow keys and Esc)\r
          </DemoButton>\r
        </div>\r
\r
        <Tour open={open} current={current} steps={steps} mask={true} onClose={() => setOpen(false)} onChange={step => setCurrent(step)} onFinish={() => {
        setOpen(false);
        setCurrent(0);
      }} />\r
      </div>;
  }
}`,...A.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    const [current, setCurrent] = useState(0);
    const steps = [{
      key: 'interactive-intro',
      title: 'Interactive Tour',
      content: 'This tour is already open so you can interact with it immediately. Try the navigation buttons!',
      target: '#interactive-target',
      placement: 'right' as const
    }, {
      key: 'step-navigation',
      title: 'Step Navigation',
      content: 'Use the Previous and Next buttons to navigate, or click the step counter to see progress.',
      target: '#interactive-target',
      placement: 'bottom' as const
    }, {
      key: 'close-options',
      title: 'Close Options',
      content: 'You can close the tour using the X button in the top-right corner of this tooltip.',
      target: '#interactive-target',
      placement: 'left' as const
    }];
    return <div className="demo-center-large">\r
        <DemoCard id="interactive-target">\r
          <div>\r
            <h3>Interactive Tour Target</h3>\r
            <p>This tour opens automatically for immediate interaction</p>\r
          </div>\r
        </DemoCard>\r
\r
        <Tour open={open} current={current} steps={steps} mask={{
        color: 'rgba(100, 50, 200, 0.3)',
        style: {
          borderRadius: '20px'
        }
      }} onClose={() => setOpen(false)} onChange={step => setCurrent(step)} onFinish={() => {
        setOpen(false);
        setCurrent(0);
      }} />\r
      </div>;
  }
}`,...K.parameters?.docs?.source}}};const be=["Default","WithoutMask","CustomMask","DifferentPlacements","CustomContent","NonClickableMask","KeyboardNavigation","Interactive"];export{F as CustomContent,B as CustomMask,O as Default,R as DifferentPlacements,K as Interactive,A as KeyboardNavigation,M as NonClickableMask,_ as WithoutMask,be as __namedExportsOrder,ge as default};
