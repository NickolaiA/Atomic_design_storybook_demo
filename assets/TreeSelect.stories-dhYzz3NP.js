import{r as s,j as a}from"./iframe-CY-Mz7KS.js";import"./preload-helper-PPVm8Dsz.js";const S=({value:i,defaultValue:o,treeData:u,multiple:t=!1,checkable:h=!1,searchable:J=!1,placeholder:w="Please select",disabled:g=!1,size:U="default",showArrow:ce=!0,allowClear:ie=!1,maxTagCount:X=3,titleRender:G,tagRender:Y,filterTreeNode:Z,onChange:D,onSearch:ee,onDropdownVisibleChange:ae,className:ue="",style:ye})=>{const[de,te]=s.useState(o||(t?[]:"")),[v,pe]=s.useState(""),[f,I]=s.useState(!1),[re,me]=s.useState(new Set),K=s.useRef(null),H=s.useRef(null),b=i!==void 0?i:de,y=Array.isArray(b)?b:[b].filter(Boolean),le=s.useMemo(()=>{const e=new Map,l=(r,c)=>{r.forEach(d=>{e.set(d.value,{...d,parent:c}),d.children&&l(d.children,d)})};return l(u),e},[u]),m=s.useMemo(()=>y.map(e=>le.get(e)).filter(Boolean),[y,le]),se=s.useMemo(()=>{if(!v)return u;const l=Z||((c,d)=>d.title.toLowerCase().includes(c.toLowerCase())),r=c=>c.reduce((d,p)=>{const Se=l(v,p),Q=p.children?r(p.children):[];return(Se||Q.length>0)&&d.push({...p,children:Q.length>0?Q:p.children}),d},[]);return r(u)},[u,v,Z]),N=s.useCallback(e=>{if(g||e.disabled||e.selectable===!1)return;let l,r;if(t){const c=Array.isArray(b)?b:[];c.includes(e.value)?(l=c.filter(p=>p!==e.value),r=m.filter(p=>p.value!==e.value)):(l=[...c,e.value],r=[...m,e])}else l=e.value,r=[e],I(!1);i===void 0&&te(l),D?.(l,r)},[g,t,b,m,i,D]),ne=s.useCallback(e=>{me(l=>{const r=new Set(l);return r.has(e)?r.delete(e):r.add(e),r})},[]),he=s.useCallback(e=>{pe(e),ee?.(e)},[ee]),ge=s.useCallback(()=>{const e=t?[]:"";i===void 0&&te(e),D?.(e,[])},[t,i,D]),fe=s.useCallback(()=>{if(g)return;const e=!f;I(e),ae?.(e)},[g,f,ae]);s.useEffect(()=>{const e=l=>{K.current&&!K.current.contains(l.target)&&H.current&&!H.current.contains(l.target)&&I(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const oe=s.useCallback((e,l=0)=>{const r=y.includes(e.value),c=re.has(e.value),d=e.children&&e.children.length>0;return a.jsxs("div",{className:"tree-select__node",children:[a.jsxs("div",{className:`tree-select__node-content tree-select__node-content--level-${l} ${r?"tree-select__node-content--selected":""} ${e.disabled?"tree-select__node-content--disabled":""}`,onClick:()=>N(e),role:"treeitem","aria-selected":r?"true":"false","aria-disabled":e.disabled?"true":"false","data-level":l,"data-selected":r,"data-disabled":e.disabled,children:[d&&a.jsx("button",{className:`tree-select__expand-button ${c?"tree-select__expand-button--expanded":""}`,onClick:p=>{p.stopPropagation(),ne(e.value)},"aria-label":c?"Collapse":"Expand","data-expanded":c,children:"▶"}),!d&&a.jsx("div",{className:"tree-select__expand-spacer"}),h&&t&&a.jsx("input",{type:"checkbox",checked:r,onChange:()=>N(e),className:"tree-select__checkbox",tabIndex:-1,"aria-label":`Select ${e.title}`}),a.jsx("span",{className:"tree-select__node-title",children:G?G(e):e.title})]}),d&&c&&a.jsx("div",{className:"tree-select__children",children:e.children.map(p=>oe(p,l+1))})]},e.value)},[y,re,h,t,G,N,ne]),be=()=>{if(!t||m.length===0)return null;const e=m.slice(0,X),l=m.length-X;return a.jsxs("div",{className:"tree-select__tags",children:[e.map(r=>a.jsxs("div",{className:"tree-select__tag",children:[Y?Y(r):r.title,a.jsx("button",{className:"tree-select__tag-close",onClick:c=>{c.stopPropagation(),N(r)},"aria-label":`Remove ${r.title}`,children:"×"})]},r.value)),l>0&&a.jsxs("div",{className:"tree-select__tag tree-select__tag--more",children:["+",l]})]})},ve=()=>t?be():m.length>0?a.jsx("span",{className:"tree-select__single-value",children:m[0].title}):a.jsx("span",{className:"tree-select__placeholder",children:w});return a.jsxs("div",{className:"tree-select-wrapper",children:[a.jsxs("div",{ref:K,className:`tree-select tree-select--${U} ${g?"tree-select--disabled":""} ${f?"tree-select--open":""} ${ue}`,onClick:fe,role:"combobox","aria-expanded":f,"aria-haspopup":"tree","aria-disabled":g,"aria-controls":"tree-select-dropdown","aria-label":"Tree select",tabIndex:g?-1:0,"data-size":U,"data-disabled":g,"data-open":f,"data-multiple":t,"data-searchable":J,children:[a.jsx("div",{className:"tree-select__selection",children:ve()}),a.jsxs("div",{className:"tree-select__actions",children:[ie&&m.length>0&&a.jsx("button",{className:"tree-select__clear",onClick:e=>{e.stopPropagation(),ge()},"aria-label":"Clear selection",children:"×"}),ce&&a.jsx("div",{className:`tree-select__arrow ${f?"tree-select__arrow--open":""}`,children:"▼"})]})]}),f&&a.jsxs("div",{ref:H,id:"tree-select-dropdown",className:"tree-select__dropdown",role:"tree","aria-multiselectable":t?"true":"false","aria-label":"Tree options",children:[J&&a.jsx("div",{className:"tree-select__search",children:a.jsx("input",{type:"text",className:"tree-select__search-input",placeholder:"Search...",value:v,onChange:e=>he(e.target.value),autoFocus:!0})}),a.jsx("div",{className:"tree-select__tree",children:se.length>0?se.map(e=>oe(e)):a.jsx("div",{className:"tree-select__empty",children:v?"No matching results":"No data"})})]})]})};S.__docgenInfo={description:"",methods:[],displayName:"TreeSelect",props:{value:{required:!1,tsType:{name:"union",raw:"string | number | (string | number)[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"}]},description:"Current selected value(s)"},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number | (string | number)[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"}]},description:"Default selected value(s) for uncontrolled mode"},treeData:{required:!0,tsType:{name:"Array",elements:[{name:"TreeSelectNode"}],raw:"TreeSelectNode[]"},description:"Tree data"},multiple:{required:!1,tsType:{name:"boolean"},description:"Allow multiple selection",defaultValue:{value:"false",computed:!1}},checkable:{required:!1,tsType:{name:"boolean"},description:"Show checkbox for multiple selection",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"Allow searching through tree nodes",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Please select'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size of the component",defaultValue:{value:"'default'",computed:!1}},showArrow:{required:!1,tsType:{name:"boolean"},description:"Whether to show the dropdown arrow",defaultValue:{value:"true",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Allow clearing selection",defaultValue:{value:"false",computed:!1}},maxTagCount:{required:!1,tsType:{name:"number"},description:"Maximum number of items to show in selection",defaultValue:{value:"3",computed:!1}},titleRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: TreeSelectNode) => React.ReactNode",signature:{arguments:[{type:{name:"TreeSelectNode"},name:"node"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"Custom render function for tree nodes"},tagRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: TreeSelectNode) => React.ReactNode",signature:{arguments:[{type:{name:"TreeSelectNode"},name:"node"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"Custom render function for selected tags"},filterTreeNode:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string, treeNode: TreeSelectNode) => boolean",signature:{arguments:[{type:{name:"string"},name:"inputValue"},{type:{name:"TreeSelectNode"},name:"treeNode"}],return:{name:"boolean"}}},description:"Filter function for search"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number | (string | number)[], selectedNodes: TreeSelectNode[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | number | (string | number)[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"}]},name:"value"},{type:{name:"Array",elements:[{name:"TreeSelectNode"}],raw:"TreeSelectNode[]"},name:"selectedNodes"}],return:{name:"void"}}},description:"Callback when selection changes"},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when search input changes"},onDropdownVisibleChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when dropdown opens/closes"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"}}};const Te={title:"Atoms/TreeSelect",component:S,parameters:{layout:"centered",docs:{description:{component:"A tree select component that allows hierarchical selection of items with search functionality."}}},tags:["autodocs"],argTypes:{value:{control:"object",description:"Current selected value(s)"},defaultValue:{control:"object",description:"Default selected value(s) for uncontrolled mode"},multiple:{control:"boolean",description:"Allow multiple selection"},checkable:{control:"boolean",description:"Show checkbox for multiple selection"},searchable:{control:"boolean",description:"Allow searching through tree nodes"},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Disabled state"},size:{control:"select",options:["small","default","large"],description:"Size of the component"},showArrow:{control:"boolean",description:"Whether to show the dropdown arrow"},allowClear:{control:"boolean",description:"Allow clearing selection"},maxTagCount:{control:"number",description:"Maximum number of items to show in selection"}}},n=[{value:"fruits",title:"Fruits",children:[{value:"apple",title:"Apple",children:[{value:"fuji",title:"Fuji"},{value:"gala",title:"Gala"}]},{value:"banana",title:"Banana"},{value:"orange",title:"Orange"}]},{value:"vegetables",title:"Vegetables",children:[{value:"carrot",title:"Carrot"},{value:"broccoli",title:"Broccoli"},{value:"leafy",title:"Leafy Greens",children:[{value:"spinach",title:"Spinach"},{value:"lettuce",title:"Lettuce"},{value:"kale",title:"Kale"}]}]},{value:"grains",title:"Grains",children:[{value:"rice",title:"Rice"},{value:"wheat",title:"Wheat"},{value:"oats",title:"Oats"}]}],C={args:{treeData:n,placeholder:"Select an item"}},T={args:{treeData:n,defaultValue:"apple",placeholder:"Select an item"}},x={args:{treeData:n,multiple:!0,placeholder:"Select multiple items"}},_={args:{treeData:n,multiple:!0,checkable:!0,placeholder:"Select items"}},V={args:{treeData:n,searchable:!0,placeholder:"Search and select"}},j={args:{treeData:n,multiple:!0,searchable:!0,checkable:!0,placeholder:"Search and select multiple"}},k={args:{treeData:n,defaultValue:"apple",allowClear:!0,placeholder:"Select an item"}},A={args:{treeData:n,size:"small",placeholder:"Small size"}},z={args:{treeData:n,size:"default",placeholder:"Default size"}},q={args:{treeData:n,size:"large",placeholder:"Large size"}},R={args:{treeData:n,defaultValue:"apple",disabled:!0,placeholder:"Disabled"}},$={args:{treeData:n,defaultValue:["apple","banana","carrot"],multiple:!0,disabled:!0,placeholder:"Disabled multiple"}},L={args:{treeData:n,defaultValue:["apple","banana","carrot","broccoli","rice"],multiple:!0,maxTagCount:2,placeholder:"Max 2 tags shown"}},M={args:{treeData:n,showArrow:!1,placeholder:"No arrow"}},we=[{value:"fruits",title:"Fruits",children:[{value:"apple",title:"Apple (Disabled)",disabled:!0},{value:"banana",title:"Banana"},{value:"orange",title:"Orange"}]},{value:"vegetables",title:"Vegetables (All Disabled)",disabled:!0,children:[{value:"carrot",title:"Carrot"},{value:"broccoli",title:"Broccoli"}]}],W={args:{treeData:we,placeholder:"Some nodes disabled"}},De=()=>["Category A","Category B","Category C","Category D"].map((o,u)=>({value:`cat-${u}`,title:o,children:Array.from({length:5},(t,h)=>({value:`cat-${u}-sub-${h}`,title:`${o} - Item ${h+1}`,children:Array.from({length:3},(J,w)=>({value:`cat-${u}-sub-${h}-item-${w}`,title:`Sub Item ${w+1}`}))}))})),O={args:{treeData:De(),searchable:!0,placeholder:"Search large tree"}},E={render:i=>{const[o,u]=s.useState("apple");return a.jsxs("div",{className:"treeselect-story-container",children:[a.jsx(S,{...i,value:o,onChange:t=>{u(t),console.log("Selected:",t)}}),a.jsxs("div",{className:"treeselect-story-info",children:["Selected: ",a.jsx("strong",{children:JSON.stringify(o)})]})]})},args:{treeData:n,placeholder:"Controlled component"}},F={render:i=>{const[o,u]=s.useState(["apple","banana"]);return a.jsxs("div",{className:"treeselect-story-container--large",children:[a.jsx(S,{...i,value:o,onChange:t=>{u(t),console.log("Selected:",t)}}),a.jsxs("div",{className:"treeselect-story-info",children:["Selected: ",a.jsx("strong",{children:JSON.stringify(o)})]})]})},args:{treeData:n,multiple:!0,checkable:!0,placeholder:"Controlled multiple"}},B={args:{treeData:n,searchable:!0,filterTreeNode:(i,o)=>o.title.toLowerCase().includes(i.toLowerCase()),placeholder:"Custom filter (case insensitive)"}},P={render:i=>{const[o,u]=s.useState([]);return a.jsxs("div",{className:"treeselect-story-container--large",children:[a.jsx(S,{...i,value:o,onChange:(t,h)=>{u(t),console.log("Selected values:",t),console.log("Selected nodes:",h)},onSearch:t=>{console.log("Search:",t)},onDropdownVisibleChange:t=>{console.log("Dropdown open:",t)}}),a.jsxs("div",{className:"treeselect-story-info",children:[a.jsxs("div",{children:["Selected Values: ",a.jsx("strong",{children:o.length})]}),a.jsx("div",{className:"treeselect-story-selected-list",children:o.map(t=>a.jsxs("div",{className:"treeselect-story-selected-item",children:["• ",t]},t))})]})]})},args:{treeData:n,multiple:!0,checkable:!0,searchable:!0,allowClear:!0,maxTagCount:3,size:"default",placeholder:"All features enabled"}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    placeholder: 'Select an item'
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    defaultValue: 'apple',
    placeholder: 'Select an item'
  }
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    multiple: true,
    placeholder: 'Select multiple items'
  }
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    multiple: true,
    checkable: true,
    placeholder: 'Select items'
  }
}`,..._.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    searchable: true,
    placeholder: 'Search and select'
  }
}`,...V.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    multiple: true,
    searchable: true,
    checkable: true,
    placeholder: 'Search and select multiple'
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    defaultValue: 'apple',
    allowClear: true,
    placeholder: 'Select an item'
  }
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    size: 'small',
    placeholder: 'Small size'
  }
}`,...A.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    size: 'default',
    placeholder: 'Default size'
  }
}`,...z.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    size: 'large',
    placeholder: 'Large size'
  }
}`,...q.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    defaultValue: 'apple',
    disabled: true,
    placeholder: 'Disabled'
  }
}`,...R.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    defaultValue: ['apple', 'banana', 'carrot'],
    multiple: true,
    disabled: true,
    placeholder: 'Disabled multiple'
  }
}`,...$.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    defaultValue: ['apple', 'banana', 'carrot', 'broccoli', 'rice'],
    multiple: true,
    maxTagCount: 2,
    placeholder: 'Max 2 tags shown'
  }
}`,...L.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    showArrow: false,
    placeholder: 'No arrow'
  }
}`,...M.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: treeDataWithDisabled,
    placeholder: 'Some nodes disabled'
  }
}`,...W.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: generateLargeTree(),
    searchable: true,
    placeholder: 'Search large tree'
  }
}`,...O.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | (string | number)[]>('apple');
    return <div className="treeselect-story-container">\r
        <TreeSelect {...args} value={value} onChange={newValue => {
        setValue(newValue);
        console.log('Selected:', newValue);
      }} />\r
        <div className="treeselect-story-info">\r
          Selected: <strong>{JSON.stringify(value)}</strong>\r
        </div>\r
      </div>;
  },
  args: {
    treeData: sampleTreeData,
    placeholder: 'Controlled component'
  }
}`,...E.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<(string | number)[]>(['apple', 'banana']);
    return <div className="treeselect-story-container--large">\r
        <TreeSelect {...args} value={value} onChange={newValue => {
        setValue(newValue as (string | number)[]);
        console.log('Selected:', newValue);
      }} />\r
        <div className="treeselect-story-info">\r
          Selected: <strong>{JSON.stringify(value)}</strong>\r
        </div>\r
      </div>;
  },
  args: {
    treeData: sampleTreeData,
    multiple: true,
    checkable: true,
    placeholder: 'Controlled multiple'
  }
}`,...F.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    treeData: sampleTreeData,
    searchable: true,
    filterTreeNode: (inputValue, treeNode) => {
      return treeNode.title.toLowerCase().includes(inputValue.toLowerCase());
    },
    placeholder: 'Custom filter (case insensitive)'
  }
}`,...B.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<(string | number)[]>([]);
    return <div className="treeselect-story-container--large">\r
        <TreeSelect {...args} value={value} onChange={(newValue, selectedNodes) => {
        setValue(newValue as (string | number)[]);
        console.log('Selected values:', newValue);
        console.log('Selected nodes:', selectedNodes);
      }} onSearch={searchValue => {
        console.log('Search:', searchValue);
      }} onDropdownVisibleChange={open => {
        console.log('Dropdown open:', open);
      }} />\r
        <div className="treeselect-story-info">\r
          <div>Selected Values: <strong>{value.length}</strong></div>\r
          <div className="treeselect-story-selected-list">\r
            {value.map(v => <div key={v} className="treeselect-story-selected-item">• {v}</div>)}\r
          </div>\r
        </div>\r
      </div>;
  },
  args: {
    treeData: sampleTreeData,
    multiple: true,
    checkable: true,
    searchable: true,
    allowClear: true,
    maxTagCount: 3,
    size: 'default',
    placeholder: 'All features enabled'
  }
}`,...P.parameters?.docs?.source}}};const xe=["Default","WithDefaultValue","MultipleSelection","WithCheckboxes","Searchable","SearchableMultiple","WithClearButton","SmallSize","DefaultSize","LargeSize","Disabled","DisabledMultiple","MaxTagCount","WithoutArrow","WithDisabledNodes","LargeTreeData","Controlled","ControlledMultiple","CustomFilter","AllFeatures"];export{P as AllFeatures,E as Controlled,F as ControlledMultiple,B as CustomFilter,C as Default,z as DefaultSize,R as Disabled,$ as DisabledMultiple,q as LargeSize,O as LargeTreeData,L as MaxTagCount,x as MultipleSelection,V as Searchable,j as SearchableMultiple,A as SmallSize,_ as WithCheckboxes,k as WithClearButton,T as WithDefaultValue,W as WithDisabledNodes,M as WithoutArrow,xe as __namedExportsOrder,Te as default};
