import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as n,R as G}from"./index-GiUgBvb1.js";const m=({options:r=[],value:d,onChange:u,multiple:b=!1,disabled:l=!1,size:Ke="md",maxHeight:I="200px",searchable:y=!1,searchPlaceholder:Ge="Search options...",showDescriptions:Ue=!0,showIcons:$e=!0,emptyMessage:Je="No options available",loading:w=!1,error:f,className:Ze="","aria-label":Qe,"aria-labelledby":Xe,filterFunction:F,autoFocus:S=!1,style:Ye})=>{const[c,K]=n.useState(""),[o,p]=n.useState(S?0:-1),es=n.useRef(null),v=n.useRef(null),P=n.useRef([]),i=G.useMemo(()=>c?F?r.filter(s=>F(s,c)):r.filter(s=>s.label.toLowerCase().includes(c.toLowerCase())||s.description&&s.description.toLowerCase().includes(c.toLowerCase())):r,[r,c,F]),j=G.useMemo(()=>d==null?[]:Array.isArray(d)?d:[d],[d]),k=n.useCallback(s=>j.includes(s),[j]),H=n.useCallback(s=>{if(l)return;const t=r.find(x=>x.value===s);if(t!=null&&t.disabled)return;let g;if(b){const x=j;x.includes(s)?g=x.filter(is=>is!==s):g=[...x,s]}else g=s;u==null||u(g)},[l,r,b,j,u]),ss=n.useCallback(s=>{if(!(l||i.length===0))switch(s.key){case"ArrowDown":s.preventDefault(),p(t=>t<i.length-1?t+1:0);break;case"ArrowUp":s.preventDefault(),p(t=>t>0?t-1:i.length-1);break;case"Home":s.preventDefault(),p(0);break;case"End":s.preventDefault(),p(i.length-1);break;case"Enter":case" ":s.preventDefault(),o>=0&&o<i.length&&H(i[o].value);break;case"Escape":y&&v.current&&v.current.blur();break}},[l,i,o,H,y]),rs=s=>{K(s.target.value),p(0)},as=()=>{K(""),p(S?0:-1),v.current&&v.current.focus()};n.useEffect(()=>{var s;o>=0&&P.current[o]&&((s=P.current[o])==null||s.scrollIntoView({block:"nearest",inline:"nearest"}))},[o]),n.useEffect(()=>{S&&i.length>0&&o===-1&&p(0)},[S,i.length,o]);const ts=["listbox",`listbox--${Ke}`,l&&"listbox--disabled",w&&"listbox--loading",f&&"listbox--error",y&&"listbox--searchable",Ze].filter(Boolean).join(" "),os=typeof I=="number"?`${I}px`:I;return e.jsxs("div",{className:ts,style:Ye,"data-testid":"listbox",children:[y&&e.jsx("div",{className:"listbox__search",children:e.jsxs("div",{className:"listbox__search-wrapper",children:[e.jsx("input",{ref:v,type:"text",className:"listbox__search-input",placeholder:Ge,value:c,onChange:rs,disabled:l,"aria-label":"Search options"}),e.jsx("div",{className:"listbox__search-icon","aria-hidden":"true",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M13 13L15 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}),c&&e.jsx("button",{type:"button",className:"listbox__search-clear",onClick:as,"aria-label":"Clear search",disabled:l,children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]})}),e.jsxs("div",{ref:es,className:"listbox__container","data-max-height":os,role:"listbox","aria-label":Qe,"aria-labelledby":Xe,"aria-multiselectable":b?"true":"false","aria-disabled":l?"true":"false",tabIndex:l?void 0:0,onKeyDown:ss,children:[w&&e.jsxs("div",{className:"listbox__loading",role:"status","aria-live":"polite",children:[e.jsxs("div",{className:"listbox__spinner","aria-hidden":"true",children:[e.jsx("div",{className:"listbox__spinner-dot"}),e.jsx("div",{className:"listbox__spinner-dot"}),e.jsx("div",{className:"listbox__spinner-dot"})]}),e.jsx("span",{children:"Loading options..."})]}),f&&e.jsxs("div",{className:"listbox__error",role:"alert",children:[e.jsxs("svg",{className:"listbox__error-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M8 4V8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("path",{d:"M8 12H8.01",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),f]}),!w&&!f&&i.length===0&&e.jsx("div",{className:"listbox__empty",role:"status",children:c?`No results found for "${c}"`:Je}),!w&&!f&&i.map((s,t)=>e.jsxs("div",{ref:g=>P.current[t]=g,className:["listbox__option",k(s.value)&&"listbox__option--selected",s.disabled&&"listbox__option--disabled",o===t&&"listbox__option--focused"].filter(Boolean).join(" "),role:"option","aria-selected":k(s.value)?"true":"false","aria-disabled":s.disabled?"true":"false",onClick:()=>H(s.value),"data-value":s.value,children:[b&&e.jsx("div",{className:"listbox__checkbox","aria-hidden":"true",children:e.jsx("input",{type:"checkbox",checked:k(s.value),disabled:s.disabled,readOnly:!0,tabIndex:-1})}),$e&&s.icon&&e.jsx("div",{className:"listbox__option-icon","aria-hidden":"true",children:s.icon}),e.jsxs("div",{className:"listbox__option-content",children:[e.jsx("div",{className:"listbox__option-label",children:s.label}),Ue&&s.description&&e.jsx("div",{className:"listbox__option-description",children:s.description})]}),!b&&k(s.value)&&e.jsx("div",{className:"listbox__selected-indicator","aria-hidden":"true",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M13 4L6 11L3 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]},s.value))]})]})};m.__docgenInfo={description:"",methods:[],displayName:"ListBox",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"ListBoxOption"}],raw:"ListBoxOption[]"},description:"Array of options to display",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | number | (string | number)[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"}]},description:"Currently selected value(s)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number | (string | number)[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | number | (string | number)[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"}]},name:"value"}],return:{name:"void"}}},description:"Callback when selection changes"},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple selection is allowed",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the listbox is disabled",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum height before scrolling",defaultValue:{value:"'200px'",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"Whether to show search functionality",defaultValue:{value:"false",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"Search placeholder text",defaultValue:{value:"'Search options...'",computed:!1}},showDescriptions:{required:!1,tsType:{name:"boolean"},description:"Whether to show option descriptions",defaultValue:{value:"true",computed:!1}},showIcons:{required:!1,tsType:{name:"boolean"},description:"Whether to show option icons",defaultValue:{value:"true",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No options available'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"Error state"},className:{required:!1,tsType:{name:"string"},description:"Custom CSS class",defaultValue:{value:"''",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for the listbox"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelledby reference"},filterFunction:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: ListBoxOption, searchTerm: string) => boolean",signature:{arguments:[{type:{name:"ListBoxOption"},name:"option"},{type:{name:"string"},name:"searchTerm"}],return:{name:"boolean"}}},description:"Custom filter function for search"},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight the first option by default",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"}}};const h=[{value:"apple",label:"Apple",description:"A crisp, sweet fruit"},{value:"banana",label:"Banana",description:"A curved yellow fruit"},{value:"orange",label:"Orange",description:"A citrus fruit"},{value:"grape",label:"Grape",description:"Small round fruits in clusters"},{value:"strawberry",label:"Strawberry",description:"Sweet red berries",disabled:!0},{value:"mango",label:"Mango",description:"Tropical sweet fruit"},{value:"pineapple",label:"Pineapple",description:"Tropical spiky fruit"},{value:"watermelon",label:"Watermelon",description:"Large juicy fruit"}],He=[{value:"us",label:"United States",description:"North America"},{value:"ca",label:"Canada",description:"North America"},{value:"uk",label:"United Kingdom",description:"Europe"},{value:"de",label:"Germany",description:"Europe"},{value:"fr",label:"France",description:"Europe"},{value:"jp",label:"Japan",description:"Asia"},{value:"au",label:"Australia",description:"Oceania"},{value:"br",label:"Brazil",description:"South America"}],ns=[{value:"active",label:"Active",description:"Currently active and available",icon:e.jsx("div",{className:"status-icon status-icon--active"})},{value:"inactive",label:"Inactive",description:"Currently inactive",icon:e.jsx("div",{className:"status-icon status-icon--inactive"})},{value:"pending",label:"Pending",description:"Awaiting approval",icon:e.jsx("div",{className:"status-icon status-icon--pending"})},{value:"suspended",label:"Suspended",description:"Temporarily suspended",icon:e.jsx("div",{className:"status-icon status-icon--suspended"}),disabled:!0}],ds={title:"Atoms/ListBox",component:m,parameters:{layout:"padded",docs:{description:{component:`
ListBox is a versatile selection component that displays a list of options with full keyboard navigation and accessibility support.

**Key Features:**
- Single and multiple selection modes
- Keyboard navigation (Arrow keys, Home, End, Enter, Space)
- Search functionality with custom filtering
- Loading and error states
- Option icons and descriptions
- Size variants (sm, md, lg)
- Full accessibility with ARIA attributes
- Custom styling and theming support
        `}}},argTypes:{options:{control:{type:"object"},description:"Array of options to display"},value:{control:{type:"text"},description:"Currently selected value(s)"},multiple:{control:{type:"boolean"},description:"Allow multiple selection"},disabled:{control:{type:"boolean"},description:"Disable the entire listbox"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size variant"},maxHeight:{control:{type:"text"},description:"Maximum height before scrolling"},searchable:{control:{type:"boolean"},description:"Enable search functionality"},searchPlaceholder:{control:{type:"text"},description:"Search input placeholder"},showDescriptions:{control:{type:"boolean"},description:"Show option descriptions"},showIcons:{control:{type:"boolean"},description:"Show option icons"},loading:{control:{type:"boolean"},description:"Show loading state"},error:{control:{type:"text"},description:"Error message to display"},emptyMessage:{control:{type:"text"},description:"Message when no options available"},autoFocus:{control:{type:"boolean"},description:"Auto-focus first option"}},args:{options:h,multiple:!1,disabled:!1,size:"md",maxHeight:"200px",searchable:!1,showDescriptions:!0,showIcons:!0,loading:!1,emptyMessage:"No options available",autoFocus:!1}},a={args:{onChange:r=>{console.log("Selection changed:",r)}}},N={args:{...a.args,value:"apple"},parameters:{docs:{description:{story:"Single selection mode with pre-selected value."}}}},L={args:{...a.args,multiple:!0,value:["apple","orange"]},parameters:{docs:{description:{story:"Multiple selection mode with checkboxes."}}}},C={args:{...a.args,searchable:!0,searchPlaceholder:"Search fruits..."},parameters:{docs:{description:{story:"ListBox with search functionality to filter options."}}}},_={args:{...a.args,options:ns,showIcons:!0,value:"active"},parameters:{docs:{description:{story:"ListBox with custom icons for each option."}}}},B={render:()=>e.jsx("div",{className:"listbox-story-wrapper",children:e.jsxs("div",{className:"size-variants-demo",children:[e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Small Size"}),e.jsx(m,{options:h.slice(0,4),size:"sm",onChange:r=>console.log("Small:",r)})]}),e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Medium Size (Default)"}),e.jsx(m,{options:h.slice(0,4),size:"md",onChange:r=>console.log("Medium:",r)})]}),e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Large Size"}),e.jsx(m,{options:h.slice(0,4),size:"lg",onChange:r=>console.log("Large:",r)})]})]})}),parameters:{docs:{description:{story:"Different size variants of the ListBox component."}}}},D={args:{...a.args,loading:!0,options:[]},parameters:{docs:{description:{story:"ListBox in loading state with animated spinner."}}}},A={args:{...a.args,error:"Failed to load options. Please try again.",options:[]},parameters:{docs:{description:{story:"ListBox displaying an error message."}}}},z={args:{...a.args,options:[],emptyMessage:"No fruits available"},parameters:{docs:{description:{story:"ListBox with no options and custom empty message."}}}},E={args:{...a.args,disabled:!0,value:"apple"},parameters:{docs:{description:{story:"ListBox in disabled state."}}}},M={args:{...a.args,showDescriptions:!1},parameters:{docs:{description:{story:"ListBox without option descriptions for a cleaner look."}}}},T={args:{...a.args,maxHeight:"150px",options:[...h,...He]},parameters:{docs:{description:{story:"ListBox with custom maximum height and scrolling."}}}},O={args:{...a.args,multiple:!0,searchable:!0,searchPlaceholder:"Search countries...",options:He,value:["us","ca"]},parameters:{docs:{description:{story:"Combination of multiple selection and search functionality."}}}},R={args:{...a.args,autoFocus:!0,options:h.slice(0,5)},parameters:{docs:{description:{story:"ListBox with auto-focus on the first option for keyboard users."}}}},W={render:()=>e.jsx("div",{className:"listbox-story-wrapper",children:e.jsxs("div",{className:"keyboard-demo",children:[e.jsx("h3",{children:"Keyboard Navigation Demo"}),e.jsx("p",{children:"Use these keyboard shortcuts to navigate:"}),e.jsxs("ul",{className:"keyboard-shortcuts",children:[e.jsxs("li",{children:[e.jsx("kbd",{children:"↑"})," ",e.jsx("kbd",{children:"↓"})," - Navigate up/down"]}),e.jsxs("li",{children:[e.jsx("kbd",{children:"Home"})," - Go to first option"]}),e.jsxs("li",{children:[e.jsx("kbd",{children:"End"})," - Go to last option"]}),e.jsxs("li",{children:[e.jsx("kbd",{children:"Enter"})," ",e.jsx("kbd",{children:"Space"})," - Select option"]}),e.jsxs("li",{children:[e.jsx("kbd",{children:"Escape"})," - Clear search (if searchable)"]})]}),e.jsx(m,{options:h,searchable:!0,autoFocus:!0,onChange:r=>console.log("Keyboard selection:",r)})]})}),parameters:{docs:{description:{story:"Demonstration of keyboard navigation capabilities."}}}},q={args:{...a.args,searchable:!0,searchPlaceholder:"Search by name or description...",filterFunction:(r,d)=>{const u=d.toLowerCase();return r.label.toLowerCase().includes(u)||r.description&&r.description.toLowerCase().includes(u)||r.value.toString().toLowerCase().includes(u)}},parameters:{docs:{description:{story:"ListBox with custom filter function that searches multiple fields."}}}},V={render:()=>e.jsx("div",{className:"listbox-story-wrapper",children:e.jsxs("div",{className:"real-world-demo",children:[e.jsx("h3",{children:"User Role Selection"}),e.jsx("p",{children:"Select one or more roles for the user:"}),e.jsx(m,{options:[{value:"admin",label:"Administrator",description:"Full system access and user management",icon:e.jsx("div",{className:"role-icon role-icon--admin",children:"👑"})},{value:"editor",label:"Editor",description:"Can create, edit, and publish content",icon:e.jsx("div",{className:"role-icon role-icon--editor",children:"✏️"})},{value:"author",label:"Author",description:"Can create and edit own content",icon:e.jsx("div",{className:"role-icon role-icon--author",children:"📝"})},{value:"viewer",label:"Viewer",description:"Read-only access to content",icon:e.jsx("div",{className:"role-icon role-icon--viewer",children:"👁️"})},{value:"guest",label:"Guest",description:"Limited temporary access",icon:e.jsx("div",{className:"role-icon role-icon--guest",children:"👤"}),disabled:!0}],multiple:!0,searchable:!0,searchPlaceholder:"Search roles...",value:["editor"],size:"lg",maxHeight:"250px",onChange:r=>{console.log("Selected roles:",r)}})]})}),parameters:{docs:{description:{story:"Real-world example of a role selection interface."}}}};var U,$,J;a.parameters={...a.parameters,docs:{...(U=a.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    onChange: value => {
      console.log('Selection changed:', value);
    }
  }
}`,...(J=($=a.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Z,Q,X;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'apple'
  },
  parameters: {
    docs: {
      description: {
        story: 'Single selection mode with pre-selected value.'
      }
    }
  }
}`,...(X=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,se;L.parameters={...L.parameters,docs:{...(Y=L.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    multiple: true,
    value: ['apple', 'orange']
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple selection mode with checkboxes.'
      }
    }
  }
}`,...(se=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var re,ae,te;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    searchable: true,
    searchPlaceholder: 'Search fruits...'
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox with search functionality to filter options.'
      }
    }
  }
}`,...(te=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,ie,ne;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: statusOptions,
    showIcons: true,
    value: 'active'
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox with custom icons for each option.'
      }
    }
  }
}`,...(ne=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var le,ce,de;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="listbox-story-wrapper">\r
      <div className="size-variants-demo">\r
        <div className="size-example">\r
          <h3>Small Size</h3>\r
          <ListBox options={fruitOptions.slice(0, 4)} size="sm" onChange={value => console.log('Small:', value)} />\r
        </div>\r
        \r
        <div className="size-example">\r
          <h3>Medium Size (Default)</h3>\r
          <ListBox options={fruitOptions.slice(0, 4)} size="md" onChange={value => console.log('Medium:', value)} />\r
        </div>\r
        \r
        <div className="size-example">\r
          <h3>Large Size</h3>\r
          <ListBox options={fruitOptions.slice(0, 4)} size="lg" onChange={value => console.log('Large:', value)} />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the ListBox component.'
      }
    }
  }
}`,...(de=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,me;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    options: []
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox in loading state with animated spinner.'
      }
    }
  }
}`,...(me=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,ge,be;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: 'Failed to load options. Please try again.',
    options: []
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox displaying an error message.'
      }
    }
  }
}`,...(be=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var fe,ve,xe;z.parameters={...z.parameters,docs:{...(fe=z.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: [],
    emptyMessage: 'No fruits available'
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox with no options and custom empty message.'
      }
    }
  }
}`,...(xe=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var ye,we,Se;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    value: 'apple'
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox in disabled state.'
      }
    }
  }
}`,...(Se=(we=E.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var je,ke,Ne;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showDescriptions: false
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox without option descriptions for a cleaner look.'
      }
    }
  }
}`,...(Ne=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:Ne.source}}};var Le,Ce,_e;T.parameters={...T.parameters,docs:{...(Le=T.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxHeight: '150px',
    options: [...fruitOptions, ...countryOptions]
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox with custom maximum height and scrolling.'
      }
    }
  }
}`,...(_e=(Ce=T.parameters)==null?void 0:Ce.docs)==null?void 0:_e.source}}};var Be,De,Ae;O.parameters={...O.parameters,docs:{...(Be=O.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    multiple: true,
    searchable: true,
    searchPlaceholder: 'Search countries...',
    options: countryOptions,
    value: ['us', 'ca']
  },
  parameters: {
    docs: {
      description: {
        story: 'Combination of multiple selection and search functionality.'
      }
    }
  }
}`,...(Ae=(De=O.parameters)==null?void 0:De.docs)==null?void 0:Ae.source}}};var ze,Ee,Me;R.parameters={...R.parameters,docs:{...(ze=R.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    autoFocus: true,
    options: fruitOptions.slice(0, 5)
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox with auto-focus on the first option for keyboard users.'
      }
    }
  }
}`,...(Me=(Ee=R.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source}}};var Te,Oe,Re;W.parameters={...W.parameters,docs:{...(Te=W.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <div className="listbox-story-wrapper">\r
      <div className="keyboard-demo">\r
        <h3>Keyboard Navigation Demo</h3>\r
        <p>Use these keyboard shortcuts to navigate:</p>\r
        <ul className="keyboard-shortcuts">\r
          <li><kbd>↑</kbd> <kbd>↓</kbd> - Navigate up/down</li>\r
          <li><kbd>Home</kbd> - Go to first option</li>\r
          <li><kbd>End</kbd> - Go to last option</li>\r
          <li><kbd>Enter</kbd> <kbd>Space</kbd> - Select option</li>\r
          <li><kbd>Escape</kbd> - Clear search (if searchable)</li>\r
        </ul>\r
        \r
        <ListBox options={fruitOptions} searchable autoFocus onChange={value => console.log('Keyboard selection:', value)} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of keyboard navigation capabilities.'
      }
    }
  }
}`,...(Re=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:Re.source}}};var We,qe,Ve;q.parameters={...q.parameters,docs:{...(We=q.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    searchable: true,
    searchPlaceholder: 'Search by name or description...',
    filterFunction: (option, searchTerm) => {
      const term = searchTerm.toLowerCase();
      return option.label.toLowerCase().includes(term) || option.description && option.description.toLowerCase().includes(term) || option.value.toString().toLowerCase().includes(term);
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox with custom filter function that searches multiple fields.'
      }
    }
  }
}`,...(Ve=(qe=q.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};var Ie,Fe,Pe;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div className="listbox-story-wrapper">\r
      <div className="real-world-demo">\r
        <h3>User Role Selection</h3>\r
        <p>Select one or more roles for the user:</p>\r
        \r
        <ListBox options={[{
        value: 'admin',
        label: 'Administrator',
        description: 'Full system access and user management',
        icon: <div className="role-icon role-icon--admin">👑</div>
      }, {
        value: 'editor',
        label: 'Editor',
        description: 'Can create, edit, and publish content',
        icon: <div className="role-icon role-icon--editor">✏️</div>
      }, {
        value: 'author',
        label: 'Author',
        description: 'Can create and edit own content',
        icon: <div className="role-icon role-icon--author">📝</div>
      }, {
        value: 'viewer',
        label: 'Viewer',
        description: 'Read-only access to content',
        icon: <div className="role-icon role-icon--viewer">👁️</div>
      }, {
        value: 'guest',
        label: 'Guest',
        description: 'Limited temporary access',
        icon: <div className="role-icon role-icon--guest">👤</div>,
        disabled: true
      }]} multiple searchable searchPlaceholder="Search roles..." value={['editor']} size="lg" maxHeight="250px" onChange={value => {
        console.log('Selected roles:', value);
      }} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Real-world example of a role selection interface.'
      }
    }
  }
}`,...(Pe=(Fe=V.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};const us=["Default","SingleSelection","MultipleSelection","WithSearch","WithIcons","SizeVariants","LoadingState","ErrorState","EmptyState","DisabledState","WithoutDescriptions","CustomMaxHeight","SearchableMultiple","AutoFocused","KeyboardNavigation","CustomFiltering","RealWorldExample"];export{R as AutoFocused,q as CustomFiltering,T as CustomMaxHeight,a as Default,E as DisabledState,z as EmptyState,A as ErrorState,W as KeyboardNavigation,D as LoadingState,L as MultipleSelection,V as RealWorldExample,O as SearchableMultiple,N as SingleSelection,B as SizeVariants,_ as WithIcons,C as WithSearch,M as WithoutDescriptions,us as __namedExportsOrder,ds as default};
