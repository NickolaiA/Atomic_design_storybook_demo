import{j as e}from"./jsx-runtime-CDt2p4po.js";import{R as F}from"./index-GiUgBvb1.js";import{N as a}from"./NavItem-Db4trYtO.js";import"./Icon-CDzKQC-X.js";const X={title:"Molecules/NavItem",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{icon:{control:{type:"select"},options:["home","user"],description:"Icon to display in the nav item"},label:{control:"text",description:"Text label for the nav item"},active:{control:"boolean",description:"Whether the nav item is in active state"},onClick:{action:"clicked",description:"Callback function when nav item is clicked"}}},o={args:{icon:"home",label:"Home",active:!1}},i={args:{icon:"home",label:"Home",active:!0}},r={args:{icon:"user",label:"Profile",active:!1}},s={args:{icon:"user",label:"Profile",active:!0}},c={args:{icon:"home",label:"Dashboard",active:!1}},l={args:{icon:"user",label:"Settings",active:!1}},m={args:{icon:"home",label:"Very Long Navigation Label",active:!1}},d={render:n=>{const u=()=>{alert(`Clicked: ${n.label}`)};return e.jsxs("div",{className:"nav-item-demo",children:[e.jsx(a,{icon:n.icon||"home",label:n.label||"Home",active:n.active,onClick:u}),e.jsx("p",{children:"Click the nav item to see an alert"}),e.jsx("style",{children:`
          .nav-item-demo {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
          .nav-item-demo p {
            margin: 0;
            font-size: 14px;
            color: var(--color-text);
            opacity: 0.7;
          }
        `})]})},args:{icon:"home",label:"Home",active:!1}},v={render:()=>{const[n,u]=F.useState("home"),B=[{id:"home",icon:"home",label:"Home"},{id:"profile",icon:"user",label:"Profile"},{id:"dashboard",icon:"home",label:"Dashboard"},{id:"settings",icon:"user",label:"Settings"}];return e.jsxs("div",{className:"navigation-menu",children:[e.jsx("h3",{children:"Navigation Menu"}),e.jsx("div",{className:"nav-list",children:B.map(t=>e.jsx(a,{icon:t.icon,label:t.label,active:n===t.id,onClick:()=>u(t.id)},t.id))}),e.jsxs("p",{children:["Active item: ",n]}),e.jsx("style",{children:`
          .navigation-menu {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 16px;
            max-width: 200px;
          }
          .navigation-menu h3 {
            margin: 0;
            font-size: 16px;
            font-weight: 600;
            color: var(--color-text);
          }
          .nav-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .navigation-menu p {
            margin: 0;
            font-size: 14px;
            color: var(--color-text);
            opacity: 0.7;
            text-align: center;
          }
        `})]})}},p={render:()=>e.jsxs("div",{className:"nav-states-showcase",children:[e.jsxs("div",{className:"nav-group",children:[e.jsx("h4",{children:"Home Icon"}),e.jsx(a,{icon:"home",label:"Inactive",active:!1}),e.jsx(a,{icon:"home",label:"Active",active:!0})]}),e.jsxs("div",{className:"nav-group",children:[e.jsx("h4",{children:"User Icon"}),e.jsx(a,{icon:"user",label:"Inactive",active:!1}),e.jsx(a,{icon:"user",label:"Active",active:!0})]}),e.jsxs("div",{className:"nav-group",children:[e.jsx("h4",{children:"Different Labels"}),e.jsx(a,{icon:"home",label:"Dashboard",active:!1}),e.jsx(a,{icon:"user",label:"Profile Settings",active:!1}),e.jsx(a,{icon:"home",label:"Admin Panel",active:!0})]}),e.jsx("style",{children:`
        .nav-states-showcase {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 16px;
        }
        .nav-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .nav-group h4 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 8px;
        }
      `})]})};var g,h,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    label: 'Home',
    active: false
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,b,N;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    label: 'Home',
    active: true
  }
}`,...(N=(b=i.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var I,y,j;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: 'user',
    label: 'Profile',
    active: false
  }
}`,...(j=(y=r.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var S,A,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: 'user',
    label: 'Profile',
    active: true
  }
}`,...(k=(A=s.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var C,D,H;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    label: 'Dashboard',
    active: false
  }
}`,...(H=(D=c.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var w,L,P;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    icon: 'user',
    label: 'Settings',
    active: false
  }
}`,...(P=(L=l.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var z,U,M;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    label: 'Very Long Navigation Label',
    active: false
  }
}`,...(M=(U=m.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var R,E,T;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    const handleClick = () => {
      alert(\`Clicked: \${args.label}\`);
    };
    return <div className="nav-item-demo">\r
        <NavItem icon={args.icon || 'home'} label={args.label || 'Home'} active={args.active} onClick={handleClick} />\r
        <p>Click the nav item to see an alert</p>\r
        <style>{\`
          .nav-item-demo {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
          .nav-item-demo p {
            margin: 0;
            font-size: 14px;
            color: var(--color-text);
            opacity: 0.7;
          }
        \`}</style>\r
      </div>;
  },
  args: {
    icon: 'home',
    label: 'Home',
    active: false
  }
}`,...(T=(E=d.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var V,_,$;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = React.useState('home');
    const navItems = [{
      id: 'home',
      icon: 'home' as const,
      label: 'Home'
    }, {
      id: 'profile',
      icon: 'user' as const,
      label: 'Profile'
    }, {
      id: 'dashboard',
      icon: 'home' as const,
      label: 'Dashboard'
    }, {
      id: 'settings',
      icon: 'user' as const,
      label: 'Settings'
    }];
    return <div className="navigation-menu">\r
        <h3>Navigation Menu</h3>\r
        <div className="nav-list">\r
          {navItems.map(item => <NavItem key={item.id} icon={item.icon} label={item.label} active={activeItem === item.id} onClick={() => setActiveItem(item.id)} />)}\r
        </div>\r
        <p>Active item: {activeItem}</p>\r
        \r
        <style>{\`
          .navigation-menu {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 16px;
            max-width: 200px;
          }
          .navigation-menu h3 {
            margin: 0;
            font-size: 16px;
            font-weight: 600;
            color: var(--color-text);
          }
          .nav-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .navigation-menu p {
            margin: 0;
            font-size: 14px;
            color: var(--color-text);
            opacity: 0.7;
            text-align: center;
          }
        \`}</style>\r
      </div>;
  }
}`,...($=(_=v.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var O,W,q;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="nav-states-showcase">\r
      <div className="nav-group">\r
        <h4>Home Icon</h4>\r
        <NavItem icon="home" label="Inactive" active={false} />\r
        <NavItem icon="home" label="Active" active={true} />\r
      </div>\r
      \r
      <div className="nav-group">\r
        <h4>User Icon</h4>\r
        <NavItem icon="user" label="Inactive" active={false} />\r
        <NavItem icon="user" label="Active" active={true} />\r
      </div>\r
      \r
      <div className="nav-group">\r
        <h4>Different Labels</h4>\r
        <NavItem icon="home" label="Dashboard" active={false} />\r
        <NavItem icon="user" label="Profile Settings" active={false} />\r
        <NavItem icon="home" label="Admin Panel" active={true} />\r
      </div>\r
      \r
      <style>{\`
        .nav-states-showcase {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 16px;
        }
        .nav-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .nav-group h4 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 8px;
        }
      \`}</style>\r
    </div>
}`,...(q=(W=p.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const Y=["Default","Active","UserNav","UserNavActive","Dashboard","Settings","LongLabel","Interactive","NavigationMenu","AllStates"];export{i as Active,p as AllStates,c as Dashboard,o as Default,d as Interactive,m as LongLabel,v as NavigationMenu,l as Settings,r as UserNav,s as UserNavActive,Y as __namedExportsOrder,X as default};
