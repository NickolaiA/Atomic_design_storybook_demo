import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as n,R as $}from"./index-GiUgBvb1.js";const a=({options:s=[],value:i,onChange:r,multiple:x=!1,disabled:p=!1,size:ts="md",height:m="md",maxHeight:b,searchable:j=!1,searchPlaceholder:rs="Search options...",showDescriptions:as=!0,showIcons:os=!0,emptyMessage:is="No options available",loading:w=!1,error:f,className:ls="","aria-label":ns,"aria-labelledby":cs,filterFunction:I,autoFocus:C=!1,style:X})=>{const[h,J]=n.useState(""),[d,g]=n.useState(C?0:-1),ds=n.useRef(null),y=n.useRef(null),K=n.useRef([]),u=$.useMemo(()=>h?I?s.filter(t=>I(t,h)):s.filter(t=>t.label.toLowerCase().includes(h.toLowerCase())||t.description&&t.description.toLowerCase().includes(h.toLowerCase())):s,[s,h,I]),N=$.useMemo(()=>i==null?[]:Array.isArray(i)?i:[i],[i]),k=n.useCallback(t=>N.includes(t),[N]),G=n.useCallback(t=>{if(p)return;const l=s.find(S=>S.value===t);if(l!=null&&l.disabled)return;let v;if(x){const S=N;S.includes(t)?v=S.filter(vs=>vs!==t):v=[...S,t]}else v=t;r==null||r(v)},[p,s,x,N,r]),us=n.useCallback(t=>{if(!(p||u.length===0))switch(t.key){case"ArrowDown":t.preventDefault(),g(l=>l<u.length-1?l+1:0);break;case"ArrowUp":t.preventDefault(),g(l=>l>0?l-1:u.length-1);break;case"Home":t.preventDefault(),g(0);break;case"End":t.preventDefault(),g(u.length-1);break;case"Enter":case" ":t.preventDefault(),d>=0&&d<u.length&&G(u[d].value);break;case"Escape":j&&y.current&&y.current.blur();break}},[p,u,d,G,j]),ps=t=>{J(t.target.value),g(0)},hs=()=>{J(""),g(C?0:-1),y.current&&y.current.focus()};n.useEffect(()=>{var t;d>=0&&K.current[d]&&((t=K.current[d])==null||t.scrollIntoView({block:"nearest",inline:"nearest"}))},[d]),n.useEffect(()=>{C&&u.length>0&&d===-1&&g(0)},[C,u.length,d]);const Z=m&&["xs","sm","md","lg","xl","full"].includes(m),ms=["listbox",`listbox--${ts}`,Z&&`listbox--height-${m}`,p&&"listbox--disabled",w&&"listbox--loading",f&&"listbox--error",j&&"listbox--searchable",ls].filter(Boolean).join(" "),gs=$.useMemo(()=>{const t={...X};if(m&&!Z){const l=typeof m=="number"?`${m}px`:m;t["--listbox-max-height"]=l}if(b){const l=typeof b=="number"?`${b}px`:b;t["--listbox-max-height"]=l}return t},[X,b]);return e.jsxs("div",{className:ms,style:gs,"data-testid":"listbox",children:[j&&e.jsx("div",{className:"listbox__search",children:e.jsxs("div",{className:"listbox__search-wrapper",children:[e.jsx("input",{ref:y,type:"text",className:"listbox__search-input",placeholder:rs,value:h,onChange:ps,disabled:p,"aria-label":"Search options"}),e.jsx("div",{className:"listbox__search-icon","aria-hidden":"true",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M13 13L15 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}),h&&e.jsx("button",{type:"button",className:"listbox__search-clear",onClick:hs,"aria-label":"Clear search",disabled:p,children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]})}),e.jsxs("div",{ref:ds,className:"listbox__container",role:"listbox","aria-label":ns,"aria-labelledby":cs,"aria-multiselectable":x?"true":"false","aria-disabled":p?"true":"false",tabIndex:p?void 0:0,onKeyDown:us,children:[w&&e.jsxs("div",{className:"listbox__loading",role:"status","aria-live":"polite",children:[e.jsxs("div",{className:"listbox__spinner","aria-hidden":"true",children:[e.jsx("div",{className:"listbox__spinner-dot"}),e.jsx("div",{className:"listbox__spinner-dot"}),e.jsx("div",{className:"listbox__spinner-dot"})]}),e.jsx("span",{children:"Loading options..."})]}),f&&e.jsxs("div",{className:"listbox__error",role:"alert",children:[e.jsxs("svg",{className:"listbox__error-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[e.jsx("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"2"}),e.jsx("path",{d:"M8 4V8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e.jsx("path",{d:"M8 12H8.01",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),f]}),!w&&!f&&u.length===0&&e.jsx("div",{className:"listbox__empty",role:"status",children:h?`No results found for "${h}"`:is}),!w&&!f&&u.map((t,l)=>e.jsxs("div",{ref:v=>K.current[l]=v,className:["listbox__option",k(t.value)&&"listbox__option--selected",t.disabled&&"listbox__option--disabled",d===l&&"listbox__option--focused"].filter(Boolean).join(" "),role:"option","aria-selected":k(t.value)?"true":"false","aria-disabled":t.disabled?"true":"false",onClick:()=>G(t.value),"data-value":t.value,children:[x&&e.jsx("div",{className:"listbox__checkbox","aria-hidden":"true",children:e.jsx("input",{type:"checkbox",checked:k(t.value),disabled:t.disabled,readOnly:!0,tabIndex:-1})}),os&&t.icon&&e.jsx("div",{className:"listbox__option-icon","aria-hidden":"true",children:t.icon}),e.jsxs("div",{className:"listbox__option-content",children:[e.jsx("div",{className:"listbox__option-label",children:t.label}),as&&t.description&&e.jsx("div",{className:"listbox__option-description",children:t.description})]}),!x&&k(t.value)&&e.jsx("div",{className:"listbox__selected-indicator","aria-hidden":"true",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M13 4L6 11L3 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]},t.value))]})]})};a.__docgenInfo={description:"",methods:[],displayName:"ListBox",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"ListBoxOption"}],raw:"ListBoxOption[]"},description:"Array of options to display",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | number | (string | number)[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"}]},description:"Currently selected value(s)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number | (string | number)[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | number | (string | number)[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"}]},name:"value"}],return:{name:"void"}}},description:"Callback when selection changes"},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple selection is allowed",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the listbox is disabled",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | string | number",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"},{name:"string"},{name:"number"}]},description:"Height variant (predefined sizes) or custom pixel value",defaultValue:{value:"'md'",computed:!1}},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum height before scrolling (deprecated - use height prop instead)"},searchable:{required:!1,tsType:{name:"boolean"},description:"Whether to show search functionality",defaultValue:{value:"false",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"Search placeholder text",defaultValue:{value:"'Search options...'",computed:!1}},showDescriptions:{required:!1,tsType:{name:"boolean"},description:"Whether to show option descriptions",defaultValue:{value:"true",computed:!1}},showIcons:{required:!1,tsType:{name:"boolean"},description:"Whether to show option icons",defaultValue:{value:"true",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No options available'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"Error state"},className:{required:!1,tsType:{name:"string"},description:"Custom CSS class",defaultValue:{value:"''",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for the listbox"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelledby reference"},filterFunction:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: ListBoxOption, searchTerm: string) => boolean",signature:{arguments:[{type:{name:"ListBoxOption"},name:"option"},{type:{name:"string"},name:"searchTerm"}],return:{name:"boolean"}}},description:"Custom filter function for search"},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Whether to highlight the first option by default",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"}}};const o=[{value:"apple",label:"Apple",description:"A crisp, sweet fruit"},{value:"banana",label:"Banana",description:"A curved yellow fruit"},{value:"orange",label:"Orange",description:"A citrus fruit"},{value:"grape",label:"Grape",description:"Small round fruits in clusters"},{value:"strawberry",label:"Strawberry",description:"Sweet red berries",disabled:!0},{value:"mango",label:"Mango",description:"Tropical sweet fruit"},{value:"pineapple",label:"Pineapple",description:"Tropical spiky fruit"},{value:"watermelon",label:"Watermelon",description:"Large juicy fruit"}],ss=[{value:"us",label:"United States",description:"North America"},{value:"ca",label:"Canada",description:"North America"},{value:"uk",label:"United Kingdom",description:"Europe"},{value:"de",label:"Germany",description:"Europe"},{value:"fr",label:"France",description:"Europe"},{value:"jp",label:"Japan",description:"Asia"},{value:"au",label:"Australia",description:"Oceania"},{value:"br",label:"Brazil",description:"South America"}],xs=[{value:"active",label:"Active",description:"Currently active and available",icon:e.jsx("div",{className:"status-icon status-icon--active"})},{value:"inactive",label:"Inactive",description:"Currently inactive",icon:e.jsx("div",{className:"status-icon status-icon--inactive"})},{value:"pending",label:"Pending",description:"Awaiting approval",icon:e.jsx("div",{className:"status-icon status-icon--pending"})},{value:"suspended",label:"Suspended",description:"Temporarily suspended",icon:e.jsx("div",{className:"status-icon status-icon--suspended"}),disabled:!0}],ys={title:"Atoms/ListBox",component:a,parameters:{layout:"padded",docs:{description:{component:`
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
        `}}},argTypes:{options:{control:{type:"object"},description:"Array of options to display"},value:{control:{type:"text"},description:"Currently selected value(s)"},multiple:{control:{type:"boolean"},description:"Allow multiple selection"},disabled:{control:{type:"boolean"},description:"Disable the entire listbox"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size variant"},maxHeight:{control:{type:"text"},description:"Maximum height before scrolling"},searchable:{control:{type:"boolean"},description:"Enable search functionality"},searchPlaceholder:{control:{type:"text"},description:"Search input placeholder"},showDescriptions:{control:{type:"boolean"},description:"Show option descriptions"},showIcons:{control:{type:"boolean"},description:"Show option icons"},loading:{control:{type:"boolean"},description:"Show loading state"},error:{control:{type:"text"},description:"Error message to display"},emptyMessage:{control:{type:"text"},description:"Message when no options available"},autoFocus:{control:{type:"boolean"},description:"Auto-focus first option"}},args:{options:o,multiple:!1,disabled:!1,size:"md",maxHeight:"200px",searchable:!1,showDescriptions:!0,showIcons:!0,loading:!1,emptyMessage:"No options available",autoFocus:!1}},c={render:()=>{const[s,i]=n.useState(void 0);return e.jsxs("div",{className:"storybook-demo",children:[e.jsx("h3",{children:"Default ListBox"}),e.jsxs("p",{children:["Selected: ",s||"None"]}),e.jsx(a,{options:o,value:s,onChange:r=>{i(r),console.log("Default selection changed:",r)}})]})}},L={render:()=>{const[s,i]=n.useState("apple");return e.jsxs("div",{className:"storybook-demo",children:[e.jsx("h3",{children:"Single Selection"}),e.jsxs("p",{children:["Selected: ",s]}),e.jsx(a,{options:o,value:s,onChange:r=>{i(r),console.log("Single selection changed:",r)}})]})},parameters:{docs:{description:{story:"Single selection mode with pre-selected value. Click options to change selection."}}}},V={render:()=>{const[s,i]=n.useState(["apple","orange"]);return e.jsxs("div",{className:"storybook-demo",children:[e.jsx("h3",{children:"Multiple Selection"}),e.jsxs("p",{children:["Selected: ",s.length>0?s.join(", "):"None"]}),e.jsx(a,{options:o,multiple:!0,value:s,onChange:r=>{i(r),console.log("Multiple selection changed:",r)}})]})},parameters:{docs:{description:{story:"Multiple selection mode with checkboxes. Click options to select/unselect them."}}}},B={render:()=>{const[s,i]=n.useState("banana");return e.jsxs("div",{className:"storybook-demo",children:[e.jsx("h3",{children:"With Search"}),e.jsxs("p",{children:["Selected: ",s]}),e.jsx(a,{options:o,searchable:!0,searchPlaceholder:"Search fruits...",value:s,onChange:r=>{i(r),console.log("Search selection changed:",r)}})]})},parameters:{docs:{description:{story:"ListBox with search functionality to filter options. Type to search and click to select."}}}},_={args:{...c.args,options:xs,showIcons:!0,value:"active"},parameters:{docs:{description:{story:"ListBox with custom icons for each option."}}}},D={render:()=>e.jsx("div",{className:"listbox-story-wrapper",children:e.jsxs("div",{className:"size-variants-demo",children:[e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Small Size"}),e.jsx(a,{options:o.slice(0,4),size:"sm",onChange:s=>console.log("Small:",s)})]}),e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Medium Size (Default)"}),e.jsx(a,{options:o.slice(0,4),size:"md",onChange:s=>console.log("Medium:",s)})]}),e.jsxs("div",{className:"size-example",children:[e.jsx("h3",{children:"Large Size"}),e.jsx(a,{options:o.slice(0,4),size:"lg",onChange:s=>console.log("Large:",s)})]})]})}),parameters:{docs:{description:{story:"Different size variants of the ListBox component."}}}},M={args:{...c.args,loading:!0,options:[]},parameters:{docs:{description:{story:"ListBox in loading state with animated spinner."}}}},A={args:{...c.args,error:"Failed to load options. Please try again.",options:[]},parameters:{docs:{description:{story:"ListBox displaying an error message."}}}},H={args:{...c.args,options:[],emptyMessage:"No fruits available"},parameters:{docs:{description:{story:"ListBox with no options and custom empty message."}}}},T={args:{...c.args,disabled:!0,value:"apple"},parameters:{docs:{description:{story:"ListBox in disabled state."}}}},O={args:{...c.args,showDescriptions:!1},parameters:{docs:{description:{story:"ListBox without option descriptions for a cleaner look."}}}},E={args:{...c.args,maxHeight:"150px",options:[...o,...ss]},parameters:{docs:{description:{story:"ListBox with custom maximum height and scrolling."}}}},z={render:()=>{const[s,i]=n.useState(["us","ca"]);return e.jsxs("div",{className:"storybook-demo",children:[e.jsx("h3",{children:"Searchable Multiple Selection"}),e.jsxs("p",{children:["Selected: ",s.length>0?s.join(", "):"None"]}),e.jsx(a,{options:ss,multiple:!0,searchable:!0,searchPlaceholder:"Search countries...",value:s,onChange:r=>{i(r),console.log("Searchable multiple selection changed:",r)}})]})},parameters:{docs:{description:{story:"Combination of multiple selection and search functionality. Search and click to select/unselect countries."}}}},W={render:()=>{const[s,i]=n.useState(void 0);return e.jsxs("div",{className:"storybook-demo",children:[e.jsx("h3",{children:"Auto-Focused ListBox"}),e.jsxs("p",{children:["Selected: ",s||"None"]}),e.jsx("p",{children:e.jsx("em",{children:"The first option should be automatically focused when this story loads."})}),e.jsx(a,{options:o.slice(0,5),autoFocus:!0,value:s,onChange:r=>{i(r),console.log("Auto-focused selection changed:",r)}})]})},parameters:{docs:{description:{story:"ListBox with auto-focus on the first option for keyboard users. Use arrow keys to navigate and Enter to select."}}}},F={render:()=>e.jsx("div",{className:"listbox-story-wrapper",children:e.jsxs("div",{className:"keyboard-demo",children:[e.jsx("h3",{children:"Keyboard Navigation Demo"}),e.jsx("p",{children:"Use these keyboard shortcuts to navigate:"}),e.jsxs("ul",{className:"keyboard-shortcuts",children:[e.jsxs("li",{children:[e.jsx("kbd",{children:"↑"})," ",e.jsx("kbd",{children:"↓"})," - Navigate up/down"]}),e.jsxs("li",{children:[e.jsx("kbd",{children:"Home"})," - Go to first option"]}),e.jsxs("li",{children:[e.jsx("kbd",{children:"End"})," - Go to last option"]}),e.jsxs("li",{children:[e.jsx("kbd",{children:"Enter"})," ",e.jsx("kbd",{children:"Space"})," - Select option"]}),e.jsxs("li",{children:[e.jsx("kbd",{children:"Escape"})," - Clear search (if searchable)"]})]}),e.jsx(a,{options:o,searchable:!0,autoFocus:!0,onChange:s=>console.log("Keyboard selection:",s)})]})}),parameters:{docs:{description:{story:"Demonstration of keyboard navigation capabilities."}}}},R={args:{...c.args,searchable:!0,searchPlaceholder:"Search by name or description...",filterFunction:(s,i)=>{const r=i.toLowerCase();return s.label.toLowerCase().includes(r)||s.description&&s.description.toLowerCase().includes(r)||s.value.toString().toLowerCase().includes(r)}},parameters:{docs:{description:{story:"ListBox with custom filter function that searches multiple fields."}}}},q={render:()=>e.jsx("div",{className:"listbox-story-wrapper",children:e.jsxs("div",{className:"real-world-demo",children:[e.jsx("h3",{children:"User Role Selection"}),e.jsx("p",{children:"Select one or more roles for the user:"}),e.jsx(a,{options:[{value:"admin",label:"Administrator",description:"Full system access and user management",icon:e.jsx("div",{className:"role-icon role-icon--admin",children:"👑"})},{value:"editor",label:"Editor",description:"Can create, edit, and publish content",icon:e.jsx("div",{className:"role-icon role-icon--editor",children:"✏️"})},{value:"author",label:"Author",description:"Can create and edit own content",icon:e.jsx("div",{className:"role-icon role-icon--author",children:"📝"})},{value:"viewer",label:"Viewer",description:"Read-only access to content",icon:e.jsx("div",{className:"role-icon role-icon--viewer",children:"👁️"})},{value:"guest",label:"Guest",description:"Limited temporary access",icon:e.jsx("div",{className:"role-icon role-icon--guest",children:"👤"}),disabled:!0}],multiple:!0,searchable:!0,searchPlaceholder:"Search roles...",value:["editor"],size:"lg",maxHeight:"250px",onChange:s=>{console.log("Selected roles:",s)}})]})}),parameters:{docs:{description:{story:"Real-world example of a role selection interface."}}}},P={render:()=>e.jsxs("div",{className:"storybook-demo",children:[e.jsx("h3",{children:"Height Variants"}),e.jsxs("div",{className:"height-variants-grid",children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Extra Small (xs)"}),e.jsx(a,{options:o,height:"xs",value:"apple",onChange:s=>console.log("XS selected:",s)})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Small (sm)"}),e.jsx(a,{options:o,height:"sm",value:"banana",onChange:s=>console.log("SM selected:",s)})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Medium (md)"}),e.jsx(a,{options:o,height:"md",value:"orange",onChange:s=>console.log("MD selected:",s)})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large (lg)"}),e.jsx(a,{options:o,height:"lg",value:"grape",onChange:s=>console.log("LG selected:",s)})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Extra Large (xl)"}),e.jsx(a,{options:o,height:"xl",value:"mango",onChange:s=>console.log("XL selected:",s)})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Full Height"}),e.jsx("div",{className:"height-variants-container",children:e.jsx(a,{options:o,height:"full",value:"pineapple",onChange:s=>console.log("Full selected:",s)})})]})]})]}),parameters:{docs:{description:{story:'Different height variants using the `height` prop. Use predefined sizes (xs, sm, md, lg, xl) or "full" to fill the parent container.'}}}},U={render:()=>e.jsxs("div",{className:"storybook-demo",children:[e.jsx("h3",{children:"Custom Height Values"}),e.jsxs("div",{className:"custom-height-grid",children:[e.jsxs("div",{children:[e.jsx("h4",{children:'Height as String ("150px")'}),e.jsx(a,{options:o,height:"150px",multiple:!0,searchable:!0,value:["apple","banana"],onChange:s=>console.log("Custom 150px selected:",s)})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Height as Number (180)"}),e.jsx(a,{options:o,height:180,value:"orange",onChange:s=>console.log("Custom 180px selected:",s)})]})]}),e.jsxs("div",{className:"custom-height-section",children:[e.jsx("h4",{children:"Height with Different Units"}),e.jsxs("div",{className:"custom-height-grid",children:[e.jsxs("div",{children:[e.jsxs("p",{children:["Using ",e.jsx("code",{children:'height="10em"'}),":"]}),e.jsx(a,{options:o,height:"10em",searchable:!0,searchPlaceholder:"Search fruits...",value:"grape",onChange:s=>console.log("10em selected:",s)})]}),e.jsxs("div",{children:[e.jsxs("p",{children:["Using ",e.jsx("code",{children:'height="25vh"'}),":"]}),e.jsx(a,{options:o,height:"25vh",multiple:!0,value:["mango","pineapple"],onChange:s=>console.log("25vh selected:",s)})]})]})]}),e.jsxs("div",{className:"custom-height-section",children:[e.jsx("h4",{children:"Backward Compatibility"}),e.jsxs("p",{children:["The old ",e.jsx("code",{children:"maxHeight"})," prop still works (deprecated):"]}),e.jsx(a,{options:o,maxHeight:"120px",searchable:!0,searchPlaceholder:"Using deprecated maxHeight prop...",value:"watermelon",onChange:s=>console.log("Deprecated maxHeight selected:",s)})]})]}),parameters:{docs:{description:{story:'Use the `height` prop with custom values for precise control. Supports string values with units (e.g., "150px", "10em", "25vh") and numbers (converted to pixels). The old `maxHeight` prop is still supported for backward compatibility.'}}}};var Q,Y,ee;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number | undefined>(undefined);
    return <div className="storybook-demo">\r
        <h3>Default ListBox</h3>\r
        <p>Selected: {selectedValue || 'None'}</p>\r
        <ListBox options={fruitOptions} value={selectedValue} onChange={value => {
        setSelectedValue(value as string | number);
        console.log('Default selection changed:', value);
      }} />\r
      </div>;
  }
}`,...(ee=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var se,te,re;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number>('apple');
    return <div className="storybook-demo">\r
        <h3>Single Selection</h3>\r
        <p>Selected: {selectedValue}</p>\r
        <ListBox options={fruitOptions} value={selectedValue} onChange={value => {
        setSelectedValue(value as string | number);
        console.log('Single selection changed:', value);
      }} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Single selection mode with pre-selected value. Click options to change selection.'
      }
    }
  }
}`,...(re=(te=L.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,oe,ie;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues, setSelectedValues] = useState<(string | number)[]>(['apple', 'orange']);
    return <div className="storybook-demo">\r
        <h3>Multiple Selection</h3>\r
        <p>Selected: {selectedValues.length > 0 ? selectedValues.join(', ') : 'None'}</p>\r
        <ListBox options={fruitOptions} multiple value={selectedValues} onChange={value => {
        setSelectedValues(value as (string | number)[]);
        console.log('Multiple selection changed:', value);
      }} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple selection mode with checkboxes. Click options to select/unselect them.'
      }
    }
  }
}`,...(ie=(oe=V.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ne,ce;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number>('banana');
    return <div className="storybook-demo">\r
        <h3>With Search</h3>\r
        <p>Selected: {selectedValue}</p>\r
        <ListBox options={fruitOptions} searchable searchPlaceholder="Search fruits..." value={selectedValue} onChange={value => {
        setSelectedValue(value as string | number);
        console.log('Search selection changed:', value);
      }} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox with search functionality to filter options. Type to search and click to select.'
      }
    }
  }
}`,...(ce=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var de,ue,pe;_.parameters={..._.parameters,docs:{...(de=_.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ue=_.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var he,me,ge;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ge=(me=D.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ve,xe,be;M.parameters={...M.parameters,docs:{...(ve=M.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(be=(xe=M.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var fe,ye,Se;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Se=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var je,we,Ce;H.parameters={...H.parameters,docs:{...(je=H.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ce=(we=H.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var Ne,ke,Le;T.parameters={...T.parameters,docs:{...(Ne=T.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Le=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:Le.source}}};var Ve,Be,_e;O.parameters={...O.parameters,docs:{...(Ve=O.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(_e=(Be=O.parameters)==null?void 0:Be.docs)==null?void 0:_e.source}}};var De,Me,Ae;E.parameters={...E.parameters,docs:{...(De=E.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ae=(Me=E.parameters)==null?void 0:Me.docs)==null?void 0:Ae.source}}};var He,Te,Oe;z.parameters={...z.parameters,docs:{...(He=z.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues, setSelectedValues] = useState<(string | number)[]>(['us', 'ca']);
    return <div className="storybook-demo">\r
        <h3>Searchable Multiple Selection</h3>\r
        <p>Selected: {selectedValues.length > 0 ? selectedValues.join(', ') : 'None'}</p>\r
        <ListBox options={countryOptions} multiple searchable searchPlaceholder="Search countries..." value={selectedValues} onChange={value => {
        setSelectedValues(value as (string | number)[]);
        console.log('Searchable multiple selection changed:', value);
      }} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Combination of multiple selection and search functionality. Search and click to select/unselect countries.'
      }
    }
  }
}`,...(Oe=(Te=z.parameters)==null?void 0:Te.docs)==null?void 0:Oe.source}}};var Ee,ze,We;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number | undefined>(undefined);
    return <div className="storybook-demo">\r
        <h3>Auto-Focused ListBox</h3>\r
        <p>Selected: {selectedValue || 'None'}</p>\r
        <p><em>The first option should be automatically focused when this story loads.</em></p>\r
        <ListBox options={fruitOptions.slice(0, 5)} autoFocus value={selectedValue} onChange={value => {
        setSelectedValue(value as string | number);
        console.log('Auto-focused selection changed:', value);
      }} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'ListBox with auto-focus on the first option for keyboard users. Use arrow keys to navigate and Enter to select.'
      }
    }
  }
}`,...(We=(ze=W.parameters)==null?void 0:ze.docs)==null?void 0:We.source}}};var Fe,Re,qe;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(qe=(Re=F.parameters)==null?void 0:Re.docs)==null?void 0:qe.source}}};var Pe,Ue,Ie;R.parameters={...R.parameters,docs:{...(Pe=R.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ie=(Ue=R.parameters)==null?void 0:Ue.docs)==null?void 0:Ie.source}}};var Ke,Ge,$e;q.parameters={...q.parameters,docs:{...(Ke=q.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...($e=(Ge=q.parameters)==null?void 0:Ge.docs)==null?void 0:$e.source}}};var Xe,Je,Ze;P.parameters={...P.parameters,docs:{...(Xe=P.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => <div className="storybook-demo">\r
      <h3>Height Variants</h3>\r
      <div className="height-variants-grid">\r
        <div>\r
          <h4>Extra Small (xs)</h4>\r
          <ListBox options={fruitOptions} height="xs" value="apple" onChange={value => console.log('XS selected:', value)} />\r
        </div>\r
        \r
        <div>\r
          <h4>Small (sm)</h4>\r
          <ListBox options={fruitOptions} height="sm" value="banana" onChange={value => console.log('SM selected:', value)} />\r
        </div>\r
        \r
        <div>\r
          <h4>Medium (md)</h4>\r
          <ListBox options={fruitOptions} height="md" value="orange" onChange={value => console.log('MD selected:', value)} />\r
        </div>\r
        \r
        <div>\r
          <h4>Large (lg)</h4>\r
          <ListBox options={fruitOptions} height="lg" value="grape" onChange={value => console.log('LG selected:', value)} />\r
        </div>\r
        \r
        <div>\r
          <h4>Extra Large (xl)</h4>\r
          <ListBox options={fruitOptions} height="xl" value="mango" onChange={value => console.log('XL selected:', value)} />\r
        </div>\r
        \r
        <div>\r
          <h4>Full Height</h4>\r
          <div className="height-variants-container">\r
            <ListBox options={fruitOptions} height="full" value="pineapple" onChange={value => console.log('Full selected:', value)} />\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different height variants using the \`height\` prop. Use predefined sizes (xs, sm, md, lg, xl) or "full" to fill the parent container.'
      }
    }
  }
}`,...(Ze=(Je=P.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};var Qe,Ye,es;U.parameters={...U.parameters,docs:{...(Qe=U.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: () => <div className="storybook-demo">\r
      <h3>Custom Height Values</h3>\r
      <div className="custom-height-grid">\r
        <div>\r
          <h4>Height as String ("150px")</h4>\r
          <ListBox options={fruitOptions} height="150px" multiple searchable value={['apple', 'banana']} onChange={value => console.log('Custom 150px selected:', value)} />\r
        </div>\r
        \r
        <div>\r
          <h4>Height as Number (180)</h4>\r
          <ListBox options={fruitOptions} height={180} value="orange" onChange={value => console.log('Custom 180px selected:', value)} />\r
        </div>\r
      </div>\r
      \r
      <div className="custom-height-section">\r
        <h4>Height with Different Units</h4>\r
        <div className="custom-height-grid">\r
          <div>\r
            <p>Using <code>height="10em"</code>:</p>\r
            <ListBox options={fruitOptions} height="10em" searchable searchPlaceholder="Search fruits..." value="grape" onChange={value => console.log('10em selected:', value)} />\r
          </div>\r
          \r
          <div>\r
            <p>Using <code>height="25vh"</code>:</p>\r
            <ListBox options={fruitOptions} height="25vh" multiple value={['mango', 'pineapple']} onChange={value => console.log('25vh selected:', value)} />\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div className="custom-height-section">\r
        <h4>Backward Compatibility</h4>\r
        <p>The old <code>maxHeight</code> prop still works (deprecated):</p>\r
        <ListBox options={fruitOptions} maxHeight="120px" searchable searchPlaceholder="Using deprecated maxHeight prop..." value="watermelon" onChange={value => console.log('Deprecated maxHeight selected:', value)} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use the \`height\` prop with custom values for precise control. Supports string values with units (e.g., "150px", "10em", "25vh") and numbers (converted to pixels). The old \`maxHeight\` prop is still supported for backward compatibility.'
      }
    }
  }
}`,...(es=(Ye=U.parameters)==null?void 0:Ye.docs)==null?void 0:es.source}}};const Ss=["Default","SingleSelection","MultipleSelection","WithSearch","WithIcons","SizeVariants","LoadingState","ErrorState","EmptyState","DisabledState","WithoutDescriptions","CustomMaxHeight","SearchableMultiple","AutoFocused","KeyboardNavigation","CustomFiltering","RealWorldExample","HeightVariants","CustomHeightValues"];export{W as AutoFocused,R as CustomFiltering,U as CustomHeightValues,E as CustomMaxHeight,c as Default,T as DisabledState,H as EmptyState,A as ErrorState,P as HeightVariants,F as KeyboardNavigation,M as LoadingState,V as MultipleSelection,q as RealWorldExample,z as SearchableMultiple,L as SingleSelection,D as SizeVariants,_ as WithIcons,B as WithSearch,O as WithoutDescriptions,Ss as __namedExportsOrder,ys as default};
