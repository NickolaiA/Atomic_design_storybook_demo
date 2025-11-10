import{r as n,j as a}from"./iframe-CY-Mz7KS.js";import"./preload-helper-PPVm8Dsz.js";const C=({options:o,value:i,defaultValue:S=[],placeholder:j="Please select",disabled:d=!1,allowClear:M=!1,showSearch:k=!1,_multiple:we=!1,size:te="default",variant:ne="default",expandTrigger:Y="click",changeOnSelect:F=!1,displayRender:$,onChange:y,onSearch:G,className:se})=>{const[p,D]=n.useState(i??S),[h,N]=n.useState(!1),[f,O]=n.useState(""),[m,b]=n.useState([o]),[J,I]=n.useState([]),[re,K]=n.useState("bottom"),[oe,X]=n.useState("left"),w=n.useRef(null),U=n.useRef(null),x=n.useCallback(e=>{const l=[];let t=o;for(const s of e){const r=t.find(v=>v.value===s);if(!r)break;l.push(r),t=r.children||[]}return l},[o]),ce=n.useCallback(()=>{if(f&&k)return f;if(p.length===0)return"";const e=x(p);return $?$(e.map(l=>l.label),e):e.map(l=>l.label).join(" / ")},[p,f,k,x,$]),ie=n.useCallback((e,l)=>{if(e.disabled)return;const t=[...p.slice(0,l),e.value],s=x(t);if(e.children&&e.children.length>0){const r=[...m.slice(0,l+1),e.children];b(r)}else b(m.slice(0,l+1));(F||!e.children||e.children.length===0)&&(D(t),y?.(t,s),(!e.children||e.children.length===0)&&(N(!1),O("")))},[p,m,F,x,y]),de=n.useCallback((e,l)=>{if(Y!=="hover"||e.disabled)return;const t=[...J.slice(0,l),l];if(I(t),e.children&&e.children.length>0){const s=[...m.slice(0,l+1),e.children];b(s)}else b(m.slice(0,l+1))},[Y,J,m]),ue=n.useCallback(e=>{const l=e.target.value;O(l),G?.(l)},[G]),pe=n.useCallback(()=>{D([]),O(""),b([o]),I([]),y?.([],[])},[o,y]),he=n.useCallback(()=>{d||(N(!h),h||(b([o]),I([])))},[d,h,o]);n.useEffect(()=>{const e=l=>{w.current&&!w.current.contains(l.target)&&U.current&&!U.current.contains(l.target)&&(N(!1),O(""))};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),n.useEffect(()=>{i!==void 0&&D(i)},[i]),n.useEffect(()=>{if(!h||!w.current)return;const e=()=>{const l=w.current;if(!l)return;const t=window.innerHeight,s=window.innerWidth;if(s<=600){K("bottom"),X("left");return}const r=l.getBoundingClientRect(),v=t-r.bottom-20,u=r.top-20,g=300;let _="bottom";v<g&&u>g&&(_="top");const ge=s-r.left-20,ae=600;let le="left";ge<ae&&r.right>ae&&(le="right"),K(_),X(le)};return e(),window.innerWidth>600&&(window.addEventListener("resize",e),window.addEventListener("scroll",e)),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",e)}},[h]);const me=n.useCallback((e,l)=>{if(!l)return e;const t=[],s=(r,v=[])=>{r.forEach(u=>{const g=[...v,u.label],_=g.join(" / ");_.toLowerCase().includes(l.toLowerCase())&&t.push({...u,label:_,children:void 0}),u.children&&s(u.children,g)})};return s(e),t},[]),ve=["cascader",`cascader--${te}`,`cascader--${ne}`,h&&"cascader--open",d&&"cascader--disabled",se].filter(Boolean).join(" "),Q=ce(),Z=k&&f,ee=Z?me(o,f):[];return a.jsxs("div",{className:ve,children:[a.jsxs("div",{className:"cascader__selector",onClick:he,children:[k?a.jsx("input",{ref:w,type:"text",className:"cascader__input",value:f,placeholder:p.length>0?Q:j,disabled:d,onChange:ue}):a.jsx("input",{ref:w,type:"text",className:"cascader__input",value:Q,placeholder:j,disabled:d,readOnly:!0}),M&&p.length>0&&!d&&a.jsx("button",{type:"button",className:"cascader__clear",onClick:e=>{e.stopPropagation(),pe()},children:"×"}),a.jsx("div",{className:"cascader__arrow",children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",children:a.jsx("path",{d:"M6 8l4-4H2l4 4z"})})})]}),h&&a.jsx("div",{ref:U,className:["cascader__dropdown",window.innerWidth>600&&re==="top"&&"cascader__dropdown--top",window.innerWidth>600&&oe==="right"&&"cascader__dropdown--right"].filter(Boolean).join(" "),children:Z?a.jsx("div",{className:"cascader__search-results",children:ee.length===0?a.jsx("div",{className:"cascader__no-options",children:"No results found"}):ee.map((e,l)=>a.jsx("div",{className:`cascader__option ${e.disabled?"cascader__option--disabled":""}`,onClick:()=>{if(!e.disabled){const t=e.label.split(" / "),s=[];let r=o;for(const v of t){const u=r.find(g=>g.label===v);u&&(s.push(u.value),r=u.children||[])}D(s),N(!1),O(""),y?.(s,x(s))}},children:e.label},`${e.value}-${l}`))}):a.jsx("div",{className:"cascader__menus",children:m.map((e,l)=>a.jsx("div",{className:"cascader__menu",children:e.map(t=>{const s=p[l]===t.value,r=t.children&&t.children.length>0;return a.jsxs("div",{className:`cascader__option ${s?"cascader__option--selected":""} ${t.disabled?"cascader__option--disabled":""} ${r?"cascader__option--expandable":""}`,onClick:()=>ie(t,l),onMouseEnter:()=>de(t,l),children:[a.jsx("span",{className:"cascader__option-label",children:t.label}),r&&a.jsx("span",{className:"cascader__option-expand",children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",children:a.jsx("path",{d:"M4 2l4 4-4 4V2z"})})})]},t.value)})},l))})})]})};C.__docgenInfo={description:"",methods:[],displayName:"Cascader",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Please select'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showSearch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'filled' | 'borderless'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'borderless'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},expandTrigger:{required:!1,tsType:{name:"union",raw:"'click' | 'hover'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"}]},description:"",defaultValue:{value:"'click'",computed:!1}},changeOnSelect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},displayRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(labels: string[], selectedOptions: CascaderOption[]) => string",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"labels"},{type:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]"},name:"selectedOptions"}],return:{name:"string"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[], selectedOptions: CascaderOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"},{type:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(searchText: string) => void",signature:{arguments:[{type:{name:"string"},name:"searchText"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},_multiple:{defaultValue:{value:"false",computed:!1},required:!1}}};const ye={title:"Atoms/Cascader",component:C,parameters:{layout:"centered",docs:{description:{component:"A Cascader component for selecting values from hierarchical options. Supports search, multiple levels, and various interaction modes."}}},argTypes:{size:{control:"select",options:["small","default","large"],description:"Size of the input"},variant:{control:"select",options:["default","filled","borderless"],description:"Visual style variant"},expandTrigger:{control:"select",options:["click","hover"],description:"How to trigger menu expansion"},disabled:{control:"boolean",description:"Whether the input is disabled"},allowClear:{control:"boolean",description:"Show clear button when there is selection"},showSearch:{control:"boolean",description:"Enable search functionality"},changeOnSelect:{control:"boolean",description:"Change value when selecting any level"},placeholder:{control:"text",description:"Placeholder text"}}},c=[{value:"usa",label:"United States",children:[{value:"california",label:"California",children:[{value:"san-francisco",label:"San Francisco"},{value:"los-angeles",label:"Los Angeles"},{value:"san-diego",label:"San Diego"}]},{value:"new-york",label:"New York",children:[{value:"new-york-city",label:"New York City"},{value:"albany",label:"Albany"},{value:"buffalo",label:"Buffalo"}]},{value:"texas",label:"Texas",children:[{value:"houston",label:"Houston"},{value:"dallas",label:"Dallas"},{value:"austin",label:"Austin"}]}]},{value:"canada",label:"Canada",children:[{value:"ontario",label:"Ontario",children:[{value:"toronto",label:"Toronto"},{value:"ottawa",label:"Ottawa"}]},{value:"british-columbia",label:"British Columbia",children:[{value:"vancouver",label:"Vancouver"},{value:"victoria",label:"Victoria"}]}]},{value:"uk",label:"United Kingdom",children:[{value:"england",label:"England",children:[{value:"london",label:"London"},{value:"manchester",label:"Manchester"},{value:"birmingham",label:"Birmingham"}]},{value:"scotland",label:"Scotland",children:[{value:"edinburgh",label:"Edinburgh"},{value:"glasgow",label:"Glasgow"}]}]}],T={args:{options:c,placeholder:"Select location...",changeOnSelect:!0}},V={args:{options:c,defaultValue:["usa","california","san-francisco"],placeholder:"Select location...",changeOnSelect:!0},parameters:{docs:{description:{story:"Cascader with a pre-selected default value path."}}}},L={render:()=>a.jsxs("div",{className:"cascader-demo",children:[a.jsxs("div",{className:"cascader-demo__section",children:[a.jsx("h4",{children:"Small"}),a.jsx(C,{options:c,size:"small",placeholder:"Small cascader...",changeOnSelect:!0})]}),a.jsxs("div",{className:"cascader-demo__section",children:[a.jsx("h4",{children:"Default"}),a.jsx(C,{options:c,size:"default",placeholder:"Default cascader...",changeOnSelect:!0})]}),a.jsxs("div",{className:"cascader-demo__section",children:[a.jsx("h4",{children:"Large"}),a.jsx(C,{options:c,size:"large",placeholder:"Large cascader...",changeOnSelect:!0})]})]}),args:{options:c},parameters:{docs:{description:{story:"Different size variants of the cascader input."}}}},A={args:{options:c,showSearch:!0,placeholder:"Search locations...",changeOnSelect:!0},parameters:{docs:{description:{story:"Cascader with search functionality. Type to filter options across all levels."}}}},E={args:{options:c,changeOnSelect:!0,placeholder:"Select any level..."},parameters:{docs:{description:{story:'Cascader that triggers onChange when selecting any level, not just leaf nodes. Click "New York" and it will immediately select "United States / New York".'}}}},q={args:{options:c,expandTrigger:"hover",placeholder:"Hover to expand...",changeOnSelect:!0},parameters:{docs:{description:{story:"Cascader that expands menus on hover instead of click."}}}},z={args:{options:c,allowClear:!0,defaultValue:["usa","california"],placeholder:"With clear button...",changeOnSelect:!0},parameters:{docs:{description:{story:"Cascader with clear button to reset the selection."}}}},P={args:{options:c,disabled:!0,defaultValue:["usa","california","san-francisco"],placeholder:"Disabled cascader..."},parameters:{docs:{description:{story:"Disabled cascader input."}}}},fe=[{value:"engineering",label:"Engineering",children:[{value:"frontend",label:"Frontend",children:[{value:"react-team",label:"React Team"},{value:"vue-team",label:"Vue Team"},{value:"angular-team",label:"Angular Team"}]},{value:"backend",label:"Backend",children:[{value:"node-team",label:"Node.js Team"},{value:"python-team",label:"Python Team"},{value:"java-team",label:"Java Team"}]},{value:"devops",label:"DevOps",children:[{value:"infrastructure",label:"Infrastructure"},{value:"ci-cd",label:"CI/CD"},{value:"monitoring",label:"Monitoring"}]}]},{value:"design",label:"Design",children:[{value:"ux",label:"UX Design",children:[{value:"research",label:"User Research"},{value:"interaction",label:"Interaction Design"}]},{value:"visual",label:"Visual Design",children:[{value:"brand",label:"Brand Design"},{value:"product",label:"Product Design"}]}]},{value:"marketing",label:"Marketing",children:[{value:"digital",label:"Digital Marketing",children:[{value:"seo",label:"SEO"},{value:"social",label:"Social Media"},{value:"content",label:"Content Marketing"}]},{value:"growth",label:"Growth",children:[{value:"acquisition",label:"User Acquisition"},{value:"retention",label:"User Retention"}]}]}],W={args:{options:fe,displayRender:(o,i)=>`${i.map(S=>S.label).join(" → ")} (${i.length} levels)`,placeholder:"Select department..."},parameters:{docs:{description:{story:"Cascader with custom display rendering for selected values."}}}},R={render:()=>{const[o,i]=n.useState([]),[S,j]=n.useState([]);return a.jsxs("div",{className:"cascader-controlled",children:[a.jsx("div",{className:"cascader-controlled__section",children:a.jsx(C,{options:c,value:o,onChange:(d,M)=>{i(d),j(M)},placeholder:"Controlled cascader...",allowClear:!0})}),a.jsxs("div",{className:"cascader-controlled__info",children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Selected Value:"})," [",o.join(", "),"]"]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Selected Path:"})," ",S.map(d=>d.label).join(" / ")||"(none)"]})]}),a.jsxs("div",{className:"cascader-controlled__buttons",children:[a.jsx("button",{onClick:()=>i(["usa","california","san-francisco"]),children:"Set to San Francisco"}),a.jsx("button",{onClick:()=>i(["canada","ontario"]),children:"Set to Ontario"}),a.jsx("button",{onClick:()=>i([]),children:"Clear"})]})]})},args:{options:c},parameters:{docs:{description:{story:"Controlled cascader with external state management."}}}},be=[{value:"active-dept",label:"Active Department",children:[{value:"team1",label:"Team 1"},{value:"team2",label:"Team 2",disabled:!0},{value:"team3",label:"Team 3"}]},{value:"disabled-dept",label:"Disabled Department",disabled:!0,children:[{value:"team4",label:"Team 4"},{value:"team5",label:"Team 5"}]},{value:"another-dept",label:"Another Department",children:[{value:"team6",label:"Team 6"},{value:"team7",label:"Team 7"}]}],B={args:{options:be,placeholder:"Some options are disabled..."},parameters:{docs:{description:{story:"Cascader with some disabled options that cannot be selected."}}}},H={args:{options:[{value:"level1",label:"Level 1",children:[{value:"level2",label:"Level 2",children:[{value:"level3",label:"Level 3",children:[{value:"level4",label:"Level 4",children:[{value:"level5a",label:"Level 5 Option A"},{value:"level5b",label:"Level 5 Option B"},{value:"level5c",label:"Level 5 Option C"}]}]}]}]}],placeholder:"Deep nesting example...",changeOnSelect:!0},parameters:{docs:{description:{story:"Cascader with deep nesting (5 levels) to test scrolling and layout. You can select at any level without going all the way to level 5."}}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    options: locationOptions,
    placeholder: 'Select location...',
    changeOnSelect: true
  }
}`,...T.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    options: locationOptions,
    defaultValue: ['usa', 'california', 'san-francisco'],
    placeholder: 'Select location...',
    changeOnSelect: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Cascader with a pre-selected default value path.'
      }
    }
  }
}`,...V.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cascader-demo">\r
      <div className="cascader-demo__section">\r
        <h4>Small</h4>\r
        <Cascader options={locationOptions} size="small" placeholder="Small cascader..." changeOnSelect={true} />\r
      </div>\r
      \r
      <div className="cascader-demo__section">\r
        <h4>Default</h4>\r
        <Cascader options={locationOptions} size="default" placeholder="Default cascader..." changeOnSelect={true} />\r
      </div>\r
      \r
      <div className="cascader-demo__section">\r
        <h4>Large</h4>\r
        <Cascader options={locationOptions} size="large" placeholder="Large cascader..." changeOnSelect={true} />\r
      </div>\r
    </div>,
  args: {
    options: locationOptions
  },
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the cascader input.'
      }
    }
  }
}`,...L.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    options: locationOptions,
    showSearch: true,
    placeholder: 'Search locations...',
    changeOnSelect: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Cascader with search functionality. Type to filter options across all levels.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    options: locationOptions,
    changeOnSelect: true,
    placeholder: 'Select any level...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Cascader that triggers onChange when selecting any level, not just leaf nodes. Click "New York" and it will immediately select "United States / New York".'
      }
    }
  }
}`,...E.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    options: locationOptions,
    expandTrigger: 'hover',
    placeholder: 'Hover to expand...',
    changeOnSelect: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Cascader that expands menus on hover instead of click.'
      }
    }
  }
}`,...q.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    options: locationOptions,
    allowClear: true,
    defaultValue: ['usa', 'california'],
    placeholder: 'With clear button...',
    changeOnSelect: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Cascader with clear button to reset the selection.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    options: locationOptions,
    disabled: true,
    defaultValue: ['usa', 'california', 'san-francisco'],
    placeholder: 'Disabled cascader...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled cascader input.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    options: organizationOptions,
    displayRender: (labels, selectedOptions) => {
      return \`\${selectedOptions.map(opt => opt.label).join(' → ')} (\${selectedOptions.length} levels)\`;
    },
    placeholder: 'Select department...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Cascader with custom display rendering for selected values.'
      }
    }
  }
}`,...W.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<CascaderOption[]>([]);
    return <div className="cascader-controlled">\r
        <div className="cascader-controlled__section">\r
          <Cascader options={locationOptions} value={value} onChange={(val, options) => {
          setValue(val);
          setSelectedOptions(options);
        }} placeholder="Controlled cascader..." allowClear />\r
        </div>\r
        \r
        <div className="cascader-controlled__info">\r
          <div><strong>Selected Value:</strong> [{value.join(', ')}]</div>\r
          <div><strong>Selected Path:</strong> {selectedOptions.map(opt => opt.label).join(' / ') || '(none)'}</div>\r
        </div>\r
        \r
        <div className="cascader-controlled__buttons">\r
          <button onClick={() => setValue(['usa', 'california', 'san-francisco'])}>\r
            Set to San Francisco\r
          </button>\r
          <button onClick={() => setValue(['canada', 'ontario'])}>\r
            Set to Ontario\r
          </button>\r
          <button onClick={() => setValue([])}>\r
            Clear\r
          </button>\r
        </div>\r
      </div>;
  },
  args: {
    options: locationOptions
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled cascader with external state management.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    options: withDisabledOptions,
    placeholder: 'Some options are disabled...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Cascader with some disabled options that cannot be selected.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'level1',
      label: 'Level 1',
      children: [{
        value: 'level2',
        label: 'Level 2',
        children: [{
          value: 'level3',
          label: 'Level 3',
          children: [{
            value: 'level4',
            label: 'Level 4',
            children: [{
              value: 'level5a',
              label: 'Level 5 Option A'
            }, {
              value: 'level5b',
              label: 'Level 5 Option B'
            }, {
              value: 'level5c',
              label: 'Level 5 Option C'
            }]
          }]
        }]
      }]
    }],
    placeholder: 'Deep nesting example...',
    changeOnSelect: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Cascader with deep nesting (5 levels) to test scrolling and layout. You can select at any level without going all the way to level 5.'
      }
    }
  }
}`,...H.parameters?.docs?.source}}};const Oe=["Default","WithDefaultValue","Sizes","WithSearch","ChangeOnSelect","HoverExpand","WithClearButton","Disabled","CustomDisplayRender","Controlled","WithDisabledOptions","DeepNesting"];export{E as ChangeOnSelect,R as Controlled,W as CustomDisplayRender,H as DeepNesting,T as Default,P as Disabled,q as HoverExpand,L as Sizes,z as WithClearButton,V as WithDefaultValue,B as WithDisabledOptions,A as WithSearch,Oe as __namedExportsOrder,ye as default};
