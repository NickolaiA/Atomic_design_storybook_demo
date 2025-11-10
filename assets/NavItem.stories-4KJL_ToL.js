import{j as e,R as h}from"./iframe-C-Dpaqp0.js";import{N as a}from"./NavItem-C7D4Kptp.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C2VW0K67.js";import"./Text-DKFgGKuj.js";const y={title:"Molecules/NavItem",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{icon:{control:{type:"select"},options:["home","user"],description:"Icon to display in the nav item"},label:{control:"text",description:"Text label for the nav item"},active:{control:"boolean",description:"Whether the nav item is in active state"},onClick:{action:"clicked",description:"Callback function when nav item is clicked"}}},i={args:{icon:"home",label:"Home",active:!1}},o={args:{icon:"home",label:"Home",active:!0}},r={args:{icon:"user",label:"Profile",active:!1}},s={args:{icon:"user",label:"Profile",active:!0}},c={args:{icon:"home",label:"Dashboard",active:!1}},l={args:{icon:"user",label:"Settings",active:!1}},m={args:{icon:"home",label:"Very Long Navigation Label",active:!1}},d={render:n=>{const u=()=>{alert(`Clicked: ${n.label}`)};return e.jsxs("div",{className:"nav-item-demo",children:[e.jsx(a,{icon:n.icon||"home",label:n.label||"Home",active:n.active,onClick:u}),e.jsx("p",{children:"Click the nav item to see an alert"}),e.jsx("style",{children:`
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
        `})]})},args:{icon:"home",label:"Home",active:!1}},v={render:()=>{const[n,u]=h.useState("home"),g=[{id:"home",icon:"home",label:"Home"},{id:"profile",icon:"user",label:"Profile"},{id:"dashboard",icon:"home",label:"Dashboard"},{id:"settings",icon:"user",label:"Settings"}];return e.jsxs("div",{className:"navigation-menu",children:[e.jsx("h3",{children:"Navigation Menu"}),e.jsx("div",{className:"nav-list",children:g.map(t=>e.jsx(a,{icon:t.icon,label:t.label,active:n===t.id,onClick:()=>u(t.id)},t.id))}),e.jsxs("p",{children:["Active item: ",n]}),e.jsx("style",{children:`
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
      `})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    label: 'Home',
    active: false
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    label: 'Home',
    active: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'user',
    label: 'Profile',
    active: false
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'user',
    label: 'Profile',
    active: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    label: 'Dashboard',
    active: false
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'user',
    label: 'Settings',
    active: false
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    label: 'Very Long Navigation Label',
    active: false
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const j=["Default","Active","UserNav","UserNavActive","Dashboard","Settings","LongLabel","Interactive","NavigationMenu","AllStates"];export{o as Active,p as AllStates,c as Dashboard,i as Default,d as Interactive,m as LongLabel,v as NavigationMenu,l as Settings,r as UserNav,s as UserNavActive,j as __namedExportsOrder,y as default};
