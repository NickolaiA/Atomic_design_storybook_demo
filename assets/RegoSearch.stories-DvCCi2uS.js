import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as _}from"./index-GiUgBvb1.js";const ke=[{value:"NSW",label:"New South Wales"},{value:"VIC",label:"Victoria"},{value:"QLD",label:"Queensland"},{value:"WA",label:"Western Australia"},{value:"SA",label:"South Australia"},{value:"TAS",label:"Tasmania"},{value:"ACT",label:"Australian Capital Territory"},{value:"NT",label:"Northern Territory"}],i=({showStates:r=!0,states:a=ke,defaultState:be,regoPlaceholder:ye="Enter registration number",regoLabel:Se="Registration Number",stateLabel:Ne="State/Territory",onSearch:C,onRegoChange:T,onStateChange:A,disabled:u=!1,loading:l=!1,error:n,size:we="md",className:xe="",layout:je="horizontal",autoSearch:L=!1,autoSearchDelay:R=500})=>{const[d,Ce]=_.useState(""),[z,Te]=_.useState(be||(a.length>0?a[0].value:"")),c=_.useRef(),Ae=t=>{const o=t.target.value.toUpperCase();Ce(o),T==null||T(o),L&&o.length>0&&(c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{p(o,z)},R))},Le=t=>{const o=t.target.value;Te(o),A==null||A(o),L&&d.length>0&&(c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{p(d,o)},R))},p=(t,o)=>{const D=t||d,De=o||z;D.trim()&&(C==null||C(D.trim(),r?De:void 0))},ze=t=>{t.preventDefault(),p()},_e=t=>{t.key==="Enter"&&(t.preventDefault(),p())},Re=["rego-search",`rego-search--${we}`,`rego-search--${je}`,u&&"rego-search--disabled",l&&"rego-search--loading",n&&"rego-search--error",xe].filter(Boolean).join(" ");return e.jsxs("form",{className:Re,onSubmit:ze,noValidate:!0,children:[e.jsxs("div",{className:"rego-search__fields",children:[e.jsxs("div",{className:"rego-search__field",children:[e.jsx("label",{htmlFor:"rego-input",className:"rego-search__label",children:Se}),e.jsxs("div",{className:"rego-search__input-wrapper",children:[e.jsx("input",{id:"rego-input",type:"text",className:"rego-search__input",value:d,onChange:Ae,onKeyDown:_e,placeholder:ye,disabled:u||l,"aria-describedby":n?"rego-search-error":void 0,"aria-invalid":n?"true":void 0,autoComplete:"off",spellCheck:!1}),l&&e.jsx("div",{className:"rego-search__loading-spinner","aria-hidden":"true",children:e.jsx("div",{className:"rego-search__spinner"})})]})]}),r&&a.length>0&&e.jsxs("div",{className:"rego-search__field",children:[e.jsx("label",{htmlFor:"state-select",className:"rego-search__label",children:Ne}),e.jsxs("div",{className:"rego-search__select-wrapper",children:[e.jsx("select",{id:"state-select",className:"rego-search__select",value:z,onChange:Le,disabled:u||l,"aria-describedby":n?"rego-search-error":void 0,children:a.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))}),e.jsx("div",{className:"rego-search__select-icon","aria-hidden":"true",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M4 6L8 10L12 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}),!L&&e.jsx("div",{className:"rego-search__field rego-search__field--button",children:e.jsx("button",{type:"submit",className:"rego-search__button",disabled:u||l||!d.trim(),"aria-describedby":n?"rego-search-error":void 0,children:l?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"rego-search__button-spinner","aria-hidden":"true",children:e.jsx("div",{className:"rego-search__spinner"})}),"Searching..."]}):e.jsxs(e.Fragment,{children:[e.jsxs("svg",{className:"rego-search__button-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[e.jsx("path",{d:"M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M13 13L15 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),"Search"]})})})]}),n&&e.jsxs("div",{id:"rego-search-error",className:"rego-search__error",role:"alert","aria-live":"polite",children:[e.jsxs("svg",{className:"rego-search__error-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M8 4V8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("path",{d:"M8 12H8.01",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),n]})]})};i.__docgenInfo={description:"",methods:[],displayName:"RegoSearch",props:{showStates:{required:!1,tsType:{name:"boolean"},description:"Whether to show the state/territory dropdown",defaultValue:{value:"true",computed:!1}},states:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string; }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string; }>"},description:"List of states/territories to display",defaultValue:{value:`[\r
  { value: 'NSW', label: 'New South Wales' },\r
  { value: 'VIC', label: 'Victoria' },\r
  { value: 'QLD', label: 'Queensland' },\r
  { value: 'WA', label: 'Western Australia' },\r
  { value: 'SA', label: 'South Australia' },\r
  { value: 'TAS', label: 'Tasmania' },\r
  { value: 'ACT', label: 'Australian Capital Territory' },\r
  { value: 'NT', label: 'Northern Territory' },\r
]`,computed:!1}},defaultState:{required:!1,tsType:{name:"string"},description:"Default selected state"},regoPlaceholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for rego input",defaultValue:{value:"'Enter registration number'",computed:!1}},regoLabel:{required:!1,tsType:{name:"string"},description:"Label for rego input",defaultValue:{value:"'Registration Number'",computed:!1}},stateLabel:{required:!1,tsType:{name:"string"},description:"Label for state dropdown",defaultValue:{value:"'State/Territory'",computed:!1}},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(rego: string, state?: string) => void",signature:{arguments:[{type:{name:"string"},name:"rego"},{type:{name:"string"},name:"state"}],return:{name:"void"}}},description:"Callback when search is performed"},onRegoChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(rego: string) => void",signature:{arguments:[{type:{name:"string"},name:"rego"}],return:{name:"void"}}},description:"Callback when rego input changes"},onStateChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(state: string) => void",signature:{arguments:[{type:{name:"string"},name:"state"}],return:{name:"void"}}},description:"Callback when state selection changes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the search is currently loading",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"Error message to display"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom CSS class",defaultValue:{value:"''",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Form layout orientation",defaultValue:{value:"'horizontal'",computed:!1}},autoSearch:{required:!1,tsType:{name:"boolean"},description:"Whether to auto-submit on input change",defaultValue:{value:"false",computed:!1}},autoSearchDelay:{required:!1,tsType:{name:"number"},description:"Auto-search delay in milliseconds",defaultValue:{value:"500",computed:!1}}}};const Ee={title:"Molecules/RegoSearch",component:i,parameters:{layout:"padded",docs:{description:{component:`
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
        `}}},argTypes:{showStates:{control:{type:"boolean"},description:"Whether to show the state/territory dropdown"},states:{control:{type:"object"},description:"Array of state options"},defaultState:{control:{type:"text"},description:"Default selected state"},regoPlaceholder:{control:{type:"text"},description:"Placeholder text for rego input"},regoLabel:{control:{type:"text"},description:"Label for rego input"},stateLabel:{control:{type:"text"},description:"Label for state dropdown"},disabled:{control:{type:"boolean"},description:"Whether the component is disabled"},loading:{control:{type:"boolean"},description:"Whether the search is loading"},error:{control:{type:"text"},description:"Error message to display"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size variant"},layout:{control:{type:"select"},options:["horizontal","vertical"],description:"Form layout orientation"},autoSearch:{control:{type:"boolean"},description:"Whether to auto-submit on input change"},autoSearchDelay:{control:{type:"number"},description:"Auto-search delay in milliseconds"}},args:{showStates:!0,regoPlaceholder:"Enter registration number",regoLabel:"Registration Number",stateLabel:"State/Territory",disabled:!1,loading:!1,size:"md",layout:"horizontal",autoSearch:!1,autoSearchDelay:500}},s={args:{onSearch:(r,a)=>{console.log("Search:",{rego:r,state:a})},onRegoChange:r=>{console.log("Rego changed:",r)},onStateChange:r=>{console.log("State changed:",r)}}},h={args:{...s.args,states:[{value:"NSW",label:"New South Wales"},{value:"VIC",label:"Victoria"},{value:"QLD",label:"Queensland"},{value:"WA",label:"Western Australia"},{value:"SA",label:"South Australia"},{value:"TAS",label:"Tasmania"},{value:"ACT",label:"Australian Capital Territory"},{value:"NT",label:"Northern Territory"}],defaultState:"NSW"},parameters:{docs:{description:{story:"Default configuration for Australian states and territories."}}}},m={args:{...s.args,states:[{value:"NZ",label:"New Zealand"}],defaultState:"NZ",stateLabel:"Country"},parameters:{docs:{description:{story:"Configuration for New Zealand with a single country option."}}}},g={args:{...s.args,showStates:!1,regoLabel:"Vehicle Registration",regoPlaceholder:"Enter vehicle registration"},parameters:{docs:{description:{story:"Component without state dropdown - useful for single-jurisdiction searches."}}}},v={args:{...s.args,layout:"vertical"},parameters:{docs:{description:{story:"Vertical layout with fields stacked on top of each other."}}}},f={render:()=>e.jsx("div",{className:"rego-search-story-wrapper",children:e.jsxs("div",{className:"size-variants-demo",children:[e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Small Size"}),e.jsx(i,{size:"sm",regoPlaceholder:"Enter rego",onSearch:(r,a)=>console.log("Small search:",{rego:r,state:a})})]}),e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Medium Size (Default)"}),e.jsx(i,{size:"md",regoPlaceholder:"Enter registration number",onSearch:(r,a)=>console.log("Medium search:",{rego:r,state:a})})]}),e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Large Size"}),e.jsx(i,{size:"lg",regoPlaceholder:"Enter vehicle registration number",onSearch:(r,a)=>console.log("Large search:",{rego:r,state:a})})]})]})}),parameters:{docs:{description:{story:"Different size variants of the RegoSearch component."}}}},b={args:{...s.args,loading:!0,autoSearch:!0},parameters:{docs:{description:{story:"Component in loading state with spinner indicators."}}}},y={args:{...s.args,error:"Invalid registration number. Please check and try again."},parameters:{docs:{description:{story:"Component displaying an error message."}}}},S={args:{...s.args,disabled:!0},parameters:{docs:{description:{story:"Component in disabled state."}}}},N={args:{...s.args,autoSearch:!0,autoSearchDelay:1e3,onSearch:(r,a)=>{console.log("Auto search triggered:",{rego:r,state:a})}},parameters:{docs:{description:{story:"Component with auto-search enabled - searches automatically after typing stops."}}}},w={args:{...s.args,states:[{value:"ON",label:"Ontario"},{value:"QC",label:"Quebec"},{value:"BC",label:"British Columbia"},{value:"AB",label:"Alberta"},{value:"MB",label:"Manitoba"},{value:"SK",label:"Saskatchewan"},{value:"NS",label:"Nova Scotia"},{value:"NB",label:"New Brunswick"},{value:"NL",label:"Newfoundland and Labrador"},{value:"PE",label:"Prince Edward Island"}],defaultState:"ON",stateLabel:"Province/Territory",regoLabel:"License Plate Number",regoPlaceholder:"Enter license plate"},parameters:{docs:{description:{story:"Example with Canadian provinces/territories configuration."}}}},x={render:()=>e.jsx("div",{className:"rego-search-story-wrapper",children:e.jsxs("form",{className:"form-integration-demo",children:[e.jsx("h3",{children:"Vehicle Registration Search Form"}),e.jsx("p",{children:"Search for vehicle information using registration details:"}),e.jsx(i,{layout:"vertical",size:"lg",regoLabel:"Vehicle Registration Number",stateLabel:"Registered State/Territory",regoPlaceholder:"e.g., ABC123",onSearch:(r,a)=>{console.log("Form search:",{rego:r,state:a}),alert(`Searching for vehicle ${r} in ${a}`)}}),e.jsxs("div",{className:"form-note",children:[e.jsx("strong",{children:"Note:"})," This is a demonstration form. In a real application, this would connect to a vehicle registration database."]})]})}),parameters:{docs:{description:{story:"Example of RegoSearch integrated into a larger form context."}}}},j={render:()=>e.jsx("div",{className:"rego-search-story-wrapper",children:e.jsxs("div",{className:"responsive-demo",children:[e.jsx("h3",{children:"Responsive Behavior"}),e.jsx("p",{children:"Resize your browser window to see how the component adapts:"}),e.jsxs("div",{className:"responsive-example",children:[e.jsx("h4",{children:"Horizontal Layout (becomes vertical on mobile)"}),e.jsx(i,{layout:"horizontal",size:"md",onSearch:(r,a)=>console.log("Responsive search:",{rego:r,state:a})})]}),e.jsxs("div",{className:"responsive-note",children:[e.jsx("strong",{children:"Tip:"})," Use Storybook's viewport controls or resize your browser to test the responsive behavior."]})]})}),parameters:{docs:{description:{story:"Demonstration of the component's responsive behavior across different screen sizes."}}}};var k,V,W;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(W=(V=s.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var E,P,B;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(B=(P=h.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var q,I,F;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(F=(I=m.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var M,Q,Z;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(Z=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var O,U,$;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...($=(U=v.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var K,H,G;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(G=(H=f.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var J,X,Y;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,re,ae;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,se,oe;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(se=S.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,ie,le;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(le=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,ue;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,he,me;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(he=x.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var ge,ve,fe;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};const Pe=["Default","AustralianStates","NewZealandConfiguration","NoStatesDropdown","VerticalLayout","SizeVariants","LoadingState","ErrorState","DisabledState","AutoSearch","CustomStates","FormIntegration","ResponsiveDemo"];export{h as AustralianStates,N as AutoSearch,w as CustomStates,s as Default,S as DisabledState,y as ErrorState,x as FormIntegration,b as LoadingState,m as NewZealandConfiguration,g as NoStatesDropdown,j as ResponsiveDemo,f as SizeVariants,v as VerticalLayout,Pe as __namedExportsOrder,Ee as default};
