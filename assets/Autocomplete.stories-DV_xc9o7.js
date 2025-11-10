import{r as s,R as H,j as e}from"./iframe-NKDFF6YA.js";import"./preload-helper-PPVm8Dsz.js";const c=({options:r,value:o,defaultValue:b="",placeholder:h="Search...",disabled:g=!1,loading:l=!1,allowClear:W=!1,size:M="default",variant:P="default",filterOption:w=!0,onSelect:K,onChange:f,onSearch:U,onFocus:Q,onBlur:X,className:Z})=>{const[d,_]=s.useState(o??b),[O,u]=s.useState(!1),[v,i]=s.useState(-1),y=s.useRef(null),S=s.useRef(null),G=H.useMemo(()=>!w||!d?r:typeof w=="function"?r.filter(t=>w(d,t)):r.filter(t=>t.label.toLowerCase().includes(d.toLowerCase())||t.value.toLowerCase().includes(d.toLowerCase())),[r,d,w]),J=H.useMemo(()=>{const t={},a=[];return G.forEach(p=>{p.group?(t[p.group]||(t[p.group]=[]),t[p.group].push(p)):a.push(p)}),{groups:t,ungrouped:a}},[G]),x=H.useMemo(()=>{const{groups:t,ungrouped:a}=J;return[...a,...Object.values(t).flat()]},[J]),ee=s.useCallback(t=>{const a=t.target.value;_(a),i(-1),u(!0),f?.(a),U?.(a)},[f,U]),A=s.useCallback(t=>{t.disabled||(_(t.label),u(!1),i(-1),K?.(t.value,t),f?.(t.label))},[K,f]),te=s.useCallback(t=>{if(!O){(t.key==="ArrowDown"||t.key==="Enter")&&(u(!0),t.preventDefault());return}switch(t.key){case"ArrowDown":t.preventDefault(),i(a=>a<x.length-1?a+1:a);break;case"ArrowUp":t.preventDefault(),i(a=>a>0?a-1:a);break;case"Enter":t.preventDefault(),v>=0&&x[v]&&A(x[v]);break;case"Escape":u(!1),i(-1),y.current?.blur();break}},[O,v,x,A]),ae=s.useCallback(()=>{u(!0),Q?.()},[Q]),oe=s.useCallback(t=>{S.current?.contains(t.relatedTarget)||(u(!1),i(-1),X?.())},[X]),se=s.useCallback(()=>{_(""),u(!1),i(-1),f?.(""),y.current?.focus()},[f]);s.useEffect(()=>{const t=a=>{y.current&&!y.current.contains(a.target)&&S.current&&!S.current.contains(a.target)&&(u(!1),i(-1))};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]),s.useEffect(()=>{o!==void 0&&_(o)},[o]);const ne=["autocomplete",`autocomplete--${M}`,`autocomplete--${P}`,O&&"autocomplete--open",g&&"autocomplete--disabled",Z].filter(Boolean).join(" "),re=()=>{const{groups:t,ungrouped:a}=J;let p=0;return e.jsxs(e.Fragment,{children:[a.map(m=>{const j=p++;return e.jsx("div",{className:`autocomplete__option ${m.disabled?"autocomplete__option--disabled":""} ${v===j?"autocomplete__option--highlighted":""}`,onClick:()=>A(m),onMouseEnter:()=>i(j),children:m.label},m.value)}),Object.entries(t).map(([m,j])=>e.jsxs("div",{children:[e.jsx("div",{className:"autocomplete__group-label",children:m}),j.map(C=>{const Y=p++;return e.jsx("div",{className:`autocomplete__option autocomplete__option--grouped ${C.disabled?"autocomplete__option--disabled":""} ${v===Y?"autocomplete__option--highlighted":""}`,onClick:()=>A(C),onMouseEnter:()=>i(Y),children:C.label},C.value)})]},m))]})};return e.jsxs("div",{className:ne,children:[e.jsxs("div",{className:"autocomplete__input-wrapper",children:[e.jsx("input",{ref:y,type:"text",className:"autocomplete__input",value:d,placeholder:h,disabled:g,onChange:ee,onKeyDown:te,onFocus:ae,onBlur:oe,autoComplete:"off"}),l&&e.jsx("div",{className:"autocomplete__loading",children:e.jsx("div",{className:"autocomplete__spinner"})}),W&&d&&!g&&e.jsx("button",{type:"button",className:"autocomplete__clear",onClick:se,tabIndex:-1,children:"×"}),e.jsx("div",{className:"autocomplete__arrow",children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",children:e.jsx("path",{d:"M6 8l4-4H2l4 4z"})})})]}),O&&e.jsx("div",{ref:S,className:"autocomplete__dropdown",onMouseDown:t=>t.preventDefault(),children:l?e.jsx("div",{className:"autocomplete__loading-text",children:"Loading..."}):G.length===0?e.jsx("div",{className:"autocomplete__no-options",children:"No options found"}):re()})]})};c.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"AutocompleteOption"}],raw:"AutocompleteOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search...'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'filled' | 'borderless'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'borderless'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},filterOption:{required:!1,tsType:{name:"union",raw:"boolean | ((inputValue: string, option: AutocompleteOption) => boolean)",elements:[{name:"boolean"},{name:"unknown"}]},description:"",defaultValue:{value:"true",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, option: AutocompleteOption) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"AutocompleteOption"},name:"option"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const pe={title:"Atoms/Autocomplete",component:c,parameters:{layout:"centered",docs:{description:{component:"An Autocomplete component for search input with dropdown suggestions. Supports filtering, keyboard navigation, and various customization options."}}},argTypes:{size:{control:"select",options:["small","default","large"],description:"Size of the input"},variant:{control:"select",options:["default","filled","borderless"],description:"Visual style variant"},disabled:{control:"boolean",description:"Whether the input is disabled"},loading:{control:"boolean",description:"Show loading spinner"},allowClear:{control:"boolean",description:"Show clear button when there is input"},filterOption:{control:"boolean",description:"Enable built-in filtering"},placeholder:{control:"text",description:"Placeholder text"}}},n=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}],N={args:{options:n,placeholder:"Search fruits..."}},D={args:{options:n,defaultValue:"Apple",placeholder:"Search fruits..."},parameters:{docs:{description:{story:"Autocomplete with a pre-filled default value."}}}},V={render:()=>e.jsxs("div",{className:"autocomplete-demo",children:[e.jsxs("div",{className:"autocomplete-demo__section",children:[e.jsx("h4",{children:"Small"}),e.jsx(c,{options:n,size:"small",placeholder:"Small autocomplete..."})]}),e.jsxs("div",{className:"autocomplete-demo__section",children:[e.jsx("h4",{children:"Default"}),e.jsx(c,{options:n,size:"default",placeholder:"Default autocomplete..."})]}),e.jsxs("div",{className:"autocomplete-demo__section",children:[e.jsx("h4",{children:"Large"}),e.jsx(c,{options:n,size:"large",placeholder:"Large autocomplete..."})]})]}),args:{options:n},parameters:{docs:{description:{story:"Different size variants of the autocomplete input."}}}},L={render:()=>e.jsxs("div",{className:"autocomplete-demo",children:[e.jsxs("div",{className:"autocomplete-demo__section",children:[e.jsx("h4",{children:"Default"}),e.jsx(c,{options:n,variant:"default",placeholder:"Default variant..."})]}),e.jsxs("div",{className:"autocomplete-demo__section",children:[e.jsx("h4",{children:"Filled"}),e.jsx(c,{options:n,variant:"filled",placeholder:"Filled variant..."})]}),e.jsxs("div",{className:"autocomplete-demo__section",children:[e.jsx("h4",{children:"Borderless"}),e.jsx(c,{options:n,variant:"borderless",placeholder:"Borderless variant..."})]})]}),args:{options:n},parameters:{docs:{description:{story:"Different visual style variants."}}}},k={args:{options:n,allowClear:!0,defaultValue:"Apple",placeholder:"Search with clear button..."},parameters:{docs:{description:{story:"Autocomplete with clear button to reset the input."}}}},T={args:{options:n,loading:!0,placeholder:"Loading results..."},parameters:{docs:{description:{story:"Autocomplete showing loading state with spinner."}}}},$={args:{options:n,disabled:!0,defaultValue:"Cannot edit",placeholder:"Disabled input..."},parameters:{docs:{description:{story:"Disabled autocomplete input."}}}},le=[{value:"apple",label:"Apple",group:"Fruits"},{value:"banana",label:"Banana",group:"Fruits"},{value:"cherry",label:"Cherry",group:"Fruits"},{value:"carrot",label:"Carrot",group:"Vegetables"},{value:"broccoli",label:"Broccoli",group:"Vegetables"},{value:"spinach",label:"Spinach",group:"Vegetables"},{value:"chicken",label:"Chicken",group:"Proteins"},{value:"beef",label:"Beef",group:"Proteins"},{value:"tofu",label:"Tofu",group:"Proteins"}],F={args:{options:le,placeholder:"Search food items..."},parameters:{docs:{description:{story:"Autocomplete with grouped options for better organization."}}}},z={args:{options:[{value:"option1",label:"Available Option"},{value:"option2",label:"Disabled Option",disabled:!0},{value:"option3",label:"Another Available Option"},{value:"option4",label:"Another Disabled Option",disabled:!0},{value:"option5",label:"Final Available Option"}],placeholder:"Some options are disabled..."},parameters:{docs:{description:{story:"Autocomplete with some disabled options that cannot be selected."}}}},I={args:{options:[{value:"javascript",label:"JavaScript"},{value:"typescript",label:"TypeScript"},{value:"python",label:"Python"},{value:"java",label:"Java"},{value:"csharp",label:"C#"},{value:"go",label:"Go"},{value:"rust",label:"Rust"}],filterOption:(r,o)=>o.label.toLowerCase().startsWith(r.toLowerCase()),placeholder:"Search programming languages (prefix match)..."},parameters:{docs:{description:{story:"Autocomplete with custom filtering logic (matches from beginning of string)."}}}},q={args:{options:n,filterOption:!1,placeholder:"No filtering - shows all options..."},parameters:{docs:{description:{story:"Autocomplete with filtering disabled - always shows all options."}}}},B={render:()=>{const[r,o]=s.useState(""),[b,h]=s.useState(null);return e.jsxs("div",{className:"autocomplete-controlled",children:[e.jsx("div",{className:"autocomplete-controlled__section",children:e.jsx(c,{options:n,value:r,onChange:o,onSelect:(g,l)=>h(l),placeholder:"Controlled autocomplete...",allowClear:!0})}),e.jsxs("div",{className:"autocomplete-controlled__info",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Input Value:"})," ",r||"(empty)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Selected Option:"})," ",b?.label||"(none)"]})]}),e.jsxs("div",{className:"autocomplete-controlled__buttons",children:[e.jsx("button",{onClick:()=>o("Cherry"),children:'Set to "Cherry"'}),e.jsx("button",{onClick:()=>o(""),children:"Clear"})]})]})},args:{options:n},parameters:{docs:{description:{story:"Controlled autocomplete with external state management."}}}},R={render:()=>{const[r,o]=s.useState([]),[b,h]=s.useState(!1),g=async l=>{if(!l){o([]);return}h(!0),setTimeout(()=>{const W=[`${l} Option 1`,`${l} Option 2`,`${l} Option 3`,`${l} Result A`,`${l} Result B`].map((M,P)=>({value:`${l}-${P}`,label:M}));o(W),h(!1)},800)};return e.jsxs("div",{className:"autocomplete-async",children:[e.jsx(c,{options:r,loading:b,onSearch:g,filterOption:!1,placeholder:"Type to search (simulated API)...",allowClear:!0}),e.jsx("div",{className:"autocomplete-async__note",children:"Start typing to see async search results (simulated with delay)"})]})},args:{options:[]},parameters:{docs:{description:{story:"Autocomplete with async search functionality. Options are loaded based on search input."}}}},E={args:{options:Array.from({length:1e3},(r,o)=>({value:`item-${o}`,label:`Item ${o+1}`,group:o<100?"First 100":o<500?"Middle 400":"Last 500"})),placeholder:"Search through 1000 items..."},parameters:{docs:{description:{story:"Autocomplete with a large dataset demonstrating performance with many options."}}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Search fruits...'
  }
}`,...N.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: 'Apple',
    placeholder: 'Search fruits...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Autocomplete with a pre-filled default value.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div className="autocomplete-demo">\r
      <div className="autocomplete-demo__section">\r
        <h4>Small</h4>\r
        <Autocomplete options={basicOptions} size="small" placeholder="Small autocomplete..." />\r
      </div>\r
      \r
      <div className="autocomplete-demo__section">\r
        <h4>Default</h4>\r
        <Autocomplete options={basicOptions} size="default" placeholder="Default autocomplete..." />\r
      </div>\r
      \r
      <div className="autocomplete-demo__section">\r
        <h4>Large</h4>\r
        <Autocomplete options={basicOptions} size="large" placeholder="Large autocomplete..." />\r
      </div>\r
    </div>,
  args: {
    options: basicOptions
  },
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the autocomplete input.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="autocomplete-demo">\r
      <div className="autocomplete-demo__section">\r
        <h4>Default</h4>\r
        <Autocomplete options={basicOptions} variant="default" placeholder="Default variant..." />\r
      </div>\r
      \r
      <div className="autocomplete-demo__section">\r
        <h4>Filled</h4>\r
        <Autocomplete options={basicOptions} variant="filled" placeholder="Filled variant..." />\r
      </div>\r
      \r
      <div className="autocomplete-demo__section">\r
        <h4>Borderless</h4>\r
        <Autocomplete options={basicOptions} variant="borderless" placeholder="Borderless variant..." />\r
      </div>\r
    </div>,
  args: {
    options: basicOptions
  },
  parameters: {
    docs: {
      description: {
        story: 'Different visual style variants.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    allowClear: true,
    defaultValue: 'Apple',
    placeholder: 'Search with clear button...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Autocomplete with clear button to reset the input.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    loading: true,
    placeholder: 'Loading results...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Autocomplete showing loading state with spinner.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    disabled: true,
    defaultValue: 'Cannot edit',
    placeholder: 'Disabled input...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled autocomplete input.'
      }
    }
  }
}`,...$.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    options: groupedOptions,
    placeholder: 'Search food items...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Autocomplete with grouped options for better organization.'
      }
    }
  }
}`,...F.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'option1',
      label: 'Available Option'
    }, {
      value: 'option2',
      label: 'Disabled Option',
      disabled: true
    }, {
      value: 'option3',
      label: 'Another Available Option'
    }, {
      value: 'option4',
      label: 'Another Disabled Option',
      disabled: true
    }, {
      value: 'option5',
      label: 'Final Available Option'
    }],
    placeholder: 'Some options are disabled...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Autocomplete with some disabled options that cannot be selected.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'javascript',
      label: 'JavaScript'
    }, {
      value: 'typescript',
      label: 'TypeScript'
    }, {
      value: 'python',
      label: 'Python'
    }, {
      value: 'java',
      label: 'Java'
    }, {
      value: 'csharp',
      label: 'C#'
    }, {
      value: 'go',
      label: 'Go'
    }, {
      value: 'rust',
      label: 'Rust'
    }],
    filterOption: (inputValue, option) => {
      // Custom filter: match from beginning of string
      return option.label.toLowerCase().startsWith(inputValue.toLowerCase());
    },
    placeholder: 'Search programming languages (prefix match)...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Autocomplete with custom filtering logic (matches from beginning of string).'
      }
    }
  }
}`,...I.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    filterOption: false,
    placeholder: 'No filtering - shows all options...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Autocomplete with filtering disabled - always shows all options.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [selectedOption, setSelectedOption] = useState<AutocompleteOption | null>(null);
    return <div className="autocomplete-controlled">\r
        <div className="autocomplete-controlled__section">\r
          <Autocomplete options={basicOptions} value={value} onChange={setValue} onSelect={(val, option) => setSelectedOption(option)} placeholder="Controlled autocomplete..." allowClear />\r
        </div>\r
        \r
        <div className="autocomplete-controlled__info">\r
          <div><strong>Input Value:</strong> {value || '(empty)'}</div>\r
          <div><strong>Selected Option:</strong> {selectedOption?.label || '(none)'}</div>\r
        </div>\r
        \r
        <div className="autocomplete-controlled__buttons">\r
          <button onClick={() => setValue('Cherry')}>\r
            Set to "Cherry"\r
          </button>\r
          <button onClick={() => setValue('')}>\r
            Clear\r
          </button>\r
        </div>\r
      </div>;
  },
  args: {
    options: basicOptions
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled autocomplete with external state management.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [options, setOptions] = useState<AutocompleteOption[]>([]);
    const [loading, setLoading] = useState(false);
    const handleSearch = async (searchValue: string) => {
      if (!searchValue) {
        setOptions([]);
        return;
      }
      setLoading(true);

      // Simulate API call
      setTimeout(() => {
        const mockResults = [\`\${searchValue} Option 1\`, \`\${searchValue} Option 2\`, \`\${searchValue} Option 3\`, \`\${searchValue} Result A\`, \`\${searchValue} Result B\`].map((label, index) => ({
          value: \`\${searchValue}-\${index}\`,
          label
        }));
        setOptions(mockResults);
        setLoading(false);
      }, 800);
    };
    return <div className="autocomplete-async">\r
        <Autocomplete options={options} loading={loading} onSearch={handleSearch} filterOption={false} placeholder="Type to search (simulated API)..." allowClear />\r
        <div className="autocomplete-async__note">\r
          Start typing to see async search results (simulated with delay)\r
        </div>\r
      </div>;
  },
  args: {
    options: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Autocomplete with async search functionality. Options are loaded based on search input.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    options: Array.from({
      length: 1000
    }, (_, i) => ({
      value: \`item-\${i}\`,
      label: \`Item \${i + 1}\`,
      group: i < 100 ? 'First 100' : i < 500 ? 'Middle 400' : 'Last 500'
    })),
    placeholder: 'Search through 1000 items...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Autocomplete with a large dataset demonstrating performance with many options.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}};const ue=["Default","WithDefaultValue","Sizes","Variants","WithClearButton","Loading","Disabled","WithGroups","WithDisabledOptions","CustomFiltering","NoFiltering","Controlled","AsyncLoading","LargeDataset"];export{R as AsyncLoading,B as Controlled,I as CustomFiltering,N as Default,$ as Disabled,E as LargeDataset,T as Loading,q as NoFiltering,V as Sizes,L as Variants,k as WithClearButton,D as WithDefaultValue,z as WithDisabledOptions,F as WithGroups,ue as __namedExportsOrder,pe as default};
