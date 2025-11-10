import{r as z,j as e}from"./iframe-NKDFF6YA.js";import{T as K}from"./TextInput-ru0E2_yX.js";import{S as H}from"./Select-CdwQrCAe.js";import{B as G}from"./Button-GKrNatKZ.js";import"./preload-helper-PPVm8Dsz.js";const J=[{value:"NSW",label:"New South Wales"},{value:"VIC",label:"Victoria"},{value:"QLD",label:"Queensland"},{value:"WA",label:"Western Australia"},{value:"SA",label:"South Australia"},{value:"TAS",label:"Tasmania"},{value:"ACT",label:"Australian Capital Territory"},{value:"NT",label:"Northern Territory"}],n=({showStates:r=!0,states:a=J,defaultState:D,regoPlaceholder:V="Enter registration number",regoLabel:E="Registration Number",stateLabel:W="State/Territory",onSearch:P,onRegoChange:k,onStateChange:_,disabled:u=!1,loading:c=!1,error:i,size:p="md",className:B="",layout:q="horizontal",autoSearch:A=!1,autoSearchDelay:L=500})=>{const[d,I]=z.useState(""),[j,F]=z.useState(D||(a.length>0?a[0].value:"")),l=z.useRef(void 0),M=o=>{const s=o.target.value.toUpperCase();I(s),k?.(s),A&&s.length>0&&(l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{m(s,j)},L))},Q=o=>{const s=o.target.value;F(s),_?.(s),A&&d.length>0&&(l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{m(d,s)},L))},m=(o,s)=>{const R=o||d,$=s||j;R.trim()&&P?.(R.trim(),r?$:void 0)},Z=o=>{o.preventDefault(),m()},O=o=>{o.key==="Enter"&&(o.preventDefault(),m())},U=["rego-search",`rego-search--${p}`,`rego-search--${q}`,u&&"rego-search--disabled",c&&"rego-search--loading",i&&"rego-search--error",B].filter(Boolean).join(" ");return e.jsx("form",{className:U,onSubmit:Z,noValidate:!0,children:e.jsxs("div",{className:"rego-search__fields",children:[e.jsx("div",{className:"rego-search__field",children:e.jsx(K,{id:"rego-input",type:"text",label:E,value:d,onChange:M,onKeyDown:O,placeholder:V,disabled:u,loading:c,error:!!i,errorMessage:i,size:p,autoComplete:"off",spellCheck:!1,"aria-describedby":i?"rego-search-error":void 0})}),r&&a.length>0&&e.jsx("div",{className:"rego-search__field",children:e.jsx(H,{id:"state-select",label:W,options:a,value:j,onChange:Q,disabled:u||c,size:p,"aria-describedby":i?"rego-search-error":void 0})}),!A&&e.jsx("div",{className:"rego-search__field rego-search__field--button",children:e.jsx(G,{type:"submit",variant:"primary",size:p,disabled:u||c||!d.trim(),"aria-describedby":i?"rego-search-error":void 0,children:c?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"rego-search__button-spinner","aria-hidden":"true",children:e.jsx("span",{className:"rego-search__spinner"})}),"Searching..."]}):e.jsxs(e.Fragment,{children:[e.jsxs("svg",{className:"rego-search__button-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[e.jsx("path",{d:"M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M13 13L15 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),"Search"]})})})]})})};n.__docgenInfo={description:"",methods:[],displayName:"RegoSearch",props:{showStates:{required:!1,tsType:{name:"boolean"},description:"Whether to show the state/territory dropdown",defaultValue:{value:"true",computed:!1}},states:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string; }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string; }>"},description:"List of states/territories to display",defaultValue:{value:`[\r
  { value: 'NSW', label: 'New South Wales' },\r
  { value: 'VIC', label: 'Victoria' },\r
  { value: 'QLD', label: 'Queensland' },\r
  { value: 'WA', label: 'Western Australia' },\r
  { value: 'SA', label: 'South Australia' },\r
  { value: 'TAS', label: 'Tasmania' },\r
  { value: 'ACT', label: 'Australian Capital Territory' },\r
  { value: 'NT', label: 'Northern Territory' },\r
]`,computed:!1}},defaultState:{required:!1,tsType:{name:"string"},description:"Default selected state"},regoPlaceholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for rego input",defaultValue:{value:"'Enter registration number'",computed:!1}},regoLabel:{required:!1,tsType:{name:"string"},description:"Label for rego input",defaultValue:{value:"'Registration Number'",computed:!1}},stateLabel:{required:!1,tsType:{name:"string"},description:"Label for state dropdown",defaultValue:{value:"'State/Territory'",computed:!1}},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(rego: string, state?: string) => void",signature:{arguments:[{type:{name:"string"},name:"rego"},{type:{name:"string"},name:"state"}],return:{name:"void"}}},description:"Callback when search is performed"},onRegoChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(rego: string) => void",signature:{arguments:[{type:{name:"string"},name:"rego"}],return:{name:"void"}}},description:"Callback when rego input changes"},onStateChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(state: string) => void",signature:{arguments:[{type:{name:"string"},name:"state"}],return:{name:"void"}}},description:"Callback when state selection changes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the search is currently loading",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"Error message to display"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom CSS class",defaultValue:{value:"''",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Form layout orientation",defaultValue:{value:"'horizontal'",computed:!1}},autoSearch:{required:!1,tsType:{name:"boolean"},description:"Whether to auto-submit on input change",defaultValue:{value:"false",computed:!1}},autoSearchDelay:{required:!1,tsType:{name:"number"},description:"Auto-search delay in milliseconds",defaultValue:{value:"500",computed:!1}}}};const te={title:"Molecules/RegoSearch",component:n,parameters:{layout:"padded",docs:{description:{component:`
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
        `}}},argTypes:{showStates:{control:{type:"boolean"},description:"Whether to show the state/territory dropdown"},states:{control:{type:"object"},description:"Array of state options"},defaultState:{control:{type:"text"},description:"Default selected state"},regoPlaceholder:{control:{type:"text"},description:"Placeholder text for rego input"},regoLabel:{control:{type:"text"},description:"Label for rego input"},stateLabel:{control:{type:"text"},description:"Label for state dropdown"},disabled:{control:{type:"boolean"},description:"Whether the component is disabled"},loading:{control:{type:"boolean"},description:"Whether the search is loading"},error:{control:{type:"text"},description:"Error message to display"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size variant"},layout:{control:{type:"select"},options:["horizontal","vertical"],description:"Form layout orientation"},autoSearch:{control:{type:"boolean"},description:"Whether to auto-submit on input change"},autoSearchDelay:{control:{type:"number"},description:"Auto-search delay in milliseconds"}},args:{showStates:!0,regoPlaceholder:"Enter registration number",regoLabel:"Registration Number",stateLabel:"State/Territory",disabled:!1,loading:!1,size:"md",layout:"horizontal",autoSearch:!1,autoSearchDelay:500}},t={args:{onSearch:(r,a)=>{console.log("Search:",{rego:r,state:a})},onRegoChange:r=>{console.log("Rego changed:",r)},onStateChange:r=>{console.log("State changed:",r)}}},g={args:{...t.args,states:[{value:"NSW",label:"New South Wales"},{value:"VIC",label:"Victoria"},{value:"QLD",label:"Queensland"},{value:"WA",label:"Western Australia"},{value:"SA",label:"South Australia"},{value:"TAS",label:"Tasmania"},{value:"ACT",label:"Australian Capital Territory"},{value:"NT",label:"Northern Territory"}],defaultState:"NSW"},parameters:{docs:{description:{story:"Default configuration for Australian states and territories."}}}},h={args:{...t.args,states:[{value:"NZ",label:"New Zealand"}],defaultState:"NZ",stateLabel:"Country"},parameters:{docs:{description:{story:"Configuration for New Zealand with a single country option."}}}},v={args:{...t.args,showStates:!1,regoLabel:"Vehicle Registration",regoPlaceholder:"Enter vehicle registration"},parameters:{docs:{description:{story:"Component without state dropdown - useful for single-jurisdiction searches."}}}},f={args:{...t.args,layout:"vertical"},parameters:{docs:{description:{story:"Vertical layout with fields stacked on top of each other."}}}},b={render:()=>e.jsx("div",{className:"rego-search-story-wrapper",children:e.jsxs("div",{className:"size-variants-demo",children:[e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Small Size"}),e.jsx(n,{size:"sm",regoPlaceholder:"Enter rego",onSearch:(r,a)=>console.log("Small search:",{rego:r,state:a})})]}),e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Medium Size (Default)"}),e.jsx(n,{size:"md",regoPlaceholder:"Enter registration number",onSearch:(r,a)=>console.log("Medium search:",{rego:r,state:a})})]}),e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Large Size"}),e.jsx(n,{size:"lg",regoPlaceholder:"Enter vehicle registration number",onSearch:(r,a)=>console.log("Large search:",{rego:r,state:a})})]})]})}),parameters:{docs:{description:{story:"Different size variants of the RegoSearch component."}}}},S={args:{...t.args,loading:!0,autoSearch:!0},parameters:{docs:{description:{story:"Component in loading state with spinner indicators."}}}},y={args:{...t.args,error:"Invalid registration number. Please check and try again."},parameters:{docs:{description:{story:"Component displaying an error message."}}}},N={args:{...t.args,disabled:!0},parameters:{docs:{description:{story:"Component in disabled state."}}}},w={args:{...t.args,autoSearch:!0,autoSearchDelay:1e3,onSearch:(r,a)=>{console.log("Auto search triggered:",{rego:r,state:a})}},parameters:{docs:{description:{story:"Component with auto-search enabled - searches automatically after typing stops."}}}},x={args:{...t.args,states:[{value:"ON",label:"Ontario"},{value:"QC",label:"Quebec"},{value:"BC",label:"British Columbia"},{value:"AB",label:"Alberta"},{value:"MB",label:"Manitoba"},{value:"SK",label:"Saskatchewan"},{value:"NS",label:"Nova Scotia"},{value:"NB",label:"New Brunswick"},{value:"NL",label:"Newfoundland and Labrador"},{value:"PE",label:"Prince Edward Island"}],defaultState:"ON",stateLabel:"Province/Territory",regoLabel:"License Plate Number",regoPlaceholder:"Enter license plate"},parameters:{docs:{description:{story:"Example with Canadian provinces/territories configuration."}}}},C={render:()=>e.jsx("div",{className:"rego-search-story-wrapper",children:e.jsxs("form",{className:"form-integration-demo",children:[e.jsx("h3",{children:"Vehicle Registration Search Form"}),e.jsx("p",{children:"Search for vehicle information using registration details:"}),e.jsx(n,{layout:"vertical",size:"lg",regoLabel:"Vehicle Registration Number",stateLabel:"Registered State/Territory",regoPlaceholder:"e.g., ABC123",onSearch:(r,a)=>{console.log("Form search:",{rego:r,state:a}),alert(`Searching for vehicle ${r} in ${a}`)}}),e.jsxs("div",{className:"form-note",children:[e.jsx("strong",{children:"Note:"})," This is a demonstration form. In a real application, this would connect to a vehicle registration database."]})]})}),parameters:{docs:{description:{story:"Example of RegoSearch integrated into a larger form context."}}}},T={render:()=>e.jsx("div",{className:"rego-search-story-wrapper",children:e.jsxs("div",{className:"responsive-demo",children:[e.jsx("h3",{children:"Responsive Behavior"}),e.jsx("p",{children:"Resize your browser window to see how the component adapts:"}),e.jsxs("div",{className:"responsive-example",children:[e.jsx("h4",{children:"Horizontal Layout (becomes vertical on mobile)"}),e.jsx(n,{layout:"horizontal",size:"md",onSearch:(r,a)=>console.log("Responsive search:",{rego:r,state:a})})]}),e.jsxs("div",{className:"responsive-note",children:[e.jsx("strong",{children:"Tip:"})," Use Storybook's viewport controls or resize your browser to test the responsive behavior."]})]})}),parameters:{docs:{description:{story:"Demonstration of the component's responsive behavior across different screen sizes."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const oe=["Default","AustralianStates","NewZealandConfiguration","NoStatesDropdown","VerticalLayout","SizeVariants","LoadingState","ErrorState","DisabledState","AutoSearch","CustomStates","FormIntegration","ResponsiveDemo"];export{g as AustralianStates,w as AutoSearch,x as CustomStates,t as Default,N as DisabledState,y as ErrorState,C as FormIntegration,S as LoadingState,h as NewZealandConfiguration,v as NoStatesDropdown,T as ResponsiveDemo,b as SizeVariants,f as VerticalLayout,oe as __namedExportsOrder,te as default};
