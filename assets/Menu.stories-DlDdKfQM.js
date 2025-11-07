import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as c}from"./index-GiUgBvb1.js";import{r as qe}from"./index-CROobee-.js";const De=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),Ve=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Ue=({direction:r="down"})=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:`menu-chevron ${r==="right"?"menu-chevron--right":"menu-chevron--down"}`,children:e.jsx("polyline",{points:"6,9 12,15 18,9"})}),V=({item:r,level:d,isOpen:v,onToggle:L,onItemClick:b,isMobile:p,resetKey:f})=>{const l=r.children&&r.children.length>0,[$,i]=c.useState({}),q=c.useRef(null),y=n=>{if(r.disabled){n.preventDefault();return}l?(n.preventDefault(),L()):(r.onClick&&(n.preventDefault(),r.onClick()),b(r))},w=n=>{i(o=>{var j;const k=o[n],h={};return k?h[n]=!1:((j=r.children)==null||j.forEach(g=>{g.id!==n&&(h[g.id]=!1)}),h[n]=!0),{...o,...h}})},a=["menu-item",`menu-item--level-${d}`,r.disabled&&"menu-item--disabled",l&&"menu-item--has-children"].filter(Boolean).join(" "),x=e.jsxs(e.Fragment,{children:[r.icon&&e.jsx("span",{className:"menu-item__icon",children:r.icon}),e.jsx("span",{className:"menu-item__label",children:r.label}),r.badge&&e.jsx("span",{className:"menu-item__badge",children:r.badge}),l&&e.jsx("span",{className:"menu-item__chevron",children:e.jsx(Ue,{direction:p||d>0?"down":"right"})})]}),s=()=>{if(p)return{top:200,left:200};const n=document.querySelector(".menu-submenu--level-1");if(!n)return{top:200,left:400};const o=n.getBoundingClientRect();return{top:o.top,left:o.right+8}};return e.jsxs("li",{ref:q,className:a,children:[r.href&&!l?e.jsx("a",{href:r.href,className:"menu-item__link",onClick:y,...r.disabled&&{"aria-disabled":"true"},children:x}):e.jsx("button",{type:"button",className:"menu-item__button",onClick:y,disabled:r.disabled,...l&&{"aria-expanded":v?"true":"false","aria-haspopup":"menu"},children:x}),l&&v&&e.jsx(e.Fragment,{children:d===0||p?e.jsx("ul",{className:`menu-submenu menu-submenu--level-${d+1}`,children:r.children.map(n=>{const o=$[n.id]||!1;return e.jsx(V,{item:n,level:d+1,isOpen:o,onToggle:()=>w(n.id),onItemClick:b,isMobile:p,resetKey:f},`${n.id}-${f||0}`)})}):qe.createPortal(e.jsx("ul",{className:`menu-submenu menu-submenu--level-${d+1}`,style:{position:"fixed",top:`${s().top}px`,left:`${s().left}px`,zIndex:9999},children:r.children.map(n=>{const o=$[n.id]||!1;return e.jsx(V,{item:n,level:d+1,isOpen:o,onToggle:()=>w(n.id),onItemClick:b,isMobile:p,resetKey:f},`${n.id}-${f||0}`)})}),document.body)})]})},We=({items:r,orientation:d="horizontal",variant:v="primary",size:L="medium",hamburgerBreakpoint:b=768,hamburgerIcon:p,closeIcon:f,onItemClick:l,collapsed:$=!1,onCollapseChange:i,className:q,"aria-label":y,...w})=>{const[a,x]=c.useState(!1),[s,n]=c.useState(!1),[o,k]=c.useState({}),[h,j]=c.useState(0),g=c.useRef(null);c.useEffect(()=>{const t=()=>{x(window.innerWidth<b)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[b]),c.useEffect(()=>{const t=m=>{g.current&&!g.current.contains(m.target)&&(a&&s?(n(!1),i==null||i(!0)):a||(k({}),j(D=>D+1)))};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[a,s,i]),c.useEffect(()=>{const t=m=>{m.key==="Escape"&&s&&(n(!1),i==null||i(!0))};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[s,i]);const G=()=>{const t=!s;n(t),i==null||i(!t)},Oe=t=>{k(m=>{const D=m[t],z={};return D?z[t]=!1:(r.forEach(J=>{J.id!==t&&(z[J.id]=!1)}),z[t]=!0),{...m,...z}})},Le=t=>{var m;l==null||l(t),a&&!((m=t.children)!=null&&m.length)&&(n(!1),i==null||i(!0))},$e=["menu",`menu--${d}`,`menu--${v}`,`menu--${L}`,a&&"menu--mobile",a&&s&&"menu--mobile-open",q].filter(Boolean).join(" ");return e.jsxs("nav",{ref:g,className:$e,"aria-label":y||"Main navigation",...w,children:[a&&e.jsx("button",{type:"button",className:"menu__hamburger",onClick:G,"aria-expanded":s?"true":"false","aria-controls":"menu-list","aria-label":s?"Close menu":"Open menu",children:s?f||e.jsx(Ve,{}):p||e.jsx(De,{})}),e.jsx("ul",{id:"menu-list",className:"menu__list",role:"menubar",...a&&{"aria-hidden":s?"false":"true"},children:r.map(t=>e.jsx(V,{item:t,level:0,isOpen:o[t.id]||!1,onToggle:()=>Oe(t.id),onItemClick:Le,isMobile:a,resetKey:h},`${t.id}-${h}`))}),a&&s&&e.jsx("div",{className:"menu__backdrop",onClick:G})]})};We.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:"Menu items with up to 3 levels of nesting"},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Menu orientation",defaultValue:{value:"'horizontal'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"}]},description:"Menu variant",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of the menu",defaultValue:{value:"'medium'",computed:!1}},hamburgerBreakpoint:{required:!1,tsType:{name:"number"},description:"Whether to show hamburger menu on mobile",defaultValue:{value:"768",computed:!1}},hamburgerIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom hamburger icon"},closeIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Close icon for mobile menu"},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: MenuItem) => void",signature:{arguments:[{type:{name:"MenuItem"},name:"item"}],return:{name:"void"}}},description:"Callback when menu item is clicked"},collapsed:{required:!1,tsType:{name:"boolean"},description:"Whether menu is collapsed on mobile",defaultValue:{value:"false",computed:!1}},onCollapseChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:"Callback when menu collapse state changes"},className:{required:!1,tsType:{name:"string"},description:"Custom CSS class"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessibility label"}}};const O=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),e.jsx("polyline",{points:"9,22 9,12 15,12 15,22"})]}),U=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),F=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M12 1v6m0 6v6m11-7h-6m-6 0H1m11-7a3 3 0 0 1 0 6m-6-3a3 3 0 0 1 0 6"})]}),Fe=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"9",cy:"21",r:"1"}),e.jsx("circle",{cx:"20",cy:"21",r:"1"}),e.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),Re=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 16v-4m0-4h.01"})]}),u=[{id:"home",label:"Home",href:"/",icon:e.jsx(O,{})},{id:"products",label:"Products",icon:e.jsx(Fe,{}),children:[{id:"electronics",label:"Electronics",children:[{id:"phones",label:"Phones",href:"/products/electronics/phones"},{id:"laptops",label:"Laptops",href:"/products/electronics/laptops"},{id:"tablets",label:"Tablets",href:"/products/electronics/tablets"}]},{id:"clothing",label:"Clothing",children:[{id:"mens",label:"Men's Clothing",href:"/products/clothing/mens"},{id:"womens",label:"Women's Clothing",href:"/products/clothing/womens"},{id:"kids",label:"Kids' Clothing",href:"/products/clothing/kids"}]},{id:"books",label:"Books",href:"/products/books",badge:"New"}]},{id:"services",label:"Services",children:[{id:"consulting",label:"Consulting",children:[{id:"strategy",label:"Strategy",href:"/services/consulting/strategy"},{id:"implementation",label:"Implementation",href:"/services/consulting/implementation"}]},{id:"support",label:"Support",href:"/services/support",badge:"24/7"}]},{id:"account",label:"Account",icon:e.jsx(U,{}),children:[{id:"profile",label:"Profile",href:"/account/profile"},{id:"settings",label:"Settings",href:"/account/settings",icon:e.jsx(F,{})},{id:"logout",label:"Logout",href:"/logout"}]},{id:"about",label:"About",href:"/about",icon:e.jsx(Re,{})},{id:"disabled",label:"Disabled Item",href:"/disabled",disabled:!0}],Qe={title:"Atoms/Menu",component:We,parameters:{layout:"padded",docs:{description:{component:"A responsive menu component with hamburger functionality on small screens and support for 3-level nested menus."}}},argTypes:{items:{description:"Array of menu items with up to 3 levels of nesting",control:"object"},orientation:{description:"Menu orientation",control:"select",options:["horizontal","vertical"]},variant:{description:"Menu visual style",control:"select",options:["primary","secondary","outline"]},size:{description:"Menu size",control:"select",options:["small","medium","large"]},hamburgerBreakpoint:{description:"Screen width (px) below which hamburger menu is shown",control:"number"},onItemClick:{description:"Callback when menu item is clicked",action:"item-clicked"},onCollapseChange:{description:"Callback when menu collapse state changes",action:"collapse-changed"}}},M={args:{items:u,orientation:"horizontal",variant:"primary",size:"medium"}},S={args:{items:u,orientation:"vertical",variant:"primary",size:"medium"},parameters:{docs:{description:{story:"Menu displayed vertically with all items stacked."}}}},I={args:{items:u,orientation:"horizontal",variant:"secondary",size:"medium"},parameters:{docs:{description:{story:"Menu with secondary color scheme."}}}},C={args:{items:u,orientation:"horizontal",variant:"outline",size:"medium"},parameters:{docs:{description:{story:"Menu with outline style - transparent background with borders."}}}},P={args:{items:u,orientation:"horizontal",variant:"primary",size:"small"},parameters:{docs:{description:{story:"Compact menu with smaller padding and font size."}}}},B={args:{items:u,orientation:"horizontal",variant:"primary",size:"large"},parameters:{docs:{description:{story:"Large menu with increased padding and font size."}}}},N={args:{items:[{id:"home",label:"Home",href:"/"},{id:"about",label:"About",href:"/about"},{id:"contact",label:"Contact",href:"/contact"}],orientation:"horizontal",variant:"primary",size:"medium"},parameters:{docs:{description:{story:"Simple menu without icons, badges, or nested items."}}}},A={args:{items:[{id:"home",label:"Home",href:"/"},{id:"products",label:"Products",children:[{id:"electronics",label:"Electronics",href:"/products/electronics"},{id:"clothing",label:"Clothing",href:"/products/clothing"},{id:"books",label:"Books",href:"/products/books"}]},{id:"contact",label:"Contact",href:"/contact"}],orientation:"horizontal",variant:"primary",size:"medium"},parameters:{docs:{description:{story:"Menu with two levels - parent items and sub-items."}}}},E={args:{items:[{id:"home",label:"Home",href:"/",icon:e.jsx(O,{})},{id:"account",label:"Account",href:"/account",icon:e.jsx(U,{})},{id:"settings",label:"Settings",href:"/settings",icon:e.jsx(F,{})},{id:"info",label:"Info",href:"/info",icon:e.jsx(Re,{})}],orientation:"horizontal",variant:"primary",size:"medium"},parameters:{docs:{description:{story:"Menu items with icons for better visual hierarchy."}}}},H={args:{items:[{id:"home",label:"Home",href:"/"},{id:"products",label:"Products",href:"/products",badge:"12"},{id:"messages",label:"Messages",href:"/messages",badge:"3"},{id:"notifications",label:"Notifications",href:"/notifications",badge:"New"}],orientation:"horizontal",variant:"primary",size:"medium"},parameters:{docs:{description:{story:"Menu items with badges to show counts or status."}}}},_={args:{items:u,orientation:"horizontal",variant:"primary",size:"medium",hamburgerBreakpoint:1024},parameters:{docs:{description:{story:"Menu that switches to hamburger mode at a custom breakpoint (1024px instead of default 768px)."}}}},T={args:{items:u,orientation:"horizontal",variant:"primary",size:"medium"},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Preview of how the menu appears on mobile devices with hamburger menu."}}}},W={args:{items:[{id:"dashboard",label:"Dashboard",icon:e.jsx(O,{}),onClick:()=>alert("Dashboard clicked!")},{id:"projects",label:"Projects",badge:"5",children:[{id:"active",label:"Active Projects",onClick:()=>alert("Active Projects clicked!"),children:[{id:"project1",label:"Project Alpha",onClick:()=>alert("Project Alpha clicked!")},{id:"project2",label:"Project Beta",onClick:()=>alert("Project Beta clicked!")}]},{id:"archived",label:"Archived Projects",onClick:()=>alert("Archived Projects clicked!")}]},{id:"team",label:"Team",icon:e.jsx(U,{}),children:[{id:"members",label:"Members",onClick:()=>alert("Members clicked!")},{id:"roles",label:"Roles",onClick:()=>alert("Roles clicked!")},{id:"permissions",label:"Permissions",onClick:()=>alert("Permissions clicked!")}]},{id:"settings",label:"Settings",icon:e.jsx(F,{}),onClick:()=>alert("Settings clicked!")}],orientation:"horizontal",variant:"primary",size:"medium"},parameters:{docs:{description:{story:"Interactive menu with onClick handlers that show alerts when items are clicked."}}}},R={args:{items:[{id:"normal",label:"Normal Item",href:"/normal"},{id:"with-icon",label:"With Icon",href:"/icon",icon:e.jsx(O,{})},{id:"with-badge",label:"With Badge",href:"/badge",badge:"99+"},{id:"disabled",label:"Disabled Item",href:"/disabled",disabled:!0},{id:"has-children",label:"Has Children",children:[{id:"child1",label:"Child 1",href:"/child1"},{id:"child2",label:"Child 2",href:"/child2",disabled:!0}]}],orientation:"horizontal",variant:"primary",size:"medium"},parameters:{docs:{description:{story:"Menu demonstrating all possible item states: normal, with icons, with badges, disabled, and with children."}}}};var K,Q,X;M.parameters={...M.parameters,docs:{...(K=M.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: sampleMenuItems,
    orientation: 'horizontal',
    variant: 'primary',
    size: 'medium'
  }
}`,...(X=(Q=M.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    items: sampleMenuItems,
    orientation: 'vertical',
    variant: 'primary',
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu displayed vertically with all items stacked.'
      }
    }
  }
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,re;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    items: sampleMenuItems,
    orientation: 'horizontal',
    variant: 'secondary',
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu with secondary color scheme.'
      }
    }
  }
}`,...(re=(te=I.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ie,se,ae;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    items: sampleMenuItems,
    orientation: 'horizontal',
    variant: 'outline',
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu with outline style - transparent background with borders.'
      }
    }
  }
}`,...(ae=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var oe,le,ce;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    items: sampleMenuItems,
    orientation: 'horizontal',
    variant: 'primary',
    size: 'small'
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact menu with smaller padding and font size.'
      }
    }
  }
}`,...(ce=(le=P.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,me,ue;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    items: sampleMenuItems,
    orientation: 'horizontal',
    variant: 'primary',
    size: 'large'
  },
  parameters: {
    docs: {
      description: {
        story: 'Large menu with increased padding and font size.'
      }
    }
  }
}`,...(ue=(me=B.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,he,be;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Home',
      href: '/'
    }, {
      id: 'about',
      label: 'About',
      href: '/about'
    }, {
      id: 'contact',
      label: 'Contact',
      href: '/contact'
    }],
    orientation: 'horizontal',
    variant: 'primary',
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple menu without icons, badges, or nested items.'
      }
    }
  }
}`,...(be=(he=N.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var fe,ge,ve;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Home',
      href: '/'
    }, {
      id: 'products',
      label: 'Products',
      children: [{
        id: 'electronics',
        label: 'Electronics',
        href: '/products/electronics'
      }, {
        id: 'clothing',
        label: 'Clothing',
        href: '/products/clothing'
      }, {
        id: 'books',
        label: 'Books',
        href: '/products/books'
      }]
    }, {
      id: 'contact',
      label: 'Contact',
      href: '/contact'
    }],
    orientation: 'horizontal',
    variant: 'primary',
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu with two levels - parent items and sub-items.'
      }
    }
  }
}`,...(ve=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var ye,we,xe;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Home',
      href: '/',
      icon: <HomeIcon />
    }, {
      id: 'account',
      label: 'Account',
      href: '/account',
      icon: <UserIcon />
    }, {
      id: 'settings',
      label: 'Settings',
      href: '/settings',
      icon: <SettingsIcon />
    }, {
      id: 'info',
      label: 'Info',
      href: '/info',
      icon: <InfoIcon />
    }],
    orientation: 'horizontal',
    variant: 'primary',
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu items with icons for better visual hierarchy.'
      }
    }
  }
}`,...(xe=(we=E.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var ke,je,ze;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Home',
      href: '/'
    }, {
      id: 'products',
      label: 'Products',
      href: '/products',
      badge: '12'
    }, {
      id: 'messages',
      label: 'Messages',
      href: '/messages',
      badge: '3'
    }, {
      id: 'notifications',
      label: 'Notifications',
      href: '/notifications',
      badge: 'New'
    }],
    orientation: 'horizontal',
    variant: 'primary',
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu items with badges to show counts or status.'
      }
    }
  }
}`,...(ze=(je=H.parameters)==null?void 0:je.docs)==null?void 0:ze.source}}};var Me,Se,Ie;_.parameters={..._.parameters,docs:{...(Me=_.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    items: sampleMenuItems,
    orientation: 'horizontal',
    variant: 'primary',
    size: 'medium',
    hamburgerBreakpoint: 1024
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu that switches to hamburger mode at a custom breakpoint (1024px instead of default 768px).'
      }
    }
  }
}`,...(Ie=(Se=_.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var Ce,Pe,Be;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    items: sampleMenuItems,
    orientation: 'horizontal',
    variant: 'primary',
    size: 'medium'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Preview of how the menu appears on mobile devices with hamburger menu.'
      }
    }
  }
}`,...(Be=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:Be.source}}};var Ne,Ae,Ee;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: <HomeIcon />,
      onClick: () => alert('Dashboard clicked!')
    }, {
      id: 'projects',
      label: 'Projects',
      badge: '5',
      children: [{
        id: 'active',
        label: 'Active Projects',
        onClick: () => alert('Active Projects clicked!'),
        children: [{
          id: 'project1',
          label: 'Project Alpha',
          onClick: () => alert('Project Alpha clicked!')
        }, {
          id: 'project2',
          label: 'Project Beta',
          onClick: () => alert('Project Beta clicked!')
        }]
      }, {
        id: 'archived',
        label: 'Archived Projects',
        onClick: () => alert('Archived Projects clicked!')
      }]
    }, {
      id: 'team',
      label: 'Team',
      icon: <UserIcon />,
      children: [{
        id: 'members',
        label: 'Members',
        onClick: () => alert('Members clicked!')
      }, {
        id: 'roles',
        label: 'Roles',
        onClick: () => alert('Roles clicked!')
      }, {
        id: 'permissions',
        label: 'Permissions',
        onClick: () => alert('Permissions clicked!')
      }]
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      onClick: () => alert('Settings clicked!')
    }],
    orientation: 'horizontal',
    variant: 'primary',
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive menu with onClick handlers that show alerts when items are clicked.'
      }
    }
  }
}`,...(Ee=(Ae=W.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.source}}};var He,_e,Te;R.parameters={...R.parameters,docs:{...(He=R.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'normal',
      label: 'Normal Item',
      href: '/normal'
    }, {
      id: 'with-icon',
      label: 'With Icon',
      href: '/icon',
      icon: <HomeIcon />
    }, {
      id: 'with-badge',
      label: 'With Badge',
      href: '/badge',
      badge: '99+'
    }, {
      id: 'disabled',
      label: 'Disabled Item',
      href: '/disabled',
      disabled: true
    }, {
      id: 'has-children',
      label: 'Has Children',
      children: [{
        id: 'child1',
        label: 'Child 1',
        href: '/child1'
      }, {
        id: 'child2',
        label: 'Child 2',
        href: '/child2',
        disabled: true
      }]
    }],
    orientation: 'horizontal',
    variant: 'primary',
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu demonstrating all possible item states: normal, with icons, with badges, disabled, and with children.'
      }
    }
  }
}`,...(Te=(_e=R.parameters)==null?void 0:_e.docs)==null?void 0:Te.source}}};const Xe=["Default","Vertical","Secondary","Outline","Small","Large","SimpleMenu","TwoLevelMenu","WithIcons","WithBadges","CustomHamburgerBreakpoint","MobilePreview","InteractiveExample","AllStates"];export{R as AllStates,_ as CustomHamburgerBreakpoint,M as Default,W as InteractiveExample,B as Large,T as MobilePreview,C as Outline,I as Secondary,N as SimpleMenu,P as Small,A as TwoLevelMenu,S as Vertical,H as WithBadges,E as WithIcons,Xe as __namedExportsOrder,Qe as default};
