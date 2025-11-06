import{j as e,R as M}from"./react-1-DYTeAnAh.js";import{N as o,R as s,S as O,T as t}from"./molecules-oQuZk1qF.js";const H={title:"Molecules/NavItem",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{icon:{control:{type:"select"},options:["home","user"],description:"Icon to display in the nav item"},label:{control:"text",description:"Text label for the nav item"},active:{control:"boolean",description:"Whether the nav item is in active state"},onClick:{action:"clicked",description:"Callback function when nav item is clicked"}}},c={args:{icon:"home",label:"Home",active:!1}},l={args:{icon:"home",label:"Home",active:!0}},d={args:{icon:"user",label:"Profile",active:!1}},m={args:{icon:"user",label:"Profile",active:!0}},p={args:{icon:"home",label:"Dashboard",active:!1}},h={args:{icon:"user",label:"Settings",active:!1}},u={args:{icon:"home",label:"Very Long Navigation Label",active:!1}},g={render:a=>{const r=()=>{alert(`Clicked: ${a.label}`)};return e.jsxs("div",{className:"nav-item-demo",children:[e.jsx(o,{icon:a.icon||"home",label:a.label||"Home",active:a.active,onClick:r}),e.jsx("p",{children:"Click the nav item to see an alert"}),e.jsx("style",{children:`
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
        `})]})},args:{icon:"home",label:"Home",active:!1}},v={render:()=>{const[a,r]=M.useState("home"),V=[{id:"home",icon:"home",label:"Home"},{id:"profile",icon:"user",label:"Profile"},{id:"dashboard",icon:"home",label:"Dashboard"},{id:"settings",icon:"user",label:"Settings"}];return e.jsxs("div",{className:"navigation-menu",children:[e.jsx("h3",{children:"Navigation Menu"}),e.jsx("div",{className:"nav-list",children:V.map(i=>e.jsx(o,{icon:i.icon,label:i.label,active:a===i.id,onClick:()=>r(i.id)},i.id))}),e.jsxs("p",{children:["Active item: ",a]}),e.jsx("style",{children:`
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
        `})]})}},x={render:()=>e.jsxs("div",{className:"nav-states-showcase",children:[e.jsxs("div",{className:"nav-group",children:[e.jsx("h4",{children:"Home Icon"}),e.jsx(o,{icon:"home",label:"Inactive",active:!1}),e.jsx(o,{icon:"home",label:"Active",active:!0})]}),e.jsxs("div",{className:"nav-group",children:[e.jsx("h4",{children:"User Icon"}),e.jsx(o,{icon:"user",label:"Inactive",active:!1}),e.jsx(o,{icon:"user",label:"Active",active:!0})]}),e.jsxs("div",{className:"nav-group",children:[e.jsx("h4",{children:"Different Labels"}),e.jsx(o,{icon:"home",label:"Dashboard",active:!1}),e.jsx(o,{icon:"user",label:"Profile Settings",active:!1}),e.jsx(o,{icon:"home",label:"Admin Panel",active:!0})]}),e.jsx("style",{children:`
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
      `})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    label: 'Home',
    active: false
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    label: 'Home',
    active: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'user',
    label: 'Profile',
    active: false
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'user',
    label: 'Profile',
    active: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    label: 'Dashboard',
    active: false
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'user',
    label: 'Settings',
    active: false
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    label: 'Very Long Navigation Label',
    active: false
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const W=["Default","Active","UserNav","UserNavActive","Dashboard","Settings","LongLabel","Interactive","NavigationMenu","AllStates"],J=Object.freeze(Object.defineProperty({__proto__:null,Active:l,AllStates:x,Dashboard:p,Default:c,Interactive:g,LongLabel:u,NavigationMenu:v,Settings:h,UserNav:d,UserNavActive:m,__namedExportsOrder:W,default:H},Symbol.toStringTag,{value:"Module"})),$={title:"Molecules/RegoSearch",component:s,parameters:{layout:"padded",docs:{description:{component:`
RegoSearch is a molecule component for searching vehicle registration numbers.
It combines a text input for registration numbers with an optional state/territory dropdown.

**Key Features:**
- Text input with uppercase formatting for registration numbers
- Configurable state/territory dropdown
- Support for different country configurations (AU, NZ, etc.)
- Auto-search functionality with debouncing
- Loading states and error handling
- Horizontal and vertical layout options
- Accessible with proper ARIA attributes
- Responsive design
        `}}},argTypes:{showStates:{control:{type:"boolean"},description:"Whether to show the state/territory dropdown"},states:{control:{type:"object"},description:"Array of state options"},defaultState:{control:{type:"text"},description:"Default selected state"},regoPlaceholder:{control:{type:"text"},description:"Placeholder text for rego input"},regoLabel:{control:{type:"text"},description:"Label for rego input"},stateLabel:{control:{type:"text"},description:"Label for state dropdown"},disabled:{control:{type:"boolean"},description:"Whether the component is disabled"},loading:{control:{type:"boolean"},description:"Whether the search is loading"},error:{control:{type:"text"},description:"Error message to display"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size variant"},layout:{control:{type:"select"},options:["horizontal","vertical"],description:"Form layout orientation"},autoSearch:{control:{type:"boolean"},description:"Whether to auto-submit on input change"},autoSearchDelay:{control:{type:"number"},description:"Auto-search delay in milliseconds"}},args:{showStates:!0,regoPlaceholder:"Enter registration number",regoLabel:"Registration Number",stateLabel:"State/Territory",disabled:!1,loading:!1,size:"md",layout:"horizontal",autoSearch:!1,autoSearchDelay:500}},n={args:{onSearch:(a,r)=>{console.log("Search:",{rego:a,state:r})},onRegoChange:a=>{console.log("Rego changed:",a)},onStateChange:a=>{console.log("State changed:",a)}}},b={args:{...n.args,states:[{value:"NSW",label:"New South Wales"},{value:"VIC",label:"Victoria"},{value:"QLD",label:"Queensland"},{value:"WA",label:"Western Australia"},{value:"SA",label:"South Australia"},{value:"TAS",label:"Tasmania"},{value:"ACT",label:"Australian Capital Territory"},{value:"NT",label:"Northern Territory"}],defaultState:"NSW"},parameters:{docs:{description:{story:"Default configuration for Australian states and territories."}}}},f={args:{...n.args,states:[{value:"NZ",label:"New Zealand"}],defaultState:"NZ",stateLabel:"Country"},parameters:{docs:{description:{story:"Configuration for New Zealand with a single country option."}}}},S={args:{...n.args,showStates:!1,regoLabel:"Vehicle Registration",regoPlaceholder:"Enter vehicle registration"},parameters:{docs:{description:{story:"Component without state dropdown - useful for single-jurisdiction searches."}}}},y={args:{...n.args,layout:"vertical"},parameters:{docs:{description:{story:"Vertical layout with fields stacked on top of each other."}}}},w={render:()=>e.jsx("div",{className:"rego-search-story-wrapper",children:e.jsxs("div",{className:"size-variants-demo",children:[e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Small Size"}),e.jsx(s,{size:"sm",regoPlaceholder:"Enter rego",onSearch:(a,r)=>console.log("Small search:",{rego:a,state:r})})]}),e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Medium Size (Default)"}),e.jsx(s,{size:"md",regoPlaceholder:"Enter registration number",onSearch:(a,r)=>console.log("Medium search:",{rego:a,state:r})})]}),e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Large Size"}),e.jsx(s,{size:"lg",regoPlaceholder:"Enter vehicle registration number",onSearch:(a,r)=>console.log("Large search:",{rego:a,state:r})})]})]})}),parameters:{docs:{description:{story:"Different size variants of the RegoSearch component."}}}},N={args:{...n.args,loading:!0,autoSearch:!0},parameters:{docs:{description:{story:"Component in loading state with spinner indicators."}}}},z={args:{...n.args,error:"Invalid registration number. Please check and try again."},parameters:{docs:{description:{story:"Component displaying an error message."}}}},j={args:{...n.args,disabled:!0},parameters:{docs:{description:{story:"Component in disabled state."}}}},A={args:{...n.args,autoSearch:!0,autoSearchDelay:1e3,onSearch:(a,r)=>{console.log("Auto search triggered:",{rego:a,state:r})}},parameters:{docs:{description:{story:"Component with auto-search enabled - searches automatically after typing stops."}}}},C={args:{...n.args,states:[{value:"ON",label:"Ontario"},{value:"QC",label:"Quebec"},{value:"BC",label:"British Columbia"},{value:"AB",label:"Alberta"},{value:"MB",label:"Manitoba"},{value:"SK",label:"Saskatchewan"},{value:"NS",label:"Nova Scotia"},{value:"NB",label:"New Brunswick"},{value:"NL",label:"Newfoundland and Labrador"},{value:"PE",label:"Prince Edward Island"}],defaultState:"ON",stateLabel:"Province/Territory",regoLabel:"License Plate Number",regoPlaceholder:"Enter license plate"},parameters:{docs:{description:{story:"Example with Canadian provinces/territories configuration."}}}},D={render:()=>e.jsx("div",{className:"rego-search-story-wrapper",children:e.jsxs("form",{className:"form-integration-demo",children:[e.jsx("h3",{children:"Vehicle Registration Search Form"}),e.jsx("p",{children:"Search for vehicle information using registration details:"}),e.jsx(s,{layout:"vertical",size:"lg",regoLabel:"Vehicle Registration Number",stateLabel:"Registered State/Territory",regoPlaceholder:"e.g., ABC123",onSearch:(a,r)=>{console.log("Form search:",{rego:a,state:r}),alert(`Searching for vehicle ${a} in ${r}`)}}),e.jsxs("div",{className:"form-note",children:[e.jsx("strong",{children:"Note:"})," This is a demonstration form. In a real application, this would connect to a vehicle registration database."]})]})}),parameters:{docs:{description:{story:"Example of RegoSearch integrated into a larger form context."}}}},L={render:()=>e.jsx("div",{className:"rego-search-story-wrapper",children:e.jsxs("div",{className:"responsive-demo",children:[e.jsx("h3",{children:"Responsive Behavior"}),e.jsx("p",{children:"Resize your browser window to see how the component adapts:"}),e.jsxs("div",{className:"responsive-example",children:[e.jsx("h4",{children:"Horizontal Layout (becomes vertical on mobile)"}),e.jsx(s,{layout:"horizontal",size:"md",onSearch:(a,r)=>console.log("Responsive search:",{rego:a,state:r})})]}),e.jsxs("div",{className:"responsive-note",children:[e.jsx("strong",{children:"Tip:"})," Use Storybook's viewport controls or resize your browser to test the responsive behavior."]})]})}),parameters:{docs:{description:{story:"Demonstration of the component's responsive behavior across different screen sizes."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    onSearch: (rego, state) => {
      console.log('Search:', {
        rego,
        state
      });
    },
    onRegoChange: rego => {
      console.log('Rego changed:', rego);
    },
    onStateChange: state => {
      console.log('State changed:', state);
    }
  }
}`,...n.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    states: [{
      value: 'NSW',
      label: 'New South Wales'
    }, {
      value: 'VIC',
      label: 'Victoria'
    }, {
      value: 'QLD',
      label: 'Queensland'
    }, {
      value: 'WA',
      label: 'Western Australia'
    }, {
      value: 'SA',
      label: 'South Australia'
    }, {
      value: 'TAS',
      label: 'Tasmania'
    }, {
      value: 'ACT',
      label: 'Australian Capital Territory'
    }, {
      value: 'NT',
      label: 'Northern Territory'
    }],
    defaultState: 'NSW'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default configuration for Australian states and territories.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    states: [{
      value: 'NZ',
      label: 'New Zealand'
    }],
    defaultState: 'NZ',
    stateLabel: 'Country'
  },
  parameters: {
    docs: {
      description: {
        story: 'Configuration for New Zealand with a single country option.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showStates: false,
    regoLabel: 'Vehicle Registration',
    regoPlaceholder: 'Enter vehicle registration'
  },
  parameters: {
    docs: {
      description: {
        story: 'Component without state dropdown - useful for single-jurisdiction searches.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: 'vertical'
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical layout with fields stacked on top of each other.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="rego-search-story-wrapper">\r
      <div className="size-variants-demo">\r
        <div className="size-example">\r
          <h3>Small Size</h3>\r
          <RegoSearch size="sm" regoPlaceholder="Enter rego" onSearch={(rego, state) => console.log('Small search:', {
          rego,
          state
        })} />\r
        </div>\r
        \r
        <div className="size-example">\r
          <h3>Medium Size (Default)</h3>\r
          <RegoSearch size="md" regoPlaceholder="Enter registration number" onSearch={(rego, state) => console.log('Medium search:', {
          rego,
          state
        })} />\r
        </div>\r
        \r
        <div className="size-example">\r
          <h3>Large Size</h3>\r
          <RegoSearch size="lg" regoPlaceholder="Enter vehicle registration number" onSearch={(rego, state) => console.log('Large search:', {
          rego,
          state
        })} />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the RegoSearch component.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    autoSearch: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Component in loading state with spinner indicators.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: 'Invalid registration number. Please check and try again.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Component displaying an error message.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Component in disabled state.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    autoSearch: true,
    autoSearchDelay: 1000,
    onSearch: (rego, state) => {
      console.log('Auto search triggered:', {
        rego,
        state
      });
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Component with auto-search enabled - searches automatically after typing stops.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    states: [{
      value: 'ON',
      label: 'Ontario'
    }, {
      value: 'QC',
      label: 'Quebec'
    }, {
      value: 'BC',
      label: 'British Columbia'
    }, {
      value: 'AB',
      label: 'Alberta'
    }, {
      value: 'MB',
      label: 'Manitoba'
    }, {
      value: 'SK',
      label: 'Saskatchewan'
    }, {
      value: 'NS',
      label: 'Nova Scotia'
    }, {
      value: 'NB',
      label: 'New Brunswick'
    }, {
      value: 'NL',
      label: 'Newfoundland and Labrador'
    }, {
      value: 'PE',
      label: 'Prince Edward Island'
    }],
    defaultState: 'ON',
    stateLabel: 'Province/Territory',
    regoLabel: 'License Plate Number',
    regoPlaceholder: 'Enter license plate'
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with Canadian provinces/territories configuration.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="rego-search-story-wrapper">\r
      <form className="form-integration-demo">\r
        <h3>Vehicle Registration Search Form</h3>\r
        <p>Search for vehicle information using registration details:</p>\r
        \r
        <RegoSearch layout="vertical" size="lg" regoLabel="Vehicle Registration Number" stateLabel="Registered State/Territory" regoPlaceholder="e.g., ABC123" onSearch={(rego, state) => {
        console.log('Form search:', {
          rego,
          state
        });
        // In a real application, you would submit this data
        alert(\`Searching for vehicle \${rego} in \${state}\`);
      }} />\r
        \r
        <div className="form-note">\r
          <strong>Note:</strong> This is a demonstration form. In a real application, \r
          this would connect to a vehicle registration database.\r
        </div>\r
      </form>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of RegoSearch integrated into a larger form context.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="rego-search-story-wrapper">\r
      <div className="responsive-demo">\r
        <h3>Responsive Behavior</h3>\r
        <p>Resize your browser window to see how the component adapts:</p>\r
        \r
        <div className="responsive-example">\r
          <h4>Horizontal Layout (becomes vertical on mobile)</h4>\r
          <RegoSearch layout="horizontal" size="md" onSearch={(rego, state) => console.log('Responsive search:', {
          rego,
          state
        })} />\r
        </div>\r
        \r
        <div className="responsive-note">\r
          <strong>Tip:</strong> Use Storybook's viewport controls or resize your browser \r
          to test the responsive behavior.\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of the component\\'s responsive behavior across different screen sizes.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};const F=["Default","AustralianStates","NewZealandConfiguration","NoStatesDropdown","VerticalLayout","SizeVariants","LoadingState","ErrorState","DisabledState","AutoSearch","CustomStates","FormIntegration","ResponsiveDemo"],X=Object.freeze(Object.defineProperty({__proto__:null,AustralianStates:b,AutoSearch:A,CustomStates:C,Default:n,DisabledState:j,ErrorState:z,FormIntegration:D,LoadingState:N,NewZealandConfiguration:f,NoStatesDropdown:S,ResponsiveDemo:L,SizeVariants:w,VerticalLayout:y,__namedExportsOrder:F,default:$},Symbol.toStringTag,{value:"Module"})),Z={title:"Molecules/SearchField",component:O},I={args:{placeholder:"Search products…"}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search products…"
  }
}`,...I.parameters?.docs?.source}}};const U=["Basic"],Y=Object.freeze(Object.defineProperty({__proto__:null,Basic:I,__namedExportsOrder:U,default:Z},Symbol.toStringTag,{value:"Module"})),Q={title:"Molecules/ThemeSwitcher",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["button","select"],description:"Display variant of the theme switcher"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the button variant"}}},T={args:{variant:"button",size:"md"}},R={args:{variant:"button",size:"sm"}},P={args:{variant:"button",size:"md"}},k={args:{variant:"button",size:"lg"}},_={args:{variant:"select"}},B={render:()=>e.jsxs("div",{className:"theme-demo",children:[e.jsx("h3",{children:"Theme Switcher Demo"}),e.jsx("p",{children:"Try switching between themes to see how components adapt:"}),e.jsxs("div",{className:"theme-controls",children:[e.jsxs("div",{className:"control-group",children:[e.jsx("h4",{children:"Button Variant"}),e.jsx(t,{variant:"button",size:"md"})]}),e.jsxs("div",{className:"control-group",children:[e.jsx("h4",{children:"Select Variant"}),e.jsx(t,{variant:"select"})]})]}),e.jsx("div",{className:"theme-preview",children:e.jsxs("div",{className:"preview-card",children:[e.jsx("h4",{children:"Sample Content"}),e.jsx("p",{children:"This content will change appearance based on the selected theme."}),e.jsxs("div",{className:"color-swatches",children:[e.jsx("div",{className:"swatch swatch--bg",children:"Background"}),e.jsx("div",{className:"swatch swatch--panel",children:"Panel"}),e.jsx("div",{className:"swatch swatch--accent",children:"Accent"})]})]})}),e.jsx("style",{children:`
        .theme-demo {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 20px;
          max-width: 600px;
        }
        
        .theme-demo h3 {
          margin: 0;
          color: var(--color-text);
          font-size: 18px;
        }
        
        .theme-demo p {
          margin: 0;
          color: var(--color-text-secondary);
          font-size: 14px;
        }
        
        .theme-controls {
          display: flex;
          gap: 32px;
        }
        
        .control-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .control-group h4 {
          margin: 0;
          color: var(--color-text);
          font-size: 14px;
          font-weight: 600;
        }
        
        .theme-preview {
          margin-top: 16px;
        }
        
        .preview-card {
          background: var(--color-panel);
          border: 1px solid var(--color-border);
          border-radius: var(--radius);
          padding: 16px;
        }
        
        .preview-card h4 {
          margin: 0 0 8px 0;
          color: var(--color-text);
          font-size: 16px;
        }
        
        .preview-card p {
          margin: 0 0 16px 0;
          color: var(--color-text-secondary);
        }
        
        .color-swatches {
          display: flex;
          gap: 8px;
        }
        
        .swatch {
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 12px;
          color: white;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
          border: 1px solid var(--color-border);
        }
        
        .swatch--bg {
          background: var(--color-bg);
        }
        
        .swatch--panel {
          background: var(--color-panel);
        }
        
        .swatch--accent {
          background: var(--color-accent);
        }
      `})]})},E={render:()=>e.jsxs("div",{className:"sizes-showcase",children:[e.jsx("h3",{children:"Button Sizes"}),e.jsxs("div",{className:"size-row",children:[e.jsxs("div",{className:"size-item",children:[e.jsx("label",{children:"Small"}),e.jsx(t,{variant:"button",size:"sm"})]}),e.jsxs("div",{className:"size-item",children:[e.jsx("label",{children:"Medium"}),e.jsx(t,{variant:"button",size:"md"})]}),e.jsxs("div",{className:"size-item",children:[e.jsx("label",{children:"Large"}),e.jsx(t,{variant:"button",size:"lg"})]})]}),e.jsx("h3",{children:"Select Variant"}),e.jsx(t,{variant:"select"}),e.jsx("style",{children:`
        .sizes-showcase {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 16px;
        }
        
        .sizes-showcase h3 {
          margin: 0;
          color: var(--color-text);
          font-size: 16px;
          font-weight: 600;
        }
        
        .size-row {
          display: flex;
          gap: 16px;
          align-items: end;
        }
        
        .size-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }
        
        .size-item label {
          font-size: 12px;
          color: var(--color-text-secondary);
          font-weight: 500;
        }
      `})]})};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'md'
  }
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'sm'
  }
}`,...R.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'md'
  }
}`,...P.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'lg'
  }
}`,...k.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'select'
  }
}`,..._.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div className="theme-demo">\r
      <h3>Theme Switcher Demo</h3>\r
      <p>Try switching between themes to see how components adapt:</p>\r
      \r
      <div className="theme-controls">\r
        <div className="control-group">\r
          <h4>Button Variant</h4>\r
          <ThemeSwitcher variant="button" size="md" />\r
        </div>\r
        \r
        <div className="control-group">\r
          <h4>Select Variant</h4>\r
          <ThemeSwitcher variant="select" />\r
        </div>\r
      </div>\r
      \r
      <div className="theme-preview">\r
        <div className="preview-card">\r
          <h4>Sample Content</h4>\r
          <p>This content will change appearance based on the selected theme.</p>\r
          <div className="color-swatches">\r
            <div className="swatch swatch--bg">Background</div>\r
            <div className="swatch swatch--panel">Panel</div>\r
            <div className="swatch swatch--accent">Accent</div>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <style>{\`
        .theme-demo {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 20px;
          max-width: 600px;
        }
        
        .theme-demo h3 {
          margin: 0;
          color: var(--color-text);
          font-size: 18px;
        }
        
        .theme-demo p {
          margin: 0;
          color: var(--color-text-secondary);
          font-size: 14px;
        }
        
        .theme-controls {
          display: flex;
          gap: 32px;
        }
        
        .control-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .control-group h4 {
          margin: 0;
          color: var(--color-text);
          font-size: 14px;
          font-weight: 600;
        }
        
        .theme-preview {
          margin-top: 16px;
        }
        
        .preview-card {
          background: var(--color-panel);
          border: 1px solid var(--color-border);
          border-radius: var(--radius);
          padding: 16px;
        }
        
        .preview-card h4 {
          margin: 0 0 8px 0;
          color: var(--color-text);
          font-size: 16px;
        }
        
        .preview-card p {
          margin: 0 0 16px 0;
          color: var(--color-text-secondary);
        }
        
        .color-swatches {
          display: flex;
          gap: 8px;
        }
        
        .swatch {
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 12px;
          color: white;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
          border: 1px solid var(--color-border);
        }
        
        .swatch--bg {
          background: var(--color-bg);
        }
        
        .swatch--panel {
          background: var(--color-panel);
        }
        
        .swatch--accent {
          background: var(--color-accent);
        }
      \`}</style>\r
    </div>
}`,...B.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="sizes-showcase">\r
      <h3>Button Sizes</h3>\r
      <div className="size-row">\r
        <div className="size-item">\r
          <label>Small</label>\r
          <ThemeSwitcher variant="button" size="sm" />\r
        </div>\r
        <div className="size-item">\r
          <label>Medium</label>\r
          <ThemeSwitcher variant="button" size="md" />\r
        </div>\r
        <div className="size-item">\r
          <label>Large</label>\r
          <ThemeSwitcher variant="button" size="lg" />\r
        </div>\r
      </div>\r
      \r
      <h3>Select Variant</h3>\r
      <ThemeSwitcher variant="select" />\r
      \r
      <style>{\`
        .sizes-showcase {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 16px;
        }
        
        .sizes-showcase h3 {
          margin: 0;
          color: var(--color-text);
          font-size: 16px;
          font-weight: 600;
        }
        
        .size-row {
          display: flex;
          gap: 16px;
          align-items: end;
        }
        
        .size-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }
        
        .size-item label {
          font-size: 12px;
          color: var(--color-text-secondary);
          font-weight: 500;
        }
      \`}</style>\r
    </div>
}`,...E.parameters?.docs?.source}}};const K=["Default","ButtonSmall","ButtonMedium","ButtonLarge","SelectVariant","InteractiveDemo","AllSizes"],ee=Object.freeze(Object.defineProperty({__proto__:null,AllSizes:E,ButtonLarge:k,ButtonMedium:P,ButtonSmall:R,Default:T,InteractiveDemo:B,SelectVariant:_,__namedExportsOrder:K,default:Q},Symbol.toStringTag,{value:"Module"}));export{J as N,X as R,Y as S,ee as T};
