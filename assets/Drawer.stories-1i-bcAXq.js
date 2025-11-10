import{r as n,j as e}from"./iframe-NKDFF6YA.js";import{r as ne}from"./index-DT28tMsV.js";import{B as o}from"./Button-GKrNatKZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAK6JnnV.js";const oe={small:{width:"280px",height:"200px"},medium:{width:"400px",height:"300px"},large:{width:"600px",height:"500px"},full:{width:"100vw",height:"100vh"}},a=({open:t,position:s="right",size:r="medium",customSize:c,title:l,closable:h=!0,closeText:m,showBackdrop:w=!0,closeOnBackdrop:p=!0,closeOnEscape:L=!0,lockBodyScroll:f=!0,showHeader:W=!0,headerContent:P,showFooter:q=!1,footerContent:R,className:H="",backdropClassName:V="",zIndex:$=1e3,animationDuration:u=300,container:G,onOpen:_,onClose:i,onBackdropClick:F,children:J})=>{const[Q,A]=n.useState(!1),[I,x]=n.useState(!1),M=n.useRef(null),Y=n.useRef(null),T=n.useRef(null);n.useEffect(()=>(t?(T.current=document.activeElement,A(!0),x(!0),f&&(document.body.style.overflow="hidden"),_?.(),setTimeout(()=>{M.current?.focus(),x(!1)},u)):(x(!0),f&&(document.body.style.overflow=""),i?.(),T.current&&T.current.focus(),setTimeout(()=>{A(!1),x(!1)},u)),()=>{f&&(document.body.style.overflow="")}),[t,u,f,_,i]);const E=n.useCallback(d=>{d.key==="Escape"&&L&&t&&i?.()},[L,t,i]);n.useEffect(()=>{if(t)return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[t,E]);const K=n.useCallback(d=>{d.target===Y.current&&(F?.(),p&&i?.())},[p,F,i]),Z=n.useCallback(()=>{i?.()},[i]);if(!Q)return null;const X=()=>{if(c){const U=typeof c=="number"?`${c}px`:c;return s==="left"||s==="right"?{width:U}:{height:U}}const d=oe[r];return s==="left"||s==="right"?{width:d.width}:{height:d.height}},ee=["drawer",`drawer--${s}`,`drawer--${r}`,t?"drawer--open":"drawer--closed",I?"drawer--animating":"",H].filter(Boolean).join(" "),re=["drawer__backdrop",w?"drawer__backdrop--visible":"drawer__backdrop--hidden",!w&&t?"drawer__backdrop--no-backdrop-open":"",V].filter(Boolean).join(" "),te=e.jsx("div",{className:re,ref:Y,onClick:K,style:{zIndex:$,animationDuration:`${u}ms`},children:e.jsxs("div",{ref:M,className:ee,style:{...X(),animationDuration:`${u}ms`},role:"dialog","aria-modal":"true","aria-label":l||"Drawer",tabIndex:-1,"data-position":s,"data-size":r,"data-open":t,"data-animating":I,children:[W&&(l||P||h)&&e.jsx("div",{className:"drawer__header",children:P||e.jsxs(e.Fragment,{children:[l&&e.jsx("h2",{className:"drawer__title",children:l}),h&&e.jsx("button",{className:"drawer__close",onClick:Z,"aria-label":"Close drawer",type:"button",children:m||"✕"})]})}),e.jsx("div",{className:"drawer__content",children:J}),q&&R&&e.jsx("div",{className:"drawer__footer",children:R})]})}),se=G||document.getElementById("storybook-root")||document.querySelector('[data-testid="storybook-root"]')||document.body;return ne.createPortal(te,se)},pe={title:"Atoms/Drawer",component:a,parameters:{layout:"fullscreen",docs:{description:{component:"Drawer component for slide-out panels and navigation. Supports positioning from any side of the screen, multiple sizes, and comprehensive accessibility features including focus management and keyboard navigation."}}},argTypes:{open:{control:"boolean",description:"Whether the drawer is open"},position:{control:"select",options:["top","right","bottom","left"],description:"Position of the drawer"},size:{control:"select",options:["small","medium","large","full"],description:"Size of the drawer"},customSize:{control:"text",description:"Custom width (for left/right) or height (for top/bottom) - accepts CSS values"},title:{control:"text",description:"Drawer title"},closable:{control:"boolean",description:"Show close button"},showBackdrop:{control:"boolean",description:"Show backdrop/overlay"},closeOnBackdrop:{control:"boolean",description:"Close drawer when backdrop is clicked"},closeOnEscape:{control:"boolean",description:"Close drawer when Escape key is pressed"},lockBodyScroll:{control:"boolean",description:"Prevent body scroll when drawer is open"},showHeader:{control:"boolean",description:"Show header section"},showFooter:{control:"boolean",description:"Show footer section"},zIndex:{control:"number",description:"Z-index for the drawer"},animationDuration:{control:"number",description:"Animation duration in milliseconds"},onOpen:{action:"opened",description:"Callback when drawer opens"},onClose:{action:"closed",description:"Callback when drawer closes"},onBackdropClick:{action:"backdrop-clicked",description:"Callback when backdrop is clicked"}},tags:["autodocs"]},g={render:t=>{const[s,r]=n.useState(!1);return e.jsxs("div",{className:"drawer-story-container",children:[e.jsx(o,{onClick:()=>r(!0),children:"Open Right Drawer"}),e.jsx(a,{...t,open:s,position:"right",title:"Right Drawer",onClose:()=>r(!1),children:e.jsxs("div",{className:"drawer-story-content",children:[e.jsx("h3",{children:"Drawer Content"}),e.jsx("p",{children:"This is a right-positioned drawer. It slides in from the right side of the screen."}),e.jsx("p",{children:"You can include any content here - forms, navigation menus, settings panels, etc."}),e.jsx(o,{onClick:()=>r(!1),children:"Close from Inside"})]})})]})}},v={render:t=>{const[s,r]=n.useState(!1);return e.jsxs("div",{className:"drawer-story-container",children:[e.jsx(o,{onClick:()=>r(!0),children:"Open Left Drawer"}),e.jsx(a,{...t,open:s,position:"left",title:"Left Drawer (Navigation)",onClose:()=>r(!1),children:e.jsx("div",{className:"drawer-story-content",children:e.jsxs("nav",{className:"drawer-story-nav",children:[e.jsx("h3",{children:"Navigation Menu"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#home",children:"Home"})}),e.jsx("li",{children:e.jsx("a",{href:"#products",children:"Products"})}),e.jsx("li",{children:e.jsx("a",{href:"#services",children:"Services"})}),e.jsx("li",{children:e.jsx("a",{href:"#about",children:"About"})}),e.jsx("li",{children:e.jsx("a",{href:"#contact",children:"Contact"})})]})]})})})]})}},j={render:t=>{const[s,r]=n.useState(!1);return e.jsxs("div",{className:"drawer-story-container",children:[e.jsx(o,{onClick:()=>r(!0),children:"Open Top Drawer"}),e.jsx(a,{...t,open:s,position:"top",title:"Top Drawer (Notifications)",onClose:()=>r(!1),children:e.jsxs("div",{className:"drawer-story-content",children:[e.jsx("h3",{children:"Notifications Panel"}),e.jsxs("div",{className:"drawer-story-notifications",children:[e.jsxs("div",{className:"notification-item",children:[e.jsx("strong",{children:"New Message"}),e.jsx("p",{children:"You have received a new message from John Doe."})]}),e.jsxs("div",{className:"notification-item",children:[e.jsx("strong",{children:"System Update"}),e.jsx("p",{children:"System maintenance scheduled for tonight at 2 AM."})]}),e.jsxs("div",{className:"notification-item",children:[e.jsx("strong",{children:"Welcome!"}),e.jsx("p",{children:"Thanks for joining our platform. Get started with our tutorial."})]})]})]})})]})}},y={render:t=>{const[s,r]=n.useState(!1);return e.jsxs("div",{className:"drawer-story-container",children:[e.jsx(o,{onClick:()=>r(!0),children:"Open Bottom Drawer"}),e.jsx(a,{...t,open:s,position:"bottom",title:"Bottom Drawer (Actions)",onClose:()=>r(!1),children:e.jsxs("div",{className:"drawer-story-content",children:[e.jsx("h3",{children:"Quick Actions"}),e.jsxs("div",{className:"drawer-story-actions",children:[e.jsx(o,{size:"sm",children:"Share"}),e.jsx(o,{size:"sm",variant:"secondary",children:"Save"}),e.jsx(o,{size:"sm",variant:"ghost",children:"Print"}),e.jsx(o,{size:"sm",variant:"ghost",children:"Export"})]}),e.jsx("p",{children:"This bottom drawer is perfect for action sheets and mobile-style interfaces."})]})})]})}},D={render:t=>{const[s,r]=n.useState(!1);return e.jsxs("div",{className:"drawer-story-container",children:[e.jsx(o,{onClick:()=>r(!0),children:"Open Small Drawer"}),e.jsx(a,{...t,open:s,position:"right",size:"small",title:"Small Drawer",onClose:()=>r(!1),children:e.jsxs("div",{className:"drawer-story-content",children:[e.jsx("h4",{children:"Compact Size"}),e.jsx("p",{children:"This is a small drawer (280px wide) perfect for simple forms or quick info panels."})]})})]})}},C={render:t=>{const[s,r]=n.useState(!1);return e.jsxs("div",{className:"drawer-story-container",children:[e.jsx(o,{onClick:()=>r(!0),children:"Open Large Drawer"}),e.jsx(a,{...t,open:s,position:"right",size:"large",title:"Large Drawer",onClose:()=>r(!1),children:e.jsxs("div",{className:"drawer-story-content",children:[e.jsx("h3",{children:"Large Content Area"}),e.jsx("p",{children:"This is a large drawer (600px wide) suitable for complex forms, detailed content, or multiple sections."}),e.jsxs("div",{className:"drawer-story-form",children:[e.jsx("h4",{children:"Sample Form"}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Name:"}),e.jsx("input",{type:"text",placeholder:"Enter your name"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Email:"}),e.jsx("input",{type:"email",placeholder:"Enter your email"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Message:"}),e.jsx("textarea",{placeholder:"Enter your message",rows:4})]}),e.jsx(o,{children:"Submit"})]})]})})]})}},N={render:t=>{const[s,r]=n.useState(!1);return e.jsxs("div",{className:"drawer-story-container",children:[e.jsx(o,{onClick:()=>r(!0),children:"Open Full Size Drawer"}),e.jsx(a,{...t,open:s,position:"right",size:"full",title:"Full Size Drawer",onClose:()=>r(!1),children:e.jsxs("div",{className:"drawer-story-content",children:[e.jsx("h3",{children:"Full Screen Experience"}),e.jsx("p",{children:"This drawer takes up the full viewport, perfect for modal-like experiences or complex workflows."}),e.jsx("p",{children:"It's especially useful for:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Multi-step forms"}),e.jsx("li",{children:"Detailed product views"}),e.jsx("li",{children:"Settings panels"}),e.jsx("li",{children:"Mobile-first experiences"})]})]})})]})}},k={render:t=>{const[s,r]=n.useState(!1);return e.jsxs("div",{className:"drawer-story-container",children:[e.jsx(o,{onClick:()=>r(!0),children:"Open Custom Size Drawer"}),e.jsx(a,{...t,open:s,position:"right",customSize:"500px",title:"Custom Size Drawer",onClose:()=>r(!1),children:e.jsxs("div",{className:"drawer-story-content",children:[e.jsx("h3",{children:"Custom Width: 500px"}),e.jsx("p",{children:"You can specify exact dimensions using the customSize prop."}),e.jsx("p",{children:"This works with any CSS unit: px, rem, em, %, vw, vh, etc."})]})})]})}},O={render:t=>{const[s,r]=n.useState(!1);return e.jsxs("div",{className:"drawer-story-container",children:[e.jsx(o,{onClick:()=>r(!0),children:"Open Drawer with Footer"}),e.jsx(a,{...t,open:s,position:"right",title:"Settings Panel",showFooter:!0,footerContent:e.jsxs("div",{className:"drawer-story-footer-actions",children:[e.jsx(o,{variant:"ghost",onClick:()=>r(!1),children:"Cancel"}),e.jsx(o,{onClick:()=>r(!1),children:"Save Changes"})]}),onClose:()=>r(!1),children:e.jsxs("div",{className:"drawer-story-content",children:[e.jsx("h3",{children:"User Settings"}),e.jsxs("div",{className:"drawer-story-form",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Display Name:"}),e.jsx("input",{type:"text",defaultValue:"John Doe"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Email Notifications:"}),e.jsx("input",{type:"checkbox",defaultChecked:!0})," Enable email notifications"]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Theme:"}),e.jsxs("select",{children:[e.jsx("option",{children:"Light"}),e.jsx("option",{children:"Dark"}),e.jsx("option",{children:"Auto"})]})]})]})]})})]})}},S={render:t=>{const[s,r]=n.useState(!1);return e.jsxs("div",{className:"drawer-story-container",children:[e.jsx(o,{onClick:()=>r(!0),children:"Open Drawer (No Backdrop)"}),e.jsx(a,{...t,open:s,position:"left",title:"No Backdrop Drawer",showBackdrop:!1,onClose:()=>r(!1),children:e.jsxs("div",{className:"drawer-story-content",children:[e.jsx("h3",{children:"No Backdrop"}),e.jsx("p",{children:"This drawer doesn't show a backdrop overlay, so you can still interact with the main content."}),e.jsx("p",{children:"Useful for persistent side panels or non-modal interfaces."})]})})]})}},b={render:t=>{const[s,r]=n.useState(!1);return e.jsxs("div",{className:"drawer-story-container",children:[e.jsx(o,{onClick:()=>r(!0),children:"Open Drawer"}),e.jsx(a,{...t,open:s,position:"right",title:"Custom Close Button",closeText:"Done",onClose:()=>r(!1),children:e.jsxs("div",{className:"drawer-story-content",children:[e.jsx("h3",{children:"Custom Close Button"}),e.jsx("p",{children:"The close button shows 'Done' instead of the default ✕ symbol."}),e.jsx("p",{children:"You can customize this with any text or React element."})]})})]})}},B={render:t=>{const[s,r]=n.useState(!1),[c,l]=n.useState(!1),[h,m]=n.useState(!1),[w,p]=n.useState(!1);return e.jsxs("div",{className:"drawer-story-container",children:[e.jsxs("div",{className:"drawer-story-multiple-controls",children:[e.jsx(o,{onClick:()=>r(!0),children:"Left"}),e.jsx(o,{onClick:()=>m(!0),children:"Top"}),e.jsx(o,{onClick:()=>l(!0),children:"Right"}),e.jsx(o,{onClick:()=>p(!0),children:"Bottom"})]}),e.jsx(a,{open:s,position:"left",title:"Left Panel",onClose:()=>r(!1),children:e.jsxs("div",{className:"drawer-story-content",children:[e.jsx("h3",{children:"Left Drawer"}),e.jsx("p",{children:"You can have multiple drawers from different positions."})]})}),e.jsx(a,{open:c,position:"right",title:"Right Panel",onClose:()=>l(!1),children:e.jsxs("div",{className:"drawer-story-content",children:[e.jsx("h3",{children:"Right Drawer"}),e.jsx("p",{children:"Each drawer manages its own state independently."})]})}),e.jsx(a,{open:h,position:"top",title:"Top Panel",onClose:()=>m(!1),children:e.jsxs("div",{className:"drawer-story-content",children:[e.jsx("h3",{children:"Top Drawer"}),e.jsx("p",{children:"Perfect for notifications or quick actions."})]})}),e.jsx(a,{open:w,position:"bottom",title:"Bottom Panel",onClose:()=>p(!1),children:e.jsxs("div",{className:"drawer-story-content",children:[e.jsx("h3",{children:"Bottom Drawer"}),e.jsx("p",{children:"Great for mobile-style action sheets."})]})})]})},parameters:{docs:{description:{story:"Demonstration of multiple drawers from different positions operating independently."}}}},z={render:t=>{const[s,r]=n.useState(!1);return e.jsxs("div",{className:"drawer-story-container",children:[e.jsx(o,{onClick:()=>r(!0),children:"Open Drawer"}),e.jsx(a,{...t,open:s,onClose:()=>r(!1),children:e.jsxs("div",{className:"drawer-story-content",children:[e.jsx("h3",{children:"Playground Drawer"}),e.jsx("p",{children:"Use the controls below to experiment with different drawer configurations."}),e.jsx("p",{children:"You can adjust position, size, backdrop settings, and more."}),e.jsx(o,{onClick:()=>r(!1),children:"Close Drawer"})]})})]})},args:{position:"right",size:"medium",title:"Drawer Title",closable:!0,showBackdrop:!0,closeOnBackdrop:!0,closeOnEscape:!0,lockBodyScroll:!0,showHeader:!0,showFooter:!1,zIndex:1e3,animationDuration:300},parameters:{docs:{description:{story:"Interactive playground for testing all Drawer properties and configurations."}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="drawer-story-container">\r
        <Button onClick={() => setOpen(true)}>\r
          Open Right Drawer\r
        </Button>\r
        \r
        <Drawer {...args} open={open} position="right" title="Right Drawer" onClose={() => setOpen(false)}>\r
          <div className="drawer-story-content">\r
            <h3>Drawer Content</h3>\r
            <p>This is a right-positioned drawer. It slides in from the right side of the screen.</p>\r
            <p>You can include any content here - forms, navigation menus, settings panels, etc.</p>\r
            <Button onClick={() => setOpen(false)}>\r
              Close from Inside\r
            </Button>\r
          </div>\r
        </Drawer>\r
      </div>;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="drawer-story-container">\r
        <Button onClick={() => setOpen(true)}>\r
          Open Left Drawer\r
        </Button>\r
        \r
        <Drawer {...args} open={open} position="left" title="Left Drawer (Navigation)" onClose={() => setOpen(false)}>\r
          <div className="drawer-story-content">\r
            <nav className="drawer-story-nav">\r
              <h3>Navigation Menu</h3>\r
              <ul>\r
                <li><a href="#home">Home</a></li>\r
                <li><a href="#products">Products</a></li>\r
                <li><a href="#services">Services</a></li>\r
                <li><a href="#about">About</a></li>\r
                <li><a href="#contact">Contact</a></li>\r
              </ul>\r
            </nav>\r
          </div>\r
        </Drawer>\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="drawer-story-container">\r
        <Button onClick={() => setOpen(true)}>\r
          Open Top Drawer\r
        </Button>\r
        \r
        <Drawer {...args} open={open} position="top" title="Top Drawer (Notifications)" onClose={() => setOpen(false)}>\r
          <div className="drawer-story-content">\r
            <h3>Notifications Panel</h3>\r
            <div className="drawer-story-notifications">\r
              <div className="notification-item">\r
                <strong>New Message</strong>\r
                <p>You have received a new message from John Doe.</p>\r
              </div>\r
              <div className="notification-item">\r
                <strong>System Update</strong>\r
                <p>System maintenance scheduled for tonight at 2 AM.</p>\r
              </div>\r
              <div className="notification-item">\r
                <strong>Welcome!</strong>\r
                <p>Thanks for joining our platform. Get started with our tutorial.</p>\r
              </div>\r
            </div>\r
          </div>\r
        </Drawer>\r
      </div>;
  }
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="drawer-story-container">\r
        <Button onClick={() => setOpen(true)}>\r
          Open Bottom Drawer\r
        </Button>\r
        \r
        <Drawer {...args} open={open} position="bottom" title="Bottom Drawer (Actions)" onClose={() => setOpen(false)}>\r
          <div className="drawer-story-content">\r
            <h3>Quick Actions</h3>\r
            <div className="drawer-story-actions">\r
              <Button size="sm">Share</Button>\r
              <Button size="sm" variant="secondary">Save</Button>\r
              <Button size="sm" variant="ghost">Print</Button>\r
              <Button size="sm" variant="ghost">Export</Button>\r
            </div>\r
            <p>This bottom drawer is perfect for action sheets and mobile-style interfaces.</p>\r
          </div>\r
        </Drawer>\r
      </div>;
  }
}`,...y.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="drawer-story-container">\r
        <Button onClick={() => setOpen(true)}>\r
          Open Small Drawer\r
        </Button>\r
        \r
        <Drawer {...args} open={open} position="right" size="small" title="Small Drawer" onClose={() => setOpen(false)}>\r
          <div className="drawer-story-content">\r
            <h4>Compact Size</h4>\r
            <p>This is a small drawer (280px wide) perfect for simple forms or quick info panels.</p>\r
          </div>\r
        </Drawer>\r
      </div>;
  }
}`,...D.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="drawer-story-container">\r
        <Button onClick={() => setOpen(true)}>\r
          Open Large Drawer\r
        </Button>\r
        \r
        <Drawer {...args} open={open} position="right" size="large" title="Large Drawer" onClose={() => setOpen(false)}>\r
          <div className="drawer-story-content">\r
            <h3>Large Content Area</h3>\r
            <p>This is a large drawer (600px wide) suitable for complex forms, detailed content, or multiple sections.</p>\r
            \r
            <div className="drawer-story-form">\r
              <h4>Sample Form</h4>\r
              <div className="form-group">\r
                <label>Name:</label>\r
                <input type="text" placeholder="Enter your name" />\r
              </div>\r
              <div className="form-group">\r
                <label>Email:</label>\r
                <input type="email" placeholder="Enter your email" />\r
              </div>\r
              <div className="form-group">\r
                <label>Message:</label>\r
                <textarea placeholder="Enter your message" rows={4}></textarea>\r
              </div>\r
              <Button>Submit</Button>\r
            </div>\r
          </div>\r
        </Drawer>\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="drawer-story-container">\r
        <Button onClick={() => setOpen(true)}>\r
          Open Full Size Drawer\r
        </Button>\r
        \r
        <Drawer {...args} open={open} position="right" size="full" title="Full Size Drawer" onClose={() => setOpen(false)}>\r
          <div className="drawer-story-content">\r
            <h3>Full Screen Experience</h3>\r
            <p>This drawer takes up the full viewport, perfect for modal-like experiences or complex workflows.</p>\r
            <p>It's especially useful for:</p>\r
            <ul>\r
              <li>Multi-step forms</li>\r
              <li>Detailed product views</li>\r
              <li>Settings panels</li>\r
              <li>Mobile-first experiences</li>\r
            </ul>\r
          </div>\r
        </Drawer>\r
      </div>;
  }
}`,...N.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="drawer-story-container">\r
        <Button onClick={() => setOpen(true)}>\r
          Open Custom Size Drawer\r
        </Button>\r
        \r
        <Drawer {...args} open={open} position="right" customSize="500px" title="Custom Size Drawer" onClose={() => setOpen(false)}>\r
          <div className="drawer-story-content">\r
            <h3>Custom Width: 500px</h3>\r
            <p>You can specify exact dimensions using the customSize prop.</p>\r
            <p>This works with any CSS unit: px, rem, em, %, vw, vh, etc.</p>\r
          </div>\r
        </Drawer>\r
      </div>;
  }
}`,...k.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="drawer-story-container">\r
        <Button onClick={() => setOpen(true)}>\r
          Open Drawer with Footer\r
        </Button>\r
        \r
        <Drawer {...args} open={open} position="right" title="Settings Panel" showFooter={true} footerContent={<div className="drawer-story-footer-actions">\r
              <Button variant="ghost" onClick={() => setOpen(false)}>\r
                Cancel\r
              </Button>\r
              <Button onClick={() => setOpen(false)}>\r
                Save Changes\r
              </Button>\r
            </div>} onClose={() => setOpen(false)}>\r
          <div className="drawer-story-content">\r
            <h3>User Settings</h3>\r
            <div className="drawer-story-form">\r
              <div className="form-group">\r
                <label>Display Name:</label>\r
                <input type="text" defaultValue="John Doe" />\r
              </div>\r
              <div className="form-group">\r
                <label>Email Notifications:</label>\r
                <input type="checkbox" defaultChecked /> Enable email notifications\r
              </div>\r
              <div className="form-group">\r
                <label>Theme:</label>\r
                <select>\r
                  <option>Light</option>\r
                  <option>Dark</option>\r
                  <option>Auto</option>\r
                </select>\r
              </div>\r
            </div>\r
          </div>\r
        </Drawer>\r
      </div>;
  }
}`,...O.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="drawer-story-container">\r
        <Button onClick={() => setOpen(true)}>\r
          Open Drawer (No Backdrop)\r
        </Button>\r
        \r
        <Drawer {...args} open={open} position="left" title="No Backdrop Drawer" showBackdrop={false} onClose={() => setOpen(false)}>\r
          <div className="drawer-story-content">\r
            <h3>No Backdrop</h3>\r
            <p>This drawer doesn't show a backdrop overlay, so you can still interact with the main content.</p>\r
            <p>Useful for persistent side panels or non-modal interfaces.</p>\r
          </div>\r
        </Drawer>\r
      </div>;
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="drawer-story-container">\r
        <Button onClick={() => setOpen(true)}>\r
          Open Drawer\r
        </Button>\r
        \r
        <Drawer {...args} open={open} position="right" title="Custom Close Button" closeText="Done" onClose={() => setOpen(false)}>\r
          <div className="drawer-story-content">\r
            <h3>Custom Close Button</h3>\r
            <p>The close button shows 'Done' instead of the default ✕ symbol.</p>\r
            <p>You can customize this with any text or React element.</p>\r
          </div>\r
        </Drawer>\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: _args => {
    const [leftOpen, setLeftOpen] = useState(false);
    const [rightOpen, setRightOpen] = useState(false);
    const [topOpen, setTopOpen] = useState(false);
    const [bottomOpen, setBottomOpen] = useState(false);
    return <div className="drawer-story-container">\r
        <div className="drawer-story-multiple-controls">\r
          <Button onClick={() => setLeftOpen(true)}>Left</Button>\r
          <Button onClick={() => setTopOpen(true)}>Top</Button>\r
          <Button onClick={() => setRightOpen(true)}>Right</Button>\r
          <Button onClick={() => setBottomOpen(true)}>Bottom</Button>\r
        </div>\r
        \r
        <Drawer open={leftOpen} position="left" title="Left Panel" onClose={() => setLeftOpen(false)}>\r
          <div className="drawer-story-content">\r
            <h3>Left Drawer</h3>\r
            <p>You can have multiple drawers from different positions.</p>\r
          </div>\r
        </Drawer>\r
        \r
        <Drawer open={rightOpen} position="right" title="Right Panel" onClose={() => setRightOpen(false)}>\r
          <div className="drawer-story-content">\r
            <h3>Right Drawer</h3>\r
            <p>Each drawer manages its own state independently.</p>\r
          </div>\r
        </Drawer>\r
        \r
        <Drawer open={topOpen} position="top" title="Top Panel" onClose={() => setTopOpen(false)}>\r
          <div className="drawer-story-content">\r
            <h3>Top Drawer</h3>\r
            <p>Perfect for notifications or quick actions.</p>\r
          </div>\r
        </Drawer>\r
        \r
        <Drawer open={bottomOpen} position="bottom" title="Bottom Panel" onClose={() => setBottomOpen(false)}>\r
          <div className="drawer-story-content">\r
            <h3>Bottom Drawer</h3>\r
            <p>Great for mobile-style action sheets.</p>\r
          </div>\r
        </Drawer>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of multiple drawers from different positions operating independently.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="drawer-story-container">\r
        <Button onClick={() => setOpen(true)}>\r
          Open Drawer\r
        </Button>\r
        \r
        <Drawer {...args} open={open} onClose={() => setOpen(false)}>\r
          <div className="drawer-story-content">\r
            <h3>Playground Drawer</h3>\r
            <p>Use the controls below to experiment with different drawer configurations.</p>\r
            <p>You can adjust position, size, backdrop settings, and more.</p>\r
            <Button onClick={() => setOpen(false)}>\r
              Close Drawer\r
            </Button>\r
          </div>\r
        </Drawer>\r
      </div>;
  },
  args: {
    position: 'right',
    size: 'medium',
    title: 'Drawer Title',
    closable: true,
    showBackdrop: true,
    closeOnBackdrop: true,
    closeOnEscape: true,
    lockBodyScroll: true,
    showHeader: true,
    showFooter: false,
    zIndex: 1000,
    animationDuration: 300
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for testing all Drawer properties and configurations.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};const ue=["RightDrawer","LeftDrawer","TopDrawer","BottomDrawer","SmallDrawer","LargeDrawer","FullSizeDrawer","CustomSizeDrawer","DrawerWithFooter","NoBackdropDrawer","CustomCloseText","MultipleDrawers","Playground"];export{y as BottomDrawer,b as CustomCloseText,k as CustomSizeDrawer,O as DrawerWithFooter,N as FullSizeDrawer,C as LargeDrawer,v as LeftDrawer,B as MultipleDrawers,S as NoBackdropDrawer,z as Playground,g as RightDrawer,D as SmallDrawer,j as TopDrawer,ue as __namedExportsOrder,pe as default};
