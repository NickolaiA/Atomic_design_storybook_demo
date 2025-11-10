import{r as o,j as e}from"./iframe-NKDFF6YA.js";import{r as ee}from"./index-DT28tMsV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAK6JnnV.js";const ne=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),te=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),re=({direction:r="down"})=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:`menu-chevron ${r==="right"?"menu-chevron--right":"menu-chevron--down"}`,children:e.jsx("polyline",{points:"6,9 12,15 18,9"})}),V=({item:r,level:l,isOpen:f,onToggle:O,onItemClick:h,isMobile:u,resetKey:b})=>{const c=r.children&&r.children.length>0,[L,d]=o.useState({}),$=o.useRef(null),v=n=>{if(r.disabled){n.preventDefault();return}c?(n.preventDefault(),O()):(r.onClick&&(n.preventDefault(),r.onClick()),h(r))},y=n=>{d(a=>{const k=a[n],p={};return k?p[n]=!1:(r.children?.forEach(x=>{x.id!==n&&(p[x.id]=!1)}),p[n]=!0),{...a,...p}})},s=["menu-item",`menu-item--level-${l}`,r.disabled&&"menu-item--disabled",c&&"menu-item--has-children"].filter(Boolean).join(" "),w=e.jsxs(e.Fragment,{children:[r.icon&&e.jsx("span",{className:"menu-item__icon",children:r.icon}),e.jsx("span",{className:"menu-item__label",children:r.label}),r.badge&&e.jsx("span",{className:"menu-item__badge",children:r.badge}),c&&e.jsx("span",{className:"menu-item__chevron",children:e.jsx(re,{direction:u||l>0?"down":"right"})})]}),i=()=>{if(u)return{top:200,left:200};const n=document.querySelector(".menu-submenu--level-1");if(!n)return{top:200,left:400};const a=n.getBoundingClientRect();return{top:a.top,left:a.right+8}};return e.jsxs("li",{ref:$,className:s,children:[r.href&&!c?e.jsx("a",{href:r.href,className:"menu-item__link",onClick:v,...r.disabled&&{"aria-disabled":"true"},children:w}):e.jsx("button",{type:"button",className:"menu-item__button",onClick:v,disabled:r.disabled,...c&&{"aria-expanded":f?"true":"false","aria-haspopup":"menu"},children:w}),c&&f&&e.jsx(e.Fragment,{children:l===0||u?e.jsx("ul",{className:`menu-submenu menu-submenu--level-${l+1}`,children:r.children.map(n=>{const a=L[n.id]||!1;return e.jsx(V,{item:n,level:l+1,isOpen:a,onToggle:()=>y(n.id),onItemClick:h,isMobile:u,resetKey:b},`${n.id}-${b||0}`)})}):ee.createPortal(e.jsx("ul",{className:`menu-submenu menu-submenu--level-${l+1}`,style:{position:"fixed",top:`${i().top}px`,left:`${i().left}px`,zIndex:9999},children:r.children.map(n=>{const a=L[n.id]||!1;return e.jsx(V,{item:n,level:l+1,isOpen:a,onToggle:()=>y(n.id),onItemClick:h,isMobile:u,resetKey:b},`${n.id}-${b||0}`)})}),document.body)})]})},K=({items:r,orientation:l="horizontal",variant:f="primary",size:O="medium",hamburgerBreakpoint:h=768,hamburgerIcon:u,closeIcon:b,onItemClick:c,_collapsed:L=!1,onCollapseChange:d,className:$,"aria-label":v,...y})=>{const[s,w]=o.useState(!1),[i,n]=o.useState(!1),[a,k]=o.useState({}),[p,x]=o.useState(0),q=o.useRef(null);o.useEffect(()=>{const t=()=>{w(window.innerWidth<h)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[h]),o.useEffect(()=>{const t=g=>{q.current&&!q.current.contains(g.target)&&(s&&i?(n(!1),d?.(!0)):s||(k({}),x(D=>D+1)))};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[s,i,d]),o.useEffect(()=>{const t=g=>{g.key==="Escape"&&i&&(n(!1),d?.(!0))};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[i,d]);const G=()=>{const t=!i;n(t),d?.(!t)},X=t=>{k(g=>{const D=g[t],j={};return D?j[t]=!1:(r.forEach(J=>{J.id!==t&&(j[J.id]=!1)}),j[t]=!0),{...g,...j}})},Y=t=>{c?.(t),s&&!t.children?.length&&(n(!1),d?.(!0))},Z=["menu",`menu--${l}`,`menu--${f}`,`menu--${O}`,s&&"menu--mobile",s&&i&&"menu--mobile-open",$].filter(Boolean).join(" ");return e.jsxs("nav",{ref:q,className:Z,"aria-label":v||"Main navigation",...y,children:[s&&e.jsx("button",{type:"button",className:"menu__hamburger",onClick:G,"aria-expanded":i?"true":"false","aria-controls":"menu-list","aria-label":i?"Close menu":"Open menu",children:i?b||e.jsx(te,{}):u||e.jsx(ne,{})}),e.jsx("ul",{id:"menu-list",className:"menu__list",role:"menubar",...s&&{"aria-hidden":i?"false":"true"},children:r.map(t=>e.jsx(V,{item:t,level:0,isOpen:a[t.id]||!1,onToggle:()=>X(t.id),onItemClick:Y,isMobile:s,resetKey:p},`${t.id}-${p}`))}),s&&i&&e.jsx("div",{className:"menu__backdrop",onClick:G})]})};K.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItem"}],raw:"MenuItem[]"},description:"Menu items with up to 3 levels of nesting"},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Menu orientation",defaultValue:{value:"'horizontal'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"}]},description:"Menu variant",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of the menu",defaultValue:{value:"'medium'",computed:!1}},hamburgerBreakpoint:{required:!1,tsType:{name:"number"},description:"Whether to show hamburger menu on mobile",defaultValue:{value:"768",computed:!1}},hamburgerIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom hamburger icon"},closeIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Close icon for mobile menu"},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: MenuItem) => void",signature:{arguments:[{type:{name:"MenuItem"},name:"item"}],return:{name:"void"}}},description:"Callback when menu item is clicked"},collapsed:{required:!1,tsType:{name:"boolean"},description:"Whether menu is collapsed on mobile"},onCollapseChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:"Callback when menu collapse state changes"},className:{required:!1,tsType:{name:"string"},description:"Custom CSS class"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessibility label"},_collapsed:{defaultValue:{value:"false",computed:!1},required:!1}}};const R=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),e.jsx("polyline",{points:"9,22 9,12 15,12 15,22"})]}),U=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),F=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M12 1v6m0 6v6m11-7h-6m-6 0H1m11-7a3 3 0 0 1 0 6m-6-3a3 3 0 0 1 0 6"})]}),ie=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"9",cy:"21",r:"1"}),e.jsx("circle",{cx:"20",cy:"21",r:"1"}),e.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),Q=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 16v-4m0-4h.01"})]}),m=[{id:"home",label:"Home",href:"/",icon:e.jsx(R,{})},{id:"products",label:"Products",icon:e.jsx(ie,{}),children:[{id:"electronics",label:"Electronics",children:[{id:"phones",label:"Phones",href:"/products/electronics/phones"},{id:"laptops",label:"Laptops",href:"/products/electronics/laptops"},{id:"tablets",label:"Tablets",href:"/products/electronics/tablets"}]},{id:"clothing",label:"Clothing",children:[{id:"mens",label:"Men's Clothing",href:"/products/clothing/mens"},{id:"womens",label:"Women's Clothing",href:"/products/clothing/womens"},{id:"kids",label:"Kids' Clothing",href:"/products/clothing/kids"}]},{id:"books",label:"Books",href:"/products/books",badge:"New"}]},{id:"services",label:"Services",children:[{id:"consulting",label:"Consulting",children:[{id:"strategy",label:"Strategy",href:"/services/consulting/strategy"},{id:"implementation",label:"Implementation",href:"/services/consulting/implementation"}]},{id:"support",label:"Support",href:"/services/support",badge:"24/7"}]},{id:"account",label:"Account",icon:e.jsx(U,{}),children:[{id:"profile",label:"Profile",href:"/account/profile"},{id:"settings",label:"Settings",href:"/account/settings",icon:e.jsx(F,{})},{id:"logout",label:"Logout",href:"/logout"}]},{id:"about",label:"About",href:"/about",icon:e.jsx(Q,{})},{id:"disabled",label:"Disabled Item",href:"/disabled",disabled:!0}],ce={title:"Atoms/Menu",component:K,parameters:{layout:"padded",docs:{description:{component:"A responsive menu component with hamburger functionality on small screens and support for 3-level nested menus."}}},argTypes:{items:{description:"Array of menu items with up to 3 levels of nesting",control:"object"},orientation:{description:"Menu orientation",control:"select",options:["horizontal","vertical"]},variant:{description:"Menu visual style",control:"select",options:["primary","secondary","outline"]},size:{description:"Menu size",control:"select",options:["small","medium","large"]},hamburgerBreakpoint:{description:"Screen width (px) below which hamburger menu is shown",control:"number"},onItemClick:{description:"Callback when menu item is clicked",action:"item-clicked"},onCollapseChange:{description:"Callback when menu collapse state changes",action:"collapse-changed"}}},C={args:{items:m,orientation:"horizontal",variant:"primary",size:"medium"}},z={args:{items:m,orientation:"vertical",variant:"primary",size:"medium"},parameters:{docs:{description:{story:"Menu displayed vertically with all items stacked."}}}},M={args:{items:m,orientation:"horizontal",variant:"secondary",size:"medium"},parameters:{docs:{description:{story:"Menu with secondary color scheme."}}}},I={args:{items:m,orientation:"horizontal",variant:"outline",size:"medium"},parameters:{docs:{description:{story:"Menu with outline style - transparent background with borders."}}}},S={args:{items:m,orientation:"horizontal",variant:"primary",size:"small"},parameters:{docs:{description:{story:"Compact menu with smaller padding and font size."}}}},P={args:{items:m,orientation:"horizontal",variant:"primary",size:"large"},parameters:{docs:{description:{story:"Large menu with increased padding and font size."}}}},B={args:{items:[{id:"home",label:"Home",href:"/"},{id:"about",label:"About",href:"/about"},{id:"contact",label:"Contact",href:"/contact"}],orientation:"horizontal",variant:"primary",size:"medium"},parameters:{docs:{description:{story:"Simple menu without icons, badges, or nested items."}}}},N={args:{items:[{id:"home",label:"Home",href:"/"},{id:"products",label:"Products",children:[{id:"electronics",label:"Electronics",href:"/products/electronics"},{id:"clothing",label:"Clothing",href:"/products/clothing"},{id:"books",label:"Books",href:"/products/books"}]},{id:"contact",label:"Contact",href:"/contact"}],orientation:"horizontal",variant:"primary",size:"medium"},parameters:{docs:{description:{story:"Menu with two levels - parent items and sub-items."}}}},A={args:{items:[{id:"home",label:"Home",href:"/",icon:e.jsx(R,{})},{id:"account",label:"Account",href:"/account",icon:e.jsx(U,{})},{id:"settings",label:"Settings",href:"/settings",icon:e.jsx(F,{})},{id:"info",label:"Info",href:"/info",icon:e.jsx(Q,{})}],orientation:"horizontal",variant:"primary",size:"medium"},parameters:{docs:{description:{story:"Menu items with icons for better visual hierarchy."}}}},_={args:{items:[{id:"home",label:"Home",href:"/"},{id:"products",label:"Products",href:"/products",badge:"12"},{id:"messages",label:"Messages",href:"/messages",badge:"3"},{id:"notifications",label:"Notifications",href:"/notifications",badge:"New"}],orientation:"horizontal",variant:"primary",size:"medium"},parameters:{docs:{description:{story:"Menu items with badges to show counts or status."}}}},E={args:{items:m,orientation:"horizontal",variant:"primary",size:"medium",hamburgerBreakpoint:1024},parameters:{docs:{description:{story:"Menu that switches to hamburger mode at a custom breakpoint (1024px instead of default 768px)."}}}},H={args:{items:m,orientation:"horizontal",variant:"primary",size:"medium"},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Preview of how the menu appears on mobile devices with hamburger menu."}}}},T={args:{items:[{id:"dashboard",label:"Dashboard",icon:e.jsx(R,{}),onClick:()=>alert("Dashboard clicked!")},{id:"projects",label:"Projects",badge:"5",children:[{id:"active",label:"Active Projects",onClick:()=>alert("Active Projects clicked!"),children:[{id:"project1",label:"Project Alpha",onClick:()=>alert("Project Alpha clicked!")},{id:"project2",label:"Project Beta",onClick:()=>alert("Project Beta clicked!")}]},{id:"archived",label:"Archived Projects",onClick:()=>alert("Archived Projects clicked!")}]},{id:"team",label:"Team",icon:e.jsx(U,{}),children:[{id:"members",label:"Members",onClick:()=>alert("Members clicked!")},{id:"roles",label:"Roles",onClick:()=>alert("Roles clicked!")},{id:"permissions",label:"Permissions",onClick:()=>alert("Permissions clicked!")}]},{id:"settings",label:"Settings",icon:e.jsx(F,{}),onClick:()=>alert("Settings clicked!")}],orientation:"horizontal",variant:"primary",size:"medium"},parameters:{docs:{description:{story:"Interactive menu with onClick handlers that show alerts when items are clicked."}}}},W={args:{items:[{id:"normal",label:"Normal Item",href:"/normal"},{id:"with-icon",label:"With Icon",href:"/icon",icon:e.jsx(R,{})},{id:"with-badge",label:"With Badge",href:"/badge",badge:"99+"},{id:"disabled",label:"Disabled Item",href:"/disabled",disabled:!0},{id:"has-children",label:"Has Children",children:[{id:"child1",label:"Child 1",href:"/child1"},{id:"child2",label:"Child 2",href:"/child2",disabled:!0}]}],orientation:"horizontal",variant:"primary",size:"medium"},parameters:{docs:{description:{story:"Menu demonstrating all possible item states: normal, with icons, with badges, disabled, and with children."}}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleMenuItems,
    orientation: 'horizontal',
    variant: 'primary',
    size: 'medium'
  }
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};const de=["Default","Vertical","Secondary","Outline","Small","Large","SimpleMenu","TwoLevelMenu","WithIcons","WithBadges","CustomHamburgerBreakpoint","MobilePreview","InteractiveExample","AllStates"];export{W as AllStates,E as CustomHamburgerBreakpoint,C as Default,T as InteractiveExample,P as Large,H as MobilePreview,I as Outline,M as Secondary,B as SimpleMenu,S as Small,N as TwoLevelMenu,z as Vertical,_ as WithBadges,A as WithIcons,de as __namedExportsOrder,ce as default};
